import { Link } from 'react-router-dom';

import Footer from '@components/Footer';
import Header from '@components/Header';

const ErrorScreen = () => {
	return (
		<div className='flex min-h-screen flex-col'>
			<Header />

			<div className='grid flex-grow place-items-center mt-15 bg-white px-6 py-24 sm:py-32 lg:px-8'>
				<div className='text-center max-w-2xl'>
				<p className='text-base font-semibold text-indigo-600'>
					🚀 Coming Soon
				</p>

				<h1 className='mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl'>
					Something Amazing Is Coming
				</h1>

				<p className='mt-6 text-lg leading-8 text-slate-600'>
					This page is currently under development. We're working hard to launch it soon with exciting content and features.
				</p>

				<div className='mt-10 flex items-center justify-center gap-x-6'>
					<Link
					to='/'
					className='rounded-md bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500'
					>
					Back to Home
					</Link>
				</div>
				</div>
			</div>

			<Footer />
			</div>
	);
};

export default ErrorScreen;
