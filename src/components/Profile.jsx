import React, { useContext } from 'react';
import UserContext from '../context/userContext';

function Profile() {

  // Destructuring the value from UserContext, using the same variable name 'user' as given in the prop 
  const { user } = useContext(UserContext);

  // Destructuring 'name' as user from the context value 
  const { name= user } = useContext(UserContext);

  return (
    <>
    <div className="bg-red-100 text-black m-4  p-4 ">Profile Name : {user}</div>
    <div className="bg-red-100 text-black m-4  p-4 ">Profile Name : {name}</div>
    </>
  );
}

export default Profile;