import React from 'react'
import { useState } from 'react'

export default function UsestateHookEx() {
    const [count, setCount] =useState(0);

    let countJS = 0;
    function countInJs(e) {
        if (e.target.classList.contains("+")) {
            console.log(countJS);
            return (countJS +=1);
        } else { 
            console.log(countJS);
            return (countJS -= 1);
        }
    }
    console.log(countJS)

    // javascript example


  return (
    <div>
      <h1>UseState Example</h1>
      <button className='btn +' onClick={(e) => countInJs(e)}>+</button>
      <span>Count is {countJS}</span>
      <button className='btn' onClick={(e) => countInJs(e)}>-</button> 
      {/* Using JS */}

      <button className='btn +' onClick={() => setCount(count + 1)}>+</button>
      <span>Count is {count}</span>
      <button className='btn' onClick={() => setCount(count - 1)}>-</button>
      {/* Uing useState */}

    </div>
  )
}
