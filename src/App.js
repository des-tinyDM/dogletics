import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "styled-components";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import routes from "./routes";

const theme = { backgroundColor: "" };


class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header user={this.props.user} />
          {routes}
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
