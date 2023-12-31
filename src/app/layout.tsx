import './globals.css';
import { Inter } from 'next/font/google';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import Cursor from '@/components/cursor/cursor';

const inter = Inter({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});


export const metadata = {
  title: 'Humam',
	description:
  "Showcasing my projects and skills in front end web development. Let's connect and collaborate.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

	return (
		<html lang="en" className={`${inter.className} dark overflow-x-hidden`}>
			<body
				id="body"
				className={`bg-l-bg text-l-text dark:bg-d-bg dark:text-d-text  relative`}
			>
				<Cursor />
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
