'use client';
import { expandCursor, shrinkCursor } from '@/utils/cursorActions';

export default function FooterAnchor({text, href}: {text: string, href: string}) {
  return (
		<a
			target="_blank"
			className="hover:text-d-emph py-2"
			href={href}
			onMouseOver={expandCursor}
			onMouseLeave={shrinkCursor}
		>
			{text}
		</a>
  );
}
