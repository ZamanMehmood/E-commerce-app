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
    <div className="mt-5">
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
  );
};

export default Checkout;
