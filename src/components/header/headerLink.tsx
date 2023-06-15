'use client';
import Link from 'next/link';

export default function HeaderLink({text, href}: {text: string, href: string}) {
  return (
		<Link
			className="text-sm hover:text-l-emph dark:hover:text-d-emph"
			href={href}
			onMouseOver={(e) => {
				const cursor = document.querySelector('.cursor');
				if (cursor) {
					cursor.setAttribute('id', 'hover');
				}
			}}
			onMouseLeave={(e) => {
				const cursor = document.querySelector('.cursor');
				if (cursor) {
					cursor.removeAttribute('id');
				}
			}}
		>
			{text}
		</Link>
  );
}
