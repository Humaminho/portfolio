'use client';
import { motion } from 'framer-motion';

export default function ImageWrapper({
	children,
	className,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: 50 }}
			transition={{ duration: 0.5, delay: 0.3 }}
		>
			{children}
		</motion.div>
	);
}
