import React from "react";

import Header from "components/Header";
import { Text, Input, Button, Img, List } from "components";
import Footer from "components/Footer";

const HomepagePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-chivo md:gap-[40px] sm:gap-[40px] gap-[70px] items-center justify-start mx-[auto] w-[100%]">
        <Header className="flex items-center justify-center w-[100%]" />
        <div className="flex flex-col items-center justify-start w-[100%]">
          <div className="flex md:flex-col sm:flex-col flex-row gap-[20px] items-start justify-start max-w-[1112px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start rounded-radius6 md:w-[100%] sm:w-[100%] w-[49%]">
              <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                <Text
                  className="leading-[58.00px] text-gray_900 text-left w-[100%]"
                  as="h1"
                  variant="h1"
                >
                  We help any business to get analytics and sales marketing
                </Text>
                <Text
                  className="leading-[28.00px] not-italic text-bluegray_600 text-left sm:w-[100%] w-[83%]"
                  variant="body1"
                >
                  The fastest and simple way to generate growing business
                  solutions with our products
                </Text>
              </div>
              <div className="flex flex-col gap-[17px] items-start justify-start mt-[32px] rounded-radius6 md:w-[100%] sm:w-[100%] w-[90%]">
                <div className="bg-gray_50 border border-solid border-teal_400 flex sm:flex-col flex-row gap-[22px] items-center justify-end p-[6px] rounded-radius6 w-[100%]">
                  <Input
                    className="flex-1 font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                    wrapClassName="my-[9px] sm:mt-[0] sm:w-[100%] w-[60%]"
                    type="email"
                    name="box"
                    placeholder="Your business email"
                    size="md"
                    variant="FillGray50"
                  ></Input>
                  <Button
                    className="cursor-pointer font-normal min-w-[150px] sm:mt-[0] my-[2px] text-[16px] text-center text-white_A700 w-[auto]"
                    shape="RoundedBorder6"
                    size="sm"
                    variant="FillTeal400"
                  >
                    Get Started
                  </Button>
                </div>
                <Text
                  className="font-normal italic text-bluegray_600 text-left w-[auto]"
                  variant="body2"
                >
                  *we will not disseminate your email and so you avoid spam
                </Text>
              </div>
              <div className="flex flex-row gap-[60px] items-center justify-start mt-[48px] md:w-[100%] sm:w-[100%] w-[72%]">
                <div className="flex flex-col gap-[15px] items-start justify-start w-[44%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    350+
                  </Text>
                  <Text
                    className="leading-[28.00px] not-italic text-bluegray_600 text-left w-[100%]"
                    variant="body1"
                  >
                    Over 500 business powered with us
                  </Text>
                </div>
                <div className="flex flex-col gap-[15px] items-start justify-start w-[44%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    4.8
                  </Text>
                  <Text
                    className="leading-[28.00px] not-italic text-bluegray_600 text-left w-[100%]"
                    variant="body1"
                  >
                    Rating on google play and app store
                  </Text>
                </div>
              </div>
            </div>
            <Img
              src="images/img_group450.png"
              className="md:flex-1 sm:flex-1 h-[434px] sm:h-[auto] md:mt-[0] sm:mt-[0] mt-[16px] object-cover md:w-[100%] sm:w-[100%] w-[50%]"
              alt="group450"
            />
          </div>
          <div className="flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start max-w-[1112px] mt-[96px] mx-[auto] p-[2px] md:px-[20px] sm:px-[20px] w-[100%]">
            <Img
              src="images/img_microsoft1.svg"
              className="h-[30px] sm:ml-[0] ml-[4px] w-[13%]"
              alt="MicrosoftOne"
            />
            <Img
              src="images/img_vector.svg"
              className="h-[30px] sm:ml-[0] ml-[65px] w-[11%]"
              alt="Vector"
            />
            <Img
              src="images/img_trash.svg"
              className="h-[36px] sm:ml-[0] ml-[101px] w-[7%]"
              alt="trash"
            />
            <Img
              src="images/img_shopify.svg"
              className="h-[35px] sm:ml-[0] ml-[96px] w-[12%]"
              alt="Shopify"
            />
            <Img
              src="images/img_group.svg"
              className="h-[33px] sm:ml-[0] ml-[63px] w-[13%]"
              alt="Group"
            />
            <Img
              src="images/img_intel.svg"
              className="h-[30px] sm:ml-[0] ml-[88px] w-[7%]"
              alt="Intel"
            />
          </div>
          <div className="flex flex-col gap-[48px] items-center justify-start max-w-[1112px] mt-[100px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <Text
              className="leading-[54.00px] text-center text-gray_900 sm:w-[100%] w-[49%]"
              as="h2"
              variant="h2"
            >
              How our platform process easy to use?
            </Text>
            <div className="flex md:flex-col sm:flex-col flex-row gap-[17px] items-start justify-between w-[100%]">
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[24px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Img
                  src="images/img_illustrationlo.svg"
                  className="h-[180px] w-[100%]"
                  alt="illustrationlo"
                />
                <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                  <Text
                    className="leading-[32.00px] text-center text-gray_900 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Login or sign up to be able use our platform
                  </Text>
                  <Text
                    className="leading-[28.00px] not-italic text-bluegray_600 text-center w-[100%]"
                    variant="body1"
                  >
                    You must log in first to be able to use our platform to get
                    your product analytics
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_directionline.svg"
                className="h-[20px] md:mt-[0] sm:mt-[0] mt-[111px] w-[auto]"
                alt="DirectionLine"
              />
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[24px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Img
                  src="images/img_illustrationco.png"
                  className="h-[180px] md:h-[auto] sm:h-[auto] object-cover w-[100%]"
                  alt="illustrationco"
                />
                <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                  <Text
                    className="leading-[32.00px] text-center text-gray_900 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Connect your website with just a few click
                  </Text>
                  <Text
                    className="leading-[28.00px] not-italic text-bluegray_600 text-center w-[100%]"
                    variant="body1"
                  >
                    Select the application you wanted to be able to connect with
                    just a few clicks
                  </Text>
                </div>
              </div>
              <Img
                src="images/img_directionline.svg"
                className="h-[20px] md:mt-[0] sm:mt-[0] mt-[114px] w-[auto]"
                alt="DirectionLine One"
              />
              <div className="flex md:flex-1 sm:flex-1 flex-col gap-[24px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <Img
                  src="images/img_illustrationge.svg"
                  className="h-[180px] w-[100%]"
                  alt="illustrationge"
                />
                <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
                  <Text
                    className="leading-[32.00px] text-center text-gray_900 w-[100%]"
                    as="h6"
                    variant="h6"
                  >
                    Take some sales data that you want
                  </Text>
                  <Text
                    className="leading-[28.00px] not-italic text-bluegray_600 text-center w-[100%]"
                    variant="body1"
                  >
                    You already have sales data of your product with some
                    variants you want
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-teal_401 flex flex-row items-center justify-start mt-[100px] p-[40px] sm:px-[20px] w-[100%]">
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[96px] items-center justify-start ml-[124px] mt-[25px] md:px-[20px] w-[82%]">
              <Img
                src="images/img_illustration_545X536.svg"
                className="h-[545px] w-[49%]"
                alt="illustration"
              />
              <div className="flex flex-col gap-[48px] items-center justify-start md:w-[100%] sm:w-[100%] w-[44%]">
                <div className="flex flex-col gap-[16px] items-start justify-start w-[100%]">
                  <Text
                    className="leading-[54.00px] text-left text-white_A700 w-[100%]"
                    as="h2"
                    variant="h2"
                  >
                    The reasons to prefer choosing our platform
                  </Text>
                  <Text
                    className="leading-[28.00px] not-italic text-left text-white_A700 sm:w-[100%] w-[83%]"
                    variant="body1"
                  >
                    Seamless integration of more than 20+ apps that can help
                    analytics your product
                  </Text>
                </div>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="sm:gap-[20px] gap-[40px] grid sm:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-[100%]">
                    <div className="flex flex-1 flex-col gap-[21px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_volume.svg"
                        className="h-[40px] w-[40px]"
                        alt="volume"
                      />
                      <div className="flex flex-col gap-[12px] items-start justify-start w-[100%]">
                        <Text
                          className="text-left text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Real time data
                        </Text>
                        <Text
                          className="font-normal leading-[26.00px] not-italic text-left text-white_A700 w-[100%]"
                          variant="body2"
                        >
                          Get the data you need to make smarter decisions.
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[23px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_offer.svg"
                        className="h-[40px] w-[40px]"
                        alt="offer"
                      />
                      <div className="flex flex-col gap-[8px] items-center justify-start w-[100%]">
                        <Text
                          className="text-left text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Fast and Easy to use
                        </Text>
                        <Text
                          className="font-normal leading-[26.00px] not-italic text-left text-white_A700 w-[100%]"
                          variant="body2"
                        >
                          Easily to convert API with just a few clicks
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[23px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_lock.svg"
                        className="h-[40px] w-[40px]"
                        alt="lock"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <Text
                          className="text-left text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Safely Security
                        </Text>
                        <Text
                          className="font-normal leading-[26.00px] not-italic text-left text-white_A700 w-[100%]"
                          variant="body2"
                        >
                          All customer data is encrypted
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col gap-[22px] items-start justify-start w-[100%]">
                      <Img
                        src="images/img_grid.svg"
                        className="h-[40px] w-[40px]"
                        alt="grid"
                      />
                      <div className="flex flex-col gap-[8px] items-start justify-start w-[100%]">
                        <Text
                          className="text-left text-white_A700 w-[auto]"
                          as="h6"
                          variant="h6"
                        >
                          Powerfull App
                        </Text>
                        <Text
                          className="font-normal leading-[26.00px] not-italic text-left text-white_A700 w-[100%]"
                          variant="body2"
                        >
                          Provide simple and minimalist dashboard
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] gap-[96px] items-center justify-start max-w-[1112px] mt-[100px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="flex md:flex-1 sm:flex-1 flex-col gap-[48px] items-center justify-start md:w-[100%] sm:w-[100%] w-[44%]">
              <Text
                className="leading-[54.00px] text-gray_900 text-left w-[100%]"
                as="h2"
                variant="h2"
              >
                We provide features for your product
              </Text>
              <div className="flex flex-col gap-[40px] justify-start w-[100%]">
                <div className="bg-white_A700 flex flex-col items-center justify-start p-[24px] sm:px-[20px] rounded-radius12 shadow-bs1 w-[100%]">
                  <div className="flex flex-col justify-start md:w-[100%] sm:w-[100%] w-[97%]">
                    <div className="flex flex-row gap-[16px] items-center justify-start mr-[52px] md:w-[100%] sm:w-[100%] w-[88%]">
                      <Img
                        src="images/img_map.svg"
                        className="h-[40px] w-[40px]"
                        alt="map"
                      />
                      <Text
                        className="text-gray_900 text-left w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Integrated with Social Media
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[18px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[56px] md:w-[100%] sm:w-[100%] w-[88%]">
                      <Text
                        className="font-normal leading-[26.00px] not-italic text-bluegray_600 text-left w-[100%]"
                        variant="body2"
                      >
                        Seamless integration of more than 20+ apps that can help
                        analytics
                      </Text>
                      <a
                        href={"javascript:"}
                        className="font-normal text-[16px] text-left text-teal_400 underline w-[auto]"
                        rel="noreferrer"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[40px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[32px] md:w-[100%] sm:w-[100%] w-[61%]">
                  <div className="flex flex-row gap-[16px] items-end justify-start w-[100%]">
                    <Img
                      src="images/img_icon.svg"
                      className="h-[40px] w-[40px]"
                      alt="Icon"
                    />
                    <Text
                      className="mt-[15px] text-bluegray_200 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Always in syncronized
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[16px] items-end justify-start md:w-[100%] sm:w-[100%] w-[79%]">
                    <Img
                      src="images/img_iconreport.svg"
                      className="h-[40px] w-[40px]"
                      alt="IconReport"
                    />
                    <Text
                      className="mt-[14px] text-bluegray_200 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Powerful report
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="bg-cover bg-no-repeat flex md:flex-1 sm:flex-1 flex-col items-start justify-start sm:pr-[20px] pr-[215px] md:pr-[40px] py-[215px] md:w-[100%] sm:w-[100%] w-[49%]"
              style={{ backgroundImage: "url('images/img_group858.png')" }}
            >
              <Button
                className="flex h-[70px] items-center justify-center mb-[48px] w-[70px]"
                shape="icbRoundedBorder6"
                size="smIcn"
                variant="icbOutlineIndigo9000c"
              >
                <Img
                  src="images/img_linkedin.svg"
                  className="h-[26px]"
                  alt="linkedin"
                />
              </Button>
            </div>
          </div>
          <div className="flex flex-col gap-[48px] items-center justify-start max-w-[1112px] mt-[100px] mx-[auto] pt-[4px] md:px-[20px] sm:px-[20px] w-[100%]">
            <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] sm:w-[100%] w-[54%]">
              <Text
                className="not-italic text-left text-yellow_700 w-[auto]"
                variant="body1"
              >
                Global Scale
              </Text>
              <Text
                className="leading-[54.00px] text-center text-gray_900 w-[100%]"
                as="h2"
                variant="h2"
              >
                Trusted by company around the world
              </Text>
            </div>
            <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[64px] items-center justify-start w-[100%]">
              <Img
                src="images/img_illustrationma.svg"
                className="h-[370px] w-[100%]"
                alt="IllustrationMa"
              />
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                <List
                  className="sm:flex-col flex-row gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[auto]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-[12px] items-start justify-start sm:ml-[0] w-[100%]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      350+
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] not-italic text-bluegray_600 text-left w-[100%]"
                      variant="body2"
                    >
                      Over 500k business powered with us
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[12px] items-start justify-start sm:ml-[0] w-[100%]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      750k
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] not-italic text-bluegray_600 text-left w-[100%]"
                      variant="body2"
                    >
                      Users used our platform in around the world
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[12px] items-start justify-start sm:ml-[0] w-[100%]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      4.8{" "}
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] not-italic text-bluegray_600 text-left w-[100%]"
                      variant="body2"
                    >
                      Rating on google play and app store
                    </Text>
                  </div>
                </List>
                <div className="flex md:flex-1 sm:flex-1 flex-col gap-[18px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    24+
                  </Text>
                  <Text
                    className="font-normal leading-[26.00px] not-italic text-bluegray_600 text-left w-[100%]"
                    variant="body2"
                  >
                    More than 30 countries trust our platform
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[48px] items-center justify-start max-w-[1112px] mt-[100px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
            <Text
              className="leading-[54.00px] text-center text-gray_900 sm:w-[100%] w-[49%]"
              as="h2"
              variant="h2"
            >
              See what our customers have to say about us
            </Text>
            <List
              className="sm:flex-col flex-row gap-[40px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-[100%]"
              orientation="horizontal"
            >
              <div className="bg-gray_50 flex flex-1 flex-col items-center justify-start p-[32px] sm:px-[20px] rounded-radius6 w-[100%]">
                <div className="flex flex-col items-start justify-start my-[9px] w-[100%]">
                  <Img
                    src="images/img_vector_deep_orange_A400.svg"
                    className="h-[27px] w-[37%]"
                    alt="Vector One"
                  />
                  <Text
                    className="font-normal italic leading-[150.00%] mt-[32px] text-bluegray_600 text-left w-[100%]"
                    variant="body2"
                  >
                    “I’ve used Growit at many companies before—it’s the go-to
                    solution when you need user and product analytics.”
                  </Text>
                  <div className="flex flex-row gap-[16px] items-start justify-start mt-[33px] md:w-[100%] sm:w-[100%] w-[72%]">
                    <Img
                      src="images/img_ellipse1905.png"
                      className="h-[50px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[50px]"
                      alt="Ellipse1905"
                    />
                    <div className="flex flex-col gap-[5px] items-start justify-start w-[69%]">
                      <Text
                        className="text-gray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Try Washington
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_701 text-left w-[auto]"
                        variant="body2"
                      >
                        CEO of Netflix
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_50 flex flex-1 flex-col items-center justify-start p-[32px] sm:px-[20px] rounded-radius6 w-[100%]">
                <div className="flex flex-col items-start justify-start my-[8px] w-[100%]">
                  <Img
                    src="images/img_microsoft.svg"
                    className="h-[27px] w-[45%]"
                    alt="Microsoft"
                  />
                  <Text
                    className="font-normal italic leading-[150.00%] mt-[32px] text-bluegray_600 text-left w-[100%]"
                    variant="body2"
                  >
                    “Uses Growit as the source of truth for all its product
                    data, and to determine where the team should focus its
                    time.”
                  </Text>
                  <div className="flex flex-row gap-[16px] items-start justify-start mt-[33px] pb-[3px] md:w-[100%] sm:w-[100%] w-[78%]">
                    <Img
                      src="images/img_ellipse1906.png"
                      className="h-[50px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[50px]"
                      alt="Ellipse1906"
                    />
                    <div className="flex flex-col items-start justify-start mt-[4px] w-[71%]">
                      <Text
                        className="text-gray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Cyhntya Rebecca
                      </Text>
                      <Text
                        className="font-normal mt-[4px] not-italic text-bluegray_701 text-left w-[auto]"
                        variant="body2"
                      >
                        CEO of Microsoft
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray_50 flex flex-1 flex-col items-center justify-start p-[32px] sm:px-[20px] rounded-radius6 w-[100%]">
                <div className="flex flex-col items-start justify-start my-[9px] w-[100%]">
                  <Img
                    src="images/img_shopify_30X106.svg"
                    className="h-[30px] w-[38%]"
                    alt="Shopify One"
                  />
                  <Text
                    className="font-normal italic leading-[150.00%] mt-[31px] text-bluegray_600 text-left w-[100%]"
                    variant="body2"
                  >
                    “Uses Growit to get deeper user insights that could be
                    easily shared among teams throughout the world, improving
                    the company investment.”{" "}
                  </Text>
                  <div className="flex flex-row gap-[16px] items-center justify-start mt-[33px] md:w-[100%] sm:w-[100%] w-[77%]">
                    <Img
                      src="images/img_ellipse1907.png"
                      className="h-[50px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[50px]"
                      alt="Ellipse1907"
                    />
                    <div className="flex flex-col gap-[6px] items-start justify-start w-[71%]">
                      <Text
                        className="text-gray_900 text-left w-[auto]"
                        variant="body1"
                      >
                        Derry Alasca
                      </Text>
                      <Text
                        className="font-normal not-italic text-bluegray_701 text-left w-[auto]"
                        variant="body2"
                      >
                        Manager of Shopify
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </List>
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
                    name="box One"
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
              src="images/img_pattern.svg"
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

export default HomepagePage;
