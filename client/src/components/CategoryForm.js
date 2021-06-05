import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

const CategoryForm = (props) => {
  const [name, setName] = useState("");
  const category = { name: name };
  
  useEffect(() => {
    if (props.category) {
      setName(props.category.name);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.editCategory) {
      props.editCategory(props.category.id, category);
      props.toggleEdit();
    } else {
      axios.post("/api/categories", {name})
      .then((res) => {
        props.add(res.data);
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>
            {props.editCategory ? "Edit Category" : "Add a Category"}
          </Form.Label>
          <Form.Control
            placeholder="Category Name"
            name="name"
            required
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  );
};

export default CategoryForm;