import React from "react";
import FooterComponent from "../Footer/Footer";
import HeaderComponent from "../Header/Header";

const Layout = ({ children }: any) => {
  return (
    <>
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
};

export default Layout;
