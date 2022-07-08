import Card from "react-bootstrap/Card";
import React from "react";
import { v4 as uuidv4 } from "uuid";

export default class ContactCard extends React.Component {
  state = {
    loading: true,
    contactList: null,
  };

  async componentDidMount() {
    const url = "https://first-api-attempt.jwdev.workers.dev/contacts";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ contactList: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.contactList) {
      return <div>Did not load!</div>;
    }

    return (
      <>
        {this.state.contactList.map((item) => (
          <Card style={{ width: "18rem", margin: "4rem" }} key={uuidv4()}>
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {item.phone}
              </Card.Subtitle>
              <Card.Text>{item.address}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
}
