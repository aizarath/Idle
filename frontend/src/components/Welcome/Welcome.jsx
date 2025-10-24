import { useState } from "react";
import { LogIn } from "./LogIn";
import { SignUp } from "./SignUp";
import bgWall from "../../assets/StarryNightGreen.jpg";

export const Welcome = ({ onAuthSuccess }) => {
  const [showLogIn, setShowLogIn] = useState(true);

  const handleAuthSuccess = (user) => {
    onAuthSuccess(user);
  };

  return (
    <div className="w-screen h-screen justify-center items-center bg-gray-900">
      <div
        style={{ backgroundImage: `url(${bgWall})` }}
        className="absolute contrast-80 bg-cover bg-no-repeat"
      >
        <div className="z-10 p-12 bg-[#000000dc] flex flex-col min-w-xs max-w-lg h-max m-8 gap-8">
          <h1 className="font-cherry text-7xl leading-20">
            Welcome to <span>IDLE</span>
          </h1>
          {showLogIn ? (
            <div className="flex-col">
              <LogIn onLogInSuccess={handleAuthSuccess} />
              <section className="flex justify-between">
                <button
                  onClick={() => setShowLogIn(false)}
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
              <SignUp onSignUpSuccess={handleAuthSuccess} />
              <section className="flex justify-between">
                <button
                  onClick={() => setShowLogIn(true)}
                  className="text-gray-500 underline text-sm"
                >
                  Already have an account? Login
                </button>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
