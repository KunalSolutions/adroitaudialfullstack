import { Link } from 'react-router-dom'
import { useGetMyOrdersQuery } from '../../slices/orderApiSlice'
import Loader from '../../components/Loader'
import Alert from '../../components/Alert'

const MyOrdersScreen = () => {
  const { data: orders, isLoading, error } = useGetMyOrdersQuery()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white py-12">

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="mb-10">

      <h1 className="mt-4 text-4xl md:text-5xl font-black text-[#232466]">
        My Orders
      </h1>

      <p className="mt-3 text-slate-500">
        Track your purchases, payments and deliveries.
      </p>

    </div>

    {isLoading ? (
      <Loader />
    ) : error ? (
      <Alert type="error">
        {error?.data?.message || error?.error}
      </Alert>
    ) : orders.length === 0 ? (

      <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-20 text-center">

        <h3 className="text-2xl font-bold text-[#232466]">
          No Orders Yet
        </h3>

        <p className="mt-3 text-slate-500">
          Your placed orders will appear here.
        </p>

        <Link
          to="/shop"
          className="mt-6 inline-flex rounded-2xl bg-[#EF5622] px-6 py-3 font-semibold text-white transition hover:bg-[#232466]"
        >
          Start Shopping
        </Link>

      </div>

    ) : (

      <div className="grid gap-6">

        {orders.map((order) => (

          <div
            key={order._id}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >

            <div className="p-6">

              {/* Top */}
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Order ID
                  </p>

                  <h3 className="mt-1 font-bold text-[#232466] break-all">
                    #{order._id}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Ordered on{" "}
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>

                </div>

                <div className="text-left lg:text-right">

                  <p className="text-sm text-slate-500">
                    Order Total
                  </p>

                  <p className="text-3xl font-black text-[#EF5622]">
                    ₹{order.totalPrice}
                  </p>

                </div>

              </div>

              {/* Divider */}
              <div className="my-6 h-px bg-slate-200" />

              {/* Status */}
              <div className="grid gap-4 md:grid-cols-3">

                <div className="rounded-2xl bg-slate-50 p-4">

                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Payment
                  </p>

                  {order.isPaid ? (
                    <span className="mt-2 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                      Paid
                    </span>
                  ) : (
                    <span className="mt-2 inline-flex rounded-full bg-red-100 px-3 py-1 text-sm font-semibold text-red-600">
                      Pending
                    </span>
                  )}

                </div>

                <div className="rounded-2xl bg-slate-50 p-4">

                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Delivery
                  </p>

                  {order.isDelivered ? (
                    <span className="mt-2 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                      Delivered
                    </span>
                  ) : (
                    <span className="mt-2 inline-flex rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                      Processing
                    </span>
                  )}

                </div>

                <div className="rounded-2xl bg-slate-50 p-4">

                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Items
                  </p>

                  <p className="mt-2 text-lg font-bold text-[#232466]">
                    {order.orderItems?.length || 0}
                  </p>

                </div>

              </div>

              {/* Button */}
              <div className="mt-6 flex justify-end">

                <Link
                  to={`/order/${order._id}`}
                  className="inline-flex items-center rounded-2xl bg-[#232466] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#EF5622]"
                >
                  View Order
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    )}

  </div>

</div>
  )
}

export default MyOrdersScreen
