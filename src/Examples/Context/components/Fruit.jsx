import React from 'react'

export default function Fruit({ fruit }) {
  return (
    <li key={fruit.id} className="card card-info bg-warning mb-2">
                    <h2>{fruit.name}</h2>
                    <p>Price: ${fruit.price}</p>
                    <p>Weight: {fruit.weight}kg</p>
                </li>
  )
}
