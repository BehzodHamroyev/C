import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const profilTuriOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShowroomBuyurtmayaratishPage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_icoutlineshop_white_a700_24x24.svg"
          alt="icoutlineshop"
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
          className="h-6 mb-[5px] w-6"
          src="images/img_fluentclipboar.svg"
          alt="fluentclipboar"
        />
      ),
      label: "<>Hodimlar ro&#96;yhati</>",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[7px] w-6"
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
          className="h-[21px] mb-[5px]"
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
          className="h-[21px] mb-[5px]"
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
          className="h-[21px] mb-[3px]"
          src="images/img_user_blue_gray_500.svg"
          alt="user"
        />
      ),
      label: "Buyurtmaga chiqim",
      href: "/moliyabuyurtmagachiqimtarixi",
      active: window.location.pathname === "/moliyabuyurtmagachiqimtarixi",
    },
    {
      icon: (
        <Img
          className="h-6 mb-1.5 w-6"
          src="images/img_bipersonworkspace.svg"
          alt="bipersonworkspa"
        />
      ),
      label: "<>Mijozlar ro&#96;yhati</>",
    },
  ];

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat flex flex-col font-roboto h-[900px] items-center justify-start mx-auto sm:pr-5 pr-[27px] py-[27px] w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mb-2.5 mx-auto md:px-5 w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[276px] bg-cover bg-no-repeat flex h-screen md:hidden justify-start md:mt-0 mt-7 overflow-auto top-[0]"
            style={{ backgroundImage: "url('images/img_group834.svg')" }}
          >
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[82px] items-center justify-start md:ml-[0] ml-[49px] mr-[43px] w-[66%]"
              style={{ backgroundImage: "url('images/img_group834.svg')" }}
            >
              <Img
                className="h-[82px]"
                src="images/img_group834.svg"
                alt="group103"
              />
            </div>
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[127px] md:ml-[0] ml-[31px] mr-[117px] mt-[93px]"
              onClick={() => navigate("/direktordashboard")}
              leftIcon={
                <Img
                  className="h-6 mr-[21px]"
                  src="images/img_icoutlineshop.svg"
                  alt="ic:outline-shop"
                />
              }
            >
              <div className="font-medium leading-[normal] text-blue_gray-500 text-left text-sm">
                DASHBOARD
              </div>
            </Button>
            <Menu
              menuItemStyles={{
                button: {
                  padding: "17px 17px 17px 27px",
                  gap: "21px",
                  color: "#6e768c",
                  fontWeight: 500,
                  fontSize: "16px",
                  [`&:hover, &.ps-active`]: {
                    color: "#ffffff",
                    backgroundColor: "#4047577e !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-end mb-[21px] mt-[5px] pt-[3px] w-full"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-4 items-center justify-start w-full">
            <div className="flex flex-col gap-[19px] items-start justify-start w-[98%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                <FrameFiftyTwoDatafiltr className="flex md:flex-1 md:flex-col flex-row gap-[17px] items-center justify-between w-[65%] md:w-full" />
                <div className="flex md:flex-1 flex-row items-end justify-between w-[17%] md:w-full">
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
              <div className="bg-blue_gray-900_87_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-start px-[15px] w-[42%] md:w-full">
                <OmborTaminotchigaZayavkaOneTab
                  className="flex flex-col items-center justify-start w-[136px]"
                  username="HOMASHYO "
                />
                <div className="flex relative w-[65%] sm:w-full">
                  <OmborTaminotchigaZayavkaOneTab
                    className="flex flex-col items-center justify-start my-auto shadow-bs2 w-[165px]"
                    username="tAYYOR"
                  />
                  <OmborTaminotchigaZayavkaOneTab
                    className="flex flex-col items-center justify-start ml-[-12px] my-auto w-[121px] z-[1]"
                    username="sAVDO"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-end pr-0.5 pt-0.5 rounded-[5px] w-full">
                <div className="flex flex-col gap-[7px] items-center justify-start mt-2 w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between mb-[3px] w-[39%] md:w-full">
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
                    <div className="h-10 md:h-[39px] md:mt-0 mt-[3px] relative w-[19%] md:w-full">
                      <div className="bg-blue_gray-800_8d border border-blue_gray-600_8d border-solid h-[39px] m-auto rounded-[3px] w-full"></div>
                      <SelectBox
                        className="absolute font-medium inset-[0] justify-center leading-[normal] m-auto text-base text-gray-400 text-left w-[87%] sm:w-full"
                        placeholderClassName="text-gray-400"
                        indicator={
                          <Img
                            className="h-[3px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[7px] right-[0] absolute"
                            src="images/img_arrowdown_gray_400.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="group715"
                        options={profilTuriOptionsList}
                        isSearchable={false}
                        placeholder="Profil turi"
                      />
                    </div>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[651px] items-center justify-start p-3.5 w-full"
                    style={{ backgroundImage: "url('images/img_group10.svg')" }}
                  >
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[96%] md:w-full">
                      <div className="flex flex-col items-start justify-start md:mt-0 mt-[5px] w-[2%] md:w-full">
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[84%] sm:w-full"
                          src="images/img_.png"
                          alt="ThirtyEight"
                        />
                        <Text
                          className="mt-9 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          01
                        </Text>
                        <Text
                          className="h-[18px] mt-5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          02
                        </Text>
                        <Text
                          className="h-[18px] mt-[15px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          03
                        </Text>
                        <Text
                          className="h-[18px] mt-[21px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          04
                        </Text>
                        <Text
                          className="h-[18px] mt-[23px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          05
                        </Text>
                      </div>
                      <div className="flex flex-col md:gap-10 gap-[372px] justify-start md:ml-[0] ml-[45px] w-[19%] md:w-full">
                        <div className="flex flex-col items-start justify-start mr-[77px]">
                          <Text
                            className="text-[15px] text-blue_gray-500"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            Buyurtma raqami
                          </Text>
                          <Text
                            className="mt-9 text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            1024
                          </Text>
                          <Text
                            className="mt-[23px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            1025
                          </Text>
                          <Text
                            className="mt-[15px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            1026
                          </Text>
                          <Text
                            className="mt-[21px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            1027
                          </Text>
                          <Text
                            className="mt-[23px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            1028
                          </Text>
                        </div>
                        <Text
                          className="md:ml-[0] ml-[141px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Summa{" "}
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[59px]">
                        <Text
                          className="text-[15px] text-blue_gray-500 text-center"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          <>
                            Mahsulot <br />
                            turi
                          </>
                        </Text>
                        <Text
                          className="mt-[22px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Eshik
                        </Text>
                        <Text
                          className="mt-5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Eshik
                        </Text>
                        <Text
                          className="mt-4 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Rom
                        </Text>
                        <Text
                          className="mt-[21px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Rom
                        </Text>
                        <Text
                          className="mt-[23px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Rom
                        </Text>
                      </div>
                      <List
                        className="sm:flex-col flex-row gap-14 grid grid-cols-2 md:ml-[0] ml-[31px] w-1/5 md:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="md:ml-[0] ml-[3px] text-[15px] text-blue_gray-500 text-center"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            Profil turi
                          </Text>
                          <Text
                            className="mt-[41px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Aldoks
                          </Text>
                          <Text
                            className="mt-5 text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Exclusive
                          </Text>
                          <Text
                            className="mt-[15px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Exclusive
                          </Text>
                          <Text
                            className="mt-[21px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            PVH
                          </Text>
                          <Text
                            className="mt-[23px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            PVH
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-[15px] text-blue_gray-500"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            <>O\&#96;lchamlari</>
                          </Text>
                          <Text
                            className="mt-[41px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            1200 x 2100
                          </Text>
                          <Text
                            className="mt-5 text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            800 x 2100
                          </Text>
                          <Text
                            className="mt-[15px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            1500 x 1600
                          </Text>
                          <Text
                            className="mt-[22px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            1500 x 1800
                          </Text>
                          <Text
                            className="mt-[23px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            1500 x 2500
                          </Text>
                        </div>
                      </List>
                      <List
                        className="sm:flex-col flex-row md:gap-10 gap-[123px] grid grid-cols-2 md:ml-[0] ml-[70px] w-[22%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              Soni
                            </Text>
                            <Text
                              className="mt-[41px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              5
                            </Text>
                            <Text
                              className="mt-[19px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              25
                            </Text>
                            <Text
                              className="mt-[15px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              10
                            </Text>
                            <Text
                              className="mt-[21px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              25
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              10
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-[15px] text-blue_gray-500 text-center"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              <>
                                Tan narxi
                                <br />
                                (dona)
                              </>
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              1 200 000
                            </Text>
                            <Text
                              className="mt-5 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              2 000 000
                            </Text>
                            <Text
                              className="mt-[15px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              800 000
                            </Text>
                            <Text
                              className="mt-[21px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              820 000
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              900 000
                            </Text>
                          </div>
                        </div>
                      </List>
                      <div className="flex flex-col items-center justify-start ml-11 md:ml-[0] w-[9%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="ml-0.5 md:ml-[0] text-[15px] text-blue_gray-500 text-center"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            Summasi
                          </Text>
                          <Text
                            className="mt-[41px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            6 000 000
                          </Text>
                          <Text
                            className="mt-[19px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            100 000 000
                          </Text>
                          <Text
                            className="mt-[15px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            8 000 000
                          </Text>
                          <Text
                            className="mt-[21px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            20 500 000
                          </Text>
                          <Text
                            className="mt-[23px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            9 000 000
                          </Text>
                          <Text
                            className="mt-[372px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            143 500 000
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
      </div>
    </>
  );
};

export default ShowroomBuyurtmayaratishPage;
