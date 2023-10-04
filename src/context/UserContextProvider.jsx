import React, { useContext, useState } from 'react'
import UserContext from './userContext'


function UserContextProvider({children}) {
    const [user,setUser] = useState("")
  return (
    <UserContext.Provider value={{user,setUser}}>
     {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider
