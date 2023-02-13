import React from "react";

import { Img, Text, List, Input, Button } from "components";
import Header from "components/Header";
import Footer from "components/Footer";

const AboutPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-chivo items-center justify-start mx-[auto] w-[100%]">
        <div className="h-[1641px] md:h-[2392px] sm:h-[2542px] relative w-[100%]">
          <div className="absolute bg-gray_50 md:h-[493px] sm:h-[493px] h-[727px] inset-x-[0] mx-[auto] py-[72px] top-[0] w-[100%]">
            <div className="absolute bottom-[10%] h-[493px] md:h-[auto] sm:h-[auto] inset-x-[0] mx-[auto] w-[100%]">
              <Img
                src="images/img_pattern_white_A700.svg"
                className="absolute h-[493px] inset-[0] justify-center m-[auto] w-[100%]"
                alt="Pattern"
              />
            </div>
          </div>
          <Header className="absolute flex inset-x-[0] items-center justify-center mx-[auto] top-[0] w-[100%]" />
          <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-[auto] rounded-radius6 w-[78%]">
            <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] sm:w-[100%] w-[67%]">
              <Text
                className="leading-[58.00px] text-center text-gray_900 w-[100%]"
                as="h1"
                variant="h1"
              >
                Product analytics solution to help your business grow
              </Text>
              <Text
                className="leading-[28.00px] not-italic text-bluegray_600 text-center sm:w-[100%] w-[74%]"
                variant="body1"
              >
                Simple plans that grow with your business. No contracts. No
                setup fees.
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-[60px] rounded-radius6 md:w-[100%] sm:w-[100%] w-[94%]">
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[44px] sm:gap-[44px] items-center justify-between w-[100%]">
                <Img
                  src="images/img_rectangle214.png"
                  className="md:flex-1 sm:flex-1 h-[557px] sm:h-[auto] object-cover rounded-radius6 md:w-[100%] sm:w-[100%] w-[auto]"
                  alt="Rectangle214"
                />
                <div className="flex md:flex-1 sm:flex-1 flex-col gap-[42px] items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <Img
                    src="images/img_rectangle215.png"
                    className="h-[195px] sm:h-[auto] object-cover rounded-radius6 w-[100%]"
                    alt="Rectangle215"
                  />
                  <Img
                    src="images/img_rectangle216.png"
                    className="h-[320px] sm:h-[auto] object-cover rounded-radius6 w-[100%]"
                    alt="Rectangle216"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[50px] items-center justify-start mt-[50px] w-[100%]">
              <Text
                className="leading-[28.00px] not-italic text-bluegray_600 text-left"
                variant="body1"
              >
                Growit provides agencies and marketers with dashboards, combines
                data sources, and visualizes trends. With a focus on agencies,
                our goal is to help you grow.
                <br />
                <br />
                Founded in 2014 by Diane Davis and featured in the hit show
                Silicon Valley, Growit has expanded to over three hundred
                thousand users. In 2020, Growthlvvy joined the newly-launched,
                agency-focused, marketing technology suite — Traject. Made up of
                passionate team members from 22 cities and 11 countries, Traject
                represents 7 brands in the marketing technology space. We remain
                true to our roots, committed to delivering the easiest
                out-of-the-box dashboarding solution while also innovating,
                expanding integrations, and improving usability.
                <br />
                <br />
                Growit supports hundreds of thousands of users and businesses
                from solopreneurs to enterprises — with a focus on helping
                growing agencies track their efforts and deliver value.
                <br />
                <br />
                {`Strong customer relationships are more important than ever, but the scale and nature of online business means it's harder than ever to create personal connections with customers. That's why we created the world's first Conversational Relationship Platform — to help businesses build better customer relationships through personalized, messenger-based experiences.`}
              </Text>
              <div className="flex md:flex-col sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
                <div className="flex md:flex-1 sm:flex-1 flex-col gap-[18px] items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    4.2m
                  </Text>
                  <Text
                    className="font-normal leading-[26.00px] not-italic text-bluegray_600 text-left w-[100%]"
                    variant="body2"
                  >
                    Users tracked their data product per daily{" "}
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[40px] grid sm:grid-cols-1 grid-cols-2 w-[auto]"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-[12px] items-start justify-start sm:ml-[0] w-[100%]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      2014
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] not-italic text-bluegray_600 text-left w-[100%]"
                      variant="body2"
                    >
                      Our experience has been 7 years since 2014
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[12px] items-start justify-start sm:ml-[0] w-[100%]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      426
                    </Text>
                    <Text
                      className="font-normal leading-[26.00px] not-italic text-bluegray_600 text-left w-[100%]"
                      variant="body2"
                    >
                      Employees who work with us from different countries
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
        </div>
        <div className="flex flex-col gap-[50px] items-center justify-start max-w-[981px] mt-[100px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
          <Text
            className="text-gray_900 text-left w-[auto]"
            as="h2"
            variant="h2"
          >
            Meet our team family
          </Text>
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div className="gap-[105px] md:gap-[20px] sm:gap-[20px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center min-h-[auto] w-[100%]">
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start pb-[16px] px-[16px] w-[100%]">
                <div className="flex flex-col gap-[29px] items-center justify-start pb-[5px] md:w-[100%] sm:w-[100%] w-[86%]">
                  <Img
                    src="images/img_ellipse60.png"
                    className="h-[192px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[192px]"
                    alt="EllipseSixty"
                  />
                  <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] sm:w-[100%] w-[93%]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Diane Davis
                    </Text>
                    <Text
                      className="not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      CEO and CO Founder
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start pb-[16px] px-[16px] w-[100%]">
                <div className="flex flex-col gap-[31px] items-center justify-start pb-[5px] md:w-[100%] sm:w-[100%] w-[86%]">
                  <Img
                    src="images/img_ellipse60_192X192.png"
                    className="h-[192px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[192px]"
                    alt="EllipseSixty One"
                  />
                  <div className="flex flex-col gap-[12px] items-center justify-start md:w-[100%] sm:w-[100%] w-[82%]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Jonas Delonge
                    </Text>
                    <Text
                      className="not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Vice President
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start pb-[16px] px-[16px] w-[100%]">
                <div className="flex flex-col gap-[31px] items-center justify-start md:w-[100%] sm:w-[100%] w-[86%]">
                  <Img
                    src="images/img_ellipse60_1.png"
                    className="h-[192px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[192px]"
                    alt="EllipseSixty Two"
                  />
                  <div className="flex flex-col gap-[14px] items-center justify-start md:w-[100%] sm:w-[100%] w-[97%]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Samantha Ruby
                    </Text>
                    <Text
                      className="not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Director of Marketing
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start pb-[16px] px-[16px] w-[100%]">
                <div className="flex flex-col gap-[31px] items-center justify-start md:w-[100%] sm:w-[100%] w-[86%]">
                  <Img
                    src="images/img_ellipse60_2.png"
                    className="h-[192px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[192px]"
                    alt="EllipseSixty Three"
                  />
                  <div className="flex flex-col gap-[13px] items-center justify-start md:w-[100%] sm:w-[100%] w-[94%]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Anastasya
                    </Text>
                    <Text
                      className="not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Sr Creative Designer
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start pb-[16px] px-[16px] w-[100%]">
                <div className="flex flex-col gap-[31px] items-center justify-start md:w-[100%] sm:w-[100%] w-[86%]">
                  <Img
                    src="images/img_ellipse60_3.png"
                    className="h-[192px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[192px]"
                    alt="EllipseSixty Four"
                  />
                  <div className="flex flex-col gap-[14px] items-center justify-start md:w-[100%] sm:w-[100%] w-[97%]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Lizy Renata
                    </Text>
                    <Text
                      className="not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Sr Software Engineer
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start pb-[16px] px-[16px] w-[100%]">
                <div className="flex flex-col gap-[31px] items-center justify-start md:w-[100%] sm:w-[100%] w-[86%]">
                  <Img
                    src="images/img_ellipse60_4.png"
                    className="h-[192px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[192px]"
                    alt="EllipseSixty Five"
                  />
                  <div className="flex flex-col gap-[14px] items-center justify-start md:w-[100%] sm:w-[100%] w-[99%]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Ben Washington
                    </Text>
                    <Text
                      className="not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Sr Front End Engineer
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-start pb-[16px] px-[16px] w-[100%]">
                <div className="flex flex-col gap-[31px] items-center justify-start pb-[5px] md:w-[100%] sm:w-[100%] w-[86%]">
                  <Img
                    src="images/img_ellipse60_5.png"
                    className="h-[192px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[192px]"
                    alt="EllipseSixty Six"
                  />
                  <div className="flex flex-col gap-[12px] items-center justify-start md:w-[100%] sm:w-[100%] w-[85%]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Jimmy Neutron
                    </Text>
                    <Text
                      className="not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Account Executive
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col items-center justify-end p-[4px] w-[100%]">
                <div className="flex flex-col gap-[31px] items-center justify-start mt-[8px] pb-[5px] md:w-[100%] sm:w-[100%] w-[78%]">
                  <Img
                    src="images/img_ellipse60_6.png"
                    className="h-[192px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[192px]"
                    alt="EllipseSixty Seven"
                  />
                  <div className="flex flex-col gap-[12px] items-center justify-start md:w-[100%] sm:w-[100%] w-[82%]">
                    <Text
                      className="text-gray_900 text-left w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Antony Velich
                    </Text>
                    <Text
                      className="not-italic text-bluegray_600 text-left w-[auto]"
                      variant="body1"
                    >
                      Account Executive
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-white_A700 flex flex-1 flex-col gap-[31px] items-center justify-start p-[8px] w-[100%]">
                <Img
                  src="images/img_ellipse60_7.png"
                  className="h-[192px] md:h-[auto] sm:h-[auto] rounded-radius50 w-[192px]"
                  alt="EllipseSixty Eight"
                />
                <div className="flex flex-col gap-[14px] items-center justify-start md:w-[100%] sm:w-[100%] w-[96%]">
                  <Text
                    className="text-gray_900 text-left w-[auto]"
                    as="h6"
                    variant="h6"
                  >
                    Spencer Roberto
                  </Text>
                  <Text
                    className="not-italic text-bluegray_600 text-left w-[auto]"
                    variant="body1"
                  >
                    Product Support Specialist
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[48px] items-center justify-start max-w-[1112px] mt-[84px] mx-[auto] md:px-[20px] sm:px-[20px] w-[100%]">
          <Text
            className="text-gray_900 text-left w-[auto]"
            as="h2"
            variant="h2"
          >
            We've helped their SaaS applications
          </Text>
          <div className="flex md:flex-col sm:flex-col flex-row gap-[40px] items-center justify-center md:w-[100%] sm:w-[100%] w-[auto]">
            <Img
              src="images/img_microsoft1_teal_202.svg"
              className="h-[30px] w-[13%]"
              alt="MicrosoftOne"
            />
            <Img
              src="images/img_vector_teal_202.svg"
              className="h-[30px] w-[11%]"
              alt="Vector"
            />
            <Img
              src="images/img_trash_36X69.svg"
              className="h-[36px] w-[7%]"
              alt="trash"
            />
            <Img
              src="images/img_shopify_teal_202.svg"
              className="h-[35px] w-[12%]"
              alt="Shopify"
            />
            <Img
              src="images/img_group_teal_202.svg"
              className="h-[33px] w-[13%]"
              alt="Group"
            />
            <Img
              src="images/img_intel_30X73.svg"
              className="h-[30px] w-[7%]"
              alt="Intel"
            />
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
            src="images/img_pattern_1.svg"
            className="h-[281px] w-[46%]"
            alt="pattern One"
          />
        </div>
        <Footer className="bg-gray_900 flex items-center justify-center mt-[120px] w-[100%]" />
      </div>
    </>
  );
};

export default AboutPage;
