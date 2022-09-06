import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Home from "./pages/Home";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import Navbar from "./components/Navbar/Navbar";
import Article from "./pages/Article";

const App = () => {
  return (
    <BrowserRouter>
    <div className="bg-third w-full h-full ">
    <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users/password" element={<ForgotPassword />} />
          <Route path="/users/:token" element={<ResetPassword />} />
          <Route path="/article/:id" element={<Article />} />
        </Routes>
      </main>
  </div>
    </BrowserRouter>
    );
};

export default App;
