import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidData(
      name.current?.value || "",
      email.current.value,
      password.current.value,
      isSignInForm
    );
    setErrorMessage(message);
    // console.log(message);

    // sign in / sign up
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_large.jpg"
          alt="bg-image"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-4/12 absolute p-12 bg-black/80 text-white my-36 mx-auto left-0 right-0 rounded-md"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full bg-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 w-full bg-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-zinc-800 rounded-md focus:outline-none focus:ring-1 focus:ring-white"
        />
        <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>
        <button
          type="button"
          className="p-4 my-6 bg-red-600 hover:bg-red-700 w-full rounded-md font-semibold"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-gray-400 mt-6 cursor-pointer hover:underline"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
