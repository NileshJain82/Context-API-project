import React, { useContext } from 'react';
import UserContext from '../context/userContext';

function Profile() {
  const { user } = useContext(UserContext);
  if(!user) return (<div className="bg-blue-200 m-4 p-4 text-center text-gray-900 text-lg font-medium ">Please Enter The Name </div>)

  return (
    <>
    <div className="bg-blue-200 m-4 p-4 text-center text-gray-900 text-lg font-medium">Welcome {user.name} </div>
    </>
  );
}

export default Profile;