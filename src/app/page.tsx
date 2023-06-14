import Header from './components/Header';
import Hero from './components/Hero';
import 'boxicons/css/boxicons.min.css';
import AboutSection from './components/About';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col '>
			
			<Hero></Hero>
			<AboutSection></AboutSection>
		</main>
	);
}
