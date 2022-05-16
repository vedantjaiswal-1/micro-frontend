import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HomeContent } from "./HomeContent";

import "./index.scss";

const App = () => (
  <div >
    <Header />
      <div className="my-10">
        {/* <HomeContent /> */}
      </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
