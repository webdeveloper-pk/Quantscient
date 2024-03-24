import React from "react";
import IntegerationSlider from "components/common/carousel/IntegerationSlider";

const Integeration = () => {
  return (
    <div className="bg-[#F2F3F7]">
      <div className="w-full homepage-container px-[15px] md:px-[50px] lg:px-[80px] xl:px-[100px] 2xl:px-[140px] py-[20px] mx-auto">
        <p className="w-full mx-auto text-center font-poppins font-bold text-[16px] lg:text-[15px] 2xl:text-[16px] text-[#03045E]">
          OUR INTEGRATIONS
        </p>
        <div
          className="w-full mx-auto md:w-[90%] lg:w-[90%] mt-[20px]"
          data-aos="fade-down"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
        >
          <IntegerationSlider />
        </div>
      </div>
    </div>
  );
};

export default Integeration;
