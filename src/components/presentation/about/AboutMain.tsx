import React from "react";
import journey from "../../../assets/icons/journey.svg";
import mission from "../../../assets/icons/mission.svg";
import values from "../../../assets/icons/values.svg";
import vision from "../../../assets/icons/vision.svg";

const AboutMain = () => {
  return (
    <div className="w-full homepage-container homepage-padding px-[30px] md:px-[60px] lg:px-[90px] xl:px-[130px] 2xl:px-[245px] pt-[70px] md:pt-[70px] lg:pt-[80px] xl:pt-[100px] 2xl:pt-[120px] pb-[50px] lg:pb-[50px] 2xl:pb-[54px] mx-auto overflow-hidden">
      <div className="flex flex-col gap-y-[50px] 2xl:gap-y-[66px]">
        <div>
          <div className="flex flex-col lg:flex-row gap-x-[25px] gap-y-[20px] lg:gap-y-[25px] items-center lg:items-start pb-[15px] lg:pb-[15px] about-main-border">
            <div
              className="w-full lg:w-auto mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-offset="-100"
            >
              <img
                src={journey}
                alt="journey"
                className="w-[70px] h-[70px] lg:w-[70px] lg:h-[70px] 2xl:w-[77px] 2xl:h-[77px] mx-auto"
              />
            </div>
            <div
              className="lg:mt-[20px] 2xl:mt-[25px]"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-offset="-100"
            >
              <p className="mb-[5px] text-center lg:text-left font-montserrat font-medium text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                Our Journey
              </p>
              <p className="text-center lg:text-left font-montserrat font-normal text-[16px] md:text-[17px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">
                From Wall Street Expertise to Empowering You.
              </p>
            </div>
          </div>
          <p
            className="mt-[20px] lg:mt-[20px] text-center lg:text-left w-full mx-auto lg:mx-0 font-montserrat font-normal text-[15px] md:text-[16px]"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
            data-aos-offset="-100"
          >
            Our story begins with a group of successful stock market veterans.
            Years of navigating the complex financial landscape had become
            second nature to them. However, they realized a crucial disconnect –
            the knowledge they possessed wasn't common ground for most people.
            Fear and a lack of understanding were significant barriers to entry
            for everyday investors. This observation sparked the creation of
            QuantScient.
          </p>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row gap-x-[25px] gap-y-[20px] lg:gap-y-[25px] items-center lg:items-start pb-[15px] lg:pb-[15px] about-main-border">
            <div
              className="w-full lg:w-auto mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-offset="-100"
            >
              <img
                src={mission}
                alt="journey"
                className="w-[70px] h-[70px] lg:w-[70px] lg:h-[70px] 2xl:w-[77px] 2xl:h-[77px] mx-auto"
              />
            </div>
            <div
              className="lg:mt-[20px] 2xl:mt-[25px]"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-offset="-100"
            >
              <p className="mb-[5px] text-center lg:text-left font-montserrat font-medium text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                Our Mission
              </p>
              <p className="text-center lg:text-left font-montserrat font-normal text-[16px] md:text-[17px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">
                Making Knowledge Accessible, Building Confidence & Putting The
                Power Of Hedge-Fund-Grade Technology In Your Hands.
              </p>
            </div>
          </div>
          <div
            className="flex flex-col gap-y-[15px] mt-[20px] lg:mt-[20px] text-center lg:text-left w-full mx-auto lg:mx-0 font-montserrat font-normal text-[15px] md:text-[16px]"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
            data-aos-offset="-100"
          >
            <p>
              We firmly believe that financial literacy empowers individuals to
              achieve their goals. We aim to bridge the knowledge gap by
              providing a comprehensive platform that equips you for success in
              the stock market. Here's how we achieve this:
            </p>
            <ul className="list-disc pl-[25px] flex flex-col gap-y-[15px]">
              <li>
                <span className="font-semibold text-[17px] md:text-[17px] lg:text-[18px] 2xl:text-[20px]">
                  Expert-Led Education:{" "}
                </span>
                Our team comprises of industry professionals with a wealth of
                experience. They translate complex market concepts into clear,
                actionable knowledge through our educational resources and
                coaching programs.
              </li>
              <li>
                <span className="font-semibold text-[17px] md:text-[17px] lg:text-[18px] 2xl:text-[20px]">
                  Supportive Community:{" "}
                </span>
                We understand the power of collaboration and shared learning.
                Our platform fosters a supportive community of like-minded
                individuals. You can connect with fellow investors, share
                insights, and gain valuable perspectives on the market.
              </li>
              <li>
                <span className="font-semibold text-[17px] md:text-[17px] lg:text-[18px] 2xl:text-[20px]">
                  Cutting-Edge Technology:{" "}
                </span>
                Knowledge is essential, but so are the right tools. We leverage
                cutting-edge AI technology to provide you with data-driven
                insights. This empowers you to make informed investment
                decisions with confidence.
              </li>
            </ul>
            <p>
              We strive to make "expert knowledge" something accessible to
              everyone, not just a privileged few. We believe that the stock
              market shouldn't be an intimidating realm reserved for
              professionals. Through our educational resources, supportive
              community, and innovative tools, we aim to democratize investment
              expertise. Our goal is for everyone, regardless of background or
              experience level, to feel empowered to participate in the market
              and build a secure financial future.
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row gap-x-[25px] gap-y-[20px] lg:gap-y-[25px] items-center lg:items-start pb-[15px] lg:pb-[15px] about-main-border">
            <div
              className="w-full lg:w-auto mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-offset="-100"
            >
              <img
                src={values}
                alt="journey"
                className="w-[70px] h-[70px] lg:w-[70px] lg:h-[70px] 2xl:w-[77px] 2xl:h-[77px] mx-auto"
              />
            </div>
            <div
              className="lg:mt-[20px] 2xl:mt-[25px]"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-offset="-100"
            >
              <p className="mb-[5px] text-center lg:text-left font-montserrat font-medium text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                Our Values
              </p>
              <p className="text-center lg:text-left font-montserrat font-normal text-[16px] md:text-[17px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">
                Collaboration, Innovation, and Giving Back.
              </p>
            </div>
          </div>
          <p
            className="mt-[20px] lg:mt-[20px] text-center lg:text-left w-full mx-auto lg:mx-0 font-montserrat font-normal text-[15px] md:text-[16px]"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
            data-aos-offset="-100"
          >
            At QuantScient collaboration and open communication are at the heart
            of our culture. Our team continuously strives to learn, innovate,
            and improve. This dedication translates to constantly evolving
            educational resources, cutting-edge AI tools, and a commitment to
            staying ahead of the curve in the ever-changing financial landscape.
            <br />
            Furthermore, we believe in giving back to the community. A portion
            of our proceeds goes towards charities focused on providing basic
            education for children around the world and feeding the poor. We
            strive to create a positive impact beyond just empowering
            individuals financially
          </p>
        </div>
        <div>
          <div className="flex flex-col lg:flex-row gap-x-[25px] gap-y-[20px] lg:gap-y-[25px] items-center lg:items-start pb-[15px] lg:pb-[15px] about-main-border">
            <div
              className="w-full lg:w-auto mx-auto lg:mx-0"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-offset="-100"
            >
              <img
                src={vision}
                alt="journey"
                className="w-[70px] h-[70px] lg:w-[70px] lg:h-[70px] 2xl:w-[77px] 2xl:h-[77px] mx-auto"
              />
            </div>
            <div
              className="lg:mt-[20px] 2xl:mt-[25px]"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-offset="-100"
            >
              <p className="mb-[5px] text-center lg:text-left font-montserrat font-medium text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                Our Vision
              </p>
              <p className="text-center lg:text-left font-montserrat font-normal text-[16px] md:text-[17px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">
                Shaping the Future of Financial Literacy.
              </p>
            </div>
          </div>
          <p
            className="mt-[20px] lg:mt-[20px] text-center lg:text-left w-full mx-auto lg:mx-0 font-montserrat font-normal text-[15px] md:text-[16px]"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
            data-aos-offset="-100"
          >
            Looking ahead, we envision becoming the leading force in stock
            market education. We're committed to continuous growth, actively
            seeking out and bringing on board valuable experts in their fields.
            This ensures you have access to the most up-to-date knowledge and
            diverse perspectives. But our ambitions extend beyond just the stock
            market. We see a future where our expertise and cutting-edge AI
            technology empower investors across various financial markets. We
            plan to venture into other markets like the Foreign Currency Market,
            providing you with the same level of comprehensive education and
            data-driven insights.
            <br />
            Ultimately, our vision is to empower individuals not just to invest
            but to thrive financially. We believe everyone deserves the
            opportunity to build a secure future, and we're dedicated to
            providing the tools and knowledge to make it a reality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
