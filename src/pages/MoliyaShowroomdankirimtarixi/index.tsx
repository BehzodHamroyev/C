import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import MoliyaKassaRowsaralash from "components/MoliyaKassaRowsaralash";
import Sidebar11 from "components/Sidebar11";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const toLovStatusiOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MoliyaShowroomdankirimtarixiPage: React.FC = () => {
  const navigate = useNavigate();

  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img className="h-6" src="images/img_minimize.svg" alt="minimize" />
      ),
      label: "Valyuta ayriboshlash",
      href: "/moliyavalyutaayriboshlash",
      active: window.location.pathname === "/moliyavalyutaayriboshlash",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_fluentclipboar.svg"
          alt="fluentclipboar"
        />
      ),
      label: "<>Hodimlar ro&#96;yhati</>",
    },
    {
      icon: (
        <Img
          className="h-[21px]"
          src="images/img_union_blue_gray_500.svg"
          alt="union"
        />
      ),
      label: "qarzdorlik",
    },
    {
      icon: (
        <Img
          className="h-[19px] w-[19px]"
          src="images/img_ticket.svg"
          alt="ticket"
        />
      ),
      label: "Mahsulot narxlari ",
    },
  ];

  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div className="absolute md:h-[2645px] sm:h-[899px] h-[900px] inset-[0] justify-center m-auto md:px-5 w-full">
          <Img
            className="h-[899px] m-auto object-cover w-full"
            src="images/img_global1_899x1439.png"
            alt="globalOne"
          />
          <div className="absolute flex md:flex-col flex-row gap-2 h-max inset-[0] items-start justify-center m-auto w-[97%]">
            <Sidebar11 className="!sticky !w-[238px] flex h-screen md:hidden justify-start md:mt-0 mt-[27px] overflow-auto top-[0]" />
            <div className="flex flex-1 flex-col gap-[31px] items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[96%] md:w-full">
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
                    alt="arrowdown_One"
                  />
                </div>
              </div>
              <div className="md:h-[1747px] h-[785px] sm:h-[845px] relative w-full">
                <div className="md:h-[772px] h-[785px] sm:h-[845px] m-auto w-full">
                  <div className="absolute bg-blue_gray-900_87_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[18px] rounded-[5px] w-full">
                    <div className="flex flex-col justify-start mt-3 w-[99%] md:w-full">
                      <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row gap-6 items-center justify-between w-[39%] sm:w-full">
                          <Img
                            className="h-[18px] w-[17px]"
                            src="images/img_refresh.svg"
                            alt="refresh"
                          />
                          <Input
                            name="group292"
                            placeholder="Izlash"
                            className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                            wrapClassName="sm:w-full"
                            shape="round"
                            color="blue_gray_800"
                            size="sm"
                            variant="fill"
                          ></Input>
                        </div>
                        <SelectBox
                          className="sm:flex-1 font-medium leading-[normal] text-base text-left w-[16%] sm:w-full"
                          placeholderClassName="text-gray-400"
                          indicator={
                            <Img
                              className="h-[3px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[7px]"
                              src="images/img_arrowdown_gray_400.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group726"
                          options={toLovStatusiOptionsList}
                          isSearchable={false}
                          placeholder="To&#96;lov statusi"
                          shape="round"
                          color="blue_gray_800"
                          size="xs"
                          variant="fill"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[207px] mt-[41px] w-[9%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="ml-0.5 md:ml-[0] text-[15px] text-blue_gray-500"
                                  size="txtRobotoMedium15Bluegray500"
                                >
                                  Loyiha nomeri
                                </Text>
                                <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-8 w-[83%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="NinetyTwo"
                                  />
                                  <Text
                                    className="text-[15px] text-blue_gray-500"
                                    size="txtRobotoMedium15Bluegray500"
                                  >
                                    120003
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[31px] w-[83%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="NinetyThree"
                                  />
                                  <Text
                                    className="text-[15px] text-blue_gray-500"
                                    size="txtRobotoMedium15Bluegray500"
                                  >
                                    120002
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[30px] w-[83%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="NinetyFour"
                                  />
                                  <Text
                                    className="text-[15px] text-blue_gray-500"
                                    size="txtRobotoMedium15Bluegray500"
                                  >
                                    120002
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[38px] w-4/5 md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-[21%]"
                                    src="images/img_.png"
                                    alt="NinetyFive"
                                  />
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    120001
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[31px] w-[83%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="NinetySix"
                                  />
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    119996
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[30px] w-[83%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="NinetySeven"
                                  />
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    119997
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[34px] w-[83%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="NinetyEight"
                                  />
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    119996
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start mt-[27px] w-[83%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="NinetyNine"
                                  />
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    119995
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[38px] w-[83%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="OneHundred"
                                  />
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    120004
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-8 w-[83%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="OneHundredOne"
                                  />
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    120004
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[30px] w-[83%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="OneHundredTwo"
                                  />
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    120004
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[37px] items-end justify-start md:ml-[0] ml-[352px] mt-[47px] p-1 w-[35%] md:w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_group71_gray_900.svg')",
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
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[18%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[11%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[24%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[31%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[37%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[44%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-[0] justify-center m-auto w-full" />
                  <Line className="absolute bg-blue_gray-800_01 bottom-[43%] h-0.5 inset-x-[0] mx-auto w-full" />
                  <Line className="absolute bg-blue_gray-800_01 bottom-[36%] h-0.5 inset-x-[0] mx-auto w-full" />
                  <Line className="absolute bg-blue_gray-800_01 bottom-[11%] h-0.5 inset-x-[0] mx-auto w-full" />
                  <Line className="absolute bg-blue_gray-800_01 bottom-[30%] h-0.5 inset-x-[0] mx-auto w-full" />
                  <Line className="absolute bg-blue_gray-800_01 bottom-[23%] h-0.5 inset-x-[0] mx-auto w-full" />
                  <Line className="absolute bg-blue_gray-800_03 bottom-[17%] h-0.5 inset-x-[0] mx-auto w-full" />
                </div>
                <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-y-[0] items-center justify-between left-[2%] my-auto w-[93%]">
                  <List
                    className="sm:flex-col flex-row gap-[18px] grid sm:grid-cols-1 grid-cols-4 w-[54%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-blue_gray-500 text-xs"
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
                      <Text
                        className="mt-9 text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        009
                      </Text>
                      <Text
                        className="mt-9 text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        010
                      </Text>
                      <Text
                        className="mt-[33px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        011
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Showroom
                      </Text>
                      <Text
                        className="mt-[34px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Andijon
                      </Text>
                      <Text
                        className="mt-[31px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Andijon
                      </Text>
                      <Text
                        className="mt-[30px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Andijon
                      </Text>
                      <Text
                        className="mt-[35px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        <>Qo\&#96;rg\&#96;ontepa</>
                      </Text>
                      <Text
                        className="mt-[35px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        <>Qo\&#96;rg\&#96;ontepa</>
                      </Text>
                      <Text
                        className="mt-[33px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Namangan
                      </Text>
                      <Text
                        className="mt-8 text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Yangi bozor
                      </Text>
                      <Text
                        className="mt-[33px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Yangi bozor
                      </Text>
                      <Text
                        className="mt-[33px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Yangi bozor
                      </Text>
                      <Text
                        className="mt-[33px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Yangi bozor
                      </Text>
                      <Text
                        className="mt-[30px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Yangi bozor
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Summasi
                      </Text>
                      <Text
                        className="mt-[35px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        86 000 000
                      </Text>
                      <Text
                        className="mt-[34px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        32 500 000
                      </Text>
                      <Text
                        className="mt-[33px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        8 000 000
                      </Text>
                      <Text
                        className="mt-[38px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        9 650 000
                      </Text>
                      <Text
                        className="mt-[38px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        7 650 000
                      </Text>
                      <Text
                        className="mt-[35px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        9 650 000
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        3 530 000
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        1 120 000
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        1 745 000
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        7 532 000
                      </Text>
                      <Text
                        className="mt-[33px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        3 120 000
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        <>To\&#96;langan</>
                      </Text>
                      <Text
                        className="mt-[33px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        80 000 000
                      </Text>
                      <Text
                        className="mt-[34px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        30 500 000
                      </Text>
                      <Text
                        className="mt-[33px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        7 000 000
                      </Text>
                      <Text
                        className="mt-[38px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        9 650 000
                      </Text>
                      <Text
                        className="mt-[38px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        7 650 000
                      </Text>
                      <Text
                        className="mt-[35px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        9 650 000
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        3 530 000
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        1 120 000
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        1 745 000
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        7 532 000
                      </Text>
                      <Text
                        className="mt-[33px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        3 120 000
                      </Text>
                    </div>
                  </List>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[77px] grid grid-cols-2 w-[22%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-[33px] justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Qoldiq
                      </Text>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[23px]">
                        <Text
                          className="text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          6 000 000
                        </Text>
                        <Text
                          className="mt-[34px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          2 500 000
                        </Text>
                        <Text
                          className="mt-[33px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          1 000 000
                        </Text>
                        <Text
                          className="mt-[38px] text-gray-400 text-xs"
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
                          className="mt-9 text-gray-400 text-xs"
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
                          className="mt-9 text-gray-400 text-xs"
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
                          className="mt-[33px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          0
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[33px] items-center justify-start w-full">
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
                        <Text
                          className="mt-9 text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Sen 13. 2022
                        </Text>
                        <Text
                          className="mt-[35px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Sen 13. 2022
                        </Text>
                        <Text
                          className="mt-[33px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Sen 13. 2022
                        </Text>
                      </div>
                    </div>
                  </List>
                  <div className="flex flex-col items-center justify-start w-[15%] md:w-full">
                    <div className="flex flex-col gap-[34px] justify-start w-full">
                      <Text
                        className="md:ml-[0] ml-[18px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Izoh
                      </Text>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="h-6 relative w-full">
                          <Text
                            className="absolute left-[0] text-blue_gray-500 text-xs top-[0]"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            Tezroq bitirib berishni iltimos qilgan
                          </Text>
                          <Img
                            className="absolute h-6 inset-y-[0] my-auto right-[0] w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa"
                          />
                        </div>
                        <div className="flex flex-row gap-[9px] items-start justify-between mt-[26px] w-full">
                          <Text
                            className="text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            <>
                              Mijoz o\&#96;lchovchidan shikoyat qildi sekin...
                            </>
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_One"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-between mt-[17px] w-full">
                          <Text
                            className="mt-[3px] text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            ...
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_Two"
                          />
                        </div>
                        <div className="flex flex-row items-end justify-between mt-[26px] w-full">
                          <Text
                            className="mb-0.5 mt-1.5 text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            ...
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_Three"
                          />
                        </div>
                        <div className="flex flex-row items-end justify-between mt-7 w-full">
                          <Text
                            className="mb-0.5 mt-1.5 text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            ...
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_Four"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-evenly mt-[30px] w-full">
                          <Text
                            className="sm:flex-1 text-blue_gray-500 text-xs w-[85%] sm:w-full"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            Bu mijoz janjal qilib qaytib sizlar bilan ...
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_Five"
                          />
                        </div>
                        <div className="flex flex-row items-start justify-evenly mt-5 w-full">
                          <Text
                            className="sm:flex-1 text-blue_gray-500 text-xs w-[83%] sm:w-full"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            Masjid qurilishi uchun 10% chegirma qilindi...
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_Six"
                          />
                        </div>
                        <div className="flex flex-row gap-9 items-start justify-between mt-[17px] w-full">
                          <Text
                            className="mt-[3px] text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            <>Izohga hojat yo\&#96;q</>
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_Seven"
                          />
                        </div>
                        <div className="flex flex-row items-end justify-between mt-[26px] w-full">
                          <Text
                            className="mb-0.5 mt-1.5 text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            ...
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_Eight"
                          />
                        </div>
                        <div className="flex flex-row items-end justify-between mt-[27px] w-full">
                          <Text
                            className="my-1 text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            ...
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_Nine"
                          />
                        </div>
                        <div className="flex flex-row items-center justify-between mt-[26px] w-full">
                          <Text
                            className="text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            ...
                          </Text>
                          <Img
                            className="h-6 w-6"
                            src="images/img_icroundkeyboa.svg"
                            alt="icroundkeyboa_Ten"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-800_7e flex flex-col items-center justify-end left-[0] md:px-5 py-0.5 top-[36%] w-1/5">
          <div className="flex flex-row items-start justify-start mt-[29px] w-[79%] md:w-full">
            <Img
              className="h-[21px]"
              src="images/img_camera.svg"
              alt="camera"
            />
            <Text
              className="ml-[21px] text-base text-white-A700 uppercase"
              size="txtRobotoMedium16WhiteA700"
            >
              kirim
            </Text>
            <Img
              className="h-1.5 ml-[109px] mt-[5px]"
              src="images/img_arrowup.svg"
              alt="arrowup"
            />
          </div>
          <Text
            className="mt-[23px] text-blue_gray-500 text-sm"
            size="txtRobotoMedium14"
          >
            Kirim tarixi
          </Text>
          <div className="h-[60px] md:h-[72px] mt-3 relative w-full">
            <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-end justify-center m-auto p-[19px] w-full">
              <Text
                className="mr-4 mt-1 text-sm text-white-A700"
                size="txtRobotoMedium14WhiteA700"
              >
                Showroomdan kirim tarixi
              </Text>
            </div>
            <div className="absolute bg-red-300 h-[60px] inset-y-[0] left-[0] my-auto w-[6%]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoliyaShowroomdankirimtarixiPage;
