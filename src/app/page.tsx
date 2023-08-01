import Image from 'next/image';
import ProjectMini from '@/components/home/project-mini';
import ContactBtn from '@/components/home/contact-btn';
import '../styles/index.css';
import TextAnchor from '@/components/common/text-anchor';
import TextLink from '@/components/common/text-link';
import Carousel from '@/components/home/carousel';
import Reveal from '@/components/common/reveal';

export default function Home() {
	return (
		<div id="home">
			<main
				id="main"
				className="max-w-7xl mx-auto px-7 flex flex-col gap-24 sm:gap-32 md:gap-48 lg:gap-60 sm:px-10 md:px-12 lg:px-16 overflow-x-hidden"
			>
				<section className="pt-24 flex items-center justify-start">
					<div className="flex flex-col items-start">
						<Reveal>
							<h1 className="text-4xl font-black dark:font-white pb-1 sm:text-5xl md:text-6xl lg:text-7xl">
								Hi I&apos;m Humam <br /> I&apos;m a web
								developer
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
				<section className="flex md:max-w-3xl mt-32">
					<div className="text-sm lg:text-base">
						<Reveal>
							<h2 className="text-2xl font-bold pb-5 sm:pb-6 md:pb-8 lg:pb-10 md:text-3xl lg:text-4xl">
								ABOUT ME
							</h2>
						</Reveal>
						<Reveal>
							<p className="pb-4">
								I&apos;m Humam Kharbouch, I&apos;m 23 and
								I&apos;m passionate about creating beautiful and
								functional websites with smooth user
								experiences.
							</p>
						</Reveal>
						<Reveal>
							<p className="pb-4">
								By leveraging cutting-edge technologies, I
								aspire to create digital experiences that meet
								worldwide standards. Specializing in Next.js and
								React.js, I bring interactivity and dynamism to
								web applications.
							</p>
						</Reveal>
						<Reveal>
							<p className="">
								Interested?{' '}
								<TextLink
									text="Learn my story."
									href="/about"
								/>
							</p>
						</Reveal>
					</div>
				</section>
				<section className="text-sm lg:text-base flex flex-col relative mb-20 sm:mb-24 md:mb-28 lg:mb-32">
					<div className="flex items-center md:gap-10 lg:gap-32">
						<Reveal width="100%" className="hidden md:block">
							<Image
								className="hidden md:block w-72 lg:w-80 xl:w-96"
								src="/images/3d-skills.png"
								alt="nothing"
								width={1000}
								height={1000}
							></Image>
						</Reveal>
						<div>
							<Reveal>
								<h2 className="text-2xl font-bold pb-5 sm:pb-6 md:pb-8 lg:pb-10 md:text-3xl lg:text-4xl">
									SKILL & TOOLS
								</h2>
							</Reveal>
							<Reveal>
								<p className="pb-4 ">
									I specialize in front-end web development.
								</p>
							</Reveal>
							<Reveal>
								<p className="pb-4 ">
									HTML, CSS, JS (Typescript), building small
									and medium size web apps with Next.js,
									React.js, Tailwind, Sass, etc.
								</p>
							</Reveal>
							<Reveal>
								<p className="pb-4 ">
									I am excited to continue learning and
									growing as a front-end web developer and am
									always looking for new challenges and
									opportunities to stay up-to-date with the
									latest technologies and expand my skillset.
								</p>
							</Reveal>
							<Reveal>
								<p className="pb-5 ">
									Visit my{' '}
									<TextAnchor
										text="Linkedin"
										href="https://www.linkedin.com/in/houmame-kharbouch-2b0190244/"
									/>{' '}
									and{' '}
									<TextAnchor
										href="https://github.com/humaminho"
										text="Github"
									/>{' '}
									for more details.
								</p>
							</Reveal>
						</div>
					</div>
					<Carousel />
				</section>
				<section className="pb-24 lg:pb-56">
					<Reveal>
						<h2 className="text-2xl font-bold pb-5 sm:pb-6 md:pb-8 lg:pb-10 md:text-3xl lg:text-4xl">
							LATEST WORK
						</h2>
					</Reveal>
					<div className="flex flex-col gap-16 sm:gap-8 sm:flex-row lg:gap-24">
						<Reveal>
							<ProjectMini
								src="/images/cozyshop-shot.png"
								title="COZY SHOP"
							/>
						</Reveal>
						<Reveal delay={0.2}>
							<ProjectMini
								src="/images/bluevies-shot.png"
								title="BLUEVIES"
							/>
						</Reveal>
						<Reveal delay={0.3}>
							<ProjectMini
								src="/images/artwise-display.png"
								title="ARTWISE"
							/>
						</Reveal>
					</div>
				</section>
			</main>
		</div>
	);
}
