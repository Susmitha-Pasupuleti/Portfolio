import {RiReactjsLine} from "react-icons/ri"
import { DiNodejs } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import {SiMongodb} from "react-icons/si"
import {BiLogoPostgresql} from "react-icons/bi"
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io'
import { DiJsBadge } from 'react-icons/di'
import { DiDjango } from "react-icons/di";
import {motion} from 'framer-motion'



const iconVariants=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[-10,10],
        duration:duration,
        transition:{duration: duration,
            repeat:Infinity,
            repeatType:"reverse",
            ease:"linear"}


    }


})
const Technologies = () => {
  return (
    <div className=" border-b border-neutral-800 pb-24 my-12">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{y:-100,opacity:0}}
        transition={{duration:1.5}}
        className='="my-20 text-center text-4xl'>Technologies</motion.h1>
        <motion.div whileInView={{opacity:1,x:0}}
        initial={{x:-100,opacity:0}}
        transition={{duration:1.5}} className='flex flex-wrap items-center justify-center gap-4 my-2'>
            <motion.div
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"
             className='my-6 rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className="text-7xl" style={{ color: '#F16529' }} />
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate" className='my-6 rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoCss3 className="text-7xl" style={{  color: '#006fc4' }} />
            </motion.div>
            <motion.div
             variants={iconVariants(3.5)}
             initial="initial"
             animate="animate" className='my-6 rounded-2xl border-4 border-neutral-800 p-4'>
                <DiJsBadge className="text-7xl" style={{  color: '#fcb900' }} />
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate"className=' rounded-2xl border-4 border-neutral-800 p-4'>
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>
            <motion.div
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate" className='my-6 rounded-2xl border-4 border-neutral-800 p-4'>
                <DiNodejs className="text-7xl text-green-500"/>
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate" className='my-6 rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMysql className="text-7xl text-sky-700"/>
            </motion.div>
            <motion.div
             variants={iconVariants(3.5)}
             initial="initial"
             animate="animate"
              className='my-6 rounded-2xl border-4 border-neutral-800 p-4'>
                 <DiDjango className="text-7xl " style={{  color: '#0c4b33' }} />
            </motion.div>
            <motion.div
             variants={iconVariants(2.5)}
             initial="initial"
             animate="animate"className='my-6 rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className="text-7xl text-green-400"/>
            </motion.div>
            <motion.div
             variants={iconVariants(3)}
             initial="initial"
             animate="animate" className='my-6 rounded-2xl border-4 border-neutral-800 p-4'>
                <BiLogoPostgresql className="text-7xl text-sky-700" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies