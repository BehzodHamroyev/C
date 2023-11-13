import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const ShowroomumumiytolovtarixiPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto p-[29px] sm:px-5 w-full"
          style={{
            backgroundImage: "url('images/img_showroombuyurtmalar.png')",
          }}
        >
          <div className="flex md:flex-col flex-row md:gap-11 items-start justify-between max-w-[1363px] mb-[35px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[98px] justify-start md:mt-0 mt-[27px] w-[15%] md:w-full">
              <Img
                className="common-pointer h-[82px] md:ml-[0] ml-[9px]"
                src="images/img_group834.svg"
                alt="groupSeventySix"
                onClick={() => navigate("/showroomtolovlarhisobi")}
              />
              <div className="flex flex-col gap-[30px] items-start justify-start w-[93%] md:w-full">
                <div className="flex flex-row gap-[21px] items-center justify-start w-[72%] md:w-full">
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
                <div className="flex flex-row gap-[26px] items-start justify-start w-[90%] md:w-full">
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                  <Text
                    className="mt-[3px] text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    Buyurtmalar
                  </Text>
                </div>
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bipersonworkspace.svg"
                    alt="bipersonworkspa"
                  />
                  <Text
                    className="text-blue_gray-500 text-sm uppercase"
                    size="txtRobotoMedium14"
                  >
                    <>Mijozlar ro\&#96;yhati</>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start w-[83%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[127px] items-center justify-start w-[94%] md:w-full">
                <FrameFiftyTwoDatafiltr className="flex md:flex-col flex-row gap-[17px] items-center justify-between w-[68%] md:w-full" />
                <div className="flex flex-row items-end justify-between w-[21%] md:w-full">
                  <div className="flex flex-col h-[38px] items-center justify-start w-[38px]">
                    <Img
                      className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                      src="images/img_il1588xn1.png"
                      alt="il1588xnOne"
                    />
                  </div>
                  <Text
                    className="mb-[3px] mt-[7px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-500"
                    size="txtRobotoMedium23"
                  >
                    Operator ismi
                  </Text>
                  <Img
                    className="h-[7px] my-[15px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
              </div>
              <div className="md:h-[1591px] h-[737px] sm:h-[774px] ml-0.5 md:ml-[0] relative w-full">
                <div className="md:h-[731px] h-[737px] sm:h-[774px] m-auto w-full">
                  <div className="absolute bg-blue_gray-900_87_01 flex flex-col h-full inset-[0] justify-center m-auto py-5 rounded-[5px] w-full">
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
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-[19px] w-full" />
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[33px] items-end justify-start mb-[18px] md:ml-[0] ml-[371px] mt-[582px] p-0.5 w-[33%] md:w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_group71_gray_900.svg')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-end mr-[7px] w-[86%] md:w-full">
                        <Text
                          className="text-gray-400 text-sm"
                          size="txtRobotoMedium14Gray400"
                        >
                          1
                        </Text>
                        <Text
                          className="ml-[31px] text-gray-400 text-sm"
                          size="txtRobotoMedium14Gray400"
                        >
                          2
                        </Text>
                        <Text
                          className="ml-[30px] text-gray-400 text-sm"
                          size="txtRobotoMedium14Gray400"
                        >
                          3
                        </Text>
                        <Text
                          className="ml-[30px] text-gray-400 text-sm"
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
                          className="ml-7 text-gray-400 text-sm"
                          size="txtRobotoMedium14Gray400"
                        >
                          6
                        </Text>
                        <Text
                          className="ml-[30px] text-gray-400 text-sm"
                          size="txtRobotoMedium14Gray400"
                        >
                          7
                        </Text>
                        <Text
                          className="ml-[29px] text-gray-400 text-sm"
                          size="txtRobotoMedium14Gray400"
                        >
                          8
                        </Text>
                        <Img
                          className="h-[9px] ml-8"
                          src="images/img_line3.svg"
                          alt="lineThree"
                        />
                      </div>
                    </div>
                  </div>
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[17%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[23%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[29%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[35%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[42%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-[0] justify-center m-auto w-full" />
                  <Line className="absolute bg-blue_gray-800_01 bottom-[45%] h-0.5 inset-x-[0] mx-auto w-full" />
                  <Line className="absolute bg-blue_gray-800_01 bottom-[39%] h-0.5 inset-x-[0] mx-auto w-full" />
                  <Line className="absolute bg-blue_gray-800_01 bottom-[14%] h-0.5 inset-x-[0] mx-auto w-full" />
                  <Line className="absolute bg-blue_gray-800_01 bottom-[33%] h-0.5 inset-x-[0] mx-auto w-full" />
                  <Line className="absolute bg-blue_gray-800_01 bottom-[26%] h-0.5 inset-x-[0] mx-auto w-full" />
                  <Line className="absolute bg-blue_gray-800_03 bottom-[20%] h-0.5 inset-x-[0] mx-auto w-full" />
                </div>
                <div className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto top-[13%] w-[93%]">
                  <List
                    className="sm:flex-col flex-row gap-[18px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[69%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start sm:ml-[0] sm:mt-0 mt-[47px] w-full">
                      <Text
                        className="text-blue_gray-500 text-xs"
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
                        className="mt-8 text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        004
                      </Text>
                      <Text
                        className="mt-8 text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        005
                      </Text>
                      <Text
                        className="mt-[30px] text-blue_gray-500 text-xs"
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
                    </div>
                    <div className="flex flex-col items-start justify-start sm:ml-[0] w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Ismi
                      </Text>
                      <Text
                        className="mt-7 text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Botir Qodirov
                      </Text>
                      <Text
                        className="mt-[25px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Sobir Ikromov
                      </Text>
                      <Text
                        className="mt-[27px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        <>Maftuna To\&#96;lanboyeva</>
                      </Text>
                      <Text
                        className="mt-[29px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Nodir Fayziyev
                      </Text>
                      <Text
                        className="mt-[27px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Fahriddin Mahmudov
                      </Text>
                      <Text
                        className="mt-[27px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Shukurillo Avdusalomov
                      </Text>
                      <Text
                        className="mt-[27px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Saida Komilova
                      </Text>
                      <Text
                        className="mt-[27px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Mohira Abdumalikov
                      </Text>
                      <Text
                        className="mt-[29px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Umarjon Mahkamjonov
                      </Text>
                      <Text
                        className="mt-[27px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Salohiddin Mahkamjonov
                      </Text>
                      <Text
                        className="mt-6 text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Saida Komilova
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start sm:ml-[0] w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Kimdan
                      </Text>
                      <Text
                        className="mt-[29px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        <>O\&#96;lchovchi</>
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Mijoz
                      </Text>
                      <Text
                        className="mt-7 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Mijoz
                      </Text>
                      <Text
                        className="mt-8 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Mijoz
                      </Text>
                      <Text
                        className="mt-8 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Mijoz
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Mijoz
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Mijoz
                      </Text>
                      <Text
                        className="mt-[29px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        <>O\&#96;lchovchi</>
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        <>O\&#96;lchovchi</>
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        <>O\&#96;lchovchi</>
                      </Text>
                      <Text
                        className="mt-7 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        <>O\&#96;lchovchi</>
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start sm:ml-[0] w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Showroom operatori
                      </Text>
                      <Text
                        className="mt-7 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Botirov F.
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Alijonov D.
                      </Text>
                      <Text
                        className="mt-[27px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Botirov F.
                      </Text>
                      <Text
                        className="mt-[33px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Alijonov D.
                      </Text>
                      <Text
                        className="mt-8 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Alijonov D.
                      </Text>
                      <Text
                        className="mt-[29px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Botirov F.
                      </Text>
                      <Text
                        className="mt-[31px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Alijonov D.
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Alijonov D.
                      </Text>
                      <Text
                        className="mt-[29px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Botirov F.
                      </Text>
                      <Text
                        className="mt-[31px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Alijonov D.
                      </Text>
                      <Text
                        className="mt-7 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Alijonov D.
                      </Text>
                    </div>
                  </List>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[79px] grid grid-cols-2 w-1/4 md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        <>To\&#96;lov summasi</>
                      </Text>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          86 000 000
                        </Text>
                        <Text
                          className="mt-[29px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          32 500 000
                        </Text>
                        <Text
                          className="mt-7 text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          8 000 000
                        </Text>
                        <Text
                          className="mt-8 text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          9 650 000
                        </Text>
                        <Text
                          className="mt-8 text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          7 650 000
                        </Text>
                        <Text
                          className="mt-[30px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          9 650 000
                        </Text>
                        <Text
                          className="mt-[30px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          3 530 000
                        </Text>
                        <Text
                          className="mt-[30px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          1 120 000
                        </Text>
                        <Text
                          className="mt-[30px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          1 745 000
                        </Text>
                        <Text
                          className="mt-[30px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          7 532 000
                        </Text>
                        <Text
                          className="mt-7 text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          3 120 000
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[27px] items-center justify-start w-full">
                      <Text
                        className="text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Sana
                      </Text>
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Sen 11. 2022
                        </Text>
                        <Text
                          className="mt-[30px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Sen 12. 2022
                        </Text>
                        <Text
                          className="mt-7 text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Sen 12. 2022
                        </Text>
                        <Text
                          className="mt-8 text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Sen 12. 2022
                        </Text>
                        <Text
                          className="mt-[31px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Sen 12. 2022
                        </Text>
                        <Text
                          className="mt-[31px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Sen 12. 2022
                        </Text>
                        <Text
                          className="mt-[30px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Sen 12. 2022
                        </Text>
                        <Text
                          className="mt-[30px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Sen 13. 2022
                        </Text>
                        <Text
                          className="mt-[31px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Sen 13. 2022
                        </Text>
                        <Text
                          className="mt-[30px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Sen 13. 2022
                        </Text>
                        <Text
                          className="mt-7 text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Sen 13. 2022
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex md:h-[146px] h-[149px] inset-y-[0] justify-end left-[0] my-auto md:px-5 w-1/5">
          <Img
            className="h-[60px] mb-[17px] mt-auto mx-auto object-cover w-full"
            src="images/img_rectangle1565.png"
            alt="rectangle1565"
          />
          <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-start justify-center m-auto pr-[17px] py-[17px] w-full">
            <div className="flex flex-col gap-[18px] justify-start mt-[15px] w-[97%] md:w-full">
              <div className="flex flex-row items-start justify-end md:ml-[0] ml-[42px] w-[84%] md:w-full">
                <Img
                  className="h-5"
                  src="images/img_calculator_white_a700.svg"
                  alt="calculator"
                />
                <Text
                  className="ml-[17px] mt-0.5 text-sm text-white-A700 uppercase"
                  size="txtRobotoMedium14WhiteA700"
                >
                  <>To\&#96;lov qabul qilish</>
                </Text>
                <Img
                  className="h-1 ml-[11px] mt-2"
                  src="images/img_line49.svg"
                  alt="lineFortyNine"
                />
              </div>
              <div className="flex flex-row gap-[74px] items-center justify-start mr-4 w-[94%] md:w-full">
                <Img
                  className="h-[60px] md:h-auto object-cover w-[6%]"
                  src="images/img_rectangle1564_9.png"
                  alt="rectangle1564"
                />
                <Text
                  className="text-base text-white-A700"
                  size="txtRobotoMedium16WhiteA700"
                >
                  <>Kassaga to\&#96;lov tarixi </>
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowroomumumiytolovtarixiPage;
