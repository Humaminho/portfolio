import Image from 'next/image';
import Project from '@/components/work/project';

interface Project {
	src: string;
	title: string;
	description: string;
	features: string[];
	github: string;
	live: string;
}

export default function Work() {
	const projects: Project[] = [
		{
			src: '/images/cozyshop-shot.png',
			title: 'Cozy shop',
			description:
				'Cozy Shop is a e-commerce website showcasing a fictional clothing brand, specializing in comfortable and fashionable apparel. Made using React.js and Sass CSS.',
			features: [
				'Dark and light mode options for personalized viewing.',
				'Interactive carousel for effortless product navigation.',
				'Convenient product filtering and search functionality to find desired items easily.',
			],
			github: 'https://github.com/humaminho',
			live: 'https://www.google.com/',
		},
		{
			src: '/images/bluevies-shot.png',
			title: 'BLUEVIES',
			description:
				'Bluevies is a movie search web app powered by the The Movie Database (TMDB) API. Developed with React and styled using Vanilla CSS.',
			features: [
				'Robust search functionality to quickly find desired movies.',
				'Integration with TMDB API for accessing extensive movie information and details.',
				'Email and Gmail authentication using Firebase.',
			],
			github: 'https://github.com/humaminho',
			live: 'https://www.google.com/',
		},
		{
			src: '/images/desaign-shot.png',
			title: 'SOME PROJECT',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
			features: [
				'Lorem quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
				'Ipsum lorem dolor sit amet, consectetur adipiscing elit.',
				'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat, lorem quis.',
			],
			github: 'https://github.com/humaminho',
			live: 'https://www.google.com/',
		},
	];

	return (
		<main className="px-7">
			<section className="flex flex-col py-24 items-start">
				<div className="">
					<h2 className="text-2xl font-bold pb-8">PROJECTS_</h2>
					<div className="flex flex-col gap-16">
						{projects.map((project) => {
							return (
								<Project
									key={project.title}
									src={project.src}
									title={project.title}
									description={project.description}
									features={project.features}
                  github={project.github}
                  live={project.live}
								/>
							);
						})}
					</div>
				</div>
			</section>
		</main>
	);
}
