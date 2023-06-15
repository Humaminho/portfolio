'use client';

export default function FooterAnchor({text, href}: {text: string, href: string}) {
  return (
		<a
			target="_blank"
			className="hover:text-d-emph py-2"
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
		</a>
  );
}
