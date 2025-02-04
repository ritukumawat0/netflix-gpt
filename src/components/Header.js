import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="flex justify-between w-full z-10 px-8 py-2 absolute bg-gradient-to-b from-black">
      <img
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
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
