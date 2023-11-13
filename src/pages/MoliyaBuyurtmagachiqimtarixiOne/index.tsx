import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Text } from "components";
import MoliyaKassaRowsaralash from "components/MoliyaKassaRowsaralash";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const MoliyaBuyurtmagachiqimtarixiOnePage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_icoutlineshop.svg"
          alt="icoutlineshop"
        />
      ),
      label: "DASHBOARD",
      href: "/direktordashboard",
      active: window.location.pathname === "/direktordashboard",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_icoutlineshop_blue_gray_500.svg"
          alt="icoutlineshop_One"
        />
      ),
      label: "OMBOR & SAVDO",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_rislideshowline.svg"
          alt="rislideshowline"
        />
      ),
      label: "Sowroomlar oynasi",
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
          className="h-6 w-6"
          src="images/img_mdicircularsaw_blue_gray_500.svg"
          alt="mdicircularsaw"
        />
      ),
      label: "Ombor qoldiq ",
      href: "/omborqoldiqidsi",
      active: window.location.pathname === "/omborqoldiqidsi",
    },
    {
      icon: (
        <Img
          className="h-[21px]"
          src="images/img_settings_blue_gray_500.svg"
          alt="settings"
        />
      ),
      label: "Kirim tarixi",
      href: "/moliyakirimtarixi",
      active: window.location.pathname === "/moliyakirimtarixi",
    },
    {
      icon: (
        <Img
          className="h-[21px]"
          src="images/img_settings_blue_gray_500.svg"
          alt="settings_One"
        />
      ),
      label: "Chiqim tarixi",
      href: "/omborchiqimtarixi",
      active: window.location.pathname === "/omborchiqimtarixi",
    },
  ];

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat flex flex-col font-roboto h-[900px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div
          className="bg-cover bg-no-repeat md:h-[2166px] sm:h-[823px] h-[900px] pr-7 md:px-5 py-7 relative w-full"
          style={{
            backgroundImage: "url('images/img_showroombuyurtmalar.png')",
          }}
        >
          <div className="md:h-[2166px] sm:h-[823px] h-[829px] m-auto w-[98%] md:w-full">
            <div className="absolute flex flex-col gap-[27px] h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[81%]">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
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
                    alt="arrowdown"
                  />
                </div>
              </div>
              <div className="flex md:h-[1977px] sm:h-[757px] h-[763px] justify-end relative w-full">
                <Line className="bg-blue_gray-900 h-[52px] mb-[296px] ml-72 mt-auto w-px" />
                <div className="absolute bg-blue_gray-900_87_01 flex flex-col h-full inset-[0] items-center justify-center m-auto py-[19px] rounded-[5px] w-full">
                  <div className="flex flex-col gap-[29px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-[97%] md:w-full">
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
                      <Input
                        name="group605"
                        placeholder="Batafsil"
                        className="font-medium leading-[normal] p-0 placeholder:text-blue_gray-500 text-[15px] text-left w-full"
                        wrapClassName="flex md:mt-0 mt-[9px] rounded-sm md:w-full"
                        suffix={
                          <div className="mt-[3px] mb-[5px] ml-[35px] outline-blue_gray-500 outline-[0.5px] outline bg-blue_gray-500">
                            <Img
                              className="my-auto"
                              src="images/img_group462.svg"
                              alt="Line 50"
                            />
                          </div>
                        }
                        shape="round"
                        color="blue_gray_800_07"
                        size="sm"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Line className="bg-blue_gray-800_01 h-0.5 w-full" />
                      <div className="md:h-[1715px] h-[562px] sm:h-[564px] mt-0.5 relative w-full">
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
                        <div className="absolute flex md:flex-col flex-row md:gap-10 h-full inset-y-[0] items-center justify-between left-[2%] my-auto w-[86%]">
                          <List
                            className="sm:flex-col flex-row gap-[18px] grid sm:grid-cols-1 md:grid-cols-4 grid-cols-8 w-[82%] md:w-full"
                            orientation="horizontal"
                          >
                            <div className="flex flex-col items-start justify-start w-full">
                              <Img
                                className="h-[15px] md:h-auto object-cover w-[58%] sm:w-full"
                                src="images/img_.png"
                                alt="TwoHundredFifteen"
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
                          <div className="flex flex-col items-center justify-start w-[13%] md:w-full">
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
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-8 items-end justify-start mt-[41px] p-0.5 w-[33%] md:w-full"
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
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bg-blue_gray-800_7e bottom-[23%] flex flex-row gap-[26px] items-center justify-between left-[0] pr-[17px] w-1/5">
              <div className="bg-red-300 h-[60px] w-[6%]"></div>
              <div className="flex flex-row gap-[25px] items-start justify-start">
                <Img
                  className="h-6"
                  src="images/img_computer_white_a700.svg"
                  alt="computer"
                />
                <Text
                  className="mt-1 text-base text-white-A700 uppercase"
                  size="txtRobotoMedium16WhiteA700"
                >
                  Buyurtmaga chiqim
                </Text>
              </div>
            </div>
          </div>
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[215px] flex h-screen md:hidden justify-start left-[3%] overflow-auto top-[0]"
          >
            <Img
              className="h-[82px] ml-2 md:ml-[0] mr-6"
              src="images/img_group834.svg"
              alt="groupSeventySix"
            />
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  gap: "21px",
                  color: "#6e768c",
                  fontWeight: 500,
                  fontSize: "16px",
                  paddingLeft: "19px",
                  paddingRight: "19px",
                },
              }}
              className="flex flex-col items-center justify-start mt-[93px] md:pr-10 sm:pr-5 pr-[41px] w-full"
            >
              <div className="flex flex-col gap-[32.76px] items-center justify-start w-full">
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </div>
              <div className="flex flex-col items-center justify-start mt-[89px] w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_bipersonworkspace.svg"
                      alt="bipersonworkspa"
                    />
                  }
                >
                  <Text className="text-sm uppercase">
                    <>Mijozlar ro\&#96;yhati</>
                  </Text>
                </MenuItem>
              </div>
            </Menu>
          </Sidebar>
        </div>
      </div>
    </>
  );
};

export default MoliyaBuyurtmagachiqimtarixiOnePage;
