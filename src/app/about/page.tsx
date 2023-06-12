import Image from 'next/image';

export default function About() {
	return (
		<main className="px-7">
			<section className="flex flex-col pt-24 items-start">
				<div className="pb-12">
					<h2 className="text-2xl font-bold pb-8">GET TO KNOW ME_</h2>
					<p className="pb-4 leading-paragraph">
						I embarked on a journey that led me from studying Human
						Resources Management for four years to discovering my
						true passion in the world of programming.
					</p>
					<p className="pb-4 leading-paragraph">
						Although I obtained a diploma in HR, I always felt that
						economics wasn&apos;t my true calling. It was at this
						point that a friend of mine suggested exploring the
						realm of programming languages.
					</p>
					<p className="pb-4 leading-paragraph">
						I delved into the world of coding and quickly realized
						that my true passion lay in front-end web development.
						The ability to create visually pleasing websites, solve
						problems and bring ideas to life through coding ignited
						a newfound excitement within me.
					</p>
					<p className="pb-4 leading-paragraph">
						Since then, I&apos;ve been enjoying the process of
						creating projects and continuously expanding my skills
						in this exciting field.
					</p>
					<p className="leading-paragraph">
						Enough about me. <b>Check out my work!</b>
					</p>
				</div>
				<Image
					className="self-center"
					alt="Illustration"
					src="/images/saly-2.png"
					height={500}
					width={500}
				></Image>
			</section>
		</main>
	);
}
