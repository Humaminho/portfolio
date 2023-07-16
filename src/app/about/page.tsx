import '../../styles/index.css';
import TextLink from '@/components/common/text-link';
import Image from 'next/image';

export default function About() {
	return (
		<div id="about">
			<main className="max-w-7xl mx-auto px-7 sm:px-10 md:px-12 lg:px-16">
				<section className="grid lg:grid-cols-7 pt-24 items-center md:items-center pb-24 lg:pb-36 lg:gap-20">
					<div className="text-sm col-span-4 md:text-base pb-12 md:pb-0 md:max-w-[670px] lg:max-w-none">
						<h2 className="text-2xl font-bold pb-5 sm:pb-6 md:pb-8 lg:pb-10 md:text-3xl lg:text-4xltext-2xl">
							GET TO KNOW ME_
						</h2>
						<p className="pb-4">
							My story with web development began after I
							graduated and got my diploma in Human Resources
							Management and realizing that economics wasn&apos;t
							my true calling. So I went looking for something I
							was passionate about.
						</p>
						<p className="pb-4">
							That&apos;s when a friend of mine suggested
							exploring programming languages, and I gave it a
							try, I started learning HTML, CSS, and JavaScript in
							the Odin Project curriculum, when I got good
							foundation in javascript, I switched to learning
							React and Next by myself by constantly building
							projects and solving problems.
						</p>
						<p className="pb-4">
							Since then, I&apos;ve been refining my skills
							and broadening my expertise by making more
							projects. With each one, I strive to push the
							boundaries of my abilities and cultivate a diverse
							skill set.
						</p>
						<p className="">
							Enough about me.{' '}
							<TextLink href="/work" text="Check out my work!" />
						</p>
					</div>
					<Image
						className="hidden lg:block col-span-3"
						src="/images/about-me.png"
						width={1500}
						height={1500}
						alt="3D abstract shape"
					/>
				</section>
			</main>
		</div>
	);
}
