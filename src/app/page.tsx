import Image from 'next/image';
import Header from './Header';
import Hero from './Hero';
import 'boxicons/css/boxicons.min.css';
import { Analytics } from '@vercel/analytics/react';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col '>
			<Header></Header>

			<Hero></Hero>
			<Analytics />
		</main>
	);
}
