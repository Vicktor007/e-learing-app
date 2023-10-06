import React, { useState } from 'react'
import Button from '../components/Button'

export default function ThrowError() {

    const [error, setError] = useState(null)
    const handleError = (e) => {

// using JS
        // try {
        //     throw new Error("Damn it!");
        //  } catch (event){
        //     console.log(`${event.name}:${event.message}`)
        //     }

        // using react
        try {
            throw  Error("Error from React Component!");
         } catch (error){
            setError(error);
            }
        };

        if(error) {
            return <div className="container">
                <div className="alert alert-danger">
                    Caught an {error.message}
                </div>
            </div>
        }
         
    
  return (
    <div className='container'>
      <h1 className="title">Throw Error</h1>
      <Button onClick={handleError}/>
    </div>
  )
}
