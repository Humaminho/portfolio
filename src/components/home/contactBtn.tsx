'use client';
import React from 'react';
import jumpTo from '@/utils/jumpTo';

export default function ContactBtn() {
	return (
		<button
			onClick={() => {
				jumpTo('contact');
			}}
      onMouseOver={(e) => {
        const cursor = document.querySelector('.cursor');
        if (cursor) {
          cursor.setAttribute('id','hover');
        }
      }}
      onMouseLeave={(e) => {
        const cursor = document.querySelector('.cursor');
        if (cursor) {
          cursor.removeAttribute('id');
        }
      }}
			className="shadow-md hover:shadow-lg font-semibold px-5 pb-3 pt-[.6rem] border text-sm lg:text-lg border-l-text dark:border-d-text rounded-full dark:hover:border-d-emph dark:hover:text-d-emph hover:border-l-emph hover:text-l-emph hover:hover:animate-pulse"
		>
			Contact me
		</button>
	);
}
