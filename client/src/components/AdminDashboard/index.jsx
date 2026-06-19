import { Link } from "react-router-dom";
import {
  UsersIcon,
  ShoppingBagIcon,
  CubeIcon,
  RectangleGroupIcon,
  StarIcon,
  Cog6ToothIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  AreaChart,
  Area,
} from "recharts";

import Loader from "@components/Loader";
import Alert from "@components/Alert";

import { useGetUsersQuery } from "@slices/userApiSlice";
import { useGetOrdersQuery } from "@slices/orderApiSlice";
import { useGetProductsQuery } from "@slices/productApiSlice";

const COLORS = ["#232466", "#EF5622"];

const userGrowthData = [
  { month: "Jan", users: 10 },
  { month: "Feb", users: 18 },
  { month: "Mar", users: 25 },
  { month: "Apr", users: 40 },
  { month: "May", users: 58 },
  { month: "Jun", users: 75 },
];

const AdminDashboard = () => {
  const {
    data: users = [],
    isLoading: loadingUsers,
    error: usersError,
  } = useGetUsersQuery();

  const {
    data: orders = [],
    isLoading: loadingOrders,
    error: ordersError,
  } = useGetOrdersQuery();

  const {
    data: productData,
    isLoading: loadingProducts,
    error: productsError,
  } = useGetProductsQuery();

  const products = Array.isArray(productData)
    ? productData
    : Array.isArray(productData?.products)
    ? productData.products
    : [];

  if (loadingUsers || loadingOrders || loadingProducts) {
    return <Loader />;
  }

  if (usersError || ordersError || productsError) {
    return (
      <Alert type="error">
        Failed to load dashboard data
      </Alert>
    );
  }

  const totalRevenue = orders
    .filter((order) => order.isPaid)
    .reduce(
      (acc, order) =>
        acc + Number(order.totalPrice || 0),
      0
    );

  const paidOrders = orders.filter(
    (order) => order.isPaid
  ).length;

  const pendingOrders = orders.filter(
    (order) => !order.isPaid
  ).length;

  const deliveredOrders = orders.filter(
    (order) => order.isDelivered
  ).length;

  const recentOrders = [...orders]
    .sort(
      (a, b) =>
        new Date(b.createdAt) -
        new Date(a.createdAt)
    )
    .slice(0, 5);

    const recentUsers = [...users].slice(0, 5);

    const latestProducts = [...products]
      .slice(0, 5);

  const monthlyRevenue = {};

  orders.forEach((order) => {
    if (!order.isPaid) return;

    const date = new Date(order.createdAt);

    const month = date.toLocaleString("default", {
      month: "short",
    });

    monthlyRevenue[month] =
      (monthlyRevenue[month] || 0) +
      Number(order.totalPrice);
  });

  const chartData = Object.keys(monthlyRevenue).map(
    (month) => ({
      month,
      revenue: monthlyRevenue[month],
    })
  );

  const pieData = [
    {
      name: "Paid",
      value: paidOrders,
    },
    {
      name: "Pending",
      value: pendingOrders,
    },
  ];

  
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        <div className="grid gap-6 lg:grid-cols-12">

          {/* Sidebar */}
          <aside className="lg:col-span-3 sticky top-24 h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">

          <h2 className="mb-6 text-xl font-bold text-[#232466]">
            Admin Panel
          </h2>

          <nav className="space-y-3">

            <Link
              to="/admin/productlist"
              className="flex items-center rounded-2xl p-4 hover:bg-[#232466] hover:text-white transition"
            >
              <CubeIcon className="mr-3 h-5 w-5" />
              Products
            </Link>

            <Link
              to="/admin/orderlist"
              className="flex items-center rounded-2xl p-4 hover:bg-[#232466] hover:text-white transition"
            >
              <ShoppingBagIcon className="mr-3 h-5 w-5" />
              Orders
            </Link>

            <Link
              to="/admin/userlist"
              className="flex items-center rounded-2xl p-4 hover:bg-[#232466] hover:text-white transition"
            >
              <UsersIcon className="mr-3 h-5 w-5" />
              Users
            </Link>

          </nav>

        </aside>

          {/* Main Dashboard */}
          <main className="lg:col-span-9 gap-2">

             {/* Growth Charts */}
            <div className="rounded-3xl mb-5 border border-slate-200 bg-white p-6 shadow-lg">
            <h3 className="mb-6 text-xl font-bold text-[#232466]">
              Revenue Growth
            </h3>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#00F700"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

           <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {/* Revenue */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
              <p className="text-sm text-slate-500">Revenue</p>
              <h2 className="mt-2 text-3xl font-bold text-[#232466]">
                ₹{totalRevenue.toLocaleString()}
              </h2>
            </div>

            {/* Orders */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
              <p className="text-sm text-slate-500">Orders</p>
              <h2 className="mt-2 text-3xl font-bold text-[#232466]">
                {orders.length}
              </h2>
            </div>

            {/* Products */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
              <p className="text-sm text-slate-500">Products</p>
              <h2 className="mt-2 text-3xl font-bold text-[#232466]">
                {products.length}
              </h2>
            </div>

            {/* Users */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
              <p className="text-sm text-slate-500">Users</p>
              <h2 className="mt-2 text-3xl font-bold text-[#232466]">
                {users.length}
              </h2>
            </div>

          </div>

          </main>

        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
