import React from "react";

import Header from "./Header";
import Footer from "./Footer";

import "../styles/components/Layout.css";

const layout = ({ children }) => {
  return (
    <div className="Main">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
