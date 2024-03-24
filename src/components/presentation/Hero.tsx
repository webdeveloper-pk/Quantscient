import React from "react";
import hero from "../../assets/images/hero.png";
import heroStyle from "../../assets/images/hero-style.png";
import insta from "../../assets/icons/insta.svg";
import telegram from "../../assets/icons/telegram.svg";
import github from "../../assets/icons/github.svg";

const Hero = () => {
  return (
    <div className="bg-hero mt-[90px] md:mt-[100px] lg:mt-[120px]" id="hero">
      <div className="w-full homepage-container px-[20px] md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[213px] pt-[70px] md:pt-[100px] lg:pt-[100px] xl:pt-[100px] 2xl:pt-[130px] mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between lg:items-center gap-y-[50px] lg:gap-x-[70px] xl:gap-x-[100px] 2xl:gap-x-[170px] text-black">
          <div
            className="w-full lg:w-[65%] 2xl:w-[60%] relative"
            style={{ zIndex: 2 }}
          >
            <div className="flex flex-col lg:flex-row gap-x-[23px]">
              <div className="flex flex-row justify-center lg:justify-start lg:flex-col gap-[25px]">
                <div>
                  <img
                    src={insta}
                    alt="insta"
                    className="min-w-[40px] min-h-[40px] max-w-[40px] max-h-[40px] 2xl:min-w-[53px] 2xl:min-h-[53px] 2xl:max-w-[53px] 2xl:max-h-[53px]"
                  />
                </div>
                <div>
                  <img
                    src={telegram}
                    alt="telegram"
                    className="w-[40px] h-[40px] 2xl:min-w-[53px] 2xl:min-h-[53px] 2xl:max-w-[53px] 2xl:max-h-[53px]"
                  />
                </div>
                <div>
                  <img
                    src={github}
                    alt="git"
                    className="w-[40px] h-[40px] 2xl:min-w-[53px] 2xl:min-h-[53px] 2xl:max-w-[53px] 2xl:max-h-[53px]"
                  />
                </div>
              </div>
              <div className="w-[60%] md:w-[40%] lg:w-auto mx-auto lg:mx-0 hero-verticle-border mt-[20px] mb-[20px] lg:mb-0 lg:mt-0"></div>
              <div>
                <p
                  className="mx-auto w-[100%] md:w-[90%] lg:w-[100%] text-center lg:text-left leading-[40px] 2xl:leading-[50px] font-montserrat font-semibold text-[26px] md:text-[32px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px]"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="1000"
                  data-aos-offset="-100"
                >
                  <span className="text-[#00A4EE] mr-2">Hedge-Fund-Grade</span>
                  Technology Billions Of Date Points 50 Years 0f Historical Data
                </p>
                <div className="w-[90%] lg:w-auto mx-auto lg:mx-0 hero-horizontal-border mt-[27px] lg:mt-[21px] 2xl:mt-[27px] mb-[21px]"></div>
                <a
                  href="#"
                  className="pb-[10px] flex justify-center lg:justify-start items-center gap-x-[12px] font-montserrat font-normal text-[16px] lg:text-[16px] xl:text-[20px] 2xl:text-[24px] text-black hover:text-[#00A4EE]"
                  data-aos="fade-right"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="1200"
                  data-aos-offset="-100"
                >
                  WATCH A DEMO
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 12H21"
                      stroke="#0CB3FF"
                      stroke-opacity="0.92"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16 7L21 12L16 17"
                      stroke="#0CB3FF"
                      stroke-opacity="0.92"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[60%] lg:w-[35%] 2xl:w-[40%]">
            <div className="">
              <img
                src={hero}
                alt="hero"
                className="w-[75%] md:w-[90%] mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <img src={heroStyle} alt="hero-style" className="" />
    </div>
  );
};

export default Hero;
