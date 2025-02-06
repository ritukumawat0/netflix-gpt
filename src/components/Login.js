import React, { useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [type, setType] = useState("password");
  const [errMessage, setErrMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleValidation = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrMessage(message);

    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          //signup
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrMessage(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          //signin
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorMessage = error.message;
          const errorCode = error.code;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div className="relative w-full h-screen">
      <Header />

      <div className="absolute inset-0">
        <img
          src={BG_URL}
          alt="background"
          className="w-full opacity-100 h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 max-lg:w-2/3 max-sm:w-full max-sm:mx-4 p-12 bg-black/70 rounded-lg">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="text-white text-3xl font-bold mb-8">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {isSignInForm ? null : (
            <div className="my-4">
              <input
                ref={name}
                type="text"
                placeholder="Your Full Name"
                className="w-full bg-black/50 p-4 text-md rounded-md text-white placeholder:text-md focus:outline-white border"
              />
            </div>
          )}

          <div className="my-4">
            <input
              ref={email}
              type="email"
              placeholder="Email Address"
              className="w-full bg-black/50 p-4 text-md rounded-md text-white placeholder:text-md focus:outline-white border"
            />
          </div>
          <div className="my-4 relative">
            <input
              ref={password}
              type={type ? "password" : "text"}
              placeholder={
                isSignInForm ? "Enter Your Password" : "New Password"
              }
              className="w-full bg-black/50 p-4 text-md rounded-md text-white placeholder:text-md focus:outline-white border"
            />
            <p className="text-red-600 mt-4">{errMessage}</p>
            <span
              onClick={() => setType(!type)}
              className="absolute right-4 top-1/3 transform -translate-y-1/2 cursor-pointer"
            >
              {type ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="my-4">
            <button
              onClick={handleValidation}
              className="w-full text-md px-4 py-2 rounded-md bg-red-600 text-white font-semibold"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </div>
          <div className="my-4 text-white">
            {isSignInForm ? (
              <span className="text-gray-300">New to Netflix? </span>
            ) : (
              <span className="text-gray-300">Already Registered? </span>
            )}

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
