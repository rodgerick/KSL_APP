import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Item from "./Item";
import ItemForm from "./ItemForm";

const CategoryView = ({ history, match }) => {
  const [category, setCategory] = useState({});
  const [items, setItem] = useState([]);

  useEffect(() => {
    Axios.get(`/api/categories/${match.params.id}`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((err) => {
        alert("Error: No categories loaded");
      });

    Axios.get(`/api/categories/${match.params.id}/items`)
      .then((res) => {
        setItem(res.data);
      })
      .catch((err) => {
        alert("Error: Could not retrieve items");
      });
  }, []);

  function renderItems() {
    if (!category.items) {
      return;
    }
    if (category.items.length === 0) {
      return <p>No Inventory</p>;
    }
    return category.items.map((r) => {
      return <Item key={r.id} {...r} categoryId={category.id} />;
    });
  }

  return (
    <div>
      <Card.Header as="h1">{category.name}</Card.Header>
      <Button as={Link} to={`/categories/${category.id}/new`}>
        New Item
      </Button>
      <Card>{renderItems()}</Card>
      <Button variant="dark" onClick={history.goBack}>
        Back
      </Button>
    </div>
  );
};

export default CategoryView;

