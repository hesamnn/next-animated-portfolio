"use client"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import NavLink from "./navLink"

const Navbar = () =>{
    const [open , setOpen] = useState(false)
    
    const Links=[
        {url: "/", title: "Home"},
        {url: "/about", title: "About"},
        {url: "/portfolio", title: "Portfolio"},
        {url: "/contact", title: "Contact"},
    ]
    return(
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            {/* LIKS */}
            <div className="hidden md:flex gap-4 w-1/3">
                {Links.map(link=>(
                    <NavLink link={link} key={link.title} />
                ))}
            </div>
            
            {/* LOGO */}
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
                    <Link href="/" className="text-sm bg-black rounded-md font-semibold p-1 flex items-center justify-center">
                        <span className="text-white mr-1">keewe</span>
                        <span className="w-12 h-8 bg-white text-black rounded flex items-center justify-center">.dev</span>
                    </Link>
            </div>
            {/* SOCIAL */}
            <div className="hidden md:flex gap-4 w-1/3">
                    <Link href="/">
                        <Image src="/github.png" alt="" height={24} width={24} />
                    </Link>
                    <Link href="/">
                        <Image src="/dribbble.png" alt="" height={24} width={24} />
                    </Link>
                    <Link href="/">
                        <Image src="/instagram.png" alt="" height={24} width={24} />
                    </Link>
                    <Link href="/">
                        <Image src="/facebook.png" alt="" height={24} width={24} />
                    </Link>
                    <Link href="/">
                        <Image src="/linkedin.png" alt="" height={24} width={24} />
                    </Link>
                    <Link href="/">
                        <Image src="/pinterest.png" alt="" height={24} width={24} />
                    </Link>
                </div>
            {/* RESPONSIVE MENU */}
            <div className="md:hidden">
            <button className="w-10 h-8 flex flex-col justify-between z-50 relative" onClick={() => setOpen((prev) => !prev)}>
                <div className="w-10 h-1 bg-black rounded"></div>
                <div className="w-10 h-1 bg-black rounded"></div>
                <div className="w-10 h-1 bg-black rounded"></div>
            </button>
            {open && (
            <div className="top-0 left-0 absolute h-screen w-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl">
                {Links.map(link=>(
                    <Link href={link.url} key={link.title}>{link.title}</Link>
                ))}
            </div>
            )}
            </div>
        </div>
    )
}

export default Navbar