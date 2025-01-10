import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("error");
      });
  };

  const handleGptSearchClick = () => {
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // This will unsubscribe when the component is unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between p-2">
      {/* Netflix Logo */}
      <img className="w-44" src={LOGO} alt="Logo" srcSet="" />

      {user && (
        <div className="flex justify-center items-center gap-2">
          {/* Language Dropdown */}
          {showGptSearch && (
            <select
              onChange={handleLanguageChange}
              className="p-2 bg-red-600 font-bold text-white rounded-lg px-8"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {/* GPT Search button */}
          <button
            onClick={handleGptSearchClick}
            className="p-2 m-2 px-4 bg-red-600 text-white font-bold rounded-lg"
          >
            {showGptSearch ? "Home 🏠" : "GPT Search😍"}
          </button>

          {/* SignOut Button and Profile Icon */}
          <div className="flex flex-col items-center justify-center gap-1 ">
            <img src={USER_AVATAR} alt="user" className="w-12 h-12" />
            <button
              onClick={handleSignOut}
              className="p-1 text-sm text-white font-bold rounded-lg "
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
