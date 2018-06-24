import React, { Component } from "react";
import Sidebar from "../../layout/Sidebar";
import { connect } from "react-redux";
import {
  getInventory,
  getSportInventory
} from "../../../ducks/inventoryReducer";
import { getUser } from "../../../ducks/userReducer";
import { getCart, addToCart } from "../../../ducks/cartReducer";
import Swal from "sweetalert2";
import Product from "./Product";
import styled from "styled-components";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { sportDisplayed: "agility", numberDisplayed: 4, offset: 1 };
  }

  componentDidMount = () => {
    this.props.getInventory(
      this.state.numberDisplayed,
      this.state.numberDisplayed * this.state.offset
    );
    this.props.getSportInventory("agility");
    this.props.getUser().then(() => {
      this.props.user && this.props.getCart();
    });
  };
  chooseSport = str => {
    console.log(str);
    this.props.getSportInventory(str);
    this.setState({ sportDisplayed: str });
  };

  chooseNumberDisplayed = num => {
    this.setState({ numberDisplayed: num, offset: 0 }, () =>
      this.props.getInventory(
        this.state.numberDisplayed,
        this.state.numberDisplayed * this.state.offset
      )
    );
  };
  choosePage = page => {
    this.setState(
      { offset: page },
      this.props.getInventory(
        this.state.numberDisplayed,
        this.state.numberDisplayed * this.state.offset
      )
    );
  };
  offsetBack = e => {
    let { offset } = this.state;

    offset === 0
      ? this.setState({ offset: 0 })
      : this.setState({ offset: offset - 1 }, () =>
          this.props.getInventory(
            this.state.numberDisplayed,
            this.state.numberDisplayed * this.state.offset
          )
        );
    console.log(offset);
  };
  offsetForward = e => {
    let { offset } = this.state;

    offset === 4
      ? this.setState({ offset: 4 })
      : this.setState({ offset: offset + 1 }, () => {
          this.props.getInventory(
            this.state.numberDisplayed,
            this.state.numberDisplayed * this.state.offset
          );
        });
    console.log(offset);
  };
  addToCart = (id, num) => {
    console.log(id, num);
    this.props.user
      ? this.props.addToCart(id, num)
      : Swal({
          title: "Sign up or Login!",
          confirmButtonText: "Login",
          text: "You aren't logged in. Log in to add items to your account!",
          type: "warning"
        }).then(() => {
          console.log(`redirecting...`);
          window.location.href = process.env.REACT_APP_LOGIN;
        });
  };
  render() {
    console.log(this.props);
    return (
      <InventorySection>
        {this.props.loading === true && (
          <Loader>
            <div className="spinner">
              <div className="rect1" />
              <div className="rect2" />
              <div className="rect3" />
              <div className="rect4" />
              <div className="rect5" />
            </div>
          </Loader>
        )}
        {/* <h1 className="sectionTitle">Hot Items</h1>
        <div>list of items here</div> */}
        <div className="sports">
          <div className="sportsHeader">
            <h1 className="sectionTitle">By Sport</h1>
            <div className="sportOptions">
              <h3
                className={`option
                  ${this.state.sportDisplayed === "agility" && "current"}
                  `}
                onClick={() => this.chooseSport("agility")}
              >
                Agility
              </h3>

              <h3
                className={`option
                  ${this.state.sportDisplayed === "flyball" && "current"}
                  `}
                onClick={() => this.chooseSport("flyball")}
              >
                Flyball
              </h3>
              <h3
                className={`option
                  ${this.state.sportDisplayed === "discdog" && "current"}
                  `}
                onClick={() => this.chooseSport("discdog")}
              >
                Disc dog
              </h3>
            </div>
          </div>
          <Inventory id="sports">
            {this.props.sportInventory &&
              this.props.sportInventory.map((product, index) => {
                return (
                  <Product
                    user={this.props.user}
                    addToCart={this.addToCart}
                    className="product"
                    key={index}
                    category={product.category}
                    description={product.description}
                    images={product.images}
                    name={product.name}
                    price={product.price}
                    company={product.company}
                    productid={product.item_id}
                  />
                );
              })}
          </Inventory>
        </div>
        <div className="inventory">
          <div className="inventoryHeader">
            <h1 className="sectionTitle">All Inventory</h1>
            <div className="limitOptions">
              <h3
                className={`option
                  ${this.state.numberDisplayed === 4 && "current"}
                  `}
                onClick={() => this.chooseNumberDisplayed(4)}
              >
                Show 4
              </h3>

              <h3
                className={`option
                  ${this.state.numberDisplayed === 8 && "current"}
                  `}
                onClick={() => this.chooseNumberDisplayed(8)}
              >
                Show 8
              </h3>

              <h3
                className={`option
                  ${this.state.numberDisplayed === 16 && "current"}
                  `}
                onClick={() => this.chooseNumberDisplayed(16)}
              >
                Show 16
              </h3>
            </div>
          </div>
          <Inventory>
            <button onClick={e => this.offsetBack(e)}>
              <i className="fas fa-chevron-circle-left offsets" />
            </button>

            {this.props.inventory &&
              this.props.inventory.map((product, index) => {
                return (
                  <Product
                    addToCart={this.addToCart}
                    user={this.props.user}
                    key={index}
                    category={product.category}
                    description={product.description}
                    images={product.images}
                    name={product.name}
                    price={product.price}
                    company={product.company}
                  />
                );
              })}
            <button onClick={e => this.offsetForward(e)}>
              <i className="fas fa-chevron-circle-right offsets" />
            </button>
          </Inventory>
        </div>
      </InventorySection>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    inventory: state.inventoryReducer.inventory,
    sportInventory: state.inventoryReducer.sportInventory,
    loading: state.inventoryReducer.isLoading,
    error: state.inventoryReducer.error,
    cart: state.cartReducer.cart,
    cartid: state.cartReducer.cartid
  };
};

