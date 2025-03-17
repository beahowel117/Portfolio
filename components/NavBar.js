import React from 'react';
import Link from 'next/link';

function NavBar() {
  return (
    <div className="w-full absolute text-white z-10">
        <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-8">
            <div className='font-bold space-x-4 text-xl' >
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/experience">Experience</Link>
                <Link href="/contact">Contact</Link>
                </div>
        </nav>
    </div>
  )
}

export default NavBar