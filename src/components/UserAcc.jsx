import React from 'react'
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';




const UserAcc = () => {
  const navigate = useNavigate();
  
  const handleSignOut = () => {
    signOut (auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className="bg-black/85 text-left text-white rounded-xl absolute p-2 top-14 right-13 border-2 ">
      <ul>
        <li className=" text-sm p-2 hover:underline">Account</li>
        <li className=" text-sm p-2 hover:underline">Help Center</li>
        <button onClick={handleSignOut}>
          <li className=" p-2 text-sm border-t-1 hover:underline">Sign out of Netflix</li>
        </button>
      </ul>
    </div>
  )
}

export default UserAcc