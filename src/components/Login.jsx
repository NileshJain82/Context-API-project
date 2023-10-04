import React, { useContext, useState } from 'react'
import UserContext from '../context/userContext'

function Login() {

    const {setUser} = useContext(UserContext)
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")

    const handleClick = (e)=>{
      e.preventDefault()
      setUser({name, password})

    }
  return (
    <div className='flex justify-center p-5 '> 
    <input className="center bg-orange-200 text-lg font-medium  border-2 text-gray-900" type='text' value={name} placeholder='  Name' onChange={(e)=> setName(e.target.value)}/>
    <input className="ml-10 border-2 bg-orange-200 text-lg font-medium text-gray-900" placeholder='  password' type='text' value={password} onChange={(e)=> setPassword(e.target.value)}/>

    <button className='ml-6 font-medium text-gray-900 p-2  bg-orange-200 border-2' onClick={handleClick}>Submit</button>
    </div>
    
  )
}

export default Login