import '../styles/index.css';
import HeroSection from '@/components/home/hero-section';
import AboutSection from '@/components/home/about-section';
import SkillSection from '@/components/home/skill-section';
import ProjectSection from '@/components/home/project-section';

export default function Home() {
	return (
		<div id="home">
			<main
				id="main"
				className="max-w-7xl mx-auto px-7 flex flex-col gap-24 sm:gap-32 md:gap-48 lg:gap-60 sm:px-10 md:px-12 lg:px-16 overflow-x-hidden"
			>
				<HeroSection />
				<AboutSection />
				<SkillSection />
				<ProjectSection />
			</main>
		</div>
	);
}
