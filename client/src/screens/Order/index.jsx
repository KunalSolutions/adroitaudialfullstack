import {
	CheckBadgeIcon,
	ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Alert from '@components/Alert';
import Loader from '@components/Loader';
import {
	useDeliverOrderMutation,
	useGetOrderDetailsQuery,
	useGetPayPalClientIdQuery,
	usePayOrderMutation,
} from '@slices/orderApiSlice';

const OrderScreen = () => {
	const { id: orderId } = useParams();

	const {
		data: order,
		isLoading,
		error,
		refetch,
	} = useGetOrderDetailsQuery(orderId);

	const { userInfo } = useSelector((state) => state.auth);

	const [payOrder, { isLoading: loadingPay }] = usePayOrderMutation();

	const [deliverOrder, { isLoading: loadingDeliver }] =
		useDeliverOrderMutation();

	const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();

	const {
		data: paypal,
		isLoading: loadingPayPal,
		error: errorPayPal,
	} = useGetPayPalClientIdQuery();

	useEffect(() => {
		if (!errorPayPal && !loadingPayPal && paypal.clientId) {
			const loadPayPalScipt = async () => {
				paypalDispatch({
					type: 'resetOptions',
					value: {
						clientId: paypal.clientId,
						currency: 'USD',
					},
				});
				paypalDispatch({ type: 'setLoadingStatus', value: 'pending' });
			};

			if (order && !order.isPaid) {
				if (!window.paypal) {
					loadPayPalScipt();
				}
			}
		}
	}, [order, paypal, paypalDispatch, loadingPay, errorPayPal, loadingPayPal]);

	const onApprove = (data, actions) => {
		return actions.order.capture().then(async function (details) {
			try {
				console.log(details);
				await payOrder({ id: orderId, details });
				refetch();
				toast.success('Order paid successfully');
			} catch (error) {
				toast.error(error?.data?.message || error?.error);
			}
		});
	};

	const onError = (error) => {
		toast.error(error?.data?.message || error?.error);
	};

	const createOrder = (data, actions) => {
		return actions.order
			.create({
				purchase_units: [
					{
						amount: {
							value: order.totalPrice,
						},
					},
				],
			})
			.then((orderId) => {
				return orderId;
			});
	};

	const handleDeliver = async () => {
		try {
			await deliverOrder(orderId);
			refetch();
			toast.success('Order marked as delivered');
		} catch (error) {
			toast.error(error?.data?.message || error?.message);
		}
	};

	return isLoading ? (
		<Loader />
	) : error ? (
		<Alert type='error'>{error}</Alert>
	) : (
		<div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white py-12">

  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="mb-10">

      <span className="inline-flex rounded-full bg-[#EF5622]/10 px-4 py-2 text-sm font-semibold text-[#EF5622]">
        Order Details
      </span>

      <h1 className="mt-4 text-4xl md:text-5xl font-black text-[#232466]">
        Order #{orderId}
      </h1>

      <p className="mt-2 text-slate-500">
        Track your order status and payment information.
      </p>

    </div>

    <div className="grid lg:grid-cols-12 gap-10">

      {/* LEFT SIDE */}
      <div className="lg:col-span-8">

        {/* Shipping & Payment */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Shipping */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">

            <h3 className="text-xl font-bold text-[#232466] mb-4">
              Shipping Address
            </h3>

            <div className="space-y-1 text-slate-600">

              <p>{order.shippingAddress.address}</p>

              <p>
                {order.shippingAddress.city},{" "}
                {order.shippingAddress.postalCode}
              </p>

              <p>{order.shippingAddress.country}</p>

            </div>

            <div className="mt-6">

              {order?.isDelivered ? (

                <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  <CheckBadgeIcon className="h-5 w-5" />
                  Delivered
                </span>

              ) : (

                <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
                  <ExclamationTriangleIcon className="h-5 w-5" />
                  Not Delivered
                </span>

              )}

            </div>

          </div>

          {/* Payment */}
          <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">

            <h3 className="text-xl font-bold text-[#232466] mb-4">
              Payment Method
            </h3>

            {/* <span className="inline-flex rounded-full bg-[#232466]/10 px-4 py-2 text-sm font-semibold text-[#232466]">
              {order.paymentMethod}
            </span> */}

            <div className="mt-6">

              {order?.isPaid ? (

                <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  <CheckBadgeIcon className="h-5 w-5" />
                  Payment Completed
                </span>

              ) : (

                <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
                  <ExclamationTriangleIcon className="h-5 w-5" />
                  Payment Pending
                </span>

              )}

            </div>

          </div>

        </div>

        {/* Order Items */}
        <div className="mt-10">

          <h2 className="text-2xl font-bold text-[#232466] mb-6">
            Order Items
          </h2>

          <div className="space-y-5">

            {order?.orderItems?.map((product) => (

              <div
                key={product._id}
                className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-lg"
              >

                <div className="flex flex-col sm:flex-row gap-5">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-24 w-24 rounded-2xl bg-slate-50 object-contain p-2"
                  />

                  <div className="flex-1">

                    <Link
                      to={`/shop/${product._id}`}
                      className="text-lg font-bold text-[#232466] hover:text-[#EF5622]"
                    >
                      {product.name}
                    </Link>

                    <p className="mt-2 text-slate-500">
                      Quantity: {product.qty}
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-sm text-slate-500">
                      ₹{product.price} × {product.qty}
                    </p>

                    <p className="mt-2 text-xl font-bold text-[#232466]">
                      ₹{product.price * product.qty}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="lg:col-span-4">

        <div className="sticky top-24 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">

          {/* Summary Header */}
          <div className="bg-[#232466] p-6 text-white">

            <h2 className="text-2xl font-bold">
              Order Summary
            </h2>

            <p className="mt-1 text-slate-300">
              {order.orderItems.length} Products
            </p>

          </div>

          <div className="p-6">

            <div className="space-y-5">

              <div className="flex justify-between">
                <span className="text-slate-500">Items</span>
                <span className="font-semibold text-[#232466]">
                  ₹{order.itemsPrice}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Shipping</span>
                <span className="font-semibold text-[#232466]">
                  ₹{order.shippingPrice}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">Tax</span>
                <span className="font-semibold text-[#232466]">
                  ₹{order.taxPrice}
                </span>
              </div>

              <div className="border-t border-dashed border-slate-300 pt-5">

                <div className="flex justify-between">

                  <span className="text-xl font-bold">
                    Total
                  </span>

                  <span className="text-3xl font-black text-[#EF5622]">
                    ₹{order.totalPrice}
                  </span>

                </div>

              </div>

            </div>

            {/* Paypal */}
            {!order.isPaid && (
              <div className="mt-8">

                {loadingPay && <Loader />}

                {isPending ? (
                  <Loader />
                ) : (
                  <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                  />
                )}

              </div>
            )}

            {/* Admin Deliver */}
            {userInfo &&
              userInfo.isAdmin &&
              order.isPaid &&
              !order.isDelivered && (

                <button
                  onClick={handleDeliver}
                  className="mt-6 w-full rounded-2xl bg-[#EF5622] px-6 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-[#232466]"
                >
                  Mark As Delivered
                </button>

              )}

            {loadingDeliver && (
              <div className="mt-4">
                <Loader />
              </div>
            )}

          </div>

        </div>

      </div>

    </div>

  </div>

</div>
	);
};

export default OrderScreen;
