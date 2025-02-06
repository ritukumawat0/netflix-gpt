import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";
import { toggleShowGptSearch } from "../utils/gptSlice";
import { setLang } from "../utils/configSlice";
import { langOptions } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleLangData = (e) =>{
    dispatch(setLang(e.target.value))
  }

  const handleShowGptSearch=()=>{
    dispatch(toggleShowGptSearch());
  }

  useEffect(() => {
    // Listener ko set karna
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Component band hone par listener ko remove karna (unsubscribe) - cleanup function
    return () => unsubscribe(); // Cleanup to prevent memory leak
  }, []);

  return (
    <div className="flex justify-between w-full z-10 px-8 py-2 absolute bg-gradient-to-b from-black bg-transparent">
      <img src={LOGO_URL} alt="logo" className="w-44" />
      {user && (
        <div>
          <select onClick={(e)=>handleLangData(e)} className="px-4 py-2 outline-none mr-4 font-semibold rounded-lg">
              {langOptions.map((option)=>{
                return <option key={option.identifier} value={option.name}>{option.name}</option>
              })}
          </select>
          <button onClick={handleShowGptSearch} className="py-2 px-8 text-white bg-purple-600 rounded-md mr-8 font-semibold hover:bg-purple-700">
            GPT Search
          </button>
          {user?.displayName ? (
            <span className="text-red-400 text-2xl mr-4">
              {user?.displayName}
            </span>
          ) : (
            <span className="text-red-700 text-4xl">👤</span>
          )}

          <button onClick={handleSignOut} className=" text-xl text-white">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
