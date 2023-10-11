import React, { useContext } from 'react'
// components
import Title from '../Title'
// page components
import CategoriesCard from '../page-components/CategoriesCard'


// icons
import {AiFillHtml5, AiFillPlayCircle} from "react-icons/ai"
import {DiCss3Full} from "react-icons/di"
import {SiJavascript, SiPowerbi} from "react-icons/si"
import {DiReact} from "react-icons/di"
import {FaRProject, FaPython, FaJava, FaFileExcel} from "react-icons/fa"
import {HiMiniCircleStack} from "react-icons/hi2"
import { ThemeContext } from '../context/themeContext'



export default function Categories({ login, handleStarLearningEvent }) {
const {theme} = useContext(ThemeContext)
  return (
    <section className="categories my-4">
    <Title text='Top categories' classes={"subtitle text-center"}/>
    <div className="categories-container d-flex" color='#ff9800'>
      <CategoriesCard
      title={"Web Development"}
      icon_1={<AiFillHtml5 size={"4em"} className='icon html5'/>} 
      icon_2={<DiCss3Full size={"4em"} className='icon css3'/>} 
      icon_3={<SiJavascript size={"4em"} className='icon js'/>} 
      btnIcon={<AiFillPlayCircle size={"2em"}/>}
      startLearningEvent={!login && handleStarLearningEvent}
      >
        <span className="fs-ig">Learn how to build web apps with:</span>
        <ul className={`mt-1 categories-ul ${theme}`} 
        >
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
        </CategoriesCard> 

        {/* Moble Development card */}
        <CategoriesCard 
        title={"Mobile Development"}
      icon_1={<DiReact size={"4em"} className='icon react'/>}
      icon_2={<SiJavascript size={"4em"} className='icon js'/>} 
      btnIcon={<AiFillPlayCircle size={"2em"}/>}
      startLearningEvent={handleStarLearningEvent}
      >
          <span className="fs-ig">Learn how to build mobile apps with:</span>
        <ul className={`mt-1 categories-ul ${theme}`}>
          <li>React Native</li>
          <li>Javascript</li>
          <li>Expo</li>
        </ul>
        </CategoriesCard>
      
      <CategoriesCard
      title={"Data Science"}
      icon_1={<FaPython size={"4em"} className='icon html5'/>} 
      icon_2={<FaRProject size={"4em"} className='icon css3'/>} 
      icon_3={<FaJava size={"4em"} className='icon js'/>} 
      btnIcon={<AiFillPlayCircle size={"2em"}/>}

      startLearningEvent={handleStarLearningEvent}

      >
        <span className="fs-ig">Learn how to analyze data with:</span>
        <ul className={`mt-1 categories-ul ${theme}`}>
          <li>Python</li>
          <li>R</li>
          <li>Java</li>
        </ul>
      </CategoriesCard>

      <CategoriesCard
      title={"Business"}
      icon_1={<FaFileExcel size={"4em"} className='icon html5'/>} 
      icon_2={<SiPowerbi size={"4em"} className='icon css3'/>} 
      icon_3={<HiMiniCircleStack size={"4em"} className='icon js'/>} 
      btnIcon={<AiFillPlayCircle size={"2em"}/>}

      startLearningEvent={handleStarLearningEvent}

      >
        <span  className="fs-ig">Learn how to analyze data with:</span>
        <ul className={`mt-1 categories-ul ${theme}`}>
          <li>Excel</li>
          <li>Power BI</li>
          <li>SQL</li>
        </ul>
      </CategoriesCard>
    </div>
  </section>
  )
}
