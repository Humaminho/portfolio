import Image from 'next/image';
import Link from 'next/link';
import '../../styles/sass/index.css'

export default function About() {
	return (
		<main id="about" className="px-7 sm:px-10 md:px-12 lg:px-16">
			<section className="flex flex-col pt-24 items-center md:items-end md:flex-row md:pb-24 lg:pb-56 md:gap-10 lg:gap-32">
				<div className="text-sm md:text-base pb-12 md:pb-0">
					<h2 className="text-2xl font-bold pb-5 sm:pb-6 md:pb-8 lg:pb-10 md:text-3xl lg:text-4xltext-2xl">
						GET TO KNOW ME_
					</h2>
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
						Enough about me.{' '}
						<b>
							<Link href="/work" className="hover:text-d-emph">
								Check out my work!
							</Link>
						</b>
					</p>
				</div>
				<Image
					className="self-center w-72 lg:w-80 xl:w-96"
					alt="Illustration"
					src="/images/about.png"
					height={1000}
					width={1000}
				></Image>
			</section>
		</main>
	);
}
