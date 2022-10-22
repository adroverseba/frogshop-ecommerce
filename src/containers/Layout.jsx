import React from "react";
import { Header } from "../components/Header";
Header;

export const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      {children}
    </div>
  );
};
