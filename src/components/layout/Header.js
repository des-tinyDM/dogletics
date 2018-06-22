import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/bclogo.png";
import { StyledHeader } from "../styled/Containers";
import { connect } from "react-redux";

const Header = props => {
  console.log(props);
  return (
    <StyledHeader>
      <div className="logoContainer">
        <img src={logo} />
      </div>
      <div className="symmetry">
        <Link className="navlink about" to="/about">
          <p>About Us</p>
        </Link>
        <Link className="navlink sports" to="/sports">
          <p>Sports</p>
        </Link>
        <Link className="navlink cart" to="/cart">
          <p>Other Thing</p>
        </Link>
        <Link className="navlink cart" to="/contact">
          <p>Contact</p>
        </Link>
      </div>
      <nav>
        {props.user && props.user.first_name ? (
          <a className="navlink login" href={process.env.REACT_APP_LOGOUT}>
            <div>
              <p>Logout</p>
            </div>
          </a>
        ) : (
          <a className="navlink login" href={process.env.REACT_APP_LOGIN}>
            <div>
              <p>Login</p>
            </div>
          </a>
        )}
        <Link className="navlink cart" to="/cart">
          {/* <p>Cart</p> */}
          <i className="fas fa-shopping-cart" />
        </Link>
      </nav>
    </StyledHeader>
  );
};
const mapStateToProps = state => {
  return {
    user: state.userReducer.user
  };
};
export default connect(
  mapStateToProps,
  {}
)(Header);
