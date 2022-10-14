import { useState } from "react";
import "./Form.css";
import Button from "../components/Button";
function DeleteForm() {
  const [id, setID] = useState(0);
  function handleDeleteClick() {
    fetch(`http://localhost:3000/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deletedReview) => console.log(deletedReview));
      window.location.href = '/home'
  }
  return (
    <div className="form">
      <div className="form__container">
        <h1>Delete order</h1>
        <form >
          <input
            label="id"
            name="id"
            type="number"
            placeholder="your review number .."
            onChange={(e) => setID(e.target.value)}
          />
          <Button
            onClick={handleDeleteClick}
            name="Delete"
            bgColor="black"
            color="gray"
            padding="8px"
            radius="10px"
            fontSize="20px"
          />
        </form>
      </div>
    </div>
  );
}

export default DeleteForm;
