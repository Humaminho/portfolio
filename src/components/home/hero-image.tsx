'use client';
import Image from 'next/image';
import ImageWrapper from '../common/image-wrapper';

export default function HeroImage() {
	return (
		<ImageWrapper>
			<Image
				className="hidden md:block w-64 lg:w-80 xl:w-96"
				src="/images/cube.png"
				alt="nothing"
				width={400}
				height={400}
			></Image>
		</ImageWrapper>
	);
}
