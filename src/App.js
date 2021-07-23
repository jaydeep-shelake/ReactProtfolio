import React from 'react'
import About from './components/About'
import Banner from './components/Banner'
import SideBanner from './components/SideBanner'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Audio from './components/Audio'
const App = () => {
    
    return (
        <div>
         <SideBanner/>
         <Audio/>
         <Banner/>
         <About/>
         <Project/>
         <Contact/>
         <Footer/>
        </div>
    )
}

export default App
