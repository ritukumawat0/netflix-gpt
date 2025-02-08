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
  const gptSearch =useSelector(store=>store.gpt.showGptSearch)

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

  // by default mobile view and if you wrire md it means desktop

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-between w-full z-10 px-8 py-2 absolute bg-gradient-to-b from-black bg-transparent">
      <img src={LOGO_URL} alt="logo" className="sm:w-44 w-28 sm:p-0 pb-4" />
      {user && (
        <div>

          {gptSearch?<select onClick={(e)=>handleLangData(e)} className="px-4 py-2 outline-none mr-2 sm:mr-4 font-semibold rounded-lg">
              {langOptions.map((option)=>{
                return <option key={option.identifier} value={option.name}>{option.name}</option>
              })}
          </select>:null}
          
          <button onClick={handleShowGptSearch} className="py-2 px-8 text-white bg-purple-600 rounded-sm mr-2 sm:mr-8 font-semibold hover:bg-purple-700">
            {gptSearch?"Home":"GPT Search"}
          </button>
          {user?.displayName ? (
            <span className="text-red-400  mr-4">
              {user?.displayName}
            </span>
          ) : (
            <span className="text-red-700 text-4xl">👤</span>
          )}

          <button onClick={handleSignOut} className="text-white sm:font-normal font-bold  sm:pt-0 pt-2">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
