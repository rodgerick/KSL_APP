import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Item = ({ name, price, description, id, categoryId }) => {
  return (
    <div>
      {name}
      <p>${price}</p>
      {description}
      <Button
        as={Link}
        to={{
          pathname: `/categories/${categoryId}/items/${id}/edit`,
          state: { name, price, description },
        }}
      >
        edit
      </Button>
    </div>
  );
};

export default Item;
