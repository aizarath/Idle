import React from "react";
import { useNavigate } from "react-router-dom";
import { CircleArrowRight } from "lucide-react";

export const LogIn = () => {
  const nav = useNavigate();
  const handleLogin = () => {
    nav("/chat");
  };
  return (
    <form>
      <input type="email" placeholder="Email or username" />
      <input type="password" placeholder="Password" />
      <button onClick={handleLogin} className="cherry-btn">
        Login
      </button>
    </form>
  );
};
