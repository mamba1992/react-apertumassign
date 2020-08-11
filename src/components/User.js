import React from "react";
import { Card, Image } from "semantic-ui-react";
const User = ({ userData }) => {
  return (
    <Card>
      <Image
        src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>
          Name: {userData.firstName} {userData.lastName}
        </Card.Header>
        <Card.Meta>
          <span className="date">Age: {userData.age}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};
export default User;
