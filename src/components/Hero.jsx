import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const Hero = () => {
  return (
   <div className="flex flex-col items-center mt-6 lg:mt-20">
    <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        PR1M3 Virtual Build tools 
         <span className="bg-gradient-to-r from-orange-500 to-orange-800 rounded-md text-transparent bg-clip-text">
            {" "}
        for Developers
        </span>
    </h1>
    <p className="text-center text-sm mt-10 text-neutral-400 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality
    </p>
    <div className="flex space-x-6 justify-center my-10">
               <a href="#" className=" bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-3 rounded-md">
               Get Started
               </a>
               <a href="#" className="py-3 px-4 mx-3  border rounded-md">
                Documentation
               </a>
            </div>
            <div className="flex mt-10 justify-center">
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                    <source src={video1} type="video/mp4"/>
                    Your Browser does not support this video
                </video>
                <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                    <source src={video2} type="video/mp4"/>
                    Your Browser does not support this video
                </video>
               </div>
   </div>
  )
}

export default Hero