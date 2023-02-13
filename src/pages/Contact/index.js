import React from "react";

import Header from "components/Header";
import { Text, Img, List, Input, Line, TextArea, Button } from "components";
import Footer from "components/Footer";

const ContactPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-chivo md:gap-[40px] sm:gap-[40px] gap-[70px] items-center justify-start mx-[auto] w-[100%]">
        <Header className="flex items-center justify-center w-[100%]" />
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="flex md:flex-col sm:flex-col flex-row gap-[40px] items-center justify-start max-w-[1112px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="flex md:flex-1 sm:flex-1 flex-col gap-[32px] items-center justify-start md:w-[100%] sm:w-[100%] w-[49%]">
              <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                <Text
                  className="leading-[54.00px] text-gray_900 text-left w-[100%]"
                  as="h2"
                  variant="h2"
                >
                  Talk to our product analytics expert
                </Text>
                <Text
                  className="leading-[28.00px] not-italic text-bluegray_600 text-left w-[100%]"
                  variant="body1"
                >
                  Have questions about pricing, plans, or Growit? Fill out the
                  form and our product analytics expert will be in touch
                  directly.
                </Text>
              </div>
              <div className="flex flex-col gap-[30px] items-start justify-start w-[100%]">
                <Text
                  className="text-gray_900 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Our office
                </Text>
                <div className="flex flex-col gap-[40px] items-center justify-start w-[100%]">
                  <div className="flex flex-col gap-[18px] items-center justify-start rounded-radius6 w-[100%]">
                    <Img
                      src="images/img_rectangle224.png"
                      className="h-[240px] md:h-[auto] sm:h-[auto] object-cover rounded-radius6 sm:w-[100%] w-[99%]"
                      alt="Rectangle224"
                    />
                    <Text
                      className="leading-[28.00px] not-italic text-bluegray_600 text-left w-[100%]"
                      variant="body1"
                    >
                      Have questions about pricing, plans, or Growit? Fill out
                      the form and our product analytics expert will be in touch
                      directly.
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[40px] grid sm:grid-cols-1 grid-cols-2 justify-center w-[100%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-1 flex-col items-start justify-start pb-[3px] w-[100%]">
                      <Text
                        className="text-gray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        United Kingdom
                      </Text>
                      <div className="flex flex-row gap-[8px] items-start justify-start mt-[12px] w-[100%]">
                        <Img
                          src="images/img_location.svg"
                          className="h-[20px] mt-[3px] w-[20px]"
                          alt="location"
                        />
                        <Text
                          className="font-normal leading-[26.00px] not-italic text-bluegray_600 text-left"
                          variant="body2"
                        >
                          30 Eastbourne Terrace
                          <br />
                          Paddington, London
                          <br />
                          W2 6LA, UK
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-start mt-[11px] md:w-[100%] sm:w-[100%] w-[60%]">
                        <Img
                          src="images/img_call.svg"
                          className="h-[20px] w-[20px]"
                          alt="call"
                        />
                        <a
                          href={"javascript:"}
                          className="font-normal text-[14px] text-bluegray_600 text-left underline w-[auto]"
                          rel="noreferrer"
                        >
                          +44 13 5135 1051
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start pb-[3px] w-[100%]">
                      <Text
                        className="text-gray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        France
                      </Text>
                      <div className="flex flex-row gap-[8px] items-start justify-start mt-[15px] w-[100%]">
                        <Img
                          src="images/img_location.svg"
                          className="h-[20px] mt-[5px] w-[20px]"
                          alt="location One"
                        />
                        <Text
                          className="font-normal leading-[26.00px] not-italic text-bluegray_600 text-left"
                          variant="body2"
                        >
                          266 Place Ernest Granier
                          <br />
                          34000 Montpellier
                          <br />
                          France
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[8px] items-center justify-start mt-[11px] md:w-[100%] sm:w-[100%] w-[59%]">
                        <Img
                          src="images/img_call.svg"
                          className="h-[20px] w-[20px]"
                          alt="call One"
                        />
                        <a
                          href={"javascript:"}
                          className="font-normal text-[14px] text-bluegray_600 text-left underline w-[auto]"
                          rel="noreferrer"
                        >
                          +33 5 12 18 21 86
                        </a>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="bg-white_A700 flex md:flex-1 sm:flex-1 flex-col items-center justify-start p-[39px] sm:px-[20px] rounded-radius6 shadow-bs1 md:w-[100%] sm:w-[100%] w-[49%]">
              <div className="flex flex-col items-center justify-start pt-[4px] w-[100%]">
                <div className="flex sm:flex-col flex-row gap-[32px] items-center justify-between w-[100%]">
                  <div className="flex sm:flex-1 flex-col gap-[17px] items-start justify-start rounded-radius6 sm:w-[100%] w-[auto]">
                    <Text
                      className="not-italic text-gray_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Firts Name
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                      wrapClassName="w-[100%]"
                      type="text"
                      name="FormInput"
                      placeholder="First Name"
                      shape="RoundedBorder6"
                    ></Input>
                  </div>
                  <div className="flex sm:flex-1 flex-col gap-[18px] items-start justify-start rounded-radius6 sm:w-[100%] w-[auto]">
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[4px] not-italic text-gray_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Last Name
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                      wrapClassName="w-[100%]"
                      type="text"
                      name="FormInput One"
                      placeholder="Last Name"
                      shape="RoundedBorder6"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-start justify-start mt-[28px] rounded-radius6 w-[100%]">
                  <Text
                    className="not-italic text-gray_900 text-left w-[auto]"
                    variant="body1"
                  >
                    Email Address
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    type="email"
                    name="FormInput Two"
                    placeholder="Email Address"
                    shape="RoundedBorder6"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[13px] items-start justify-start mt-[29px] rounded-radius6 w-[100%]">
                  <Text
                    className="not-italic text-gray_900 text-left w-[auto]"
                    variant="body1"
                  >
                    Company Name
                  </Text>
                  <Input
                    className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                    wrapClassName="w-[100%]"
                    type="text"
                    name="FormInput Three"
                    placeholder="Company Name"
                    shape="RoundedBorder6"
                    size="3xl"
                  ></Input>
                </div>
                <div className="flex flex-col gap-[17px] items-start justify-start mt-[28px] w-[100%]">
                  <Text
                    className="not-italic text-gray_900 text-left w-[auto]"
                    variant="body1"
                  >
                    Phone Number
                  </Text>
                  <div className="bg-white_A700 border border-bluegray_200 border-solid flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[6px] rounded-radius6 w-[100%]">
                    <div className="bg-white_A700 flex sm:flex-1 flex-col items-center justify-start sm:ml-[0] ml-[10px] sm:mt-[0] my-[9px] pb-[10px] sm:w-[100%] w-[6%]">
                      <div className="bg-red_800 h-[10px] w-[100%]"></div>
                    </div>
                    <Img
                      src="images/img_arrowdown.svg"
                      className="h-[24px] sm:ml-[0] ml-[8px] w-[24px]"
                      alt="arrowdown"
                    />
                    <Line className="bg-gray_200 sm:flex-1 sm:h-[1px] h-[26px] sm:ml-[0] ml-[8px] sm:mt-[0] my-[6px] sm:w-[100%] w-[1px]" />
                    <Input
                      className="flex-1 font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_600 text-bluegray_600 text-left w-[100%]"
                      wrapClassName="ml-[7px] sm:ml-[0] sm:w-[100%] w-[69%]"
                      type="number"
                      name="Frame179"
                      placeholder="Phone Number"
                      size="lg"
                      variant="FillWhiteA700"
                    ></Input>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] items-start justify-start mt-[30px] rounded-radius6 w-[100%]">
                  <Text
                    className="not-italic text-gray_900 text-left w-[auto]"
                    variant="body1"
                  >
                    Message
                  </Text>
                  <TextArea
                    className="font-normal not-italic text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                    name="FormInput Four"
                    placeholder="Message"
                  ></TextArea>
                </div>
                <Button
                  className="cursor-pointer font-normal min-w-[457px] mt-[40px] text-[16px] text-center text-white_A700 w-[auto]"
                  shape="RoundedBorder6"
                  size="sm"
                  variant="FillTeal400"
                >
                  Send Message
                </Button>
              </div>
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
                The fastest and simple way to generate growing business
                solutions with our products
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
              src="images/img_pattern_3.svg"
              className="h-[281px] w-[46%]"
              alt="pattern"
            />
          </div>
          <Footer className="bg-gray_900 flex items-center justify-center mt-[120px] w-[100%]" />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
