import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Slide from "../../../components/Slider";
import Product from "../../../components/Product";
import Category from "../../../components/Category";
import Brand from "../../../components/Brand";
import productApi from "../../../api/productApi";
import categoryApi from "../../../api/categoryApi";
import brandApi from "../../../api/brandApi";
import Slider from "react-slick";
import "./index.css";

Home.propTypes = {};

function Home(props) {
  const [laptops, setLaptops] = useState([]);
  const [phones, setPhones] = useState([]);
  const [monitors, setMonitors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const getLaptopProduct = async function () {
    const res = await productApi.getAll({ limit: 10, categories: "639e86f3fdb287e47b10d183" });
    setLaptops(res.data.products);
  };

  const getPhoneProduct = async function () {
    const res = await productApi.getAll({ limit: 10, categories: "639e86e3fdb287e47b10d180" });
    setPhones(res.data.products);
  };

  const getMonitorsProduct = async function () {
    const res = await productApi.getAll({ limit: 10, categories: "639eb5a69103b2089ecb5fd1" });
    setMonitors(res.data.products);
  };

  const getCategories = async function () {
    const res = await categoryApi.getAll();
    setCategories(res.data.categories);
  };

  const getBrands = async function () {
    const res = await brandApi.getAll();
    setBrands(res.data.brands);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: true,
    autoplay: true,
    slidesToShow: 12.5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8.5,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6.5,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  useEffect(() => {
    getLaptopProduct();
    getMonitorsProduct();
    getPhoneProduct();
    getCategories();
    getBrands();
  }, []);
  return (
    <div className='container mx-auto'>
      <Slide />
      {brands && (
        <>
          <h1 className='ml-2 font-bold text-lg xl:text-xl text-red-500  mt-3'>Thương hiệu</h1>
          <Slider {...settings}>
            {brands.map((brand) => (
              <Brand brand={brand} />
            ))}
          </Slider>
        </>
      )}
      {categories && (
        <>
          <h1 className='ml-2 font-bold text-lg xl:text-xl text-red-500  mt-3'>Loại sản phẩm</h1>
          <Slider {...settings}>
            {categories.map((category) => (
              <Category category={category} />
            ))}
          </Slider>
        </>
      )}
      {laptops && (
        <>
          <h1 className='ml-2 font-bold text-lg xl:text-xl text-red-500  mt-3'>Laptop</h1>
          {/* <Slider {...settings}> */}
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
            {laptops.map((product) => (
              <Product product={product} />
            ))}
          </div>

          {/* </Slider> */}
        </>
      )}
      {phones && (
        <>
          <h1 className='ml-2 font-bold text-lg xl:text-xl text-red-500  mt-3'>Điện thoại</h1>
          {/* <Slider {...settings}> */}
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
            {phones.map((product) => (
              <Product product={product} />
            ))}
          </div>

          {/* </Slider> */}
        </>
      )}
      {monitors && (
        <>
          <h1 className='ml-2 font-bold text-lg xl:text-xl text-red-500  mt-3'>Màn hình</h1>
          {/* <Slider {...settings}> */}
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
            {monitors.map((product) => (
              <Product product={product} />
            ))}
          </div>

          {/* </Slider> */}
        </>
      )}
    </div>
  );
}

export default Home;
