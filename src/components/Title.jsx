import React from 'react'

export default function Title({text="E-learning", classes}) {
  return (
    <div>
      <h1 className={`title ${classes}`}>{text}</h1>
      
    </div>
  )
}
