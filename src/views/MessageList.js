// TODO: Create a MessageList to display messages
import Menu from "../components/Menu";
import { useState, useEffect } from "react";
import { getMessages } from "../fetchRequests";
import { Link } from "react-router-dom";
import MessageCard from "../components/MessageCard";

function MessageList() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages().then((data) => {
      setMessages(data.messages);
    });
  }, []);

  return (
    <div className="messageColumn">
      <div>
        <Menu />
      </div>
      <h1>Message List</h1>
      <Link to="/" style={{ color: "red" }}>
        Go Home
      </Link>
      {messages.map((messages) => {
        return (
          <MessageCard messages={messages} id={messages.id} key={messages.id} />
        );
      })}
      <Link to="/" style={{ color: "red" }}>
        Go Home
      </Link>
    </div>
  );
}

export default MessageList;
