import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase.js";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice.js";
import { BG_URL } from "../utils/constants.js";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate form data
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    // SignIn, Signup Logic
    if (!isSignInForm) {
      // SignUp Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
          // ..
        });
    } else {
      // SignIn Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    }
  };

  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute inset-0">
        <img
          src={BG_URL}
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-8 bg-black bg-opacity-80 ml-[750px] mt-[150px] flex flex-col justify-center items-center"
      >
        <h2 className="text-white text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 text-white bg-gray-700 m-2 w-full rounded-md"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="Email"
          className="p-4 text-white bg-gray-700 m-2 w-full rounded-md"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 text-white bg-gray-700 m-2 w-full rounded-md"
        />
        <button
          className="p-4 m-4 bg-red-800 w-full text-white"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-red-600 font-bold text-lg">{errorMessage}</p>

        <p
          className="py-4 text-white text-left cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? `New to Netflix  Sign Up Now`
            : "Allready a member Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
