import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useCreateUserMutation } from '@slices/userApiSlice';

const UserCreate = () => {
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isAdmin, setIsAdmin] = useState(false);

	const [createUser, { isLoading }] = useCreateUserMutation();

	const submitHandler = async (e) => {
		e.preventDefault();

		try {
			await createUser({
				name,
				email,
				password,
				isAdmin,
			}).unwrap();

			toast.success('User created successfully');
			navigate('/admin/userlist');
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
        Create User
      </h1>
      <p className="mt-2 text-slate-500">
        Add a new user account to the system
      </p>
    </div>

    <form
      onSubmit={submitHandler}
      className="max-w-3xl"
    >
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

        {/* User Avatar Preview */}
        <div className="mb-8 flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#232466] text-xl font-bold text-white">
            {name ? name.charAt(0).toUpperCase() : "U"}
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#232466]">
              New User
            </h2>

            <p className="text-sm text-slate-500">
              Fill in the details below
            </p>
          </div>
        </div>

        <div className="grid gap-6">

          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter full name"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter email address"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
              Password
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 transition focus:border-[#EF5622] focus:outline-none focus:ring-2 focus:ring-[#EF5622]/20"
            />
          </div>

          {/* Admin Access */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

            <div className="flex items-center justify-between">

              <div>
                <h3 className="font-semibold text-[#232466]">
                  Administrator Access
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Grant full access to users, orders and products.
                </p>
              </div>

              <label className="flex items-center gap-3">
                <input
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

        {/* Actions */}
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
            {isLoading ? "Creating User..." : "Create User"}
          </button>

        </div>

      </div>
    </form>
  </div>
</div>
	);
};

export default UserCreate;
