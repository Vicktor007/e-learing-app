import React from 'react'
import Fruits from './Fruits'

// export default function FruitsList({fruitsData}) {
//   return (
//     <div className='container container-sm bg-info p-1'>
//       <h4 className="subtitle text-light">Fruits list</h4>
//       <Fruits fruitsData={fruitsData}/>
//     </div>
//   )
// }


export default function FruitsList() {
  return (
    <div className='container container-sm bg-info p-1'>
      <h4 className="subtitle text-light">Fruits list</h4>
      <Fruits />
    </div>
  )
}
