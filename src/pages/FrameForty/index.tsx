import React from "react";

import { Img, Text } from "components";

const FrameFortyPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="bg-blue_gray-900_aa flex flex-col items-start justify-start rounded-[63px] shadow-bs3 w-full">
          <div className="flex md:flex-col flex-row gap-[57px] items-start justify-start md:px-5 w-[91%] md:w-full">
            <div className="flex flex-col items-center justify-start w-1/2 md:w-full">
              <Img
                className="h-[670px] md:h-auto object-cover rounded-bl-[63px] w-full"
                src="images/img_image21.png"
                alt="imageTwentyOne"
              />
            </div>
            <div className="flex flex-col md:gap-10 gap-[137px] justify-start md:mt-0 mt-[66px] w-[45%] md:w-full">
              <Img
                className="h-[172px] mr-[18px]"
                src="images/img_group76.svg"
                alt="groupSeventySix"
              />
              <div className="flex flex-col gap-[27px] items-center justify-start md:ml-[0] ml-[25px] w-[94%] md:w-full">
                <div className="flex flex-col items-center justify-start pt-2 w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <a href="javascript:" className="text-gray-400 text-xs">
                      <Text size="txtRobotoRegular12">Login</Text>
                    </a>
                  </div>
                  <div className="h-8 relative w-full">
                    <div className="absolute bottom-[0] flex h-7 inset-x-[0] justify-end mx-auto w-full">
                      <Img
                        className="h-0.5 mt-auto mx-auto"
                        src="images/img_dark.svg"
                        alt="dark"
                      />
                      <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                          size="txtRobotoRegular25"
                        >
                          mehrbilan@gmail.com
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="absolute h-8 inset-y-[0] my-auto right-[1%] w-8"
                      src="images/img_user_white_a700.svg"
                      alt="user"
                    />
                  </div>
                </div>
                <div className="flex h-14 md:h-8 justify-end pt-3 relative w-full">
                  <div className="h-[43px] mt-auto mx-auto w-full">
                    <div className="flex flex-col items-start justify-start mb-[-5.66px] mx-auto pb-[5px] pr-[5px] w-full z-[1]">
                      <Text
                        className="text-gray-400 text-xs"
                        size="txtRobotoRegular12"
                      >
                        Password
                      </Text>
                    </div>
                    <div className="flex h-[29px] justify-end mt-auto mx-auto w-full">
                      <Img
                        className="h-px mt-auto mx-auto"
                        src="images/img_dark.svg"
                        alt="stroke"
                      />
                      <div className="absolute flex flex-col h-full inset-[0] items-start justify-center m-auto w-full">
                        <Text
                          className="sm:text-[21px] md:text-[23px] text-[25px] text-white-A700"
                          size="txtRobotoRegular25"
                        >
                          ******
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Img
                    className="absolute bottom-[0] h-8 right-[0] w-8"
                    src="images/img_lock_white_a700.svg"
                    alt="lock"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameFortyPage;
