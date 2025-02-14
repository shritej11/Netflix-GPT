import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] =useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message =  checkValidateData(email.current.value, password.current.value); 
    // console.log(message);
    setErrorMessage(message);
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
        
        onSubmit={ (e) => e.preventDefault() }
        className="w-full min-h-[400px]  max-w-md p-10 bg-black/75 text-white rounded-lg">
          <h1 
          className="caret-transparent text-3xl font-bold py-6">
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
            className="bg-gray-700 p-3 px-3 w-90 rounded-lg mb-8"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="bg-gray-700 p-3  px-3 w-90 rounded-lg mb-8"
          />
          
          <p className="font-semibold text-white text-sm py-2 mb-1.5">{errorMessage}</p>

          <button 
          className="caret-transparent w-90 bg-red-700 p-5 mb-8 rounded-lg"
          onClick={handleButtonClick}>
            {isSignInForm 
            ? "Sign In" 
            : "Sign Up"}
          </button>

          <p 
          className="caret-transparent text-center mt-4 cursor-pointer" 
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
