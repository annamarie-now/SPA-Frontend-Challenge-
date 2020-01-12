import React, { Component } from "react";
import axios from "axios";
import "../css/tables.scss";
import { Form, Button } from "react-bootstrap";

export default class universes extends Component {
  state = {
    universes: []
  };

  componentDidMount() {
    axios
      .get("https://happy-stars.herokuapp.com/api/universe")
      .then(res => {
        this.setState({
          universes: res.data.universes
        });
      })
      .catch(function(error) {
      });
  }
  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { id, name, maxSize } = this.state;
    this.setState({
      universes: [...this.state.universes, { id, name, maxSize }]
    });
  };
  render() {
    return (
      <div>
        <table className="table table-striped">
        <thead>
            <tr className="tableHeader tableHeaderUniverses">
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">maximum size</th>
            </tr>
          </thead>
          <tbody>
            {this.state.universes.map(universe => {
              return (
                <tr key={universe.id}>
                  <td>{universe.id}</td>
                  <td>{universe.name}</td>
                  <td>{universe.maxSize}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Form className="formField" onSubmit={this.handleSubmit}>
          {" "}
          <Form.Control
            className="formField"
            type="text"
            name="id"
            id="id"
            value={this.state.id}
            onChange={this.handleChange}
            placeholder="id"
          />
          <Form.Control
            className="formField"
            type="text"
            name="name"
            id="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="name"
          />
          <Form.Control
            className="formField"
            type="text"
            name="maxSize"
            id="maxSize"
            value={this.state.maxSize}
            onChange={this.handleChange}
            placeholder="maximum size"
          />
          <Button className="addButton addButtonUniverses" variant="primary" type="submit">
            add a universe
          </Button>
        </Form>
      </div>
    );
  }
}
