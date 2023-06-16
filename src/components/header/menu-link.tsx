import Link from 'next/link';

interface MenuProps {
	closeMenu: () => void;
	link: string;
	text: string;
}

export default function MenuLink({ closeMenu, link, text }: MenuProps) {
	return (
		<li className='py-2'>
			<Link
				href={link}
				className="flex items-center gap-4 text-md text-lg font-semibold"
				onClick={closeMenu}
			>
				{text}
			</Link>
		</li>
	);
}
