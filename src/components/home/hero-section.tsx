import React from 'react';
import Reveal from '../common/reveal';
import ContactBtn from './contact-btn';

export default function HeroSection() {
	return (
		<section className="pt-24 flex items-center justify-start">
			<div className="flex flex-col items-start">
				<Reveal>
					<h1 className="text-4xl font-black dark:font-white pb-1 sm:text-5xl md:text-6xl lg:text-7xl">
						Hi I&apos;m Humam <br /> I&apos;m a web developer
					</h1>
				</Reveal>
				<Reveal>
					<p className="text-sm md:text-base lg:text-lg font-light pb-4 md:pb-6 lg:pb-8">
						Front end - React.js - Next.js
					</p>
				</Reveal>
				<Reveal>
					<ContactBtn />
				</Reveal>
			</div>
		</section>
	);
}
