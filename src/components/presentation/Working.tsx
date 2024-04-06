import React from "react";
import working1 from "../../assets/images/working1.gif";
import circle from "../../assets/images/working-circle.png";
import Working2 from "./Working2";
import Working3 from "./Working3";

const Working = () => {
  return (
    <div className="w-full homepage-container homepage-padding px-[20px] md:px-[50px] lg:px-[70px] xl:px-[110px] 2xl:px-[213px] py-[50px] md:py-[70px] lg:py-[80px] xl:py-[70px] 2xl:py-[90px] mx-auto overflow-hidden">
      <p className="mx-auto w-[100%] md:w-[90%] lg:w-[100%] text-center lg:text-left font-montserrat font-semibold text-[26px] md:text-[32px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px]">
        How it works?
      </p>
      <div className="mt-[50px] lg:mt-[70px] 2xl:mt-[80px]">
        <div className="flex flex-col lg:flex-row lg:items-center 2xl:items-center gap-x-[50px] 2xl:gap-x-30px] gap-y-[70px]">
          <div className="flex flex-col lg:flex-row gap-x-[20px] 2xl:gap-x-[36px] w-full lg:w-[60%] 2xl:pl-[32px]">
            <div className="flex flex-col">
              <div className="relative w-full h-[50px] lg:h-[60px] 2xl:h-[77px] flex justify-center lg:justify-start">
                <img
                  src={circle}
                  alt="circle"
                  className="min-w-[50px] min-h-[50px] xl:min-w-[60px] xl:min-h-[60px] 2xl:min-w-[77px] 2xl:min-h-[77px] max-w-[50px] max-h-[50px] xl:max-w-[60px] xl:max-h-[60px] 2xl:max-w-[77px] 2xl:max-h-[77px]"
                />
                <p className="working-center-content font-montserratAlter font-semibold text-[20px] md:text-[24px] lg:text-[20px] xl:text-[28px] 2xl:text-[32px]">
                  01
                </p>
              </div>
              <div className="hidden lg:block lg:h-full lg:flex lg:justify-center">
                <div className="working-verticle-border h-full "></div>
              </div>
            </div>
            <div
              className="w-resp-left w-full lg:w-[100%] 2xl:w-[75%] lg:pb-[70px] 2xl:pb-[150px] mt-[20px] lg:mt-0"
              // data-aos="fade-up"
              // data-aos-easing="ease-in-out"
              // data-aos-duration="1300"
              // data-aos-offset="300"
            >
              <p className="mx-auto w-[100%] text-center lg:text-left font-montserratAlter font-semibold text-[26px] md:text-[32px] lg:text-[24px] xl:text-[32px] 2xl:text-[38px]">
                Acquire <span className="text-[#00A4EE]">Data</span>
              </p>
              <div className="working-horizontal-border mt-[15px] lg:mt-[10px] xl:mt-[15px] mb-[14px] w-[70%] lg:w-[80%] mx-auto lg:mx-0"></div>
              <p className="text-center lg:text-left font-montserrat font-semibold text-[16px] md:text-[16px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">
                Acquiring Diverse Data Sets:
              </p>
              <p className="text-center lg:text-left mt-[20px] lg:mt-[15px] xl:mt-[20px] font-montserrat font-medium text-[16px] md:text-[16px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px]">
                Our stock analysis process commences with the establishment of a
                comprehensive data foundation. We strategically acquire a vast
                quantity of data relevant to stock performance. This data
                encompasses traditional technical data, such as price movements
                and trading volume, alongside fundamental data including company
                financials and economic indicators. Furthermore, we extend our
                data acquisition beyond traditional sources by incorporating
                alternative data sets that may offer valuable insights. These
                alternative data sets can include social media sentiment
                analysis or satellite imager, etc.
              </p>
            </div>
          </div>
          <div
            className="w-full lg:w-[40%]"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
            // data-aos-offset="100"
          >
            <img
              src={working1}
              alt="working1"
              className="w-resp-right1 w-[100%] md:w-[70%] lg:w-[90%] 2xl:w-[100%] mx-auto"
            />
          </div>
        </div>
        <Working2 />
        <Working3 />
      </div>
    </div>
  );
};

export default Working;
