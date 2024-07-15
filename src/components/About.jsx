import {ABOUT_TEXT} from '../constants'
import {motion} from "framer-motion"

const About = () => {
  return (
    <div id="About" className=" border-b border-neutral-900 pb-4 ">
        <motion.h1 whileInView={{opacity:1,y:0}}
        initial={{y:-100,opacity:0}}
        transition={{duration:1.5}}className="my-10 text-center text-4xl">About
            <span className=" text-neutral-500" > Me</span>
        </motion.h1>
        <div className="w-full lg:w">
            <div className="flex justify-center lg:justify-start ">
            <p className='my-2 maxw-xl py-0 text-justify'>{ABOUT_TEXT}</p>
            </div>
        </div>
    </div>
  )
}

export default About
