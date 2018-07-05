const FRONTEND_DEV_URLS = ["http://localhost:3001"];

const FRONTEND_PROD_URLS = [
  "http://www.shopdogletics.destinylross-apps.com",
  "http://shopdogletics.destinylross-apps.com"
];

module.exports =
  process.env.NODE_ENV === "production"
    ? FRONTEND_PROD_URLS
    : FRONTEND_DEV_URLS;
