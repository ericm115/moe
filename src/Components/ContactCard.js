import Card from "react-bootstrap/Card";
import React from "react";

export default class ContactCard extends React.Component {
  state = {
    loading: true,
    person: null,
  };

  async componentDidMount() {
    const url = "https://first-api-attempt.jwdev.workers.dev/todos/2";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data, loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>;
    }

    if (!this.state.person) {
      return <div>didn't get a person</div>;
    }

    return (
      <>
        {this.state.person.map((item) => (
          <Card style={{ width: "18rem", margin: "4rem" }}>
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
