import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  updateQuantity,
  getCart,
  removeFromCart
} from "../../../ducks/cartReducer";
import Swal from "sweetalert2";

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = { updateQty: false, quantity: this.props.item.quantity };
  }
  updateQuantity = (e, cart_id, item_id, cartitem_id) => {
    console.log(cart_id, item_id, cartitem_id);
    e.preventDefault();
    this.state.quantity === 0
      ? Swal({
          title: "Do you want to remove this item from your cart?",
          showCancelButton: true,
          cancelButtonText: "Keep in Cart",
          confirmButtonText: "Remove From Cart",
          text:
            "If you want to remove this item from your cart, hit Remove From Cart. If you just want to update the quantity of the item, cancel and change the quantity.",
          type: "warning"
        }).then(result => {
          if (result.value) {
            this.props
              .removeFromCart(cart_id, cartitem_id)
              .then(() =>
                this.setState({ updateQty: false }, () => this.props.getCart())
              );
            Swal(
              "Removed",
              "The item has been removed from your cart.",
              "success"
            );
          } else if (result.dismiss === Swal.DismissReason.cancel) {
            this.setState({ updateQty: false }, () =>
              Swal("Cancelled", "The item is still in your cart.", "error")
            );
          }
        })
      : this.props
          .updateQuantity(cart_id, item_id, this.state.quantity)
          .then(() =>
            this.setState(
              { updateQty: false, quantity: this.props.item.quantity },
              () => this.props.getCart()
            )
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
                  this.props.item.item_id,
                  this.props.item.cartitem_id
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
  { getCart, updateQuantity, removeFromCart }
)(CartItem);

const QtyButton = styled.button`
  padding: 1vh 2vw;
  /* width: 100%; */
`;
