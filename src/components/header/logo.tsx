'use client';
import { expandCursor, shrinkCursor } from '@/utils/cursorActions';

export default function Logo() {
  return (
		<a
			href="http://localhost:3000/"
			className="text-3xl"
			onMouseOver={expandCursor}
			onMouseLeave={shrinkCursor}
		>
			H_
		</a>
  );
}
