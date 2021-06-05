import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Job = ({ title, company, salary, categoryId }) => {
  return (
    <div>
      {title}
      <p>${company}</p>
      <p>${salary}</p>
      <Button
        as={Link}
        to={{
          pathname: `/categories/${categoryId}/items/edit`,
          state: { title, salary },
        }}
      >
        edit
      </Button>
    </div>
  );
};

export default Job;
