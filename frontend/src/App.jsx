import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Welcome } from "./components/Welcome/Welcome";
import { ChatRoom } from "./components/ChatRoom/ChatRoom";
import socketService from "./services/socket";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const savedUser = localStorage.getItem("user");

    if (token && savedUser) {
      setUser(JSON.parse(savedUser));

      socketService.connect(token);
    }
  }, []);

  const handleAuthSuccess = (userData) => {
    setUser(userData);

    // connect socket after login
    const token = localStorage.getItem("token");
    socketService.connect(token);
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);

    // Disconnect socket on logout
    socketService.disconnect();
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Navigate to="/chat" replace />
              ) : (
                <Welcome onAuthSuccess={handleAuthSuccess} />
              )
            }
          />
          <Route
            path="/chat"
            element={
              user ? (
                <ChatRoom user={user} onLogOut={handleLogOut} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
