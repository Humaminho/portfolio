import Image from 'next/image';

export default function Project({
	src,
	title,
	description,
	features,
	github,
	live,
}: {
	src: string;
	title: string;
	description: string;
	features: string[];
	github: string;
	live: string;
}) {
	return (
		<div className=" flex flex-col md:flex-row md:justify-between items-start gap-6 md:gap-12 w-full sm:p-10 md:p-6 lg:p-10 sm:border sm:border-l-border sm:dark:border-d-border sm:rounded-lg sm:hover:border-gray-400 sm:hover:dark:border-gray-700">
			<Image
				className="w-full md:w-0 grow rounded-lg"
				src={src}
				height={5000}
				width={5000}
				alt="Project image"
			></Image>
			<div className="flex flex-col gap-2 text-sm lg:text-base md:w-3/5">
				<h3 className="text-lg font-semibold">{title}</h3>
				<p>{description}</p>
				<p>Features include:</p>
				<ul className="pl-8">
					{features.map((feature) => {
						return (
							<li key={feature.slice(0, 5)} className="list-disc">
								{feature}
							</li>
						);
					})}
				</ul>
				<div className="flex gap-5 items-center pt-3">
					<a
						href={live}
						target="blank"
						className="font-semibold px-6 pb-3 pt-[.6rem] border border-l-text dark:border-d-text rounded-full dark:hover:border-d-emph hover:border-d-emph hover:text-d-emph"
					>
						Live demo
					</a>
					<a
						href={github}
						target="blank"
						className="font-semibold hover:text-d-emph"
					>
						Github
					</a>
				</div>
			</div>
		</div>
	);
}