import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error")
      });
  };

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
    <div className="flex justify-between w-full z-10 px-8 py-2 absolute bg-gradient-to-b from-black">
      <img
        src={LOGO_URL}
        alt="logo"
        className="w-44"
      />
      {user && (
        <div>
          {user?.displayName ? (
            <span className="text-red-700 text-2xl mr-4">
              {user?.displayName}
            </span>
          ) : (
            <span className="text-red-700 text-4xl">👤</span>
          )}

          <button onClick={handleSignOut} className="font-bold text-xl">
            SignOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
