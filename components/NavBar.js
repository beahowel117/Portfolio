'use client';
import React, {useState} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavBar() {
  // const router = useRouter();
  // const currentPath = router.pathname;
  const currentPath = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

  const filteredLinks = links.filter(link => {
    if (window.innerWidth <= 768) {
       return link.href !== currentPath;
    }
    return true;
 });

  return (
    <div className="w-full absolute text-white z-10">
        <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-4 sm:p-4 md:p-4 lg:p-8 xl:p-8">
            {/* <div className='font-bold space-x-4 text-xl' >
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/experience">Experience</Link>
                <Link href="/contact">Contact</Link>
            </div> */}

      <div className="font-bold space-x-4 text-xl lg:text-xl xl:text-xl md:text-lg sm:text-base flex flex-wrap justify-center">
          {filteredLinks.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-gray-400">
              {link.label}
            </Link>
          ))}
        </div>
        </nav>
    </div>
  )
}

export default NavBar