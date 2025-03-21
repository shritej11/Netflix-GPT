import React from 'react'
import { auth } from "../utils/firebase"
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';


const UserSignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  return (
    <div className="bg-black text-left text-white rounded-md absolute p-2 top-17 right-13 border-2 ">
      <ul>
        <li className="caret-transparent cursor-pointer font-Domine text-sm p-2 hover:underline">
          Account
        </li>
        <li className="caret-transparent cursor-pointer font-Domine text-sm p-2 hover:underline">
          Help Center
        </li>
        <button onClick={handleSignOut}>
          <li className="caret-transparent cursor-pointer font-Domine p-2 text-sm border-t-1 hover:underline">
            Sign out of Netflix
          </li>
        </button>
      </ul>
    </div>
  )
}

export default UserSignOut;