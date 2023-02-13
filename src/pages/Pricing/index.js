import React from "react";

import Header from "components/Header";
import { Text, List, Button, Line, Img, Input } from "components";
import Footer from "components/Footer";

const PricingPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-chivo items-center justify-start mx-[auto] w-[100%]">
        <div className="h-[1056px] md:h-[1470px] sm:h-[2111px] relative w-[100%]">
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col inset-x-[0] items-center justify-start mx-[auto] pb-[647px] top-[0] w-[100%]"
            style={{ backgroundImage: "url('images/img_group862.png')" }}
          >
            <Header className="flex flex-col items-center justify-start w-[100%]" />
          </div>
          <div className="absolute bottom-[0] flex flex-col md:gap-[40px] sm:gap-[40px] gap-[64px] inset-x-[0] items-center justify-start mx-[auto] w-[78%]">
            <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] sm:w-[100%] w-[67%]">
              <Text
                className="leading-[58.00px] text-center text-gray_900 w-[100%]"
                as="h1"
                variant="h1"
              >
                Pricing plan for every product of all sizes.
              </Text>
              <Text
                className="leading-[28.00px] not-italic text-bluegray_600 text-center sm:w-[100%] w-[74%]"
                variant="body1"
              >
                Start connecting with all your team and plan payment for every
                product as you want
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="md:h-[601px] sm:h-[601px] h-[654px] relative w-[100%]">
                <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-[auto] p-[39px] sm:px-[20px] rounded-radius6 shadow-bs1 w-[100%]">
                  <div className="flex flex-col items-center justify-start mt-[40px] md:w-[100%] sm:w-[100%] w-[101%]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Free
                    </Text>
                    <Text
                      className="mt-[16px] text-gray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      <span className="sm:text-[32px] md:text-[34px] text-gray_900 text-[36px] font-chivo font-normal">
                        $0
                      </span>
                      <span className="text-gray_900 text-[18px] font-chivo font-normal not-italic">
                        /month
                      </span>
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] mt-[8px] not-italic text-bluegray_600 text-center w-[100%]"
                      variant="body2"
                    >
                      All the basics for businesses that are just getting
                      started
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-normal min-w-[154px] mt-[24px] text-[16px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder6"
                    size="sm"
                    variant="FillTeal401"
                  >
                    Get Started
                  </Button>
                  <Line className="bg-gray_200 h-[1px] mt-[32px] w-[100%]" />
                  <div className="flex flex-col gap-[20px] items-start justify-start mt-[31px] pt-[2px] md:w-[100%] sm:w-[100%] w-[99%]">
                    <div className="flex flex-row gap-[12px] items-start justify-start md:w-[100%] sm:w-[100%] w-[67%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="checkmark"
                      />
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_900_99 text-left w-[auto]"
                        variant="body2"
                      >
                        Single Project Use
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="checkmark One"
                      />
                      <Text
                        className="font-normal mt-[3px] not-italic text-gray_900_99 text-left w-[auto]"
                        variant="body2"
                      >
                        Unlimited User Authentication
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="checkmark Two"
                      />
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_900_99 text-left w-[auto]"
                        variant="body2"
                      >
                        Unlimited data history & seats
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start md:w-[100%] sm:w-[100%] w-[70%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="checkmark Three"
                      />
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_900_99 text-left w-[auto]"
                        variant="body2"
                      >
                        Monitoring & alerts
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start md:w-[100%] sm:w-[100%] w-[97%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="checkmark Four"
                      />
                      <Text
                        className="font-normal mt-[3px] not-italic text-gray_900_99 text-left w-[auto]"
                        variant="body2"
                      >
                        Basic Roles and Permissions
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white_A700 h-[100px] md:h-[50px] sm:h-[50px] inset-x-[0] mx-[auto] p-[25px] sm:px-[20px] rounded-radius6 shadow-bs top-[0] w-[100px]">
                  <Img
                    src="images/img_thumbsup.svg"
                    className="absolute h-[50px] inset-[0] justify-center m-[auto] w-[50px]"
                    alt="thumbsup"
                  />
                </div>
              </div>
              <div className="md:h-[602px] sm:h-[602px] h-[654px] relative w-[100%]">
                <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-[auto] p-[39px] sm:px-[20px] rounded-radius6 shadow-bs1 w-[100%]">
                  <div className="flex flex-col items-center justify-start mt-[40px] md:w-[100%] sm:w-[100%] w-[101%]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Growth
                    </Text>
                    <Text
                      className="mt-[16px] text-gray_900 text-left w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      <span className="sm:text-[32px] md:text-[34px] text-gray_900 text-[36px] font-chivo font-normal">
                        $99
                      </span>
                      <span className="text-gray_900 text-[18px] font-chivo font-normal not-italic">
                        /month
                      </span>
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] mt-[8px] not-italic text-bluegray_600 text-center"
                      variant="body2"
                    >
                      Suitable for growth-stage startups
                      <br />
                      with advanced requirements.
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-normal min-w-[154px] mt-[24px] text-[16px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder6"
                    size="sm"
                    variant="FillTeal401"
                  >
                    Try for free
                  </Button>
                  <Line className="bg-gray_200 h-[1px] mt-[32px] w-[100%]" />
                  <div className="flex flex-col gap-[20px] items-start justify-start mt-[31px] pt-[2px] md:w-[100%] sm:w-[100%] w-[96%]">
                    <div className="flex flex-row gap-[12px] items-start justify-start md:w-[100%] sm:w-[100%] w-[64%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="checkmark One"
                      />
                      <Text
                        className="font-normal mt-[3px] not-italic text-gray_900 text-left w-[auto]"
                        variant="body2"
                      >
                        <span className="text-gray_900 text-[16px] font-chivo">
                          All features{" "}
                        </span>
                        <span className="text-gray_900 text-[16px] font-chivo">
                          Free
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start md:w-[100%] sm:w-[100%] w-[78%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="checkmark One One"
                      />
                      <Text
                        className="font-normal mt-[3px] not-italic text-gray_900 text-left w-[auto]"
                        variant="body2"
                      >
                        Advanced Dashboard
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="checkmark Two One"
                      />
                      <Text
                        className="font-normal mt-[3px] not-italic text-gray_900 text-left w-[auto]"
                        variant="body2"
                      >
                        Unlimited Roles & Permission
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start md:w-[100%] sm:w-[100%] w-[86%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="checkmark Three One"
                      />
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_900 text-left w-[auto]"
                        variant="body2"
                      >
                        1 Enterprise integration
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start md:w-[100%] sm:w-[100%] w-[91%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="checkmark Four One"
                      />
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_900 text-left w-[auto]"
                        variant="body2"
                      >
                        External API management
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white_A700 h-[100px] md:h-[50px] sm:h-[50px] inset-x-[0] mx-[auto] p-[25px] sm:px-[20px] rounded-radius6 shadow-bs top-[0] w-[100px]">
                  <Img
                    src="images/img_checkmark_50X50.svg"
                    className="absolute h-[50px] inset-[0] justify-center m-[auto] w-[50px]"
                    alt="checkmark Five"
                  />
                </div>
              </div>
              <div className="md:h-[602px] sm:h-[602px] h-[654px] relative w-[100%]">
                <div className="absolute bg-white_A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-center mx-[auto] p-[39px] sm:px-[20px] rounded-radius6 shadow-bs1 w-[100%]">
                  <div className="flex flex-col items-center justify-start mt-[42px] md:w-[100%] sm:w-[100%] w-[101%]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Enterprise
                    </Text>
                    <Text
                      className="mt-[12px] text-gray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      <span className="sm:text-[32px] md:text-[34px] text-gray_900 text-[36px] font-chivo font-normal">
                        $120
                      </span>
                      <span className="text-gray_900 text-[18px] font-chivo font-normal not-italic">
                        /month
                      </span>
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] mt-[8px] not-italic text-bluegray_600 text-center w-[100%]"
                      variant="body2"
                    >
                      Suitable for Hyper-growth or Enterprise companies
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-normal min-w-[154px] mt-[24px] text-[16px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder6"
                    size="sm"
                    variant="FillTeal401"
                  >
                    Contact Sales
                  </Button>
                  <Line className="bg-gray_200 h-[1px] mt-[32px] w-[100%]" />
                  <div className="flex flex-col gap-[20px] items-start justify-start mt-[31px] pt-[2px] md:w-[100%] sm:w-[100%] w-[96%]">
                    <div className="flex flex-row gap-[12px] items-start justify-start md:w-[100%] sm:w-[100%] w-[80%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="checkmark Two"
                      />
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_900 text-left w-[auto]"
                        variant="body2"
                      >
                        <span className="text-gray_900 text-[16px] font-chivo">
                          Every Thing in{" "}
                        </span>
                        <span className="text-gray_900 text-[16px] font-chivo">
                          Growth
                        </span>
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start md:w-[100%] sm:w-[100%] w-[92%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="checkmark One Two"
                      />
                      <Text
                        className="font-normal mt-[3px] not-italic text-gray_900 text-left w-[auto]"
                        variant="body2"
                      >
                        Advanced access controls
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start md:w-[100%] sm:w-[100%] w-[90%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="checkmark Two Two"
                      />
                      <Text
                        className="font-normal mt-[3px] not-italic text-gray_900 text-left w-[auto]"
                        variant="body2"
                      >
                        Dedicated SaaS solutions
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start md:w-[100%] sm:w-[100%] w-[56%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="checkmark Three Two"
                      />
                      <Text
                        className="font-normal mt-[4px] not-italic text-gray_900 text-left w-[auto]"
                        variant="body2"
                      >
                        24/7 Support{" "}
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[12px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_checkmark.svg"
                        className="h-[24px] w-[24px]"
                        alt="checkmark Four Two"
                      />
                      <Text
                        className="font-normal mt-[3px] not-italic text-gray_900 text-left w-[auto]"
                        variant="body2"
                      >
                        Dedicated customer success
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-white_A700 h-[100px] md:h-[50px] sm:h-[50px] inset-x-[0] mx-[auto] p-[25px] sm:px-[20px] rounded-radius6 shadow-bs top-[0] w-[100px]">
                  <Img
                    src="images/img_plus.svg"
                    className="absolute h-[50px] inset-[0] justify-center m-[auto] w-[50px]"
                    alt="plus"
                  />
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[1112px] mt-[100px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
          <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] sm:w-[100%] w-[63%]">
            <Text
              className="text-gray_900 text-left w-[auto]"
              as="h2"
              variant="h2"
            >
              Learn what you get in every plan
            </Text>
            <Text
              className="leading-[30.00px] not-italic text-bluegray_600 text-center sm:w-[100%] w-[79%]"
              as="h6"
              variant="h6"
            >
              <span className="sm:text-[18px] md:text-[20px] text-bluegray_600 text-[22px] font-chivo font-normal">
                Get{" "}
              </span>
              <span className="sm:text-[18px] md:text-[20px] text-teal_401 text-[22px] font-chivo font-normal">
                100+{" "}
              </span>
              <span className="sm:text-[18px] md:text-[20px] text-bluegray_600 text-[22px] font-chivo font-normal">
                features out of the box with Growit integrated per-transaction
                pricing
              </span>
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="gap-[124px] md:gap-[20px] sm:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
              <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                <Img
                  src="images/img_google.svg"
                  className="h-[50px] w-[50px]"
                  alt="google"
                />
                <div className="flex flex-col items-start justify-start pb-[2px] w-[100%]">
                  <Text
                    className="leading-[32.00px] text-gray_900 text-left w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Monitoring analytics data and alert
                  </Text>
                  <div className="flex flex-row gap-[12px] items-center justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[40%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[24px] w-[24px]"
                      alt="checkmark Three"
                    />
                    <Text
                      className="not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Live view{" "}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[72%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[24px] w-[24px]"
                      alt="checkmark One Three"
                    />
                    <Text
                      className="not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Custom dashboards
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[66%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[24px] w-[24px]"
                      alt="checkmark Two Three"
                    />
                    <Text
                      className="not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Alert Notifications
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                <Img
                  src="images/img_volume_50X50.svg"
                  className="h-[50px] w-[50px]"
                  alt="volume"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="leading-[32.00px] text-gray_900 text-left w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Data collection and tracking analytics
                  </Text>
                  <div className="flex flex-row gap-[12px] items-center justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[57%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[24px] w-[24px]"
                      alt="checkmark Four"
                    />
                    <Text
                      className="not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Data collection
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[48%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[24px] mb-[2px] w-[24px]"
                      alt="checkmark One Four"
                    />
                    <Text
                      className="mt-[4px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Data import
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-start justify-start mt-[14px] md:w-[100%] sm:w-[100%] w-[49%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[24px] mb-[2px] w-[24px]"
                      alt="checkmark Two Four"
                    />
                    <Text
                      className="mt-[4px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Integrations
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                <Img
                  src="images/img_lock_50X50.svg"
                  className="h-[50px] w-[50px]"
                  alt="lock"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="leading-[32.00px] text-gray_900 text-left w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Customer security and privacy
                  </Text>
                  <div className="flex flex-row gap-[12px] items-start justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[45%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[24px] mb-[2px] w-[24px]"
                      alt="checkmark Five"
                    />
                    <Text
                      className="mt-[4px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Encryption
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-start mt-[14px] md:w-[100%] sm:w-[100%] w-[91%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[24px] w-[24px]"
                      alt="checkmark One Five"
                    />
                    <Text
                      className="not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Two-Factor Authentication
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[58%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[24px] mb-[2px] w-[24px]"
                      alt="checkmark Two Five"
                    />
                    <Text
                      className="mt-[4px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      User device log{" "}
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                <Img
                  src="images/img_icon_50X50.svg"
                  className="h-[50px] w-[50px]"
                  alt="Icon"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="leading-[32.00px] text-gray_900 text-left w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Reporting and analytics sales data
                  </Text>
                  <div className="flex flex-row gap-[12px] items-center justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[67%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[24px] w-[24px]"
                      alt="checkmark Six"
                    />
                    <Text
                      className="not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Customer records
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[90%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[24px] mb-[2px] w-[24px]"
                      alt="checkmark One Six"
                    />
                    <Text
                      className="mt-[4px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Core subscription metrics{" "}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-start justify-start mt-[14px] md:w-[100%] sm:w-[100%] w-[58%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[24px] mb-[2px] w-[24px]"
                      alt="checkmark Two Six"
                    />
                    <Text
                      className="mt-[4px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Refund reports
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                <Img
                  src="images/img_map_50X50.svg"
                  className="h-[50px] w-[50px]"
                  alt="map"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="leading-[32.00px] text-gray_900 text-left w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Integration with any social media
                  </Text>
                  <div className="flex flex-row gap-[12px] items-start justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[77%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[24px] mb-[2px] w-[24px]"
                      alt="checkmark Seven"
                    />
                    <Text
                      className="mt-[4px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Advertising platforms{" "}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-start justify-start mt-[14px] md:w-[100%] sm:w-[100%] w-[87%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[24px] mb-[2px] w-[24px]"
                      alt="checkmark One Seven"
                    />
                    <Text
                      className="mt-[4px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Customer data platforms{" "}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-start justify-start mt-[14px] md:w-[100%] sm:w-[100%] w-[63%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[24px] mb-[2px] w-[24px]"
                      alt="checkmark Two Seven"
                    />
                    <Text
                      className="mt-[4px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Data governance
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[24px] items-start justify-start w-[100%]">
                <Img
                  src="images/img_menu.svg"
                  className="h-[50px] w-[50px]"
                  alt="menu"
                />
                <div className="flex flex-col items-start justify-start w-[100%]">
                  <Text
                    className="leading-[32.00px] text-gray_900 text-left w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Task and activity tracking for dashboard
                  </Text>
                  <div className="flex flex-row gap-[12px] items-start justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[74%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[24px] mb-[2px] w-[24px]"
                      alt="checkmark Eight"
                    />
                    <Text
                      className="mt-[4px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Calendar integration
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-center justify-start mt-[14px] md:w-[100%] sm:w-[100%] w-[62%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[24px] w-[24px]"
                      alt="checkmark One Eight"
                    />
                    <Text
                      className="not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Task automation
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[12px] items-start justify-start mt-[16px] md:w-[100%] sm:w-[100%] w-[87%]">
                    <Img
                      src="images/img_checkmark.svg"
                      className="h-[24px] mb-[2px] w-[24px]"
                      alt="checkmark Two Eight"
                    />
                    <Text
                      className="mt-[4px] not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Task appointment setting
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[48px] items-center justify-start max-w-[920px] mt-[137px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
          <Text
            className="text-gray_900 text-left w-[auto]"
            as="h2"
            variant="h2"
          >
            Frequently Asked Question
          </Text>
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="flex flex-col gap-[17px] items-start justify-start w-[100%]">
              <div className="flex flex-row sm:gap-[40px] items-start justify-between w-[100%]">
                <Text
                  className="mt-[7px] text-left text-teal_401 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  How secure is my data?
                </Text>
                <Img
                  src="images/img_videocamera.svg"
                  className="h-[24px] mb-[7px] w-[24px]"
                  alt="videocamera"
                />
              </div>
              <Text
                className="leading-[28.00px] not-italic text-bluegray_600 text-left sm:w-[100%] w-[84%]"
                variant="body1"
              >
                We monitor our systems and code 24/7/365 with both automated
                tools and our experienced staff to prevent and eliminate attacks
                on our service and to protect our customers’ data.
              </Text>
            </div>
            <Line className="bg-bluegray_200 h-[1px] mt-[32px] w-[100%]" />
            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-start justify-between mt-[35px] w-[100%]">
              <Text
                className="sm:mt-[0] mt-[3px] text-gray_900 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                What happens to my data after the trial?
              </Text>
              <Img
                src="images/img_plus_24X24.svg"
                className="h-[24px] mb-[4px] w-[24px]"
                alt="plus One"
              />
            </div>
            <Line className="bg-bluegray_200 h-[1px] mt-[32px] w-[100%]" />
            <div className="flex flex-row sm:gap-[40px] items-start justify-between mt-[35px] w-[100%]">
              <Text
                className="mt-[3px] text-gray_900 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Can I switch between plans?
              </Text>
              <Img
                src="images/img_plus_24X24.svg"
                className="h-[24px] mb-[4px] w-[24px]"
                alt="plus Two"
              />
            </div>
            <Line className="bg-bluegray_200 h-[1px] mt-[32px] w-[100%]" />
            <div className="flex sm:flex-col flex-row sm:gap-[40px] items-center justify-between mt-[35px] w-[100%]">
              <Text
                className="text-gray_900 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Is there a limit on team members?
              </Text>
              <Img
                src="images/img_plus_24X24.svg"
                className="h-[24px] w-[24px]"
                alt="plus Three"
              />
            </div>
            <Line className="bg-bluegray_200 h-[1px] mt-[36px] w-[100%]" />
            <div className="flex flex-row sm:gap-[40px] items-start justify-between mt-[35px] w-[100%]">
              <Text
                className="mt-[3px] text-gray_900 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Can I cancel anytime?
              </Text>
              <Img
                src="images/img_plus_24X24.svg"
                className="h-[24px] mb-[3px] w-[24px]"
                alt="plus Four"
              />
            </div>
            <Line className="bg-bluegray_200 h-[1px] mt-[32px] w-[100%]" />
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-start justify-between mt-[35px] w-[100%]">
              <Text
                className="md:mt-[0] sm:mt-[0] mt-[3px] text-gray_900 text-left w-[auto]"
                as="h6"
                variant="h6"
              >
                Do you have any discounts for non-profits or educational
                institutions?
              </Text>
              <Img
                src="images/img_plus_24X24.svg"
                className="h-[24px] mb-[4px] w-[24px]"
                alt="plus Five"
              />
            </div>
            <Line className="bg-bluegray_200 h-[1px] mt-[32px] w-[100%]" />
          </div>
        </div>
        <div className="bg-teal_401 flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[75px] items-start justify-center max-w-[1112px] mt-[100px] mx-[auto] pb-[39px] pl-[39px] md:px-[20px] sm:px-[20px] rounded-radius6 w-[100%]">
          <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start md:ml-[0] sm:ml-[0] ml-[25px] md:mt-[0] sm:mt-[0] mt-[48px] rounded-radius6 md:w-[100%] sm:w-[100%] w-[45%]">
            <Text
              className="text-left text-white_A700 w-[auto]"
              as="h2"
              variant="h2"
            >
              Ready to get started?
            </Text>
            <Text
              className="leading-[28.00px] mt-[16px] not-italic text-left text-white_A700_99 w-[100%]"
              variant="body1"
            >
              The fastest and simple way to generate growing business solutions
              with our products
            </Text>
            <div className="flex flex-col items-center justify-start mt-[32px] rounded-radius6 w-[100%]">
              <div className="bg-white_A700 border border-bluegray_200 border-solid flex sm:flex-col flex-row gap-[21px] items-center justify-end p-[8px] rounded-radius6 w-[100%]">
                <Input
                  className="flex-1 font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                  wrapClassName="my-[6px] sm:mt-[0] sm:w-[100%] w-[61%]"
                  type="email"
                  name="box"
                  placeholder="Your business email"
                  size="md"
                  variant="FillWhiteA700"
                ></Input>
                <Button
                  className="cursor-pointer font-normal min-w-[150px] text-[16px] text-center text-white_A700 w-[auto]"
                  shape="RoundedBorder6"
                  size="sm"
                  variant="FillTeal400"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
          <Img
            src="images/img_pattern_281X493.svg"
            className="h-[281px] w-[46%]"
            alt="pattern"
          />
        </div>
        <Footer className="bg-gray_900 flex items-center justify-center mt-[120px] w-[100%]" />
      </div>
    </>
  );
};

export default PricingPage;
