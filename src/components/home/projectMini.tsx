import Image from 'next/image';
import Link from 'next/link';

export default function ProjectMini({
	src,
	title,
}: {
	src: string;
	title: string;
}) {
	return (
		<div className="flex flex-col items-center gap-2">
			<Image
				className="w-full rounded-lg"
				src={src}
				height={5000}
				width={5000}
				alt="Project image"
			></Image>
			<Link href="/work" className="group hover:text-d-emph flex gap-2 items-center">
				<h3 className="text-lg sm:text-base lg:text-lg font-semibold">{title}</h3>
				<svg
					width="15"
					height="15"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="scale-90 lg:scale-100 group-hover:rotate-45 transition-transform duration-300"
				>
					<path
						d="M1 14L13.3652 1M13.3652 1V13.48M13.3652 1H1.49461"
						stroke="currentColor"
						strokeWidth="1.38352"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</Link>
		</div>
	);
}
