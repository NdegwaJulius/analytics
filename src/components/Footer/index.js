import React from "react";

import { Img, Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[80px] items-center justify-center mb-[24px] ml-[161px] mr-[164px] mt-[35px] w-[78%]">
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-evenly w-[100%]">
            <div className="flex md:flex-1 sm:flex-1 flex-col gap-[46px] items-start justify-start mb-[30px] md:w-[100%] sm:w-[100%] w-[51%]">
              <div className="flex flex-row gap-[16px] items-end justify-start md:ml-[0] sm:ml-[0] ml-[2px] md:w-[100%] sm:w-[100%] w-[21%]">
                <Img
                  src="defaultNoData.png"
                  className="h-[30px] w-[30px]"
                  alt="Group448 One"
                />
                <Text
                  className="font-bold font-cinzeldecorative mb-[5px] mt-[8px] text-colors text-left w-[auto]"
                  variant="body2"
                >
                  Growit
                </Text>
              </div>
              <ul className="flex flex-col items-start justify-start pb-[3px] md:w-[100%] sm:w-[100%] w-[53%] common-column-list">
                <li className="ml-[2px] w-[auto]">
                  <Text
                    className="cursor-pointer font-chivo font-normal leading-[26.00px] not-italic text-left text-white_A700"
                    variant="body2"
                  >
                    The fastest and simple way to generate growing business
                    solutions with our products
                  </Text>
                </li>
                <li className="mt-[29px] w-[78%]">
                  <div className="cursor-pointer flex flex-row gap-[10px] items-end justify-start">
                    <Img
                      src="images/img_mail.svg"
                      className="h-[24px] w-[24px]"
                      alt="mail"
                    />
                    <Text
                      className="font-chivo font-normal mb-[2px] mt-[5px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      hello@dhuhacreative.com
                    </Text>
                  </div>
                </li>
                <li className="mt-[16px] ml-[2px] w-[77%]">
                  <div className="cursor-pointer flex flex-row gap-[12px] items-start justify-start">
                    <Img
                      src="images/img_grid.svg"
                      className="h-[20px] w-[20px]"
                      alt="grid"
                    />
                    <Text
                      className="font-chivo font-normal mt-[3px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body2"
                    >
                      Join our slack community
                    </Text>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex md:flex-1 sm:flex-1 sm:flex-col flex-row sm:gap-[20px] items-start justify-evenly md:mt-[0] sm:mt-[0] mt-[53px] py-[2px] md:w-[100%] sm:w-[100%] w-[50%]">
              <ul className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[36%] common-column-list">
                <li className="w-[auto]">
                  <Text
                    className="cursor-pointer font-bold font-chivo text-left text-white_A700"
                    variant="body2"
                  >
                    Product
                  </Text>
                </li>
                <li className="mt-[24px] w-[auto]">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-chivo font-normal not-italic text-[16px] text-bluegray_100 text-left"
                    rel="noreferrer"
                  >
                    Landingpages
                  </a>
                </li>
                <li className="mt-[22px] w-[auto]">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-chivo font-normal not-italic text-[16px] text-bluegray_100 text-left"
                    rel="noreferrer"
                  >
                    Pricing
                  </a>
                </li>
                <li className="mt-[20px] w-[auto]">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-chivo font-normal not-italic text-[16px] text-bluegray_100 text-left"
                    rel="noreferrer"
                  >
                    Benefits
                  </a>
                </li>
                <li className="mt-[22px] w-[auto]">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-chivo font-normal not-italic text-[16px] text-bluegray_100 text-left"
                    rel="noreferrer"
                  >
                    Features
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col items-start justify-start sm:mt-[0] my-[2px] md:w-[100%] sm:w-[100%] w-[36%] common-column-list">
                <li className="w-[auto]">
                  <Text
                    className="cursor-pointer font-bold font-chivo text-left text-white_A700"
                    variant="body2"
                  >
                    Company
                  </Text>
                </li>
                <li className="mt-[18px] w-[auto]">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-chivo font-normal not-italic text-[16px] text-bluegray_100 text-left"
                    rel="noreferrer"
                  >
                    About
                  </a>
                </li>
                <li className="mt-[23px] w-[auto]">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-chivo font-normal not-italic text-[16px] text-bluegray_100 text-left"
                    rel="noreferrer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="mt-[20px] w-[auto]">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-chivo font-normal not-italic text-[16px] text-bluegray_100 text-left"
                    rel="noreferrer"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li className="mt-[22px] w-[auto]">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-chivo font-normal not-italic text-[16px] text-bluegray_100 text-left"
                    rel="noreferrer"
                  >
                    Partners
                  </a>
                </li>
                <li className="mt-[21px] w-[auto]">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-chivo font-normal not-italic text-[16px] text-bluegray_100 text-left"
                    rel="noreferrer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[32%] common-column-list">
                <li className="w-[auto]">
                  <Text
                    className="cursor-pointer font-bold font-chivo text-left text-white_A700"
                    variant="body2"
                  >
                    Resources
                  </Text>
                </li>
                <li className="mt-[20px] w-[auto]">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-chivo font-normal not-italic text-[16px] text-bluegray_100 text-left"
                    rel="noreferrer"
                  >
                    Guides and resources
                  </a>
                </li>
                <li className="mt-[23px] w-[auto]">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-chivo font-normal not-italic text-[16px] text-bluegray_100 text-left"
                    rel="noreferrer"
                  >
                    Blog
                  </a>
                </li>
                <li className="mt-[20px] w-[auto]">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-chivo font-normal not-italic text-[16px] text-bluegray_100 text-left"
                    rel="noreferrer"
                  >
                    Tools
                  </a>
                </li>
                <li className="mt-[23px] w-[auto]">
                  <a
                    href={"javascript:"}
                    className="cursor-pointer font-chivo font-normal not-italic text-[16px] text-bluegray_100 text-left"
                    rel="noreferrer"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-end justify-start w-[100%]">
            <Text
              className="font-chivo md:mt-[0] sm:mt-[0] mt-[8px] not-italic text-left text-white_A700_a2 w-[auto]"
              variant="body3"
            >
              © 2020 Growit. All Right Reserved
            </Text>
            <Img
              src="images/img_bxbxlinstagra.svg"
              className="h-[24px] md:ml-[0] sm:ml-[0] ml-[752px] w-[24px]"
              alt="bxbxlinstagra"
            />
            <Img
              src="images/img_twitter.svg"
              className="h-[24px] md:ml-[0] sm:ml-[0] ml-[32px] w-[24px]"
              alt="twitter"
            />
            <Img
              src="images/img_linkedin.svg"
              className="h-[24px] md:ml-[0] sm:ml-[0] ml-[32px] w-[24px]"
              alt="linkedin"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
