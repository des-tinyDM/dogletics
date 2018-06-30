const configureStripe = require("stripe");

const STRIPE_SECRET_KEY =
  process.env.NODE_ENV === "production"
    ? "sk_test_VYuyMJXqG2tBDUyDPoiK6iAo"
    : "sk_test_VYuyMJXqG2tBDUyDPoiK6iAo";

const stripe = configureStripe(STRIPE_SECRET_KEY);

module.exports = stripe;
