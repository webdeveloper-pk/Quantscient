import React, { useState, useEffect, useRef } from "react";
import play from "../../../assets/icons/play.svg";

const VideoSection1 = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const videoRef2 = useRef<HTMLVideoElement | null>(null);
  const [showControls, setShowControls] = useState<boolean>(false);
  const [showControls2, setShowControls2] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [isPaused2, setIsPaused2] = useState<boolean>(true);

  useEffect(() => {
    if (videoRef?.current) {
      setIsPaused(videoRef?.current?.paused);
    }
  }, []);

  useEffect(() => {
    if (videoRef2?.current) {
      setIsPaused2(videoRef2?.current?.paused);
    }
  }, []);

  const toggleControls = () => {
    setShowControls(!showControls);
    if (videoRef?.current) {
      if (videoRef?.current?.paused) {
        videoRef?.current?.play();
      } else {
        videoRef?.current?.pause();
      }
    }
  };

  const toggleControls2 = () => {
    setShowControls2(!showControls2);
    if (videoRef2?.current) {
      if (videoRef2?.current?.paused) {
        videoRef2?.current?.play();
      } else {
        videoRef2?.current?.pause();
      }
    }
  };

  const handleVideoPause = () => {
    setShowControls(false);
  };

  const handleVideoPause2 = () => {
    setShowControls2(false);
  };

  return (
    <div className="w-full homepage-container homepage-padding px-[20px] md:px-[50px] lg:px-[70px] xl:px-[110px] 2xl:px-[213px] mx-auto overflow-hidden">
      {/* first */}
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-x-[46px] 2xl:gap-x-[66px] gap-y-[30px] rounded-[20px] xl:rounded-[28px] px-[20px] 2xl:px-[25px] pt-[50px] 2xl:pt-[70px] pb-[30px] video-setion1-bg">
        <div
          className="w-full lg:w-[36%] xl:w-[34%] 2xl:w-[38%] video-left"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-offset="-100"
        >
          <div className="relative">
            <video
              controls={showControls}
              ref={videoRef}
              className="w-[100%] md:w-[80%] lg:w-[100%] 2xl:w-[100%] mx-auto rounded-[11px]"
              onClick={toggleControls}
              onPause={handleVideoPause}
            >
              <source
                src={require("../../../assets/videos/dummy.mp4")}
                type="video/mp4"
                width="100%"
                height="100%"
              />
            </video>
            {!showControls && isPaused && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                  cursor: "pointer",
                }}
                onClick={toggleControls}
              >
                <img
                  src={play}
                  alt="play"
                  className="w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-[100px] 2xl:h-[100px]"
                />
              </div>
            )}
          </div>
          <div className="relative mt-[15px]">
            <video
              controls={showControls2}
              ref={videoRef2}
              className="w-[100%] md:w-[80%] lg:w-[100%] 2xl:w-[100%] mx-auto rounded-[11px]"
              onClick={toggleControls2}
              onPause={handleVideoPause2}
            >
              <source
                src={require("../../../assets/videos/dummy.mp4")}
                type="video/mp4"
                width="100%"
                height="100%"
              />
            </video>
            {!showControls2 && isPaused2 && (
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                  cursor: "pointer",
                }}
                onClick={toggleControls2}
              >
                <img
                  src={play}
                  alt="play"
                  className="w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-[100px] 2xl:h-[100px]"
                />
              </div>
            )}
          </div>
        </div>
        <div className="w-full lg:w-[64%] xl:w-[66%] 2xl:w-[62%] video-right lg:pr-[50px] xl:pr-[70px] 2xl:pr-[70px]">
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-offset="-100"
          >
            <p className="mb-[20px] lg:mb-[20px] xl:mb-[20px] text-center lg:text-left font-montserrat font-semibold text-[20px] md:text-[22px] lg:text-[26px] xl:text-[28px] 2xl:text-[32px]">
              Team Quant-Programmers
            </p>
            <p className="text-center lg:text-left leading-[26px] font-montserrat font-normal text-[16px] md:text-[16px] lg:text-[15px] xl:text-[16px] 2xl:text-[18px]">
            Our quant programmers are the engineers behind the scenes building the mathematical models and algorithms that drive quantitative finance. They translate financial theories and strategies into practical computer code. This involves using programming languages like Python, C++, and Java to create models that analyze market data, identify trading opportunities, and predict future price movements. They spend a significant amount of time working with data. 
              <br />
              <br />
              They clean, organize, and manipulate massive datasets of financial information, including historical prices, economic indicators, and company financials. Efficiency is key. Their job is to ensure the algorithms they develop run smoothly and efficiently, using techniques like performance optimization and code profiling. Once a model is built, it needs to be tested on historical data to assess its effectiveness. Quant programmers perform backtesting to evaluate the model's performance and refine it to improve its accuracy and profitability.
              <br />
              <br />
              In essence, quant programmers are the bridge between the world of mathematics and finance. They use their programming skills to translate complex financial theories into practical tools that can be used to make data-driven investment decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection1;
