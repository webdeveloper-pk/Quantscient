import React, { useState, useEffect, useRef } from "react";
import play from "../../../assets/icons/play.svg";

const VideoSection2 = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showControls, setShowControls] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(true);

  useEffect(() => {
    if (videoRef?.current) {
      setIsPaused(videoRef?.current?.paused);
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

  const handleVideoPause = () => {
    setShowControls(false);
  };

  return (
    <div className="w-full homepage-container homepage-padding px-[20px] md:px-[50px] lg:px-[70px] xl:px-[110px] 2xl:px-[213px] mx-auto overflow-hidden">
      {/* second */}
      <div className="mt-[25px] flex flex-col items-center lg:flex-row lg:items-start lg:gap-x-[25px] gap-y-[30px] rounded-[20px] xl:rounded-[28px] px-[20px] 2xl:px-[25px] pt-[50px] 2xl:pt-[70px] pb-[30px] video-setion2-bg">
        <div className="w-full lg:w-[64%] xl:w-[66%] 2xl:w-[67%] video-right">
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-offset="-100"
          >
            <p className="mb-[20px] lg:mb-[20px] xl:mb-[20px] text-center lg:text-left font-montserrat font-medium text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
              Team AI-Engineers
            </p>
            <p className="text-center lg:text-left leading-[20px] font-montserrat font-normal text-[16px] md:text-[16px] lg:text-[15px] xl:text-[16px]">
              <span className="font-medium">
                Focuses on building and implementing AI systems:
              </span>
               AI engineers are the hands-on folks who translate the plans
              designed by AI specialists into reality.
              <br />
              <br />
              <span className="font-medium">
                Develops and trains AI models:
              </span>
               They have strong programming skills and expertise in machine
              learning algorithms and tools. They use programming languages like
              Python and frameworks like TensorFlow to build, train, and test AI
              models.
              <br />
              <br />
              <span className="font-medium">
                Integrates AI models with existing systems:
              </span>
               In the real world, AI models need to work with existing software
              and databases. AI engineers handle the integration process,
              ensuring the AI model interacts seamlessly with the surrounding
              infrastructure.
              <br />
              <br />
              <span className="font-medium">
                Monitors and maintains AI systems:
              </span>
               Once deployed, AI models need monitoring and maintenance. AI
              engineers track the performance of the model, identify and fix
              errors, and retrain it with new data as needed.
            </p>
          </div>
        </div>
        <div
          className="w-full lg:w-[36%] xl:w-[34%] 2xl:w-[33%] video-left relative"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-offset="-100"
        >
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
      </div>
    </div>
  );
};

export default VideoSection2;
