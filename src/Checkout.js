import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

import StripeCheckout from "react-stripe-checkout";

import STRIPE_PUBLISHABLE from "./components/pages/cart/constants/stripe";
import PAYMENT_SERVER_URL from "./components/pages/cart/constants/server";

const CURRENCY = "USD";

// const fromDollarsToCent = amount => amount * 100;

const successPayment = data => {
  Swal({
    title: "SWEET!",
    text: "Thanks for paying!",
    imageUrl:
      "https://c8.alamy.com/comp/B7729B/a-dog-paying-the-bills-humorous-B7729B.jpg"
  });
};

const errorPayment = data => {
  console.log(data)
  alert("Payment Error");
};

const onToken = (amount, description, cartid) => token => {
  console.log(cartid);
  axios
    .post(PAYMENT_SERVER_URL, {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: amount * 100
    })
    .then(successPayment)
    .then(() =>
      axios.post(`/api/cart/pay`, { cartid, amount }).then(() =>
        setTimeout(function () {
          window.location.href = "http://shopdogletics.destinylross-apps.com/orders";
        }, 2000)
      )
    )
    .catch(errorPayment);
};

const Checkout = ({ name, description, amount, cartid }) => (
  <StripeCheckout
    cartid={cartid}
    label={"Pay with Stripe"}
    name={name}
    description={description}
    amount={amount * 100}
    token={onToken(amount, description, cartid)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
  />
);

export default Checkout;
