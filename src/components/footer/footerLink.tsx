'use client';
import Link from "next/link";
import { expandCursor, shrinkCursor } from '@/utils/cursorActions';

export default function FooterLink({text, href}: {text: string, href: string}) {
  return (
		<Link
			href={href}
			className="hover:text-d-emph py-2"
			onMouseOver={expandCursor}
			onMouseLeave={shrinkCursor}
		>
			{text}
		</Link>
  );
}
