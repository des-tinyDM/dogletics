import React, { Component } from "react";
import { connect } from "react-redux";
import { getProduct } from "../../ducks/inventoryReducer";
import styled from "styled-components";

class ProductPage extends Component {
  state = { imageIndex: 0 };
  componentDidMount = () => {
    this.props.getProduct(this.props.match.params.id);
  };

  render() {
    let { product } = this.props;

    console.log(product.images);
    return (
      <FullProduct>
        <div className="imagesContainer">
          {product.images && (
            <div className="bigImageContainer">
              <img
                className="bigImage"
                src={product.images[this.state.imageIndex]}
              />
            </div>
          )}
          <div className="allImages">
            {product.images &&
              product.images.map((e, i) => {
                return (
                  <div className="container">
                    <img
                      className="smallImage"
                      onClick={() => this.setState({ imageIndex: i })}
                      src={e}
                    />
                    <div className="middle">
                      <div
                        onClick={() => this.setState({ imageIndex: i })}
                        className="text"
                      >
                        View Larger
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="descriptionContainer">
          <h1 className="info">{product.name}</h1>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h2 className="info">{product.company}</h2>
            <h2>{product.price}</h2>
          </div>
          <h3 className="title description">Product Description:</h3>
          <p className="info description">{product.description}</p>
          <button>Add to Cart</button>
        </div>
      </FullProduct>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.inventoryReducer.product
  };
};
export default connect(
  mapStateToProps,
  { getProduct }
)(ProductPage);

const FullProduct = styled.div`
  display: flex;
  flex-direction: row;
  height: 88vh;
  padding: 2vh 0;
  & .imagesContainer {
    height: 77vh;
    margin: 2.5vh 0 0 5vw;
    width: 55vw;
    border: 1px solid lightgrey;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  & .bigImageContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 63vh;
  }
  & img.bigImage {
    max-width: 50vw;
    height: 50vh;
    margin: 0 auto;
    vertical-align: center;
  }
  & div.allImages {
    border: 1px solid lightgrey;
    border-left: none;
    border-right: none;
    display: flex;
    align-items: center;
    overflow-x: scroll;
    width: 50vw;
    height: 15vh;
    margin: 0 auto;
    & .container {
      position: relative;
    }
    & .smallImage {
      max-height: 9vh;
      margin: 0 1vw;
      border: 1px solid lightgrey;
      display: inline-block;
      opacity: 1;
      transition: 0.5s ease;
      backface-visibility: hidden;
    }
    & .middle {
      transition: 0.5s ease;
      opacity: 0;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      text-align: center;
    }
    & .container:hover .image {
      opacity: 0.3;
    }
    & .container:hover .middle {
      opacity: 1;
    }
    & .text {
      background-color: black;
      opacity: 0.3;
      color: white;
      font-size: 16px;
      padding: 1vh 1vw;
    }
  }
  & .descriptionContainer {
    height: 77vh;
    width: 40vw;
    margin: 2.5vh 5vw;
    border: 1px solid lightgrey;
    padding: 2vh 2vw;
    & h1 {
      border: 1px solid lightgrey;
      margin: 0 0 1vh 0;
      background: black;
      color: white;
      padding: 1vh 1vw;
    }
    & h2 {
      margin: 1vh auto;
    }
    & h3 {
      margin: 1vh auto;
      text-align: start;
    }
    & p.description {
      text-align: start;
      margin: 1vh 0;
      text-indent: 2rem;
    }
  }
`;
