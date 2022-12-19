import React from "react";
import PropTypes from "prop-types";
import { BASE_URL_IMG_CATEGORY } from "../../constants/common";

Category.propTypes = {};

function Category({ category }) {
  const imageCover = BASE_URL_IMG_CATEGORY + category.imageCover;
  return (
    <div className='px-2 py-1'>
      <img className='h-full border rounded-lg' src={imageCover} alt={imageCover} />
      <h1 className='text-center'>{category.name}</h1>
    </div>
  );
}

export default Category;
