import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Line, SelectBox, Text } from "components";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const aldoksKosaDubmoccoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const OmborBichishvarenderNinePage: React.FC = () => {
  const navigate = useNavigate();

  const sideBarMenu: SideBarMenuType = [
    { label: "Gradus " },
    { label: "90 x90" },
    { label: "90 x90" },
    { label: "90 x90" },
    { label: "90 x90" },
    { label: "90 x90" },
    { label: "90 x90" },
    { label: "90 x90" },
    { label: "90 x90" },
    { label: "90 x90" },
    { label: "45 x 45" },
    { label: "45 x 45" },
    { label: "45 x 45" },
    { label: "45 x 45" },
    { label: "45 x 45" },
    { label: "45 x 45" },
    { label: "45 x 45" },
  ];

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
          <Sidebar className="!sticky !w-[480px] bg-blue_gray-900 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]">
            <div className="bg-blue_gray-900 flex md:flex-col flex-row gap-[50px] items-center justify-start p-[9px] w-full">
              <Img
                className="common-pointer h-[41px] mb-[995px] md:ml-[0] ml-[17px] mr-[412px] w-[41px]"
                src="images/img_arrowleft.svg"
                alt="arrowleft_One"
                onClick={() => navigate(-1)}
              />
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-2xl md:text-[22px] text-gray-400 sm:text-xl"
                  size="txtRobotoMedium24"
                >
                  Bichish kartasi\ №120003
                </Text>
              </div>
            </div>
            <Img
              className="common-pointer h-[41px] mb-[995px] md:ml-[0] ml-[17px] mr-[412px] w-[41px]"
              src="images/img_arrowleft.svg"
              alt="arrowleft_One"
              onClick={() => navigate(-1)}
            />
            <div className="flex flex-col items-center justify-start mb-[1001px] ml-[49px] mt-1.5">
              <Text
                className="text-2xl md:text-[22px] text-gray-400 sm:text-xl"
                size="txtRobotoMedium24"
              >
                Bichish kartasi\ №120003
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start mb-[535px] ml-2.5 mr-[304px] mt-[82px]">
              <Text
                className="text-[15px] text-blue_gray-500"
                size="txtRobotoMedium15Bluegray500"
              >
                Profil nomi
              </Text>
              <Text
                className="mt-6 text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                Aldoks(kosa) Dubmocco
              </Text>
              <Text
                className="mt-[78px] text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                Aldoks(qanot) Silver
              </Text>
              <Text
                className="mt-[71px] text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                <>Aldoks(o\&#96;rta) </>
              </Text>
              <Text
                className="mt-[73px] text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                Aldoks
              </Text>
              <Text
                className="mt-20 text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                Aldoks
              </Text>
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  paddingLeft: "4px",
                  flexDirection: "column",
                  color: "#c0c4c6",
                  fontWeight: 500,
                  fontSize: "15px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                  [`&:hover, &.ps-active`]: { color: "#6e768c" },
                },
              }}
              className="flex flex-col items-center justify-start mb-[460px] mt-[78px] md:pr-10 sm:pr-5 pr-[430px] w-[11%]"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
            <div className="flex flex-col items-start justify-start mb-[456px] ml-[262px] mr-40 mt-[82px]">
              <Text
                className="text-[15px] text-blue_gray-500"
                size="txtRobotoMedium15Bluegray500"
              >
                <>O\&#96;lcham</>
              </Text>
              <Text
                className="mt-[27px] text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                1600{" "}
              </Text>
              <Text
                className="mt-2 text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                1200{" "}
              </Text>
              <Text
                className="mt-2 text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                1200{" "}
              </Text>
              <Text
                className="mt-5 text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                1133{" "}
              </Text>
              <Text
                className="mt-2 text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                1133{" "}
              </Text>
              <Text
                className="mt-2 text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                483{" "}
              </Text>
              <Text
                className="mt-[18px] text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                1199
              </Text>
              <Text
                className="mt-2 text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                1228{" "}
              </Text>
              <Text
                className="mt-2 text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                1199{" "}
              </Text>
              <Text
                className="mt-[30px] text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                1706{" "}
              </Text>
              <Text
                className="mt-2 text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                1306{" "}
              </Text>
              <Text
                className="mt-2 text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                1306{" "}
              </Text>
              <Text
                className="mt-[19px] text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                1253
              </Text>
              <Text
                className="mt-2 text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                603{" "}
              </Text>
              <Text
                className="mt-2 text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                1253{" "}
              </Text>
              <Text
                className="mt-2 text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                603{" "}
              </Text>
            </div>
            <div className="flex flex-col gap-[27px] items-center justify-start mb-[451px] ml-[326px] mr-[124px] mt-[83px] w-[7%]">
              <Text
                className="text-[15px] text-blue_gray-500"
                size="txtRobotoMedium15Bluegray500"
              >
                Soni
              </Text>
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  3
                </Text>
                <Text
                  className="mt-2 text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  4
                </Text>
                <Text
                  className="mt-[7px] text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  2
                </Text>
                <Text
                  className="mt-[22px] text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  5
                </Text>
                <Text
                  className="mt-2 text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  1
                </Text>
                <Text
                  className="mt-[7px] text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  6
                </Text>
                <Text
                  className="mt-[19px] text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  2
                </Text>
                <Text
                  className="mt-2 text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  3
                </Text>
                <Text
                  className="mt-[7px] text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  1
                </Text>
                <Text
                  className="mt-[31px] text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  3
                </Text>
                <Text
                  className="mt-2 text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  4
                </Text>
                <Text
                  className="mt-[7px] text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  2
                </Text>
                <Text
                  className="mt-5 text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  4
                </Text>
                <Text
                  className="mt-2 text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  1
                </Text>
                <Text
                  className="mt-[7px] text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  2
                </Text>
                <Text
                  className="mt-3.5 text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  5
                </Text>
              </div>
            </div>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[19px] justify-start md:px-5 w-full">
            <div className="bg-blue_gray-800_04 flex flex-col items-center justify-start p-[9px] w-full">
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
                      className="bg-gray-400_01 border border-blue_gray-500 border-solid h-5 justify-center sm:px-5 px-[35px] rounded-[5px] text-[15px] text-blue_gray-500 w-40"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      1600(k)
                    </Text>
                    <Text
                      className="bg-gray-400_01 border border-blue_gray-500 border-solid h-5 justify-center sm:px-5 px-[35px] rounded-[5px] text-[15px] text-blue_gray-500 w-40"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      1600(k)
                    </Text>
                    <Text
                      className="bg-gray-400_01 border border-blue_gray-500 border-solid h-5 justify-center sm:px-5 px-[35px] rounded-[5px] text-[15px] text-blue_gray-500 w-40"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      1600(k)
                    </Text>
                  </div>
                  <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-between mt-[17px] w-[98%] md:w-full">
                    <Text
                      className="bg-gray-400_01 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[23px] sm:px-5 rounded-[5px] text-[15px] text-blue_gray-500 w-[120px]"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      1200(k)
                    </Text>
                    <Text
                      className="bg-gray-400_01 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[25px] sm:px-5 rounded-[5px] text-[15px] text-blue_gray-500 w-[120px]"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      1200(k)
                    </Text>
                    <Text
                      className="bg-gray-400_01 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[25px] sm:px-5 rounded-[5px] text-[15px] text-blue_gray-500 w-[120px]"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      1200(k)
                    </Text>
                    <Text
                      className="bg-gray-400_01 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[25px] sm:px-5 rounded-[5px] text-[15px] text-blue_gray-500 w-[120px]"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      1200(k)
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[7px] items-center justify-start mt-3.5 w-[49%] md:w-full">
                    <Text
                      className="bg-gray-400_01 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[23px] sm:px-5 rounded-[5px] text-[15px] text-blue_gray-500 w-[120px]"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      1200(k)
                    </Text>
                    <Text
                      className="bg-gray-400_01 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[23px] sm:px-5 rounded-[5px] text-[15px] text-blue_gray-500 w-[120px]"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      1200(k)
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-start md:ml-[0] ml-[11px] w-[65%] md:w-full">
              <div className="flex flex-row gap-[15px] items-center justify-between w-[17%] sm:w-full">
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
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-4/5 sm:w-full">
                <SelectBox
                  className="border border-blue_gray-800_03 border-solid font-medium leading-[normal] rounded-bl-[3px] rounded-tl-[3px] text-[15px] text-left w-[74%] sm:w-full"
                  placeholderClassName="text-blue_gray-500_99"
                  indicator={
                    <Img
                      className="h-[3px] mr-[0] outline-blue_gray-800_04 outline-[0.5px] outline w-[7px]"
                      src="images/img_arrowdown_blue_gray_500_3x7.svg"
                      alt="arrow_down"
                    />
                  }
                  isMulti={false}
                  name="group138"
                  options={aldoksKosaDubmoccoOptionsList}
                  isSearchable={false}
                  placeholder="Aldoks(Kosa) -Dubmocco"
                  color="white_A700"
                  size="md"
                  variant="fill"
                />
                <Text
                  className="bg-white-A700 border border-blue_gray-800_03 border-solid h-[31px] justify-center pb-1.5 pl-[11px] sm:pr-5 pr-8 pt-[9px] text-blue_gray-500_99 text-xs w-[51px]"
                  size="txtRobotoMedium12Bluegray50099"
                >
                  4
                </Text>
                <div className="bg-blue_gray-800_04 flex flex-col items-center justify-start p-2 rounded-br-[5px] rounded-tr-[5px] w-[14%] sm:w-full">
                  <Img
                    className="h-3.5 w-3.5"
                    src="images/img_plus.svg"
                    alt="plus"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center justify-start md:px-5 w-full">
            <div className="bg-blue_gray-900 flex flex-col gap-[17px] items-center justify-start py-2 w-full">
              <div className="flex flex-row items-center justify-start w-[85%] md:w-full">
                <Text
                  className="bg-blue_gray-500 h-10 justify-center pl-[18px] sm:pr-5 pr-[35px] py-2.5 rounded-bl-[3px] rounded-tl-[3px] text-base text-white-A700 w-[135px]"
                  size="txtRobotoMedium16WhiteA700"
                >
                  500
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
      </div>
    </>
  );
};

export default OmborBichishvarenderNinePage;
