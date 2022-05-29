import React from "react";
import Logo from "../Logo/Logo";
import { Container } from "../styles/Container/Container";
import { Header } from "../styles/Header/Header";
import Nav from "./Nav/Nav";

const HeaderComponent = () => {
  return (
      <Header>
        <Logo />
        <Nav />
        <div className="header-buttons">
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>
      </Header>
  );
};

export default HeaderComponent;
