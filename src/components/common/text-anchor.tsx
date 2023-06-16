'use client';
import { expandCursor, shrinkCursor } from '@/utils/cursorActions';

export default function TextAnchor({
	text,
	href,
}: {
	text: string;
	href: string;
}) {
	return (
		<b>
			<a
				href={href}
				target="_blank"
				className="hover:text-l-emph dark:hover:text-d-emph"
				onMouseOver={expandCursor}
				onMouseLeave={shrinkCursor}
			>
				{text}
			</a>
		</b>
	);
}
