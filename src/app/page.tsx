import Image from 'next/image';
import Link from 'next/link';
import ProjectMini from '@/components/home/projectMini';
import ContactBtn from '@/components/home/contactBtn';

export default function Home() {
	return (
		<main className="px-7 flex flex-col gap-24 sm:gap-32 md:gap-48 lg:gap-60 sm:px-10 md:px-12 lg:px-16">
			<section className="flex flex-col pt-24 items-start">
				<h1 className="text-4xl font-black dark:font-white pb-1 sm:text-6xl md:text-7xl lg:text-8xl">
					Hi I&apos;m Humam <br /> I&apos;m a web developer
				</h1>
				<p className="text-sm md:text-base lg:text-lg font-light pb-4 md:pb-6 lg:pb-8">
					Front end - React.js - Next.js
				</p>
				<ContactBtn />
			</section>
			<section className="flex items-end md:gap-10 lg:gap-24 xl:gap-32">
				<div className="text-sm lg:text-base">
					<h2 className="text-2xl font-bold pb-5 sm:pb-6 md:pb-8 lg:pb-10 md:text-3xl lg:text-4xl">
						ABOUT ME_
					</h2>
					<p className="pb-4 leading-paragraph">
						I&apos;m Humam Kharbouch, a front-end web developer,
						passionate about creating visually pleasing websites
						with seamless user experiences.
					</p>
					<p className="pb-4 leading-paragraph">
						By leveraging cutting-edge technologies, I aspire to
						create digital experiences that meet worldwide standards
						of excellence. Specializing in Next.js and React.js, I
						bring interactivity and dynamism to web applications.
					</p>
					<p className="leading-paragraph">
						Interested?{' '}
						<b>
							<Link className="hover:text-d-emph" href="/about">
								Learn more about me!
							</Link>
						</b>
					</p>
				</div>
				<Image
					className="hidden md:block w-72 lg:w-80 xl:w-96"
					src="/images/desk.png"
					alt="nothing"
					width={1000}
					height={1000}
				></Image>
			</section>
			<section className="text-sm lg:text-base flex flex-col">
				<div className="flex md:gap-10 lg:gap-32">
					<Image
						className="hidden md:block w-72 lg:w-80 xl:w-96"
						src="/images/tools.png"
						alt="nothing"
						width={1000}
						height={1000}
					></Image>
					<div>
						<h2 className="text-2xl font-bold pb-5 sm:pb-6 md:pb-8 lg:pb-10 md:text-3xl lg:text-4xl">
							SKILL & TOOLS_
						</h2>
						<p className="pb-4 leading-paragraph">
							The main area of my expertise is front end web
							development.
						</p>
						<p className="pb-4 leading-paragraph">
							HTML, CSS, JS (Typescript), building small and
							medium size web apps with Next.js, React.js,
							Tailwind, Sass and more.
						</p>
						<p className="pb-4 leading-paragraph">
							I have a passion for continuous learning and staying
							up-to-date with the latest technologies in the
							ever-evolving field of web development.
						</p>
						<p className="pb-5 leading-paragraph">
							Visit my{' '}
							<b>
								<a
									href="https://www.linkedin.com/in/houmame-kharbouch-2b0190244/"
									target="_blank"
									className="hover:text-d-emph"
								>
									LinkedIn
								</a>
							</b>{' '}
							or{' '}
							<b>
								<a
									href="https://github.com/humaminho"
									target="_blank"
									className="hover:text-d-emph"
								>
									Github
								</a>
							</b>{' '}
							for more details.
						</p>
					</div>
				</div>
			</section>
			<section className="pb-24 lg:pb-56">
				<h2 className="text-2xl font-bold pb-5 sm:pb-6 md:pb-8 lg:pb-10 md:text-3xl lg:text-4xl">
					LATEST WORK_
				</h2>
				<div className="flex flex-col gap-8 sm:flex-row lg:gap-24">
					<ProjectMini
						src="/images/cozyshop-shot.png"
						title="COZY SHOP"
					/>
					<ProjectMini
						src="/images/bluevies-shot.png"
						title="BLUEVIES"
					/>
					<ProjectMini
						src="/images/desaign-shot.png"
						title="DESAIGN"
					/>
				</div>
			</section>
		</main>
	);
}
