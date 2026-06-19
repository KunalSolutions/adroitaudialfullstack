import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import Alert from '@components/Alert';
import Loader from '@components/Loader';
import { useDeleteUserMutation, useGetUsersQuery, useCreateUserMutation } from '@slices/userApiSlice';

const UserListScreen = () => {
	const { data: users, error, isLoading, refetch } = useGetUsersQuery();

	const [deleteUser, { isLoading: loadingDelete }] = useDeleteUserMutation();
	const [createUser, { isLoading: loadingCreate }] = useCreateUserMutation();


	const handleDelete = async (id) => {
		if (window.confirm('Are you sure?')) {
			try {
				await deleteUser(id).unwrap();
				toast.success('User deleted successfully');
				refetch();
			} catch (error) {
				toast.error(error?.data?.message || error?.error);
			}
		}
	};

	const handleCreateUser = async () => {
		try {
			await createUser({
				name: 'New User',
				email: `user${Date.now()}@gmail.com`,
				password: '123456',
				isAdmin: false,
			}).unwrap();

			toast.success('User created successfully');
			refetch();
		} catch (error) {
			toast.error(error?.data?.message || error?.error);
		}
	};


	return (
		<div className="bg-white min-h-screen">
  <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

    {/* Header */}
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-4xl font-bold text-[#232466]">
          All Users
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage customers and administrator accounts
        </p>
      </div>

      <Link
        to="/admin/user/create"
        className="inline-flex items-center justify-center rounded-xl bg-[#232466] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#1b1c52]"
      >
        + Create User
      </Link>
    </div>

    {isLoading ? (
      <Loader />
    ) : error ? (
      <Alert type="error">
        {error?.data?.message || error?.message}
      </Alert>
    ) : (
      <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

        <div className="overflow-x-auto">
          <table className="min-w-full">

            {/* Header */}
            <thead className="bg-[#232466]">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white">
                  User
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white">
                  Email
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white">
                  Role
                </th>

                <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-white">
                  Actions
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody className="divide-y divide-slate-100 bg-white">
              {users.map((user) => (
                <tr
                  key={user._id}
                  className="transition hover:bg-orange-50"
                >
                  {/* User */}
                  <td className="px-6 py-5">
                    <div>
                      <h3 className="font-semibold text-[#232466]">
                        {user.name}
                      </h3>

                      <p className="mt-1 text-xs text-slate-400">
                        ID: {user._id.slice(-8)}
                      </p>
                    </div>
                  </td>

                  {/* Email */}
                  <td className="px-6 py-5 text-sm text-slate-700">
                    {user.email}
                  </td>

                  {/* Role */}
                  <td className="px-6 py-5">
                    {user.isAdmin ? (
                      <span className="inline-flex items-center gap-2 rounded-full bg-[#232466]/10 px-3 py-1 text-xs font-semibold text-[#232466]">
                        <CheckCircleIcon className="h-4 w-4" />
                        Administrator
                      </span>
                    ) : (
                      <span className="inline-flex rounded-full bg-[#EF5622]/10 px-3 py-1 text-xs font-semibold text-[#EF5622]">
                        Customer
                      </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-3">

                      <Link
                        to={`/admin/user/${user._id}/edit`}
                        className="rounded-xl bg-[#232466]/10 px-4 py-2 text-sm font-semibold text-[#232466] transition hover:bg-[#232466] hover:text-white"
                      >
                        Edit
                      </Link>

                      {!user.isAdmin && (
                        <button
                          onClick={() => handleDelete(user._id)}
                          type="button"
                          className="rounded-xl bg-[#EF5622]/10 px-4 py-2 text-sm font-semibold text-[#EF5622] transition hover:bg-[#EF5622] hover:text-white"
                        >
                          {loadingDelete ? 'Deleting...' : 'Delete'}
                        </button>
                      )}

                    </div>
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

export default UserListScreen;
