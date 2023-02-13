import React from "react";

import {
  Img,
  Text,
  Input,
  SelectBox,
  Line,
  CheckBox,
  Button,
} from "components";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_200 flex flex-col font-chivo items-start justify-start mx-[auto] p-[80px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row gap-[48px] items-start justify-start md:ml-[0] sm:ml-[0] ml-[51px] pl-[48px] md:px-[20px] sm:px-[20px] rounded-bl-[6px] rounded-br-[0] rounded-tl-[6px] rounded-tr-[0] shadow-bs1 md:w-[100%] sm:w-[100%] w-[87%]">
          <div className="flex flex-col items-start justify-start md:mt-[0] sm:mt-[0] mt-[64px] md:w-[100%] sm:w-[100%] w-[43%]">
            <Img
              src="images/img_uilchartgrowt.svg"
              className="h-[32px] w-[26%]"
              alt="uilchartgrowt"
            />
            <div className="flex flex-col items-start justify-start mt-[56px] w-[100%]">
              <Text
                className="text-black_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                Create your Growly Account
              </Text>
              <div className="flex flex-col items-center justify-start mt-[32px] w-[100%]">
                <div className="flex sm:flex-col flex-row gap-[32px] items-start justify-between pt-[4px] rounded-radius6 w-[100%]">
                  <div className="flex sm:flex-1 flex-col gap-[17px] items-start justify-start rounded-radius6 sm:w-[100%] w-[auto]">
                    <Text
                      className="not-italic text-black_900 text-left w-[auto]"
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
                  <div className="flex sm:flex-1 flex-col gap-[17px] items-start justify-start rounded-radius6 sm:w-[100%] w-[auto]">
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[4px] not-italic text-black_900 text-left w-[auto]"
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
                    className="not-italic text-black_900 text-left w-[auto]"
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
                <div className="flex sm:flex-col flex-row gap-[32px] items-start justify-between mt-[24px] pt-[6px] rounded-radius6 w-[100%]">
                  <div className="flex sm:flex-1 flex-col gap-[12px] items-start justify-start rounded-radius6 sm:w-[100%] w-[auto]">
                    <Text
                      className="not-italic text-black_900 text-left w-[auto]"
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
                  <div className="flex sm:flex-1 flex-col gap-[12px] items-start justify-start rounded-radius6 sm:w-[100%] w-[auto]">
                    <Text
                      className="not-italic text-black_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Company size
                    </Text>
                    <SelectBox
                      className="font-normal not-italic text-[16px] text-bluegray_200 text-left w-[100%]"
                      placeholderClassName="text-bluegray_200"
                      name="forminput Four"
                      placeholder="Company Size"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_arrowdown.svg"
                          className="h-[24px] mr-[13px] w-[24px]"
                          alt="arrow_down"
                        />
                      }
                    ></SelectBox>
                  </div>
                </div>
                <div className="flex flex-col gap-[17px] items-start justify-start mt-[28px] w-[100%]">
                  <Text
                    className="not-italic text-black_900 text-left w-[auto]"
                    variant="body1"
                  >
                    Phone Number
                  </Text>
                  <div className="bg-white_A700 border border-bluegray_200 border-solid flex sm:flex-col flex-row sm:gap-[20px] items-center justify-start p-[8px] rounded-radius6 w-[100%]">
                    <div className="bg-white_A700 flex sm:flex-1 flex-col items-center justify-start sm:ml-[0] ml-[8px] sm:mt-[0] my-[7px] pb-[10px] sm:w-[100%] w-[6%]">
                      <div className="bg-red_800 h-[10px] w-[100%]"></div>
                    </div>
                    <Img
                      src="images/img_arrowdown_bluegray_600.svg"
                      className="h-[24px] sm:ml-[0] ml-[8px] w-[24px]"
                      alt="arrowdown"
                    />
                    <Line className="bg-gray_200 sm:flex-1 sm:h-[1px] h-[26px] sm:ml-[0] ml-[8px] sm:mt-[0] my-[4px] sm:w-[100%] w-[1px]" />
                    <Input
                      className="flex-1 font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_600 text-bluegray_600 text-left w-[100%]"
                      wrapClassName="ml-[7px] sm:ml-[0] sm:w-[100%] w-[76%]"
                      type="number"
                      name="frame178"
                      placeholder="Phone Number"
                      size="sm"
                      variant="FillWhiteA700"
                    ></Input>
                  </div>
                </div>
                <CheckBox
                  className="font-normal leading-[26.00px] mt-[24px] not-italic text-[16px] text-bluegray_600 text-left md:w-[100%] sm:w-[100%]"
                  inputClassName="h-[16px] md:w-[100%] mr-[5px] sm:w-[100%] w-[16px]"
                  name="BysigningupI"
                  label="By signing up I agree  to Sastly Terms & Conditons and Privacy Policy"
                ></CheckBox>
                <Button
                  className="cursor-pointer font-normal min-w-[456px] mt-[32px] text-[16px] text-center text-white_A700 w-[auto]"
                  shape="RoundedBorder6"
                  size="sm"
                  variant="FillTeal400"
                >
                  Sign Up
                </Button>
              </div>
              <Text
                className="common-pointer font-normal md:ml-[0] sm:ml-[0] ml-[141px] mt-[30px] not-italic text-gray_900 text-left w-[auto]"
                variant="body2"
                onClick={() => navigate("/")}
              >
                <span className="text-gray_900 text-[16px] font-chivo">
                  Already an user?{" "}
                </span>
                <span className="text-teal_400 text-[16px] font-chivo">
                  Login
                </span>
              </Text>
            </div>
            <Line className="bg-gray_200 h-[1px] mt-[64px] w-[100%]" />
            <div className="flex flex-row gap-[24px] items-start justify-center md:ml-[0] sm:ml-[0] ml-[91px] mt-[28px] md:w-[100%] sm:w-[100%] w-[61%]">
              <Text
                className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                variant="body2"
              >
                Terms & Conditions
              </Text>
              <Text
                className="font-normal not-italic text-bluegray_200 text-left w-[auto]"
                variant="body2"
              >
                Privacy Policy
              </Text>
            </div>
          </div>
          <div className="bg-teal_400 flex flex-col items-center justify-start p-[65px] sm:px-[20px] md:px-[40px] rounded-bl-[0] rounded-br-[6px] rounded-tl-[0] rounded-tr-[6px] md:w-[100%] sm:w-[100%] w-[53%]">
            <div className="flex flex-col items-center justify-start mb-[144px] mt-[120px] w-[100%]">
              <Img
                src="images/img_illustration_402X358.svg"
                className="h-[402px] w-[84%]"
                alt="illustration"
              />
              <Text
                className="leading-[32.00px] mt-[64px] text-center text-white_A700 sm:w-[100%] w-[94%]"
                as="h6"
                variant="h6"
              >
                Give trust to us to provide accurate data for your product
              </Text>
              <Text
                className="font-normal leading-[26.00px] mt-[16px] not-italic text-center text-white_A700_99 w-[100%]"
                variant="body2"
              >
                The fastest and simple way to generate growing business
                solutions with our products
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
