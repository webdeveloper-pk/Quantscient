import React, { useState, useEffect, useRef } from "react";
import video from "../../../assets/videos/dummy.mp4";

export const VideoSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const videoRef = useRef(null);

  const showModal = () => {
    setIsLoading(true);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <div className="w-full homepage-container homepage-padding px-[20px] md:px-[50px] lg:px-[70px] xl:px-[110px] 2xl:px-[213px] pb-[50px] lg:pb-[40px] 2xl:pb-[40px] mx-auto overflow-hidden">
      {/* first */}
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-x-[25px] gap-y-[30px] rounded-[20px] xl:rounded-[28px] px-[20px] 2xl:px-[25px] pt-[50px] 2xl:pt-[70px] pb-[30px] video-setion1-bg">
        <div
          className="w-full lg:w-[36%] xl:w-[34%] 2xl:w-[33%] video-left relative"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-offset="-100"
        >
          {/* <img
              src={video1}
              alt="Ernest Lim"
             
            /> */}

          <video
            controls
            ref={videoRef}
            className="w-[100%] md:w-[80%] lg:w-[100%] 2xl:w-[100%] mx-auto"
          >
            <source
              src={`${video}`}
              type="video/mp4"
              className="mb-6"
              width="100%"
              height="100%"
            />
          </video>
          {/* <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                cursor: "pointer",
              }}
              onClick={showModal}
            >
              {isLoading ? (
                ""
              ) : (
                <img
                  src={play}
                  alt="play"
                  className="w-[16px] md:w-[20px] lg:w-[25px] h-auto -mt-4 md:-mt-2 lg:mt-0"
                />
              )}
            </div> */}
        </div>
        <div className="w-full lg:w-[64%] xl:w-[66%] 2xl:w-[67%] video-right">
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-offset="-100"
          >
            <p className="mb-[20px] lg:mb-[20px] xl:mb-[20px] text-center lg:text-left font-montserrat font-medium text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
              Team Quant-Programmers
            </p>
            <p className="text-center lg:text-left leading-[20px] font-montserrat font-normal text-[16px] md:text-[16px] lg:text-[15px] xl:text-[16px]">
              Our quant programmers are the engineers behind the scenes building
              the mathematical models and algorithms that drive quantitative
              finance. They translate financial theories and strategies into
              practical computer code. This involves using programming languages
              like Python, C++, and Java to create models that analyze market
              data, identify trading opportunities, and predict future price
              movements. They spend a significant amount of time working with
              data. They clean, organize, and manipulate massive datasets of
              financial information, including historical prices, economic
              indicators, and company financials. Efficiency is key. Their job
              is to ensure the algorithms they develop run smoothly and
              efficiently, using techniques like performance optimization and
              code profiling. Once a model is built, it needs to be tested on
              historical data to assess its effectiveness. Quant programmers
              perform backtesting to evaluate the model's performance and refine
              it to improve its accuracy and profitability.
              <br />
              <br />
              In essence, quant programmers are the bridge between the world of
              mathematics and finance. They use their programming skills to
              translate complex financial theories into practical tools that can
              be used to make data-driven investment decisions.
            </p>
          </div>
        </div>
      </div>
      {/* second */}

      {/* third */}
    </div>
  );
};
