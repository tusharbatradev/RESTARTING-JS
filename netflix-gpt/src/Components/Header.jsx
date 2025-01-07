import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName
          })
        );
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });

    // This will unsubscribe when the component is unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between p-2">
      <img
        className="w-44"
        src={LOGO}
        alt="Logo"
        srcSet=""
      />

      {user && (
        <div className="flex justify-center items-center gap-2">
          <img
            src={USER_AVATAR}
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
