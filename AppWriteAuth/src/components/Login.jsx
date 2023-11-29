import React, { useState, useContext } from "react";
import { AuthContext } from "../Imports";
import { Link, Navigate } from "react-router-dom";
import { AuthServices } from "../Imports";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const { isAuth } = useContext(AuthContext);
  const { setIsAuth } = useContext(AuthContext);
  if (isAuth) {
    return <Navigate to="/" />;
  }

  const handleSubmit = () => {
    if (email === "" || password === "") {
      setResult("Please fill in all fields");
      return;
    }
    if (!email.match(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)*(\.[a-zA-Z]{2,})$/)) {
      setResult("Please enter a valid email address");
      return;
    }

    AuthServices.createEmailSession(email, password)
      .then(
        (res) => (
          localStorage.setItem("sessionId", res.$id),
          localStorage.setItem("userId", res.userId),
          setIsAuth(!isAuth),
          alert(`${res.userId} Sucessfully Logged In!`)
        )
      )
      .catch((err) => setResult(err.message));
  };
  return (
    <div className="flex justify-center min-h-[100vh] bg-[#0f172a] items-center">
      <div className="w-full max-w-md">
        <form className="bg-slate-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="mt-4 mb-8 text-5xl uppercase font-black text-center text-black">
            Login
          </h1>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your Email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="**************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6 text-center text-3xl font-bold text-black">
            {result}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleSubmit}
            >
              Sign In
            </button>
            <Link
              to="/register"
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            >
              Forgot Password?
            </Link>
          </div>
          <hr className="my-5 text-center" />
          <div className="text-center">
            <span>OR</span>
            <Link to="/register">
              <button
                className="ml-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                REGISTER
              </button>
            </Link>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Smile Foundation. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Login;
