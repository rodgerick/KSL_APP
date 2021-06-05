import Axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const CategoryForm = ({ history }) => {
  const [name, setName] = useState("");
  const [listings, setListings] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    Axios.post("/api/categories", { name, listings, price })
      .then((res) => {
        history.push("/categories");
      })
      .catch((err) => {
        alert("Error: Create did not work");
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label as="h1">New Listing</Form.Label>
      <br />
      <Form.Group widths="equals">
        <Form.Control
          label="Name"
          placeholder="enter new name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Form.Control
          label="Listings"
          placeholder="enter listings"
          value={listings}
          onChange={(e) => setListings(e.target.value)}
          required
        />
        <Form.Control
          label="Price"
          placeholder="enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
      <br />
      <br />
      <Button variant="dark" onClick={history.goBack}>
        Back
      </Button>
    </Form>
  );
};

export default CategoryForm;

