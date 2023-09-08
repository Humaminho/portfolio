import Reveal from "../common/reveal";
import ProjectMini from "./project-mini";

export default function ProjectSection() {
  return (
		<section className="pb-24 lg:pb-56">
			<Reveal>
				<h2 className="text-2xl font-bold pb-5 sm:pb-6 md:pb-8 lg:pb-10 md:text-3xl lg:text-4xl">
					LATEST WORK
				</h2>
			</Reveal>
			<div className="flex flex-col gap-16 sm:gap-8 sm:flex-row lg:gap-24">
				<Reveal>
					<ProjectMini
						src="/images/cozyshop.webp"
						title="COZY SHOP"
					/>
				</Reveal>
				<Reveal delay={0.2}>
					<ProjectMini src="/images/bluevies.webp" title="BLUEVIES" />
				</Reveal>
				<Reveal delay={0.3}>
					<ProjectMini src="/images/artwise.webp" title="ARTWISE" />
				</Reveal>
			</div>
		</section>
  );
}
