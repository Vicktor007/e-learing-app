import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError();

  return (
    <div className='alert alert-warning d-flex flex-column'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <i>
      {error.status} {error.statusText} 
      {error.message}</i>
    </div>
  )
}
