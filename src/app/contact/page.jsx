"use client"
import {motion} from "framer-motion"

const ContentPage = () =>{
    return(
        <motion.div
        className="h-full"
        initial={{y:"-200vh"}}
        animate={{y:"0%"}}
        transition={{duration: 1}}
        >
        <div className="">Contant Page</div>
            
        </motion.div>
    )
}

export default ContentPage