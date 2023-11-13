import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Line, Text } from "components";

const OmborQabultarixiBuyurtmalarroyhatiTwoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-roboto h-[949px] mx-auto relative w-full">
        <Img
          className="h-[949px] m-auto object-cover w-full"
          src="images/img_global1_949x1440.png"
          alt="globalOne"
        />
        <div className="absolute flex flex-col gap-[31px] h-max inset-[0] items-center justify-center m-auto max-w-[1361px] md:px-5 w-full">
          <div className="flex flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
            <div className="flex flex-row items-center justify-between w-[10%]">
              <Img
                className="common-pointer h-[41px] w-[41px]"
                src="images/img_arrowleft_blue_400.svg"
                alt="arrowleft"
                onClick={() => navigate(-1)}
              />
              <Text className="text-gray-400 text-xl" size="txtRobotoMedium20">
                1020
              </Text>
            </div>
            <div className="flex flex-row items-center justify-end w-[17%]">
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
          <div className="flex flex-col items-center justify-start w-full">
            <div className="md:h-[810px] h-[812px] sm:h-[852px] relative w-full">
              <div className="absolute bg-blue_gray-900_87_01 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[22px] sm:px-5 w-full">
                <div className="flex sm:flex-col flex-row gap-5 items-center justify-start mb-[726px] md:ml-[0] ml-[9px] w-[32%] md:w-full">
                  <Img
                    className="h-[22px] w-[21px]"
                    src="images/img_refresh.svg"
                    alt="refresh"
                  />
                  <Input
                    name="group727"
                    placeholder="Izlash"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-400_7e border-solid w-[90%] sm:w-full"
                    shape="round"
                    color="blue_gray_800_7e"
                    size="xl"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div className="absolute bottom-[0] h-[731px] inset-x-[0] mx-auto w-full">
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <div className="flex flex-col gap-[41px] items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Line className="bg-blue_gray-800_01 h-0.5 w-full" />
                        <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[696px] mt-7 w-[49%]" />
                        <Line className="bg-blue_gray-800_01 h-0.5 mt-[27px] w-full" />
                        <Line className="bg-blue_gray-800_01 h-px mt-[46px] w-full" />
                        <Line className="bg-blue_gray-800_01 h-px mt-[33px] w-full" />
                        <Line className="bg-blue_gray-800_01 h-px mt-[37px] w-full" />
                        <Line className="bg-blue_gray-800_01 h-px mt-[38px] w-full" />
                        <Line className="bg-blue_gray-800_01 h-px mt-[41px] w-full" />
                        <Line className="bg-blue_gray-800_01 h-px mt-[41px] w-full" />
                        <Line className="bg-blue_gray-800_01 h-px mt-[33px] w-full" />
                        <Line className="bg-blue_gray-800_01 h-px mt-[37px] w-full" />
                        <Line className="bg-blue_gray-800_01 h-px mt-[38px] w-full" />
                        <Line className="bg-blue_gray-800_01 h-px mt-[41px] w-full" />
                        <Line className="bg-blue_gray-800_01 h-px mt-10 w-full" />
                        <Line className="bg-blue_gray-800_01 h-px mt-[33px] w-full" />
                        <Line className="bg-blue_gray-800_01 h-px mt-[37px] w-full" />
                        <Line className="bg-blue_gray-800_01 h-px mt-[38px] w-full" />
                      </div>
                    </div>
                    <Line className="bg-blue_gray-800_01 h-px w-full" />
                  </div>
                </div>
                <Line className="absolute bg-blue_gray-800_03 h-[731px] inset-y-[0] left-[7%] my-auto w-px" />
                <Line className="absolute bg-blue_gray-800_03 h-[731px] inset-y-[0] left-[32%] my-auto w-px" />
                <Line className="absolute bg-blue_gray-800_03 h-[731px] inset-y-[0] left-[39%] my-auto w-px" />
                <Line className="absolute bg-blue_gray-800_03 h-[731px] inset-[0] justify-center m-auto w-px" />
                <Line className="absolute bg-blue_gray-800_03 bottom-[0] h-[701px] right-[42%] w-px" />
                <Line className="absolute bg-blue_gray-800_03 bottom-[0] h-[701px] right-[24%] w-px" />
                <Line className="absolute bg-blue_gray-800_03 h-[731px] inset-y-[0] my-auto right-[31%] w-px" />
                <Text
                  className="absolute right-[41%] text-blue_gray-500 text-xs top-[1%]"
                  size="txtRobotoMedium12Bluegray500"
                >
                  Dillerdan
                </Text>
                <Text
                  className="absolute right-[23%] text-blue_gray-500 text-xs top-[1%]"
                  size="txtRobotoMedium12Bluegray500"
                >
                  <>Ko\&#96;chadan</>
                </Text>
                <div className="absolute flex flex-col gap-5 justify-start left-[9%] top-[3%] w-[19%]">
                  <div className="flex flex-col items-start justify-start mr-[136px]">
                    <Text
                      className="text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Profil nomi
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] mt-[41px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Aldoks-kosa(Silver)
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] mt-6 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      PVH-kosa(Silver)
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] mt-5 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Exclusive-kosa(Silver)
                    </Text>
                    <Text
                      className="mt-5 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Exclusive-kosa(Silver)
                    </Text>
                    <Text
                      className="mt-[26px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Aldoks-qanot(Silver)
                    </Text>
                    <Text
                      className="mt-7 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Aldoks-kosa(Silver)
                    </Text>
                    <Text
                      className="mt-[25px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Aldoks-qanot(Silver)
                    </Text>
                    <Text
                      className="mt-5 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Exclusive-kosa(Silver)
                    </Text>
                    <Text
                      className="mt-6 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Exclusive-kosa(Silver)
                    </Text>
                    <Text
                      className="mt-[27px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Aldoks-qanot(Silver)
                    </Text>
                    <Text
                      className="mt-[26px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      PVH-qanot(Silver)
                    </Text>
                    <Text
                      className="mt-[23px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Aldoks-kosa(Silver)
                    </Text>
                    <Text
                      className="mt-[19px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Aldoks-kosa(Silver)
                    </Text>
                    <Text
                      className="mt-[25px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Aldoks-kosa(Silver)
                    </Text>
                    <Text
                      className="mt-[25px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      PVH-kosa(Silver)
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[227px] text-red-300 text-xs"
                    size="txtRobotoMedium12Red300"
                  >
                    Jami:
                  </Text>
                </div>
                <div className="absolute flex flex-col items-center justify-start left-[41%] top-[2%] w-[4%]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Narxi
                    </Text>
                    <Text
                      className="mt-11 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      70 000
                    </Text>
                    <Text
                      className="mt-[23px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      80 000
                    </Text>
                    <Text
                      className="mt-[19px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      95 000
                    </Text>
                    <Text
                      className="mt-[25px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      105 000
                    </Text>
                    <Text
                      className="mt-[26px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      125 000
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[27px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      135 000
                    </Text>
                    <Text
                      className="mt-[23px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      203 000
                    </Text>
                    <Text
                      className="mt-[19px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      205 000
                    </Text>
                    <Text
                      className="mt-[25px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      206 000
                    </Text>
                    <Text
                      className="mt-[26px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      100 000
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[26px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      72 000
                    </Text>
                    <Text
                      className="mt-[23px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      80 000
                    </Text>
                    <Text
                      className="mt-[19px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      90 000
                    </Text>
                    <Text
                      className="mt-[25px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      90 000
                    </Text>
                    <Text
                      className="mt-[26px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      90 000
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[37%] w-[4%]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Summasi
                    </Text>
                    <Text
                      className="mt-[25px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      210 000
                    </Text>
                    <Text
                      className="mt-[23px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      160 000
                    </Text>
                    <Text
                      className="mt-[19px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      190 000
                    </Text>
                    <Text
                      className="mt-[25px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      420 000
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[68px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      405 000
                    </Text>
                    <Text
                      className="mt-[23px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      406 000
                    </Text>
                    <Text
                      className="mt-[59px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      824 000
                    </Text>
                    <Text
                      className="mt-[26px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      100 000
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[26px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      216 000
                    </Text>
                    <Text
                      className="mt-[57px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      180 000
                    </Text>
                    <Text
                      className="mt-[25px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      360 000
                    </Text>
                    <Text
                      className="mt-[26px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      90 000
                    </Text>
                    <Text
                      className="mt-5 text-red-300 text-xs"
                      size="txtRobotoMedium12Red300"
                    >
                      9 000 000
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[20%] w-[4%]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Summasi
                    </Text>
                    <Text
                      className="mt-[178px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      125 000
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[27px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      405 000
                    </Text>
                    <Text
                      className="mt-[23px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      406 000
                    </Text>
                    <Text
                      className="mt-[19px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      410 000
                    </Text>
                    <Text
                      className="mt-[25px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      824 000
                    </Text>
                    <Text
                      className="mt-[255px] text-red-300 text-xs"
                      size="txtRobotoMedium12Red300"
                    >
                      4 240 000
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col items-center justify-start left-[33%] top-[2%] w-[4%]">
                  <div className="flex flex-col gap-10 justify-start w-full">
                    <Text
                      className="mr-[17px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Soni
                    </Text>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[33px]">
                      <Text
                        className="text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        3
                      </Text>
                      <Text
                        className="mt-[22px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        2
                      </Text>
                      <Text
                        className="mt-[19px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        2
                      </Text>
                      <Text
                        className="mt-[25px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        4
                      </Text>
                      <Text
                        className="mt-[25px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        1
                      </Text>
                      <Text
                        className="mt-[27px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        3
                      </Text>
                      <Text
                        className="mt-[22px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        2
                      </Text>
                      <Text
                        className="mt-[19px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        2
                      </Text>
                      <Text
                        className="mt-[25px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        4
                      </Text>
                      <Text
                        className="mt-[25px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        1
                      </Text>
                      <Text
                        className="mt-[26px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        3
                      </Text>
                      <Text
                        className="mt-[22px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        2
                      </Text>
                      <Text
                        className="mt-[19px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        2
                      </Text>
                      <Text
                        className="mt-[25px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        4
                      </Text>
                      <Text
                        className="mt-[25px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        1
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col items-center justify-start right-[45%] top-[5%] w-[3%]">
                  <div className="flex flex-col gap-[19px] justify-start w-full">
                    <Text
                      className="mr-[11px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Soni
                    </Text>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[27px]">
                      <Text
                        className="text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        3
                      </Text>
                      <Text
                        className="mt-[22px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        2
                      </Text>
                      <Text
                        className="mt-[19px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        2
                      </Text>
                      <Text
                        className="mt-[25px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        4
                      </Text>
                      <Text
                        className="mt-[67px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        2
                      </Text>
                      <Text
                        className="mt-[23px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        2
                      </Text>
                      <Text
                        className="mt-[59px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        4
                      </Text>
                      <Text
                        className="mt-[25px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        1
                      </Text>
                      <Text
                        className="mt-[26px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        3
                      </Text>
                      <Text
                        className="mt-14 text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        2
                      </Text>
                      <Text
                        className="mt-[25px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        4
                      </Text>
                      <Text
                        className="mt-[25px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        1
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col items-center justify-start right-[27%] top-[5%] w-[3%]">
                  <div className="flex flex-col md:gap-10 gap-[172px] justify-start w-full">
                    <Text
                      className="mr-[11px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Soni
                    </Text>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[27px]">
                      <Text
                        className="text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        1
                      </Text>
                      <Text
                        className="mt-[27px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        1
                      </Text>
                      <Text
                        className="mt-[22px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        2
                      </Text>
                      <Text
                        className="mt-[19px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        2
                      </Text>
                      <Text
                        className="mt-[25px] text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        4
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[2%] my-auto">
                  <Text
                    className="text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    01
                  </Text>
                  <Text
                    className="mt-6 text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    02
                  </Text>
                  <Text
                    className="mt-5 text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    03
                  </Text>
                  <Text
                    className="mt-[19px] text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    04
                  </Text>
                  <Text
                    className="mt-[26px] text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    05
                  </Text>
                  <Text
                    className="mt-[26px] text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    06
                  </Text>
                  <Text
                    className="mt-[26px] text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    07
                  </Text>
                  <Text
                    className="mt-[19px] text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    08
                  </Text>
                  <Text
                    className="mt-6 text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    09
                  </Text>
                  <Text
                    className="mt-[26px] text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    10
                  </Text>
                  <Text
                    className="mt-[26px] text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    11
                  </Text>
                  <Text
                    className="mt-[22px] text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    12
                  </Text>
                  <Text
                    className="mt-[18px] text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    13
                  </Text>
                  <Text
                    className="mt-6 text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    14
                  </Text>
                  <Text
                    className="mt-[26px] text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    15
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OmborQabultarixiBuyurtmalarroyhatiTwoPage;
