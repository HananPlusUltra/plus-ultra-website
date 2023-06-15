import Footer from './components/Footer';
import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Head from 'next/head';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Plus Ultra',
	description: 'Učimo mlade, otvaramo puteve budućnosti!',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<head>
				<meta property='og:type' content='website' />
				<meta property='og:url' content='https://metatags.io' />
				<meta
					property='og:title'
					content='Udruženje za razvoj i podršku mladih Plus Ultra'
				/>
				<meta
					property='og:description'
					content='Učimo mlade, otvaramo puteve budućnosti!'
				/>
				<meta property='og:image' content='/project1.jpg' />

				<meta property='twitter:card' content='summary_large_image' />
				<meta property='twitter:url' content='https://metatags.io' />
				<meta
					property='twitter:title'
					content='Udruženje za razvoj i podršku mladih Plus Ultra'
				/>
				<meta
					property='twitter:description'
					content='Učimo mlade, otvaramo puteve budućnosti!'
				/>
				<meta property='twitter:image' content='/project1.jpg' />
			</head>
			<body
				className={
					inter.className +
					' max-w-screen-2xl mx-auto min-h-screen dark:bg-[#081b29] dark:text-[#ededed] font-sans'
				}
			>
				<Header></Header>
				{children}
				<Footer></Footer>
			</body>
			<Analytics />
		</html>
	);
}
