"use client"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"
import NavLink from "./navLink"
import {motion} from "framer-motion"
const Navbar = () =>{
    const [open , setOpen] = useState(false)
    const topVariants ={
        closed:{
            rotate:0,
        },
        opened:{
            rotate:45,
            backgroundColor:"rgb(255,255,255)",
        }
    }

    const centerVariants ={
        closed:{
            opacity:1,
        },
        opened:{
            opacity:0,
        }
    }

    const bottomVariants ={
        closed:{
            rotate:0,
        },
        opened:{
            rotate:-45,
            backgroundColor:"rgb(255,255,255)",
        }
    }

    const Links=[
        {url: "/", title: "صفحه‌اصلی"},
        {url: "/about", title: "درباره "},
        {url: "/portfolio", title: "رزومه "},
        {url: "/contact", title: "تماس"},
    ]

    const listVariants={
        closed:{
            x:"100vw",
        },
        opened:{
            x:0,
            
            transition:{
                when:"beforeChildren",
                staggerChildren: 0.2,
            }
        }
    }

    const listItemVariants={
        closed:{
            opacity:0,
            x:-10,
        },
        opened:{
            opacity:1,
            x:0,
        }
    }
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
                <motion.div variants={topVariants} animate={open? "opened" : "closed" } className="w-10 h-1 bg-black rounded origin-left "></motion.div>
                <motion.div variants={centerVariants} animate={open? "opened" : "closed"} className="w-10 h-1 bg-black rounded"></motion.div>
                <motion.div variants={bottomVariants} animate={open? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left "></motion.div>
            </button>
            {open && (
            <motion.div variants={listVariants} initial="closed" animate="opened" className="top-0 left-0 absolute h-screen w-screen bg-black text-white flex flex-col justify-center items-center gap-8 text-4xl z-40">
                {Links.map(link=>(
                    <motion.div variants={listItemVariants} key={link.title} className="">
                    <Link  href={link.url} >{link.title} </Link>

                    </motion.div>
                ))}
            </motion.div>
            )}
            </div>
        </div>
    )
}

export default Navbar