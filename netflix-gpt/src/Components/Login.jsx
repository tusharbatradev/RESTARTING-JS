import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute inset-0">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvZjU2MmFhZjQtNWRiYi00NjAzLWEzMmItNmVmNmMyMjMwMTM2XC9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LOYKSxIDqfPwWHR0SSJ-ugGQ6bECF0yO6Cmc0F26CQs"
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />
      </div>

      <form className="w-3/12 absolute p-8 bg-black bg-opacity-80 ml-[550px] mt-[150px] flex flex-col justify-center items-center">
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
          type="text"
          placeholder="Email"
          className="p-4 text-white bg-gray-700 m-2 w-full rounded-md"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 text-white bg-gray-700 m-2 w-full rounded-md"
        />
        <button className="p-4 m-4 bg-red-800 w-full text-white">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

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
