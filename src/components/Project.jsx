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
              <ProjectCard title="Google Drive Clone"
              text="A drive like app build on react redux and firebase"
              github="ReactGoogleDriveClone"
              live="https://driveclone-6e9ac.web.app/"
              data="fade-left"
              />
              <ProjectCard title="Netflix Clone"
              text="A Netflix clone app build on top react redux and firebase"
              github="ReactNetflixClone"
              live="https://netflixreactclone-93749.web.app/"
              data="fade-up"
              />
              <ProjectCard title="Story JS"
              text="Story posting app made using NodeJS materialize css..."
              github="Story.js"
              live=""
              data="fade-right"
              />
              <ProjectCard title="Amazon Clone"
              text="A E-commerce app build on NextJS redux and firebase"
              github="NextJSAmazonClone"
              live="https://next-jsa-mazon-clone.vercel.app/"
              data="fade-left"
              />
              <ProjectCard title="Pizza Dilevery app"
              text="A Pizza Delevery system made on NodeJS.,Express and MongoDB"
              github="PizzaDelivery"
              live=""
              data="fade-up"
              />
              <ProjectCard title="College Sarthi"
              text="internship project where I worked with team on Exam portal website "

              live="https://collegesarathi.com/"
              data="fade-right"
              />
            </div>
        </div>
    )
}

export default Project
//https://tobiasahlin.com/moving-letters/#6