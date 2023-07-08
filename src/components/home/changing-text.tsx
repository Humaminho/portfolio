'use client';
import React from 'react';

export default function ChangingText() {
	const alpha = 'abcdefghijklmnopqrstuvwxyz';

	// function hackerEffect(e: any) {

  //   let iterations = 0;
  //   const interval = setInterval(() => {
  //     e.target.innerText = e?.target.innerText.split('').map(() => {
  //       return alpha[Math.floor(Math.random() * alpha.length)];
  //     }).join('');

  //     if (iterations > 10) {
  //       clearInterval(interval);
  //       e.target.innerText = 'web developer';
  //     }
  
  //     iterations += 1;
  //   }, 33);

	// }

	return (
		<span className="changing">
			web developer
		</span>
	);
}
