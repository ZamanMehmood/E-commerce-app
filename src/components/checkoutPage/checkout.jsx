import React from "react";
import { useNavigate } from "react-router-dom";
import "./checkout.scss";
import HomePage from "../homePage/HomePage";

const Checkout = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    alert("Your payment is submmited");
  };

  return (
    <div className="pt-5 checkout-container">
      <div className="checkout-style">
      <button
        className=" btn btn-success shop-button"
        onClick={() => navigate("/")}
      >
        Shop More
      </button>
      <h2 className="border-bottom">checkout page</h2>
      <p>
        You can pay through <span className="text-success">Stripe payment</span>
      </p>
      <button className="btn btn-info" onClick={handlePayment}>
        pay
      </button>
    </div>
    </div>
  );
};

export default Checkout; 