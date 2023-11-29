import React from "react";
import { AuthServices } from "../Imports";
const Profile = () => {
  const handleLogout = () => {
    const sessionId = localStorage.getItem("sessionId");
    AuthServices.deleteSession(sessionId).then((res) => console.log(res));

    localStorage.removeItem("sessionId");
    localStorage.removeItem("userId");
    alert("You have been logged out!");
    window.location.reload();
  };
  return (
    <>
      <div className="min-h-screen min-w-full flex justify-center items-center flex-col gap-5">
        <div className="text-5xl font-bold uppercase">Profile</div>
        <div className="text-3xl">I'm Not Publicly Available!</div>
        <button
          className="py-2 px-5 bg-slate-700 hover:bg-slate-500 duration-700 text-white rounded-lg"
          onClick={handleLogout}
        >
          LOGOUT
        </button>
      </div>
    </>
  );
};

export default Profile;
