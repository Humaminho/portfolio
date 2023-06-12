'use client';
import React from 'react';
import jumpTo from '@/utils/jumpTo';

export default function ContactBtn() {
	return (
		<button
			onClick={() => {
				jumpTo('contact');
			}}
			className="font-semibold px-5 pb-3 pt-[.6rem] border text-sm lg:text-lg border-l-text dark:border-d-text rounded-full hover:text-d-emph dark:hover:border-d-emph hover:border-d-emph hover:hover:animate-pulse"
		>
			Contact me
		</button>
	);
}
