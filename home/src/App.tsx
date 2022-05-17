import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomeContent } from "./HomeContent";
import { UserContent } from "./UserContent";
import { UserDetail } from "product/UserDetail";
import "./index.scss";

const App = () => (
  <div>
    <Header />
    <div className="my-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeContent />} />
          <Route path="/users" element={<UserContent />} />
          <Route path="/user-detail" element={<UserDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
