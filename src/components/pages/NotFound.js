import React from "react";
import styled from "styled-components";

const NotFound = props => {
  return (
    <FourOhFour>
      <img src="http://www.qme-agility.co.uk/assets/slider/new-3-qme-agility.jpg" />
      <h1>404 Error: Path not Found.</h1>
    </FourOhFour>
  );
};

export default NotFound;

const FourOhFour = styled.div`
  height: 81vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & img {
    margin: 1vh 0;
    height: 60vh;
  }
  & h1 {
    margin: 1vh 0;
    font-size: 4rem;
  }
`;
