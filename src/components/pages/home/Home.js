import React, { Component } from "react";
import Sidebar from "../../layout/Sidebar";
import { connect } from "react-redux";
import {
  getInventory,
  getSportInventory
} from "../../../ducks/inventoryReducer";
import Product from "./Product";
import styled from "styled-components";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { sportDisplayed: "agility" };
  }

  componentDidMount = () => {
    this.props.getInventory();
    this.props.getSportInventory("agility");
  };
  chooseSport = str => {
    console.log(str);
    this.props.getSportInventory(str);
    this.setState({ sportDisplayed: str });
  };
  render() {
    console.log(this.state, this.props);

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
        <h1 className="sectionTitle">Hot Items</h1>
        <div>list of items here</div>
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
                  ${this.state.sportDisplayed === "bikejoring" && "current"}
                  `}
                onClick={() => this.chooseSport("bikejoring")}
              >
                Bikejoring
              </h3>
              <h3
                className={`option
                  ${this.state.sportDisplayed === "discdog" && "current"}
                  `}
                onClick={() => this.chooseSport("discdog")}
              >
                Disc dog
              </h3>
              <h3
                className={`option
                  ${this.state.sportDisplayed === "dockdiving" && "current"}
                  `}
                onClick={() => this.chooseSport("dockdiving")}
              >
                Dock Diving
              </h3>
              <h3
                className={`option
                  ${this.state.sportDisplayed === "lurecoursing" && "current"}
                  `}
                onClick={() => this.chooseSport("lurecoursing")}
              >
                Lure Coursing
              </h3>
              <h3
                className={`option
                  ${this.state.sportDisplayed === "rallyo" && "current"}
                  `}
                onClick={() => this.chooseSport("rallyo")}
              >
                Rally O
              </h3>
            </div>
          </div>
          <Inventory id="sports">
            {this.props.sportInventory &&
              this.props.sportInventory.map((product, index) => {
                return (
                  <Product
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
            {!this.props.sportInventory[0] && (
              <h1>
                We're out of stock or don't carry equipment for this sport yet.
                Come back soon for more goodies!
              </h1>
            )}
          </Inventory>
        </div>
        <h1 className="sectionTitle">All Inventory</h1>
        <Inventory>
          {this.props.inventory &&
            this.props.inventory.map((product, index) => {
              return (
                <Product
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
        </Inventory>
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
    error: state.inventoryReducer.error
  };
};

export default connect(
  mapStateToProps,
  { getInventory, getSportInventory }
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
  & .sports {
    width: 100vw;
    & .sportsHeader {
      background: black;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      color: white;
      & h1 {
        width: 15%;
      }
      & .sportOptions {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 5vw 0 0;
        width: 75%;

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
