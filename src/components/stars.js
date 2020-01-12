import React, { Component } from "react";
import axios from "axios";
import "../css/tables.scss";
import { Form, Button } from "react-bootstrap";

class Stars extends Component {
  state = {
    stars: [],
    universes: [],
    index: 0
  };

  componentDidMount() {
    axios
      .get("https://happy-stars.herokuapp.com/api/star")
      .then(res => {
        this.setState({
          stars: res.data.stars
        });
      })
      .catch(function(error) {
      });

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

  universeName(uniId) {
    for (let i = 0; i < this.state.universes.length; i++) {
      if (this.state.universes[i].id === uniId)
        return this.state.universes[i].name;
    }
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
    const { id, name, universeId, universe, color } = this.state;
    this.setState({
      stars: [...this.state.stars, { id, name, universeId, universe, color }]
    });
  };

  render() {
    return (
        <>
      <div className="tableContainer">
        <table className="table table-striped">
          <thead>
            <tr className="tableHeader tableHeaderStars">
              <th scope="col">id</th>
              <th scope="col">name</th>
              <th scope="col">universe id</th>
              <th scope="col">universe</th>
              </tr>
          </thead>

          <tbody>
            {this.state.stars.map(star => {
              return (
                <tr
                className="table"
                  key={star.universeId}
                  style={{ backgroundColor: star.color }}
                >
                  <td>{star.id}</td>
                  <td>{star.name}</td>
                  <td>{star.universeId}</td>
                  <td>{this.universeName(star.universeId)}</td>
                </tr>
              );
            })}
          </tbody>
        </table></div>
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
            name="universeId"
            id="universeId"
            value={this.state.universeId}
            onChange={this.handleChange}
            placeholder="universe id"
          />
          {/*   <Form.Control
            className="formField"
            type="text"
            name="universe"
            id="universe"
            value={this.state.universe}
            onChange={this.handleChange}
            placeholder="Universe"
          /> */}
          <Form.Control
            className="formField"
            type="text"
            name="color"
            id="color"
            value={this.state.color}
            onChange={this.handleChange}
            placeholder="color"
          />
          <Button className="addButton addButtonStars"  variant="primary" type="submit">
            add a star
          </Button>
        </Form>
      </>
    );
  }
}

export default Stars;
