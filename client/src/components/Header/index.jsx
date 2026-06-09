import { useState } from 'react';

import DesktopMenu from './DesktopMenu';
import Logo from './Logo';
import MobileMenu from './MobileMenu';
import MobileMenuIcon from './MobileMenuIcon';
import SearchBar from './SearchBar';
import Pages from './Pages';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className='fixed z-50 w-full bg-white shadow-sm'>
			<div className='relative z-50 max-w-7xl bg-white mx-auto px-3 sm:px-6 lg:px-8'>
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
