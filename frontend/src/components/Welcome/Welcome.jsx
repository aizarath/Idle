import { useState } from "react";
import { LogIn } from "./LogIn";
import { SignUp } from "./SignUp";
import bgWall from "../../assets/StarryNightGreen.jpg";

export const Welcome = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="w-screen h-screen justify-center items-center">
      <div
        style={{ backgroundImage: `url(${bgWall})` }}
        className="absolute contrast-80 w-screen h-screen bg-cover bg-no-repeat"
      ></div>
      <div className="z-10 p-12 bg-white flex flex-col min-w-xs max-w-lg h-max m-8 gap-8">
        <h1 className="font-cherry text-7xl text-lime-700 leading-20">
          Welcome to <span>IDLE</span>
        </h1>
        {showLogin ? (
          <div className="flex-col">
            <LogIn />
            <section className="flex justify-between">
              <button
                onClick={() => setShowLogin(false)}
                className="text-gray-500 underline text-sm"
              >
                Create an account
              </button>
              <button className="text-gray-500 underline text-sm">
                Forgot password
              </button>
            </section>
          </div>
        ) : (
          <div className="flex-col">
            <SignUp />
            <section className="flex justify-between">
              <button
                onClick={() => setShowLogin(true)}
                className="text-gray-500 underline text-sm"
              >
                Already have an account? Login
              </button>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};
