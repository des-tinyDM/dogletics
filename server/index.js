require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");

const {
  strategy,
  getUser,
  logout
} = require(`${__dirname}/controllers/authController`);

const {
  getInventory,
  getInventoryForSport,
  getProduct,
  getCategories
} = require(`${__dirname}/controllers/inventoryController`);

const {
  getCart,
  addToCart,
  updateQty,
  removeFromCart,
  payForCart,
  getPastOrders
} = require(`${__dirname}/controllers/cartController`);

const { getSportInfo } = require(`${__dirname}/controllers/miscController`);

// stripe requirements
const configureServer = require(`./server`);
const configureRoutes = require(`./routes/index.js`);
const port = process.env.PORT || 3001;

const app = express();
app.use(express.static(`${__dirname}/../build`));

configureServer(app);
configureRoutes(app);
massive(process.env.CONNECTION_STRING).then(db => app.set("db", db));

app.use(json());
app.use(cors());

//Use sessions first for passport!
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000000 * 60 * 60 * 24 * 14
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);

passport.serializeUser((user, done) => {
  // console.log(user);
  app
    .get("db")
    .auth.getUserByAuthID(user.id)
    .then(response => {
      if (!response[0]) {
        app
          .get("db")
          .auth.addUserByAuthID([
            user.name.givenName,
            user.name.familyName,
            user.id
          ])
          .then(res => {
            return done(null, res[0]);
          });
        // .catch(err =>
        //   console.log(err)
        // );
      } else {
        return done(null, response[0]);
      }
    });
  // .catch(err =>
  //   console.log(err)
  // );
});
passport.deserializeUser((user, done) => {
  return done(null, user);
});

//AUTH ENDPOINTS
app.get(
  `/auth`,
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3001/",
    failureRedirect: "http://localhost:3001/auth",
    // successRedirect: "http://shopdogletics.destinylross-apps.com",
    // failureRedirect: "http://shopdogletics.destinylross-apps.com/auth"
  })
);

//AUTH ENDPOINTS
app.get("/logout", logout);
app.get("/api/me", getUser);

//INVENTORY ENDPOINTS
app.get("/api/inventory", getInventory);
app.get(`/api/sportinventory`, getInventoryForSport);
app.get("/api/product", getProduct);
app.get("/api/sport/info", getSportInfo);
app.get("/api/inventory/categories", getCategories);

//CART ENDPOINTS
app.get("/api/cart", getCart);
app.post("/api/cart/add", addToCart);
app.put("/api/cart/update", updateQty);
app.delete(`/api/cart/:cart_id/delete`, removeFromCart);
app.post(`/api/cart/pay`, payForCart);

//ORDER ENDPOINTS
app.get("/api/orders", getPastOrders);

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build/index.html"));
});

app.listen(port, () => {
  console.log(`Comin' at you from ${port}`);
});
