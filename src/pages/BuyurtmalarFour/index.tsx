import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Line, List, Text } from "components";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const BuyurtmalarFourPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-roboto h-[1249px] mx-auto pb-[163px] relative w-full">
        <div className="absolute h-[900px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <div className="h-[900px] m-auto w-full">
            <Img
              className="h-[900px] m-auto object-cover w-full"
              src="images/img_showroombuyurtmalar.png"
              alt="globalOne"
            />
            <header className="absolute bg-gray-900 flex flex-col items-center justify-center right-[0] top-[0] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center mb-20 md:ml-[0] ml-[923px] mr-[69px] mt-[29px] w-[16%]">
                <div className="h-[38px] relative w-[38px]">
                  <Img
                    className="h-[38px] m-auto rounded-[50%] w-[38px]"
                    src="images/img_il1588xn1_1.png"
                    alt="il1588xnOne"
                  />
                  <Img
                    className="absolute h-[38px] inset-[0] justify-center m-auto rounded-[50%] w-[38px]"
                    src="images/img_il1588xn2.png"
                    alt="il1588xnTwo"
                  />
                </div>
                <Text
                  className="md:ml-[0] ml-[11px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-500"
                  size="txtRobotoMedium23"
                >
                  Filter
                </Text>
                <Img
                  className="h-[7px] md:ml-[0] ml-[60px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
            </header>
          </div>
          <div className="absolute flex flex-col gap-[26px] items-start justify-start left-[3%] top-[2%] w-[21%]">
            <div className="flex flex-row gap-5 items-center justify-start w-[86%] md:w-full">
              <Img
                className="common-pointer h-[33px] w-[33px]"
                src="images/img_arrowleft_blue_400.svg"
                alt="arrowleft"
                onClick={() => navigate(-1)}
              />
              <div className="flex flex-col items-center justify-start w-4/5">
                <div className="bg-blue_gray-900 flex flex-col items-center justify-start rounded-[5px] shadow-bs4 w-full">
                  <OmborTaminotchigaZayavkaOneTab
                    className="flex flex-col items-center justify-start rounded-[5px] w-[205px]"
                    username={<>Materiallar ro\&#96;yhati</>}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-evenly w-full">
              <Text
                className="text-base text-white-A700"
                size="txtRobotoMedium16WhiteA700"
              >
                Buyurtmalar{" "}
              </Text>
              <Img
                className="h-[11px] mt-[5px]"
                src="images/img_line108.svg"
                alt="line108"
              />
              <Text
                className="text-base text-white-A700"
                size="txtRobotoMedium16WhiteA700"
              >
                № 1025
              </Text>
              <Img
                className="h-[11px] mt-[5px]"
                src="images/img_line108.svg"
                alt="line109"
              />
              <Text
                className="text-base text-white-A700"
                size="txtRobotoMedium16WhiteA700"
              >
                <>Materiallar ro\&#96;yhati</>
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-800 flex flex-col items-center justify-start md:px-5 py-[164px] right-[0] rounded-[3px] top-[14%] w-[1%]">
          <div className="bg-blue_gray-500 h-[27px] mb-[421px] rounded-[3px] w-full"></div>
        </div>
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto max-w-[1356px] md:px-5 w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <div className="md:h-[2264px] h-[555px] relative w-full">
              <div className="absolute bg-blue_gray-900_87_01 flex flex-row h-full inset-[0] items-center justify-center m-auto p-2.5 rounded-[5px] w-full">
                <div className="flex flex-row md:gap-10 items-center justify-between mb-[493px] ml-2.5 w-[99%]">
                  <Text
                    className="text-base text-white-A700"
                    size="txtRobotoMedium16WhiteA700"
                  >
                    Profil
                  </Text>
                  <div className="flex flex-col items-center justify-start sm:w-full">
                    <Input
                      name="buttonadd"
                      placeholder="Exselga olish"
                      className="font-medium p-0 placeholder:text-blue-400 text-center text-sm tracking-[0.14px] uppercase w-full"
                      wrapClassName="border border-blue_gray-600 border-solid flex rounded-[5px] w-full"
                      suffix={
                        <Img
                          className="ml-4 my-auto"
                          src="images/img_vscodeiconsfiletypeexcel.svg"
                          alt="vscode-icons:file-type-excel"
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
              <div
                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[487px] inset-x-[0] items-center justify-end mx-auto p-[7px] w-full"
                style={{ backgroundImage: "url('images/img_group603.svg')" }}
              >
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-0.5 w-[97%] md:w-full">
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-[41px]">
                    <Text
                      className="text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      01
                    </Text>
                    <Text
                      className="mt-[65px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      02
                    </Text>
                    <Text
                      className="mt-[63px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      03
                    </Text>
                    <Text
                      className="mt-[74px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      04
                    </Text>
                    <Text
                      className="mt-[63px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      05
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[90px] grid grid-cols-3 md:ml-[0] ml-[35px] w-[29%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Profil nomi
                      </Text>
                      <Text
                        className="mt-[23px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Aldoks
                      </Text>
                      <Text
                        className="mt-[65px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Aldoks
                      </Text>
                      <Text
                        className="mt-[63px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Aldoks
                      </Text>
                      <Text
                        className="mt-[74px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Aldoks
                      </Text>
                      <Text
                        className="mt-[63px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Aldoks
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Artikul
                      </Text>
                      <Text
                        className="mt-[23px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        0601
                      </Text>
                      <Text
                        className="mt-[65px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        0602
                      </Text>
                      <Text
                        className="mt-[63px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        0603
                      </Text>
                      <Text
                        className="mt-[74px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        0604
                      </Text>
                      <Text
                        className="mt-[63px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        0605
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Rangi
                      </Text>
                      <Text
                        className="mt-[21px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Dub mocco
                      </Text>
                      <Text
                        className="mt-[65px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Dub mocco
                      </Text>
                      <Text
                        className="mt-[65px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Rangsiz
                      </Text>
                      <Text
                        className="mt-[74px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Rangsiz
                      </Text>
                      <Text
                        className="mt-[63px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Rangsiz
                      </Text>
                    </div>
                  </List>
                  <List
                    className="sm:flex-col flex-row gap-[47px] grid grid-cols-2 md:ml-[0] ml-[91px] w-[11%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        <>O\&#96;lcham</>
                      </Text>
                      <Text
                        className="mt-[23px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1600{" "}
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1200{" "}
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1200{" "}
                      </Text>
                      <Text
                        className="mt-[17px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1133{" "}
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1133{" "}
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        483{" "}
                      </Text>
                      <Text
                        className="mt-[15px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1199
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1228{" "}
                      </Text>
                      <Text
                        className="mt-[5px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1199{" "}
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1706{" "}
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1306{" "}
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1306{" "}
                      </Text>
                      <Text
                        className="mt-[15px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1253
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        603{" "}
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1253{" "}
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        603{" "}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[23px] items-end justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Soni
                      </Text>
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          3
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          4
                        </Text>
                        <Text
                          className="mt-1 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          2
                        </Text>
                        <Text
                          className="mt-[18px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          5
                        </Text>
                        <Text
                          className="mt-[5px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          1
                        </Text>
                        <Text
                          className="mt-[5px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6
                        </Text>
                        <Text
                          className="mt-4 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          2
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          3
                        </Text>
                        <Text
                          className="mt-1 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          1
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          3
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          4
                        </Text>
                        <Text
                          className="mt-1 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          2
                        </Text>
                        <Text
                          className="mt-4 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          4
                        </Text>
                        <Text
                          className="mt-[5px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          1
                        </Text>
                        <Text
                          className="mt-1 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          2
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          5
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[23px]">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Ombor
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[52px] w-[5%] md:w-full">
                    <div className="flex flex-row gap-[9px] items-start justify-between w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Gradus{" "}
                      </Text>
                      <Text
                        className="text-[6px] text-blue_gray-500"
                        size="txtRobotoMedium6"
                      >
                        o{" "}
                      </Text>
                    </div>
                    <Text
                      className="mt-[23px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      90 x90
                    </Text>
                    <Text
                      className="mt-1.5 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      90 x90
                    </Text>
                    <Text
                      className="mt-1.5 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      90 x90
                    </Text>
                    <Text
                      className="mt-[17px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      90 x90
                    </Text>
                    <Text
                      className="mt-1.5 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      90 x90
                    </Text>
                    <Text
                      className="mt-1.5 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      90 x90
                    </Text>
                    <Text
                      className="mt-[15px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      90 x90
                    </Text>
                    <Text
                      className="mt-1.5 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      90 x90
                    </Text>
                    <Text
                      className="mt-1.5 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      90 x90
                    </Text>
                    <Text
                      className="mt-[26px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      45 x 45
                    </Text>
                    <Text
                      className="mt-1.5 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      45 x 45
                    </Text>
                    <Text
                      className="mt-1.5 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      45 x 45
                    </Text>
                    <Text
                      className="mt-[15px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      45 x 45
                    </Text>
                    <Text
                      className="mt-1.5 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      45 x 45
                    </Text>
                    <Text
                      className="mt-1.5 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      45 x 45
                    </Text>
                    <Text
                      className="mt-1.5 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      45 x 45
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[86px] grid grid-cols-3 md:ml-[0] ml-[76px] w-[30%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Butun
                        </Text>
                        <Text
                          className="mt-[23px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6000 x 2
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6000 x 1
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6000 x 1
                        </Text>
                        <Text
                          className="mt-[17px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6000 x 1
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6000 x 1
                        </Text>
                        <Text
                          className="mt-[39px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6000 x 1
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6000 x 1
                        </Text>
                        <Text
                          className="mt-[50px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6000 x 2
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6000 x 1
                        </Text>
                        <Text
                          className="mt-[5px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6000 x 1
                        </Text>
                        <Text
                          className="mt-4 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6000 x 1
                        </Text>
                        <Text
                          className="mt-[30px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6000 x 1
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px]">
                          <Text
                            className="text-[15px] text-blue_gray-500"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            Qoldiq
                          </Text>
                          <Text
                            className="mt-[22px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            1190 x 2
                          </Text>
                          <Text
                            className="mt-1.5 text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            1190 x 1
                          </Text>
                          <Text
                            className="mt-1.5 text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            3590 x 1
                          </Text>
                          <Text
                            className="mt-[17px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            325 x 1
                          </Text>
                          <Text
                            className="mt-1.5 text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            1959 x 1
                          </Text>
                          <Text
                            className="mt-[39px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            3592 x 1
                          </Text>
                          <Text
                            className="mt-1.5 text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            1107 x 1
                          </Text>
                          <Text
                            className="mt-[50px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            872 x 1
                          </Text>
                          <Text
                            className="mt-1.5 text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            766 x 1
                          </Text>
                        </div>
                        <Text
                          className="mt-[5px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          3378 x 1
                        </Text>
                        <div className="flex flex-col gap-[30px] items-center justify-start md:ml-[0] ml-[9px] mt-4">
                          <Text
                            className="text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            375 x 1
                          </Text>
                          <Text
                            className="text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            469 x 1
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Qoldiq foizda
                        </Text>
                        <Text
                          className="mt-[22px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          20 %
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          20 %
                        </Text>
                        <Text
                          className="mt-[5px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          60 %
                        </Text>
                        <Text
                          className="mt-[18px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          60.3 %
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          32.82 %
                        </Text>
                        <Text
                          className="mt-[39px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          60.3 %
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          32.62 %
                        </Text>
                        <Text
                          className="mt-[50px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          14.7 %
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          12.93 %
                        </Text>
                        <Text
                          className="mt-[5px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          56.47 %
                        </Text>
                        <Text
                          className="mt-4 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          60.3 %
                        </Text>
                        <Text
                          className="mt-[30px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          32.62 %
                        </Text>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[23px] mt-[30px] text-base text-white-A700"
              size="txtRobotoMedium16WhiteA700"
            >
              Aksesuarlar
            </Text>
            <div className="flex flex-col items-center justify-start mt-[9px] w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[318px] items-center justify-start rounded-[5px] w-full"
                style={{ backgroundImage: "url('images/img_group732.svg')" }}
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[318px] items-start justify-start p-4 w-full"
                    style={{
                      backgroundImage: "url('images/img_group601.svg')",
                    }}
                  >
                    <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mb-12 ml-11 md:ml-[0] w-[64%] md:w-full">
                      <div className="flex flex-col items-start justify-start md:mt-0 mt-[69px] w-[3%] md:w-full">
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            01
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[35px] w-[17px] md:w-full">
                          <Text
                            className="text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            02
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[30px] w-[17px] md:w-full">
                          <Text
                            className="text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            03
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-7 w-[17px] md:w-full">
                          <Text
                            className="text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            04
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col gap-11 justify-start md:ml-[0] ml-[143px] md:mt-0 mt-1.5 w-[14%] md:w-full">
                        <Text
                          className="ml-7 md:ml-[0] text-[15px] text-blue_gray-500 text-center"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Aksesuar turi
                        </Text>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-[15px] text-center text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Eshik
                          </Text>
                          <Text
                            className="mt-9 text-[15px] text-center text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Rom
                          </Text>
                          <Text
                            className="mt-[30px] text-[15px] text-center text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Eshik
                          </Text>
                          <Text
                            className="mt-7 text-[15px] text-center text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Rom
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col justify-start md:ml-[0] ml-[207px] w-[15%] md:w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          <>O\&#96;rni</>
                        </Text>
                        <div className="flex flex-col gap-[35px] items-center justify-start ml-9 md:ml-[0] mt-[51px]">
                          <Text
                            className="text-[15px] text-center text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Dastak
                          </Text>
                          <Text
                            className="text-[15px] text-center text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Dastak
                          </Text>
                        </div>
                        <div className="flex flex-col gap-7 items-center justify-start md:ml-[0] ml-[27px] mt-[31px]">
                          <Text
                            className="text-[15px] text-center text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Oshiq-moshiq
                          </Text>
                          <Text
                            className="text-[15px] text-center text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Oshiq-moshiq
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[190px]">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Rangi
                        </Text>
                        <Text
                          className="mt-[49px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Golden
                        </Text>
                        <Text
                          className="mt-[35px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Golden
                        </Text>
                        <Text
                          className="mt-[30px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Golden
                        </Text>
                        <Text
                          className="mt-7 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Golden
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyurtmalarFourPage;
