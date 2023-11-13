import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import Sidebar1 from "components/Sidebar1";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const profilNomiOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const OmborBichishvarenderTenPage: React.FC = () => {
  const sideBarMenu: SideBarMenuType = [
    { label: "<>O&#96;lcham</>" },
    { label: "1600 " },
    { label: "1200 " },
    { label: "1200 " },
    { label: "1133 " },
    { label: "1133 " },
    { label: "483 " },
    { label: "1199" },
    { label: "1228 " },
    { label: "1199 " },
    { label: "1706 " },
    { label: "1306 " },
    { label: "1306 " },
    { label: "1253" },
    { label: "603 " },
    { label: "1253 " },
    { label: "603  " },
  ];

  return (
    <>
      <div className="bg-gray-900 flex sm:flex-col md:flex-col flex-row font-roboto sm:gap-5 md:gap-5 items-center mx-auto w-full">
        <div className="h-[1055px] md:px-5 relative w-[85%] md:w-full">
          <div className="absolute bg-blue_gray-800_04 flex flex-col items-center justify-start p-[9px] right-[0] top-[0] w-[61%]">
            <div className="flex flex-col gap-[27px] justify-start mb-[13px] w-[97%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  Aldoks(Kosa) -Dubmocco
                </Text>
                <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-3/5 sm:w-full">
                  <div className="h-5 relative w-[24%] sm:w-full">
                    <div className="absolute bg-white-A700 border border-blue_gray-500 border-solid h-5 inset-[0] justify-center m-auto rounded-[5px] w-full"></div>
                    <Text
                      className="absolute bottom-[0] left-[27%] text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Yangi
                    </Text>
                  </div>
                  <Text
                    className="bg-light_green-400 border border-blue_gray-500 border-solid h-5 justify-center pl-[26px] pr-[30px] sm:px-5 rounded-[5px] text-[15px] text-white-A700 w-[98px]"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    Sexda
                  </Text>
                  <Text
                    className="bg-blue-400 border border-blue_gray-500 border-solid h-5 justify-center sm:pl-5 pl-[26px] pr-5 rounded-[5px] text-[15px] text-white-A700 w-[98px]"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    Havoda
                  </Text>
                  <Text
                    className="bg-orange-300 border border-blue_gray-500 border-solid h-5 justify-center pl-[19px] pr-4 rounded-[5px] text-[15px] text-white-A700 w-[98px]"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    Omborda
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[7px] w-3/4 md:w-full">
                <div className="flex sm:flex-col flex-row gap-[17px] items-center justify-between w-full">
                  <Text
                    className="bg-light_green-400 border border-blue_gray-500 border-solid h-5 justify-center sm:px-5 px-[35px] rounded-[5px] text-[15px] text-white-A700 w-40"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    1600(k)
                  </Text>
                  <Text
                    className="bg-light_green-400 border border-blue_gray-500 border-solid h-5 justify-center sm:px-5 px-[35px] rounded-[5px] text-[15px] text-white-A700 w-40"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    1600(k)
                  </Text>
                  <Text
                    className="bg-light_green-400 border border-blue_gray-500 border-solid h-5 justify-center sm:px-5 px-[35px] rounded-[5px] text-[15px] text-white-A700 w-40"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    1600(k)
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-between mt-[17px] w-[98%] md:w-full">
                  <Text
                    className="bg-light_green-400 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[30px] sm:px-5 rounded-[5px] text-[15px] text-white-A700 w-[120px]"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    1200(k)
                  </Text>
                  <Text
                    className="bg-light_green-400 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[31px] sm:px-5 rounded-[5px] text-[15px] text-white-A700 w-[120px]"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    1200(k)
                  </Text>
                  <Text
                    className="bg-orange-300 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-8 sm:px-5 rounded-[5px] text-[15px] text-white-A700 w-[120px]"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    1200(k)
                  </Text>
                  <Text
                    className="bg-orange-300 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[30px] sm:px-5 rounded-[5px] text-[15px] text-white-A700 w-[120px]"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    1200(k)
                  </Text>
                </div>
                <div className="flex flex-row gap-[7px] items-center justify-start mt-3.5 w-[49%] md:w-full">
                  <Text
                    className="bg-white-A700 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[31px] sm:px-5 rounded-[5px] text-[15px] text-blue_gray-500 w-[120px]"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    1200(k)
                  </Text>
                  <Text
                    className="bg-white-A700 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[31px] sm:px-5 rounded-[5px] text-[15px] text-blue_gray-500 w-[120px]"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    1200(k)
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Sidebar1 className="!sticky !w-[480px] bg-blue_gray-900 flex h-screen md:hidden inset-y-[0] justify-start left-[0] my-auto overflow-auto top-[0]" />
          <div className="absolute flex flex-col gap-[42px] items-start justify-start right-[10%] top-[18%] w-1/2">
            <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-start w-[64%] md:w-full">
              <div className="flex flex-row gap-[15px] items-center justify-between w-[21%] sm:w-full">
                <Button
                  className="flex h-[31px] items-center justify-center rounded-[3px] w-[31px]"
                  shape="round"
                  color="blue_gray_800_04"
                  size="xs"
                  variant="fill"
                >
                  <Img className="h-6" src="images/img_offer.svg" alt="offer" />
                </Button>
                <Button
                  className="flex h-[31px] items-center justify-center rounded-[3px] w-[31px]"
                  shape="round"
                  color="blue_gray_800_04"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_computer.svg" alt="computer" />
                </Button>
              </div>
              <div className="flex flex-row items-center justify-start w-3/4 sm:w-full">
                <SelectBox
                  className="border border-blue_gray-800_03 border-solid font-medium leading-[normal] rounded-bl-[3px] rounded-tl-[3px] text-left text-xs w-[65%] sm:w-full"
                  placeholderClassName="text-blue_gray-500_99"
                  indicator={
                    <Img
                      className="h-[3px] mr-[0] outline-blue_gray-800_04 outline-[0.5px] outline w-[7px]"
                      src="images/img_arrowdown_blue_gray_500_3x7.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="group104"
                  options={profilNomiOptionsList}
                  isSearchable={false}
                  placeholder="Profil nomi"
                  color="white_A700"
                  size="sm"
                  variant="fill"
                />
                <Text
                  className="bg-white-A700 border border-blue_gray-800_03 border-solid h-[31px] justify-center pb-1.5 pl-[11px] sm:pr-5 pr-8 pt-[9px] text-blue_gray-500_99 text-xs w-[51px]"
                  size="txtRobotoMedium12Bluegray50099"
                >
                  4
                </Text>
                <div className="bg-blue_gray-800_04 flex flex-col items-center justify-start p-1.5 rounded-br-[5px] rounded-tr-[5px] w-[18%]">
                  <Img
                    className="h-3.5 mb-[5px] w-3.5"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                </div>
              </div>
            </div>
            <List
              className="flex flex-col gap-[33px] items-center w-full"
              orientation="vertical"
            >
              <div className="h-[38px] sm:h-[60px] relative w-full">
                <div className="absolute bg-white-A700 flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-end mx-auto md:pl-10 sm:pl-5 pl-[119px] top-[0] w-full">
                  <div className="bg-white-A700 border border-blue_gray-500 border-solid h-5 w-1/4"></div>
                  <div className="bg-blue-400 h-5 w-[76%]"></div>
                </div>
                <Line className="absolute bg-blue_gray-500 h-[35px] left-[0] top-[0] w-px" />
                <div className="absolute flex flex-row h-full inset-y-[0] items-start justify-start left-[0] my-auto w-1/5">
                  <Img
                    className="h-px mt-7"
                    src="images/img_line127.svg"
                    alt="line127"
                  />
                  <div className="flex flex-col items-center justify-start mt-5">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      1200(k)
                    </Text>
                  </div>
                  <Img
                    className="h-px mt-7"
                    src="images/img_line128.svg"
                    alt="line128"
                  />
                  <Line className="bg-blue_gray-500 h-[35px] mb-[3px] w-px" />
                </div>
                <div className="absolute flex flex-row h-full inset-y-[0] items-start justify-center left-[20%] my-auto w-1/5">
                  <Img
                    className="h-px mt-7"
                    src="images/img_line127.svg"
                    alt="line127_One"
                  />
                  <div className="flex flex-col items-center justify-start mt-5">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      1200(k)
                    </Text>
                  </div>
                  <Img
                    className="h-px mt-7"
                    src="images/img_line128.svg"
                    alt="line128_One"
                  />
                  <Line className="bg-blue_gray-500 h-[35px] mb-[3px] w-px" />
                </div>
              </div>
              <div className="sm:h-[100px] h-[38px] relative w-full">
                <div className="absolute bg-white-A700 flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <div className="bg-white-A700 border border-blue_gray-500 border-solid h-5 w-1/5"></div>
                  <div className="bg-white-A700 border border-blue_gray-500 border-solid h-5 w-1/5"></div>
                  <div className="bg-blue-400 h-5 w-[61%]"></div>
                </div>
                <Line className="absolute bg-blue_gray-500 h-[35px] left-[0] top-[0] w-px" />
                <div className="absolute flex flex-row h-full inset-y-[0] items-start justify-start left-[0] my-auto w-1/5">
                  <Img
                    className="h-px mt-7"
                    src="images/img_line127.svg"
                    alt="line127"
                  />
                  <div className="flex flex-col items-center justify-start mt-5">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      1200(k)
                    </Text>
                  </div>
                  <Img
                    className="h-px mt-7"
                    src="images/img_line128.svg"
                    alt="line128"
                  />
                  <Line className="bg-blue_gray-500 h-[35px] mb-[3px] w-px" />
                </div>
                <div className="absolute flex flex-row h-full inset-y-[0] items-start justify-center left-[20%] my-auto w-1/5">
                  <Img
                    className="h-px mt-7"
                    src="images/img_line127.svg"
                    alt="line127_One"
                  />
                  <div className="flex flex-col items-center justify-start mt-5">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      1200(k)
                    </Text>
                  </div>
                  <Img
                    className="h-px mt-7"
                    src="images/img_line128.svg"
                    alt="line128_One"
                  />
                  <Line className="bg-blue_gray-500 h-[35px] mb-[3px] w-px" />
                </div>
              </div>
            </List>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start md:px-5 w-[16%] md:w-full">
          <div className="bg-blue_gray-900 flex flex-col gap-[17px] items-center justify-start py-2 w-full">
            <div className="flex flex-row items-center justify-start w-[85%] md:w-full">
              <Text
                className="bg-blue_gray-500 h-10 justify-center pl-[18px] sm:pr-5 pr-[35px] py-2.5 rounded-bl-[3px] rounded-tl-[3px] text-base text-white-A700 w-[135px]"
                size="txtRobotoMedium16WhiteA700"
              >
                50
              </Text>
              <div className="bg-blue-400 flex flex-col items-end justify-start p-2.5 rounded-br-[3px] rounded-tr-[3px] w-[30%]">
                <Img
                  className="h-5 mr-1.5 w-5"
                  src="images/img_location.svg"
                  alt="location"
                />
              </div>
            </div>
            <div className="h-[892px] md:h-[981px] mb-[89px] overflow-auto relative w-full">
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Line className="bg-blue_gray-800_01 h-px w-full" />
                  <Line className="bg-blue_gray-800_01 h-0.5 mt-[38px] w-full" />
                  <Line className="bg-blue_gray-800_01 h-px mt-[26px] w-full" />
                  <Line className="bg-blue_gray-800_01 h-px mt-[26px] w-full" />
                  <Line className="bg-blue_gray-800_01 h-px mt-[26px] w-full" />
                </div>
              </div>
              <Line className="absolute bg-blue_gray-800_03 h-[487px] left-[0] top-[0] w-px" />
              <Line className="absolute bg-blue_gray-800_03 h-[892px] inset-y-[0] my-auto right-[38%] w-px" />
              <div className="absolute flex flex-col gap-3.5 justify-start left-[8%] top-[1%] w-[47%]">
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[39px]">
                  <Text
                    className="text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    ID
                  </Text>
                </div>
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <Text
                    className="bg-orange-300 border border-blue_gray-500 border-solid h-5 justify-center pl-6 pr-[27px] sm:px-5 rounded-[5px] text-[15px] text-white-A700 w-[104px]"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    1600(k)
                  </Text>
                  <Text
                    className="bg-orange-300 border border-blue_gray-500 border-solid h-5 justify-center pl-6 pr-[27px] sm:px-5 rounded-[5px] text-[15px] text-white-A700 w-[104px]"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    1630(k)
                  </Text>
                  <Text
                    className="bg-light_green-400 border border-blue_gray-500 border-solid h-5 justify-center pl-6 pr-[27px] sm:px-5 rounded-[5px] text-[15px] text-white-A700 w-[104px]"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    1650(k)
                  </Text>
                </div>
              </div>
              <div className="absolute flex flex-col gap-[23px] items-center justify-start right-[15%] top-[1%] w-[14%]">
                <Text
                  className="text-[15px] text-blue_gray-500"
                  size="txtRobotoMedium15Bluegray500"
                >
                  Soni
                </Text>
                <div className="flex flex-col gap-[5px] items-start justify-start">
                  <Text
                    className="text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    1
                  </Text>
                  <Text
                    className="text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    2
                  </Text>
                  <Text
                    className="text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    2
                  </Text>
                </div>
              </div>
              <Line className="absolute bg-blue_gray-800_03 h-[487px] right-[0] top-[0] w-px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OmborBichishvarenderTenPage;
