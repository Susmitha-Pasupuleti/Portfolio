import {ABOUT_TEXT} from '../constants'

const About = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
        <h1 className="my-10 text-center text-4xl">About
            <span className=" text-neutral-500" > Me</span>
        </h1>
        <div className="w-full lg:w">
            <div className="flex justify-center lg:justify-start ">
            <p className='my-2 maxw-xl py-0 text-justify'>{ABOUT_TEXT}</p>
            </div>
        </div>
    </div>
  )
}

export default About