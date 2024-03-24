import React from "react";
import { Collapse } from "antd";
import workIcon from "../../assets/icons/workIcon.svg";
import "../../assets/styles/faqCss.css";

const { Panel } = Collapse;

const Faq = () => {
  return (
    <div id="faq" className="faq-bg">
      <div className="w-full homepage-container px-[15px] md:px-[50px] lg:px-[90px] xl:px-[150px] 2xl:px-[190px] py-[50px] md:pb-[50px] lg:py-[60px] mx-auto">
        <div
          className="flex items-center justify-center gap-x-[16px] 2xl:gap-x-[16px]"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
          data-aos-offset="-100"
        >
          <img src={workIcon} alt="icon1" className="w-[26px] h-[27px]" />
          <p className="text-white font-poppins font-semibold text-[15px] md:text-[15px] lg:text-[15px] xl:text-[16px] 2xl:text-[16px] uppercase">
            FAQS
          </p>
        </div>
        <p className="mt-[20px] text-center lg:mt-[32px] text-white font-poppins font-semibold text-[24px] md:text-[26px] lg:text-[26px] xl:text-[30px] 2xl:text-[33px] uppercase">
          Frequently Asked Questions
        </p>
        <div className="mt-[26px]">
          <div
            className="w-full"
            data-aos="fade-left"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-offset="-100"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-x-[18px]">
              <div className="w-full lg:w-[50%]">
                <Collapse
                  className="light"
                  ghost
                  accordion
                  expandIconPosition="end"
                  defaultActiveKey={[""]}
                  expandIcon={({ isActive }) =>
                    isActive ? (
                      <div className="pr-[5px] lg:pr-[10px] xl:pr-[15px]">
                        <svg
                          width="14"
                          height="2"
                          viewBox="0 0 14 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1H13"
                            stroke="#03045E"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="w-[10px] h-[2px] xl:w-[14px] xl:h-[2px]"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="pr-[5px] lg:pr-[10px] xl:pr-[15px]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[18px] h-[18px] xl:w-[24px] xl:h-[24px]"
                        >
                          <path
                            d="M6 12H18"
                            stroke="#03045E"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 18V6"
                            stroke="#03045E"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    )
                  }
                >
                  <Panel
                    header="What is a Severance package ?"
                    className="bg-white mb-[25px] lg:mb-[30px] 2xl:mb-[45px] rounded-[5px]"
                    style={{ borderRadius: "5px" }}
                    key="1"
                  >
                    <div className="flex flex-row items-start">
                      <div className="text-[#03045E] pt-[0px] pb-[15px] lg:pt-[0px] lg:pb-[30px] font-poppins font-light text-[14px] lg:text-[13.5px] xl:text-[14px] 2xl:text-[15px]">
                        Unlock your Hr potential with Prepaid insurance, when
                        off-boarding! A coverage plan that lets employers select
                        from a range of perks.
                      </div>
                    </div>
                  </Panel>
                  <Panel
                    header="What is Aid ?"
                    className="bg-white mb-[25px] lg:mb-[30px] 2xl:mb-[45px] rounded-[5px]"
                    style={{ borderRadius: "5px" }}
                    key="2"
                  >
                    <div className="flex flex-row items-start">
                      <div className="text-[#03045E] pt-[0px] pb-[15px] lg:pt-[0px] lg:pb-[30px] font-poppins font-light text-[14px] lg:text-[13.5px] xl:text-[14px] 2xl:text-[15px]">
                        Unlock your Hr potential with Prepaid insurance, when
                        off-boarding! A coverage plan that lets employers select
                        from a range of perks.
                      </div>
                    </div>
                  </Panel>
                  <Panel
                    header="Why prepaid Insurance:"
                    className="bg-white mb-[25px] lg:mb-[30px] 2xl:mb-[45px] rounded-[5px]"
                    style={{ borderRadius: "5px" }}
                    key="3"
                  >
                    <div className="flex flex-row items-start">
                      <div className="text-[#03045E] pt-[0px] pb-[15px] lg:pt-[0px] lg:pb-[30px] font-poppins font-light text-[14px] lg:text-[13.5px] xl:text-[14px] 2xl:text-[15px]">
                        Unlock your Hr potential with Prepaid insurance, when
                        off-boarding! A coverage plan that lets employers select
                        from a range of perks.
                      </div>
                    </div>
                  </Panel>
                  <Panel
                    header="Premium Payment:"
                    className="bg-white mb-[25px] lg:mb-[30px] 2xl:mb-[45px] rounded-[5px]"
                    style={{ borderRadius: "5px" }}
                    key="4"
                  >
                    <div className="flex flex-row items-start">
                      <div className="text-[#03045E] pt-[0px] pb-[15px] lg:pt-[0px] lg:pb-[30px] font-poppins font-light text-[14px] lg:text-[13.5px] xl:text-[14px] 2xl:text-[15px]">
                        Unlock your Hr potential with Prepaid insurance, when
                        off-boarding! A coverage plan that lets employers select
                        from a range of perks.
                      </div>
                    </div>
                  </Panel>
                  <Panel
                    header="Compliance"
                    className="bg-white mb-[25px] lg:mb-[30px] 2xl:mb-[45px] rounded-[5px]"
                    style={{ borderRadius: "5px" }}
                    key="5"
                  >
                    <div className="flex flex-row items-start">
                      <div className="text-[#03045E] pt-[0px] pb-[15px] lg:pt-[0px] lg:pb-[30px] font-poppins font-light text-[14px] lg:text-[13.5px] xl:text-[14px] 2xl:text-[15px]">
                        Unlock your Hr potential with Prepaid insurance, when
                        off-boarding! A coverage plan that lets employers select
                        from a range of perks.
                      </div>
                    </div>
                  </Panel>
                </Collapse>
              </div>
              <div className="w-full lg:w-[50%]">
                <Collapse
                  className="light"
                  ghost
                  accordion
                  expandIconPosition="end"
                  defaultActiveKey={[""]}
                  expandIcon={({ isActive }) =>
                    isActive ? (
                      <div className="pr-[5px] lg:pr-[10px] xl:pr-[15px]">
                        <svg
                          width="14"
                          height="2"
                          viewBox="0 0 14 2"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1H13"
                            stroke="#03045E"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="w-[10px] h-[2px] xl:w-[14px] xl:h-[2px]"
                          />
                        </svg>
                      </div>
                    ) : (
                      <div className="pr-[5px] lg:pr-[10px] xl:pr-[15px]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[18px] h-[18px] xl:w-[24px] xl:h-[24px]"
                        >
                          <path
                            d="M6 12H18"
                            stroke="#03045E"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12 18V6"
                            stroke="#03045E"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    )
                  }
                >
                  <Panel
                    header="Security Awareness and Training"
                    className="bg-white mb-[25px] lg:mb-[30px] 2xl:mb-[45px] rounded-[5px]"
                    style={{ borderRadius: "5px" }}
                    key="6"
                  >
                    <div className="flex flex-row items-start">
                      <div className="text-[#03045E] pt-[0px] pb-[15px] lg:pt-[0px] lg:pb-[30px] font-poppins font-light text-[14px] lg:text-[13.5px] xl:text-[14px] 2xl:text-[15px]">
                        Unlock your Hr potential with Prepaid insurance, when
                        off-boarding! A coverage plan that lets employers select
                        from a range of perks.
                      </div>
                    </div>
                  </Panel>
                  <Panel
                    header="Employee Screening"
                    className="bg-white mb-[25px] lg:mb-[30px] 2xl:mb-[45px] rounded-[5px]"
                    style={{ borderRadius: "5px" }}
                    key="7"
                  >
                    <div className="flex flex-row items-start">
                      <div className="text-[#03045E] pt-[0px] pb-[15px] lg:pt-[0px] lg:pb-[30px] font-poppins font-light text-[14px] lg:text-[13.5px] xl:text-[14px] 2xl:text-[15px]">
                        Unlock your Hr potential with Prepaid insurance, when
                        off-boarding! A coverage plan that lets employers select
                        from a range of perks.
                      </div>
                    </div>
                  </Panel>
                  <Panel
                    header="Great prices? You always save"
                    className="bg-white mb-[25px] lg:mb-[30px] 2xl:mb-[45px] rounded-[5px]"
                    style={{ borderRadius: "5px" }}
                    key="8"
                  >
                    <div className="flex flex-row items-start">
                      <div className="text-[#03045E] pt-[0px] pb-[15px] lg:pt-[0px] lg:pb-[30px] font-poppins font-light text-[14px] lg:text-[13.5px] xl:text-[14px] 2xl:text-[15px]">
                        Unlock your Hr potential with Prepaid insurance, when
                        off-boarding! A coverage plan that lets employers select
                        from a range of perks.
                      </div>
                    </div>
                  </Panel>
                  <Panel
                    header="How can I file a claim?"
                    className="bg-white mb-[25px] lg:mb-[30px] 2xl:mb-[45px] rounded-[5px]"
                    style={{ borderRadius: "5px" }}
                    key="9"
                  >
                    <div className="flex flex-row items-start">
                      <div className="text-[#03045E] pt-[0px] pb-[15px] lg:pt-[0px] lg:pb-[30px] font-poppins font-light text-[14px] lg:text-[13.5px] xl:text-[14px] 2xl:text-[15px]">
                        Unlock your Hr potential with Prepaid insurance, when
                        off-boarding! A coverage plan that lets employers select
                        from a range of perks.
                      </div>
                    </div>
                  </Panel>
                  <Panel
                    header="How can I file a claim?"
                    className="bg-white mb-[25px] lg:mb-[30px] 2xl:mb-[45px] rounded-[5px]"
                    style={{ borderRadius: "5px" }}
                    key="10"
                  >
                    <div className="flex flex-row items-start">
                      <div className="text-[#03045E] pt-[0px] pb-[15px] lg:pt-[0px] lg:pb-[30px] font-poppins font-light text-[14px] lg:text-[13.5px] xl:text-[14px] 2xl:text-[15px]">
                        Unlock your Hr potential with Prepaid insurance, when
                        off-boarding! A coverage plan that lets employers select
                        from a range of perks.
                      </div>
                    </div>
                  </Panel>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
