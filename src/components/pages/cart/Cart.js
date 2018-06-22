import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { PageContainer } from "../../styled/Containers";
import { Link } from "react-router-dom";

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <PageContainer>
        {!this.props.cart[0] && (
          <NoCart>
            <img src="https://78.media.tumblr.com/deabdebe4f853945a286ad8a1a45caff/tumblr_nhrm6y5lWv1r8enowo1_500.jpg" />
            <h1>These pups are going shopping. Why aren't you?</h1>
            <Link to="/">
              <button>Return to Shop</button>
            </Link>
          </NoCart>
        )}
      </PageContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.inventoryReducer.cart
  };
};
export default connect(
  mapStateToProps,
  {}
)(CartPage);

const NoCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    width: 25%;
  }
`;
