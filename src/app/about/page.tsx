import '../../styles/index.css';
import TextLink from '@/components/common/text-link';
import PageWrapper from '@/components/common/page-wrapper';
import Image from 'next/image';

export default function About() {
	return (
		<PageWrapper>
			<main id="about" className="px-7 sm:px-10 md:px-12 lg:px-16">
				<section className="grid lg:grid-cols-2 pt-24 items-center md:items-center pb-24 lg:pb-36 lg:gap-20">
					<div className="text-sm md:text-base pb-12 md:pb-0 md:max-w-[670px] lg:max-w-none">
						<h2 className="text-2xl font-bold pb-5 sm:pb-6 md:pb-8 lg:pb-10 md:text-3xl lg:text-4xltext-2xl">
							GET TO KNOW ME_
						</h2>
						<p className="pb-4 leading-paragraph">
							My story with web development began after I
							graduated and got my diploma in Human Resources
							Management and realizing that economics wasn&apos;t
							my true calling. So I went looking for something I
							was passionate about.
						</p>
						<p className="pb-4 leading-paragraph">
							That&apos;s when a friend of mine suggested
							exploring programming languages, and I gave it a
							try, I started learning HTML, CSS, and JavaScript in
							the Odin Project Curriculum, when I got good
							foundation in javascript, I switched to learning by
							myself by building projects. And I loved the process of
							creating visually pleasing websites, solving
							problems, and bringing ideas to life through coding.
						</p>
						<p className="pb-4 leading-paragraph">
							Since then, I&apos;ve been enjoying the process of
							creating projects and continuously expanding my
							skills in this exciting field ever since.
						</p>
						<p className="leading-paragraph">
							Enough about me.{' '}
							<TextLink href="/work" text="Check out my work!" />
						</p>
					</div>
					<Image
						className="hidden lg:block"
						src="/images/abt-img.png"
						width={1500}
						height={1500}
						alt="3D abstract shape"
					/>
				</section>
			</main>
		</PageWrapper>
	);
}
