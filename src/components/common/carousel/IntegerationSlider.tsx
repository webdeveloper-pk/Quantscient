import React from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import integeration1 from "../../../assets/images/integeration1.png";
import integeration2 from "../../../assets/images/integeration2.png";
import integeration3 from "../../../assets/images/integeration3.png";
import integeration4 from "../../../assets/images/integeration4.png";
import integeration5 from "../../../assets/images/integeration5.png";

const IntegerationSlider = () => {
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1735,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1535,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1251,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings} className="w-[100%] lg:w-[100%] mx-auto z-50">
        <div className="px-[20px] lg:px-[30px] xl:px-[35px]">
          <div className="flex justify-center items-center h-[61px] md:h-[81px]">
            <img
              src={integeration1}
              alt="airbnb"
              className="h-auto w-[98px] md:w-[128px]"
            />
          </div>
        </div>
        <div className="px-[20px] lg:px-[30px] xl:px-[35px] ">
          <div className="flex justify-center items-center h-[61px] md:h-[81px]">
            <img
              src={integeration2}
              alt="airbnb"
              className="h-auto w-[147px] md:w-[177px]"
            />
          </div>
        </div>
        <div className="px-[20px] lg:px-[30px] xl:px-[35px]">
          <div className="flex justify-center items-center h-[61px] md:h-[81px]">
            <img
              src={integeration3}
              alt="airbnb"
              className="h-auto w-[122px] md:w-[152px]"
            />
          </div>
        </div>
        <div className="px-[20px] lg:px-[30px] xl:px-[35px] ">
          <div className="flex justify-center items-center h-[61px] md:h-[81px]">
            <img
              src={integeration4}
              alt="airbnb"
              className="h-auto w-[87px] md:w-[117px]"
            />
          </div>
        </div>
        <div className="px-[20px] lg:px-[30px] xl:px-[35px] ">
          <div className="flex justify-center items-center h-[61px] md:h-[81px]">
            <img
              src={integeration5}
              alt="airbnb"
              className="h-auto w-[142px] md:w-[172px]"
            />
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default IntegerationSlider;
