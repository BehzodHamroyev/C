import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const statusOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShowroomtolovlarhisobiPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto p-[29px] sm:px-5 w-full"
          style={{
            backgroundImage: "url('images/img_showroombuyurtmalar.png')",
          }}
        >
          <div className="flex flex-col gap-[23px] items-center justify-start max-w-[1363px] mb-[71px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-11 items-start justify-between w-full">
              <Img
                className="h-[82px] md:mt-0 mt-[27px]"
                src="images/img_group834.svg"
                alt="groupSeventySix"
              />
              <div className="flex flex-col gap-[26px] items-start justify-start">
                <div className="flex md:flex-col flex-row md:gap-10 gap-36 items-center justify-start w-[94%] md:w-full">
                  <FrameFiftyTwoDatafiltr className="flex md:flex-col flex-row gap-[17px] items-center justify-between w-[68%] md:w-full" />
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
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between md:ml-[0] ml-[3px] w-full">
                  <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-end justify-start p-[13px] rounded-[5px] w-[24%] md:w-full">
                    <div className="flex flex-col items-center justify-start my-1 w-[79%] md:w-full">
                      <div className="flex flex-col gap-2.5 justify-start w-full">
                        <Text
                          className="md:ml-[0] ml-[18px] text-blue_gray-500 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Umumiy summa
                        </Text>
                        <div className="flex flex-row gap-3 items-end justify-between w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-blue-400"
                            size="txtRobotoMedium28Blue400"
                          >
                            30 100 000
                          </Text>
                          <Text
                            className="mb-1 mt-2.5 text-[15px] text-blue-700"
                            size="txtRobotoMedium15Blue700"
                          >
                            <>so\&#96;m</>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-end justify-end p-[15px] rounded-[5px] w-[24%] md:w-full">
                    <div className="flex flex-col gap-[13px] items-start justify-start mr-3 w-[70%] md:w-full">
                      <div className="flex flex-col items-center justify-start ml-1 md:ml-[0]">
                        <Text
                          className="text-blue_gray-500 text-sm"
                          size="txtRobotoMedium14"
                        >
                          <>Oldindan to\&#96;lovalar</>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-end justify-evenly w-full">
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
                  <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-center justify-end p-[18px] rounded-[5px] w-[24%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[78%] md:w-full">
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
                  <div className="bg-orange-300 h-24 md:h-[73px] p-1 relative rounded-[5px] w-[24%] md:w-full">
                    <div className="bg-blue_gray-800_03 h-[21px] mx-auto rounded-[5px] w-[48%]"></div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[4%] w-[70%]">
                      <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                        <Text
                          className="text-lg text-white-A700 tracking-[4.23px]"
                          size="txtRobotoMedium18WhiteA700"
                        >
                          KASSAGA
                        </Text>
                        <div className="flex flex-row gap-[11px] items-end justify-between w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-800_03"
                            size="txtRobotoMedium28Bluegray80003"
                          >
                            82 910 000
                          </Text>
                          <Text
                            className="mb-[3px] mt-[11px] text-[15px] text-blue_gray-800_03"
                            size="txtRobotoMedium15Bluegray80003"
                          >
                            <>so\&#96;m</>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-[59px] items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-[30px] items-start justify-start md:mt-0 mt-[23px] w-[14%] md:w-full">
                <div className="flex flex-row gap-[21px] items-center justify-start w-[72%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_icoutlineshop.svg"
                    alt="icoutlineshop"
                  />
                  <Text
                    className="text-blue_gray-500 text-sm"
                    size="txtRobotoMedium14"
                  >
                    DASHBOARD
                  </Text>
                </div>
                <div className="flex flex-row gap-[26px] items-start justify-start w-[90%] md:w-full">
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                  <Text
                    className="mt-[3px] text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    Buyurtmalar
                  </Text>
                </div>
                <div className="flex flex-row gap-5 items-center justify-start w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bipersonworkspace.svg"
                    alt="bipersonworkspa"
                  />
                  <Text
                    className="text-blue_gray-500 text-sm uppercase"
                    size="txtRobotoMedium14"
                  >
                    <>Mijozlar ro\&#96;yhati</>
                  </Text>
                </div>
              </div>
              <div className="bg-blue_gray-900_87_01 flex md:flex-1 flex-col items-center justify-start py-5 rounded-[5px] w-[83%] md:w-full">
                <div className="flex flex-col gap-6 items-center justify-start mb-[17px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[96%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between w-[39%] md:w-full">
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
                    <div className="flex sm:flex-col flex-row gap-[31px] items-center justify-between w-2/5 md:w-full">
                      <SelectBox
                        className="font-medium leading-[normal] sm:mt-0 my-2 text-base text-left w-[46%] sm:w-full"
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
                      <Button
                        className="cursor-pointer font-medium min-w-[201px] rounded-[5px] text-center text-sm tracking-[0.14px] uppercase"
                        shape="round"
                        color="blue_gray_900"
                        size="md"
                        variant="fill"
                      >
                        <>To\&#96;lov qabul qilish</>
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <Line className="bg-blue_gray-800_01 h-0.5 w-full" />
                    <div className="md:h-[1744px] h-[424px] sm:h-[436px] mt-3 relative w-full">
                      <div className="absolute md:h-[409px] h-[418px] inset-[0] justify-center m-auto w-full">
                        <div className="absolute flex flex-col gap-6 h-full inset-y-[0] items-center justify-start my-auto right-[15%] w-[4%]">
                          <Text
                            className="text-[15px] text-blue_gray-500"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            Status
                          </Text>
                          <div className="flex flex-col items-center justify-start w-[32%] md:w-full">
                            <div className="bg-red-300 h-3.5 rounded-[50%] w-3.5"></div>
                            <div className="bg-red-300 h-3.5 mt-[29px] rounded-[50%] w-3.5"></div>
                            <div className="bg-red-300 h-3.5 mt-7 rounded-[50%] w-3.5"></div>
                            <div className="bg-orange-300 h-3.5 mt-8 rounded-[50%] w-3.5"></div>
                            <div className="bg-light_green-400 h-3.5 mt-8 rounded-[50%] w-3.5"></div>
                            <div className="bg-orange-300 h-3.5 mt-[30px] rounded-[50%] w-3.5"></div>
                            <div className="bg-orange-300 h-3.5 mt-[30px] rounded-[50%] w-3.5"></div>
                            <div className="bg-light_green-400 h-3.5 mt-[30px] rounded-[50%] w-3.5"></div>
                            <div className="bg-light_green-400 h-3.5 mt-[30px] rounded-[50%] w-3.5"></div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                          <Line className="bg-blue_gray-800_01 h-0.5 w-full" />
                          <Line className="bg-blue_gray-800_01 h-0.5 mt-[43px] w-full" />
                          <Line className="bg-blue_gray-800_01 h-0.5 mt-[42px] w-full" />
                          <Line className="bg-blue_gray-800_01 h-0.5 mt-[41px] w-full" />
                          <Line className="bg-blue_gray-800_01 h-0.5 mt-11 w-full" />
                          <Line className="bg-blue_gray-800_01 h-0.5 mt-11 w-full" />
                          <Line className="bg-blue_gray-800_01 h-0.5 mt-[43px] w-full" />
                          <Line className="bg-blue_gray-800_01 h-0.5 mt-[43px] w-full" />
                          <Line className="bg-blue_gray-800_01 h-0.5 mt-[43px] w-full" />
                        </div>
                      </div>
                      <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-center justify-center m-auto w-[93%]">
                        <List
                          className="sm:flex-col flex-row gap-[18px] grid sm:grid-cols-1 grid-cols-4 w-[52%] md:w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col items-start justify-start sm:ml-[0] w-full">
                            <Img
                              className="h-[15px] md:h-auto object-cover w-[58%] sm:w-full"
                              src="images/img_.png"
                              alt="OneHundredNine"
                            />
                            <Text
                              className="mt-8 text-blue_gray-500 text-xs"
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
                          </div>
                          <div className="flex flex-col items-start justify-start sm:ml-[0] w-full">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              Buyurtma nomeri
                            </Text>
                            <Text
                              className="mt-[25px] text-[15px] text-blue-400"
                              size="txtRobotoMedium15Blue400"
                            >
                              1024
                            </Text>
                            <Text
                              className="mt-[26px] text-[15px] text-blue-400"
                              size="txtRobotoMedium15Blue400"
                            >
                              1025
                            </Text>
                            <Text
                              className="mt-[25px] text-[15px] text-blue-400"
                              size="txtRobotoMedium15Blue400"
                            >
                              1026
                            </Text>
                            <Text
                              className="mt-7 text-[15px] text-blue-400"
                              size="txtRobotoMedium15Blue400"
                            >
                              1027
                            </Text>
                            <Text
                              className="mt-7 text-[15px] text-blue-400"
                              size="txtRobotoMedium15Blue400"
                            >
                              1028
                            </Text>
                            <Text
                              className="mt-[26px] text-[15px] text-blue-400"
                              size="txtRobotoMedium15Blue400"
                            >
                              1029
                            </Text>
                            <Text
                              className="mt-[27px] text-[15px] text-blue-400"
                              size="txtRobotoMedium15Blue400"
                            >
                              1030
                            </Text>
                            <Text
                              className="mt-[27px] text-[15px] text-blue-400"
                              size="txtRobotoMedium15Blue400"
                            >
                              1032
                            </Text>
                            <Text
                              className="mt-[27px] text-[15px] text-blue-400"
                              size="txtRobotoMedium15Blue400"
                            >
                              1033
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start sm:ml-[0] w-full">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              O’lchovchi
                            </Text>
                            <Text
                              className="mt-[29px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Botirov F.
                            </Text>
                            <Text
                              className="mt-[30px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Alijonov D.
                            </Text>
                            <Text
                              className="mt-[27px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Botirov F.
                            </Text>
                            <Text
                              className="mt-[33px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Alijonov D.
                            </Text>
                            <Text
                              className="mt-[31px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Alijonov D.
                            </Text>
                            <Text
                              className="mt-7 text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Botirov F.
                            </Text>
                            <Text
                              className="mt-[31px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Alijonov D.
                            </Text>
                            <Text
                              className="mt-[30px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Alijonov D.
                            </Text>
                            <Text
                              className="mt-[29px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Botirov F.
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start sm:ml-[0] w-full">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              Buyurtma narxi
                            </Text>
                            <Text
                              className="mt-[27px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              86 000 000
                            </Text>
                            <Text
                              className="mt-[29px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              32 500 000
                            </Text>
                            <Text
                              className="mt-7 text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              8 000 000
                            </Text>
                            <Text
                              className="mt-[31px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              9 650 000
                            </Text>
                            <Text
                              className="mt-[31px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              7 650 000
                            </Text>
                            <Text
                              className="mt-[29px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              9 650 000
                            </Text>
                            <Text
                              className="mt-[30px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              3 530 000
                            </Text>
                            <Text
                              className="mt-[30px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              1 120 000
                            </Text>
                            <Text
                              className="mt-[30px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              1 745 000
                            </Text>
                          </div>
                        </List>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[45px] w-[10%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              <>Oldindan to\&#96;lov</>
                            </Text>
                            <Text
                              className="mt-[29px] text-blue_gray-500 text-xs"
                              size="txtRobotoMedium12Bluegray500"
                            >
                              6 000 000
                            </Text>
                            <Text
                              className="mt-[29px] text-blue_gray-500 text-xs"
                              size="txtRobotoMedium12Bluegray500"
                            >
                              2 500 000
                            </Text>
                            <Text
                              className="mt-7 text-blue_gray-500 text-xs"
                              size="txtRobotoMedium12Bluegray500"
                            >
                              1 000 000
                            </Text>
                            <div className="flex flex-row gap-[7px] items-start justify-start mt-[31px] w-[66%] md:w-full">
                              <Img
                                className="h-[13px]"
                                src="images/img_calculator.svg"
                                alt="calculator"
                              />
                              <Text
                                className="text-gray-400 text-xs"
                                size="txtRobotoMedium12"
                              >
                                {" "}
                                650 000
                              </Text>
                            </div>
                            <Text
                              className="mt-[31px] text-blue_gray-500 text-xs"
                              size="txtRobotoMedium12Bluegray500"
                            >
                              {" "}
                              650 000
                            </Text>
                            <div className="flex flex-row gap-2 items-start justify-start mt-[29px] w-[67%] md:w-full">
                              <Img
                                className="h-[13px]"
                                src="images/img_calculator.svg"
                                alt="calculator_One"
                              />
                              <Text
                                className="text-gray-400 text-xs"
                                size="txtRobotoMedium12"
                              >
                                {" "}
                                650 000
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[9px] items-start justify-start mt-[30px] w-[65%] md:w-full">
                              <Img
                                className="h-[13px] w-[13px]"
                                src="images/img_vector_gray_400.svg"
                                alt="vector"
                              />
                              <Text
                                className="text-gray-400 text-xs"
                                size="txtRobotoMedium12"
                              >
                                {" "}
                                530 000
                              </Text>
                            </div>
                            <Text
                              className="mt-[30px] text-blue_gray-500 text-xs"
                              size="txtRobotoMedium12Bluegray500"
                            >
                              {" "}
                              120 000
                            </Text>
                            <Text
                              className="mt-[30px] text-blue_gray-500 text-xs"
                              size="txtRobotoMedium12Bluegray500"
                            >
                              {" "}
                              745 000
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[55px] w-[8%] md:w-full">
                          <div className="flex flex-col justify-start w-full">
                            <Text
                              className="ml-2 md:ml-[0] text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              Qoldiq
                            </Text>
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[21px] mt-[27px]">
                              <Text
                                className="text-blue_gray-500 text-xs"
                                size="txtRobotoMedium12Bluegray500"
                              >
                                80 000 000
                              </Text>
                              <Text
                                className="mt-[29px] text-blue_gray-500 text-xs"
                                size="txtRobotoMedium12Bluegray500"
                              >
                                30 500 000
                              </Text>
                              <Text
                                className="mt-7 text-blue_gray-500 text-xs"
                                size="txtRobotoMedium12Bluegray500"
                              >
                                7 000 000
                              </Text>
                              <Text
                                className="mt-[31px] text-blue_gray-500 text-xs"
                                size="txtRobotoMedium12Bluegray500"
                              >
                                9 000 000
                              </Text>
                            </div>
                            <div className="flex flex-col gap-[29px] items-start justify-start mr-1.5 mt-[31px] w-[92%] md:w-full">
                              <div className="flex flex-row gap-1.5 items-start justify-start w-[98%] md:w-full">
                                <Img
                                  className="h-[9px]"
                                  src="images/img_menu_gray_400.svg"
                                  alt="menu"
                                />
                                <Text
                                  className="text-gray-400 text-xs"
                                  size="txtRobotoMedium12"
                                >
                                  7 000 000
                                </Text>
                              </div>
                              <Text
                                className="md:ml-[0] ml-[21px] text-blue_gray-500 text-xs"
                                size="txtRobotoMedium12Bluegray500"
                              >
                                9 000 000
                              </Text>
                              <Text
                                className="md:ml-[0] ml-[21px] text-blue_gray-500 text-xs"
                                size="txtRobotoMedium12Bluegray500"
                              >
                                3 000 000
                              </Text>
                              <div className="flex flex-row gap-1.5 items-start justify-start w-[98%] md:w-full">
                                <Img
                                  className="h-[9px] mt-[3px]"
                                  src="images/img_menu_gray_400.svg"
                                  alt="menu_One"
                                />
                                <Text
                                  className="text-gray-400 text-xs"
                                  size="txtRobotoMedium12"
                                >
                                  1 000 000
                                </Text>
                              </div>
                              <div className="flex flex-row gap-[5px] items-center justify-evenly w-full">
                                <Img
                                  className="h-[13px]"
                                  src="images/img_calculator.svg"
                                  alt="calculator_Two"
                                />
                                <Text
                                  className="text-gray-400 text-xs"
                                  size="txtRobotoMedium12"
                                >
                                  1 000 000
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[152px]">
                          <Text
                            className="text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Sana
                          </Text>
                          <Text
                            className="mt-[26px] text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            Sen 11. 2022
                          </Text>
                          <Text
                            className="mt-[29px] text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            Sen 12. 2022
                          </Text>
                          <Text
                            className="mt-[27px] text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            Sen 12. 2022
                          </Text>
                          <Text
                            className="mt-8 text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            Sen 12. 2022
                          </Text>
                          <Text
                            className="mt-[31px] text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            Sen 12. 2022
                          </Text>
                          <Text
                            className="mt-[30px] text-blue_gray-500 text-xs"
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
                            className="mt-[30px] text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            Sen 13. 2022
                          </Text>
                          <Text
                            className="mt-[30px] text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            Sen 13. 2022
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-[15px] w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-800_7e flex flex-col gap-[23px] h-max inset-y-[0] justify-start left-[0] my-auto md:px-5 py-3 w-1/5">
          <div className="h-[60px] relative w-full">
            <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-end justify-center m-auto p-[19px] w-full">
              <div className="flex flex-row items-start justify-end mr-1.5 w-[88%] md:w-full">
                <Img
                  className="h-5"
                  src="images/img_calculator_white_a700.svg"
                  alt="calculator_Three"
                />
                <Text
                  className="ml-[17px] mt-0.5 text-sm text-white-A700 uppercase"
                  size="txtRobotoMedium14WhiteA700"
                >
                  <>To\&#96;lov qabul qilish</>
                </Text>
                <Img
                  className="h-1 ml-[11px] mt-2"
                  src="images/img_line49.svg"
                  alt="lineFortyNine"
                />
              </div>
            </div>
            <Img
              className="absolute h-[60px] inset-y-[0] left-[0] my-auto object-cover w-[5%]"
              src="images/img_rectangle1564_7.png"
              alt="rectangle1564"
            />
          </div>
          <Text
            className="mb-[21px] md:ml-[0] ml-[87px] text-base text-blue_gray-500"
            size="txtRobotoMedium16"
          >
            <>Kassaga to\&#96;lov tarixi </>
          </Text>
        </div>
      </div>
    </>
  );
};

export default ShowroomtolovlarhisobiPage;
