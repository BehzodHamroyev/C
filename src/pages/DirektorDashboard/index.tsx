import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const daromadOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const DirektorDashboardPage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_icoutlineshop_white_a700.svg"
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
          className="h-6 mb-[5px] w-6"
          src="images/img_rislideshowline.svg"
          alt="rislideshowline"
        />
      ),
      label: "Sowroomlar oynasi",
    },
    {
      icon: (
        <Img
          className="h-6 mb-1.5 w-6"
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
      <div className="bg-gray-900 font-roboto h-[1118px] mx-auto pb-8 relative w-full">
        <div className="absolute sm:h-[1150px] md:h-[1817px] h-[900px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <div className="sm:h-[1150px] md:h-[1817px] h-[900px] m-auto w-full">
            <Img
              className="h-[900px] m-auto object-cover w-full"
              src="images/img_showroombuyurtmalar.png"
              alt="globalOne"
            />
            <div className="absolute flex flex-col gap-[25px] justify-start right-[1%] top-[3%] w-4/5">
              <div className="flex flex-row items-end justify-end md:ml-[0] ml-[916px] w-[16%] md:w-full">
                <div className="flex flex-col h-[38px] items-center justify-start w-[38px]">
                  <Img
                    className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                    src="images/img_il1588xn1_2.png"
                    alt="il1588xnOne"
                  />
                </div>
                <Text
                  className="mb-[3px] ml-[11px] mt-[7px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-500"
                  size="txtRobotoMedium23"
                >
                  Operator
                </Text>
                <Img
                  className="h-[7px] ml-[23px] my-[15px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
              <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                <List
                  className="sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                    <div className="bg-blue_gray-900_87 flex flex-row gap-[38px] items-start justify-start p-[15px] rounded-[5px] w-full">
                      <Img
                        className="h-[55px] ml-3.5 mt-4"
                        src="images/img_question.svg"
                        alt="question"
                      />
                      <div className="flex flex-col items-start justify-start mt-2.5 w-[48%]">
                        <Text
                          className="text-blue_gray-500 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Harajatlar
                        </Text>
                        <Text
                          className="mt-3 text-[22px] text-gray-400 sm:text-lg md:text-xl"
                          size="txtRobotoMedium22Gray400"
                        >
                          56 000 000
                        </Text>
                        <div className="flex flex-col items-center justify-start mt-5">
                          <Text
                            className="text-blue_gray-500 text-sm"
                            size="txtRobotoMedium14"
                          >
                            <span className="text-blue_gray-500 font-roboto text-left font-medium">
                              82%{" "}
                            </span>
                            <span className="text-light_green-400 font-roboto text-left font-medium">
                              18%{" "}
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                    <div className="bg-blue_gray-900_87 flex flex-row gap-[38px] items-center justify-start p-3.5 rounded-[5px] w-full">
                      <Img
                        className="h-[55px] ml-4"
                        src="images/img_question_orange_300.svg"
                        alt="question"
                      />
                      <div className="flex flex-col items-start justify-start mb-[7px] w-[47%]">
                        <Text
                          className="text-blue_gray-500 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Kirimlar
                        </Text>
                        <Text
                          className="mt-6 text-[22px] sm:text-lg text-orange-300 md:text-xl"
                          size="txtRobotoMedium22Orange300"
                        >
                          50 300 000
                        </Text>
                        <div className="flex flex-col items-center justify-start mt-3.5">
                          <Text
                            className="text-blue_gray-500 text-sm"
                            size="txtRobotoMedium14"
                          >
                            <span className="text-blue_gray-500 font-roboto text-left font-medium">
                              81%{" "}
                            </span>
                            <span className="text-orange-300 font-roboto text-left font-medium">
                              29%{" "}
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col items-center justify-start sm:ml-[0] w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="bg-blue_gray-900_87 flex flex-col items-start justify-start p-3.5 rounded-[5px] w-full">
                        <div className="flex flex-col items-end justify-start mb-[7px] ml-4 md:ml-[0] w-[76%] md:w-full">
                          <Text
                            className="text-blue_gray-500 text-sm"
                            size="txtRobotoMedium14"
                          >
                            Zararlar
                          </Text>
                          <div className="flex flex-row gap-[38px] items-start justify-start w-[56%] md:w-full">
                            <Img
                              className="h-[55px]"
                              src="images/img_vector_red_300.svg"
                              alt="vector"
                            />
                            <Text
                              className="mt-[23px] text-[22px] sm:text-lg text-red-300 md:text-xl"
                              size="txtRobotoMedium22Red300"
                            >
                              0.0
                            </Text>
                          </div>
                          <div className="flex flex-row gap-[52px] items-center justify-end mt-2 w-3/5 md:w-full">
                            <Text
                              className="text-blue_gray-500 text-sm"
                              size="txtRobotoMedium14"
                            >
                              100{" "}
                            </Text>
                            <Text
                              className="text-red-300 text-sm"
                              size="txtRobotoMedium14Red300"
                            >
                              0.0%
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue_gray-900_87 flex flex-1 flex-col items-center justify-start sm:ml-[0] p-[15px] rounded-[5px] w-full">
                    <div className="flex flex-row gap-[22px] items-start justify-between mb-1.5 w-[93%] md:w-full">
                      <Img
                        className="h-[53px] mt-[27px] w-[54px]"
                        src="images/img_reply.svg"
                        alt="reply"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-blue_gray-500 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Foyda
                        </Text>
                        <Text
                          className="mt-[22px] sm:text-2xl md:text-[26px] text-[28px] text-light_green-400"
                          size="txtRobotoMedium28"
                        >
                          45 000 000
                        </Text>
                        <div className="flex flex-row gap-[53px] items-center justify-start ml-1 md:ml-[0] mt-2 w-[73%] md:w-full">
                          <Text
                            className="text-blue_gray-500 text-sm"
                            size="txtRobotoMedium14"
                          >
                            453
                          </Text>
                          <Text
                            className="text-light_green-400 text-sm"
                            size="txtRobotoMedium14Lightgreen400"
                          >
                            13%
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex md:flex-col flex-row gap-[11px] items-center justify-between w-full">
                  <div className="bg-gradient  flex md:flex-1 flex-col gap-[29px] items-center justify-end p-1.5 rounded-[5px] w-[33%] md:w-full">
                    <div className="flex flex-col items-start justify-start mt-5 w-[86%] md:w-full">
                      <Text
                        className="text-[17px] text-blue_gray-400"
                        size="txtRobotoMedium17"
                      >
                        Buyurtmalar uumiy summasi
                      </Text>
                      <div className="flex flex-col items-center justify-start mt-[22px] w-full">
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
                      <List
                        className="flex flex-col gap-[42px] mt-3.5 w-[85%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col justify-start w-full">
                            <Text
                              className="md:ml-[0] ml-[39px] text-[17px] text-blue_gray-400"
                              size="txtRobotoMedium17"
                            >
                              <>Oldindan to\&#96;lov</>
                            </Text>
                            <div className="flex flex-row items-center justify-between mt-0.5 w-full">
                              <Img
                                className="h-[22px] w-[23px]"
                                src="images/img_group512.svg"
                                alt="group512"
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
                        <div className="flex flex-col items-center justify-start w-[93%] md:w-full">
                          <div className="flex flex-col justify-start w-full">
                            <Text
                              className="md:ml-[0] ml-[39px] text-[17px] text-blue_gray-400"
                              size="txtRobotoMedium17"
                            >
                              <>Qoldiq to\&#96;lov</>
                            </Text>
                            <div className="flex flex-row items-center justify-between mt-0.5 w-full">
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
                      </List>
                    </div>
                    <div className="bg-orange-300 flex flex-col items-start justify-start p-[11px] rounded-[5px] w-[93%] md:w-full">
                      <div className="flex flex-col justify-start mb-[11px] ml-0.5 md:ml-[0] w-[82%] md:w-full">
                        <Text
                          className="md:ml-[0] ml-[39px] text-[17px] text-blue_gray-800_03"
                          size="txtRobotoMedium17Bluegray80003"
                        >
                          Kassada
                        </Text>
                        <div className="flex flex-row items-end justify-between mt-1 w-full">
                          <Img
                            className="h-[22px] my-1.5 w-[23px]"
                            src="images/img_group512_red_300.svg"
                            alt="group512"
                          />
                          <Text
                            className="sm:text-[27px] md:text-[29px] text-[31px] text-blue_gray-800_03"
                            size="txtRobotoMedium31Bluegray80003"
                          >
                            82 080 000
                          </Text>
                          <Text
                            className="mb-[3px] mt-[13px] text-[17px] text-blue_gray-800_03"
                            size="txtRobotoMedium17Bluegray80003"
                          >
                            so’m
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-center justify-start p-[11px] rounded-[5px] w-[67%] md:w-full">
                    <div className="flex flex-col items-start justify-start mb-[67px] w-[96%] md:w-full">
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                        <Text
                          className="mt-[23px] sm:text-[17px] md:text-[19px] text-[21px] text-blue_gray-500"
                          size="txtRobotoMedium21"
                        >
                          Daromad
                        </Text>
                        <div className="h-10 md:h-[47px] mb-2 relative w-[28%]">
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
                            name="group728"
                            options={daromadOptionsList}
                            isSearchable={false}
                            placeholder="Daromad"
                          />
                        </div>
                      </div>
                      <div className="flex flex-row gap-5 items-center justify-start mt-4 w-[31%] md:w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                          size="txtRobotoMedium32"
                        >
                          45 000 000
                        </Text>
                        <Text
                          className="text-[17px] text-blue_gray-500"
                          size="txtRobotoMedium17Bluegray500"
                        >
                          so’m
                        </Text>
                      </div>
                      <div className="h-[187px] md:h-[216px] mt-[35px] relative w-[99%] md:w-full">
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
                                className="ml-1 md:ml-[0] text-base text-blue_gray-500"
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
                                  Sentyabr oyida so\&#96;m: 1 000 000 <br />$ :
                                  125 sotilgan
                                </>
                              </Text>
                              <div
                                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[165px] inset-x-[0] items-end justify-start mx-auto p-3 w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group96.png')",
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
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[59px] mt-[11px] w-[91%] md:w-full">
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
              </div>
            </div>
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[276px] flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]"
            >
              <Img
                className="common-pointer h-[82px] md:ml-[0] ml-[49px] mr-[43px]"
                src="images/img_group834.svg"
                alt="groupSeventySix"
                onClick={() => navigate("/menu")}
              />
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
                className="flex flex-col items-center justify-end mb-[21px] mt-[187px] pt-[3px] w-full"
              >
                {sideBarMenu?.map((menu, i) => (
                  <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                    {menu.label}
                  </MenuItem>
                ))}
              </Menu>
            </Sidebar>
          </div>
          <FrameFiftyTwoDatafiltr className="absolute flex md:flex-col flex-row gap-[17px] items-center justify-center left-[19%] top-[3%] w-1/2" />
        </div>
        <div className="absolute bg-blue_gray-900_87_01 bottom-[3%] flex flex-col items-center justify-start p-[25px] md:px-5 right-[2%] rounded-[5px] w-[53%]">
          <div className="flex flex-col md:gap-10 gap-[78px] items-start justify-start mb-[3px] w-[99%] md:w-full">
            <div className="flex flex-row sm:gap-10 gap-[347px] items-start justify-start w-[87%] md:w-full">
              <Text
                className="mt-2 sm:text-[17px] md:text-[19px] text-[21px] text-blue_gray-500"
                size="txtRobotoMedium21"
              >
                Homashyo sarfi{" "}
              </Text>
              <Text
                className="text-white-A700 text-xl"
                size="txtRobotoMedium20WhiteA700"
              >
                305 800 000
              </Text>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[3px] w-full">
              <div className="h-[210px] relative w-[210px]">
                <div className="flex flex-col gap-2 h-full justify-start mt-[63px] mx-auto">
                  <Text
                    className="ml-5 md:ml-[0] text-blue_gray-500 text-lg"
                    size="txtRobotoMedium18"
                  >
                    Profillar{" "}
                  </Text>
                  <Text
                    className="sm:text-[29px] md:text-[31px] text-[33px] text-white-A700"
                    size="txtRobotoMedium33"
                  >
                    125 568
                  </Text>
                </div>
                <Img
                  className="absolute h-[210px] inset-[0] justify-center m-auto w-[210px]"
                  src="images/img_group517.svg"
                  alt="group517"
                />
              </div>
              <div className="h-[210px] relative w-[210px]">
                <div className="flex flex-col h-full justify-start mt-[66px] mx-auto">
                  <Text
                    className="ml-5 md:ml-[0] sm:text-[17px] md:text-[19px] text-[21px] text-blue_gray-500"
                    size="txtRobotoMedium21"
                  >
                    Oyna
                  </Text>
                  <Text
                    className="mt-0.5 sm:text-[29px] md:text-[31px] text-[33px] text-white-A700"
                    size="txtRobotoMedium33"
                  >
                    125 568
                  </Text>
                </div>
                <Img
                  className="absolute h-[210px] inset-[0] justify-center m-auto w-[210px]"
                  src="images/img_group517_gray_900.svg"
                  alt="group517_One"
                />
              </div>
              <div className="h-[210px] relative w-[210px]">
                <div className="flex flex-col gap-[5px] h-full items-center justify-start mt-16 mx-auto">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-blue_gray-500"
                    size="txtRobotoMedium21"
                  >
                    Aksesuar
                  </Text>
                  <Text
                    className="sm:text-[29px] md:text-[31px] text-[33px] text-white-A700"
                    size="txtRobotoMedium33"
                  >
                    125 568
                  </Text>
                </div>
                <Img
                  className="absolute h-[210px] inset-[0] justify-center m-auto w-[210px]"
                  src="images/img_group517_gray_900_210x210.svg"
                  alt="group517_Two"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[3%] flex flex-col items-center justify-start left-[19%] md:px-5 w-[26%]">
          <div className="bg-blue_gray-900_87 flex flex-col gap-[17px] items-start justify-center p-7 sm:px-5 rounded-[5px] w-full">
            <Text
              className="mt-1 sm:text-[17px] md:text-[19px] text-[21px] text-blue_gray-500"
              size="txtRobotoMedium21"
            >
              <>Ro\&#96;yhatga olinganlar</>
            </Text>
            <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Line className="bg-blue_gray-800_03 h-[3px] w-full" />
                <Text
                  className="mt-[9px] text-[15px] text-blue_gray-500"
                  size="txtRobotoMedium15Bluegray500"
                >
                  Umumiy soni
                </Text>
                <div className="flex flex-row items-start justify-between mt-0.5 w-full">
                  <div className="flex flex-col justify-start">
                    <div className="flex flex-row gap-[37px] items-start justify-start mr-3 w-[89%] md:w-full">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtRobotoMedium20WhiteA700"
                      >
                        356
                      </Text>
                      <Text
                        className="h-[19px] mt-1 text-[17px] text-red-300"
                        size="txtRobotoMedium17Red300"
                      >
                        49
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[71px] text-[17px] text-blue_gray-500"
                      size="txtRobotoMedium17Bluegray500"
                    >
                      51%
                    </Text>
                  </div>
                  <Img
                    className="h-[31px] mt-[3px]"
                    src="images/img_line46.svg"
                    alt="lineFortySix"
                  />
                </div>
              </div>
            </div>
            <div className="h-[171px] md:h-[97px] mb-1 relative w-[99%]">
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                  <Line className="bg-blue_gray-800_03 h-[3px] w-full" />
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Qiziquvchilar
                      </Text>
                      <div className="flex flex-row gap-[37px] items-start justify-start mt-0.5 w-[89%] md:w-full">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtRobotoMedium20WhiteA700"
                        >
                          356
                        </Text>
                        <Text
                          className="h-[19px] mt-1 text-[17px] text-red-300"
                          size="txtRobotoMedium17Red300"
                        >
                          83
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[71px] text-[17px] text-blue_gray-500"
                        size="txtRobotoMedium17Bluegray500"
                      >
                        37%
                      </Text>
                    </div>
                    <Img
                      className="h-[79px] mt-0.5"
                      src="images/img_line46_blue_400.svg"
                      alt="lineFortySix_One"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Line className="bg-blue_gray-800_03 h-[3px] w-full" />
                  <Text
                    className="mt-[9px] text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    Shartnoma tuzganlar
                  </Text>
                  <div className="flex flex-row items-start justify-start w-full">
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtRobotoMedium20WhiteA700"
                    >
                      356
                    </Text>
                    <div className="md:h-6 h-[39px] ml-[37px] mt-[5px] relative w-[11%]">
                      <Text
                        className="absolute h-[19px] left-[0] text-[17px] text-light_green-400_03 top-[0]"
                        size="txtRobotoMedium17Lightgreen40003"
                      >
                        37
                      </Text>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto text-[17px] text-blue_gray-500 w-max"
                        size="txtRobotoMedium17Bluegray500"
                      >
                        83%
                      </Text>
                    </div>
                    <Img
                      className="h-[33px] ml-[58px]"
                      src="images/img_line48.svg"
                      alt="lineFortyEight"
                    />
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

export default DirektorDashboardPage;
