'use client'
import Image from 'next/image';
import ImageWrapper from '../common/image-wrapper';

export default function AboutImage() {
  return (
		<ImageWrapper className="flex items-center content-center lg:w-72 xl:w-80 xl:mr-10 self-center">
			<Image
				className="hidden lg:block"
				alt="Illustration"
				src="/images/about.png"
				height={1000}
				width={1000}
			></Image>
		</ImageWrapper>
  );
}
