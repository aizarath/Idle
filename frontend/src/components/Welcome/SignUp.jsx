import { useState } from "react";
import { authAPI } from "../../services/api";

export const SignUp = ({ onSignUpSuccess }) => {
  const [formData, setFormData] = useState({
    username: "",
    displayName: ",",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.prevenDefault();

    try {
      const data = await authAPI.register(formData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", data.user);
      onSignUpSuccess(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Create Password"
        required
      />
      <button type="submit" className="cherry-btn">
        Sign Up
      </button>
    </form>
  );
};
