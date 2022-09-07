import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";

import Home from "./pages/Home";
import Profile from "./pages/Profile";

import Navbar from "./components/Navbar/Navbar";
import Article from "./pages/Article";
import New from "./pages/New";
import Edit from "./pages/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-third min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/users/password" element={<ForgotPassword />} />
            <Route path="/users/:token" element={<ResetPassword />} />

            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/properties/new" element={<New />} />
            <Route path="/properties/edit" element={<Edit />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
