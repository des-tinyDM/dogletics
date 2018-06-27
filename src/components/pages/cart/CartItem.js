import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { updateQuantity, getCart } from "../../../ducks/cartReducer";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = { updateQty: false, quantity: this.props.item.quantity };
  }
  updateQuantity = (e, cart_id, item_id) => {
    e.preventDefault();
    this.props
      .updateQuantity(cart_id, item_id, this.state.quantity)
      .then(() =>
        this.setState({ updateQty: false }, () => this.props.getCart())
      );
  };

  render() {
    console.log(`this component:`, this.props, this.state);
    return (
      <tr>
        <td className="item info">
          <img
            className="img"
            src={this.props.item.images[0]}
            onError={e => {
              e.target.src =
                "https://discoverthegift.com/wp-content/uploads/2016/03/placeholder.jpg";
            }}
          />
          <div className="desc">
            <p>{this.props.item.name}</p>
            <p>{this.props.item.company}</p>
          </div>
        </td>
        <td className="qty">
          <div>
            {this.state.updateQty ? (
              <input
                type="number"
                value={this.state.quantity}
                name="quantity"
                placeholder={this.props.item.quantity}
                onChange={e =>
                  this.setState({ quantity: parseInt(e.target.value) })
                }
              />
            ) : (
              <p>{this.props.item.quantity}</p>
            )}
            {this.state.updateQty ? (
              <QtyButton
                onClick={e =>
                  this.updateQuantity(
                    e,
                    this.props.item.cart_id,
                    this.props.item.item_id
                  )
                }
              >
                Save
              </QtyButton>
            ) : (
              <QtyButton onClick={() => this.setState({ updateQty: true })}>
                Update Qty
              </QtyButton>
            )}
          </div>
        </td>
        <td className="price">
          <p className="price">{this.props.item.price}</p>
        </td>
        <td className="subtotal">
          <p className="subtotal">
            {(this.props.item.price * this.props.item.quantity).toFixed(2)}
          </p>
        </td>
      </tr>
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
  { getCart, updateQuantity }
)(CartItem);
const QtyButton = styled.button`
  padding: 1vh 2vw;
`;
