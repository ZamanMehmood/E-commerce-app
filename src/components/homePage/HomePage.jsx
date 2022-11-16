import React from "react";
import { useState, useEffect } from "react";
import "./homepage.scss";
import { Outlet, Link } from "react-router-dom";
import { productsArr } from "../products";
import isoft from "../../Assets/isoft.png";

import {
  setProducts,
  addToCart,
  removTOeCart,
  addQuantity,
  subtractQuantity,
  updateItemPrice,
} from "../../Redux/Actions/action";
import { useDispatch, useSelector } from "react-redux";
//  react-bototstrap
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { cartTotalSelector } from "../../Redux/Reducers/reducers";
//
const HomePage = () => {
  //  states for  react bootstrap modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //
  const dispatch = useDispatch();
  //  take initial states of reducers
  const products = useSelector((state) => state?.ShoppingReducer?.products);
  const cart = useSelector((state) => state?.ShoppingReducer?.cartArray);
  const cartTotal = useSelector((state) => state.ShoppingReducer.cartTotal);
  const cartLength = cart.length; // to show add to cart count in the span

  // SET_PRODUCTS

  useEffect(() => {
    dispatch(setProducts(productsArr));
  }, []);

  const addtocart = (product) => {
    console.log(product);
    const cartProductIndex = cart.findIndex((item) => {
      return item.Id === product.Id;
    });
    let newQuantity = 1;
    let updatedCart = [...cart];
    if (cartProductIndex >= 0) {
      newQuantity = updatedCart[cartProductIndex].quantity + 1;
      updatedCart[cartProductIndex].quantity = newQuantity;
      dispatch(addToCart(updatedCart));
    } else {
      updatedCart.push({ ...product, quantity: 1 });
      dispatch(addToCart(updatedCart));
    }
  };

  //  use useSelector for  the total payment  and then set the total
  const total = useSelector(cartTotalSelector);
  console.log("total", total);
  //
  const removetoCart = (product) => {
    console.log("Cart", cart);
    console.log("Product ID", product);
    const filteredArray = cart.filter((item) => {
      return item.Id !== product.Id;
    });

    console.log("filtered reaay", filteredArray);
    dispatch(removTOeCart(filteredArray));
  };

  const handleIncrement = (item) => {
    const cartArr = [...cart];
    const index = cartArr.findIndex((product) => {
      return product.Id === item.Id;
    });
    const newQuantity = (cartArr[index].quantity += 1);
    cartArr[index].quantity = newQuantity;
    dispatch(addQuantity(cartArr));
    //
  };

  const handleDecrement = (item) => {
    const cartArr = [...cart];
    const index = cartArr.findIndex((product) => {
      return product.Id === item.Id;
    });
    const newQuantity = (cartArr[index].quantity -= 1);
    cartArr[index].quantity = newQuantity;
    dispatch(subtractQuantity(cartArr));
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light main-navbar">
        <img src={isoft} alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline my-2 my-lg-0 d-flex ms-auto">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0 ms-2"
              type="submit"
            >
              Search
            </button>
          </form>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <a className="nav-link border cart-border disabled" href="#">
                Carts
              </a>
            </li>
            <li className="nav-item">
              <Button variant="light" onClick={handleShow}>
                <i
                  className="fa fa-shopping-cart text-danger fw-bold shoping-icon me-2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                ></i>
                <sup className="card-count">{cartLength}</sup>
              </Button>
            </li>
          </ul>
        </div>
      </nav>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <span className="text-primary">Your products :</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Image</th>
                <th scope="col">Qt.</th>
                <th scope="col">Price</th>
                <th scope="col">Dec</th>
                <th scope="col">Inc</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, ind) => {
                return (
                  <tr key={ind}>
                    <td>{item.Name}</td>
                    <td>
                      <img src={item.Image} height="45" width="45" />
                    </td>
                    <td>
                      <button className="btn btn-success">
                        {item.quantity}
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-success">{item.price}</button>
                    </td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleDecrement(item)}
                      >
                        -
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleIncrement(item)}
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => removetoCart(item)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/checkout">
            <div className="border">
              <span className="text text-primary ms-auto m-5 p-5 fw-bold">
                Total Payment:{" "}
                <span className="btn btn-info ms-3">{total}</span>{" "}
              </span>
              <Button variant="secondary">Go to Checkout</Button>
            </div>
          </Link>
        </Modal.Footer>
      </Modal>
      <div className="container">
        <h2 className=" fw-bold text-light text-center pt-4">Products</h2>
        <div className="row  pt-5 ">
          {products.map((product, index) => (
            <div className="col-lg-4 pb-4 " key={index}>
              <div className="card card-border">
                <img
                  src={product.Image}
                  className="card-img-top cart-image "
                  alt="card image"
                />
                <div className="card-body cart-body">
                  <p>
                    <span className="products fw-bold pe-3">Product Name:</span>
                    {product.Name}
                  </p>
                  <p>
                    <span className="products fw-bold pe-3">Product Id :</span>
                    {product.Id}
                  </p>
                  <p>
                    <span className="products fw-bold pe-3">Price :</span>
                    {product.price}
                  </p>
                  <p>
                    <span className="products fw-bold pe-3 ">Real Price:</span>
                    <strike className="text-danger">
                      {product.discountPrice}
                    </strike>
                    <span className="ps-3">(400)</span>
                  </p>
                </div>
                <button
                  className=" btn btn-primary add-to-cart-button mb-2"
                  onClick={() => addtocart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;