import React from "react";
import PropTypes from "prop-types";
import { BASE_URL_IMG_PRODUCT } from "../../constants/common";
import useCurrency from "../../hooks/useCurrency";
import useStar from "../../hooks/useStar";
import { Link } from "react-router-dom";

Product.propTypes = {};

function Product({ product }) {
  const imageCover = BASE_URL_IMG_PRODUCT + product.imageCover;
  console.log(product);
  return (
    <Link to={`products/${product._id}`}>
      <div className='m-2 px-2 py-2 border rounded-lg shadow-lg'>
        <img className='h-full' src={imageCover} alt={imageCover} />
        <h1 className='font-bold line leading-5 min-h-[60px] max-h-[60px] overflow-hidden'>{product.name}</h1>
        <h1 className='font-bold text-red-500'>{useCurrency(product.price)}</h1>
        {useStar(product.ratingsAverage, product.ratingsQuantity)}
      </div>
    </Link>
  );
}

export default Product;
