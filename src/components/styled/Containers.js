import styled from "styled-components";

export const AppContainer = styled.div``;

export const PageContainer = styled.div``;

export const StyledHeader = styled.div`
  @media only screen and (min-width: 321px) {
  }

  @media only screen and (min-width: 1224px) {
    display: flex;

    & img {
      max-width: 20%;
    }
    & .symmetry,
    nav {
      width: 15vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 10vh;

      & .navlink {
        padding: 0 2vw;
      }
    }

    & .logoContainer {
      width: 70vw;
    }
  }
`;
