import React from "react";

import { Img, Text, Input, Button, Line } from "components";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray_200 flex flex-col font-chivo items-center justify-start mx-[auto] p-[80px] sm:px-[20px] md:px-[40px] w-[100%]">
        <div className="bg-white_A700 flex md:flex-col sm:flex-col flex-row gap-[48px] items-start justify-center max-w-[1112px] mx-[auto] pl-[48px] md:px-[20px] sm:px-[20px] rounded-bl-[6px] rounded-br-[0] rounded-tl-[6px] rounded-tr-[0] shadow-bs1 w-[100%]">
          <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start md:mt-[0] sm:mt-[0] mt-[70px] md:w-[100%] sm:w-[100%] w-[43%]">
            <Img
              src="images/img_uilchartgrowt.svg"
              className="h-[32px] w-[26%]"
              alt="uilchartgrowt"
            />
            <div className="flex flex-col items-center justify-start mt-[50px] rounded-radius6 w-[100%]">
              <div className="flex flex-col gap-[32px] items-start justify-start rounded-radius6 w-[100%]">
                <Text
                  className="text-black_900 text-left w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Login to your account
                </Text>
                <div className="flex flex-col gap-[29px] items-center justify-start pt-[4px] rounded-radius6 w-[100%]">
                  <div className="flex flex-col gap-[17px] items-start justify-start rounded-radius6 w-[100%]">
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
                      name="FormInput"
                      placeholder="Email Address"
                      shape="RoundedBorder6"
                    ></Input>
                  </div>
                  <div className="flex flex-col gap-[17px] items-start justify-start rounded-radius6 w-[100%]">
                    <Text
                      className="not-italic text-black_900 text-left w-[auto]"
                      variant="body1"
                    >
                      Password
                    </Text>
                    <Input
                      className="font-normal not-italic p-[0] text-[16px] placeholder:text-bluegray_200 text-bluegray_200 text-left w-[100%]"
                      wrapClassName="w-[100%]"
                      type="password"
                      name="FormInput One"
                      placeholder="Password"
                      shape="RoundedBorder6"
                    ></Input>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-normal min-w-[456px] text-[16px] text-center text-white_A700 w-[auto]"
                  shape="RoundedBorder6"
                  size="sm"
                  variant="FillTeal400"
                >
                  Login
                </Button>
              </div>
              <Text
                className="font-normal mt-[24px] text-left text-teal_400 w-[auto]"
                variant="body2"
              >
                Forgot Password?
              </Text>
              <div className="flex flex-col items-center justify-start mt-[38px] md:w-[100%] sm:w-[100%] w-[53%]">
                <Text
                  className="common-pointer font-normal not-italic text-gray_900 text-left w-[auto]"
                  variant="body2"
                  onClick={() => navigate("/signup")}
                >
                  <span className="text-gray_900 text-[16px] font-chivo">
                    Don’t have an account?{" "}
                  </span>
                  <span className="text-teal_400 text-[16px] font-chivo">
                    Sign Up
                  </span>
                </Text>
              </div>
            </div>
            <Line className="bg-gray_200 h-[1px] mt-[48px] w-[100%]" />
            <div className="flex flex-row gap-[23px] items-start justify-center md:ml-[0] sm:ml-[0] ml-[91px] mt-[28px] md:w-[100%] sm:w-[100%] w-[61%]">
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
          <div className="bg-teal_400 flex md:flex-1 sm:flex-1 flex-col items-center justify-end p-[64px] sm:px-[20px] md:px-[40px] rounded-bl-[0] rounded-br-[6px] rounded-tl-[0] rounded-tr-[6px] md:w-[100%] sm:w-[100%] w-[53%]">
            <div className="flex flex-col items-center justify-start mt-[10px] w-[100%]">
              <Img
                src="images/img_illustration.svg"
                className="h-[402px] w-[84%]"
                alt="illustration"
              />
              <Text
                className="leading-[32.00px] mt-[60px] text-center text-white_A700 sm:w-[100%] w-[94%]"
                as="h6"
                variant="h6"
              >
                A powerful SaaS analytics application that is very easy to use
              </Text>
              <Text
                className="font-normal leading-[26.00px] mt-[8px] not-italic text-center text-white_A700_99 w-[100%]"
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

export default LoginPage;
