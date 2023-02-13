import React from "react";

import Header from "components/Header";
import { Text, Input, Button, Img, List } from "components";
import Footer from "components/Footer";

const ResourceCenterPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-chivo md:gap-[40px] sm:gap-[40px] gap-[70px] items-center justify-start mx-[auto] w-[100%]">
        <Header className="flex items-center justify-center w-[100%]" />
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[96px] items-center justify-start max-w-[1082px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="flex md:flex-1 sm:flex-1 flex-col gap-[32px] items-start justify-start rounded-radius6 md:w-[100%] sm:w-[100%] w-[50%]">
              <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                <Text
                  className="leading-[58.00px] text-gray_900 text-left w-[100%]"
                  as="h1"
                  variant="h1"
                >
                  With our resources help your business grow rapidly
                </Text>
                <Text
                  className="leading-[28.00px] not-italic text-bluegray_600 text-left sm:w-[100%] w-[90%]"
                  variant="body1"
                >
                  Our books, guides, and others have helped thousands of your
                  peers get better at their business
                </Text>
              </div>
              <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius6 md:w-[100%] sm:w-[100%] w-[90%]">
                <div className="bg-gray_50 border border-bluegray_200 border-solid flex sm:flex-col flex-row gap-[11px] items-end justify-end p-[8px] rounded-radius6 w-[100%]">
                  <Input
                    className="flex-1 font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                    wrapClassName="mb-[4px] mt-[7px] sm:mt-[0] sm:w-[100%] w-[63%]"
                    name="Frame"
                    placeholder="Search resources"
                    size="xl"
                    variant="FillGray50"
                  ></Input>
                  <Button
                    className="flex items-center justify-center text-center"
                    leftIcon={
                      <Img
                        src="images/img_search.svg"
                        className="mr-[10px] text-center"
                        alt="search"
                      />
                    }
                    shape="RoundedBorder6"
                    size="md"
                    variant="FillTeal400"
                  >
                    <div className="bg-transparent cursor-pointer font-normal text-[16px] text-left text-white_A700">
                      Search
                    </div>
                  </Button>
                </div>
              </div>
            </div>
            <Img
              src="images/img_illustration_355X450.svg"
              className="h-[355px] w-[42%]"
              alt="illustration"
            />
          </div>
          <List
            className="sm:flex-col flex-row gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center max-w-[1112px] mt-[100px] mx-[auto] md:px-[20px] sm:px-[20px] rounded-radius6 w-[100%]"
            orientation="horizontal"
          >
            <div className="bg-deep_purple_300 flex flex-1 flex-col items-center justify-start p-[24px] sm:px-[20px] rounded-radius6 w-[100%]">
              <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[72px] items-start justify-start mb-[3px] pt-[5px] w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Guides{" "}
                  </Text>
                  <Text
                    className="font-normal leading-[26.00px] not-italic text-left text-white_A700_a2 w-[100%]"
                    variant="body2"
                  >
                    Evertything you need to know our platform
                  </Text>
                </div>
                <a
                  href={"javascript:"}
                  className="font-normal text-[18px] text-left text-white_A700 underline w-[auto]"
                  rel="noreferrer"
                >
                  View All
                </a>
              </div>
            </div>
            <div className="bg-green_400 flex flex-1 flex-col items-center justify-start p-[24px] sm:px-[20px] rounded-radius6 w-[100%]">
              <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[72px] items-start justify-start mb-[3px] pt-[7px] w-[100%]">
                <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Blog
                  </Text>
                  <Text
                    className="font-normal leading-[26.00px] not-italic text-left text-white_A700_a2 w-[100%]"
                    variant="body2"
                  >
                    Our best tips for growing your business
                  </Text>
                </div>
                <a
                  href={"javascript:"}
                  className="font-normal text-[18px] text-left text-white_A700 underline w-[auto]"
                  rel="noreferrer"
                >
                  View All
                </a>
              </div>
            </div>
            <div className="bg-lime_700 flex flex-1 flex-col items-center justify-start p-[24px] sm:px-[20px] rounded-radius6 w-[100%]">
              <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[72px] items-start justify-start mb-[3px] pt-[5px] w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Webinars
                  </Text>
                  <Text
                    className="font-normal leading-[26.00px] not-italic text-left text-white_A700_a2 w-[100%]"
                    variant="body2"
                  >
                    Your all-access pass to exclusive content
                  </Text>
                </div>
                <a
                  href={"javascript:"}
                  className="font-normal text-[18px] text-left text-white_A700 underline w-[auto]"
                  rel="noreferrer"
                >
                  View All
                </a>
              </div>
            </div>
            <div className="bg-red_300 flex flex-1 flex-col items-center justify-start p-[24px] sm:px-[20px] rounded-radius6 w-[100%]">
              <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[72px] items-start justify-start mb-[3px] pt-[5px] w-[100%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Customer Stories
                  </Text>
                  <Text
                    className="font-normal leading-[26.00px] not-italic text-left text-white_A700_a2 w-[100%]"
                    variant="body2"
                  >
                    See what Growly success looks like
                  </Text>
                </div>
                <a
                  href={"javascript:"}
                  className="font-normal text-[18px] text-left text-white_A700 underline w-[auto]"
                  rel="noreferrer"
                >
                  View All
                </a>
              </div>
            </div>
          </List>
          <div className="flex flex-col gap-[48px] items-center justify-start max-w-[1112px] mt-[100px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
              <Text
                className="text-gray_900 text-left w-[auto]"
                as="h2"
                variant="h2"
              >
                Guides and Resources
              </Text>
              <a
                href={"javascript:"}
                className="font-normal text-[18px] text-gray_900 text-left underline w-[auto]"
                rel="noreferrer"
              >
                View All
              </a>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[32px] items-center justify-start pb-[3px] rounded-radius6 md:w-[100%] sm:w-[100%] w-[auto]">
                <Img
                  src="images/img_rectangle217.png"
                  className="h-[320px] sm:h-[auto] object-cover rounded-radius6 w-[100%]"
                  alt="Rectangle217"
                />
                <div className="flex flex-col gap-[24px] items-start justify-start pt-[4px] w-[100%]">
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text
                      className="not-italic text-left text-teal_400 w-[auto]"
                      variant="body1"
                    >
                      Guides
                    </Text>
                    <Text
                      className="leading-[40.00px] mt-[17px] text-gray_900 text-left w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      Getting started with Guide for your help center: Setting
                      up
                    </Text>
                    <Text
                      className="leading-[28.00px] mt-[16px] not-italic text-bluegray_600 text-left w-[100%]"
                      variant="body1"
                    >
                      Guide enables you to provide end users with a complete
                      self-service support option and empowers agents to better
                      help customer
                    </Text>
                  </div>
                  <a
                    href={"javascript:"}
                    className="font-normal text-[18px] text-gray_900 text-left underline w-[auto]"
                    rel="noreferrer"
                  >
                    Read Now
                  </a>
                </div>
              </div>
              <List
                className="flex-col gap-[40px] grid w-[auto]"
                orientation="vertical"
              >
                <div className="flex sm:flex-col flex-row gap-[32px] items-start justify-between my-[0] w-[100%]">
                  <Img
                    src="images/img_rectangle218.png"
                    className="sm:flex-1 h-[180px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[auto]"
                    alt="Rectangle218"
                  />
                  <div className="flex sm:flex-1 flex-col gap-[24px] items-start justify-start pt-[4px] sm:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                      <Text
                        className="not-italic text-left text-teal_400 w-[auto]"
                        variant="body1"
                      >
                        Guides
                      </Text>
                      <Text
                        className="leading-[32.00px] text-gray_900 text-left w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        Advance your product analytics strategy
                      </Text>
                    </div>
                    <a
                      href={"javascript:"}
                      className="font-normal text-[18px] text-gray_900 text-left underline w-[auto]"
                      rel="noreferrer"
                    >
                      Read Now
                    </a>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[32px] items-start justify-between my-[0] w-[100%]">
                  <Img
                    src="images/img_rectangle219.png"
                    className="sm:flex-1 h-[180px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[auto]"
                    alt="Rectangle219"
                  />
                  <div className="flex sm:flex-1 flex-col gap-[24px] items-start justify-start pt-[4px] sm:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                      <Text
                        className="not-italic text-left text-teal_400 w-[auto]"
                        variant="body1"
                      >
                        Guides
                      </Text>
                      <Text
                        className="leading-[32.00px] text-gray_900 text-left w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        A tour of Growit automations
                      </Text>
                    </div>
                    <a
                      href={"javascript:"}
                      className="font-normal text-[18px] text-gray_900 text-left underline w-[auto]"
                      rel="noreferrer"
                    >
                      Read Now
                    </a>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row gap-[32px] items-start justify-between my-[0] w-[100%]">
                  <Img
                    src="images/img_rectangle220.png"
                    className="sm:flex-1 h-[180px] md:h-[auto] sm:h-[auto] object-cover sm:w-[100%] w-[auto]"
                    alt="Rectangle220"
                  />
                  <div className="flex sm:flex-1 flex-col gap-[24px] items-start justify-start pt-[4px] sm:w-[100%] w-[auto]">
                    <div className="flex flex-col gap-[9px] items-start justify-start w-[100%]">
                      <Text
                        className="not-italic text-left text-teal_400 w-[auto]"
                        variant="body1"
                      >
                        Guides
                      </Text>
                      <Text
                        className="leading-[32.00px] text-gray_900 text-left w-[100%]"
                        as="h6"
                        variant="h6"
                      >
                        How to get support about Growly with us
                      </Text>
                    </div>
                    <a
                      href={"javascript:"}
                      className="font-normal text-[18px] text-gray_900 text-left underline w-[auto]"
                      rel="noreferrer"
                    >
                      Read Now
                    </a>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <List
            className="flex-col gap-[100px] md:gap-[40px] sm:gap-[40px] grid items-center max-w-[1112px] mt-[100px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]"
            orientation="vertical"
          >
            <div className="flex flex-1 flex-col gap-[48px] items-center justify-start rounded-radius6 w-[100%]">
              <div className="flex flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                <Text
                  className="text-gray_900 text-left w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Latest Blog
                </Text>
                <a
                  href={"javascript:"}
                  className="font-normal text-[18px] text-gray_900 text-left underline w-[auto]"
                  rel="noreferrer"
                >
                  View All
                </a>
              </div>
              <div className="gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between rounded-radius6 w-[100%]">
                <div className="flex flex-1 flex-col gap-[38px] items-center justify-start pb-[3px] rounded-radius6 w-[100%]">
                  <Img
                    src="images/img_rectangle221.png"
                    className="h-[220px] sm:h-[auto] object-cover rounded-radius6 w-[100%]"
                    alt="Rectangle221"
                  />
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text
                      className="not-italic text-left text-teal_400 w-[auto]"
                      variant="body1"
                    >
                      Blog
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-[8px] text-gray_900 text-left w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      The Ultimate Guide To Customer Journey Analytics
                    </Text>
                    <a
                      href={"javascript:"}
                      className="font-normal mt-[24px] text-[18px] text-gray_900 text-left underline w-[auto]"
                      rel="noreferrer"
                    >
                      Read Now
                    </a>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[38px] items-center justify-start pb-[3px] rounded-radius6 w-[100%]">
                  <Img
                    src="images/img_rectangle222.png"
                    className="h-[220px] sm:h-[auto] object-cover rounded-radius6 w-[100%]"
                    alt="Rectangle222"
                  />
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text
                      className="not-italic text-left text-teal_400 w-[auto]"
                      variant="body1"
                    >
                      Blog
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-[8px] text-gray_900 text-left w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      6 Customer Metrics That Will Help You Grow Your Business
                    </Text>
                    <a
                      href={"javascript:"}
                      className="font-normal mt-[24px] text-[18px] text-gray_900 text-left underline w-[auto]"
                      rel="noreferrer"
                    >
                      Read Now
                    </a>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[38px] items-center justify-start pb-[3px] rounded-radius6 w-[100%]">
                  <Img
                    src="images/img_rectangle223.png"
                    className="h-[220px] sm:h-[auto] object-cover rounded-radius6 w-[100%]"
                    alt="Rectangle223"
                  />
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text
                      className="not-italic text-left text-teal_400 w-[auto]"
                      variant="body1"
                    >
                      Blog
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-[8px] text-gray_900 text-left w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      The difference between product analytics and marketing
                    </Text>
                    <a
                      href={"javascript:"}
                      className="font-normal mt-[24px] text-[18px] text-gray_900 text-left underline w-[auto]"
                      rel="noreferrer"
                    >
                      Read Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-[48px] items-center justify-start rounded-radius6 w-[100%]">
              <div className="flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                <Text
                  className="text-gray_900 text-left w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Customer Story
                </Text>
                <a
                  href={"javascript:"}
                  className="font-normal text-[18px] text-gray_900 text-left underline w-[auto]"
                  rel="noreferrer"
                >
                  View All
                </a>
              </div>
              <div className="gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 items-center justify-between rounded-radius6 w-[100%]">
                <div className="flex flex-1 flex-col gap-[38px] items-center justify-start pb-[3px] rounded-radius6 w-[100%]">
                  <Img
                    src="images/img_rectangle221_220X344.png"
                    className="h-[220px] sm:h-[auto] object-cover rounded-radius6 w-[100%]"
                    alt="Rectangle221 One"
                  />
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text
                      className="not-italic text-left text-teal_400 w-[auto]"
                      variant="body1"
                    >
                      Customer Story
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-[8px] text-gray_900 text-left w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      Watching movies provides the best user experience
                    </Text>
                    <a
                      href={"javascript:"}
                      className="font-normal mt-[24px] text-[18px] text-gray_900 text-left underline w-[auto]"
                      rel="noreferrer"
                    >
                      Read Now
                    </a>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[38px] items-center justify-start pb-[3px] rounded-radius6 w-[100%]">
                  <Img
                    src="images/img_rectangle222_220X344.png"
                    className="h-[220px] sm:h-[auto] object-cover rounded-radius6 w-[100%]"
                    alt="Rectangle222 One"
                  />
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text
                      className="not-italic text-left text-teal_400 w-[auto]"
                      variant="body1"
                    >
                      Customer Story
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-[8px] text-gray_900 text-left w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      Providing reliable applications for productivity
                    </Text>
                    <a
                      href={"javascript:"}
                      className="font-normal mt-[24px] text-[18px] text-gray_900 text-left underline w-[auto]"
                      rel="noreferrer"
                    >
                      Read Now
                    </a>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-[38px] items-center justify-start pb-[3px] rounded-radius6 w-[100%]">
                  <Img
                    src="images/img_rectangle223_220X344.png"
                    className="h-[220px] sm:h-[auto] object-cover rounded-radius6 w-[100%]"
                    alt="Rectangle223 One"
                  />
                  <div className="flex flex-col items-start justify-start w-[100%]">
                    <Text
                      className="not-italic text-left text-teal_400 w-[auto]"
                      variant="body1"
                    >
                      Customer Story
                    </Text>
                    <Text
                      className="leading-[32.00px] mt-[8px] text-gray_900 text-left w-[100%]"
                      as="h6"
                      variant="h6"
                    >
                      Build an online business—no matter what business you're in
                    </Text>
                    <a
                      href={"javascript:"}
                      className="font-normal mt-[24px] text-[18px] text-gray_900 text-left underline w-[auto]"
                      rel="noreferrer"
                    >
                      Read Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </List>
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
              src="images/img_pattern_2.svg"
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

export default ResourceCenterPage;
