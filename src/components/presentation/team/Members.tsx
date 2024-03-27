import React from "react";
import member1 from "../../../assets/images/member1.png";
import member2 from "../../../assets/images/member2.png";
import member3 from "../../../assets/images/member3.png";

const Members = () => {
  return (
    <div className="w-full homepage-container homepage-padding px-[20px] md:px-[50px] lg:px-[70px] xl:px-[110px] 2xl:px-[213px] pt-[50px] md:pt-[50px] lg:pt-[50px] xl:pt-[60px] 2xl:pt-[60px] pb-[50px] lg:pb-[40px] 2xl:pb-[40px] mx-auto overflow-hidden">
      {/* first */}
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-x-[50px] 2xl:gap-x-[100px] gap-y-[30px]">
        <div
          className="w-full lg:w-[32%] xl:w-[30%] 2xl:w-[27%] member-left"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-offset="-100"
        >
          <img
            src={member1}
            alt="Ernest Lim"
            className="w-[60%] md:w-[50%] lg:w-[100%] 2xl:w-[100%] mx-auto"
          />
        </div>
        <div className="w-full lg:w-[67%] xl:w-[70%] 2xl:w-[72%] lg:mt-[50px] xl:mt-[100px] 2xl:mt-[180px] member-right">
          <div className="pb-[15px] lg:pb-[10px] xl:pb-[15px] about-main-border">
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-offset="-100"
            >
              <p className="mb-[5px] lg:mb-[3px] xl:mb-[5px] text-center lg:text-left font-montserrat font-medium text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                Ernest Lim  (Co-founder)
              </p>
              <p className="text-center lg:text-left font-montserrat font-normal text-[16px] md:text-[17px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">
                Former Prop Trader (Canadian firm)
              </p>
            </div>
          </div>
          <ul
            className="pt-[15px] lg:pt-[10px] xl:pt-[15px] list-disc pl-[30px] leading-[26px] font-montserrat font-normal text-[16px] md:text-[17px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px]"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
            data-aos-offset="-100"
          >
            <li>
              Ernest's journey in the financial markets began during his
              military service. Back then there were no smart phones, he would
              analyze the markets over the weekends when he was out of camp to
              set up pending orders for the coming week.
            </li>
            <li>
              He has since accumulated over a decade worth of trading experience
              in the Foreign Currency Exchange Market, Stock market, and
              Options, honing his skills and knowledge.  His passion lies in
              demystifying the financial markets and empowering everyday people
              to achieve financial success.  He believes the financial markets
              offer a powerful vehicle for ordinary individuals to build their
              financial future.
            </li>
          </ul>
        </div>
      </div>
      {/* second */}
      <div className="mt-[50px] lg:mt-0 flex flex-col items-center lg:flex-row lg:items-start lg:gap-x-[50px] 2xl:gap-x-[100px] gap-y-[30px]">
        <div
          className="w-full lg:w-[32%] xl:w-[30%] 2xl:w-[27%] member-left"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-offset="-100"
        >
          <img
            src={member2}
            alt="Jonathan Garbe"
            className="w-[60%] md:w-[50%] lg:w-[100%] 2xl:w-[100%] mx-auto"
          />
        </div>
        <div className="w-full lg:w-[67%] xl:w-[70%] 2xl:w-[72%] lg:mt-[50px] xl:mt-[100px] 2xl:mt-[180px] member-right">
          <div className="pb-[15px] lg:pb-[10px] xl:pb-[15px] about-main-border">
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-offset="-100"
            >
              <p className="mb-[5px] lg:mb-[3px] xl:mb-[5px] text-center lg:text-left font-montserrat font-medium text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                Jonathan Garbe, CFA (Head Coach)
              </p>
              <p className="text-center lg:text-left font-montserrat font-normal text-[16px] md:text-[17px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">
                Former $200bn Hedge Fund Researcher
              </p>
            </div>
          </div>
          <ul
            className="pt-[15px] lg:pt-[10px] xl:pt-[15px] list-disc pl-[30px] leading-[26px] font-montserrat font-normal text-[16px] md:text-[17px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px]"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
            data-aos-offset="-100"
          >
            <li>Investing since 2006</li>
            <li>
              Jonathan's personal interest in investing lead him to an early
              career in finance at one of the most prominent asset managers in
              the world. In his roles, Jonathan has researched stocks across all
              GICS sectors (ie. tech, consumer, financials, etc) on a global
              scale. Jonathan believes that investing in the stock market should
              be accessible to everyone and that knowing how to invest should
              not be complicated, scary, or intimidating.
            </li>
            <li>
              Jonathan is a CFA Charter holder and an Advanced Financial
              Modeller.
            </li>
          </ul>
        </div>
      </div>
      {/* third */}
      <div className="mt-[50px] lg:mt-0 flex flex-col items-center lg:flex-row lg:items-start lg:gap-x-[50px] 2xl:gap-x-[100px] gap-y-[30px]">
        <div
          className="w-full lg:w-[32%] xl:w-[30%] 2xl:w-[27%] member-left"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-offset="-100"
        >
          <img
            src={member3}
            alt="Shogo"
            className="w-[60%] md:w-[50%] lg:w-[100%] 2xl:w-[100%] mx-auto"
          />
        </div>
        <div className="w-full lg:w-[67%] xl:w-[70%] 2xl:w-[72%] lg:mt-[50px] xl:mt-[100px] 2xl:mt-[180px] member-right">
          <div className="pb-[15px] lg:pb-[10px] xl:pb-[15px] about-main-border">
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="1000"
              data-aos-offset="-100"
            >
              <p className="mb-[5px] lg:mb-[3px] xl:mb-[5px] text-center lg:text-left font-montserrat font-medium text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px]">
                Shogo (Brand Ambassador)
              </p>
              <p className="text-center lg:text-left font-montserrat font-normal text-[16px] md:text-[17px] lg:text-[17px] xl:text-[18px] 2xl:text-[20px]">
                Investing since 2006
              </p>
            </div>
          </div>
          <ul
            className="pt-[15px] lg:pt-[10px] xl:pt-[15px] list-disc pl-[30px] leading-[26px] font-montserrat font-normal text-[16px] md:text-[17px] lg:text-[15px] xl:text-[18px] 2xl:text-[20px]"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1500"
            data-aos-offset="-100"
          >
            <li>
              Shogo, a Japanese-American interpreter and entrepreneur, brings a
              unique blend of global experience and technical expertise. Fluent
              in both Japanese and English, Shogo first served as a US Army
              interpreter, fostering communication across cultures. His
              adventurous spirit led him to travel extensively through 27
              countries in just 14 months. After venturing into entrepreneurship
              in Shenzhen, China, focusing on emotion recognition via machine
              learning, Shogo leveraged his product management experience for
              Japanese and Korean companies, securing substantial investments
              and managing operations.
            </li>
            <li>
              Currently, Shogo wears many hats. He is not only the spokesperson
              for QuantScient, advocating for financial market literacy, he is
              also an interpreter for corporations and lends his voice as a
              voice over artist/narrator to renowned brands like Red Bull,
              National Geographic, and Johnson & Johnson, and remains personally
              invested in the US stock market, a testament to his belief in
              life-long investing.
            </li>
            <li>
              A firm believer that financial literacy empowers everyone, Shogo
              found a perfect fit with QuantScient. This role allows him to
              combine his past experience with machine learning and his passion
              for stock investing. Now, as an interpreter and spokesperson for
              QuantScient, Shogo doesn't just lend his voice – he uses it to
              spread awareness of financial market literacy.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Members;
