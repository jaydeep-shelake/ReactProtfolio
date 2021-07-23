import {FaGithubAlt} from 'react-icons/fa'
import {AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'
import {FaTimes} from 'react-icons/fa'
import {connect} from 'react-redux'
import {close} from '../actions'
const SideBanner = (props) => {
    const data=[
        {name:'About',class:'bor',},
        {name:'Skills'},
        {name:'Projects'},
        {name:'Expirence'},
        {name:'Contact'},
    ]
    return (
        <div className={`side-bar flex items-center flex-col justify-start fixed  w-32 top-0 left-0 ${props.open.open&& 'down'}`}>
            <div className="logo flex items-center flex-col justify-center bg-black w-full py-3">
                <img className="j" src="https://jacekjeznach.com/wp-content/themes/new/img/logo.png" alt="jaydeep" />
                <h1 className="text-white text-base	">Jaydeep</h1>
                <h1 style={{color:'gray'}} className="text-xs">Web developer</h1>
            </div>
            <div className="flex items-center flex-col w-full mt-6">
              {
                data.map((text,i)=>(
                    <a href={`#${text.name.toLowerCase()}`} className={`side-text w-full text-center py-4 ${text.class} cursor-pointer`}key={i}>
                      {text.name}
                    </a>
                ))
              }
              <div className="social flex py-2">
                <a href="https://github.com/jaydeep-shelake"><FaGithubAlt className="icon "/></a>
                <a href="https://instagram.com/jaydeep_shelake101"><AiFillInstagram className="icon"/></a>
                <a href="https://www.linkedin.com/in/jaydeep-shelake-a348771b2"><AiFillLinkedin className="icon"/></a>
              </div>
            </div>
            <div className="times absolute top-6 right-10"
            onClick={()=>props.close(false)}
            >
                <FaTimes className="text-3xl text-white"/>
            </div>
        </div>
    )
}

const mapStateToProps=(state)=>{
  return{open:state.open}
}
export default connect(mapStateToProps,{close})(SideBanner)
