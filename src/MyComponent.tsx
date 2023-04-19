import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000"); // Replace with your server URL

const MyComponent: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on("message", (message: string) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  }, []);

  const sendMessage = (message: string) => {
    socket.emit("message", message);
  };

  return (
    <div>
      <h1>Messages:</h1>
      <ul>
        {messages.map((message: string, index: number) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <input type="text" placeholder="Enter message" />
      <button onClick={() => sendMessage("Hello, world!")}>Send</button>
    </div>
  );
};

export default MyComponent;
