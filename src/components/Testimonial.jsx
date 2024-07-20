import { testimonials } from "../constants"


const Testimonial = () => {
  return (
    <div className="mt-10 tracking-wide">
        <h2 className="text-3xl 3xl sm:5xl lg:6xl text-center my-10 lg:my-20">
            Comments section
        </h2>
        <div className="flex flex-wrap justify-center">
            {testimonials.map((testimonial, index)=>(
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="bg-neutral rounded-xl p-6 text-md border border-neutral-800 font-thin">
                        <p>{testimonial.text}</p>
                        <div className="flex mt-8 items-start">
                            <img src={testimonial.image} alt="" className="w-12 h-12 mr-6 rounded-full border border-neutral-300"/>
                        </div>
                        <h6>
                            {testimonial.user}
                        </h6>
                        <span className="text-sm font-normal italic text-neutral-600">
                            {testimonial.company}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonial