import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) {
          const { uid, email, displayName, photoURL } = user;
          dispatch(
            addUser(
            { uid: uid, 
              email: email, 
              displayName: displayName 
            }
          )
          );
          navigate("/browse")
        }
        else {
          // User is signed out
          dispatch(removeUser());
          navigate("/")
        }
      });
      //unsubscribe when component unmounts
      return () => unsubscribe();
  }, [])

  return (
    <div className="flex justify-between absolute px-15  w-screen  py-2 bg-gradient-to-b from-black z-10">
      <img
        className="w-45 font-bold"
        src={LOGO}
        alt="logo"
      />
    </div>
  )
}

export default Header