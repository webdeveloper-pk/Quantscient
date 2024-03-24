import React from "react";
import logo from "assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-footer overflow-hidden">
      <div
        className="w-full homepage-container px-[20px] md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[213px] pt-[30px] 2xl:pt-[40px] pb-[50px] 2xl:pb-[70px] mx-auto"
        data-aos="fade-up"
        data-aos-easing="ease-in-out"
        data-aos-duration="1200"
        data-aos-offset="-100"
      >
        <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-start gap-x-[50px] gap-y-[50px]">
          <div className="flex flex-col items-center lg:items-start">
            <img
              src={logo}
              alt="logo"
              className="w-[50px] h-[43px] lg:w-[50px] lg:h-[43px] 2xl:w-[70px] 2xl:h-[63px]"
            />
            <p className="mt-[14px] font-montserrat font-semibold text-black text-[20px] md:text-[26px] lg:text-[24px] xl:text-[28px] 2xl:text-[34px]">
              Quantscient
            </p>
            <p className="hidden lg:block mt-[27px] lg:mt-[22px] 2xl:mt-[27px] font-montserrat font-light text-black text-[15px] md:text-[15px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] uppercase">
              Quantscient - @ COPYRIGHT RESERVED
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:gap-x-[70px] 2xl:gap-x-[120px] gap-y-[50px]">
            <ul className="w-full flex flex-col items-center lg:items-start gap-y-[34px] font-montserrat font-semibold text-[16px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] uppercase">
              <li>
                <a className="text-black hover:text-[#00A4EE]" href="#about">
                  About Us
                </a>
              </li>
              <li>
                <a className="text-black hover:text-[#00A4EE]" href="#what">
                  WHat we are?
                </a>
              </li>
            </ul>
            <ul className="w-full flex flex-col items-center lg:items-start gap-y-[34px] font-montserrat font-semibold text-[16px] lg:text-[14px] xl:text-[15px] 2xl:text-[16px] uppercase">
              <li>
                <a className="text-black hover:text-[#00A4EE]" href="#privacy">
                  Privacy
                </a>
              </li>
              <li>
                <a
                  className="text-black hover:text-[#00A4EE] whitespace-nowrap"
                  href="#terms"
                >
                  Terms & COnditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="w-full flex justify-center block lg:hidden mt-[50px] font-montserrat font-light text-black text-[14px] md:text-[15px] xl:text-[15px] 2xl:text-[16px] uppercase">
          Quantscient - @ COPYRIGHT RESERVED
        </p>
      </div>
    </div>
  );
};

export default Footer;
