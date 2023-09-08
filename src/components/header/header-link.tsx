'use client';
import Link from 'next/link';
import { expandCursor, shrinkCursor } from '@/utils/cursorActions';
import { usePathname } from 'next/navigation';
import jumpTo from '@/utils/jumpTo';
import { Header } from 'next/dist/lib/load-custom-routes';

type HeaderLinkProps = {
	text: string;
	href: string;
};

export default function HeaderLink({ text, href }: HeaderLinkProps) {
	const path = usePathname();

	function handleClick(e: any) {
		if (href === path) {
			e.preventDefault();
			jumpTo('body');
		} else return;
	}

	return (
		<Link
			className={`px-7 py-3 hover:text-l-emph dark:hover:text-d-emph ${
				path == href
					? 'text-[18px] text-black dark:text-white font-bold leading-5'
					: 'text-sm'
			}`}
			onClick={handleClick}
			href={href}
			onMouseOver={expandCursor}
			onMouseLeave={shrinkCursor}
		>
			{text}
		</Link>
	);
}
