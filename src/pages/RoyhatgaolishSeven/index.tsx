import React from "react";

import { Img, Input, Text } from "components";

const RoyhatgaolishSevenPage: React.FC = () => {
  return (
    <>
      <div
        className="bg-blue_gray-900 bg-cover bg-no-repeat flex flex-col font-roboto h-[900px] items-center justify-start mx-auto p-[115px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="flex flex-col items-center justify-start max-w-[999px] mx-auto w-full">
          <div className="bg-blue_gray-900_87_01 border border-blue_gray-600_87 border-solid flex flex-col items-start justify-start rounded-[63px] shadow-bs3 w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[78px] items-center justify-start w-[91%] md:w-full">
              <div className="flex flex-col items-center justify-start w-1/2 md:w-full">
                <Img
                  className="h-[670px] md:h-auto object-cover rounded-bl-[63px] w-full"
                  src="images/img_image21.png"
                  alt="imageTwentyOne"
                />
              </div>
              <div className="flex flex-col items-start justify-start w-[42%] md:w-full">
                <Img
                  className="h-[172px]"
                  src="images/img_group76.svg"
                  alt="groupSeventySix"
                />
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[3px] mt-[137px] pt-2 w-[99%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <a href="javascript:" className="text-gray-400 text-xs">
                      <Text size="txtRobotoRegular12">Login</Text>
                    </a>
                  </div>
                  <Img
                    className="h-8 md:ml-[0] ml-[340px] w-8"
                    src="images/img_user.svg"
                    alt="user"
                  />
                  <Img className="h-0.5" src="images/img_dark.svg" alt="dark" />
                </div>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[3px] mt-[27px] pt-3 w-[99%] md:w-full">
                  <div className="flex flex-col relative w-full">
                    <div className="flex flex-col items-start justify-start mx-auto pb-[5px] pr-[5px] w-full">
                      <Text
                        className="text-gray-400 text-xs"
                        size="txtRobotoRegular12"
                      >
                        Password
                      </Text>
                    </div>
                    <Img
                      className="h-8 ml-auto mt-[-9.06px] w-8 z-[1]"
                      src="images/img_lock.svg"
                      alt="lock"
                    />
                  </div>
                  <Img
                    className="h-px"
                    src="images/img_dark.svg"
                    alt="stroke"
                  />
                </div>
                <Input
                  name="buttonsaqlash"
                  placeholder="login"
                  className="font-medium p-0 placeholder:text-blue-400 text-center text-sm tracking-[0.14px] uppercase w-full"
                  wrapClassName="border border-blue_gray-600 border-solid flex md:ml-[0] ml-[70px] mt-11 rounded-[5px] w-[53%]"
                  suffix={
                    <Img
                      className="ml-[35px] my-auto"
                      src="images/img_music.svg"
                      alt="music"
                    />
                  }
                  shape="round"
                  color="blue_gray_900"
                  size="md"
                  variant="fill"
                ></Input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoyhatgaolishSevenPage;
