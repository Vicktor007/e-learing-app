import React, { useContext } from 'react'
import Button from '../Button'
import { ThemeContext } from '../context/themeContext'
export default function CategoriesCard({
    title,
  text = true,
  icon_1,
  icon_2,
  icon_3,
  btnIcon,
  startLearningEvent,
    children,
    cardFooter = true,
    cardHeader = true,
}) {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`card card-${theme}`} style={{maxWidth: 400}}>
      {cardHeader && <div className='card-header'>
        {icon_1}
        {icon_2}
        {icon_3}
        </div>}
      <div className='card-body'>
        <h3 className="card-title">{title ? title : "Card Title"}</h3>
        <p className='card-text'>
          {text ? text : "card text"}
          {children}
        </p>
      </div>
        {cardFooter && (<div className='card-footer'>
          <Button classes={"btn-secondary"}
          text={"Start learning"}
          icon={btnIcon}
          onClick={startLearningEvent}  
         />
        </div>)}
    </div>
  )
}
