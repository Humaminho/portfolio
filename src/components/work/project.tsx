'use client';
import Image from 'next/image';
import { expandCursor, shrinkCursor } from '@/utils/cursorActions';
import { privateCursor } from '@/utils/cursorActions';
import Reveal from '../common/reveal';

export default function Project({
	src,
	title,
	description,
	features,
	github,
	live,
	stack,
	hasGitRepo,
}: {
	src: string;
	title: string;
	description: string;
	features: string[];
	github: string;
	live: string;
	stack: JSX.Element[];
	hasGitRepo: boolean;
}) {
	return (
		<Reveal delay={0.2}>
			<div className=" flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-12 w-full dark:sm:bg-d-header sm:bg-l-header sm:p-10 md:p-16 lg:p-10 sm:border sm:border-l-border sm:dark:border-d-border sm:rounded-lg sm:hover:border-gray-400 sm:hover:dark:border-gray-700">
				<Image
					className="w-full lg:w-0 grow rounded-lg self-center"
					src={src}
					height={572}
					width={572}
					alt="Project image"
					loading="lazy"
				></Image>
				<div className="flex flex-col justify-between text-sm lg:text-base lg:w-3/5">
					<h3 className="text-lg font-semibold mb-2">{title}</h3>
					<p className="mb-1">{description}</p>
					<p className="mb-1">Features include:</p>
					<ul className="pl-8">
						{features.map((feature) => {
							return (
								<li
									key={feature.slice(0, 5)}
									className="list-disc mb-1"
								>
									{feature}
								</li>
							);
						})}
					</ul>
					<div className="flex gap-5 mt-5 h-[40px] md:h-[45px] lg:h-[50px]">
						{stack}
					</div>
					<div className="flex gap-5 items-center mt-5">
						<a
							href={live}
							target="_blank"
							className="shadow-md hover:shadow-lg dark:shadow-d-emph/20 font-semibold px-6 pb-3 pt-[.6rem] border border-l-text dark:border-d-text rounded-full dark:hover:border-d-emph dark:hover:text-d-emph hover:border-l-emph hover:text-l-emph"
							onMouseOver={expandCursor}
							onMouseLeave={shrinkCursor}
						>
							Live demo
						</a>
						{hasGitRepo ? (
							<a
								href={github}
								target="_blank"
								className="font-semibold hover:text-l-emph dark:hover:text-d-emph"
								onMouseOver={expandCursor}
								onMouseLeave={shrinkCursor}
							>
								Github
							</a>
						) : (
							<a
								className="font-semibold text-gray-500 dark:text-gray-600 px-1 py-3"
								onMouseOver={privateCursor}
								onMouseLeave={shrinkCursor}
							>
								Github
							</a>
						)}
					</div>
				</div>
			</div>
		</Reveal>
	);
}
