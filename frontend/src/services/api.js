const API_URL = import.meta.env.VITE_API_URL;

// Function to handle fetch requests
const fetchAPI = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      "Content-type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  };

  const response = await fetch(`${API_URL}${endpoint}`, config);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Request failed");
  }

  return response.json();
};

// Auth API calls
export const authAPI = {
  register: (data) =>
    fetchAPI("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  login: (data) =>
    fetchAPI("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
