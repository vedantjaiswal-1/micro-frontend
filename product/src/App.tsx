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
        <Route path="/users" element={<UserContent />} />
        <Route path="/users-detail" element={<UserDetail />}>
          <Route path=":usersId" element={<UserDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
