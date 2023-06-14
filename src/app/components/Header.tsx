'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
interface NavItem {
	href: string;
	text: string;
	isActive?: boolean;
}

const navItems: NavItem[] = [
	{
		href: '/',
		text: 'Početna',
	},
	{
		href: '/about',
		text: 'O nama',
	},
	{
		href: '/projects',
		text: 'Projekti',
	},
	{
		href: '/contact',
		text: 'Kontakt',
	},
];

function Header() {
	const pathname = usePathname();

	return (
		<header className='sticky top-0 bg-white/80 dark:bg-[#081b29]/80 backdrop-blur-lg inset-x-0 py-6 px-16  z-50'>
			<div className='flex justify-between items-center max-w-screen-2xl mx-auto'>
				<a href='/' className='logo' aria-label='home'>
					<Image
						src='/logo-dark.svg'
						alt='logo udruženja'
						width={100}
						height={50}
						className='hidden dark:block'
					></Image>

					<Image
						src='/logo-light.svg'
						alt='logo udruženja'
						width={100}
						height={50}
						className='dark:hidden'
					></Image>
				</a>
				<nav className='md:flex gap-8 text-lg  hidden'>
					<ul className='flex gap-8'>
						{navItems.map((item, id) => (
							<li key={id}>
								<Link
									href={item.href}
									className={
										pathname === item.href
											? 'text-[#00abf0]'
											: ''
									}
								>
									{item.text}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}

export default Header;
