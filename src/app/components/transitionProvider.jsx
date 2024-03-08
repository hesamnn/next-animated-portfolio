'use client'


import { usePathname } from "next/navigation"
import Navbar from "./navbar"
import {delay, motion} from "framer-motion"

const { AnimatePresence } = require("framer-motion")

const TransitionProvider = ({children}) => {
    const pathName = usePathname();
    return(
        <AnimatePresence mode="wait " >
        <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-50 to-red-100">
            <motion.div
            className="h-screen w-screen bg-black fixed rounded-b-[100px] z-40"
            animate={{height: "0vh"}}
            exit={{height:"140vh"}}
            transition={{duration: 2 , ease:"easeOut"}}
            />
            <motion.div
            className="h-screen w-screen bg-red-600 fixed rounded-t-[100px] bottom-0 z-40"
            initial={{height: "140vh"}}
            animate={{height:"0vh" , transition:{delay:2}}}
            />
          <div className="h-24">
          <Navbar />
          </div>
          <div className="h-[calc(100vh-6rem)]">
          {children}
          </div>
        </div>
        </AnimatePresence>
    )
}

export default TransitionProvider