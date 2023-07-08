'use client';
import React from 'react';
import jumpTo from '@/utils/jumpTo';
import { expandCursor, shrinkCursor } from '@/utils/cursorActions';

export default function ContactBtn() {
	return (
		<button
			onClick={() => {
				jumpTo('contact');
				shrinkCursor();
				const targetInput = document.getElementById('name');
				setTimeout(() => targetInput?.focus(), 800);
			}}
			onMouseOver={expandCursor}
			onMouseLeave={shrinkCursor}
			className="shadow-md hover:shadow-lg dark:shadow-d-emph/20 font-semibold px-5 pb-3 pt-[.6rem] border text-sm lg:text-lg border-l-text dark:border-d-text rounded-full dark:hover:border-d-emph dark:hover:text-d-emph hover:border-l-emph hover:text-l-emph hover:hover:animate-pulse"
		>
			Contact me
		</button>
	);
}
