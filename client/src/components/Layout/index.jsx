import { Outlet } from 'react-router-dom';

import Footer from '@components/Footer';
import Header from '@components/Header';
import ScrollToTop from '@components/ScrollToTop';
import WhatsAppButton from '@components/WhatsAppButton';
import CustomCursor from '@components/CustomCursor';

const Layout = () => {
	return (
		<div className='flex min-h-screen flex-col bg-white'>
			<ScrollToTop />
			<CustomCursor />
			<WhatsAppButton />
			<Header />

			<div className='h-[56px] sm:h-[64px] lg:h-[65px] mt-24'></div>

			<div className='flex-grow'>
				<Outlet />
				
			</div>

			<Footer />
		</div>
	);
};

export default Layout;
