import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Welcome } from "./components/Welcome/Welcome";
import { ChatRoom } from "./components/ChatRoom/ChatRoom";

function App() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/chat" element={<ChatRoom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
