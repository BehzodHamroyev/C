import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { CheckBox, Img, Input, Line, SelectBox, Text } from "components";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const muddatiOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const statusOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShowroomBuyurtmalarstatusPage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-6 mb-[241px] w-6"
          src="images/img_icoutlineshop.svg"
          alt="icoutlineshop"
        />
      ),
      label: <Text className="mt-1">DASHBOARD</Text>,
      href: "/direktordashboard",
      active: window.location.pathname === "/direktordashboard",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[241px] w-6"
          src="images/img_bipersonworkspace.svg"
          alt="bipersonworkspa"
        />
      ),
      label: (
        <Text className="mt-[3px] uppercase">
          <>Mijozlar ro\&#96;yhati</>
        </Text>
      ),
    },
    {
      icon: (
        <Img
          className="h-5 mb-[246px]"
          src="images/img_vector.svg"
          alt="vector"
        />
      ),
      label: (
        <>
          <Text className="uppercase">
            <>To\&#96;lov qabul qilish</>
          </Text>
          <Img
            className="h-[5px]"
            src="images/img_line49_blue_gray_500.svg"
            alt="lineFortyNine_One"
          />
        </>
      ),
    },
  ];

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat font-roboto h-[900px] mx-auto sm:pr-5 pr-[26px] py-[26px] relative w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="md:h-[4118px] h-[845px] sm:h-[877px] m-auto md:px-5 w-full">
          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[81%]">
            <div className="flex flex-col gap-[22px] items-center justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                <div className="flex flex-row gap-[25px] items-end justify-between w-[29%] sm:w-full">
                  <Text
                    className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-400"
                    size="txtRobotoMedium35"
                  >
                    SHOW ROOM{" "}
                  </Text>
                  <Text
                    className="mt-[13px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-500"
                    size="txtRobotoMedium23"
                  >
                    Andjon
                  </Text>
                </div>
                <div className="flex flex-row items-end justify-between w-[17%] sm:w-full">
                  <div className="h-[38px] relative w-[38px]">
                    <Img
                      className="h-[38px] m-auto rounded-[50%] w-[38px]"
                      src="images/img_il1588xn1.png"
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
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-center justify-end p-[15px] rounded-[5px] w-[32%] md:w-full">
                  <div className="flex flex-col gap-[13px] justify-start w-[51%] md:w-full">
                    <div className="flex flex-col items-center justify-start ml-8 md:ml-[0]">
                      <Text
                        className="text-blue_gray-500 text-sm"
                        size="txtRobotoMedium14"
                      >
                        <>Oldindan to\&#96;lovalar</>
                      </Text>
                    </div>
                    <div className="flex flex-row items-end justify-evenly w-full">
                      <Text
                        className="sm:text-2xl md:text-[26px] text-[28px] text-light_green-400"
                        size="txtRobotoMedium28"
                      >
                        7 190 000
                      </Text>
                      <Text
                        className="mb-[3px] mt-[11px] text-[15px] text-light_green-400"
                        size="txtRobotoMedium15"
                      >
                        <>so\&#96;m</>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-center justify-end p-[18px] rounded-[5px] w-[32%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[56%] md:w-full">
                    <div className="flex flex-col gap-[9px] justify-start w-full">
                      <Text
                        className="md:ml-[0] ml-[26px] text-blue_gray-500 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Umumiy summa
                      </Text>
                      <div className="flex flex-row items-end justify-evenly w-full">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-blue-400"
                          size="txtRobotoMedium28Blue400"
                        >
                          30 100 000
                        </Text>
                        <Text
                          className="mb-[3px] mt-[11px] text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          <>so\&#96;m</>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-center justify-end p-[18px] rounded-[5px] w-[32%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-[57%] md:w-full">
                    <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-500 text-sm"
                        size="txtRobotoMedium14"
                      >
                        <>To\&#96;lov qilnishi kerak</>
                      </Text>
                      <div className="flex flex-row items-end justify-evenly w-full">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-red-300"
                          size="txtRobotoMedium28Red300"
                        >
                          22 910 000
                        </Text>
                        <Text
                          className="mb-[3px] mt-[11px] text-[15px] text-red-300"
                          size="txtRobotoMedium15Red300"
                        >
                          <>so\&#96;m</>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-start pr-[3px] py-[3px] rounded-[5px] w-full">
                <div className="flex flex-col gap-[9px] justify-start mb-[21px] mt-[9px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-5 md:ml-[0] w-3/4 md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between w-1/2 md:w-full">
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
                    <SelectBox
                      className="font-medium leading-[normal] md:ml-[0] ml-[60px] md:mt-0 my-1 text-base text-left w-[21%] md:w-full"
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
                      options={muddatiOptionsList}
                      isSearchable={false}
                      placeholder="Muddati"
                      shape="round"
                      color="blue_gray_800"
                      size="xs"
                      variant="fill"
                    />
                    <SelectBox
                      className="font-medium leading-[normal] md:ml-[0] ml-[25px] md:mt-0 my-1 text-base text-left w-[21%] md:w-full"
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
                      options={statusOptionsList}
                      isSearchable={false}
                      placeholder="Status"
                      shape="round"
                      color="blue_gray_800"
                      size="xs"
                      variant="fill"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Line className="bg-blue_gray-800_01 h-0.5 w-full" />
                    <div className="md:h-[3408px] h-[500px] sm:h-[506px] mt-1.5 relative w-full">
                      <div className="absolute md:h-[480px] h-[490px] inset-[0] justify-center m-auto w-full">
                        <Text
                          className="absolute left-[5%] text-[15px] text-blue_gray-500 top-[0]"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Mijoz
                        </Text>
                        <Line className="bg-blue_gray-800_01 h-0.5 mt-[31px] mx-auto w-full" />
                        <div className="absolute md:h-[480px] h-[490px] inset-[0] justify-center m-auto w-full">
                          <div className="md:h-[480px] h-[490px] m-auto w-full">
                            <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[15%] w-full" />
                            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[7%] w-[3%]">
                              <Text
                                className="text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                PDF
                              </Text>
                              <Img
                                className="h-[19px] mt-6 w-[19px]"
                                src="images/img_file.svg"
                                alt="file"
                              />
                              <Img
                                className="h-[19px] mt-[22px] w-[19px]"
                                src="images/img_file.svg"
                                alt="file_One"
                              />
                              <Img
                                className="h-[19px] mt-6 w-[19px]"
                                src="images/img_file.svg"
                                alt="file_Two"
                              />
                              <Img
                                className="h-[19px] mt-[22px] w-[19px]"
                                src="images/img_file.svg"
                                alt="file_Three"
                              />
                              <Img
                                className="h-[19px] mt-[25px] w-[19px]"
                                src="images/img_file.svg"
                                alt="file_Four"
                              />
                              <Img
                                className="h-[19px] mt-3.5 w-[19px]"
                                src="images/img_file.svg"
                                alt="file_Five"
                              />
                              <Img
                                className="h-[19px] mt-[22px] w-[19px]"
                                src="images/img_file.svg"
                                alt="file_Six"
                              />
                              <Img
                                className="h-[19px] mt-[25px] w-[19px]"
                                src="images/img_file.svg"
                                alt="file_Seven"
                              />
                              <Img
                                className="h-[19px] mt-[29px] w-[19px]"
                                src="images/img_file.svg"
                                alt="file_Eight"
                              />
                              <Img
                                className="h-[19px] mt-[23px] w-[19px]"
                                src="images/img_file.svg"
                                alt="file_Nine"
                              />
                              <Img
                                className="h-[19px] mt-[23px] w-[19px]"
                                src="images/img_file.svg"
                                alt="file_Ten"
                              />
                            </div>
                          </div>
                          <Img
                            className="absolute h-px inset-x-[0] mx-auto top-[24%]"
                            src="images/img_group90.svg"
                            alt="groupNinety"
                          />
                          <Img
                            className="absolute h-px inset-x-[0] mx-auto top-[32%]"
                            src="images/img_group90.svg"
                            alt="groupNinetyOne"
                          />
                          <Img
                            className="absolute bottom-[43%] h-px inset-x-[0] mx-auto"
                            src="images/img_group90.svg"
                            alt="group103"
                          />
                          <Img
                            className="absolute h-[38px] inset-x-[0] mx-auto top-[41%]"
                            src="images/img_group92.svg"
                            alt="groupNinetyTwo"
                          />
                          <Img
                            className="absolute bottom-[34%] h-px inset-x-[0] mx-auto"
                            src="images/img_group90.svg"
                            alt="group104"
                          />
                          <Img
                            className="absolute bottom-[24%] h-px inset-x-[0] mx-auto"
                            src="images/img_group90.svg"
                            alt="group102"
                          />
                          <Img
                            className="absolute bottom-[15%] h-px inset-x-[0] mx-auto"
                            src="images/img_group90.svg"
                            alt="groupNinetySeven"
                          />
                          <Img
                            className="absolute bottom-[6%] h-px inset-x-[0] mx-auto"
                            src="images/img_group90.svg"
                            alt="groupNinetyEight"
                          />
                        </div>
                      </div>
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[2%] my-auto w-[83%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                            <Img
                              className="h-[433px] md:mt-0 mt-[50px]"
                              src="images/img_group565.svg"
                              alt="group565"
                            />
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[19px] md:mt-0 mt-[43px]">
                              <Text
                                className="text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                Botir Qodirov
                              </Text>
                              <Text
                                className="mt-[23px] text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                Sobir Ikromov
                              </Text>
                              <Text
                                className="mt-6 text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                <>Maftuna To\&#96;lanboyeva</>
                              </Text>
                              <Text
                                className="mt-[26px] text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                Nodir Fayziyev
                              </Text>
                              <Text
                                className="mt-[25px] text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                Fahriddin Mahmudov
                              </Text>
                              <Text
                                className="mt-[15px] text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                <>Maftuna To\&#96;lanboyeva</>
                              </Text>
                              <Text
                                className="mt-[26px] text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                Nodir Fayziyev
                              </Text>
                              <Text
                                className="mt-[25px] text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                Fahriddin Mahmudov
                              </Text>
                              <Text
                                className="mt-[31px] text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                Saida Komilova
                              </Text>
                              <Text
                                className="mt-6 text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                Mohira Abdumalikov
                              </Text>
                              <Text
                                className="mt-[26px] text-[15px] text-blue-400"
                                size="txtRobotoMedium15Blue400"
                              >
                                Umarjon Mahkamjonov
                              </Text>
                            </div>
                            <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[88px] md:mt-0 mt-[3px] w-[11%] md:w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-[15px] text-blue_gray-500"
                                      size="txtRobotoMedium15Bluegray500"
                                    >
                                      Loyiha nomeri
                                    </Text>
                                    <div className="flex flex-row gap-3 items-center justify-start mt-[21px] w-[67%] md:w-full">
                                      <Img
                                        className="h-[18px] md:h-auto object-cover w-[26%]"
                                        src="images/img_.png"
                                        alt="One"
                                      />
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1035
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center justify-start mt-[23px] w-[85%] md:w-full">
                                      <Img
                                        className="h-[18px] md:h-auto object-cover w-1/5"
                                        src="images/img_.png"
                                        alt="Two"
                                      />
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        120002
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center justify-start mt-[23px] w-[85%] md:w-full">
                                      <Img
                                        className="h-[18px] md:h-auto object-cover w-1/5"
                                        src="images/img_.png"
                                        alt="Three"
                                      />
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        120002
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center justify-start mt-[26px] w-[82%] md:w-full">
                                      <Img
                                        className="h-[18px] md:h-auto object-cover w-[21%]"
                                        src="images/img_.png"
                                        alt="Four"
                                      />
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        120001
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center justify-start mt-[26px] w-[85%] md:w-full">
                                      <Img
                                        className="h-[18px] md:h-auto object-cover w-1/5"
                                        src="images/img_.png"
                                        alt="Five"
                                      />
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        119999
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center justify-start mt-[13px] w-[85%] md:w-full">
                                      <Img
                                        className="h-[18px] md:h-auto object-cover w-1/5"
                                        src="images/img_.png"
                                        alt="Six"
                                      />
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        120002
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center justify-start mt-[26px] w-[82%] md:w-full">
                                      <Img
                                        className="h-[18px] md:h-auto object-cover w-[21%]"
                                        src="images/img_.png"
                                        alt="Seven"
                                      />
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        120001
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center justify-start mt-[26px] w-[85%] md:w-full">
                                      <Img
                                        className="h-[18px] md:h-auto object-cover w-1/5"
                                        src="images/img_.png"
                                        alt="Eight"
                                      />
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        119999
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center justify-start mt-[31px] w-[85%] md:w-full">
                                      <Img
                                        className="h-[18px] md:h-auto object-cover w-1/5"
                                        src="images/img_.png"
                                        alt="Nine"
                                      />
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        119997
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center justify-start mt-6 w-[85%] md:w-full">
                                      <Img
                                        className="h-[18px] md:h-auto object-cover w-1/5"
                                        src="images/img_.png"
                                        alt="Ten"
                                      />
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        119996
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center justify-start mt-6 w-[85%] md:w-full">
                                      <Img
                                        className="h-[18px] md:h-auto object-cover w-1/5"
                                        src="images/img_.png"
                                        alt="Eleven"
                                      />
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        119995
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[85px] w-[14%] md:w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="ml-0.5 md:ml-[0] text-[15px] text-blue_gray-500"
                                  size="txtRobotoMedium15Bluegray500"
                                >
                                  Manzili
                                </Text>
                                <Text
                                  className="mt-4 text-[10px] text-blue_gray-500"
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
                                  className="text-[10px] text-gray-400"
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
                                  className="mt-[7px] text-[10px] text-gray-400"
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
                                  className="mt-[11px] text-[10px] text-blue_gray-500"
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
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[33px]">
                              <Text
                                className="ml-0.5 md:ml-[0] text-[15px] text-blue_gray-500"
                                size="txtRobotoMedium15Bluegray500"
                              >
                                <>O\&#96;lchovchi</>
                              </Text>
                              <Text
                                className="mt-[26px] text-gray-400 text-xs"
                                size="txtRobotoMedium12"
                              >
                                Abbos Zokirov
                              </Text>
                              <Text
                                className="mt-[27px] text-gray-400 text-xs"
                                size="txtRobotoMedium12"
                              >
                                Alisher Odilov
                              </Text>
                              <Text
                                className="mt-[27px] text-gray-400 text-xs"
                                size="txtRobotoMedium12"
                              >
                                ----------------------------
                              </Text>
                              <Text
                                className="mt-[30px] text-gray-400 text-xs"
                                size="txtRobotoMedium12"
                              >
                                Begzod Eraliyev
                              </Text>
                              <Text
                                className="mt-[29px] text-gray-400 text-xs"
                                size="txtRobotoMedium12"
                              >
                                Mansur Ergashev
                              </Text>
                              <Text
                                className="mt-4 text-gray-400 text-xs"
                                size="txtRobotoMedium12"
                              >
                                ----------------------------
                              </Text>
                              <Text
                                className="mt-[30px] text-gray-400 text-xs"
                                size="txtRobotoMedium12"
                              >
                                Begzod Eraliyev
                              </Text>
                              <Text
                                className="mt-[29px] text-gray-400 text-xs"
                                size="txtRobotoMedium12"
                              >
                                Mansur Ergashev
                              </Text>
                              <Text
                                className="mt-8 text-gray-400 text-xs"
                                size="txtRobotoMedium12"
                              >
                                Fahriddin Mahmudov
                              </Text>
                              <Text
                                className="mt-7 text-gray-400 text-xs"
                                size="txtRobotoMedium12"
                              >
                                ----------------------------
                              </Text>
                              <Text
                                className="mt-[27px] text-gray-400 text-xs"
                                size="txtRobotoMedium12"
                              >
                                Zuhra Ashurova
                              </Text>
                            </div>
                            <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[35px] w-[5%] md:w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col items-end justify-start w-full">
                                  <Text
                                    className="mr-0.5 text-[15px] text-blue_gray-500"
                                    size="txtRobotoMedium15Bluegray500"
                                  >
                                    Status
                                  </Text>
                                  <div className="bg-light_green-400_01 h-3.5 mr-[15px] mt-[21px] rounded-[50%] w-3.5"></div>
                                  <div className="flex flex-col items-start justify-start w-[90%] md:w-full">
                                    <Text
                                      className="text-[8px] text-light_green-700"
                                      size="txtRobotoMedium8"
                                    >
                                      <>O\&#96;lchovda</>
                                    </Text>
                                    <div className="bg-light_green-400 h-3.5 md:ml-[0] ml-[11px] mt-[15px] rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-0.5 text-[8px] text-light_green-700"
                                      size="txtRobotoMedium8"
                                    >
                                      <>O\&#96;lchovda</>
                                    </Text>
                                    <div className="bg-orange-300 h-3.5 md:ml-[0] ml-[11px] mt-3.5 rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-[3px] text-[8px] text-lime-700"
                                      size="txtRobotoMedium8Lime700"
                                    >
                                      Kutilmoqda
                                    </Text>
                                    <div className="bg-light_green-400_01 h-3.5 md:ml-[0] ml-[11px] mt-[17px] rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-0.5 text-[8px] text-light_green-700"
                                      size="txtRobotoMedium8"
                                    >
                                      <>O\&#96;lchovda</>
                                    </Text>
                                    <div className="bg-light_green-400_01 h-3.5 md:ml-[0] ml-[11px] mt-[17px] rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-0.5 text-[8px] text-light_green-700"
                                      size="txtRobotoMedium8"
                                    >
                                      <>O\&#96;lchovda</>
                                    </Text>
                                    <div className="bg-orange-300 h-3.5 md:ml-[0] ml-[11px] mt-1 rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-[3px] text-[8px] text-lime-700"
                                      size="txtRobotoMedium8Lime700"
                                    >
                                      Kutilmoqda
                                    </Text>
                                    <div className="bg-light_green-400_01 h-3.5 md:ml-[0] ml-[11px] mt-[17px] rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-0.5 text-[8px] text-light_green-700"
                                      size="txtRobotoMedium8"
                                    >
                                      <>O\&#96;lchovda</>
                                    </Text>
                                    <div className="bg-light_green-400_01 h-3.5 md:ml-[0] ml-[11px] mt-[17px] rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-0.5 text-[8px] text-light_green-700"
                                      size="txtRobotoMedium8"
                                    >
                                      <>O\&#96;lchovda</>
                                    </Text>
                                    <div className="bg-light_green-400 h-3.5 md:ml-[0] ml-[11px] mt-[22px] rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-0.5 text-[8px] text-light_green-700"
                                      size="txtRobotoMedium8"
                                    >
                                      <>O\&#96;lchovda</>
                                    </Text>
                                    <div className="bg-orange-300 h-3.5 md:ml-[0] ml-[11px] mt-4 rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-[3px] text-[8px] text-lime-700"
                                      size="txtRobotoMedium8Lime700"
                                    >
                                      Kutilmoqda
                                    </Text>
                                    <div className="bg-light_green-400_01 h-3.5 md:ml-[0] ml-[11px] mt-[15px] rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-0.5 text-[8px] text-light_green-700"
                                      size="txtRobotoMedium8"
                                    >
                                      <>O\&#96;lchovda</>
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start ml-11 md:ml-[0]">
                              <Text
                                className="text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                Muddati
                              </Text>
                              <Text
                                className="mt-[26px] text-blue_gray-500 text-xs"
                                size="txtRobotoMedium12Bluegray500"
                              >
                                Sen 11. 2022
                              </Text>
                              <Text
                                className="mt-[27px] text-blue_gray-500 text-xs"
                                size="txtRobotoMedium12Bluegray500"
                              >
                                Sen 12. 2022
                              </Text>
                              <Text
                                className="mt-[26px] text-blue_gray-500 text-xs"
                                size="txtRobotoMedium12Bluegray500"
                              >
                                Sen 12. 2022
                              </Text>
                              <Text
                                className="mt-[29px] text-blue_gray-500 text-xs"
                                size="txtRobotoMedium12Bluegray500"
                              >
                                Sen 12. 2022
                              </Text>
                              <Text
                                className="mt-[29px] text-blue_gray-500 text-xs"
                                size="txtRobotoMedium12Bluegray500"
                              >
                                Sen 12. 2022
                              </Text>
                              <Text
                                className="mt-4 text-blue_gray-500 text-xs"
                                size="txtRobotoMedium12Bluegray500"
                              >
                                Sen 12. 2022
                              </Text>
                              <Text
                                className="mt-[29px] text-blue_gray-500 text-xs"
                                size="txtRobotoMedium12Bluegray500"
                              >
                                Sen 12. 2022
                              </Text>
                              <Text
                                className="mt-[29px] text-blue_gray-500 text-xs"
                                size="txtRobotoMedium12Bluegray500"
                              >
                                Sen 12. 2022
                              </Text>
                              <Text
                                className="mt-[34px] text-blue_gray-500 text-xs"
                                size="txtRobotoMedium12Bluegray500"
                              >
                                Sen 13. 2022
                              </Text>
                              <Text
                                className="mt-[27px] text-blue_gray-500 text-xs"
                                size="txtRobotoMedium12Bluegray500"
                              >
                                Sen 13. 2022
                              </Text>
                              <Text
                                className="mt-[27px] text-blue_gray-500 text-xs"
                                size="txtRobotoMedium12Bluegray500"
                              >
                                Sen 13. 2022
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-px mt-[3px]"
                      src="images/img_group90.svg"
                      alt="groupNinetyNine"
                    />
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[31px] items-end justify-start mt-8 w-[33%] md:w-full"
                      style={{
                        backgroundImage: "url('images/img_group71.svg')",
                      }}
                    >
                      <div className="flex flex-row items-start justify-end mb-0.5 mr-2 w-[85%] md:w-full">
                        <Text
                          className="mt-[5px] text-gray-400 text-sm"
                          size="txtRobotoMedium14Gray400"
                        >
                          1
                        </Text>
                        <Text
                          className="ml-[31px] mt-[5px] text-gray-400 text-sm"
                          size="txtRobotoMedium14Gray400"
                        >
                          2
                        </Text>
                        <Text
                          className="ml-[30px] mt-[5px] text-gray-400 text-sm"
                          size="txtRobotoMedium14Gray400"
                        >
                          3
                        </Text>
                        <Text
                          className="ml-[30px] mt-[5px] text-gray-400 text-sm"
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
                          className="ml-7 mt-[5px] text-gray-400 text-sm"
                          size="txtRobotoMedium14Gray400"
                        >
                          6
                        </Text>
                        <Text
                          className="ml-[30px] mt-1.5 text-gray-400 text-sm"
                          size="txtRobotoMedium14Gray400"
                        >
                          7
                        </Text>
                        <Text
                          className="ml-[29px] mt-1.5 text-gray-400 text-sm"
                          size="txtRobotoMedium14Gray400"
                        >
                          8
                        </Text>
                        <Img
                          className="h-[9px] ml-8 mt-[9px]"
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
          <div className="absolute bg-blue_gray-800_7e flex flex-col gap-4 justify-start left-[0] py-3 top-[29%] w-1/5">
            <div className="h-[60px] relative w-full">
              <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-center justify-center m-auto p-[17px] w-full">
                <div className="flex flex-row items-center justify-between w-[89%] md:w-full">
                  <CheckBox
                    className="font-medium leading-[normal] sm:pl-5 text-base text-left uppercase"
                    inputClassName="h-[18px] mr-[5px] w-[18px]"
                    name="buyurtmalar"
                    id="buyurtmalar"
                    label="BUYURTMALAR"
                    size="sm"
                  ></CheckBox>
                  <Img
                    className="h-1"
                    src="images/img_line49.svg"
                    alt="lineFortyNine"
                  />
                </div>
              </div>
              <div className="absolute bg-red-300 h-[60px] inset-y-[0] left-[0] my-auto w-[6%]"></div>
            </div>
            <div className="flex flex-col gap-[23px] items-start justify-start mb-2.5 md:ml-[0] ml-[82px]">
              <Text
                className="text-blue_gray-500 text-sm"
                size="txtRobotoMedium14"
              >
                Yangi buyurtma yaratish
              </Text>
              <Text
                className="text-blue_gray-500 text-sm"
                size="txtRobotoMedium14"
              >
                Tasdiqlangan
              </Text>
              <Text
                className="text-blue_gray-500 text-sm"
                size="txtRobotoMedium14"
              >
                Bekor qilinganlar
              </Text>
              <Text
                className="common-pointer text-blue_gray-500 text-sm"
                size="txtRobotoMedium14"
                onClick={() => navigate("/showroombuyurtmalartarixi")}
              >
                Buyurtmalar tarixi
              </Text>
            </div>
          </div>
        </div>
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[207px] bg-cover bg-no-repeat flex h-screen md:hidden justify-start left-[3%] overflow-auto md:px-5 top-[0]"
          style={{ backgroundImage: "url('images/img_group834.svg')" }}
        >
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[82px] items-center justify-start md:ml-[0] mx-[11px] w-[88%]"
            style={{ backgroundImage: "url('images/img_group834.svg')" }}
          >
            <Img
              className="h-[82px]"
              src="images/img_group834.svg"
              alt="group103_One"
            />
          </div>
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                paddingBottom: "36px",
                paddingLeft: "36px",
                gap: "18px",
                color: "#6e768c",
                fontWeight: 500,
                fontSize: "14px",
              },
            }}
            className="flex flex-col items-center justify-end mt-[95px] sm:pr-5 pr-9 w-full"
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

export default ShowroomBuyurtmalarstatusPage;
