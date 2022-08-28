import ProjectCard from './ProjectCard'
import Baffle from "baffle-react";
import { useState } from "react";

const Project = () => {
    const [update,setUpdate]=useState(true);
    const [obfuscate,setObfuscate]=useState(true)

    setTimeout(()=>{
      setObfuscate(false)
      setUpdate(true)
    },2000)
    return (
        <div id="projects" className="ml6 relative project flex flex-col px-10 py-2 lg:ml-32 lg:p-20">
            <p className="tag font-bold">&lt;h1&gt;</p>
            <h1 className="about-title text-4xl py-2 font-bold lg:text-6xl">  <Baffle
          speed={50}
          characters="▓▒█ ▒█▒█▓ ░<>>▒ /▒< />"
          obfuscate={obfuscate}
          update={update}
          revealDuration={2000}
          revealDelay={0}
        >
        Project
        </Baffle></h1>
            <h1  className=" bg-text text-4xl font-bold absolute top-20 right-2 md:text-8xl">My Work</h1>
            <p className="tag font-bold">&lt;/h1&gt;</p>
            <p className="tag font-bold mt-2">&lt;p&gt;</p>
            <p data-aos="fade-up"  className="text-lg text-white">A small gallery of recent projects done by me. I've done them all myself and some with a team. It's only a drop in the ocean compared to the entire list.
Interested to see some more? Visit my <a className="primary-text" href="https://github.com/jaydeep-shelake">github page </a>.

</p>
<p className="tag font-bold">&lt;/p&gt;</p>
            <div className="project-card-area flex flex-wrap item-center" style={{justifyContent:"space-evenly"}}>
              <ProjectCard title="Foodly"
              text="AE-Commerce Website"
              github="Food-Delivery"
              live="https://mern-food-delivery-app.herokuapp.com/"
              data="fade-left"
              />
              <ProjectCard title=" SuperT3 "
              text="multiplayer tic tac toe game Build on React , NodeJS ,Socket.io , MongoDB (MERN Stack)"
              github="SuperT3"
              live="https://supert3.herokuapp.com/"
              data="fade-up"
              />
              <ProjectCard title="ClassConnect"
              text="A class room connect web app built on top of React, Redux and Firebase"
              github="https://github.com/Learn-Write-Repeat/DevHack22/tree/main/Web%20Development/Jaydeep-Shelake"
              live="https://auth-83ed4.web.app/"
              data="fade-right"
              />
              <ProjectCard title="NextKBC"
              text="Kon Banega Kardodpati theme quiz app built using nextjs"
              github="nextKBC"
              live="https://next-kbc.vercel.app"
              data="fade-left"
              />
              <ProjectCard title="state-district-component"
              text="A React 🔯 Library for fetching States and districts of India 💥"
              github="state-district-component"
              live="https://www.npmjs.com/package/state-district-component"
              data="fade-up"
              />
              <ProjectCard title="GoElectric"
              text="Electric bill management dashborad"

              live="https://exela-electrical-bill.herokuapp.com/"
              data="fade-right"
              />
            </div>
        </div>
    )
}

export default Project
//https://tobiasahlin.com/moving-letters/#6
