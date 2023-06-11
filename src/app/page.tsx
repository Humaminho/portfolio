import Image from 'next/image'
import { Inter } from 'next/font/google';
import Carousel from '@/components/home/carousel';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

export default function Home() {
  return (
		<main className="px-7 flex flex-col gap-24">
			<section className="flex flex-col pt-24 items-center">
				<h1 className="text-4xl font-black text-center">
					Hi I&apos;m Humam <br /> I&apos;m a web developer
				</h1>
				<p className="text-sm font-light">
					Front end - React.js - Next.js
				</p>
				<button className="font-semibold px-5 py-3 border border-l-text dark:border-d-text rounded-full">
					Contact me
				</button>
			</section>
			<section className="flex flex-col">
				<h2 className="text-2xl font-bold pb-5">ABOUT ME_</h2>
				<p className="pb-4 leading-paragraph">
					I&apos;m Humam Kharbouch, a front-end web developer,
					passionate about creating visually pleasing websites with
					seamless user experiences.
				</p>
				<p className="pb-4 leading-paragraph">
					By leveraging cutting-edge technologies, I aspire to create
					digital experiences that meet worldwide standards of
					excellence. Specializing in Next.js and React.js, I bring
					interactivity and dynamism to web applications.
				</p>
				<p className="leading-paragraph">
					Interested? <b>Learn more about me!</b>
				</p>
			</section>
			<section className="flex flex-col">
				<h2 className="text-2xl font-bold pb-5">SKILL & TOOLS_</h2>
				<p className="pb-4 leading-paragraph">
					The main area of my expertise is front end web development.
				</p>
				<p className="pb-4 leading-paragraph">
					HTML, CSS, JS (Typescript), building small and medium size
					web apps with Next.js, React.js, Tailwind, Sass and more.
				</p>
				<p className="pb-4 leading-paragraph">
					I have a passion for continuous learning and staying
					up-to-date with the latest technologies in the ever-evolving
					field of web development.
				</p>
				<p className="pb-5 leading-paragraph">
					Visit my <b>LinkedIn</b> or <b>Github</b> for more details.
				</p>
				<Carousel />
			</section>
		</main>
  );
}
