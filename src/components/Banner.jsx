
import ReactTypingEffect from 'react-typing-effect';
import Particles from 'react-particles-js';
import {GiHamburgerMenu} from 'react-icons/gi'
import {connect} from 'react-redux'
import {setOpen} from '../actions'
import { useState } from 'react';
import Baffle from "baffle-react";
const Banner = (props) => {
    const [update,setUpdate]=useState(true);
    const [obfuscate,setObfuscate]=useState(true)

    setTimeout(()=>{
      setObfuscate(false)
      setUpdate(true)
    },2000)

      let particles = 150
            if(window.innerWidth>860){
               particles=150;
            }
            if(window.innerWidth<860){
                particles=50;
            }
            if(window.innerWidth<550){
                particles=25;
            }

        console.log(window.innerWidth)
    
    return (
        <section className="banner primary-bg p-10 lg:ml-32 lg:p-20">
            <Particles
            params={{
                "particles": {
                    "number": {
                        "value":particles
                    },
                    "size": {
                        "value": 3
                    },
                    "color": {
                        "value": "#08fdd8"
                      },
                  
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }}
            />
            <div className="absolute top-10 left-42">
            <p className="tag font-bold">&lt;h1&gt;</p>
            <h1 className="text-4xl  font-bold text-white  lg:text-6xl">Hi,</h1>
            
            <div className="flex items-center justify-content-center">
            <h1 className="text-4xl  font-bold text-white mr-2   lg:text-6xl">I'm</h1>
                <img className="j mb-4" src="https://jacekjeznach.com/wp-content/themes/new/img/logo.png" alt="" />
            <h1 style={{whiteSpace:'nowrap'}} className="text-4xl font-bold text-white  lg:text-6xl">aydeep,</h1>
            </div>
            <h1 className="text-4xl  font-bold text-white  lg:text-6xl">{
                <ReactTypingEffect
                text={["Web developer", "Mechanical Engineer"]}
              />
               }</h1>
            <p className="tag font-bold">&lt;h1/&gt;</p>
            <p className="tag font-bold mt-2">&lt;p&gt;</p>
            <p style={{color:'#8d8d8d'}} className="font-bold text-xl ">
            <Baffle
          speed={50}
          characters="▓▒█ ▒█▒█▓ ░<>>▒ /▒< />"
          obfuscate={obfuscate}
          update={update}
          revealDuration={2000}
          revealDelay={0}
        >
        Front End / Back End developer
        </Baffle></p>
            <p className="tag font-bold ">&lt;p/&gt;</p>
            <button className="mt-10 main-btn py-2 px-8 outline-none text-xl">Contact me</button>
            </div>
            <div className="absolute top-6 right-10"
             onClick={()=>props.setOpen(true)}
            >
              <GiHamburgerMenu className="text-white text-3xl visible lg:invisible"/>
            </div>
        </section>
    )
}

const mapStateToProps=(state)=>{
    return {open:state.open}
}
export default connect(mapStateToProps,{setOpen})(Banner)
