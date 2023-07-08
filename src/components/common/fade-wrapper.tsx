'use client';
import { motion } from 'framer-motion';

export default function FadeWrapper({
	children,
	className,
}: {
	className?: string;
	children: React.ReactNode;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, x: -5 }}
			animate={{ opacity: 1, x: 0 }}
			exit={{ opacity: 0, x: 5 }}
			transition={{ duration: 0.2, delay: 0.1 }}
		>
			{children}
		</motion.div>
	);
}
