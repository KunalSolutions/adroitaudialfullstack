import { useState } from 'react';

import DesktopMenu from './DesktopMenu';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import MobileMenuIcon from './MobileMenuIcon';
import SearchBar from './SearchBar';
import Pages from './Pages';
import TopAnnouncementBar from '@components/TopAnnouncementBar';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='fixed z-50  w-full bg-gradient-to-tl from-slate-50 via-white to-orange-50'>
			<TopAnnouncementBar />
			<div className='relative z-50 max-w-7xl  mx-auto px-3 sm:px-6 lg:px-8'>
				<div className="absolute inset-0 pointer-events-none">
					<div className="absolute top-20 left-10 w-72 h-72 bg-[#EF5622]/10 rounded-full blur-3xl animate-pulse"></div>

					<div className="absolute bottom-20 right-10 w-96 h-96 bg-[#232466]/10 rounded-full blur-3xl animate-pulse"></div>

					<div className="absolute top-1/2 left-1/2 w-80 h-80 bg-sky-300/10 rounded-full blur-3xl animate-pulse"></div>

					{/* Floating dots */}
					<div className="absolute top-24 left-1/4 w-3 h-3 rounded-full bg-[#EF5622] animate-bounce"></div>

					<div className="absolute bottom-32 right-1/4 w-2 h-2 rounded-full bg-[#232466] animate-ping"></div>

					<div className="absolute top-1/2 left-12 w-2 h-2 rounded-full bg-[#EF5622] animate-pulse"></div>

					<div className="absolute top-20 right-20 w-4 h-4 rounded-full bg-[#232466]/30 animate-bounce"></div>

				</div>
				<div className='relative flex h-28 w-full items-center justify-between sm:h-30'>
					<div className='flex flex-1 items-center justify-between gap-10'>
						<Logo />
						<Pages  />
						{/* <SearchBar /> */}
						{/* <DesktopMenu /> */}
						<MobileMenuIcon isOpen={isOpen} setIsOpen={setIsOpen} />
					</div>
				</div>
			</div>
 
			<div>{isOpen && <MobileMenu setIsOpen={setIsOpen} />}</div>

			{/* <MegaMenu /> */}
		</header>
	);
};

export default Header;
