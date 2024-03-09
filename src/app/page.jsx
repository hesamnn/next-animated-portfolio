"use client"
import Image from "next/image";
import {motion} from "framer-motion"
const Homepage = () => {
  return(
    <motion.div
    className="h-full"
    initial={{y:"-200vh"}}
    animate={{y:"0%"}}
    transition={{duration: 1}}
    >

<div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
  {/* IMAGE SECTION */}
  <div className="h-1/2 relative lg:w-1/2 lg:h-full">

    <Image src="/hero.png"  alt="" fill className="object-contain"/>
  </div>
  {/* TEXT SECTION */}
  <div className="h-1/2 lg:w-1/2 lg:h-full flex flex-col gap-8 justify-center items-center">
    <h1 className="text-4xl font-bold md:text-6xl">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </h1>
    <p className="md:text-xl">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores ipsam assumenda beatae enim at repudiandae voluptatibus ut? Nesciunt unde, quae a hic doloremque impedit repellat saepe non repudiandae voluptatibus rerum!
    </p>
    <div className="flex gap-4">
      <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my work</button>
      <button className="p-4 rounded-lg ring-1 ring-black ">Contact Me</button>
    </div>
  </div>
</div>
</motion.div>

  );
};

export default Homepage;
