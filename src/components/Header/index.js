import React from "react";

import { Img, Text, Button } from "components";

const Header = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-[20px] items-center justify-center p-[15px] w-[100%]">
          <div className="header-row my-[10px]">
            <div className="flex flex-row gap-[16px] items-end justify-center">
              <Img
                src="defaultNoData.png"
                className="h-[30px] w-[30px]"
                alt="Group448"
              />
              <Text
                className="font-bold font-cinzeldecorative mb-[5px] mt-[8px] text-left text-teal_400 w-[auto]"
                variant="body2"
              >
                Growit
              </Text>
            </div>
            <div className="mobile-menu">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <ul className="flex md:flex-1 sm:flex-col flex-row gap-[40px] sm:hidden items-start justify-center md:ml-[0] ml-[78px] md:w-[100%] w-[30%] common-row-list">
            <li className="mt-[1px] sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-bold font-chivo hover:h-[undefinedpx] text-[16px] text-gray_900 text-left hover:w-[undefinedpx]"
                rel="noreferrer"
              >
                Pricing
              </a>
            </li>
            <li className="ml-[40px] sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-bold font-chivo hover:h-[undefinedpx] text-[16px] text-gray_900 text-left hover:w-[undefinedpx]"
                rel="noreferrer"
              >
                Resources Center
              </a>
            </li>
            <li className="mb-[1px] ml-[40px] sm:w-[100%] sm:my-[10px] w-[auto]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-bold font-chivo hover:h-[undefinedpx] text-[16px] text-gray_900 text-left hover:w-[undefinedpx]"
                rel="noreferrer"
              >
                About
              </a>
            </li>
            <li className="ml-[40px] sm:w-[100%] sm:my-[10px] w-[auto] my-[1px]">
              <a
                href={"javascript:"}
                className="cursor-pointer font-bold font-chivo hover:h-[undefinedpx] text-[16px] text-gray_900 text-left hover:w-[undefinedpx]"
                rel="noreferrer"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex md:flex-1 flex-row gap-[40px] sm:hidden items-center justify-center md:ml-[0] ml-[290px] rounded-radius6 md:w-[100%] w-[15%]">
            <Text
              className="font-bold font-chivo text-gray_900 text-left w-[auto]"
              variant="body2"
            >
              Login
            </Text>
            <Button
              className="cursor-pointer font-bold font-chivo min-w-[122px] text-[16px] text-center text-white_A700 w-[auto]"
              shape="RoundedBorder6"
              size="sm"
              variant="FillTeal400"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
