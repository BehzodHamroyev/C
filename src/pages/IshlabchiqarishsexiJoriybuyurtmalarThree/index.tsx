import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const IshlabchiqarishsexiJoriybuyurtmalarThreePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div className="absolute md:h-[1313px] h-[899px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="h-[899px] m-auto w-full">
            <div className="h-[899px] m-auto w-full">
              <Img
                className="h-[899px] m-auto object-cover w-full"
                src="images/img_global1_8.png"
                alt="globalOne"
              />
              <div className="absolute flex flex-col md:gap-10 gap-[98px] justify-start left-[0] top-[3%] w-[96%]">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[49px] w-[97%] md:w-full">
                  <Img
                    className="h-[82px] md:mt-0 mt-[26px]"
                    src="images/img_group834.svg"
                    alt="groupSeventySix"
                  />
                  <FrameFiftyTwoDatafiltr className="flex md:flex-col flex-row gap-[17px] items-center justify-center ml-14 md:ml-[0] md:mt-0 mt-0.5 w-[54%] md:w-full" />
                  <div className="flex flex-row items-center justify-end md:ml-[0] ml-[150px] w-[17%] md:w-full">
                    <div className="h-[38px] relative w-[38px]">
                      <Img
                        className="h-[38px] m-auto rounded-[50%] w-[38px]"
                        src="images/img_il1588xn1_38x38.png"
                        alt="il1588xnOne"
                      />
                      <Img
                        className="absolute h-[38px] inset-[0] justify-center m-auto rounded-[50%] w-[38px]"
                        src="images/img_il1588xn2.png"
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
            <div className="absolute bg-blue_gray-500 h-[41px] left-[0] top-[37%] w-1/5"></div>
          </div>
          <div className="absolute bottom-[4%] flex md:flex-col flex-row gap-[30px] inset-x-[0] items-start justify-start mx-auto w-[95%]">
            <div className="flex flex-row gap-[27px] items-start justify-between md:mt-0 mt-[149px] w-[16%] md:w-full">
              <Img
                className="h-[15px]"
                src="images/img_group640.svg"
                alt="group640"
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
                    placeholder="Buyurtmalar "
                  />
                  <Text
                    className="mt-[19px] text-base text-white-A700"
                    size="txtRobotoMedium16WhiteA700"
                  >
                    Joriy buyurtmalar
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
            <div className="bg-blue_gray-900_87_01 flex flex-col justify-start py-[22px] rounded-[5px] w-[83%] md:w-full">
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
              <div className="flex flex-col items-center justify-start mt-7 w-full">
                <Line className="bg-blue_gray-800_01 h-0.5 w-full" />
                <div className="sm:h-[2191px] h-[427px] md:h-[871px] mt-[9px] relative w-full">
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Line className="bg-blue_gray-800_01 h-0.5 w-full" />
                      <Line className="bg-blue_gray-800_01 h-0.5 mt-[49px] w-full" />
                      <Line className="bg-blue_gray-800_01 h-0.5 mt-[47px] w-full" />
                      <Line className="bg-blue_gray-800_01 h-0.5 mt-[46px] w-full" />
                      <Line className="bg-blue_gray-800_01 h-0.5 mt-[51px] w-full" />
                      <Line className="bg-blue_gray-800_01 h-0.5 mt-[50px] w-full" />
                      <Line className="bg-blue_gray-800_01 h-0.5 mt-[49px] w-full" />
                      <Line className="bg-blue_gray-800_01 h-0.5 mt-[49px] w-full" />
                    </div>
                  </div>
                  <List
                    className="absolute sm:flex-col flex-row gap-[18px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 inset-[0] justify-center m-auto w-[94%]"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start w-full">
                      <Img
                        className="h-[15px] md:h-auto object-cover w-[58%] sm:w-full"
                        src="images/img_.png"
                        alt="TwoHundredThree"
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
                    <div className="flex flex-col items-start justify-start w-full">
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
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Biriktirilgan guruh
                      </Text>
                      <Text
                        className="mt-[33px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Umarov Mirxohid{" "}
                      </Text>
                      <Text
                        className="mt-[34px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Kozimov Abdulhamid
                      </Text>
                      <Text
                        className="mt-[34px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Sardor Umidov
                      </Text>
                      <Text
                        className="mt-[38px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Qobilov Vali
                      </Text>
                      <Text
                        className="mt-[38px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Qobilov Vali
                      </Text>
                      <Text
                        className="mt-[35px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Sardor Umidov
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Kozimov Abdulhamid
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Umarov Mirxohid{" "}
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Summa
                      </Text>
                      <Text
                        className="mt-[35px] text-light_green-400 text-xs"
                        size="txtRobotoMedium12Lightgreen400"
                      >
                        250 000
                      </Text>
                      <Text
                        className="mt-[37px] text-light_green-400 text-xs"
                        size="txtRobotoMedium12Lightgreen400"
                      >
                        256 000
                      </Text>
                      <Text
                        className="mt-[34px] text-light_green-400 text-xs"
                        size="txtRobotoMedium12Lightgreen400"
                      >
                        300 000
                      </Text>
                      <Text
                        className="mt-[35px] text-light_green-400 text-xs"
                        size="txtRobotoMedium12Lightgreen400"
                      >
                        302 000
                      </Text>
                      <Text
                        className="mt-9 text-light_green-400 text-xs"
                        size="txtRobotoMedium12Lightgreen400"
                      >
                        500 000
                      </Text>
                      <Text
                        className="mt-[38px] text-light_green-400 text-xs"
                        size="txtRobotoMedium12Lightgreen400"
                      >
                        502 000
                      </Text>
                      <Text
                        className="mt-[35px] text-light_green-400 text-xs"
                        size="txtRobotoMedium12Lightgreen400"
                      >
                        305 000
                      </Text>
                      <Text
                        className="mt-[37px] text-light_green-400 text-xs"
                        size="txtRobotoMedium12Lightgreen400"
                      >
                        603 000
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Muddati
                      </Text>
                      <Text
                        className="mt-[33px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 11. 2022
                      </Text>
                      <Text
                        className="mt-[35px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 12. 2022
                      </Text>
                      <Text
                        className="mt-[33px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 12. 2022
                      </Text>
                      <Text
                        className="mt-[38px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 12. 2022
                      </Text>
                      <Text
                        className="mt-[37px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 12. 2022
                      </Text>
                      <Text
                        className="mt-9 text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 12. 2022
                      </Text>
                      <Text
                        className="mt-[35px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 12. 2022
                      </Text>
                      <Text
                        className="mt-9 text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 13. 2022
                      </Text>
                    </div>
                  </List>
                </div>
                <Line className="bg-blue_gray-800_01 h-0.5 mt-[19px] w-full" />
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[37px] items-end justify-start mb-1 md:ml-[0] ml-[421px] mt-[139px] p-1 w-[34%] md:w-full"
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
        </div>
        <div className="absolute bottom-[0] h-[941px] md:px-5 right-[0] w-[1%]">
          <Line className="absolute bg-blue_gray-800 h-[941px] inset-y-[0] my-auto right-[0] w-[5px]" />
          <Line className="absolute bg-blue_gray-500 bottom-[23%] h-[172px] inset-x-[0] mx-auto rounded-sm w-[5px]" />
        </div>
      </div>
    </>
  );
};

export default IshlabchiqarishsexiJoriybuyurtmalarThreePage;
