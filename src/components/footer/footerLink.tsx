'use client';
import Link from "next/link";
export default function FooterLink({text, href}: {text: string, href: string}) {
  return (
		<Link
      href={href}
      className="hover:text-d-emph py-2"
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
