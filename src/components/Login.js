import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative w-full h-screen">
      <Header />

      <div className="absolute inset-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fb5cb900-0cb6-4728-beb5-579b9af98fdd/web/IN-en-20250127-TRIFECTA-perspective_cf66f5a3-d894-4185-9106-5f45502fc387_large.jpg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 p-12 bg-black/80 rounded-lg">
        <form>
          <h1 className="text-white text-3xl font-bold mb-8">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {isSignInForm ? null : (
            <div className="my-4">
              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full bg-black/60 p-4 text-md rounded-md text-white placeholder:text-md focus:outline-white border"
              />
            </div>
          )}

          <div className="my-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-black/60 p-4 text-md rounded-md text-white placeholder:text-md focus:outline-white border"
            />
          </div>
          <div className="my-4">
            <input
              type="password"
              placeholder={isSignInForm ? "Enter Your Password" : "New Password"}
              className="w-full bg-black/60 p-4 text-md rounded-md text-white placeholder:text-md focus:outline-white border"
            />
          </div>
          <div className="my-4">
            <button className="w-full text-md px-4 py-2 rounded-md bg-red-600 text-white font-semibold">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <div className="my-4 text-white">
            {isSignInForm ? (
              <span className="text-gray-300">New to Netflix? </span>
            ) : <span className="text-gray-300">Already Registered? </span>}

            <button className="font-semibold" onClick={toggleSignInForm}>
              {isSignInForm ? "Sign Up Now" : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
