import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const IshlabchiqarishsexiJoriybuyurtmalarOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div className="absolute md:h-[3142px] h-[899px] inset-[0] justify-center m-auto md:px-5 w-full">
          <Img
            className="h-[899px] m-auto object-cover w-full"
            src="images/img_global1_8.png"
            alt="globalOne"
          />
          <Img
            className="absolute h-[82px] left-[3%] top-[6%]"
            src="images/img_group834.svg"
            alt="groupSeventySix"
          />
          <div className="absolute flex flex-col gap-11 h-max inset-y-[0] items-center justify-start my-auto right-[3%] w-[79%]">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[97%] md:w-full">
              <FrameFiftyTwoDatafiltr className="flex md:flex-col flex-row gap-[17px] items-center justify-between w-[66%] md:w-full" />
              <div className="flex flex-row items-center justify-end w-[21%] md:w-full">
                <div className="h-[38px] relative w-[38px]">
                  <Img
                    className="h-[38px] m-auto rounded-[50%] w-[38px]"
                    src="images/img_il1588xn1_38x38.png"
                    alt="il1588xnOne"
                  />
                  <Img
                    className="absolute h-[38px] inset-[0] justify-center m-auto rounded-[50%] w-[38px]"
                    src="images/img_il1588xn2_38x38.png"
                    alt="il1588xnTwo"
                  />
                </div>
                <Text
                  className="ml-[11px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-500"
                  size="txtRobotoMedium23"
                >
                  Kassir ismi
                </Text>
                <Img
                  className="h-[7px] ml-[42px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
            <div className="bg-blue_gray-900_87_01 flex flex-col justify-start py-[22px] rounded-[5px] w-full">
              <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-start md:ml-[0] ml-[26px] w-[37%] md:w-full">
                <Img
                  className="h-[22px]"
                  src="images/img_refresh.svg"
                  alt="refresh"
                />
                <Input
                  name="group727"
                  placeholder="Izlash"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-400_7e border-solid w-[91%] sm:w-full"
                  shape="round"
                  color="blue_gray_800_7e"
                  size="xl"
                  variant="fill"
                ></Input>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[458px] items-center justify-end mt-7 p-[11px] w-full"
                style={{ backgroundImage: "url('images/img_group400.svg')" }}
              >
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[2%] md:w-full">
                    <Img
                      className="h-[15px] md:h-auto object-cover w-[58%] sm:w-full"
                      src="images/img_.png"
                      alt="TwoHundredOne"
                    />
                    <Text
                      className="mt-[37px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      001
                    </Text>
                    <Text
                      className="mt-[34px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      002
                    </Text>
                    <Text
                      className="mt-[33px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      003
                    </Text>
                    <Text
                      className="mt-[38px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      004
                    </Text>
                    <Text
                      className="mt-[38px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      005
                    </Text>
                    <Text
                      className="mt-[35px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      006
                    </Text>
                    <Text
                      className="mt-9 text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      007
                    </Text>
                    <Text
                      className="mt-9 text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      008
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[18px]">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Buyurtma nomeri
                    </Text>
                    <Text
                      className="mt-[31px] text-[15px] text-blue-400"
                      size="txtRobotoMedium15Blue400"
                    >
                      1023
                    </Text>
                    <Text
                      className="mt-[31px] text-[15px] text-blue-400"
                      size="txtRobotoMedium15Blue400"
                    >
                      1024
                    </Text>
                    <Text
                      className="mt-[30px] text-[15px] text-blue-400"
                      size="txtRobotoMedium15Blue400"
                    >
                      1025
                    </Text>
                    <Text
                      className="mt-[35px] text-[15px] text-blue-400"
                      size="txtRobotoMedium15Blue400"
                    >
                      1026
                    </Text>
                    <Text
                      className="mt-[35px] text-[15px] text-blue-400"
                      size="txtRobotoMedium15Blue400"
                    >
                      1027
                    </Text>
                    <Text
                      className="mt-8 text-[15px] text-blue-400"
                      size="txtRobotoMedium15Blue400"
                    >
                      1028
                    </Text>
                    <Text
                      className="mt-[33px] text-[15px] text-blue-400"
                      size="txtRobotoMedium15Blue400"
                    >
                      1029
                    </Text>
                    <Text
                      className="mt-[33px] text-[15px] text-blue-400"
                      size="txtRobotoMedium15Blue400"
                    >
                      1030
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start mb-[7px] md:ml-[0] ml-[163px]">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Aldoks
                    </Text>
                    <Text
                      className="mt-9 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      180
                    </Text>
                    <Text
                      className="mt-[37px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      200
                    </Text>
                    <Text
                      className="mt-[34px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      300
                    </Text>
                    <Text
                      className="mt-[35px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      302
                    </Text>
                    <Text
                      className="mt-9 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      500
                    </Text>
                    <Text
                      className="mt-[38px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      502
                    </Text>
                    <Text
                      className="mt-[35px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      305
                    </Text>
                    <Text
                      className="mt-[37px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      603
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[161px]">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      PVH
                    </Text>
                    <Text
                      className="mt-[35px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      0
                    </Text>
                    <Text
                      className="mt-[37px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      30
                    </Text>
                    <Text
                      className="mt-[34px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      100
                    </Text>
                    <Text
                      className="mt-[35px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      0
                    </Text>
                    <Text
                      className="mt-9 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      0
                    </Text>
                    <Text
                      className="mt-[38px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      0
                    </Text>
                    <Text
                      className="mt-[35px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      0
                    </Text>
                    <Text
                      className="mt-[37px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      0
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start mb-[7px] md:ml-[0] ml-[178px]">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Exclusive
                    </Text>
                    <Text
                      className="mt-9 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      50
                    </Text>
                    <Text
                      className="mt-[37px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      0
                    </Text>
                    <Text
                      className="mt-[34px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      0
                    </Text>
                    <Text
                      className="mt-[35px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      0
                    </Text>
                    <Text
                      className="mt-9 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      100
                    </Text>
                    <Text
                      className="mt-[38px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      90
                    </Text>
                    <Text
                      className="mt-[35px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      300
                    </Text>
                    <Text
                      className="mt-[37px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      0
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[85px] md:mt-0 mt-[47px] w-[17%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Input
                        name="group554"
                        placeholder="Guruhga biriktirish"
                        className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-center text-xs w-full"
                        wrapClassName="rounded w-full"
                        shape="round"
                        color="blue_400"
                        size="md"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[18px] w-full">
                      <Input
                        name="group554_One"
                        placeholder="Guruhga biriktirish"
                        className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-center text-xs w-full"
                        wrapClassName="rounded w-full"
                        shape="round"
                        color="blue_400"
                        size="md"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[19px] w-full">
                      <Input
                        name="group554_Two"
                        placeholder="Guruhga biriktirish"
                        className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-center text-xs w-full"
                        wrapClassName="rounded w-full"
                        shape="round"
                        color="blue_400"
                        size="md"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[23px] w-full">
                      <Input
                        name="group554_Three"
                        placeholder="Guruhga biriktirish"
                        className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-center text-xs w-full"
                        wrapClassName="rounded w-full"
                        shape="round"
                        color="blue_400"
                        size="md"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[21px] w-full">
                      <Input
                        name="group554_Four"
                        placeholder="Guruhga biriktirish"
                        className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-center text-xs w-full"
                        wrapClassName="rounded w-full"
                        shape="round"
                        color="blue_400"
                        size="md"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[23px] w-full">
                      <Input
                        name="group554_Five"
                        placeholder="Guruhga biriktirish"
                        className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-center text-xs w-full"
                        wrapClassName="rounded w-full"
                        shape="round"
                        color="blue_400"
                        size="md"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[23px] w-full">
                      <Input
                        name="group554_Six"
                        placeholder="Guruhga biriktirish"
                        className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-center text-xs w-full"
                        wrapClassName="rounded w-full"
                        shape="round"
                        color="blue_400"
                        size="md"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[19px] w-full">
                      <Input
                        name="group554_Seven"
                        placeholder="Guruhga biriktirish"
                        className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-center text-xs w-full"
                        wrapClassName="rounded w-full"
                        shape="round"
                        color="blue_400"
                        size="md"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[37px] items-end justify-start mb-1 md:ml-[0] ml-[421px] mt-[141px] p-1 w-[34%] md:w-full"
                style={{
                  backgroundImage: "url('images/img_group71_gray_900.svg')",
                }}
              >
                <div className="flex flex-row items-start justify-end mb-0.5 mr-1.5 w-[86%] md:w-full">
                  <Text
                    className="mt-1 text-gray-400 text-sm"
                    size="txtRobotoMedium14Gray400"
                  >
                    1
                  </Text>
                  <Text
                    className="ml-[31px] mt-1 text-gray-400 text-sm"
                    size="txtRobotoMedium14Gray400"
                  >
                    2
                  </Text>
                  <Text
                    className="ml-[30px] mt-1 text-gray-400 text-sm"
                    size="txtRobotoMedium14Gray400"
                  >
                    3
                  </Text>
                  <Text
                    className="ml-[30px] mt-1 text-gray-400 text-sm"
                    size="txtRobotoMedium14Gray400"
                  >
                    4
                  </Text>
                  <Text
                    className="ml-[29px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
                    size="txtRobotoMedium22"
                  >
                    5
                  </Text>
                  <Text
                    className="ml-[29px] mt-1 text-gray-400 text-sm"
                    size="txtRobotoMedium14Gray400"
                  >
                    6
                  </Text>
                  <Text
                    className="ml-[30px] mt-[5px] text-gray-400 text-sm"
                    size="txtRobotoMedium14Gray400"
                  >
                    7
                  </Text>
                  <Text
                    className="ml-[29px] mt-[5px] text-gray-400 text-sm"
                    size="txtRobotoMedium14Gray400"
                  >
                    8
                  </Text>
                  <Img
                    className="h-2.5 ml-8 mt-2"
                    src="images/img_line3.svg"
                    alt="lineThree"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-blue_gray-800_7e flex flex-col inset-y-[0] left-[0] my-auto pb-3.5 w-1/5">
            <Img
              className="h-[60px] mx-auto"
              src="images/img_group948.svg"
              alt="group948"
            />
            <div className="flex flex-row gap-[23px] items-start justify-between mt-[-39.82px] mx-auto w-4/5 z-[1]">
              <Img
                className="h-5"
                src="images/img_user_white_a700_20x29.svg"
                alt="user"
              />
              <div className="flex flex-col items-center justify-start">
                <div className="flex flex-col items-start justify-start w-full">
                  <SelectBox
                    className="font-medium leading-[normal] text-base text-left text-white-A700 w-full"
                    placeholderClassName="text-white-A700"
                    indicator={
                      <Img
                        className="h-1 mr-[0] outline-white-A700 outline-[0.5px] outline w-[11px]"
                        src="images/img_arrowdown_white_a700_4x11.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="language_One"
                    options={languageOneOptionsList}
                    isSearchable={false}
                    placeholder="Guruhga biriktirish "
                  />
                  <Text
                    className="mt-[34px] text-base text-white-A700"
                    size="txtRobotoMedium16WhiteA700"
                  >
                    Buyurtmalar
                  </Text>
                  <Text
                    className="mt-[17px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    Buyurtmalar tarixi
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[0] h-[941px] md:px-5 right-[0] w-[1%]">
          <Line className="absolute bg-blue_gray-800 h-[941px] inset-y-[0] my-auto right-[0] w-[5px]" />
          <Line className="absolute bg-blue_gray-500 bottom-[23%] h-[172px] inset-x-[0] mx-auto rounded-sm w-[5px]" />
        </div>
      </div>
    </>
  );
};

export default IshlabchiqarishsexiJoriybuyurtmalarOnePage;
