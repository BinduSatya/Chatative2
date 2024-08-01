import React, { useState, useEffect } from "react";
import axios from "axios";

const ChatsPage = () => {
  const [chatNames, setChatNames] = useState([]);
  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat/");
    // console.log(data);
    setChatNames(data);
  };
  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      {chatNames.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default ChatsPage;
