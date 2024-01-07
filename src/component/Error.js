import React from 'react'
// react give us a hook to display a customize error
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const err = useRouteError();
  return (
    <>
    <div>Error</div>
    <h3>{err.status} : {err.statusText}</h3>
    </>
  )
}

export default Error