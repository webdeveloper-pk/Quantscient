import React from "react";

const TeamHero = () => {
  return (
    <div className="bg-hero mt-[90px] md:mt-[100px] lg:mt-[120px]">
      <div className="w-full homepage-container homepage-padding px-[20px] md:px-[50px] lg:px-[70px] xl:px-[110px] 2xl:px-[213px] pt-[70px] md:pt-[70px] lg:pt-[75px] xl:pt-[80px] 2xl:pt-[80px] pb-[50px] lg:pb-[50px] 2xl:pb-[60px] mx-auto overflow-hidden">
        <p
          className="text-center lg:text-left mb-[15px] font-montserrat font-semibold text-[26px] md:text-[32px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px]"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-offset="-100"
        >
          Who We Are?
        </p>
        <p
          className="text-center lg:text-left font-montserrat font-light text-[17px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1500"
          data-aos-offset="-100"
        >
          Meet Our Team
        </p>
      </div>
    </div>
  );
};

export default TeamHero;
