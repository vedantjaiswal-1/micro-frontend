import React from "react";
import ReactDOM from "react-dom";
import { Footer } from "home/Footer";
import { Header } from "home/Header";
import { HomeContent } from "home/HomeContent";
import { UserContent } from "home/UserContent";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.scss";
import { UserDetail } from "./UserDetail";

const App = () => (
  <div>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/user-detail" element={<UserContent />} />
        <Route path="/user-info" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
