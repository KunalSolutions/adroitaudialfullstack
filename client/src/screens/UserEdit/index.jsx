import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Alert from '@components/Alert';
import Loader from '@components/Loader';
import {
	useGetUserDetailsQuery,
	useUpdateUserMutation,
} from '@slices/userApiSlice';

const UserEditScreen = () => {
	const { id: userId } = useParams();

	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);

	const {
		data: user,
		error,
		isLoading,
		refetch,
	} = useGetUserDetailsQuery(userId);

	const [updateUser, { isLoading: loadingUpdate }] = useUpdateUserMutation();

	useEffect(() => {
		if (user) {
			setName(user.name);
			setEmail(user.email);
			setIsAdmin(user.isAdmin);
		}
	}, [user]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await updateUser({ userId, name, email, isAdmin }).unwrap();
			toast.success('User updated successfully');
			refetch();
			navigate(`/admin/userlist`);
		} catch (error) {
			toast.error(error?.data?.message || error?.error);
		}
	};

	return (
		<div className="min-h-screen bg-white">
  <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-[#232466]">
        Edit User
      </h1>
      <p className="mt-2 text-slate-500">
        Update user account information and permissions
      </p>
    </div>

    {isLoading ? (
      <Loader />
    ) : error ? (
      <Alert type="error">
        {error?.data?.message || error?.message}
      </Alert>
    ) : (
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

          {/* User Info Header */}
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#232466] text-xl font-bold text-white">
              {name?.charAt(0)?.toUpperCase()}
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#232466]">
                {user?.name}
              </h2>

              <p className="text-sm text-slate-500">
                User ID: {user?._id}
              </p>
            </div>
          </div>

          <div className="grid gap-6">

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Full Name
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
              />
            </div>

            {/* Admin Toggle */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

              <div className="flex items-center justify-between">

                <div>
                  <h3 className="font-semibold text-[#232466]">
                    Administrator Access
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Grant full access to products, users and orders management.
                  </p>
                </div>

                <label className="flex items-center gap-3">
                  <input
                    id="isAdmin"
                    type="checkbox"
                    checked={isAdmin}
                    onChange={(e) => setIsAdmin(e.target.checked)}
                    className="h-5 w-5 accent-[#EF5622]"
                  />

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      isAdmin
                        ? "bg-green-100 text-green-700"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {isAdmin ? "Admin" : "Customer"}
                  </span>
                </label>

              </div>

            </div>

          </div>

          {/* Footer Buttons */}
          <div className="mt-8 flex justify-end gap-4 border-t border-slate-200 pt-6">

            <button
              type="button"
              onClick={() => window.history.back()}
              className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-[#EF5622] px-8 py-3 font-semibold text-white shadow-lg transition hover:bg-[#d84b1b]"
            >
              {loadingUpdate ? "Updating User..." : "Save Changes"}
            </button>

          </div>

        </div>
      </form>
    )}
  </div>
</div>
	);
};

export default UserEditScreen;
