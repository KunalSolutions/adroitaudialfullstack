import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { setCredentials } from '@slices/authSlice';
import { useRegisterMutation } from '@slices/userApiSlice';
import { toast } from 'react-toastify';

const RegisterScreen = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const [register, { isLoading }] = useRegisterMutation();
	const { userInfo } = useSelector((state) => state.auth);

	const { search } = useLocation();
	const sp = new URLSearchParams(search);
	const redirect = sp.get('redirect') || '/';

	useEffect(() => {
		if (userInfo) {
			navigate(redirect);
		}
	}, [navigate, redirect, userInfo]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== confirmPassword) {
			toast.error('Passwords do not match.');
			return;
		} else {
			try {
				const response = await register({ name, email, password }).unwrap();
				dispatch(setCredentials({ ...response }));
				navigate(redirect);
			} catch (error) {
				console.error(error);
				toast.error(error?.data?.message);
			}
		}
	};

	return (
		<div className="min-h-fit bg-gradient-to-b from-white via-slate-50 to-white flex items-center justify-center px-4 mb-5">

      <div className="w-full max-w-xl">

        {/* Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

         <div className="bg-[#232466] px-8 py-2 text-center">

            <h1 className="mt-2 text-3xl font-black text-white">
              Create Account
            </h1>

          </div>

          {/* Form */}
          <div className="p-8">

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-[#232466]">
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="h-14 w-full rounded-2xl border border-slate-200 px-4 transition-all focus:border-[#EF5622] focus:outline-none focus:ring-4 focus:ring-[#EF5622]/10"
                />

              </div>

              {/* Email */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-[#232466]">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-14 w-full rounded-2xl border border-slate-200 px-4 transition-all focus:border-[#EF5622] focus:outline-none focus:ring-4 focus:ring-[#EF5622]/10"
                />

              </div>

              {/* Password */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-[#232466]">
                  Password
                </label>

                <input
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create password"
                  className="h-14 w-full rounded-2xl border border-slate-200 px-4 transition-all focus:border-[#EF5622] focus:outline-none focus:ring-4 focus:ring-[#EF5622]/10"
                />

              </div>

              {/* Confirm Password */}
              <div>

                <label className="mb-2 block text-sm font-semibold text-[#232466]">
                  Confirm Password
                </label>

                <input
                  type="password"
                  id="confirmPassword"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm password"
                  className="h-14 w-full rounded-2xl border border-slate-200 px-4 transition-all focus:border-[#EF5622] focus:outline-none focus:ring-4 focus:ring-[#EF5622]/10"
                />

              </div>

              {/* Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="mt-2 flex h-14 w-full items-center justify-center rounded-2xl bg-[#EF5622] text-base font-bold text-white shadow-lg transition-all duration-300 hover:bg-[#232466] hover:shadow-xl disabled:cursor-not-allowed"
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </button>

            </form>

            {/* Divider */}
            <div className="my-8 flex items-center">

              <div className="h-px flex-1 bg-slate-200" />

              <span className="px-4 text-sm text-slate-400">
                OR
              </span>

              <div className="h-px flex-1 bg-slate-200" />

            </div>

            {/* Login Link */}
            <div className="text-center">

              <p className="text-slate-500">
                Already have an account?
              </p>

              <Link
                to="/login"
                className="mt-3 inline-flex rounded-2xl border border-[#232466] px-6 py-3 font-semibold text-[#232466] transition-all hover:bg-[#232466] hover:text-white"
              >
                Sign In
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
	);
};

export default RegisterScreen;
