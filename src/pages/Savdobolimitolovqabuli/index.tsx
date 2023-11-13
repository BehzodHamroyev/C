import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const zipcodeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const showroomdanOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const naqdPulOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SavdobolimitolovqabuliPage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div className="md:h-[1184px] h-[900px] m-auto md:px-5 w-full">
          <Img
            className="h-[900px] m-auto object-cover w-full"
            src="images/img_global1_11.png"
            alt="globalOne"
          />
          <div className="absolute flex md:flex-col flex-row md:gap-10 items-start justify-between right-[8%] top-[3%] w-[74%]">
            <FrameFiftyTwoDatafiltr className="flex md:flex-col flex-row gap-[17px] items-center justify-between md:mt-0 mt-[3px] w-[68%] md:w-full" />
            <div className="flex flex-row items-center justify-start w-1/5 md:w-full">
              <div className="flex flex-col h-[38px] items-center justify-start w-[38px]">
                <Img
                  className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                  src="images/img_il1588xn1_1.png"
                  alt="il1588xnOne"
                />
              </div>
              <Text
                className="ml-[18px] text-[15px] text-blue_gray-500"
                size="txtRobotoMedium15Bluegray500"
              >
                Operator ismi
              </Text>
              <Img
                className="h-[5px] ml-11"
                src="images/img_line4.svg"
                alt="lineFour"
              />
            </div>
          </div>
          <div className="absolute bottom-[4%] flex flex-col items-center justify-start right-[2%] w-[79%]">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-start p-[33px] sm:px-5 rounded-[5px] shadow-bs6 w-full">
                <div className="flex flex-col items-start justify-start mb-[155px] w-[98%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-[22px] items-center justify-start w-[45%] md:w-full">
                      <div className="flex flex-col justify-start w-full">
                        <Text
                          className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                          size="txtRobotoMedium12Bluegray50099"
                        >
                          Buyurtma nomeri
                        </Text>
                        <SelectBox
                          className="font-medium leading-[normal] mt-[3px] text-base text-left w-full"
                          placeholderClassName="text-white-A700"
                          indicator={
                            <Img
                              className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-[13px]"
                              src="images/img_arrowdown_blue_gray_500_3x7.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="zipcode"
                          options={zipcodeOptionsList}
                          isSearchable={false}
                          placeholder="1024"
                          shape="round"
                          color="gray_900_87"
                          size="xl"
                          variant="fill"
                        />
                      </div>
                      <div className="flex flex-col justify-start w-full">
                        <Text
                          className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                          size="txtRobotoMedium12Bluegray50099"
                        >
                          Qayerga
                        </Text>
                        <Input
                          name="group592"
                          placeholder="Sotuv bo&#96;limi boshlig&#96;iga"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                          wrapClassName="mt-[3px] rounded-[5px] w-full"
                          shape="round"
                          color="gray_900_87"
                          size="2xl"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-1 flex-col justify-start w-1/2 md:w-full">
                      <Text
                        className="md:ml-[0] ml-[11px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Izoh
                      </Text>
                      <div className="bg-gray-900_87 flex flex-col items-start justify-start mt-0.5 p-3 rounded-[3px] w-full">
                        <Text
                          className="mb-[97px] ml-2 md:ml-[0] text-[17px] text-gray-400"
                          size="txtRobotoMedium17Gray400"
                        >
                          <>2 oy kechikish bilan to\&#96;ladi</>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex sm:flex-col flex-row sm:gap-10 gap-[70px] items-start justify-start mt-4 w-[57%] md:w-full">
                    <div className="flex flex-col justify-start w-[79%] sm:w-full">
                      <Text
                        className="ml-3.5 md:ml-[0] text-blue_gray-500 text-sm"
                        size="txtRobotoMedium14"
                      >
                        Qayerdan
                      </Text>
                      <SelectBox
                        className="font-medium leading-[normal] mt-[3px] text-base text-left w-full"
                        placeholderClassName="text-white-A700"
                        indicator={
                          <Img
                            className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-[13px]"
                            src="images/img_arrowdown_blue_gray_500_3x7.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="group591"
                        options={showroomdanOptionsList}
                        isSearchable={false}
                        placeholder="Showroomdan"
                        shape="round"
                        color="gray_900_87"
                        size="xl"
                        variant="fill"
                      />
                    </div>
                    <Text
                      className="sm:mt-0 mt-[34px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      № 1024
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[525px] mt-[22px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    <>Umumiy summa: 89 000 000 so\&#96;m</>
                  </Text>
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-3 w-[69%] md:w-full">
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[142px] rounded-[3px] text-center text-xl"
                      shape="round"
                      color="blue_gray_500_87"
                      size="xs"
                      variant="fill"
                    >
                      Naqd
                    </Button>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[142px] md:ml-[0] ml-[13px] rounded-[3px] text-center text-xl"
                      shape="round"
                      color="blue_gray_800_87_04"
                      size="xs"
                      variant="fill"
                    >
                      Plastik
                    </Button>
                    <Button
                      className="cursor-pointer font-medium leading-[normal] min-w-[142px] md:ml-[0] ml-[13px] rounded-[3px] text-center text-xl"
                      shape="round"
                      color="blue_gray_800_87_04"
                      size="xs"
                      variant="fill"
                    >
                      Bank
                    </Button>
                    <Text
                      className="md:ml-[0] ml-[69px] md:mt-0 mt-3 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      <>Oldindan to\&#96;lov: 0.0 so\&#96;m</>
                    </Text>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[70px] items-start justify-start mt-[22px] w-[71%] md:w-full">
                    <div className="flex flex-col gap-[37px] items-center justify-start w-[63%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[5px] justify-start w-full">
                          <div className="flex flex-row gap-[207px] items-center justify-start ml-4 md:ml-[0] w-[67%] md:w-full">
                            <Text
                              className="text-blue_gray-500_99 text-xs"
                              size="txtRobotoMedium12Bluegray50099"
                            >
                              Summa
                            </Text>
                            <Text
                              className="text-blue_gray-500_99 text-xs"
                              size="txtRobotoMedium12Bluegray50099"
                            >
                              <>To\&#96;lov turi</>
                            </Text>
                          </div>
                          <div className="bg-gray-900_87 flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-3.5 rounded-[3px] w-full">
                            <Text
                              className="sm:mt-0 my-0.5 text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              100 000
                            </Text>
                            <Img
                              className="h-[13px] ml-48 sm:ml-[0]"
                              src="images/img_calculator.svg"
                              alt="calculator"
                            />
                            <SelectBox
                              className="sm:flex-1 font-medium leading-[normal] sm:ml-[0] ml-[7px] sm:mt-0 my-0.5 text-base text-gray-400 text-left w-[32%] sm:w-full"
                              placeholderClassName="text-gray-400"
                              indicator={
                                <Img
                                  className="h-[5px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[13px]"
                                  src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="group891"
                              options={naqdPulOptionsList}
                              isSearchable={false}
                              placeholder="Naqd pul"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[455px] sm:min-w-full rounded-[3px] sm:text-[17px] md:text-[19px] text-[21px] text-center"
                          shape="round"
                          color="blue_400"
                          size="md"
                          variant="fill"
                        >
                          TASDIQLASH
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-[26px] items-start justify-start">
                      <Text
                        className="text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        <>Bo\&#96;lib to\&#96;langan: 0.0 so\&#96;m</>
                      </Text>
                      <Text
                        className="text-[15px] text-red-300"
                        size="txtRobotoMedium15Red300"
                      >
                        <>Qoldiq to\&#96;lov: 100 000 so\&#96;m</>
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-blue_gray-800_7e flex flex-col gap-[19px] justify-start left-[0] py-3 top-[37%] w-1/5">
            <div className="h-[60px] relative w-full">
              <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-center justify-center m-auto p-3.5 w-full">
                <div className="flex flex-row items-center justify-start mt-[3px] w-[84%] md:w-full">
                  <Img
                    className="h-[27px] w-[27px]"
                    src="images/img_computer_white_a700_27x27.svg"
                    alt="computer"
                  />
                  <Text
                    className="ml-[15px] text-base text-white-A700 uppercase"
                    size="txtRobotoMedium16WhiteA700"
                  >
                    Kassaga{" "}
                  </Text>
                  <Img
                    className="h-1 ml-[81px]"
                    src="images/img_line49.svg"
                    alt="lineFortyNine"
                  />
                </div>
              </div>
              <div className="absolute bg-red-300 h-[60px] inset-y-[0] left-[0] my-auto w-[6%]"></div>
            </div>
            <div className="flex flex-col gap-[19px] items-start justify-start mb-[9px] md:ml-[0] ml-[89px]">
              <Text
                className="text-base text-blue_gray-500"
                size="txtRobotoMedium16"
              >
                <>To\&#96;lovlar hisobi</>
              </Text>
              <Text
                className="text-blue_gray-500 text-sm"
                size="txtRobotoMedium14"
              >
                <>Ummiy to\&#96;lov tarixi</>
              </Text>
            </div>
          </div>
        </div>
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-52 flex h-screen md:hidden justify-start left-[3%] overflow-auto md:px-5 top-[0]"
        >
          <Img
            className="h-[82px] md:ml-[0] ml-[9px] mr-4"
            src="images/img_group834.svg"
            alt="groupSeventySix"
          />
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                paddingLeft: "40px",
                gap: "29px",
                color: "#6e768c",
                fontWeight: 500,
                fontSize: "16px",
              },
            }}
            className="flex flex-col items-center justify-start mt-[101px] pr-10 sm:pr-5 w-full"
          >
            <div className="flex flex-col gap-[31px] items-center justify-start w-full">
              <MenuItem
                icon={
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_arrowdown_blue_gray_500.svg"
                    alt="arrowdown"
                  />
                }
                active={window.location.pathname === "/"}
                href="/"
              >
                <Text className="uppercase">BUYURTMALAR</Text>
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    className="h-[21px] w-[21px]"
                    src="images/img_bxbxsaddtoqueue.svg"
                    alt="bxbxsaddtoqueue"
                  />
                }
              >
                <Text className="mt-0.5 text-sm uppercase">
                  <>material qo\&#96;shish</>
                </Text>
              </MenuItem>
            </div>
            <div className="flex flex-col items-center justify-start mt-[195px] w-full">
              <MenuItem
                icon={
                  <Img
                    className="h-[19px] mb-[3px] w-[19px]"
                    src="images/img_ticket.svg"
                    alt="ticket"
                  />
                }
              >
                <Text className="mt-[3px] uppercase">mahsulot narxlari</Text>
              </MenuItem>
            </div>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};

export default SavdobolimitolovqabuliPage;
