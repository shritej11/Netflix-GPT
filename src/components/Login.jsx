import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

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

      
      <div className="flex justify-center items-center min-h-screen relative">
        <form 
        className="w-full max-w-md p-10 bg-black/75 text-white rounded-lg">
          <h1 className="text-3xl font-bold py-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="bg-gray-700 p-3 px-3 w-full rounded-lg mb-8"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="bg-gray-700 p-3 px-3 w-full rounded-lg mb-8"
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-gray-700 p-3  px-3 w-full rounded-lg mb-8"
          />
          <button className="w-full bg-red-700 p-3 mb-8 rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-center mt-4 cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
