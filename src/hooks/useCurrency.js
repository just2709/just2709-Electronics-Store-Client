import React from "react";
import PropTypes from "prop-types";

useCurrency.propTypes = {};

function useCurrency(number) {
  return Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(number);
}

export default useCurrency;
