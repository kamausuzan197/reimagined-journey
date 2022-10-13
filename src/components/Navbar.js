import React from "react";
import "./Navbar.css";
import Button from "./Button";

function Navbar() {
    const handleOrderButtonClick = () => {
        //redirect to the login page
        window.location.href = "/order";
    }
  return (
    <div className="navbar">
      <div className="leftnav">
        <h1>Laund<em>Ury</em>.</h1>
      </div>
      <div className="rightnav">
        <span className="navlinks">
          <h2>Features</h2>
          <h2>Pricing</h2>
          {/* <h2>Contact</h2> */}
        </span>
        <Button
            onClick={handleOrderButtonClick}
              name="Order"
              bgColor="red"
              color="black"
              padding="8px"
              radius="10px"
              fontSize='26px'
        />
      </div>
    </div>
  );
}

export default Navbar;
