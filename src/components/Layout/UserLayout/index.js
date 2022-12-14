import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

UserLayout.propTypes = {};

function UserLayout(props) {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
}

export default UserLayout;
