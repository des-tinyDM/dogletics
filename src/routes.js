import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/home/Home";
import DogSports from "./components/pages/sports/Sports";
import ProductPage from "./components/pages/ProductPage";
import NotFound from "./components/pages/NotFound";
import CartPage from "./components/pages/cart/Cart";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={DogSports} path="/sports" />
    {/* <Route component={Products} path="/products" />
    <Route component={About} path="about" /> */}
    <Route component={CartPage} path="/cart" />
    <Route component={ProductPage} path="/product/:id" />
    <Route component={NotFound} path="*" />
  </Switch>
);
