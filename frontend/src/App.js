// import { Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatsPage from "./Pages/ChatsPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={HomePage} exact />
        <Route path="/chats" Component={ChatsPage} />
      </Routes>
    </div>
  );
}

export default App;
