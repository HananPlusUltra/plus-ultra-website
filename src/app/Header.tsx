import Image from 'next/image';
import React from 'react';

function Header() {
	return (
		<header className='fixed top-0 bg-[#081b29]/80 backdrop-blur-lg left-0 w-full py-5 px-2.5 flex justify-between items-center z-50'>
			<a href='#' className='logo' aria-label='home'>
				<Image
					src='/logo.svg'
					alt='logo udruženja'
					width={100}
					height={50}
				></Image>
			</a>
			<nav className='navbar'>
				<a href='#' className='active'>
					Home
				</a>
				<a href='#'>About</a>
				<a href='#'>Projects</a>
				<a href='#'>Portofolio</a>
				<a href='#'>Contact</a>
			</nav>
		</header>
	);
}

export default Header;
