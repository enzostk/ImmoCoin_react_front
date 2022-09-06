import React, { useState } from "react";
import { useAtom, useSetAtom } from "jotai";
import { loggedAtom } from "../../services/Atoms/user";
import { currentUserAtom } from "../../services/Atoms/currentUser";
import APIManager from "../../services/api";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const logged = useSetAtom(loggedAtom);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await APIManager.loginUser(email, password);
    logged(true);
    setCurrentUser(response.user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
        <Link to="/users/password">MDP</Link>
      </form>
    </div>
  );
};

export default Login;