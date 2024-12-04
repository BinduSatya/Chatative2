import "./App.css";
import Homepage from "./Pages/HomePage";
import Chatpage from "./Pages/Chatpage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chats" element={<Chatpage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
