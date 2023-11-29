import React from "react";
import { Link, Navigate } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="min-h-screen min-w-full flex justify-center items-center flex-col gap-5">
        <div className="text-5xl font-bold uppercase">Home</div>
        <div className="text-3xl">I'm Publicly Available!</div>
        <Link to="/profile">
          <button className="py-2 px-5 bg-slate-700 hover:bg-slate-500 duration-700 text-white rounded-lg">
            PROFILE
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
