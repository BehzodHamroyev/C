import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const hududOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShowroomMijozlarroyhatiOnePage: React.FC = () => {
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
          className="h-6 mb-[7px] w-6"
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
          className="h-6 mb-3.5 w-6"
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
          className="h-[21px] mb-2"
          src="images/img_settings_blue_gray_500.svg"
          alt="settings_One"
        />
      ),
      label: "Chiqim tarixi",
      href: "/omborchiqimtarixi",
      active: window.location.pathname === "/omborchiqimtarixi",
    },
    {
      icon: (
        <Img
          className="h-[21px]"
          src="images/img_user_blue_gray_500.svg"
          alt="user"
        />
      ),
      label: "Buyurtmaga chiqim",
      href: "/moliyabuyurtmagachiqimtarixi",
      active: window.location.pathname === "/moliyabuyurtmagachiqimtarixi",
    },
  ];

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat font-roboto h-[900px] mx-auto sm:pr-5 pr-[27px] py-[27px] relative w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="absolute bottom-[7%] md:h-[2787px] h-[736px] md:px-5 right-[3%] w-[79%] md:w-full">
          <div className="md:h-[1453px] h-[736px] m-auto w-full">
            <div className="absolute bg-blue_gray-900_87_01 flex md:flex-col flex-row md:gap-10 h-full inset-[0] items-start justify-between m-auto p-[21px] sm:px-5 rounded-[5px] w-full">
              <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-start mb-[653px] ml-1 md:ml-[0]">
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
              <SelectBox
                className="md:flex-1 font-medium leading-[normal] mb-[647px] mr-[19px] md:mt-0 mt-[15px] text-base text-left w-[19%] md:w-full"
                placeholderClassName="text-gray-400"
                indicator={
                  <Img
                    className="h-[3px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[7px]"
                    src="images/img_arrowdown_gray_400.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="group642"
                options={hududOptionsList}
                isSearchable={false}
                placeholder="Hudud"
                shape="round"
                color="blue_gray_800"
                size="xs"
                variant="fill"
              />
            </div>
            <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[18%] w-full" />
            <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[12%] w-full" />
            <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[24%] w-full" />
            <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[30%] w-full" />
            <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[36%] w-full" />
            <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[42%] w-full" />
            <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-[0] justify-center m-auto w-full" />
            <Line className="absolute bg-blue_gray-800_01 bottom-[45%] h-0.5 inset-x-[0] mx-auto w-full" />
            <Line className="absolute bg-blue_gray-800_01 bottom-[39%] h-0.5 inset-x-[0] mx-auto w-full" />
            <Line className="absolute bg-blue_gray-800_01 bottom-[15%] h-0.5 inset-x-[0] mx-auto w-full" />
            <Line className="absolute bg-blue_gray-800_01 bottom-[33%] h-0.5 inset-x-[0] mx-auto w-full" />
            <Line className="absolute bg-blue_gray-800_01 bottom-[9%] h-0.5 inset-x-[0] mx-auto w-full" />
            <Line className="absolute bg-blue_gray-800_01 bottom-[27%] h-0.5 inset-x-[0] mx-auto w-full" />
            <Line className="absolute bg-blue_gray-800_03 bottom-[21%] h-0.5 inset-x-[0] mx-auto w-full" />
          </div>
          <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-[0] items-center justify-center m-auto w-[95%]">
            <List
              className="sm:flex-col flex-row gap-[18px] grid grid-cols-2 w-[21%] md:w-full"
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
                  Ismi va familyasi
                </Text>
                <Text
                  className="mt-[26px] text-[15px] text-blue-700"
                  size="txtRobotoMedium15Blue700"
                >
                  Botir Qodirov
                </Text>
                <Text
                  className="mt-[25px] text-[15px] text-blue-700"
                  size="txtRobotoMedium15Blue700"
                >
                  Sobir Ikromov
                </Text>
                <Text
                  className="mt-[26px] text-[15px] text-blue-700"
                  size="txtRobotoMedium15Blue700"
                >
                  <>Maftuna To\&#96;lanboyeva</>
                </Text>
                <Text
                  className="mt-7 text-[15px] text-blue-700"
                  size="txtRobotoMedium15Blue700"
                >
                  Nodir Fayziyev
                </Text>
                <Text
                  className="mt-[27px] text-[15px] text-blue-700"
                  size="txtRobotoMedium15Blue700"
                >
                  Fahriddin Mahmudov
                </Text>
                <Text
                  className="mt-[26px] text-[15px] text-blue-700"
                  size="txtRobotoMedium15Blue700"
                >
                  Shukurillo Avdusalomov
                </Text>
                <Text
                  className="mt-[27px] text-[15px] text-blue-700"
                  size="txtRobotoMedium15Blue700"
                >
                  Saida Komilova
                </Text>
                <Text
                  className="mt-[27px] text-[15px] text-blue-700"
                  size="txtRobotoMedium15Blue700"
                >
                  Mohira Abdumalikov
                </Text>
                <Text
                  className="mt-7 text-[15px] text-blue-400"
                  size="txtRobotoMedium15Blue400"
                >
                  Umarjon Mahkamjonov
                </Text>
                <Text
                  className="mt-[27px] text-[15px] text-blue-700"
                  size="txtRobotoMedium15Blue700"
                >
                  Salohiddin Mahkamjonov
                </Text>
                <Text
                  className="mt-[23px] text-[15px] text-blue-700"
                  size="txtRobotoMedium15Blue700"
                >
                  Saida Komilova
                </Text>
                <Text
                  className="mt-[27px] text-[15px] text-blue-700"
                  size="txtRobotoMedium15Blue700"
                >
                  Mohira Abdumalikov
                </Text>
              </div>
            </List>
            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[53px]">
              <Text
                className="ml-0.5 md:ml-[0] text-[15px] text-blue_gray-500"
                size="txtRobotoMedium15Bluegray500"
              >
                Manzili
              </Text>
              <Text
                className="mt-[17px] text-[10px] text-blue_gray-500"
                size="txtRobotoMedium10"
              >
                Jalaquduq
              </Text>
              <Text
                className="text-[10px] text-gray-400"
                size="txtRobotoMedium10Gray400"
              >
                <>
                  Yangisor Qorasuv ko\&#96;cha <br />№ 77 uy
                </>
              </Text>
              <Text
                className="mt-1 text-[10px] text-blue_gray-500"
                size="txtRobotoMedium10"
              >
                <>Xo\&#96;jaobod</>
              </Text>
              <Text
                className="text-[10px] text-gray-400"
                size="txtRobotoMedium10Gray400"
              >
                <>
                  Yettichinor Jome ko\&#96;cha <br />№ 125 uy
                </>
              </Text>
              <Text
                className="mt-[3px] text-[10px] text-blue_gray-500"
                size="txtRobotoMedium10"
              >
                Qorasuv
              </Text>
              <Text
                className="mt-0.5 text-[10px] text-gray-400"
                size="txtRobotoMedium10Gray400"
              >
                <>
                  Obodon Toshloq ko\&#96;cha <br />№ 35 uy
                </>
              </Text>
              <Text
                className="mt-[7px] text-[10px] text-blue_gray-500"
                size="txtRobotoMedium10"
              >
                Andijon
              </Text>
              <Text
                className="text-[10px] text-gray-400"
                size="txtRobotoMedium10Gray400"
              >
                <>
                  Yangi bozor Oripov ko\&#96;cha <br />№ 81 uy{" "}
                </>
              </Text>
              <Text
                className="mt-[7px] text-[10px] text-blue_gray-500"
                size="txtRobotoMedium10"
              >
                Andijon
              </Text>
              <Text
                className="text-[10px] text-gray-400"
                size="txtRobotoMedium10Gray400"
              >
                <>
                  Yangi bozor Oripov ko\&#96;cha <br />№ 88 uy{" "}
                </>
              </Text>
              <Text
                className="mt-1 text-[10px] text-blue_gray-500"
                size="txtRobotoMedium10"
              >
                Shahrixon
              </Text>
              <Text
                className="mt-0.5 text-[10px] text-gray-400"
                size="txtRobotoMedium10Gray400"
              >
                <>
                  Yodgorov ko\&#96;cha <br />№ 15 uy
                </>
              </Text>
              <Text
                className="mt-[5px] text-[10px] text-blue_gray-500"
                size="txtRobotoMedium10"
              >
                Andijon
              </Text>
              <Text
                className="text-[10px] text-gray-400"
                size="txtRobotoMedium10Gray400"
              >
                <>
                  Oliygoh ko\&#96;cha <br />№ 3 uy
                </>
              </Text>
              <Text
                className="mt-[5px] text-[10px] text-blue_gray-500"
                size="txtRobotoMedium10"
              >
                <>Xo\&#96;jaobod</>
              </Text>
              <Text
                className="text-[10px] text-gray-400"
                size="txtRobotoMedium10Gray400"
              >
                <>
                  Yettichinor Jome ko\&#96;cha <br />№ 125 uy
                </>
              </Text>
              <Text
                className="mt-[5px] text-[10px] text-blue_gray-500"
                size="txtRobotoMedium10"
              >
                Andijon
              </Text>
              <Text
                className="text-[10px] text-gray-400"
                size="txtRobotoMedium10Gray400"
              >
                <>
                  Yodgorov ko\&#96;cha <br />№ 15 uy
                </>
              </Text>
              <Text
                className="mt-1 text-[10px] text-blue_gray-500"
                size="txtRobotoMedium10"
              >
                Shahrixon
              </Text>
              <Text
                className="mt-0.5 text-[10px] text-gray-400"
                size="txtRobotoMedium10Gray400"
              >
                <>
                  Oliygoh ko\&#96;cha <br />№ 3 uy
                </>
              </Text>
              <Text
                className="mt-[3px] text-[10px] text-blue_gray-500"
                size="txtRobotoMedium10"
              >
                Andijon
              </Text>
              <Text
                className="text-[10px] text-gray-400"
                size="txtRobotoMedium10Gray400"
              >
                <>
                  Oliygoh ko\&#96;cha <br />№ 3 uy
                </>
              </Text>
              <Text
                className="mt-[5px] text-[10px] text-blue_gray-500"
                size="txtRobotoMedium10"
              >
                <>Xo\&#96;jaobod</>
              </Text>
              <Text
                className="text-[10px] text-gray-400"
                size="txtRobotoMedium10Gray400"
              >
                <>
                  Yettichinor Jome ko\&#96;cha <br />№ 125 uy
                </>
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row md:gap-10 gap-[66px] grid grid-cols-2 md:ml-[0] ml-[47px] w-[28%] md:w-full"
              orientation="horizontal"
            >
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="text-[15px] text-blue_gray-500"
                  size="txtRobotoMedium15Bluegray500"
                >
                  Hudud
                </Text>
                <Text
                  className="mt-[30px] text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Jalaquduq
                </Text>
                <Text
                  className="mt-[29px] text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  <>Xo\&#96;jaobod</>
                </Text>
                <Text
                  className="mt-[27px] text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Qorasuv
                </Text>
                <Text
                  className="mt-8 text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Andijon
                </Text>
                <Text
                  className="mt-[31px] text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Andijon
                </Text>
                <Text
                  className="mt-7 text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Shahrihon
                </Text>
                <Text
                  className="mt-[31px] text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Andijon
                </Text>
                <Text
                  className="mt-[30px] text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Xo’jaobod
                </Text>
                <Text
                  className="mt-[30px] text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Andijon
                </Text>
                <Text
                  className="mt-7 text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Shahrixon
                </Text>
                <Text
                  className="mt-[29px] text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Andijon
                </Text>
                <Text
                  className="mt-[30px] text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Xo’jaobod
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="ml-0.5 md:ml-[0] text-[15px] text-blue_gray-500"
                  size="txtRobotoMedium15Bluegray500"
                >
                  Bizni qayerdan topdingiz
                </Text>
                <Text
                  className="mt-7 text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Instagramdagi postlarda
                </Text>
                <Text
                  className="mt-[29px] text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Televideniyada reklamada
                </Text>
                <Text
                  className="mt-7 text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Telegramdagi kanalda
                </Text>
                <Text
                  className="mt-[31px] text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Mijozlardan biri tavsiya qildi
                </Text>
                <Text
                  className="mt-[31px] text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Telegramdagi kanalda
                </Text>
                <Text
                  className="mt-[29px] text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Telegramdagi kanalda
                </Text>
                <Text
                  className="mt-[30px] text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Televideniyada reklamada
                </Text>
                <Text
                  className="mt-[30px] text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Televideniyada reklamada
                </Text>
                <Text
                  className="mt-[30px] text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Televideniyada reklamada
                </Text>
                <Text
                  className="mt-[30px] text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Televideniyada reklamada
                </Text>
                <Text
                  className="mt-7 text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Televideniyada reklamada
                </Text>
                <Text
                  className="mt-[30px] text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Televideniyada reklamada
                </Text>
              </div>
            </List>
            <div className="flex flex-col items-center justify-start ml-20 md:ml-[0] w-[12%] md:w-full">
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
                    className="mt-[5px] text-gray-400 text-xs"
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
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[27px]">
              <Text
                className="text-[15px] text-blue_gray-500"
                size="txtRobotoMedium15Bluegray500"
              >
                Telefon raqami
              </Text>
              <Text
                className="mt-[19px] text-gray-400 text-xs"
                size="txtRobotoMedium12"
              >
                <>
                  +998 99 123-56-56
                  <br />
                  +998 99 152-96-95
                </>
              </Text>
              <Text
                className="mt-2.5 text-gray-400 text-xs"
                size="txtRobotoMedium12"
              >
                <>
                  +998 93 900-56-56
                  <br />
                  +998 90 896-96-95
                </>
              </Text>
              <Text
                className="mt-[9px] text-gray-400 text-xs"
                size="txtRobotoMedium12"
              >
                <>
                  +998 93 123-58-00
                  <br />
                  +998 98 152-00-00
                </>
              </Text>
              <Text
                className="mt-[13px] text-gray-400 text-xs"
                size="txtRobotoMedium12"
              >
                <>
                  +998 88 200-58-00
                  <br />
                  +998 91 100-00-00
                </>
              </Text>
              <Text
                className="mt-[13px] text-gray-400 text-xs"
                size="txtRobotoMedium12"
              >
                <>
                  +998 93 123-00-00
                  <br />
                  +998 94 152-02-00
                </>
              </Text>
              <Text
                className="mt-[13px] text-gray-400 text-xs"
                size="txtRobotoMedium12"
              >
                <>
                  +998 99 555-90-00
                  <br />
                  +998 98 999-00-00
                </>
              </Text>
              <Text
                className="mt-[9px] text-gray-400 text-xs"
                size="txtRobotoMedium12"
              >
                <>
                  +998 93 161-58-00
                  <br />
                  +998 98 603-00-00
                </>
              </Text>
              <Text
                className="mt-[11px] text-gray-400 text-xs"
                size="txtRobotoMedium12"
              >
                <>
                  +998 93 603-58-00
                  <br />
                  +998 98 560-00-00
                </>
              </Text>
              <Text
                className="mt-[11px] text-gray-400 text-xs"
                size="txtRobotoMedium12"
              >
                <>
                  +998 96 603-58-00
                  <br />
                  +998 97 860-05-00
                </>
              </Text>
              <Text
                className="mt-[11px] text-gray-400 text-xs"
                size="txtRobotoMedium12"
              >
                <>
                  +998 96 603-58-00
                  <br />
                  +998 97 860-05-00
                </>
              </Text>
              <Text
                className="mt-2.5 text-gray-400 text-xs"
                size="txtRobotoMedium12"
              >
                <>
                  +998 93 161-58-00
                  <br />
                  +998 98 603-00-00
                </>
              </Text>
              <Text
                className="mt-[11px] text-gray-400 text-xs"
                size="txtRobotoMedium12"
              >
                <>
                  +998 93 603-58-00
                  <br />
                  +998 98 560-00-00
                </>
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute flex md:flex-col flex-row md:gap-10 items-start justify-between md:px-5 right-[7%] top-[3%] w-full">
          <FrameFiftyTwoDatafiltr className="flex md:flex-1 md:flex-col flex-row gap-[17px] items-center justify-between w-[68%] md:w-full" />
          <div className="flex md:flex-1 flex-row items-end justify-between w-[21%] md:w-full">
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
        <div className="absolute bg-blue_gray-800_7e bottom-[20%] flex flex-row gap-[27px] items-center justify-start left-[0] pr-[49px] md:px-5 w-1/5">
          <div className="bg-red-300 h-[60px] w-[7%]"></div>
          <div className="flex flex-row gap-[26px] items-center justify-center w-[82%]">
            <Img
              className="h-6 w-6"
              src="images/img_bipersonworkspace_white_a700.svg"
              alt="bipersonworkspa"
            />
            <Text
              className="text-sm text-white-A700 uppercase"
              size="txtRobotoMedium14WhiteA700"
            >
              <>Mijozlar ro\&#96;yhati</>
            </Text>
          </div>
        </div>
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[215px] flex h-screen md:hidden justify-start left-[2%] overflow-auto md:px-5 top-[0]"
        >
          <Img
            className="h-[82px] ml-3.5 md:ml-[0] mr-[18px]"
            src="images/img_group834.svg"
            alt="groupSeventySix"
          />
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                gap: "20px",
                paddingBottom: "25px",
                color: "#6e768c",
                fontWeight: 500,
                fontSize: "16px",
                paddingLeft: "25px",
                paddingRight: "25px",
              },
            }}
            className="flex flex-col items-center justify-end mt-[93px] sm:pr-5 pr-[34px] w-full"
          >
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};

export default ShowroomMijozlarroyhatiOnePage;
