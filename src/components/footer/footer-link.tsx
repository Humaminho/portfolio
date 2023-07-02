'use client';
import Link from "next/link";
import { expandCursor, shrinkCursor } from '@/utils/cursorActions';
import { usePathname } from "next/navigation";
import jumpTo from "@/utils/jumpTo";
import React from "react";

export default function FooterLink({text, href}: {text: string, href: string}) {

  const path = usePathname();
  function handleClick(e: any) {
    if (href === path) {
      e.preventDefault();
      jumpTo(text);
      console.log('working ')
    } else return;
  }
  return (
		<Link
			href={href}
			className="hover:text-d-emph py-2"
			onMouseOver={expandCursor}
			onMouseLeave={shrinkCursor}
      onClick={handleClick}
		>
			{text}
		</Link>
  );
}
