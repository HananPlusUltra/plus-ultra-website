import Image from 'next/image';
import Header from './Header';
import Hero from './Hero';
import 'boxicons/css/boxicons.min.css';
import AboutSection from './About';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col '>
			<Header></Header>
			<Hero></Hero>
			<AboutSection></AboutSection>
		</main>
	);
}
