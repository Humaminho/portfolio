import Image from "next/image";
import TextAnchor from "../common/text-anchor";
import Reveal from "../common/reveal";
import Carousel from "./carousel";

export default function SkillSection() {
  return (
		<section className="text-sm lg:text-base flex flex-col relative mb-20 sm:mb-24 md:mb-28 lg:mb-32">
			<div className="flex items-center md:gap-10 lg:gap-32">
				<Reveal width="100%" className="hidden md:block">
					<Image
						className="hidden md:block w-72 lg:w-80 xl:w-96"
						src="/images/3d-skills.webp"
						alt="nothing"
						width={384}
						height={322.477}
						loading="lazy"
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
							HTML, CSS, JS (Typescript), building small and
							medium size web apps with Next.js, React.js,
							Tailwind, Sass, etc.
						</p>
					</Reveal>
					<Reveal>
						<p className="pb-4 ">
							I am excited to continue learning and growing as a
							front-end web developer and am always looking for
							new challenges and opportunities to stay up-to-date
							with the latest technologies and expand my skillset.
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
  );
}
