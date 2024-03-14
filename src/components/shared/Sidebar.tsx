"use client"

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button';
 
const Sidebar = () => {
  const pathName = usePathname()
  return (
    <aside className='sidebar'>
        <div className='flex size-full flex-col gap-4'>
            <Link href="/" className=''>
                <Image src="/assets/images/logo-text.svg"  alt="logo" width={180} height={28}/>
            </Link>

            <nav className='sidebar-nav'>
                <SignedIn>
                    <ul className='sidebar-nav-elements'>
                        {navLinks.slice(0,6).map((links)=>{
                            const isActive = links.route === pathName;
                            return (<li key={links.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                                <Link href={links.route}>
                                    <Link className="sidebar-link" href={links.route}>
                                        <Image 
                                          src={links.icon}
                                          alt="logo"
                                          width={24}
                                          height={24}
                                          className={`${isActive && 'brightness-200'}`}
                                        />
                                        {links.label}
                                    </Link>
                                </Link>

                                
                            </li>)
                        })}
                    </ul>

                    <ul className='sidebar-nav-elements'>
                        {navLinks.slice(6).map((links)=>{
                            const isActive = links.route === pathName;
                            return (<li key={links.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                                <Link href={links.route}>
                                    <Link className="sidebar-link" href={links.route}>
                                        <Image 
                                          src={links.icon}
                                          alt="logo"
                                          width={24}
                                          height={24}
                                          className={`${isActive && 'brightness-200'}`}
                                        />
                                        {links.label}
                                    </Link>
                                </Link>

                                
                            </li>)
                        })}
                        <li className='flex gap-4 cursor-pointer'>
                            <UserButton afterSignOutUrl='/' showName/>
                        </li>
                    </ul>
                </SignedIn>

                <SignedOut>
                    <Button asChild className='button bg-purble-gradient bg-cover text-black hover:text-white'>
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar