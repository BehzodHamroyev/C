import React from "react";

import { Img, Input, Text } from "components";

const RoyhatgaolishPage: React.FC = () => {
  return (
    <>
      <div
        className="bg-blue_gray-900 bg-cover bg-no-repeat flex flex-col font-roboto h-[900px] items-center justify-start mx-auto p-[115px] md:px-10 sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start max-w-[999px] mx-auto w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start w-[45%] md:w-full">
            <Img
              className="h-[670px] md:h-auto object-cover rounded-bl-[63px] w-full"
              src="images/img_image21.png"
              alt="imageTwentyOne"
            />
          </div>
          <div className="bg-blue_gray-900_87_01 border border-blue_gray-600_87 border-solid flex md:flex-1 flex-col md:gap-10 gap-[137px] justify-start p-[58px] md:px-10 sm:px-5 rounded-br-[63px] rounded-tr-[63px] shadow-bs3 w-[56%] md:w-full">
            <Img
              className="h-[172px] mr-[54px] mt-[7px]"
              src="images/img_group76.svg"
              alt="groupSeventySix"
            />
            <div className="flex flex-col items-start justify-start mb-[13px] md:ml-[0] ml-[25px] w-[86%] md:w-full">
              <div className="flex flex-col items-start justify-start pt-2 w-full">
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
              <div className="flex flex-col items-center justify-start mt-[27px] pt-3 w-full">
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
                <Img className="h-px" src="images/img_dark.svg" alt="stroke" />
              </div>
              <Input
                name="buttonsaqlash"
                placeholder="login"
                className="font-medium p-0 placeholder:text-blue-400 text-center text-sm tracking-[0.14px] uppercase w-full"
                wrapClassName="border border-blue_gray-600 border-solid flex md:ml-[0] ml-[66px] mt-11 rounded-[5px] w-[54%]"
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
    </>
  );
};

export default RoyhatgaolishPage;
