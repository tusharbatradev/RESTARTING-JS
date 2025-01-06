import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
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
        navigate("error");
      });
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between p-2">
      <img
        className="w-44"
        src="https:/cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
        srcSet=""
      />

      {user && (
        <div className="flex justify-center items-center gap-2">
          <img
            src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABZ7qC6gxpcs0iblCWByBD5LTaBelBEw-HjkveFX7vGhCRc-qG0pkuYWNFrtmxt7SESITdIlOAzpQB4nGIoazlAPq_E41qcM.png?r=2c8"
            alt="user"
            className="w-12 h-12"
          />
          <button
            onClick={handleSignOut}
            className="bg-red-600 p-2 text-white font-bold rounded-lg "
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
