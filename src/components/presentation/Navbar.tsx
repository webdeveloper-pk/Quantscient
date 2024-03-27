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
      <header className="homepage-container homepage-padding z-[999] w-full px-[20px] md:px-[50px] lg:px-[70px] xl:px-[110px] 2xl:px-[213px] border-b border-[#C2C2C247]">
        <div className="w-full">
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
        </div>
      </header>
    </div>
  );
};

export default Navbar;
