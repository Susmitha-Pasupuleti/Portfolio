import {ME_CONTENT} from '../constants';
import MyPhoto from '../assets/MyPhoto.png'
import {motion} from 'framer-motion'



const container=(delay)=>({
    hidden: { x: -100, opacity: 0 },
    visible :{
        x:0,
        opacity:1,
        transition:{duration:0.5, delay:delay}
    },
})
const Me = () => {
    const imageStyle = {
        borderRadius: '10px',
    }  
  return (
    <div id="Me" className="border-b border-neutral-900 pb-4 lg:mb-20 mt-24 px-4 sm:px-6 lg:px-8 ">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                     className="pb-10 text-5xl font-thin tracking-tight mt-16 lg:text-6xl">Susmitha Pasupuleti </motion.h1>
                    <motion.span variants={container(0.5)}
                    initial="hidden"
                    animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Software Developer</motion.span>
                    <motion.p variants={container(1)}
                    initial="hidden"
                    animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify">{ ME_CONTENT }</motion.p>
                </div>
            </div>
        <div className="w-full lg:w-1/2 lg:p-10 ">
        <div className="flex justify-center ">
            <motion.img 
            initial={{x:100,opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1,delay:1.2}}
            src={MyPhoto} alt="My Photo" style={imageStyle}/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Me
