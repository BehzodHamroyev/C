import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const IshlabchiqarishsexiJoriybuyurtmalarPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div
          className="absolute bg-cover bg-no-repeat md:h-[1729px] sm:h-[751px] h-[900px] inset-[0] justify-center m-auto pr-[29px] md:px-5 py-[29px] w-full"
          style={{
            backgroundImage: "url('images/img_showroombuyurtmalar.png')",
          }}
        >
          <div className="absolute md:h-[314px] h-[523px] sm:h-[534px] left-[0] top-[3%] w-[96%] md:w-full">
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
              <div className="flex flex-col md:gap-10 gap-[249px] justify-start w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[49px] w-[97%] md:w-full">
                  <Img
                    className="h-[82px] sm:mt-0 mt-[26px]"
                    src="images/img_group834.svg"
                    alt="groupSeventySix"
                  />
                  <div className="flex flex-row items-center justify-end">
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
                <div className="bg-blue_gray-900 h-[165px] mr-[1090px] w-[21%]"></div>
              </div>
            </div>
            <div className="absolute bg-blue_gray-500 bottom-[14%] h-[41px] left-[0] w-[21%]"></div>
          </div>
          <div className="absolute flex flex-row gap-[27px] h-max inset-y-[0] items-start justify-center left-[2%] my-auto w-[15%]">
            <Img
              className="h-[15px]"
              src="images/img_group640.svg"
              alt="group640"
            />
            <div className="flex flex-col items-center justify-start w-4/5">
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
                  name="language"
                  options={languageOptionsList}
                  isSearchable={false}
                  placeholder="Guruhga biriktirish "
                />
                <Text
                  className="mt-[19px] text-base text-white-A700"
                  size="txtRobotoMedium16WhiteA700"
                >
                  Buyurtmalar
                </Text>
                <Text
                  className="mt-[22px] text-base text-white-A700"
                  size="txtRobotoMedium16WhiteA700"
                >
                  Buyurtmalar tarixi
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute bg-blue_gray-900_87_01 bottom-[4%] flex flex-col items-center justify-start py-[18px] right-[3%] rounded-[5px] w-[79%]">
            <div className="flex flex-col items-center justify-start mb-2 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[96%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between w-[39%] md:w-full">
                  <Img
                    className="h-[22px]"
                    src="images/img_refresh.svg"
                    alt="refresh"
                  />
                  <Input
                    name="group727"
                    placeholder="Izlash"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-400_7e border-solid sm:w-full"
                    shape="round"
                    color="blue_gray_800_7e"
                    size="xl"
                    variant="fill"
                  ></Input>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[221px] rounded-[5px] text-center text-sm tracking-[0.14px] uppercase"
                  shape="round"
                  color="blue_gray_900"
                  size="md"
                  variant="fill"
                >
                  guruhga biriktirish
                </Button>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[458px] items-start justify-start mt-6 p-3 w-full"
                style={{ backgroundImage: "url('images/img_group400.svg')" }}
              >
                <div className="flex md:flex-col flex-row gap-[19px] items-center justify-start mb-[7px] md:ml-[0] ml-[7px] w-[84%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[3%] md:w-full">
                    <Img
                      className="h-[15px] md:h-auto object-cover w-[58%] sm:w-full"
                      src="images/img_.png"
                      alt="TwoHundred"
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
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[157px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 w-[96%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Mahsulot nomi
                      </Text>
                      <Text
                        className="mt-8 text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Eshik
                      </Text>
                      <Text
                        className="mt-[31px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Eshik
                      </Text>
                      <Text
                        className="mt-[30px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Eshik
                      </Text>
                      <Text
                        className="mt-[35px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Eshik
                      </Text>
                      <Text
                        className="mt-[35px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Rom
                      </Text>
                      <Text
                        className="mt-8 text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Rom
                      </Text>
                      <Text
                        className="mt-[33px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Rom
                      </Text>
                      <Text
                        className="mt-8 text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        1030
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Soni
                      </Text>
                      <Text
                        className="mt-[35px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        5
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        2
                      </Text>
                      <Text
                        className="mt-[34px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        3
                      </Text>
                      <Text
                        className="mt-[35px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        3
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        5
                      </Text>
                      <Text
                        className="mt-[37px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        50
                      </Text>
                      <Text
                        className="mt-[35px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        3
                      </Text>
                      <Text
                        className="mt-[37px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        6
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
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
                    <div className="flex flex-col items-start justify-start w-full">
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
                    <div className="flex flex-col items-start justify-start w-full">
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
                  </List>
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[37px] items-end justify-start mt-[141px] p-1 w-[34%] md:w-full"
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
                    className="ml-[30px] mt-1 text-gray-400 text-sm"
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
        </div>
        <div className="absolute bottom-[0] h-[941px] md:px-5 right-[0] w-[1%]">
          <Line className="absolute bg-blue_gray-800 h-[941px] inset-y-[0] my-auto right-[0] w-[5px]" />
          <Line className="absolute bg-blue_gray-500 bottom-[23%] h-[172px] inset-x-[0] mx-auto rounded-sm w-[5px]" />
        </div>
      </div>
    </>
  );
};

export default IshlabchiqarishsexiJoriybuyurtmalarPage;
