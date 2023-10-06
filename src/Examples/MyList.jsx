import React from 'react'

export default function MyList() {
    const items = ["Item1", "Item2", "Item3"]
  return (
    <div>
      <h1>my list</h1>
      <ul>
        {items.map((item, ) => (<li key={item}>{item}</li>))}
      </ul>
    </div>
  )
}
