import React, { useState, useEffect } from "react";
import CategoryForm from "./CategoryForm";
import axios from "axios";
import { Button } from "react-bootstrap";

const CategoryView = (props) => {
  const [category, setCategory] = useState({});
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    axios.get("/api/categories/${props.match.params.id}").then((res) => {
      setCategory(res.data);
    });
  }, []);

  const deleteCategory = () => {
    axios
      .delete("/api/categories/${props.match.params.id}")
      .then(props.history.push("/"));
  };

  const editCategory = (id, genre) => {
    axios.put("/api/categories${id}", category).then((res) => {
      setCategory(res.data);
      return category;
    });
  };
  return (
    <>
      {editing ? (
        <CategoryForm
          toggleEdit={setEditing}
          editCategory={editCategory}
          category={category}
        />
      ) : (
        <h1 align="center">{category.name}</h1>
      )}
      <hr />
      <Button
        variant="outline-danger"
        type="button"
        onClick={() => deleteCategory(props.match.params.id)}
      >
        Delete
      </Button>

      <Button
        variant="outline-success"
        type="button"
        onClick={() => setEditing(!editing)}
      >
        Edit
      </Button>
    </>
  );
};

export default CategoryView;
