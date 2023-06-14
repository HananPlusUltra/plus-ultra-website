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
			<Head>
				<meta
					property='og:image'
					content='https://scontent-vie1-1.cdninstagram.com/v/t51.2885-15/275744187_1124839878264366_5327447242546037122_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent-vie1-1.cdninstagram.com&_nc_cat=106&_nc_ohc=snTzyTKTcwkAX9ryIzb&edm=ABmJApABAAAA&ccb=7-5&ig_cache_key=Mjc5MTgzNzIxOTg3MjI3OTUwNA%3D%3D.2-ccb7-5&oh=00_AfAk7T2wTQGp7m048gh5EbXt9VSbPUYyFg2a2mUWRF3rBQ&oe=648EC0BE&_nc_sid=a1ad6c'
				/>
				<meta property='og:image:width' content='1200' />
				<meta property='og:image:height' content='630' />
			</Head>
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
