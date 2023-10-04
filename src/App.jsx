
import UserContextProvider  from "./context/UserContextProvider"
import Profile from "./components/Profile"
import { createContext, useState } from "react"
import Login from "./components/Login"
 
export const anotherContext = createContext()

function App() {

    const [value,setValue] = useState("Hello")

  return (
    <>

{/* Here we have used the component UserContextProvider inside that the functioning is same*/}   

    <UserContextProvider>
    <Profile />
    </UserContextProvider>

{/* Here we have used the .Provider here only no need of making a separate component*/}  

    <anotherContext.Provider value={{value,setValue}} >
      <Login/>
    </anotherContext.Provider>
    
    </>
  )
}


export default App