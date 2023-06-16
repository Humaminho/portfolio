'use client';
import Link from 'next/link';
import { expandCursor, shrinkCursor } from '@/utils/cursorActions';

export default function TextLink({
	text,
	href,
}: {
	text: string;
	href: string;
}) {
	return (
		<b>
			<Link
				href={href}
				className="hover:text-l-emph dark:hover:text-d-emph"
				onMouseOver={expandCursor}
				onMouseLeave={shrinkCursor}
			>
				{text}
			</Link>
		</b>
	);
}
