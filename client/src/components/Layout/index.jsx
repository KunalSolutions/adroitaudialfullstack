import { Outlet } from 'react-router-dom';

import Footer from '@components/Footer';
import Header from '@components/Header';
import ScrollToTop from '@components/ScrollToTop';

const Layout = () => {
	return (
		<div className='flex min-h-screen flex-col bg-white'>
			<ScrollToTop />
			<Header />

			<div className='h-[56px] sm:h-[64px] lg:h-[65px] mt-10'></div>

			<div className='flex-grow'>
				<Outlet />
				
			</div>

			<Footer />
		</div>
	);
};

export default Layout;
