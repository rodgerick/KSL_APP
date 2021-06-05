import React from "react";
import Category from "./Category";
import CategoryForm from "./CategoryForm";
import axios from "axios";
import { CardDeck } from "react-bootstrap";

const Category = () => {
  const [categorys, setCategory] = useState([]);

  useEffect(() => {
    axios.get(`/api/categorys`).then((res) => {
      setCategory(res.data);
    });
  }, []);

  const addGenre = (category) => setCategory([...categorys, category]);

  const renderCategory = () => {
    return categorys.map((category) => (
      <Category key={category.id} {...category} {...categorys} />
    ));
  };
  return (
    <>
      <h1 align="center"> Category Listings</h1>
      <hr />
      <CategoryForm add={addCategory} />
      <br />
      <CardDeck>{renderCategory()}</CardDeck>
    </>
  );
};

export default Category;
