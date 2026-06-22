import { ORDERS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const orderApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createOrder: builder.mutation({
			query: (order) => ({
				url: ORDERS_URL,
				method: 'POST',
				body: { ...order },
			}),
		}),
		getOrderDetails: builder.query({
			query: (id) => ({
				url: `${ORDERS_URL}/${id}`,
			}),
			keepUnusedDataFor: 5,
		}),
		payOrder: builder.mutation({
			query: ({ id, details }) => ({
				url: `${ORDERS_URL}/${id}/pay`,
				method: 'PUT',
				body: { ...details },
			}),
		}),
		getMyOrders: builder.query({
			query: () => ({
				url: `${ORDERS_URL}/mine`,
			}),
			keepUnusedDataFor: 5,
		}),
		getOrders: builder.query({
			query: () => ({
				url: `${ORDERS_URL}`,
			}),
			keepUnusedDataFor: 5,
		}),
		deliverOrder: builder.mutation({
			query: (id) => ({
				url: `${ORDERS_URL}/${id}/deliver`,
				method: 'PUT',
			}),
		}),
		updateOrderToPaid: builder.mutation({
			query: (orderId) => ({
				url: `${ORDERS_URL}/${orderId}/pay`,
				method: 'PUT',
			}),
			invalidatesTags: ['Order'],
		}),

		updateOrderToDelivered: builder.mutation({
			query: (orderId) => ({
				url: `${ORDERS_URL}/${orderId}/deliver`,
				method: 'PUT',
			}),
			invalidatesTags: ['Order'],
		}),

		createRazorpayOrder: builder.mutation({
		query: (amount) => ({
			url: `${ORDERS_URL}/razorpay`,
			method: 'POST',
			body: { amount },
		}),
		}),

		verifyRazorpayPayment: builder.mutation({
		query: ({ orderId, paymentData }) => ({
			url: `${ORDERS_URL}/${orderId}/pay`,
			method: 'PUT',
			body: paymentData,
		}),
		}),
	}),
});

export const {
	useCreateOrderMutation,
	useGetOrderDetailsQuery,
	usePayOrderMutation,
	useGetMyOrdersQuery,
	useGetOrdersQuery,
	useDeliverOrderMutation,
	useUpdateOrderToPaidMutation,
	useUpdateOrderToDeliveredMutation,
	useCreateRazorpayOrderMutation,
	useVerifyRazorpayPaymentMutation,
} = orderApiSlice;
