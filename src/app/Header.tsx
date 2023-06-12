import Image from 'next/image';
import React from 'react';

function Header() {
	return (
		<header className='fixed top-0 bg-[#081b29]/80 backdrop-blur-lg left-0 w-full py-6 px-16 flex justify-between items-center z-50'>
			<a href='/' className='logo' aria-label='home'>
				<Image
					src='/logo.svg'
					alt='logo udruženja'
					width={100}
					height={50}
				></Image>
			</a>
			<nav className='navbar'>
				<a href='/' className='active'>
					Početna
				</a>
				<a href='/'>O nama</a>
				<a href='/'>Projekti</a>
				<a href='/'>Kontakt</a>
			</nav>
		</header>
	);
}

export default Header;
