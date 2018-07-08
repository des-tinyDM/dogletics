import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/bclogo.png";
import { StyledHeader } from "../styled/Containers";
import { connect } from "react-redux";
import { addToCart, getCart } from "../../ducks/cartReducer";

const Header = props => {
  console.log(props);
  return (
    <StyledHeader>
      <img src={logo} />
      <nav>
        <Link className="navlink other" to="/">
          Shop
        </Link>
        <Link className="navlink sports" to="/sports">
          Sports
        </Link>
        <Link className="navlink contact" to="/orders">
          Orders
        </Link>
        <Link className="navlink about" to="/about">
          About Us
        </Link>
        <Link className="navlink contact" to="/contact">
          Contact
        </Link>
        <Link className="navlink cart" to="/cart">
          {/* <p>Cart</p> */}
          <i className="fas fa-shopping-cart" />
          {props.cart[0] ? (
            <p>{props.cart.length}</p>
          ) : (
              <p>0</p>
            )}
        </Link>
        {props.user && props.user.first_name ? (
          <a className="navlink login" href={process.env.REACT_APP_LOGOUT}>
            Logout
          </a>
        ) : (
            <a className="navlink login" href={process.env.REACT_APP_LOGIN}>
              Login
            </a>
          )}
      </nav>
    </StyledHeader>
  );
};
const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    cart: state.cartReducer.cart
  };
};
export default connect(
  mapStateToProps,
  { addToCart }
)(Header);

