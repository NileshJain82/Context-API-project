import React, { useContext } from 'react'
import { anotherContext } from '../App'

function Login() {
    const {value,setValue} = useContext(anotherContext)
    const handleClick = ()=>{
        setValue("Hello from the setValue")
    }
  return (
    <>
    <div className="bg-blue-100 text-black m-4  p-4 ">From Login Component :- {value}</div>
    <button onClick={handleClick} className="bg-blue-100 text-black m-4  p-4 ">Click Me</button>
    <div className="bg-blue-100 text-black m-4  p-4" >From Login Component :- {value}</div>
    </>
    
  )
}

export default Login