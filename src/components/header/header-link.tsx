'use client';
import Link from 'next/link';
import { expandCursor, shrinkCursor } from '@/utils/cursorActions';
import { usePathname } from 'next/navigation';

export default function HeaderLink({
	text,
	href,
}: {
	text: string;
	href: string;
}) {

	const path = usePathname();

	return (
		<Link
			className={`px-7 hover:text-l-emph dark:hover:text-d-emph ${
				path == href
					? 'text-[18px] text-black dark:text-white font-bold leading-5'
					: 'text-sm'
			}`}
			href={href}
			onMouseOver={expandCursor}
			onMouseLeave={shrinkCursor}
		>
			{text}
		</Link>
	);
}
