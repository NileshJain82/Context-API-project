import UserContextProvider  from "./context/UserContextProvider"
import Profile from "./components/Profile"
import Login from "./components/Login"
 
function App() {
  return (
    <>
    <UserContextProvider>
    <div className="text-center mt-40 m-4 p-8 bg-blue-200 text-3xl text-orange-500 font-bold ">Learning Context API 😊</div>
    <Login/>
    <Profile />
    
    </UserContextProvider>
    </>
  )
}


export default App