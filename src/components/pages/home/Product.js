import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Product = props => {
  return (
    <ProductCard>
      <div className="productMainImage">
        {props.images &&
          props.images[0] && (
            <img
              src={props.images[0]}
              onError={e => {
                e.target.src =
                  "https://discoverthegift.com/wp-content/uploads/2016/03/placeholder.jpg";
              }}
            />
          )}
      </div>
      <div className="descContainer">
        <div className="prodDesc">
          <h1>{props.company}</h1>
          <h2>{props.name}</h2>
          <p>${props.price}</p>
          <Buttons>
            <Link to={`/product/${props.productid}`}>
              <button>More info</button>
            </Link>
            <button onClick={() => props.addToCart(props.productid, 1)}>
              Add to Card
            </button>
          </Buttons>
        </div>
      </div>
    </ProductCard>
  );
};

export default Product;

const ProductCard = styled.div`
  box-sizing: border-box;
  width: 18vw;
  margin: 2vh 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: transform 0.2s ease-in-out;
  position: relative;
  outline: lightgrey solid 1px;
  filter: drop-shadow(5px 5px 10px lightgrey);

  &:hover {
    transform: scale(1.1);
    box-shadow: 3px 8px 6px -6px black;
    position: relative;
  }

  & .productMainImage {
    /* box-sizing: border-box; */
    background: white;
    display: block;
  }
  & .descContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    position: relative;
    flex-basis: 1;
    color: #2b2639;
    background: #eeeff1;
  }
  & .prodDesc {
    padding: 1vh 1vw;
    display: block;
    outline: lightgrey solid 1px;
  }

  & div {
    width: 100%;
  }
  & h1 {
    font-size: 3rem;
    padding: 0.5vh 2vw;
    width: 100%;
    text-align: center;
  }

  & h2 {
    font-size: 3rem;
    text-align: center;
    width: 100%;
  }
  & p {
    margin: 0.5vh 0;
    font-size: 3rem;
  }
  & img {
    max-width: 18vw;
    min-width: 18vw;
    transition: all 0.2s ease-in-out;
    vertical-align: center;

    &:hover {
    }
  }
`;
const Buttons = styled.div`
  margin: 1vh auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  & button {
    width: 45%;
    padding: 1vh 2vw;
    background: #2b2639;
    color: #eeeff1;
  }
  & a {
    width: 45%;
    & button {
      width: 100%;
      padding: 1vh 2vw;
    }
  }
`;
