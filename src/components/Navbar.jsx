import logo from "../assets/S.png"; 
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"



const Navbar = () => {
 const scrollToSection = (sectionId) => {
    var section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector('nav').offsetHeight; 
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - navbarHeight - 20; 
      window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    } )
    }
    else {
        console.warn(`Section with id '${sectionId}' not found.`);
      }
    };
  return (
    <nav className="lg:mb-10 sm:mb-40 flex  items-center justify-between fixed top-0 left-0 right-0 bg-gray-900 py-1 z-50">
      
    <div className='flex flex-shrink-0 items-center'>
        <img className="mx-2 w-20" src={logo} alt="logo" ></img>
    </div>
    <div className=" lg:flex items-center justify-center w-full max-w-6xl sm:flex-wrap">
      <button className="hover:text-gray-400 hover:underline mx-6"  onClick={()=>scrollToSection('Me')}>Home</button>
      <button className="hover:text-gray-400 hover:underline mx-6"  onClick={()=>scrollToSection('About')}>About</button>
      <button className="hover:text-gray-400 hover:underline mx-6"  onClick={()=>scrollToSection('Technologies')}>Technologies</button>
      <button className="hover:text-gray-400 hover:underline mx-6"  onClick={()=>scrollToSection('Experience')}>Experience</button>
      <button className="hover:text-gray-400 hover:underline mx-6"  onClick={()=>scrollToSection('Projects')}>Projects</button>
      <button className="hover:text-gray-400 hover:underline mx-6"  onClick={()=>scrollToSection('Contact')}>Contact</button>
    </div>
    <div className='m-8 flex items-center  justify-center gap-4 text-2xl'>
      <a href="https://github.com/Susmitha-Pasupuleti" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/susmithapasupuleti/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin/>
      </a>
        
    </div>
    </nav>
  )
}

export default Navbar
