import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import MoliyaKassaRowsaralash from "components/MoliyaKassaRowsaralash";

const MoliyaBuyurtmagachiqimtarixiPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div className="md:h-[2471px] h-[899px] m-auto md:px-5 w-full">
          <div className="md:h-[2471px] h-[899px] m-auto w-full">
            <Img
              className="absolute h-[899px] inset-[0] justify-center m-auto object-cover w-full"
              src="images/img_global1_4.png"
              alt="globalOne"
            />
            <div className="absolute flex flex-col md:gap-10 gap-[88px] justify-start left-[2%] top-[6%] w-[17%]">
              <Img
                className="h-[82px] md:ml-[0] ml-[17px]"
                src="images/img_group834.svg"
                alt="groupSeventySix"
              />
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row gap-[25px] items-center justify-start w-[56%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icoutlineshop.svg"
                    alt="icoutlineshop"
                  />
                  <Text
                    className="text-blue_gray-500 text-sm"
                    size="txtRobotoMedium14"
                  >
                    DASHBOARD
                  </Text>
                </div>
                <div className="flex flex-row gap-[21px] items-start justify-start ml-1 md:ml-[0] mt-6 w-[68%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_blue_gray_500.svg"
                    alt="arrowdown"
                  />
                  <Text
                    className="text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    BUYURTMALAR
                  </Text>
                </div>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[89px] ml-1 md:ml-[0] mt-[27px]"
                  onClick={() => navigate("/moliyakirimqilishfour")}
                  leftIcon={
                    <div className="mr-[13px] bg-blue_gray-500">
                      <Img
                        src="images/img_settings_blue_gray_500.svg"
                        alt="settings"
                      />
                    </div>
                  }
                >
                  <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
                    Kirim{" "}
                  </div>
                </Button>
                <div className="flex flex-row gap-5 items-start justify-start ml-1 md:ml-[0] mt-[204px] w-[98%] md:w-full">
                  <Img
                    className="h-6"
                    src="images/img_minimize.svg"
                    alt="minimize"
                  />
                  <Text
                    className="text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    Valyuta ayriboshlash
                  </Text>
                </div>
                <div className="flex flex-row gap-6 items-start justify-start md:ml-[0] ml-[3px] mt-[31px] w-[86%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_fluentclipboar.svg"
                    alt="fluentclipboar"
                  />
                  <Text
                    className="mt-[3px] text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    <>Hodimlar ro\&#96;yhati</>
                  </Text>
                </div>
                <div className="flex flex-row gap-[22px] items-start justify-start ml-1 md:ml-[0] mt-[33px] w-[56%] md:w-full">
                  <Img
                    className="h-[21px]"
                    src="images/img_union_blue_gray_500.svg"
                    alt="union"
                  />
                  <Text
                    className="mt-1 text-blue_gray-500 text-sm uppercase"
                    size="txtRobotoMedium14"
                  >
                    qarzdorlik
                  </Text>
                </div>
                <div className="flex flex-row gap-[27px] items-center justify-start ml-1 md:ml-[0] mt-[33px] w-[89%] md:w-full">
                  <Img
                    className="h-[19px] w-[19px]"
                    src="images/img_ticket.svg"
                    alt="ticket"
                  />
                  <Text
                    className="text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    Mahsulot narxlari{" "}
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute flex md:flex-col flex-row md:gap-10 items-start justify-between right-[5%] top-[3%] w-[76%]">
              <MoliyaKassaRowsaralash className="flex md:flex-col flex-row gap-[17px] items-center justify-between w-[66%] md:w-full" />
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
                  alt="arrowdown_One"
                />
              </div>
            </div>
            <Line className="absolute bg-blue_gray-900 bottom-[38%] h-[52px] left-[39%] w-px" />
            <div className="absolute bg-blue_gray-900_87_01 bottom-[5%] flex flex-col gap-6 justify-start py-6 right-[3%] rounded-[5px] w-[79%]">
              <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-start md:ml-[0] ml-[19px] w-[37%] md:w-full">
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
              <div className="flex flex-col items-center justify-start mb-[68px] w-full">
                <Line className="bg-blue_gray-800_01 h-0.5 w-full" />
                <div className="md:h-[2276px] h-[563px] relative w-full">
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Line className="bg-blue_gray-800_01 h-0.5 w-full" />
                      <Line className="bg-blue_gray-800_01 h-0.5 mt-[43px] w-full" />
                      <Line className="bg-blue_gray-800_01 h-0.5 mt-[42px] w-full" />
                      <Line className="bg-blue_gray-800_01 h-0.5 mt-[41px] w-full" />
                      <Line className="bg-blue_gray-800_01 h-0.5 mt-11 w-full" />
                      <Line className="bg-blue_gray-800_01 h-0.5 mt-11 w-full" />
                      <Line className="bg-blue_gray-800_01 h-0.5 mt-[43px] w-full" />
                      <Line className="bg-blue_gray-800_01 h-0.5 mt-[43px] w-full" />
                      <Line className="bg-blue_gray-800_01 h-0.5 mt-[43px] w-full" />
                      <Line className="bg-blue_gray-800_01 h-0.5 mt-[43px] w-full" />
                      <Line className="bg-blue_gray-800_03 h-0.5 mt-[43px] w-full" />
                      <Line className="bg-blue_gray-800_01 h-0.5 mt-[41px] w-full" />
                    </div>
                  </div>
                  <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto w-[94%]">
                    <List
                      className="sm:flex-col flex-row gap-[18px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 w-3/4 md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-start justify-start w-full">
                        <Img
                          className="h-[15px] md:h-auto object-cover w-[58%] sm:w-full"
                          src="images/img_.png"
                          alt="OneHundredEleven"
                        />
                        <Text
                          className="mt-7 text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          001
                        </Text>
                        <Text
                          className="mt-[29px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          002
                        </Text>
                        <Text
                          className="mt-7 text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          003
                        </Text>
                        <Text
                          className="mt-[31px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          004
                        </Text>
                        <Text
                          className="mt-[31px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          005
                        </Text>
                        <Text
                          className="mt-[29px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          006
                        </Text>
                        <Text
                          className="mt-[30px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          007
                        </Text>
                        <Text
                          className="mt-[30px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          008
                        </Text>
                        <Text
                          className="mt-[30px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          009
                        </Text>
                        <Text
                          className="mt-[30px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          010
                        </Text>
                        <Text
                          className="mt-7 text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          011
                        </Text>
                        <Text
                          className="mt-[30px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          012
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Buyurtma №
                        </Text>
                        <Text
                          className="mt-[25px] text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          № 1001
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          № 1002
                        </Text>
                        <Text
                          className="mt-[25px] text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          № 1003
                        </Text>
                        <Text
                          className="mt-7 text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          № 1004
                        </Text>
                        <Text
                          className="mt-7 text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          № 1005
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          № 1006
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          № 1007
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          № 1008
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          № 1009
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          № 1010
                        </Text>
                        <Text
                          className="mt-[25px] text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          № 1011
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          № 1012
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Narxi
                        </Text>
                        <Text
                          className="mt-7 text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          92 000 000
                        </Text>
                        <Text
                          className="mt-[29px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          92 000 000
                        </Text>
                        <Text
                          className="mt-7 text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          92 000 000
                        </Text>
                        <Text
                          className="mt-[31px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          92 000 000
                        </Text>
                        <Text
                          className="mt-[31px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          92 000 000
                        </Text>
                        <Text
                          className="mt-[29px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          92 000 000
                        </Text>
                        <Text
                          className="mt-[30px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          92 000 000
                        </Text>
                        <Text
                          className="mt-[30px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          92 000 000
                        </Text>
                        <Text
                          className="mt-[30px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          92 000 000
                        </Text>
                        <Text
                          className="mt-[30px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          92 000 000
                        </Text>
                        <Text
                          className="mt-7 text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          92 000 000
                        </Text>
                        <Text
                          className="mt-[30px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          92 000 000
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Akfa yuki
                        </Text>
                        <Text
                          className="mt-7 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          43 497 566
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          43 497 566
                        </Text>
                        <Text
                          className="mt-[25px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          43 497 566
                        </Text>
                        <Text
                          className="mt-7 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          43 497 566
                        </Text>
                        <Text
                          className="mt-7 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          43 497 566
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          43 497 566
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          43 497 566
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          43 497 566
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          43 497 566
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          43 497 566
                        </Text>
                        <Text
                          className="mt-[25px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          43 497 566
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          43 497 566
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Oyna{" "}
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          11 563 040
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          11 563 040
                        </Text>
                        <Text
                          className="mt-[25px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          11 563 040
                        </Text>
                        <Text
                          className="mt-7 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          11 563 040
                        </Text>
                        <Text
                          className="mt-7 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          11 563 040
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          11 563 040
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          11 563 040
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          11 563 040
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          11 563 040
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          11 563 040
                        </Text>
                        <Text
                          className="mt-[25px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          11 563 040
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          11 563 040
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Chiqimlar{" "}
                        </Text>
                        <Text
                          className="mt-7 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          723 000
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          723 000
                        </Text>
                        <Text
                          className="mt-[25px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          723 000
                        </Text>
                        <Text
                          className="mt-7 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          723 000
                        </Text>
                        <Text
                          className="mt-7 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          723 000
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          723 000
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          723 000
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          723 000
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          723 000
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          723 000
                        </Text>
                        <Text
                          className="mt-[25px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          723 000
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          723 000
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Daromad
                        </Text>
                        <Text
                          className="mt-[29px] text-[15px] text-light_green-400"
                          size="txtRobotoMedium15"
                        >
                          36 216 395
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-light_green-400"
                          size="txtRobotoMedium15"
                        >
                          36 216 395
                        </Text>
                        <Text
                          className="mt-[25px] text-[15px] text-light_green-400"
                          size="txtRobotoMedium15"
                        >
                          36 216 395
                        </Text>
                        <Text
                          className="mt-7 text-[15px] text-light_green-400"
                          size="txtRobotoMedium15"
                        >
                          36 216 395
                        </Text>
                        <Text
                          className="mt-7 text-[15px] text-light_green-400"
                          size="txtRobotoMedium15"
                        >
                          36 216 395
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-light_green-400"
                          size="txtRobotoMedium15"
                        >
                          36 216 395
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-light_green-400"
                          size="txtRobotoMedium15"
                        >
                          36 216 395
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-light_green-400"
                          size="txtRobotoMedium15"
                        >
                          36 216 395
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-light_green-400"
                          size="txtRobotoMedium15"
                        >
                          36 216 395
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-light_green-400"
                          size="txtRobotoMedium15"
                        >
                          36 216 395
                        </Text>
                        <Text
                          className="mt-[25px] text-[15px] text-light_green-400"
                          size="txtRobotoMedium15"
                        >
                          36 216 395
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-light_green-400"
                          size="txtRobotoMedium15"
                        >
                          36 216 395
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          %
                        </Text>
                        <Text
                          className="mt-[29px] text-[15px] text-orange-300"
                          size="txtRobotoMedium15Orange300"
                        >
                          39%
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-orange-300"
                          size="txtRobotoMedium15Orange300"
                        >
                          39%
                        </Text>
                        <Text
                          className="mt-[25px] text-[15px] text-orange-300"
                          size="txtRobotoMedium15Orange300"
                        >
                          39%
                        </Text>
                        <Text
                          className="mt-7 text-[15px] text-orange-300"
                          size="txtRobotoMedium15Orange300"
                        >
                          39%
                        </Text>
                        <Text
                          className="mt-7 text-[15px] text-orange-300"
                          size="txtRobotoMedium15Orange300"
                        >
                          39%
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-orange-300"
                          size="txtRobotoMedium15Orange300"
                        >
                          39%
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-orange-300"
                          size="txtRobotoMedium15Orange300"
                        >
                          39%
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-orange-300"
                          size="txtRobotoMedium15Orange300"
                        >
                          39%
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-orange-300"
                          size="txtRobotoMedium15Orange300"
                        >
                          39%
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-orange-300"
                          size="txtRobotoMedium15Orange300"
                        >
                          39%
                        </Text>
                        <Text
                          className="mt-[25px] text-[15px] text-orange-300"
                          size="txtRobotoMedium15Orange300"
                        >
                          39%
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-orange-300"
                          size="txtRobotoMedium15Orange300"
                        >
                          39%
                        </Text>
                      </div>
                    </List>
                    <Button
                      className="flex h-[29px] items-center justify-center mb-[534px] md:ml-[0] ml-[30px] rounded-sm w-[29px]"
                      shape="round"
                      color="blue_gray_800_07"
                      size="sm"
                      variant="fill"
                    >
                      <Img src="images/img_group462.svg" alt="group462" />
                    </Button>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[91px] w-[12%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="ml-0.5 md:ml-[0] text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Izoh
                        </Text>
                        <div className="flex flex-row items-center justify-evenly mt-[25px] w-full">
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Izoh yozish kerak
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-evenly mt-[23px] w-full">
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Izoh yozish kerak
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_One"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-evenly mt-[19px] w-full">
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Izoh yozish kerak
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_Two"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-evenly mt-[22px] w-full">
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Izoh yozish kerak
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_Three"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-evenly mt-[22px] w-full">
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Izoh yozish kerak
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_Four"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-evenly mt-[17px] w-full">
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Izoh yozish kerak
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_Five"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-evenly mt-[22px] w-full">
                          <Text
                            className="mt-[3px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Izoh yozish kerak
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_Six"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-evenly mt-5 w-full">
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Izoh yozish kerak
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_Seven"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-evenly mt-6 w-full">
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Izoh yozish kerak
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_Eight"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-evenly mt-[17px] w-full">
                          <Text
                            className="mt-1 text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Izoh yozish kerak
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_Nine"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-evenly mt-5 w-full">
                          <Text
                            className="mt-[3px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Izoh yozish kerak
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_Ten"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-evenly mt-5 w-full">
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Izoh yozish kerak
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_Eleven"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Line className="bg-blue_gray-800_01 h-0.5 mt-[11px] w-full" />
              </div>
            </div>
          </div>
          <div className="absolute bg-blue_gray-800_7e flex flex-col h-max inset-y-[0] items-center justify-end left-[0] my-auto pt-[31px] w-1/5">
            <div className="flex flex-row items-start justify-end w-[78%] md:w-full">
              <Img
                className="h-[21px]"
                src="images/img_camera.svg"
                alt="camera"
              />
              <Text
                className="ml-7 mt-[3px] text-base text-white-A700 uppercase"
                size="txtRobotoMedium16WhiteA700"
              >
                CHIQIM{" "}
              </Text>
              <Img
                className="h-1 ml-[89px] mt-[9px]"
                src="images/img_line49.svg"
                alt="lineFortyNine"
              />
            </div>
            <Text
              className="common-pointer mt-[23px] text-base text-white-A700"
              size="txtRobotoMedium16WhiteA700"
              onClick={() => navigate("/moliyachiqimtarixieight")}
            >
              Chiqim tarixi
            </Text>
            <div className="bg-blue_gray-800_7e flex flex-col items-end justify-end mt-[11px] p-[18px] w-full">
              <Text
                className="mr-[30px] mt-[3px] text-base text-white-A700"
                size="txtRobotoMedium16WhiteA700"
              >
                Buyurtmaga chiqim
              </Text>
            </div>
          </div>
        </div>
        <Img
          className="absolute bottom-[40%] h-[60px] left-[0] object-cover w-[1%]"
          src="images/img_rectangle1564_26.png"
          alt="rectangle1564"
        />
      </div>
    </>
  );
};

export default MoliyaBuyurtmagachiqimtarixiPage;
