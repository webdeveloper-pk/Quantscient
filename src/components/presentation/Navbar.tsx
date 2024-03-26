import React, { useState, useEffect } from "react";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  // eslint-disable-next-line

  useEffect(() => {
    const handleScroll = () => {
      if (document.documentElement.scrollTop > 100) {
        const header = document.querySelector("header");
        if (header) {
          header.classList.add("shrink");
        }
      } else {
        const header = document.querySelector("header");
        if (header) {
          header.classList.remove("shrink");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setNavbar(!navbar);
  };

  const onSidebarClick = () => {
    setNavbar(!navbar);
  };

  return (
    <div>
      <header className="z-[999] w-full px-[20px] md:px-[50px] lg:px-[100px] xl:px-[150px] 2xl:px-[213px] mx-auto border-b border-[#C2C2C247]">
        <div className="mx-auto flex flex-row justify-between homepage-container">
          <div className="w-full lg:w-auto flex flex-row justify-center items-center">
            <div className="w-full flex flex-row justify-between lg:justify-start items-center gap-x-[18px] lg:gap-x-0">
              <a href="/">
                <div className="flex items-center gap-x-[15px] lg:gap-x-[26px]">
                  <div>
                    <img
                      src={logo}
                      alt="logo"
                      className="w-[40px] h-[33px] lg:w-[50px] lg:h-[43px] 2xl:w-[70px] 2xl:h-[63px]"
                    />
                  </div>
                  <p className="font-montserrat font-semibold text-black text-[16px] md:text-[18px] lg:text-[26px] xl:text-[30px] 2xl:text-[34px]">
                    Quantscient
                  </p>
                </div>
              </a>
              <div>
                <button
                  onClick={toggleSidebar}
                  className="text-white focus:outline-none block lg:hidden"
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 29 29"
                      fill="none"
                      className="text-black w-[29px] h-[29px]"
                    >
                      <path
                        d="M21.375 13.5L5.625 13.5"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.375 20.25L5.625 13.5L12.375 6.75"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_0_3335)">
                        <path
                          d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
                          fill="#000000"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_0_3335">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          {/* <div className="hidden lg:block lg:flex lg:flex-row items-center justify-between gap-x-[15px] lg:gap-x-[18px]">
            <div className="flex flex-col lg:flex-row lg:gap-x-[32px] xl:gap-x-[52px] 2xl:gap-x-[72px] gap-y-[30px] items-center">
              <div className="font-poppins font-normal text-[#00A4EE] text-[15px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] hover:text-[#00A4EE] group">
                <a href="/companies">Companies</a>
                <div className="w-0 h-1 bg-[#00A4EE] group-hover:w-full duration-500 delay-50"></div>
              </div>
              <div className="font-poppins font-normal text-[#00A4EE] text-[15px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] hover:text-[#00A4EE] group">
                <a href="/partners">Channel Partners</a>
                <div className="w-0 h-1 bg-[#00A4EE] group-hover:w-full duration-500 delay-50"></div>
              </div>
              <div className="font-poppins font-normal text-[#00A4EE] text-[15px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] hover:text-[#00A4EE] group ">
                <a href="#claims">Claims</a>
                <div className="w-0 h-1 bg-[#00A4EE] group-hover:w-full duration-500 delay-50"></div>
              </div>
              <div className="font-poppins font-normal text-[#00A4EE] text-[15px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] hover:text-[#00A4EE] group ">
                <a href="#bond">Bond</a>
                <div className="w-0 h-1 bg-[#00A4EE] group-hover:w-full duration-500 delay-50"></div>
              </div>
            </div>
          </div> */}
          {/* <div className="hidden lg:block">
            <a href="#demo">
              <button className="flex justify-center items-center px-[29px] lg:px-[29px] 2xl:px-[29px] custom-btn w-full h-[45px] xl:h-[50px] 2xl:h-[56px] rounded-[3px] font-poppins font-normal text-[15px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                <span className="custom-btn-inner">Join Us</span>
              </button>
            </a>
          </div> */}
          <div
            className={`${
              navbar ? "active-profile-sidebar" : "not-active-profile-sidebar"
            }`}
          >
            <div className="profile-sidebar-inner relative">
              <div
                className="absolute top-[25px] md:top-[30px] lg:top-[25px] right-[12px] md:right-[40px] lg:right-[12px]"
                onClick={toggleSidebar}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="cursor-pointer w-[40px] h-[40px]"
                >
                  <path
                    d="M10.6673 10.6667L5.33398 5.33337"
                    stroke="black"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M10.6673 5.33337L5.33398 10.6667"
                    stroke="black"
                    stroke-width="0.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              {/* <div
                className="flex flex-col lg:flex-row lg:gap-x-[32px] xl:gap-x-[52px] 2xl:gap-x-[72px] gap-y-[30px] items-center"
                onClick={onSidebarClick}
              >
                <div className="font-poppins font-normal text-[#00A4EE] text-[15px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] hover:text-[#00A4EE] group">
                  <a href="/companies">Companies</a>
                  <div className="w-0 h-1 bg-[#00A4EE] group-hover:w-full duration-500 delay-50"></div>
                </div>
                <div className="font-poppins font-normal text-[#00A4EE] text-[15px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] hover:text-[#00A4EE] group">
                  <a href="/partners">Channel Partners</a>
                  <div className="w-0 h-1 bg-[#00A4EE] group-hover:w-full duration-500 delay-50"></div>
                </div>
                <div className="font-poppins font-normal text-[#00A4EE] text-[15px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] hover:text-[#00A4EE] group ">
                  <a href="#claims">Claims</a>
                  <div className="w-0 h-1 bg-[#00A4EE] group-hover:w-full duration-500 delay-50"></div>
                </div>
                <div className="font-poppins font-normal text-[#00A4EE] text-[15px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px] hover:text-[#00A4EE] group ">
                  <a href="#bond">Bond</a>
                  <div className="w-0 h-1 bg-[#00A4EE] group-hover:w-full duration-500 delay-50"></div>
                </div>
                <div className="block lg:hidden">
                  <a href="#demo">
                    <button className="flex justify-center items-center px-[29px] lg:px-[29px] 2xl:px-[29px] custom-btn w-full h-[45px] xl:h-[50px] 2xl:h-[56px] rounded-[3px] font-poppins font-normal text-[15px] md:text-[15px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
                      <span className="custom-btn-inner">Join Us</span>
                    </button>
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
