import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";


import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";



const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;
    //sign in/ sign up

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, 
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          })
            .then(() => { 
              const { uid, email, displayName,photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
     })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "- " + errorMessage)
        });

    }
    else {
      
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "- " + errorMessage)
        });

    };



  }

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative min-h-screen">
      <Header />

      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_large.jpg"
          alt="bg-img"
          className="w-full h-full object-cover"
        />
      </div>


      <div className=" flex justify-center items-center min-h-screen relative">

        <form

          onSubmit={(e) => e.preventDefault()}
          className="w-full min-h-[500px]  max-w-md p-10 bg-black/80 text-white rounded-4xl">
          <h1
            className="caret-transparent font-Domine text-3xl font-bold py-8">
            {isSignInForm
              ? "Sign In"
              : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-700 p-3 px-3 w-90 rounded-lg mb-8"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="bg-gray-700 p-3 px-3   w-90 rounded-lg mb-8"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="bg-gray-700 p-3  px-3 w-90 rounded-lg mb-8"
          />

          <p className=" font-semibold text-white text-sm py-2 mb-1.5">{errorMessage}</p>

          <button
            className="caret-transparent font-Domine font-bold w-90 bg-red-700 p-5 mb-8 rounded-lg"
            onClick={handleButtonClick}>
            {isSignInForm
              ? "Sign In"
              : "Sign Up"}
          </button>

          <p
            className="caret-transparent font-Domine text-center mt-4 cursor-pointer"
            onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already Registered? Sign In Now"
            }
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
