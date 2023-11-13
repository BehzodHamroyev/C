import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const profilTuriOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShowroomBuyurtmayaratishThreePage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

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
            <Menu
              menuItemStyles={{
                button: {
                  padding: "17px 17px 17px 27px",
                  gap: "21px",
                  color: "#6e768c",
                  fontWeight: 500,
                  fontSize: "14px",
                  [`&:hover, &.ps-active`]: {
                    color: "#ffffff",
                    backgroundColor: "#4047577e !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-end mb-[21px] mt-[72px] pt-[21px] w-full"
            >
              <div className="flex flex-col items-center justify-start pb-[18px] w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_icoutlineshop.svg"
                      alt="icoutlineshop"
                    />
                  }
                  active={window.location.pathname === "/direktordashboard"}
                  href="/direktordashboard"
                >
                  <Text>DASHBOARD</Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_icoutlineshop_white_a700_24x24.svg"
                      alt="icoutlineshop_One"
                    />
                  }
                >
                  <Text>OMBOR & SAVDO</Text>
                </MenuItem>
              </div>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[276px] mt-2.5"
                onClick={() => navigate("/showroombuyurtmalarstatusone")}
                leftIcon={
                  <Img
                    className="h-6 mr-5"
                    src="images/img_rislideshowline.svg"
                    alt="ri:slideshow-line"
                  />
                }
              >
                <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
                  Sowroomlar oynasi
                </div>
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[276px] mt-8"
                onClick={() => navigate("/kassa")}
                leftIcon={
                  <Img
                    className="h-6 mr-5"
                    src="images/img_fluentclipboar.svg"
                    alt="fluent:clipboard-bullet-list-rtl-20-regular"
                  />
                }
              >
                <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
                  <>Hodimlar ro\&#96;yhati</>
                </div>
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[276px] mt-8"
                onClick={() =>
                  navigate("/omborqoldiqidsibuyurtmalarroyhatione")
                }
                leftIcon={
                  <Img
                    className="h-6 mr-5"
                    src="images/img_mdicircularsaw_blue_gray_500.svg"
                    alt="mdi:circular-saw"
                  />
                }
              >
                <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
                  Ombor qoldiq{" "}
                </div>
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[276px] mt-[35px]"
                onClick={() => navigate("/moliyakirimtarixione")}
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
                  Kirim tarixi
                </div>
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[276px] mt-[35px]"
                onClick={() => navigate("/moliyachiqimtarixi")}
                leftIcon={
                  <div className="mr-3.5 bg-blue_gray-500">
                    <Img
                      src="images/img_settings_blue_gray_500.svg"
                      alt="settings"
                    />
                  </div>
                }
              >
                <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
                  Chiqim tarixi
                </div>
              </Button>
              <div className="flex flex-col items-center justify-end mt-9 w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-[21px] mt-[3px]"
                      src="images/img_user_blue_gray_500.svg"
                      alt="user"
                    />
                  }
                  active={
                    window.location.pathname === "/moliyabuyurtmagachiqimtarixi"
                  }
                  href="/moliyabuyurtmagachiqimtarixi"
                >
                  <Text className="text-base uppercase">Buyurtmaga chiqim</Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_bipersonworkspace.svg"
                      alt="bipersonworkspa"
                    />
                  }
                >
                  <Text className="uppercase">
                    <>Mijozlar ro\&#96;yhati</>
                  </Text>
                </MenuItem>
              </div>
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
              <div className="bg-blue_gray-900_87_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-start pl-[15px] w-[42%] md:w-full">
                <OmborTaminotchigaZayavkaOneTab
                  className="flex flex-col items-center justify-start w-[136px]"
                  username="HOMASHYO "
                />
                <OmborTaminotchigaZayavkaOneTab
                  className="flex flex-col items-center justify-start ml-1.5 sm:ml-[0] w-[121px]"
                  username="TAYYOR"
                />
                <OmborTaminotchigaZayavkaOneTab
                  className="flex flex-col items-center justify-start sm:ml-[0] ml-[11px] shadow-bs2 w-[165px]"
                  username="SAVDO"
                />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-end pr-0.5 pt-0.5 rounded-[5px] w-full">
                <div className="flex flex-col gap-[15px] items-center justify-start mt-[13px] w-full">
                  <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-[96%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-[39%] sm:w-full">
                      <Img
                        className="h-[18px] w-[17px]"
                        src="images/img_refresh.svg"
                        alt="refresh"
                      />
                      <Input
                        name="group478"
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
                      className="font-medium leading-[normal] text-base text-left w-[16%] sm:w-full"
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
                      options={profilTuriOptionsList}
                      isSearchable={false}
                      placeholder="Profil turi"
                      shape="round"
                      color="blue_gray_800"
                      size="xs"
                      variant="fill"
                    />
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
                          alt="ThirtyNine"
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
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[45px]">
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
                        <Text
                          className="mt-[371px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Summa{" "}
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[137px]">
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
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[70px] w-[3%] md:w-full">
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
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[109px] w-[9%] md:w-full">
                        <div className="flex flex-col gap-[23px] items-end justify-start w-full">
                          <Text
                            className="text-[15px] text-blue_gray-500 text-center"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            <>
                              Sotish narxi
                              <br />
                              (dona)
                            </>
                          </Text>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-[15px] text-gray-400"
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
                      </div>
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

export default ShowroomBuyurtmayaratishThreePage;
