import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Alert from '@components/Alert';
import Loader from '@components/Loader';

import {
	useGetOrdersQuery,
	useUpdateOrderToPaidMutation,
	useUpdateOrderToDeliveredMutation,
} from '@slices/orderApiSlice';

const OrderListScreen = () => {
	const { data: orders = [], isLoading, error, refetch } =
		useGetOrdersQuery();

	const [updateOrderToPaid] = useUpdateOrderToPaidMutation();
	const [updateOrderToDelivered] =
		useUpdateOrderToDeliveredMutation();

	// Handle Paid Dropdown
	const handlePaidChange = async (order) => {
		if (order.isPaid) return;

		try {
			await updateOrderToPaid(order._id).unwrap();
			toast.success('Order marked as paid');
			refetch();
		} catch (error) {
			toast.error(error?.data?.message || error?.error);
		}
	};

	// Handle Delivered Dropdown
	const handleDeliveredChange = async (order) => {
		if (order.isDelivered) return;

		try {
			await updateOrderToDelivered(order._id).unwrap();
			toast.success('Order marked as delivered');
			refetch();
		} catch (error) {
			toast.error(error?.data?.message || error?.error);
		}
	};

	return (
		<div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

{/* HEADER */}
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-10">

  <div>
    <h1 className="text-4xl font-black text-[#232466]">
      All Orders
    </h1>

    <p className="mt-2 text-slate-500">
      Manage customer orders, payments and deliveries.
    </p>
  </div>

  <div className="bg-white rounded-2xl border border-slate-100 shadow-md px-6 py-4">
    <p className="text-sm text-slate-500">
      Total Orders
    </p>

    <p className="text-2xl font-black text-[#EF5622]">
      {orders?.length || 0}
    </p>
  </div>

</div>

{isLoading ? (
  <Loader />
) : error ? (
  <Alert type="error">
    {error?.data?.message || error?.message}
  </Alert>
) : (

  <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">

    {/* TABLE HEADER */}
    <div className="bg-[#232466] px-6 py-5">

      <h2 className="text-xl font-bold text-white">
        Order Management
      </h2>

    </div>

    <div className="overflow-x-auto">

      <table className="w-full min-w-[1200px]">

        <thead className="bg-slate-50 border-b border-slate-200">

          <tr>

            <th className="px-6 py-4 text-left text-sm font-bold text-[#232466]">
              Order ID
            </th>

            <th className="px-6 py-4 text-left text-sm font-bold text-[#232466]">
              Customer
            </th>

            <th className="px-6 py-4 text-left text-sm font-bold text-[#232466]">
              Date
            </th>

            <th className="px-6 py-4 text-left text-sm font-bold text-[#232466]">
              Amount
            </th>

            <th className="px-6 py-4 text-left text-sm font-bold text-[#232466]">
              Payment
            </th>

            <th className="px-6 py-4 text-left text-sm font-bold text-[#232466]">
              Delivery
            </th>

            <th className="px-6 py-4 text-center text-sm font-bold text-[#232466]">
              Action
            </th>

          </tr>

        </thead>

        <tbody>

          {orders.map((order) => (

            <tr
              key={order._id}
              className="border-b border-slate-100 hover:bg-slate-50 transition-all"
            >

              {/* ID */}
              <td className="px-6 py-5">

                <p className="font-semibold text-[#232466] max-w-[220px] truncate">
                  {order._id}
                </p>

              </td>

              {/* USER */}
              <td className="px-6 py-5">

                <div>

                  <p className="font-semibold text-slate-800">
                    {order.user?.name}
                  </p>

                  <p className="text-xs text-slate-500">
                    Customer
                  </p>

                </div>

              </td>

              {/* DATE */}
              <td className="px-6 py-5 text-slate-600">

                {new Date(order.createdAt).toLocaleDateString()}

              </td>

              {/* TOTAL */}
              <td className="px-6 py-5">

                <span className="font-black text-lg text-[#EF5622]">
                  ₹{order.totalPrice}
                </span>

              </td>

              {/* PAID */}
              <td className="px-6 py-5">

                <select
                  value={order.isPaid ? "Paid" : "Not Paid"}
                  onChange={() => handlePaidChange(order)}
                  className={`rounded-xl px-4 py-2 text-sm font-semibold border outline-none
                  ${
                    order.isPaid
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-red-50 text-red-600 border-red-200"
                  }`}
                >
                  <option>Paid</option>
                  <option>Not Paid</option>
                </select>

              </td>

              {/* DELIVERED */}
              <td className="px-6 py-5">

                <select
                  value={
                    order.isDelivered
                      ? "Delivered"
                      : "Not Delivered"
                  }
                  onChange={() =>
                    handleDeliveredChange(order)
                  }
                  className={`rounded-xl px-4 py-2 text-sm font-semibold border outline-none
                  ${
                    order.isDelivered
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-yellow-50 text-yellow-700 border-yellow-200"
                  }`}
                >
                  <option>Delivered</option>
                  <option>Not Delivered</option>
                </select>

              </td>

              {/* ACTION */}
              <td className="px-6 py-5 text-center">

                <Link
                  to={`/order/${order._id}`}
                  className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-[#232466] hover:bg-[#EF5622] text-white font-semibold transition-all duration-300"
                >
                  View Details
                </Link>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  </div>

)}

  </div>

</div>

	);
};

export default OrderListScreen;
