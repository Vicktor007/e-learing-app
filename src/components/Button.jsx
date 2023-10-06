import React from 'react'

export default function Button({classes, text, type, style, onClick, icon}) {
    const alertMissingHandler = () => window.alert("Add eventhandler to this button!"); 
    // this function is to check if buttons have event handlers

  return (
    <button
     type={type} 
     style={style}
      className={`btn ${classes}`}
      onClick={onClick ? onClick : alertMissingHandler}
      >
        <div className="d-flex">
            {text ? text : "Button"}
            {icon}
        </div>
    </button>
  )
}
