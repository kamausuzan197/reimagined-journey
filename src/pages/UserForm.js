import  './Form.css'
import Button from "../components/Button";
import {useState} from 'react'
import UpdateReview from './UpdateReview';
function UserForm() {
    const [name, setName] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("http://localhost:9292/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        }),
      })
        .then((res) => res.json())
        .then((newUser) => UpdateReview(newUser.id));
      window.location.href = "/review";
    }
    return (
        <div className='form'>
            <div className='form__container'>
                <h1>User Form</h1>
                <form >
                    <input
                        label="name"
                        name="name"
                        type="text"
                        placeholder="your name .."
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <input
                        label="email"
                        name="email"
                        type="text"
                        placeholder="email .."
                    />
                    <Button
                        onClick={handleSubmit}
                        name="Save"
                        bgColor="black"
                        color="gray"
                        padding="8px"
                        radius="10px"
                        fontSize='20px' />
                </form>
            </div>
        </div>
    )
}

export default UserForm;