export default connect(
  mapStateToProps,
  { getInventory, getSportInventory, getUser, getCart, addToCart }
)(Home);

const InventorySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;

  & h1.sectionTitle {
    background: black;
    color: white;
    width: 100%;
    height: 5vh;
    text-align: start;
    line-height: 5vh;
    padding: 0 0 0 5vw;
    display: inline-block;
  }
  & .sports,
  .inventory {
    width: 100vw;
    &:first-child {
      /* margin: 0 0 0 5vw; */
    }
    & .sportsHeader,
    .inventoryHeader {
      background: black;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: white;
      font-size: 1.5rem;

      & h1 {
        width: 15%;
      }

      & .sportOptions,
      .limitOptions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 5vw 0 0;
        width: 25%;

        & .option {
          margin: 0 2vw;

          &.current {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

const Inventory = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  & button {
    border: none;
    & svg.offsets {
      font-size: 3rem;
      color: red;
    }
  }
  & h3 {
    font-size: 2rem;
  }
  &#sports {
    flex-wrap: nowrap;
    overflow-x: scroll;
    background: image(
      "https://www.dog-obedience-training-review.com/sites/default/files/dog-agility-equipment.jpg"
    );
  }
`;
const Loader = styled.div`
  background: radial-gradient(grey, black);
  opacity: 0.7;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  & .spinner {
    width: 100vw;
    height: 100px;
    text-align: center;
    font-size: 10px;
    display: flex;
    justify-content: center;
  }

  & .spinner > div {
    background-color: #333;
    height: 100%;
    width: 8px;
    margin: 0 2px;

    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  & .spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  & .spinner .rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  & .spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  & .spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(0.4);
    }
    20% {
      -webkit-transform: scaleY(1);
    }
  }

  @keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
      -webkit-transform: scaleY(1);
    }
  }
`;
