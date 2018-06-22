import styled from "styled-components";

export const AppContainer = styled.div``;

export const PageContainer = styled.div`
  min-height: 78vh;
  padding: 5vh 0;

  &#sportspage {
    & div {
      border-right: 1px solid lightgrey;
      width: 40%;
      margin: 1vh 2vw;
      padding: 0 2vw;
      height: 72vh;
    }
    & p {
      font-size: 2em;
      text-align: start;
      text-indent: 2em;
    }
    & h1 {
      font-size: 5em;
      margin: 1vh 0;
      /* text-align: start; */
    }
  }
`;

export const FooterContainer = styled.div`
  @media only screen and (min-width: 1224px) {
    /* height: 26vh; */
    border-top: 1px solid lightgrey;
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100vw;
    margin: 2vh 0;
    padding: 4vh 2.5vw 2vh 2.5vw;
    text-align: start;
    & div {
      padding: 0 2vw;
    }
    & .one {
      width: 20%;
      display: flex;
      flex-direction: column;

      & a {
        font-size: 2rem;
        margin: 0.5vh 0;
      }
      & :first-child {
        margin: 1vh 0;
      }
    }
    & .two {
      width: 10%;
      display: flex;
      flex-direction: column;

      & a {
        font-size: 2rem;
        margin: 0.5vh 0;
      }
      & :first-child {
        margin: 1vh 0;
      }
    }
    & .three {
      width: 15%;
      display: flex;
      flex-direction: column;

      & a {
        font-size: 2rem;
        margin: 0.5vh 0;
      }
      & :first-child {
        margin: 1vh 0;
      }
    }
    & .four {
      width: 30%;
      display: flex;
      flex-direction: column;
      & h1 {
        margin: 1vh 0;
      }
      & input {
        height: 2.5vh;
        border-radius: 2px;
      }
    }
    & .five {
      margin: 1vh 0;
      width: 30vw;
      display: flex;
      flex-direction: column;
      & div {
        width: 30vw;
        margin: 0.5vh 0;
        display: flex;
        /* justify-content: center; */
        align-items: center;

        & h2:first-child {
          border-right: 1px solid lightgrey;
          padding: 0 1.5vw 0 0;
        }
        & h2:last-child {
          padding: 0 0 0 1.5vw;
        }
      }
      & .icons {
        width:28vw;
        font-size: 3rem;
        justify-content:space-between;
        & * {
          /* margin: 0 0.5vw; */
          color: black;
        }
      }
      & div.disclaimers {
        align-self:flex-end;
        width: 24vw;
        display: flex;
        flex-direction: column;
        align-items:flex-start;
        padding:0;

        & p {
          font-size: 1.5rem;
        }

      & div.policies {
        align-self:flex-start;
        width:24vw;
        padding:0;

        
      }
    }
  }
`;

export const StyledHeader = styled.div`
  @media only screen and (min-width: 321px) {
  }

  @media only screen and (min-width: 1224px) {
    display: flex;
    padding: 1vh 0;
    border-bottom: 1px solid lightgrey;
    align-items: center;
    height: 17vh;
    & nav {
      width: 20vw;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10vh;
      padding: 1vw 5vw;

      & img {
        max-width: 100%;
        max-height: 100%;
      }
      & .navlink {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 6vw;
        font-size: 2.5rem;
        text-decoration: none;
        color: black;
        &:hover {
          text-decoration: underline;
        }
        &:active {
          text-decoration: underline;
        }
        &.login {
          border-right: 1px solid lightgray;
        }
        & svg {
          margin: 0 0.5vw;
        }
      }
    }
    & .symmetry {
      width: 60vw;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      height: 10vh;
      padding: 1vw 1vw;
      & .navlink {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10vw;
        font-size: 2.5rem;
        text-decoration: none;
        color: black;
        &:hover {
          text-decoration: underline;
        }
      }
    }
    & .logoContainer {
      width: 20vw;
    }
  }
`;
