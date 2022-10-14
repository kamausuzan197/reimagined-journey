import  './Form.css'
import Button from "../components/Button";
import {useState} from 'react'
import UpdateReview from './UpdateReview';
function UserForm() {
  const [comment, setComment] = useState("");
  const [laundryID, setLaundryID] = useState(0);
  const [orderNumber, setOderNumber] = useState(0);
  const [userId, setUserId] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comment: comment,
        laundry_id: laundryID,
        orderNumber: orderNumber,
        user_id: userId,
      }),
    })
      .then((res) => res.json())
      .then((newReview) => console.log(newReview));
    window.location.href = "/home"
   }
  
    
    return (
        <div className='form'>
            <div className='form__container'>
                <h1>Create Review</h1>
                <form>
          <input
            label="orderNumber"
            name="orderNumber"
            type="number"
            placeholder="order number .."
            onChange={(e) => setOderNumber(e.target.value)}
          />
          <input
            label="Comment"
            name="comment"
            type="text"
            placeholder="comment .."
            onChange={(e) => setComment(e.target.value)}
          />
          <input
            label="LaundryID"
            name="laundryID"
            type="number"
            placeholder="laundry id .."
            onChange={(e) => setLaundryID(e.target.value)}
          />
          <input
            label="userID"
            name="UserID"
            type="number"
            placeholder="user id .."
            onChange={(e) => setUserId(e.target.value)}
          />
          <Button
            onClick={handleSubmit}
            name="Create review"
            bgColor="black"
            color="gray"
            padding="8px"
            radius="10px"
            fontSize="20px"
          />
        </form>
            </div>
        </div>
    )
}

export default UserForm;