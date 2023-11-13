import React from "react";

import { Img, Input, Line, List, Text } from "components";

const IshlabchiqarishsexiBrakmahsulotlarhisobiElevenPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[1055px] mx-auto pb-[155px] relative w-full">
        <div className="h-[900px] mx-auto md:px-5 w-full">
          <Img
            className="h-[900px] m-auto object-cover w-full"
            src="images/img_showroombuyurtmalar.png"
            alt="globalOne"
          />
          <div className="absolute flex sm:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[3%] w-[92%]">
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
          <div className="absolute bottom-[3%] h-[770px] right-[0] w-[1%]">
            <Line className="bg-blue_gray-800 h-[770px] m-auto w-[5px]" />
            <Line className="absolute bg-blue_gray-500 bottom-[6%] h-[172px] inset-x-[0] mx-auto rounded-sm w-[5px]" />
          </div>
          <div className="absolute h-[60px] left-[0] top-[35%] w-1/5">
            <div className="absolute h-[60px] inset-[0] justify-center m-auto w-full">
              <div className="bg-blue_gray-800_7e h-[60px] m-auto w-full"></div>
              <div className="absolute bottom-[27%] flex flex-row gap-[15px] items-center justify-center left-[12%] w-[70%]">
                <Img
                  className="h-6 w-6"
                  src="images/img_plus_white_a700.svg"
                  alt="plus"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-base text-white-A700 uppercase"
                    size="txtRobotoMedium16WhiteA700"
                  >
                    oynaga buyurtma
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bg-red-300 h-[60px] inset-y-[0] left-[0] my-auto w-[6%]"></div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-900_87_01 flex flex-col items-center justify-start md:px-5 right-[3%] rounded-[5px] top-[10%] w-[79%]">
          <div className="flex flex-col gap-[34px] items-center justify-start mb-[83px] mt-[15px] w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[94%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between md:mt-0 mt-2.5 w-2/5 md:w-full">
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
              <Input
                name="buttonadd"
                placeholder="Buyurtma berish"
                className="font-medium p-0 placeholder:text-blue-400 text-center text-sm tracking-[0.14px] uppercase w-full"
                wrapClassName="border border-blue_gray-600 border-solid flex mb-2.5 rounded-[5px] md:w-full"
                suffix={
                  <div className="h-6 ml-4 w-6 bg-blue_gray-500 p-1.5 rounded flex justify-center items-center">
                    <Img
                      className="h-[11px] my-auto"
                      src="images/img_plus_red_300.svg"
                      alt="plus"
                    />
                  </div>
                }
                shape="round"
                color="blue_gray_900"
                size="md"
                variant="fill"
              ></Input>
            </div>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[515px] items-start justify-end p-[13px] w-full"
              style={{ backgroundImage: "url('images/img_group216.svg')" }}
            >
              <List
                className="sm:flex-col flex-row gap-[27px] grid grid-cols-2 md:ml-[0] ml-[9px] w-[13%]"
                orientation="horizontal"
              >
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    01
                  </Text>
                  <Text
                    className="h-[18px] mt-6 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    02
                  </Text>
                  <Text
                    className="h-[18px] mt-[23px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    03
                  </Text>
                  <Text
                    className="h-[18px] mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    04
                  </Text>
                  <Text
                    className="h-[18px] mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    05
                  </Text>
                  <Text
                    className="h-[18px] mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    06
                  </Text>
                  <Text
                    className="h-[18px] mt-6 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    07
                  </Text>
                  <Text
                    className="h-[18px] mt-[21px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    08
                  </Text>
                  <Text
                    className="h-[18px] mt-6 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    09
                  </Text>
                  <Text
                    className="h-[18px] mt-6 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    10
                  </Text>
                  <Text
                    className="mt-6 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    11
                  </Text>
                </div>
                <div className="flex flex-col gap-[21px] justify-start w-full">
                  <Text
                    className="text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    Loyiha nomeri
                  </Text>
                  <div className="flex flex-col items-start justify-start ml-7 md:ml-[0]">
                    <Text
                      className="text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      120003
                    </Text>
                    <Text
                      className="mt-6 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      120002
                    </Text>
                    <Text
                      className="mt-[23px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      120002
                    </Text>
                    <Text
                      className="mt-[26px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      120001
                    </Text>
                    <Text
                      className="mt-[26px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      119999
                    </Text>
                    <Text
                      className="mt-[26px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      119996
                    </Text>
                    <Text
                      className="mt-6 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      119997
                    </Text>
                    <Text
                      className="mt-[21px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      119996
                    </Text>
                    <Text
                      className="mt-6 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      119997
                    </Text>
                    <Text
                      className="mt-[25px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      119996
                    </Text>
                    <Text
                      className="mt-6 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      119995
                    </Text>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IshlabchiqarishsexiBrakmahsulotlarhisobiElevenPage;
