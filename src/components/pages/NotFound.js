import React from "react";
import styled from "styled-components";

const NotFound = props => {
  return (
    <FourOhFour>
      <img src="http://www.qme-agility.co.uk/assets/slider/new-3-qme-agility.jpg" />
      <h1>Rut roh: Path not Found.</h1>
    </FourOhFour>
  );
};

export default NotFound;

const FourOhFour = styled.div`
  height: 87vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: space-between;
  & img {
    margin: 5vh auto 8vh auto;
    height: 60vh;
    max-width: 90vw;
  }
  & h1 {
    margin: 1vh 0;
    font-size: 4rem;
  }
`;
