"use client"
import {motion} from "framer-motion"


const AboutPage = () =>{
    return(
        <motion.div
        className="h-full"
        initial={{y:"-200vh"}}
        animate={{y:"0%"}}
        transition={{duration: 1}}
        >
            {/* CONAINER */}
        <div className="">
        {/* TEXT CONTAINER */}
            <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 ">
                {/* BIO GRAPHY */}
            <div className="">BIO GRAPHY</div>
            {/* SKILL */}
            <div className="">SKILL</div>
            {/* EXPERINCE */}
            <div className="">EXPERINCE</div>

            </div>
            {/* SVG CONTAINER */}
            <div className=""></div>
        </div>
        </motion.div>

    )
}

export default AboutPage