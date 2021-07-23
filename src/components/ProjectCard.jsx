import {AiFillGithub} from 'react-icons/ai'
import {FaGlobe} from 'react-icons/fa'
const ProjectCard = ({title,text,github,live,data}) => {
    return (
        <div data-aos={data&&`${data}`} className=" relative mx-3 mt-5 project-card rounded px-2 py-5 flex flex-col items-center ">
            {/* <img src={img} alt="img" className="h-28" /> */}
            <h3 className="py-1 text-xl font-bold project-title">{title}</h3>
            <p className="text-gray-400 text-center">{text}</p>
            <div className="py-2 flex items-center ">
            {github&&<a href={`https://github.com/jaydeep-shelake/${github}`} className="pro-icon mx-2"><AiFillGithub/></a>}
            <a href={live} className="pro-icon mx-2"><FaGlobe/></a>
            </div>
            <div className="full-line effect"></div>
        </div>
    )
}

export default ProjectCard
