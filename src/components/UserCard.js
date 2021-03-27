import { Card, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function UserCard(props) {
  const history = useHistory();
  const { username, displayName, about, createdAt, updatedAt, pictureLocation, googleId} = props.users;
  return (
    <Card style={{ width: "20rem" }} id="text-center">
      <Card.Body>
        <Card.Title>{username}</Card.Title>
        <Card.Text>{displayName}</Card.Text>
        <div>About: {about}</div>
        <div>Joined: {createdAt}</div>
        <Button
          onClick={() => history.push(`/users/${username}`)}
          variant="primary"
        >
          See Intergalactic messages
        </Button>

      </Card.Body>
    </Card>
  );
}

export default UserCard;
