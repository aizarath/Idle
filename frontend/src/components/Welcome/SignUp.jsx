import React from "react";

export const SignUp = () => {
  return (
    <form>
      <input type="email" placeholder="Email or mobile number" />
      <input type="password" placeholder="Create Password" />
      <input type="password" placeholder="Confirm Password" />
      <button className="cherry-btn">Sign Up</button>
    </form>
  );
};
