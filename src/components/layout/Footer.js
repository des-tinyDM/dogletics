import React from "react";
import { FooterContainer } from "../styled/Containers";
import { NavLink as Link } from "react-router-dom";

const Footer = props => {
  return (
    <FooterContainer>
      <div className="one">
        <h1>Customer Care</h1>
        <a>Shipping Info</a>
        <a>International Shipping + Returns</a>
        <a>Returns + Exchanges</a>
        <a>Sizing Guide</a>
        <a>Contact Us</a>
      </div>

      <div className="three">
        <h1>About Us</h1>
        <a>Our Story</a>
        <a>Community</a>
        <a>Press</a>
        <a>Affiliates</a>
      </div>
      <div className="two">
        <h1>Shop</h1>
        <a>Training</a>
        <a>By Sport</a>
        <a>Gift Cards</a>
      </div>
      <div className="four">
        <h1>Subscribe</h1>
        <input placeholder="ENTER EMAIL" />
      </div>
      <div className="five">
        <div className="icons">
          <Link to="">
            <i className="fab fa-facebook-square" />
          </Link>
          <Link to="">
            <i className="fab fa-tumblr-square" />
          </Link>
          <Link to="">
            <i className="fab fa-pinterest-square" />
          </Link>
          <Link to="">
            <i className="fab fa-twitter-square" />
          </Link>
          <Link to="">
            <i className="fab fa-youtube-square" />
          </Link>
        </div>
        <div className="policies">
          <h2>TERMS</h2>
          <h2>PRIVACY POLICY</h2>
        </div>
        <div className="disclaimers">
          <p>&#169; Destiny Ross. All Rights Reserved.</p>
          <p>Site By Destiny Ross.</p>
          <p>This is a demo site and not intended for commercial use.</p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
