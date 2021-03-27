import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function UserCard(props) {
  const history = useHistory();
  const { id } = props;
  const { username, text, createdAt, likes } = props.messages;
  return (
    <Card style={{ width: "20rem" }} id="text-center">
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
        <Button onClick={() => history.push(`/likes/${id}`)} variant="primary">
          Like
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MessageCard;
