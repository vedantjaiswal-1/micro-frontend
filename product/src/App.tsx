import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "home/Footer";
import { Header } from "home/Header";

import "./index.scss";

const App = () => (
  <div>
    <Header />
    <div className="my-10">Product Page</div>
    <Footer />
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
