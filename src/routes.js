import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/home/Home";
import DogSports from "./components/pages/Sports";
import ProductPage from "./components/pages/ProductPage";

export default (
  <Switch>
    <Route component={Home} exact path="/" />
    <Route component={DogSports} path="/sports" />
    {/* <Route component={Products} path="/products" />
    <Route component={About} path="about" /> */}
    <Route component={ProductPage} path="/product/:id" />
  </Switch>
);
