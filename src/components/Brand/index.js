import React from "react";
import PropTypes from "prop-types";
import { BASE_URL_IMG_BRAND } from "../../constants/common";

Brand.propTypes = {};

function Brand({ brand }) {
  const imageCover = BASE_URL_IMG_BRAND + brand.imageCover;
  return (
    <div className='h-10 px-2 py-1'>
      <img className='h-full' src={imageCover} alt={imageCover} />
    </div>
  );
}

export default Brand;
