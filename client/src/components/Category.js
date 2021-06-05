import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Category = (props) => {
  return (
    <>
    <div>
      <Card 
      bg="light" 
      border="info" 
      style={{width:"5rem", color:"primary" }} 
      align="center"
      as={Link}
      to={{ 
        pathname: '/api/categories/${props.id}',
      }}
      >
      {props.name}
        </Card>
      </div>
      </>
  )
};

export default Category;