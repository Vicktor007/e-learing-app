import React from 'react'
import Button from './Button'
import Title from './Title'
import { BsArrowRight } from 'react-icons/bs';
// imgs
import headerImg from "../img/header-img.png";


export default function Header({children, login, handleScrollToOffers, handleStarLearningEvent}) {
  return (
    <header className='header d-flex'>
       <div className="headercontent mb-2">

<Title 
 text='Learn to code by watching others'
  classes={"header-title fs-xxl mb-3"}
  />
  <p className='header-text mb-3'>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
  </p>
  <div className="header-btn">
    <Button 
    classes={'btn-primary text-light'} 
    type={"button"} 
    
    
    text={"Try it free 30 days"}
    onClick={!login ? handleStarLearningEvent : ()=> window.alert("You are logged in.")}
    />

   <Button 
    classes={'btn-secondary'} 
    type={"button"} 
   
    text={"Learn more"}
    icon={<BsArrowRight/>}
    onClick={handleScrollToOffers}

    />

  </div>
  <img src={headerImg} alt="header-img" className='header-img'/>
  </div>
      {children}
    </header>
  )
}
