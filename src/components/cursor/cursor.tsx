'use client';
import { useState, useEffect } from 'react';
import '../../styles/index.css';

export default function Cursor() {
	const [cursorX, setCursorX] = useState(0);
	const [cursorY, setCursorY] = useState(0);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const handleMouseMove = (e: any) => {
				setCursorX(e.clientX);
				setCursorY(e.clientY);
			};

			window.addEventListener('mousemove', handleMouseMove);

			return () => {
				window.removeEventListener('mousemove', handleMouseMove);
			};
		}
	}, []);

	return (
		<div
			className="cursor bg-l-emph dark:bg-d-emph border-l-emph dark:border-d-emph flex items-center justify-center text-l-emph dark:text-d-emph font-bold"
			style={{
				left: cursorX,
				top: cursorY,
			}}
		></div>
	);
}
