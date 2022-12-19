import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import productApi from "../../../api/productApi";
import Slider from "react-slick";
import { BASE_URL_IMG_PRODUCT } from "../../../constants/common";
import "./index.css";
import useStar from "../../../hooks/useStar";
import useCurrency from "../../../hooks/useCurrency";

DetailProduct.propTypes = {};

function DetailProduct(props) {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  const getProduct = async function () {
    const res = await productApi.get(id);
    setProduct(res.data.product);
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const settings = {
    customPaging: function (i) {
      return <img className='' src={BASE_URL_IMG_PRODUCT + product.images[i]} alt={product.images[i]} />;
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className='container p-2 pt-4'>
      <div className='sm:grid sm:grid-cols-2 sm:gap-4'>
        {product.images && (
          <div className='mb-14 border'>
            <Slider {...settings}>
              {product.images.map((image) => (
                <div>
                  <img className='p-3' src={BASE_URL_IMG_PRODUCT + image} alt={image} />
                </div>
              ))}
            </Slider>
          </div>
        )}
        <div className=''>
          <h1 className='font-bold'>{product.name}</h1>
          <h1 className='font-bold text-red-500'>{useCurrency(product.price)}</h1>
          {useStar(product.ratingsAverage, product.ratingsQuantity)}
          <div className='mt-2'>
            <button className='bg-red-500 text-white p-2 border-2 font-semibold rounded-lg mr-2'>Mua ngay</button>
            <button className=' border-red-500 border-2 rounded-lg p-2 text-red-500 font-semibold'>Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
      <div className='border-t mt-3'>
        <h1 className='mt-2 font-semibold text-lg'>Mô tả sản phẩm</h1>
        <div className="leading-7">{product.description}</div>
      </div>
    </div>
  );
}

export default DetailProduct;
