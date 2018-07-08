import styled from "styled-components";

export const AppContainer = styled.div``;

export const PageContainer = styled.div`
  min-height: 87vh;
  padding: 0 0;

  &#sportspage {
    display: flex;
    flex-direction: row;
    & div.sportInfo {
      border-right: 1px solid lightgrey;
      width: 45vw;
      margin: 5vh 0vw 1vh 2vw;
      padding: 0 2vw 0 0;
      height: 80vh;
      text-align: center;
      & > p.sportsBlurb {
        padding: 0 5vw;
      }
      & h1.chooseASport {
        margin: 4vh 0 0 0;
        font-size: 24px;
      }
      & .carouseloptions {
        margin: 2vh 5vw;
        padding: 0 10vw 0 0;
        border: none;
        width: 40vw;
        height: 12vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: center;
        & h2 {
          font-size:24px;
        }

        & h2:hover {
          text-decoration: underline;
        }
        & h2.active {
          font-size: 30px;
          text-decoration: underline;
        }
      }
    }
    & div.carousel {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      height: inherit;
      width: 55vw;
      margin: 5vh 2vw;

      border: none;
      position: relative;
      & .photoDesc {
        height: 10vh;
        border-right: none;
      }
      & .photocontainer {
        border-right: none;
        display: flex;
        align-items: center;
        height: 40vh;
        /* justify-content: center; */
      }
      & img {
        min-height: 40vh;
        height: 50vh;
        max-width: 90%;
        margin: 10vh auto;
      }
      & h1 {
        text-transform: uppercase;
      }

      & div.carouselicon {
        position: absolute;
        top: 15vh;
        font-size: 24px;
        & svg {
          font-size: 24px;
        }
      }
    }

    & p {
      font-size: 16px;
      text-align: start;
      text-indent: 2rem;
    }
    & h1 {
      font-size: 24px;
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
      & h1 {
        font-size:24px;
      }
    }
    & .one {
      width: 20%;
      display: flex;
      flex-direction: column;

      & a {
        font-size: 20px;
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
        font-size: 20px;
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
        font-size: 20px;
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
        font-size: 24px;
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
          font-size: 20px;
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
  @media only screen and (min-width: 1224px) {
    display: flex;
    padding: 1vh 0;
    border-bottom: 1px solid lightgrey;
    justify-content:space-between;
    align-items: center;
    height: 12vh;
    & img {
        margin: 0 5vw;
        max-height: 10vh;
      }
    & nav {
      align-self:flex-end;
      width: 70vw;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 10vh;
      padding: 1vw 5vw;
      & .navlink {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 6vw;
        font-size: 16px;
        text-decoration: none;
        color: black;

        &:hover {
          text-decoration: underline;
        }
        &:active {
          text-decoration: underline;
        }
        &.login {
          color:black;
          background:white;
          border-radius:4px;
          padding:1vh 2vw;
          box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19);
          border:1px solid black;
          transition-duration:.75s;
          &:hover, :active {
            background:black;
            color:white;
          
          }
          &:active {
          color:rebeccapurple;
}
        }
        &.cart {
          margin-left: 0.5vw;
          justify-content: center;
          width: 4vw;
          &:hover,
          :active {
            text-decoration: none;
          }
        }
        & svg {
          margin: 0 1vw;
          font-size:24px;

        }
      }
    }
  }
`;
