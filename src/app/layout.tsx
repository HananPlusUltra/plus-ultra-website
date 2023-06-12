import Footer from './Footer';
import './globals.css';
import { Inter } from 'next/font/google';

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
			<body className={inter.className}>
				{children}
				<Footer></Footer>
			</body>
		</html>
	);
}
