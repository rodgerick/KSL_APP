import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const ItemForm = ({ history, match, location }) => {
  const [name, setName] = useState(
    location.state && location.state.name ? location.state.name : ""
  );
  const [price, setPrice] = useState(
    location.state && location.state.price ? location.state.price : 0
  );
  const [description, setDescription] = useState(
    location.state && location.state.price ? location.state.price : ""
  );

  async function addItem() {
    try {
      const { category_id } = match.params;
      let res = await axios.post(`/api/categories/${category_id}/items`, {
        name,
        price,
      });
      history.push(`/categories/${category_id}`);
    } catch (err) {
      console.log(err);
    }
  }

  function editItem() {
    const { category_id, id } = match.params;
    axios
      .put(`/api/categories/${category_id}/items/${id}`, { name, price, description })
      .then((res) => {
        history.push(`/categories/${category_id}`);
      })
      .catch((err) => {
        alert("error in update");
      });
  }
  function handleSubmit(e) {
    e.preventDefault();

    if (match.params.id) {
      editItem();
    } else {
      addItem();
    }

  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Label as="h1">
          {match.params.id ? "Edit Item" : "New Item to Add"}
        </Form.Label>
        <Form.Group widths="equals">
          <Form.Control
            label="Name"
            placeholder="new item"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Form.Control
            label="Price"
            placeholder="enter the price"
            value={price}
            type="number"
            pattern="^\d*(\.\d{0,2})?$"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <Form.Control
            label="Description"
            placeholder="enter the description"
            label="description"
            placeholder="new description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
        <Button variant="dark" onClick={history.goBack}>
          Back
        </Button>
      </Form>
    </>
  );
};

export default ItemForm;
