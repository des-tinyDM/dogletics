import React from "react";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/bclogo.png";
import { StyledHeader } from "../styled/Containers";

const Header = props => {
  return (
    <StyledHeader>
      <div className="symmetry" />
      <div className="logoContainer">
        <img src={logo} />
      </div>
      <nav>
        <a className="navlink login" href={process.env.REACT_APP_LOGIN}>
          <div>
            <p>Login</p>
          </div>
        </a>
        <Link className="navlink" to="/cart">
          <p>Cart</p>
        </Link>
      </nav>
    </StyledHeader>
  );
};

export default Header;
