import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Product = props => {
  return (
    <ProductCard>
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
      <div>
        <h1>{props.company}</h1>
        <h2>{props.name}</h2>
        <p>{props.price}</p>
      </div>
      <Link to={`/product/${props.productid}`}>
        <button>More info</button>
      </Link>
    </ProductCard>
  );
};

export default Product;

const ProductCard = styled.div`
  border: 1px solid lightgrey;
  /* height: 35vh; */
  width: 20vw;
  margin: 0 2vw 2vh 2vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
  & div {
    width: 100%;
  }
  & h1 {
    font-size: 1rem;
    border-top: 1px solid lightgrey;
    padding: 0.5vh 2vw;
    width: 100%;
    text-align: center;
  }

  & h2 {
    font-size: 0.75rem;
    text-align: center;
    width: 100%;
  }
  & p {
    margin: 0.5vh 0;
  }
  & img {
    max-height: 30vh;
    width: 100%;
    transition: all 0.2s ease-in-out;
  }
`;
