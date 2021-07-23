import Baffle from "baffle-react";
import { useState } from "react";
const Contact = () => {
    const [update,setUpdate]=useState(true);
    const [obfuscate,setObfuscate]=useState(true)

    setTimeout(()=>{
      setObfuscate(false)
      setUpdate(true)
    },2000)
    return (
        <div id="contact" className=" relative primary-bg contact flex flex-col  px-5 py-5 lg:flex-row sm:px-10 lg:ml-32 lg:px-20">
            <h1 className="absolute top-5 right-0 text-4xl  bg-text lg:text-8xl md:text-6xl sm:text-4xl">Message</h1>
            <div data-aos="fade-up" className="flex flex-col  justify-items-center form w-full p-5">
            <p className="tag font-bold">&lt;h1&gt;</p>
            <h1 className="about-title text-4xl py-2 font-bold lg:text-6xl"><Baffle
          speed={50}
          characters="▓▒█ ▒█▒█▓ ░<>>▒ /▒< />"
          obfuscate={obfuscate}
          update={update}
          revealDuration={2000}
          revealDelay={0}
        >
        Contact
        </Baffle>
        </h1>

                <p className="tag font-bold">&lt;/h1&gt;</p>
                <p className="tag font-bold pt-2">&lt;form&gt;</p>
            <form className="w-full ">
             <div className="flex ">
             <div className="relative w-1/2 mr-1 input px-2 py-3 rounded secondary-bg w-full my-2 outline-none">
              <input placeholder="Name" type="text" className="rounded secondary-bg w-full  outline-none"  />
               <div className="full-line effect"></div>
              </div>
             <div className="relative w-1/2 ml-1 input px-2 py-3 rounded secondary-bg w-full my-2 outline-none">
              <input placeholder="Email" type="email" className="rounded secondary-bg w-full  outline-none"  />
               <div className="full-line effect"></div>
              </div>
                 
             </div>
             <div className="relative w-full input px-2 py-3 rounded secondary-bg w-full my-2 outline-none">
              <input placeholder="Subject" type="text" className="rounded secondary-bg w-full  outline-none"  />
               <div className="full-line effect"></div>
              </div>
              <div className="relative px-2 py-3 input rounded w-full my-2 secondary-bg">
              <textarea  name="" className=" px-2 w-full secondary-bg  outline-none" placeholder="Message" id="" cols="30" rows="10"></textarea>
              <div className="full-line effect"></div>
              </div>
            </form>
            <p className="tag font-bold">&lt;/form&gt;</p>
            <button className="mt-1 rounded main-btn py-2 px-8 outline-none text-xl">Submit</button>
            </div>
                
            <div data-aos="fade-up" className="  map w-1/2 p-5 w-full flex items-center justify-center">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60952.85914208979!2d74.1622353360408!3d17.288813917757672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc182450c753bad%3A0xb3493b19ae7886ca!2sKarad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1626854176823!5m2!1sen!2sin" width="500" height="450" allowfullscreen="" loading="lazy" ></iframe>
            </div>
        </div>
    )
}

export default Contact
