import React, { useEffect, useState } from 'react'

export default function UseEffectHook() {
    const [count, setcount] = useState(0);
    const [text, setText] = useState(0);
    const [fadeIn, setFadeIn] = useState("");
    
    useEffect(() => {
        setText(text + 1);
        fadeIn === "" && setFadeIn("fadeIn")
    }, [count]);
    
  return (
    <div>
      <h1 className='title'>UseEffectHook</h1>
      <h2 className='subtitle'>{`You clicked ${text} times`}</h2>
      <p className={`card card-warning bg-danger text-light p-1 ${fadeIn}`}>
        Time clicked {count}
        <button className='btn' onClick={() => {setcount(count + 1);
        setFadeIn("")}}>
            Click
        </button>
        </p>    </div>
  )
}
