import Reveal from '../common/reveal';
import TextLink from '../common/text-link';

export default function AboutSection() {
	return (
		<section className="flex md:max-w-3xl mt-32">
			<div className="text-sm lg:text-base">
				<Reveal>
					<h2 className="text-2xl font-bold pb-5 sm:pb-6 md:pb-8 lg:pb-10 md:text-3xl lg:text-4xl">
						ABOUT ME
					</h2>
				</Reveal>
				<Reveal>
					<p className="pb-4">
						I&apos;m Humam Kharbouch, I&apos;m 23 and I&apos;m
						passionate about creating beautiful and functional
						websites with smooth user experiences.
					</p>
				</Reveal>
				<Reveal>
					<p className="pb-4">
						By leveraging cutting-edge technologies, I aspire to
						create digital experiences that meet worldwide
						standards. Specializing in Next.js and React.js, I bring
						interactivity and dynamism to web applications.
					</p>
				</Reveal>
				<Reveal>
					<p className="">
						Interested?{' '}
						<TextLink text="Learn my story." href="/about" />
					</p>
				</Reveal>
			</div>
		</section>
	);
}
