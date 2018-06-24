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
      <div className="prodDesc">
        <h1>{props.company}</h1>
        <h2>{props.name}</h2>
        <p>{props.price}</p>
        <Buttons>
          <Link to={`/product/${props.productid}`}>
            <button>More info</button>
          </Link>
          <button onClick={() => props.addToCart(props.productid, 1)}>
            Add to Card
          </button>
        </Buttons>
      </div>
    </ProductCard>
  );
};

export default Product;

const ProductCard = styled.div`
  box-sizing: border-box;
  border: 0.5px solid lightgrey;
  width: 18vw;
  margin: 2vh 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: transform 0.2s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 6px -6px black;
    position: relative;
  }

  & .productMainImage {
    /* box-sizing: border-box; */
    border-right: 0.5px solid grey;
    background: white;
  }
  & .prodDesc {
    /* border: 1px solid lightgrey; */
    padding: 1vh 2vw;
  }

  & div {
    width: 100%;
    border-top: 1px solid lightgrey;
  }
  & h1 {
    font-size: 2rem;
    padding: 0.5vh 2vw;
    width: 100%;
    text-align: center;
  }

  & h2 {
    font-size: 1.2rem;
    text-align: center;
    width: 100%;
  }
  & p {
    margin: 0.5vh 0;
    font-size: 1.2rem;
  }
  & img {
    /* transform: scale(0.99); */
    border: 0.5px solid lightgrey;

    width: inherit;
    margin-bottom: -0.25vh;
    transition: all 0.2s ease-in-out;
    &:hover {
      border: 0.5px solid lightgrey;
    }
  }
`;
const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & button {
    padding: 1vh 2vw;
  }
`;
