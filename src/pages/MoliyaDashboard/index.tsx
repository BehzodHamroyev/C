import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, Text } from "components";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const MoliyaDashboardPage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-[18px] w-[18px]"
          src="images/img_volume_white_a700.svg"
          alt="volume"
        />
      ),
      label: "DASHBOARD",
      href: "/direktordashboard",
      active: window.location.pathname === "/direktordashboard",
    },
    {
      icon: (
        <Img
          className="h-6 mt-0.5"
          src="images/img_settings_blue_gray_500.svg"
          alt="settings"
        />
      ),
      label: "Chiqim ",
      href: "/ombormahsulotchiqimiprofillar",
      active: window.location.pathname === "/ombormahsulotchiqimiprofillar",
    },
    {
      icon: (
        <Img
          className="h-6 my-1"
          src="images/img_minimize.svg"
          alt="minimize"
        />
      ),
      label: "Valyuta ayriboshlash",
      href: "/moliyavalyutaayriboshlash",
      active: window.location.pathname === "/moliyavalyutaayriboshlash",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_fluentclipboar.svg"
          alt="fluentclipboar"
        />
      ),
      label: "<>Hodimlar ro&#96;yhati</>",
    },
    {
      icon: (
        <Img
          className="h-[21px] mb-2"
          src="images/img_union_blue_gray_500.svg"
          alt="union_One"
        />
      ),
      label: "qarzdorlik",
    },
    {
      icon: (
        <Img
          className="h-[19px] mb-[9px] w-[19px]"
          src="images/img_ticket.svg"
          alt="ticket"
        />
      ),
      label: "Mahsulot narxlari ",
    },
  ];

  return (
    <>
      <div className="bg-gray-900 font-roboto h-[975px] mx-auto pb-[22px] relative w-full">
        <div className="absolute md:h-[1600px] h-[900px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <Img
            className="h-[900px] m-auto object-cover w-full"
            src="images/img_global1_2.png"
            alt="globalOne"
          />
          <div className="absolute flex flex-col gap-[53px] items-center justify-start right-[1%] top-[3%] w-4/5">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[95%] md:w-full">
              <div className="sm:h-[227px] h-[33px] md:mt-0 mt-1 relative w-[54%] md:w-full">
                <div className="absolute flex sm:flex-col flex-row gap-[22px] h-full inset-y-[0] items-center justify-between my-auto right-[0] w-[86%]">
                  <div className="flex relative w-[53%] sm:w-full">
                    <div className="flex my-auto w-[67%]">
                      <div className="border border-blue_gray-800_05 border-solid h-[33px] my-auto rotate-[180deg] w-1/2"></div>
                      <div className="border border-blue_gray-800_05 border-solid h-[33px] ml-[-0.87px] my-auto rotate-[180deg] w-[51%] z-[1]"></div>
                    </div>
                    <div className="border border-blue_gray-800_05 border-solid h-[33px] ml-[-0.99px] my-auto rotate-[180deg] rounded-bl rounded-tl w-[34%] z-[1]"></div>
                  </div>
                  <div className="border border-blue_gray-800_05 border-solid h-[33px] rotate-[180deg] rounded w-[43%]"></div>
                </div>
                <div className="absolute flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-center justify-center m-auto w-[98%]">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[86px] rounded-bl rounded-tl text-base text-center"
                    color="blue_400"
                    size="xs"
                    variant="fill"
                  >
                    Kun
                  </Button>
                  <Text
                    className="sm:ml-[0] ml-[22px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    Hafta
                  </Text>
                  <Text
                    className="h-[19px] sm:ml-[0] ml-[54px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    Oy
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[68px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    Yil
                  </Text>
                  <Text
                    className="sm:ml-[0] ml-[69px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    20 Sen -28 Apr 2022
                  </Text>
                  <Img
                    className="h-[18px] sm:ml-[0] ml-[11px] w-[18px]"
                    src="images/img_vscodeiconsfiletypeexcel.svg"
                    alt="cilcalendar"
                  />
                </div>
              </div>
              <div className="flex flex-row items-end justify-between w-[17%] md:w-full">
                <div className="flex flex-col h-[38px] items-center justify-start w-[38px]">
                  <Img
                    className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                    src="images/img_il1588xn1_4.png"
                    alt="il1588xnOne"
                  />
                </div>
                <Text
                  className="mb-[3px] mt-[7px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-500"
                  size="txtRobotoMedium23"
                >
                  Operator
                </Text>
                <Img
                  className="h-[7px] my-[15px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[11px] items-center justify-between w-full">
              <div className="bg-gradient  flex md:flex-1 flex-col items-start justify-start p-[27px] sm:px-5 rounded-[5px] w-[33%] md:w-full">
                <Text
                  className="ml-1.5 md:ml-[0] text-[17px] text-blue_gray-400"
                  size="txtRobotoMedium17"
                >
                  Buyurtmalar uumiy summasi
                </Text>
                <div className="flex flex-col items-center justify-start ml-1.5 md:ml-[0] mt-[22px] w-[96%] md:w-full">
                  <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                    <div className="flex flex-row gap-[11px] items-center justify-start w-[72%] md:w-full">
                      <div className="bg-blue-400 flex flex-col items-center justify-start my-[7px] p-1 rounded-[13px] w-[26px]">
                        <Img
                          className="h-4"
                          src="images/img_question_white_a700.svg"
                          alt="question"
                        />
                      </div>
                      <Text
                        className="sm:text-[31px] md:text-[33px] text-[35px] text-blue_gray-100"
                        size="txtRobotoMedium35Bluegray100"
                      >
                        198 654.56
                      </Text>
                    </div>
                    <Line className="bg-indigo-500 h-0.5 w-full" />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start ml-1 md:ml-[0] mt-3.5 w-[82%] md:w-full">
                  <div className="flex flex-col justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[39px] text-[17px] text-blue_gray-400"
                      size="txtRobotoMedium17"
                    >
                      <>100 % To\&#96;landi</>
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-0.5 w-full">
                      <Img
                        className="h-[22px] w-[23px]"
                        src="images/img_location_light_green_500.svg"
                        alt="location"
                      />
                      <Text
                        className="sm:text-[27px] md:text-[29px] text-[31px] text-light_green-500"
                        size="txtRobotoMedium31Lightgreen500"
                      >
                        309 070 000
                      </Text>
                      <Text
                        className="text-[17px] text-blue_gray-400"
                        size="txtRobotoMedium17"
                      >
                        so’m
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start ml-1 md:ml-[0] mt-10 w-[77%] md:w-full">
                  <div className="flex flex-col justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[39px] text-[17px] text-blue_gray-400"
                      size="txtRobotoMedium17"
                    >
                      <>Oldindan to\&#96;landi</>
                    </Text>
                    <div className="flex flex-row items-center justify-between mt-1 w-full">
                      <Img
                        className="h-[22px] w-[23px]"
                        src="images/img_group512_blue_gray_500.svg"
                        alt="group512"
                      />
                      <Text
                        className="sm:text-[27px] md:text-[29px] text-[31px] text-blue-400"
                        size="txtRobotoMedium31Blue400"
                      >
                        72 080 000
                      </Text>
                      <Text
                        className="text-[17px] text-blue_gray-400"
                        size="txtRobotoMedium17"
                      >
                        so’m
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start mb-0.5 ml-1 md:ml-[0] mt-[42px] w-[81%] md:w-full">
                  <div className="flex flex-col justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[39px] text-[17px] text-blue_gray-400"
                      size="txtRobotoMedium17"
                    >
                      <>Qoldiq to\&#96;lov</>
                    </Text>
                    <div className="flex flex-row items-end justify-between mt-0.5 w-full">
                      <Img
                        className="h-[22px] my-1.5 w-[23px]"
                        src="images/img_group512_red_300.svg"
                        alt="group512_One"
                      />
                      <Text
                        className="sm:text-[27px] md:text-[29px] text-[31px] text-red-300_02"
                        size="txtRobotoMedium31Red30002"
                      >
                        890 080 000
                      </Text>
                      <Text
                        className="mb-[3px] mt-[13px] text-[17px] text-blue_gray-400"
                        size="txtRobotoMedium17"
                      >
                        so’m
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-start justify-center p-[26px] sm:px-5 rounded-[5px] w-[67%] md:w-full">
                <Text
                  className="md:ml-[0] ml-[5px] mt-2 sm:text-[17px] md:text-[19px] text-[21px] text-blue_gray-500"
                  size="txtRobotoMedium21"
                >
                  Sof daromad
                </Text>
                <div className="flex flex-row items-center justify-start md:ml-[0] ml-[5px] mt-4 w-[31%] md:w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                    size="txtRobotoMedium32"
                  >
                    125 000 000
                  </Text>
                  <Text
                    className="text-[17px] text-blue_gray-500"
                    size="txtRobotoMedium17Bluegray500"
                  >
                    so’m
                  </Text>
                </div>
                <div className="h-[187px] md:h-[216px] ml-1 md:ml-[0] mt-[35px] relative w-[99%] md:w-full">
                  <div className="absolute md:h-[181px] h-[184px] inset-[0] justify-center m-auto w-full">
                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="md:ml-[0] ml-[3px] text-base text-blue_gray-500"
                          size="txtRobotoMedium16"
                        >
                          400
                        </Text>
                        <Line className="bg-blue_gray-800_03 h-0.5 w-full" />
                        <Text
                          className="md:ml-[0] ml-[3px] mt-[21px] text-base text-blue_gray-500"
                          size="txtRobotoMedium16"
                        >
                          300
                        </Text>
                        <Line className="bg-blue_gray-800_03 h-0.5 w-full" />
                      </div>
                      <div className="h-[60px] md:h-[79px] mt-[19px] relative w-full">
                        <div className="absolute flex flex-col gap-[22px] h-full inset-y-[0] items-center justify-start left-[0] my-auto">
                          <Text
                            className="text-base text-blue_gray-500"
                            size="txtRobotoMedium16"
                          >
                            200
                          </Text>
                          <Text
                            className="text-base text-blue_gray-500"
                            size="txtRobotoMedium16"
                          >
                            100
                          </Text>
                        </div>
                        <Line className="absolute bg-blue_gray-800_03 h-0.5 inset-x-[0] mx-auto top-[30%] w-full" />
                      </div>
                      <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                        <Line className="bg-blue_gray-800_03 h-0.5 w-full" />
                        <Text
                          className="md:ml-[0] ml-[3px] text-base text-blue_gray-500"
                          size="txtRobotoMedium16"
                        >
                          0
                        </Text>
                      </div>
                    </div>
                    <div className="absolute flex flex-col font-segoeui h-full inset-[0] justify-center m-auto w-full">
                      <div className="md:h-[164px] h-[182px] md:ml-[0] ml-[41px] relative w-[94%] md:w-full">
                        <Text
                          className="absolute right-[13%] text-[11px] text-purple-200 top-[0]"
                          size="txtSegoeUISemibold11"
                        >
                          <>
                            Sentyabr oyida so\&#96;m: 1 000 000 <br />$ : 125
                            sotilgan
                          </>
                        </Text>
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[165px] inset-x-[0] items-end justify-start mx-auto p-3 w-full"
                          style={{
                            backgroundImage: "url('images/img_group96.png')",
                          }}
                        >
                          <Img
                            className="h-[11px] mb-[129px] mr-[188px]"
                            src="images/img_union_red_300.svg"
                            alt="union"
                          />
                        </div>
                      </div>
                      <Line className="bg-blue_gray-800_03 h-0.5 w-full" />
                    </div>
                  </div>
                  <div className="absolute bg-indigo-A200 bottom-[0] h-2 left-[5%] rounded-[50%] w-2"></div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end mb-[52px] md:ml-[0] ml-[63px] mt-[11px] w-[91%] md:w-full">
                  <Text
                    className="text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    1
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[35px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    2
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[33px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    3
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[37px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    4
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[33px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    5
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[33px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    6
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[37px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    7
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[35px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    8
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[33px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    9
                  </Text>
                  <Text
                    className="h-[19px] md:ml-[0] ml-[33px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    10
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[29px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    11
                  </Text>
                  <Text
                    className="h-[19px] ml-7 md:ml-[0] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    12
                  </Text>
                  <Text
                    className="h-[19px] md:ml-[0] ml-[25px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    13
                  </Text>
                  <Text
                    className="h-[19px] md:ml-[0] ml-[26px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    14
                  </Text>
                  <Text
                    className="h-[19px] md:ml-[0] ml-[23px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    15
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[276px] flex h-screen md:hidden justify-start left-[0] overflow-auto top-[0]"
          >
            <Img
              className="h-[82px] md:ml-[0] ml-[49px] mr-11"
              src="images/img_group834.svg"
              alt="groupSeventySix"
            />
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[160px] md:ml-[0] ml-[33px] mr-[83px] mt-[181px]"
              onClick={() => navigate("/moliyakassa")}
              leftIcon={
                <div className="h-6 mr-[21px] w-6 bg-blue_gray-500">
                  <Img
                    className="h-6"
                    src="images/img_arrowdown_blue_gray_500.svg"
                    alt="arrow_down"
                  />
                </div>
              }
            >
              <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
                BUYURTMALAR
              </div>
            </Button>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "16px 16px 16px 32px",
                  gap: "29px",
                  color: "#6e768c",
                  fontWeight: 500,
                  fontSize: "16px",
                  [`&:hover, &.ps-active`]: {
                    color: "#ffffff",
                    backgroundColor: "#4047577e !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-end mb-[21px] w-full"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
        </div>
        <div className="absolute bg-blue_gray-900_87_01 bottom-[2%] flex flex-col items-center justify-start p-4 md:px-5 right-[1%] rounded-[5px] w-4/5">
          <div className="flex flex-col md:gap-10 gap-[78px] items-center justify-start mb-[35px] w-[96%] md:w-full">
            <div className="flex flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
              <Text
                className="mt-[17px] sm:text-[17px] md:text-[19px] text-[21px] text-blue_gray-500"
                size="txtRobotoMedium21"
              >
                Harajatlar
              </Text>
              <Text
                className="text-white-A700 text-xl"
                size="txtRobotoMedium20WhiteA700"
              >
                305 800 000
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[99%] md:w-full">
              <div className="h-[185px] relative w-[185px]">
                <div className="flex flex-col gap-[5px] h-full items-center justify-start mt-[60px] mx-auto">
                  <Text
                    className="text-[22px] text-blue_gray-500 text-center sm:text-lg md:text-xl"
                    size="txtRobotoMedium22Bluegray500"
                  >
                    Buyurtma{" "}
                  </Text>
                  <Text
                    className="text-center text-white-A700 text-xl"
                    size="txtRobotoMedium20WhiteA700"
                  >
                    33 125 568
                  </Text>
                </div>
                <Img
                  className="absolute h-[185px] inset-[0] justify-center m-auto w-[185px]"
                  src="images/img_group517_blue_400.svg"
                  alt="group517"
                />
              </div>
              <div className="h-[185px] relative w-[185px]">
                <div className="flex flex-col h-full items-center justify-start mt-[58px] mx-auto">
                  <Text
                    className="text-[22px] text-blue_gray-500 text-center sm:text-lg md:text-xl"
                    size="txtRobotoMedium22Bluegray500"
                  >
                    Reklama
                  </Text>
                  <Text
                    className="mt-1 text-center text-white-A700 text-xl"
                    size="txtRobotoMedium20WhiteA700"
                  >
                    1 125 568
                  </Text>
                </div>
                <Img
                  className="absolute h-[185px] inset-[0] justify-center m-auto w-[185px]"
                  src="images/img_group517_gray_900_185x185.svg"
                  alt="group517_One"
                />
              </div>
              <div className="h-[185px] relative w-[185px]">
                <div className="flex flex-col h-full items-center justify-start mt-[60px] mx-auto">
                  <Text
                    className="text-[22px] text-blue_gray-500 text-center sm:text-lg md:text-xl"
                    size="txtRobotoMedium22Bluegray500"
                  >
                    Marketing
                  </Text>
                  <Text
                    className="text-center text-white-A700 text-xl"
                    size="txtRobotoMedium20WhiteA700"
                  >
                    5 125 568
                  </Text>
                </div>
                <Img
                  className="absolute h-[185px] inset-[0] justify-center m-auto w-[185px]"
                  src="images/img_group517_185x185.svg"
                  alt="group517_Two"
                />
              </div>
              <div className="h-[185px] relative w-[185px]">
                <div className="flex flex-col h-full items-center justify-start mt-[57px] mx-auto">
                  <Text
                    className="text-[22px] text-blue_gray-500 text-center sm:text-lg md:text-xl"
                    size="txtRobotoMedium22Bluegray500"
                  >
                    Akfa
                  </Text>
                  <Text
                    className="mt-1 text-center text-white-A700 text-xl"
                    size="txtRobotoMedium20WhiteA700"
                  >
                    8 125 568
                  </Text>
                </div>
                <Img
                  className="absolute h-[185px] inset-[0] justify-center m-auto w-[185px]"
                  src="images/img_group517_gray_900_185x185.svg"
                  alt="group517_Three"
                />
              </div>
              <div className="h-[185px] relative w-[185px]">
                <div className="flex flex-col gap-[5px] h-full items-center justify-start mt-[57px] mx-auto">
                  <Text
                    className="text-[22px] text-blue_gray-500 text-center sm:text-lg md:text-xl"
                    size="txtRobotoMedium22Bluegray500"
                  >
                    Aksesuar
                  </Text>
                  <Text
                    className="text-center text-white-A700 text-xl"
                    size="txtRobotoMedium20WhiteA700"
                  >
                    1 125 568
                  </Text>
                </div>
                <Img
                  className="absolute h-[185px] inset-[0] justify-center m-auto w-[185px]"
                  src="images/img_group517_185x185.svg"
                  alt="group517_Four"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoliyaDashboardPage;
