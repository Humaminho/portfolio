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
		<div className="flex flex-col items-center gap-6 w-full">
			<Image
				className="w-full rounded-lg"
				src={src}
				height={5000}
				width={5000}
				alt="Project image"
			></Image>
			<div className="flex flex-col gap-2">
				<h3 className="text-lg font-semibold">{title}</h3>
				<p className="">{description}</p>
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
				<div className="flex gap-3 items-center pt-3">
					<a
						href={live}
						target="blank"
						className="font-semibold px-6 pb-3 pt-[.6rem] border border-l-text dark:border-d-text rounded-full"
					>
						Live demo
					</a>
					<a href={github} target="blank" className="font-semibold">
						Github
					</a>
				</div>
			</div>
		</div>
	);
}
