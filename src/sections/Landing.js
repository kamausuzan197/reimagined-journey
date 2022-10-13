import React from "react";
import Button from "../components/Button";
import "./Landing.css";
import Features from "./Features";
import Navbar from "../components/Navbar";

function Landing() {
  const handleUpdateButtonClick = () => {
    //redirect to the login page
    window.location.href = "/review";
  };
  const handleOrderButtonClick = () => {
    //redirect to the login page
    window.location.href = "/order";
  };
  const handleDelete = () => {
    window.location.href = "/delete";
  };
  return (
    <div>
      <Navbar />
      <div className="landing">
        <section className="ld_main">
          <div className="ld_left">
            <h1>
              Having trouble with
              <br /> laundry place?
            </h1>
            <p>
              Welcome to Safi, This is a website that allows you to place an
              <br />
              order and get your clothers cleaned, and delivered to your home.
            </p>
            <div className="ld_button">
              <Button
                onClick={handleUpdateButtonClick}
                name="Review Order"
                bgColor="blue"
                color="white"
                padding="8px"
                radius="10px"
                fontSize="26px"
              />
              <Button
                onClick={handleDelete}
                name="Delete Order"
                bgColor="white"
                color="black"
                padding="8px"
                radius="10px"
                fontSize="26px"
              />
            </div>
          </div>
          <div className="ld_right">
            <img
              className="landingimg"
              src="https://previews.123rf.com/images/dit26978/dit269781803/dit26978180300029/98385071-3d-rendering-washing-machine-in-vintage-laundry-room.jpg"
              alt="laundry"
            />
          </div>
        </section>
        <section className="features">
          <div className="upper_section">
            <h1>Features</h1>
            <br />
            <p>
              Our aim is to provide the best services to all our clients we
              understand the pain of having to deal with alot of laundry we are
              here to help you get that buden of your shoulders
            </p>
          </div>
          <div className="lower_section">
            <div className="ld_right">
              <img
                className="landingimg"
                src="https://media.gettyimages.com/photos/latin-american-men-working-together-loading-a-washing-machine-at-a-picture-id1132394814?s=612x612"
                alt="laundry"
              />
            </div>
            <div className="ld_left">
              <h1>CLOTHES VARIETY.</h1>
              <p>
                General clothes cleaning:
                <small>
                  These are items such as jeans, trousers, shorts, dresses,
                  skirts, shirts, blouses, T-shirts, gym kits, pajamas, towels,
                  sweaters, jackets and more.
                </small>
              </p>
              <p>
                Cleaning of beddings: :
                <small>
                  This includes duvets, bed sheets, blankets pillow cases, and
                  mosquito nets.
                </small>
              </p>
              <p>
                Cleaning household textiles :
                <small>
                  This covers items such as curtains, drapers, seat covers, and
                  table cloths.
                </small>
              </p>
            </div>
          </div>
        </section>
        <section className="pricing">
          <div className="card">
            <h1 className="h1">Basic</h1>
            <p className="p">up to 10 clothes</p>
            <h2 className="h2">Ksh. 500</h2>
            <Button
              onClick={handleOrderButtonClick}
              name="Order"
              bgColor="white"
              color="black"
              padding="8px"
              radius="10px"
              fontSize="26px"
            />
          </div>
          <div className="card">
            <h1 className="h1">Standard</h1>
            <p className="p">up to 100 clothes</p>
            <h2 className="h2">Ksh. 1000</h2>
            <Button
              onClick={handleOrderButtonClick}
              name="Order"
              bgColor="white"
              color="black"
              padding="8px"
              radius="10px"
              fontSize="26px"
            />
          </div>
          <div className="card">
            <h1 className="h1">Pro</h1>
            <p className="p">up to 1000 clothes</p>
            <h2 className="h2">Ksh. 3000</h2>
            <Button
              onClick={handleOrderButtonClick}
              name="Order"
              bgColor="white"
              color="black"
              padding="8px"
              radius="10px"
              fontSize="26px"
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Landing;
