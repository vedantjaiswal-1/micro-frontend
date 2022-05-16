import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomeContent } from "./HomeContent";
import { UserContent } from "./UserContent/UserContent";

import "./index.scss";

const App = () => (
  <div>
    <Header />
    <div className="my-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/users" element={<UserContent />} />
        </Routes>
      </BrowserRouter>
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
