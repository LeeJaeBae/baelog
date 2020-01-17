import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configure from "./store/configure";

import App from "components/App";
import GlobalStyles from "styles/GlobalStyles";

const store = configure();

class Routes extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Routes;
