// TODO: create a MessageItem component which displays 1 message
import { useState, useEffect } from "react";
import { getIntergalacticMessage } from "../fetchRequests";
import { Link } from "react-router-dom";
import MessageCard from "../components/MessageCard";

function MessageItem(props) {
  const [messages, setMessages] = useState([]);
  const id = props.match.params.id;
  useEffect(() => {
    getIntergalacticMessage(id).then((data) => {
      setMessages(data.message);
    });
  }, []);

  return (
    <div className="message_list">
      <h1>Message List</h1>
      <Link to="/views/MessageList" style={{ color: "yellow" }}>
        See Message List
      </Link>
      {messages && (
        <MessageCard messages={messages} id={messages.id} key={messages.id} />
      )}
      <Link to="/" style={{ color: "red" }}>
        Go Home
      </Link>
    </div>
  );
}

export default MessageItem;
