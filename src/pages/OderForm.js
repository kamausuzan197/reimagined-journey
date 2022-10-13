import "./Form.css";
import Button from "../components/Button";
import { useState } from "react";
import UpdateReview from "./UpdateReview";

function OderForm() {
  const [name, setName] = useState("");
  const [variety, setVariety] = useState("");
  const [price, setPrice] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:9292/laundry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        variety: variety,
        price: price,
      }),
    })
      .then((res) => res.json())
      .then((newOrder) => UpdateReview(newOrder.id));
    window.location.href = '/user'
  }

  return (
    <div className="form">
      <div className="form__container">
        <h1>Order Form</h1>
        <form action="/user">
          <input
            label="Name"
            name="name"
            type="text"
            placeholder="title .."
            onChange={(e) => setName(e.target.value)}
          />
          <input
            label="Price"
            name="price"
            type="number"
            placeholder="price .."
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            label="Variety"
            name="variety"
            type="text"
            placeholder="variety .."
            onChange={(e) => setVariety(e.target.value)}
          />
          <Button
            onClick={handleSubmit}
            name="Create Order"
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

export default OderForm;
