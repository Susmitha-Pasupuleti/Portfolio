
import {CONTACT} from "../constants"
import {motion} from "framer-motion"



const Contact = () => {
  return (
    <div id="Contact" className=" border-b border-neutral-800 pb-24 my-12">
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{y:-100,opacity:0}}
        transition={{duration:1.5}}
         className='="my-10 text-center text-4xl'>Contact</motion.h1>
        <div className="text-center tracking-tighter">
            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{x:-100,opacity:0}}
            transition={{duration:1.5}}
            className=" my-4"><b>Address: </b>{CONTACT.address}</motion.p>
            <motion.p 
            whileInView={{opacity:1,x:0}}
            initial={{x:100,opacity:0}}
            transition={{duration:1.5}}
            className=" my-4"><b>Phn No: </b>{CONTACT.phoneNo}</motion.p>
            <a href="#" className="border-b">{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact
