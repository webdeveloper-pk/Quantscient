import React, { useState, useEffect, useRef } from "react";
import play from "../../../assets/icons/play.svg";
import video1 from "../../../assets/images/video1.png";
import video2 from "../../../assets/images/video1.png";
import video3 from "../../../assets/images/video1.png";
import video from "../../../assets/videos/dummy.mp4";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const [isPlaying2, setIsPlaying2] = useState(false);
  const videoRef2 = useRef(null);
  const [isPlaying3, setIsPlaying3] = useState(false);
  const videoRef3 = useRef(null);

  const togglePlay1 = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const togglePlay2 = () => {
    const video = videoRef2.current;
    if (video.paused) {
      video.play();
      setIsPlaying2(true);
    } else {
      video.pause();
      setIsPlaying2(false);
    }
  };

  const togglePlay3 = () => {
    const video = videoRef3.current;
    if (video.paused) {
      video.play();
      setIsPlaying3(true);
    } else {
      video.pause();
      setIsPlaying3(false);
    }
  };

  console.log(isPlaying, "isPlaying");

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
          <video
            controls
            ref={videoRef}
            className="w-[100%] md:w-[80%] lg:w-[100%] 2xl:w-[100%] mx-auto rounded-[11px]"
          >
            <source
              src={`${video}`}
              type="video/mp4"
              width="100%"
              height="100%"
            />
          </video>
          {!isPlaying && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                cursor: "pointer",
              }}
              onClick={togglePlay1}
            >
              <img
                src={play}
                alt="play"
                className="w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-[100px] 2xl:h-[100px]"
              />
            </div>
          )}
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
            controls
            ref={videoRef}
            className="w-[100%] md:w-[80%] lg:w-[100%] 2xl:w-[100%] mx-auto rounded-[11px]"
          >
            <source
              src={`${video}`}
              type="video/mp4"
              width="100%"
              height="100%"
            />
          </video>
          {!isPlaying2 && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                cursor: "pointer",
              }}
              onClick={togglePlay2}
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
      {/* third */}
      <div className="mt-[25px] flex flex-col items-center lg:flex-row lg:items-start lg:gap-x-[25px] gap-y-[30px] rounded-[20px] xl:rounded-[28px] px-[20px] 2xl:px-[25px] pt-[50px] 2xl:pt-[70px] pb-[30px] video-setion1-bg">
        <div
          className="w-full lg:w-[36%] xl:w-[34%] 2xl:w-[33%] video-left relative"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-offset="-100"
        >
          <video
            controls
            ref={videoRef}
            className="w-[100%] md:w-[80%] lg:w-[100%] 2xl:w-[100%] mx-auto rounded-[11px]"
          >
            <source
              src={`${video}`}
              type="video/mp4"
              width="100%"
              height="100%"
            />
          </video>
          {!isPlaying3 && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,
                cursor: "pointer",
              }}
              onClick={togglePlay3}
            >
              <img
                src={play}
                alt="play"
                className="w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] 2xl:w-[100px] 2xl:h-[100px]"
              />
            </div>
          )}
        </div>
        <div className="w-full lg:w-[64%] xl:w-[66%] 2xl:w-[67%] video-right">
          <div
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-offset="-100"
          >
            <p className="mb-[20px] lg:mb-[20px] xl:mb-[20px] text-center lg:text-left font-montserrat font-medium text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
              Team AI-Specialist
            </p>
            <p className="text-center lg:text-left leading-[20px] font-montserrat font-normal text-[16px] md:text-[16px] lg:text-[15px] xl:text-[16px]">
              <span className="font-medium">Focuses on the big picture:</span>
               AI specialists have a broad understanding of artificial
              intelligence, including its various subfields like machine
              learning, natural language processing, and computer vision.
              <br />
              <br />
              <span className="font-medium">
                Designs and plans AI solutions:
              </span>
               They work closely with stakeholders to identify problems that can
              be solved with AI and design potential solutions. This may involve
              researching existing AI techniques, analyzing data feasibility,
              and outlining the overall AI development process.
              <br />
              <br />
              <span className="font-medium">
                May not write code themselves:
              </span>
               While they may have some programming knowledge, AI specialists
              typically don't write the code for the AI models themselves. They
              focus on the strategic aspects and ensure the chosen AI solution
              aligns with the business goals.
              <br />
              <br />
              <span className="font-medium">
                Communication and Collaboration:
              </span>
               AI specialists often act as a bridge between technical and
              non-technical teams. They explain complex AI concepts to
              stakeholders and translate business needs into actionable plans
              for AI engineers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
