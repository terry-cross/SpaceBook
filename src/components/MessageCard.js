import { Card, Button } from "react-bootstrap";
// import { propTypes } from 'react-bootstrap/esm/Image';
// import { propTypes } from 'react-bootstrap/esm/Image';
import { useHistory } from "react-router-dom";
// import { useStore } from "../store";

function MessageCard(props) {
  const history = useHistory();
  const { id } = props;
  const { username, text, createdAt, likes } = props.messages;
  return (
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{text}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <div>About: {username}</div>
        <div>About: {createdAt}</div>
        <Button
          onClick={() => history.push(`/messages/${id}`)}
          variant="primary"
        >
          See Intergalactic messages
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MessageCard;
