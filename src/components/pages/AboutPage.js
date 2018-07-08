import React from "react";
import { PageContainer } from "../styled/Containers";
import styled from "styled-components";

const photoarr = [
  "http://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png",
  "https://cdn-images-1.medium.com/max/2000/1*BpaqVMW2RjQAg9cFHcX1pw.png",
  "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png",
  "https://i.cloudup.com/zfY6lL7eFa-3000x3000.png",
  "https://www.besthosting.com/wp-content/uploads/2016/07/Best-PostgreSQL-hosting.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2000px-Stripe_Logo%2C_revised_2016.svg.png",
  "http://openid.net/wordpress-content/uploads/2016/05/auth0-logo-blue.png",
  "https://cdn-images-1.medium.com/max/2000/1*TO5cYT14YsCfR-j1xdp8lw.png",
  "https://cdn-images-1.medium.com/max/1110/1*IBE92hS18PR9WEhMB3xz1w.jpeg",
  "https://2.bp.blogspot.com/-TAGZ6MuU4fo/Vx7lMP-CzyI/AAAAAAAACHg/DS8tguvOA381bUpL49SFAedXUhoJAbKVACLcB/s640/sweet-alert-in-mvc.jpg"
];

const AboutPage = () => (
  <PageContainer>
    <Disclaimer>
      <h1>
        Dogletics was developed as a personal portfolio project, and is not
        intended for commericial use. No items are being sold on this website.
      </h1>
      <p>
        Dogletics was built using the React.js library on top of an express
        server. All data was stored in a PostgreSQL database. It was styled with
        Styled Components, which uses CSS-IN-JSX to scope component styles.
        Auth0 and Stripe libraries were used for user authentication and payment
        micro-services, respectfully.
      </p>
      <p>
        This website is a fully functional MVP for an e-commerce site, where
        users can log in, add, remove, or change the quantity of items to their
        cart, pay for their items and see a summary of their past orders. If the
        user is admin, they can also add products, edit descriptions, and remove products from their inventory.
      </p>
      <div>{photoarr.map((e, i) => <img src={e} />)}</div>
    </Disclaimer>
  </PageContainer>
);
export default AboutPage;

const Disclaimer = styled.div`
  & h1 {
    padding: 0 5vw;

    margin: 2vh auto;
    font-size: 24px;
  }
  & p {
    padding: 0 5vw;
    margin: 2vh auto;
    font-size: 18px;
  }
  & div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    & img {
      width: 300px;
      margin: 2vh 2vw;
    }
  }
`;
