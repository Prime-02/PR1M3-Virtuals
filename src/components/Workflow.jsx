import { CheckCircle2 } from "lucide-react"
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20">
         <h2 className="text-3xl sm:text-5xl lg:6xl mt-10 lg:mt-6 text-center tracking-wide">
            Accelerate Your  <span className="bg-gradient-to-r from-orange-500 to-orange-800 rounded-md text-transparent bg-clip-text">
            {" "}
       Coding workflow
        </span>
        </h2>
        <div className="flex flex-wrap justify-center">
            <div className="p-2 w-full lg:w-1/2">
            <img src={codeImg} alt="" />
            </div>
            <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item,index)=>(
                <div key={index} className="flex mb-12">
                    <div className="text-green-400 w-10 mx-6 p-2 h-10 justify-center items-center rounded-full">
                    <CheckCircle2/>
                    </div>
                    <div>
                    <h5 className="mt-1  font-extrabold text-lg">
                    {item.title}
                    </h5>
                    <p className="mb-5 text-md p-2 text-neutral-500">
                        {item.description}
                    </p>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </div>
  )
}

export default Workflow