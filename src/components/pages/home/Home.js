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
import { PageContainer } from "../../styled/Containers";

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
      <PageContainer>
        {/* <h1 className="sectionTitle">Hot Items</h1>
        <div>list of items here</div> */}
        <div className="sports">
          <div className="sports Header">
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
            <button onClick={e => this.offsetForward(e)}>
              <i className="fas fa-chevron-circle-right offsets" />
            </button>
          </Inventory>
        </div>
      </PageContainer>
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
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap; */

  & div {
    display: flex;
    flex-direction: column;

    & .Header {
      width: 100vw;
    }
  }
`;

const Inventory = styled.div`
  display: flex;
  flex-direction: column;
`;
