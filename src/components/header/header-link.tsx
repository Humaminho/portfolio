'use client';
import Link from 'next/link';
import { expandCursor, shrinkCursor } from '@/utils/cursorActions';
import { usePathname } from 'next/navigation';
import jumpTo from '@/utils/jumpTo';

export default function HeaderLink({
	text,
	href,
}: {
	text: string;
	href: string;
}) {

	const path = usePathname();

	function handleClick(e: any) {
		if (href === path) {
			e.preventDefault();
			jumpTo(text);
			console.log('working ');
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
