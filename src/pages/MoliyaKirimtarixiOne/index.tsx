import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import MoliyaKassaRowsaralash from "components/MoliyaKassaRowsaralash";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const toLovTuriOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const aynanOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MoliyaKirimtarixiOnePage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat font-roboto h-[900px] mx-auto sm:pr-5 pr-[27px] py-[27px] relative w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[217px] flex h-screen md:hidden justify-start left-[3%] overflow-auto md:px-5 top-[0]"
        >
          <Img
            className="h-[82px] ml-2.5 md:ml-[0] mr-6"
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
                fontSize: "14px",
                paddingLeft: "21px",
                paddingRight: "21px",
              },
            }}
            className="flex flex-col items-center justify-start mt-[97px] sm:pr-5 pr-[38px] w-full"
          >
            <div className="flex flex-col gap-[35px] items-center justify-start w-full">
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
                    src="images/img_icoutlineshop_blue_gray_500.svg"
                    alt="icoutlineshop_One"
                  />
                }
              >
                <Text className="uppercase">OMBOR & SAVDO</Text>
              </MenuItem>
            </div>
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[217px] mt-[35px]"
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
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[217px] mt-[35px]"
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
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[217px] mt-[35px]"
              onClick={() => navigate("/omborqoldiqidsibuyurtmalarroyhatione")}
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
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[217px] mt-[91px]"
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
            <div className="flex flex-col gap-[35px] items-center justify-start mt-[35px] w-full">
              <MenuItem
                icon={
                  <Img
                    className="h-[21px]"
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
        <div className="absolute flex flex-col gap-[25px] items-center justify-start md:px-5 right-[2%] top-[3%] w-[78%]">
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
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
            <OmborTaminotchigaZayavkaOneTab
              className="flex flex-col items-center justify-start md:mt-0 mt-[51px] w-[136px]"
              username="umumiy   "
            />
            <OmborTaminotchigaZayavkaOneTab
              className="flex flex-col items-center justify-start ml-10 md:ml-[0] md:mt-0 mt-[51px] w-[163px]"
              username="Showroom"
            />
            <div className="bg-blue_gray-900_87 flex md:flex-1 flex-row gap-[29px] items-center justify-center mb-[3px] md:ml-[0] ml-[426px] p-[18px] rounded-[5px] w-[32%] md:w-full">
              <Img
                className="h-[55px] ml-[9px]"
                src="images/img_question_orange_300.svg"
                alt="question"
              />
              <div className="flex flex-col items-center justify-start mb-0.5 mr-[71px] w-[57%]">
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-500 text-sm"
                    size="txtRobotoMedium14"
                  >
                    Umumiy kirim summasi
                  </Text>
                  <div className="flex flex-row items-end justify-evenly w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-orange-300"
                      size="txtRobotoMedium28Orange300"
                    >
                      56 084 000
                    </Text>
                    <Text
                      className="mb-[3px] mt-[11px] text-[15px] text-orange-300"
                      size="txtRobotoMedium15Orange300"
                    >
                      <>so\&#96;m</>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[11%] md:h-[1737px] h-[592px] md:px-5 right-[3%] w-[79%] md:w-full">
          <div className="md:h-[1737px] h-[592px] m-auto w-full">
            <div className="absolute bg-blue_gray-900_87_01 flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto p-[19px] rounded-[5px] w-full">
              <div className="flex md:flex-1 sm:flex-col flex-row gap-[21px] items-center justify-start mb-[513px] w-[38%] md:w-full">
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
              <div className="h-10 md:h-[553px] mb-[514px] md:ml-[0] ml-[244px] relative w-[19%] md:w-full">
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
                  name="group858"
                  options={toLovTuriOptionsList}
                  isSearchable={false}
                  placeholder="To&#96;lov turi"
                />
              </div>
              <div className="h-10 md:h-[553px] mb-[514px] md:ml-[0] ml-[23px] mr-0.5 relative w-[19%] md:w-full">
                <div className="bg-blue_gray-800_8d border border-blue_gray-600_8d border-solid h-[39px] m-auto rounded-[3px] w-full"></div>
                <SelectBox
                  className="absolute bottom-[23%] font-medium inset-x-[0] leading-[normal] mx-auto text-base text-gray-400 text-left w-[87%] sm:w-full"
                  placeholderClassName="text-gray-400"
                  indicator={
                    <Img
                      className="h-[3px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[7px] right-[0] absolute"
                      src="images/img_arrowdown_gray_400.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="group860"
                  options={aynanOptionsList}
                  isSearchable={false}
                  placeholder="Aynan"
                />
              </div>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-2.5 w-full"
              style={{ backgroundImage: "url('images/img_group400.svg')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-1 w-[96%] md:w-full">
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[189px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[71%] md:w-full"
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
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Qayerdan
                    </Text>
                    <Text
                      className="mt-8 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Mijoz
                    </Text>
                    <Text
                      className="mt-[34px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Mijoz{" "}
                    </Text>
                    <Text
                      className="mt-[30px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Mijoz
                    </Text>
                    <Text
                      className="mt-[42px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Mijoz
                    </Text>
                    <Text
                      className="mt-[38px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Mijoz
                    </Text>
                    <Text
                      className="mt-[35px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Mijoz
                    </Text>
                    <Text
                      className="mt-[34px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Ombor
                    </Text>
                    <Text
                      className="mt-9 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Ombor
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Qayerga
                    </Text>
                    <Text
                      className="mt-[31px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Kassa
                    </Text>
                    <Text
                      className="mt-[34px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Kassa{" "}
                    </Text>
                    <Text
                      className="mt-[30px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Kassa
                    </Text>
                    <Text
                      className="mt-[42px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Kassa
                    </Text>
                    <Text
                      className="mt-[38px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Kassa
                    </Text>
                    <Text
                      className="mt-[35px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Kassa
                    </Text>
                    <Text
                      className="mt-9 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Kassa
                    </Text>
                    <Text
                      className="mt-9 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Kassa
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Aynan
                    </Text>
                    <Text
                      className="mt-[30px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      <>Oldindan to\&#96;lov</>
                    </Text>
                    <Text
                      className="mt-9 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      <>Yakuniy to\&#96;lov</>
                    </Text>
                    <Text
                      className="mt-[29px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      <>Oldindan to\&#96;lov</>
                    </Text>
                    <Text
                      className="mt-[42px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      <>Ko\&#96;cha</>
                    </Text>
                    <Text
                      className="mt-[38px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      <>Oldindan to\&#96;lov</>
                    </Text>
                    <Text
                      className="mt-[35px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      <>Oldindan to\&#96;lov</>
                    </Text>
                    <Text
                      className="mt-[37px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Profil chiqindisi
                    </Text>
                    <Text
                      className="mt-9 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      Selofan chiqindisi
                    </Text>
                  </div>
                </List>
                <div className="flex flex-col items-center justify-start md:mt-0 mt-0.5 w-[14%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Izoh
                    </Text>
                    <div className="flex flex-row items-end justify-evenly mt-[26px] w-full">
                      <Text
                        className="mt-[7px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        1024 loyihaga oldin...
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_icroundkeyboa.svg"
                        alt="icroundkeyboa"
                      />
                    </div>
                    <div className="flex flex-row items-end justify-between mt-[25px] w-full">
                      <Text
                        className="mb-0.5 mt-1.5 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Diller2
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_icroundkeyboa.svg"
                        alt="icroundkeyboa_One"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-between mt-[22px] w-full">
                      <Text
                        className="text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Aksesuarlar
                      </Text>
                      <Img
                        className="h-6 mt-1.5 w-6"
                        src="images/img_icroundkeyboa.svg"
                        alt="icroundkeyboa_Two"
                      />
                    </div>
                    <div className="flex flex-row items-start justify-between mt-4 w-full">
                      <Text
                        className="text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Akdeduarlar
                      </Text>
                      <Img
                        className="h-6 mt-[7px] w-6"
                        src="images/img_icroundkeyboa.svg"
                        alt="icroundkeyboa_Three"
                      />
                    </div>
                    <div className="flex flex-row items-end justify-between mt-8 w-full">
                      <Text
                        className="my-1 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        RetPen
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_icroundkeyboa.svg"
                        alt="icroundkeyboa_Four"
                      />
                    </div>
                    <div className="flex flex-row items-end justify-between mt-[26px] w-full">
                      <Text
                        className="mb-0.5 mt-1.5 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        yodoviy
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_icroundkeyboa.svg"
                        alt="icroundkeyboa_Five"
                      />
                    </div>
                    <div className="flex flex-row items-end justify-between mt-[27px] w-full">
                      <Text
                        className="mb-0.5 mt-1.5 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Mijoz
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_icroundkeyboa.svg"
                        alt="icroundkeyboa_Six"
                      />
                    </div>
                    <div className="flex flex-row items-end justify-between mt-[25px] w-full">
                      <Text
                        className="mb-0.5 mt-1.5 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Showroom
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_icroundkeyboa.svg"
                        alt="icroundkeyboa_Seven"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[33px] items-center justify-start w-[7%] md:w-full">
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
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[4%] flex flex-row sm:gap-10 items-center justify-between left-[7%] w-[47%]">
            <div className="flex flex-col items-start justify-start">
              <Text
                className="text-[15px] text-blue_gray-500"
                size="txtRobotoMedium15Bluegray500"
              >
                Kirim nomi
              </Text>
              <Text
                className="mt-[33px] text-[15px] text-blue-400"
                size="txtRobotoMedium15Blue400"
              >
                1024
              </Text>
              <Text
                className="mt-[31px] text-[15px] text-blue-400"
                size="txtRobotoMedium15Blue400"
              >
                1025
              </Text>
              <Text
                className="mt-[30px] text-[15px] text-blue-400"
                size="txtRobotoMedium15Blue400"
              >
                1024
              </Text>
              <Text
                className="mt-[35px] text-[15px] text-blue-400"
                size="txtRobotoMedium15Blue400"
              >
                1024
              </Text>
              <Text
                className="mt-[35px] text-[15px] text-blue-400"
                size="txtRobotoMedium15Blue400"
              >
                1001
              </Text>
              <Text
                className="mt-8 text-[15px] text-blue-400"
                size="txtRobotoMedium15Blue400"
              >
                1023
              </Text>
              <Text
                className="mt-8 text-[15px] text-blue-400"
                size="txtRobotoMedium15Blue400"
              >
                Profil
              </Text>
              <Text
                className="mt-[33px] text-[15px] text-blue-400"
                size="txtRobotoMedium15Blue400"
              >
                Selofan
              </Text>
              <Text
                className="mt-[35px] text-[15px] text-blue-400"
                size="txtRobotoMedium15Blue400"
              >
                Jami:
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-[21%]">
              <div className="flex flex-col items-start justify-start w-full">
                <Text
                  className="ml-0.5 md:ml-[0] text-[15px] text-blue_gray-500"
                  size="txtRobotoMedium15Bluegray500"
                >
                  Kirim summasi
                </Text>
                <div className="flex flex-row gap-2.5 items-center justify-start mt-[35px] w-[66%] md:w-full">
                  <Img
                    className="h-[13px]"
                    src="images/img_calculator.svg"
                    alt="calculator"
                  />
                  <Text
                    className="text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    150 000
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start mt-[34px] w-[59%] md:w-full">
                  <Img
                    className="h-[13px]"
                    src="images/img_calculator.svg"
                    alt="calculator_One"
                  />
                  <Text
                    className="text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    50 000
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start mt-[33px] w-[66%] md:w-full">
                  <Img
                    className="h-[13px]"
                    src="images/img_calculator.svg"
                    alt="calculator_Two"
                  />
                  <Text
                    className="text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    120 000
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start mt-[38px] w-3/4 md:w-full">
                  <Img
                    className="h-[13px]"
                    src="images/img_calculator.svg"
                    alt="calculator_Three"
                  />
                  <Text
                    className="text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    9 650 000
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-start justify-start mt-[38px] w-3/4 md:w-full">
                  <Img
                    className="h-[13px]"
                    src="images/img_calculator.svg"
                    alt="calculator_Four"
                  />
                  <Text
                    className="text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    7 650 000
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start mt-[35px] w-3/4 md:w-full">
                  <Img
                    className="h-[13px]"
                    src="images/img_calculator.svg"
                    alt="calculator_Five"
                  />
                  <Text
                    className="text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    9 650 000
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start mt-9 w-3/4 md:w-full">
                  <Img
                    className="h-[13px]"
                    src="images/img_calculator.svg"
                    alt="calculator_Six"
                  />
                  <Text
                    className="text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    3 530 000
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start mt-9 w-3/4 md:w-full">
                  <Img
                    className="h-[13px]"
                    src="images/img_calculator.svg"
                    alt="calculator_Seven"
                  />
                  <Text
                    className="text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    1 120 000
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start mt-[35px] w-[82%] md:w-full">
                  <Img
                    className="h-[13px]"
                    src="images/img_trash.svg"
                    alt="trash"
                  />
                  <Text
                    className="text-blue-400 text-xs"
                    size="txtRobotoMedium12Blue400"
                  >
                    56 084 000
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-800_7e bottom-[36%] flex flex-row gap-[22px] items-center justify-start left-[0] pr-[94px] md:px-5 w-1/5">
          <div className="bg-red-300 h-[60px] w-[8%]"></div>
          <div className="flex flex-row gap-[23px] items-start justify-center w-[81%]">
            <Img
              className="h-[23px]"
              src="images/img_camera.svg"
              alt="camera"
            />
            <Text
              className="mt-[3px] text-base text-white-A700 uppercase"
              size="txtRobotoMedium16WhiteA700"
            >
              Kirim tarixi
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoliyaKirimtarixiOnePage;
