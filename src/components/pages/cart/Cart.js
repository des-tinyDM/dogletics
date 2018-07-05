import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { PageContainer } from "../../styled/Containers";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import Checkout from "../../../Checkout";
import { updateQuantity } from "../../../ducks/cartReducer";

class CartPage extends Component {
  constructor(props) {
    super(props);
    this.state = { shipping: 14.99 };
  }
  payForCart = token => {};
  render() {
    console.log(this.props);
    let cartArr = this.props.cart.map((e, i) => {
      return <CartItem item={e} key={i} />;
    });

    let subtotal = this.props.cart
      .reduce(function(sum, value) {
        return sum + value.price * value.quantity;
      }, 0)
      .toFixed(2);

    let { shipping } = this.state;

    let total = (parseInt(subtotal) + parseInt(shipping)).toFixed(2);
    return (
      <PageContainer>
        {!this.props.cart[0] && (
          <NoCart>
            <img src="https://78.media.tumblr.com/deabdebe4f853945a286ad8a1a45caff/tumblr_nhrm6y5lWv1r8enowo1_500.jpg" />
            <h1>These pups are going shopping. Why dont you join them?</h1>
            <Link to="/">
              <button>Return to Shop</button>
            </Link>
          </NoCart>
        )}
        {this.props.cart[0] && (
          <Cart>
            <h1>Cart</h1>
            <table>
              <thead>
                <tr>
                  <th className="item colTitle">
                    <h2 className="itemtitle">Item</h2>
                  </th>
                  <th className="qty colTitle">
                    <h2 className="qty">Qty</h2>
                  </th>
                  <th className="price colTitle">
                    <h2 className="price">Price</h2>
                  </th>
                  <th className="subtotal colTitle">
                    <h2 className="subtotal">Subtotal</h2>
                  </th>
                </tr>
              </thead>
            </table>
            {cartArr}
            <tfoot>
              <tr>
                <td className="spacercol" />
                <td className="total">
                  <div className="pricebox">
                    <h1>Subtotal</h1>
                    <h1>{subtotal}</h1>
                  </div>
                  <div className="pricebox">
                    <h1>Shipping</h1>
                    <h1>{shipping}</h1>
                  </div>
                  <div className="pricebox">
                    <h1>Total</h1>
                    <h1>{total}</h1>
                  </div>
                  <div className="pricebox">
                    <Checkout
                      cartid={this.props.cart[0].cart_id}
                      name="Pay for Cart"
                      amount={total}
                      description="Pay for cart..."
                    />
                  </div>
                </td>
              </tr>
            </tfoot>
          </Cart>
        )}
      </PageContainer>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cartReducer.cart
  };
};
export default connect(
  mapStateToProps,
  { updateQuantity }
)(CartPage);

const NoCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80vh;

  & img {
    margin: 5vh auto;
    width: 30%;
  }

  & button {
    padding: 1vh 2vw;
  }
`;

const Cart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: start;
  & h1 {
    margin: 0 auto 2vh auto;
  }
  & thead {
    & h2 {
      text-align: start;
      margin: 1vh auto;
      font-size: 2.5rem;
      border-bottom: 1px solid lightgrey;
    }
  }
  & tfoot {
    border-top: 1px solid lightgrey;
    display: flex;
    align-items: center;
  }
  & h1 {
    font-size: 4em;
  }

  & .colTitle {
    text-transform: uppercase;
    width: 100%;
  }
  .itemtitle {
    width: 100%;
    padding: 0 5vw;
  }
  & .item {
    text-align: center;
    width: 50vw;
    & p {
      font-size: 2rem;
      width: 100%;
    }
  }

  & .qty,
  .price,
  .subtotal {
    width: ${45 / 3}vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & p {
      width: 100%;
      display: block;
      text-align: center;
      font-size: 2rem;
      margin: 2vh auto;
    }
    & input {
      width: 100%;
      display: block;
      font-size: 2rem;
      margin: 2vh auto;
    }
    & button {
      display: block;
      margin: 2vh auto;
    }
  }

  & tr {
    display: flex;
    /* border: 1px solid lightgrey; */
    width: 95vw;
  }

  & tr td.spacercol {
    width: 50vw;
    height: 25vh;
  }
  & tr td.total {
    height: 25vh;
    margin: 5vh 0;
    width: 55vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    & div:nth-child(4) > button {
      background: red;
    }

    & div.pricebox {
      padding: 2vh 2vw;
      width: 35vw;
      display: flex;
      justify-content: space-between;

      & button.StripeCheckout {
        height: 100%;
        & span {
          height: auto !important;
          width: 400px !important;
          padding: 1vh 2vw !important;
        }
      }
    }

    & h1 {
      display: inline-block;
      width: 50%;

      &:last-child {
        text-align: end;
      }
    }
  }

  & tr td.item,
  tr th.item.colTitle {
    display: flex;
    justify-content: space-between;
    width: 50vw;
    /* border-left: 0.5px solid lightgrey; */
    /* border-right: 0.5px solid lightgrey; */
    align-items: center;

    & .desc {
      width: 35vw;
      margin: 0 1vw;
      display: flex;
      flex-direction: column;
    }

    & img {
      width: 20vw;
      height: auto;
      margin: 1vh 1vw;
    }
  }
`;
