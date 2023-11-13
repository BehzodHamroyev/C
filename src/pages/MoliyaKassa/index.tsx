import React from "react";

import { useNavigate } from "react-router-dom";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
} from "components";
import MoliyaKassaRowsaralash from "components/MoliyaKassaRowsaralash";

const statusOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MoliyaKassaPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-end m-auto p-[21px] sm:px-5 w-full"
          style={{
            backgroundImage: "url('images/img_showroombuyurtmalar.png')",
          }}
        >
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1367px] mt-[7px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[93px] justify-start md:mt-0 mt-[27px] w-[18%] md:w-full">
              <Img
                className="h-[82px] ml-3 md:ml-[0]"
                src="images/img_group834.svg"
                alt="groupSeventySix"
              />
              <div className="flex flex-col items-start justify-start w-full">
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[132px]"
                  onClick={() => navigate("/moliyadashboard")}
                  leftIcon={
                    <Img
                      className="h-6 mr-[25px]"
                      src="images/img_icoutlineshop.svg"
                      alt="ic:outline-shop"
                    />
                  }
                >
                  <div className="font-medium leading-[normal] text-blue_gray-500 text-left text-sm">
                    DASHBOARD
                  </div>
                </Button>
                <div className="flex flex-row gap-[13px] items-start justify-start mt-[90px] w-[38%] md:w-full">
                  <Img
                    className="h-6"
                    src="images/img_settings_blue_gray_500.svg"
                    alt="settings"
                  />
                  <Text
                    className="text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    Kirim{" "}
                  </Text>
                </div>
                <div className="flex flex-row gap-3.5 items-center justify-start mt-[31px] w-[44%] md:w-full">
                  <Img
                    className="h-6"
                    src="images/img_settings_blue_gray_500.svg"
                    alt="settings_One"
                  />
                  <Text
                    className="text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    Chiqim{" "}
                  </Text>
                </div>
                <div className="flex flex-row gap-5 items-start justify-start mt-[30px] w-full">
                  <Img
                    className="h-6"
                    src="images/img_minimize.svg"
                    alt="minimize"
                  />
                  <Text
                    className="text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    Valyuta ayriboshlash
                  </Text>
                </div>
                <div className="flex flex-row gap-6 items-start justify-start mt-[31px] w-[87%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_fluentclipboar.svg"
                    alt="fluentclipboar"
                  />
                  <Text
                    className="mt-[3px] text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    <>Hodimlar ro\&#96;yhati</>
                  </Text>
                </div>
                <div className="flex flex-row gap-[22px] items-start justify-start mt-[33px] w-[56%] md:w-full">
                  <Img
                    className="h-[21px]"
                    src="images/img_union_blue_gray_500.svg"
                    alt="union"
                  />
                  <Text
                    className="mt-1 text-blue_gray-500 text-sm uppercase"
                    size="txtRobotoMedium14"
                  >
                    qarzdorlik
                  </Text>
                </div>
                <div className="flex flex-row gap-[27px] items-center justify-start mt-[33px] w-[90%] md:w-full">
                  <Img
                    className="h-[19px] w-[19px]"
                    src="images/img_ticket.svg"
                    alt="ticket"
                  />
                  <Text
                    className="text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    Mahsulot narxlari{" "}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col items-center justify-start ml-1 md:ml-[0] w-[83%] md:w-full">
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
              <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[25px] w-full">
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
                          className="mb-1 mt-2.5 text-[15px] text-blue-400"
                          size="txtRobotoMedium15Blue400"
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
                    <div className="flex flex-col gap-[9px] justify-start w-full">
                      <Text
                        className="md:ml-[0] ml-[25px] text-blue_gray-500 text-sm"
                        size="txtRobotoMedium14"
                      >
                        <>Qoldiq to\&#96;lov</>
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
              <div className="md:h-[1670px] h-[671px] sm:h-[762px] mt-[18px] relative w-full">
                <div className="md:h-[1652px] h-[671px] sm:h-[744px] m-auto w-full">
                  <div className="absolute bg-blue_gray-900_87_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[13px] rounded-[5px] w-full">
                    <div className="flex flex-col items-center justify-start w-[98%] md:w-full">
                      <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row gap-[21px] items-center justify-between w-[39%] sm:w-full">
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
                          className="sm:flex-1 font-medium leading-[normal] sm:mt-0 my-1 text-base text-left w-[16%] sm:w-full"
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
                      <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mt-[23px] w-[98%] md:w-full">
                        <div className="flex flex-col items-start justify-start mb-1 md:mt-0 mt-[49px] w-[1%] md:w-full">
                          <Img
                            className="h-[5px]"
                            src="images/img_line4.svg"
                            alt="lineFour"
                          />
                          <Img
                            className="h-[5px] mt-[41px]"
                            src="images/img_line4.svg"
                            alt="lineFour_One"
                          />
                          <Img
                            className="h-[5px] mt-[39px]"
                            src="images/img_line4.svg"
                            alt="lineFour_Two"
                          />
                          <Img
                            className="h-[5px] mt-[39px]"
                            src="images/img_line4.svg"
                            alt="lineFour_Three"
                          />
                          <Img
                            className="h-[5px] mt-[41px]"
                            src="images/img_line4.svg"
                            alt="lineFour_Four"
                          />
                          <Img
                            className="h-[5px] mt-[39px]"
                            src="images/img_line4.svg"
                            alt="lineFive"
                          />
                          <Img
                            className="h-[5px] mt-[39px]"
                            src="images/img_line4.svg"
                            alt="lineSix"
                          />
                          <Img
                            className="h-[5px] mt-[39px]"
                            src="images/img_line4.svg"
                            alt="lineFour_Five"
                          />
                          <Img
                            className="h-[5px] mt-[39px]"
                            src="images/img_line4.svg"
                            alt="lineFour_Six"
                          />
                          <Img
                            className="h-[5px] mt-[41px]"
                            src="images/img_line4.svg"
                            alt="lineFour_Seven"
                          />
                          <Img
                            className="h-[5px] mt-9"
                            src="images/img_line4.svg"
                            alt="lineFour_Eight"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[301px] w-[10%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="ml-0.5 md:ml-[0] text-[15px] text-blue_gray-500"
                                    size="txtRobotoMedium15Bluegray500"
                                  >
                                    Loyiha nomeri
                                  </Text>
                                  <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-6 w-[83%] md:w-full">
                                    <Img
                                      className="h-[18px] md:h-auto object-cover w-1/5"
                                      src="images/img_.png"
                                      alt="TwentySix"
                                    />
                                    <Text
                                      className="text-[15px] text-blue_gray-500"
                                      size="txtRobotoMedium15Bluegray500"
                                    >
                                      120003
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[26px] w-[83%] md:w-full">
                                    <Img
                                      className="h-[18px] md:h-auto object-cover w-1/5"
                                      src="images/img_.png"
                                      alt="TwentySeven"
                                    />
                                    <Text
                                      className="text-[15px] text-blue_gray-500"
                                      size="txtRobotoMedium15Bluegray500"
                                    >
                                      120002
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[25px] w-[83%] md:w-full">
                                    <Img
                                      className="h-[18px] md:h-auto object-cover w-1/5"
                                      src="images/img_.png"
                                      alt="TwentyEight"
                                    />
                                    <Text
                                      className="text-[15px] text-blue_gray-500"
                                      size="txtRobotoMedium15Bluegray500"
                                    >
                                      120002
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-7 w-4/5 md:w-full">
                                    <Img
                                      className="h-[18px] md:h-auto object-cover w-[21%]"
                                      src="images/img_.png"
                                      alt="TwentyNine"
                                    />
                                    <Text
                                      className="text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      120001
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-7 w-[83%] md:w-full">
                                    <Img
                                      className="h-[18px] md:h-auto object-cover w-1/5"
                                      src="images/img_.png"
                                      alt="Thirty"
                                    />
                                    <Text
                                      className="text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      119999
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[26px] w-[83%] md:w-full">
                                    <Img
                                      className="h-[18px] md:h-auto object-cover w-1/5"
                                      src="images/img_.png"
                                      alt="ThirtyOne"
                                    />
                                    <Text
                                      className="text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      119996
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[27px] w-[83%] md:w-full">
                                    <Img
                                      className="h-[18px] md:h-auto object-cover w-1/5"
                                      src="images/img_.png"
                                      alt="ThirtyTwo"
                                    />
                                    <Text
                                      className="text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      119997
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[27px] w-[83%] md:w-full">
                                    <Img
                                      className="h-[18px] md:h-auto object-cover w-1/5"
                                      src="images/img_.png"
                                      alt="ThirtyThree"
                                    />
                                    <Text
                                      className="text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      119996
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-3 items-center justify-start mt-[27px] w-[83%] md:w-full">
                                    <Img
                                      className="h-[18px] md:h-auto object-cover w-1/5"
                                      src="images/img_.png"
                                      alt="ThirtyFour"
                                    />
                                    <Text
                                      className="text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      119995
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[27px] w-[83%] md:w-full">
                                    <Img
                                      className="h-[18px] md:h-auto object-cover w-1/5"
                                      src="images/img_.png"
                                      alt="ThirtyFive"
                                    />
                                    <Text
                                      className="text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      120004
                                    </Text>
                                  </div>
                                  <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[25px] w-[83%] md:w-full">
                                    <Img
                                      className="h-[18px] md:h-auto object-cover w-1/5"
                                      src="images/img_.png"
                                      alt="ThirtySix"
                                    />
                                    <Text
                                      className="text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      120004
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-6 items-center justify-start mb-[3px] md:ml-[0] ml-[591px] w-[5%] md:w-full">
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
                            <div className="bg-light_green-400 h-3.5 mt-[30px] rounded-[50%] w-3.5"></div>
                            <div className="bg-light_green-400 h-3.5 mt-7 rounded-[50%] w-3.5"></div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-8 items-end justify-start mt-[37px] p-0.5 w-[35%] md:w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_group71_gray_900.svg')",
                        }}
                      >
                        <div className="flex flex-row items-center justify-end mr-[7px] w-[86%] md:w-full">
                          <Text
                            className="text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            1
                          </Text>
                          <Text
                            className="ml-[31px] text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            2
                          </Text>
                          <Text
                            className="ml-[30px] text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            3
                          </Text>
                          <Text
                            className="ml-[30px] text-gray-400 text-sm"
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
                            className="ml-7 text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            6
                          </Text>
                          <Text
                            className="ml-[30px] text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            7
                          </Text>
                          <Text
                            className="ml-[29px] text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            8
                          </Text>
                          <Img
                            className="h-[9px] ml-8"
                            src="images/img_line3.svg"
                            alt="lineThree"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                    <Line className="bg-blue_gray-800_01 h-0.5 w-full" />
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-[41px] w-full" />
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-[43px] w-full" />
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-[42px] w-full" />
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-[41px] w-full" />
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-11 w-full" />
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-[45px] w-full" />
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-[42px] w-full" />
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-[43px] w-full" />
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-[43px] w-full" />
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-[43px] w-full" />
                    <Line className="bg-blue_gray-800_03 h-0.5 mt-[43px] w-full" />
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-[41px] w-full" />
                  </div>
                </div>
                <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-y-[0] items-center justify-start left-[6%] my-auto w-[77%]">
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[337px] grid sm:grid-cols-1 grid-cols-2 w-3/5 md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start sm:ml-[0] w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Showroom nomi
                      </Text>
                      <Text
                        className="mt-[27px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Andijon
                      </Text>
                      <Text
                        className="mt-[29px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Andijon
                      </Text>
                      <Text
                        className="mt-[25px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Andijon
                      </Text>
                      <Text
                        className="mt-[25px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Andijon
                      </Text>
                      <Text
                        className="mt-[29px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Andijon
                      </Text>
                      <Text
                        className="mt-[29px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Andijon
                      </Text>
                      <Text
                        className="mt-[25px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Andijon
                      </Text>
                      <Text
                        className="mt-[25px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Andijon
                      </Text>
                      <Text
                        className="mt-[27px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Andijon
                      </Text>
                      <Text
                        className="mt-[29px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Andijon
                      </Text>
                      <Text
                        className="mt-[25px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Andijon
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start sm:ml-[0] sm:mt-0 my-0.5 w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Umumiy
                      </Text>
                      <Text
                        className="mt-[27px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        86 000 000
                      </Text>
                      <Text
                        className="mt-[29px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        32 500 000
                      </Text>
                      <Text
                        className="mt-7 text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
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
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        7 532 000
                      </Text>
                      <Text
                        className="mt-7 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        3 120 000
                      </Text>
                    </div>
                  </List>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[86px] w-[10%] md:w-full">
                    <div className="flex flex-col gap-8 justify-start w-full">
                      <div className="flex flex-col gap-[29px] items-start justify-start md:ml-[0] ml-[19px]">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Oldindan{" "}
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          0
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          0
                        </Text>
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          0
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start mr-1.5 w-[92%] md:w-full">
                        <div className="flex flex-row gap-1.5 items-start justify-start w-[91%] md:w-full">
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
                        <div className="flex flex-row gap-[5px] items-start justify-evenly ml-0.5 md:ml-[0] mt-[29px] w-[88%] md:w-full">
                          <Img
                            className="h-[15px] w-[15px]"
                            src="images/img_vector_gray_400.svg"
                            alt="vector"
                          />
                          <Text
                            className="mt-0.5 text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            {" "}
                            650 000
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1.5 items-center justify-start mt-[29px] w-[91%] md:w-full">
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
                        <div className="flex flex-row gap-1.5 items-center justify-start mt-[30px] w-[91%] md:w-full">
                          <Img
                            className="h-[13px]"
                            src="images/img_calculator.svg"
                            alt="calculator_Two"
                          />
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            {" "}
                            530 000
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[7px] items-center justify-start mt-[30px] w-[91%] md:w-full">
                          <Img
                            className="h-[13px]"
                            src="images/img_calculator.svg"
                            alt="calculator_Three"
                          />
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            {" "}
                            120 000
                          </Text>
                        </div>
                        <div className="flex flex-row gap-1.5 items-start justify-start mt-[29px] w-[91%] md:w-full">
                          <Img
                            className="h-[13px]"
                            src="images/img_calculator.svg"
                            alt="calculator_Four"
                          />
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            {" "}
                            745 000
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-evenly mt-[30px] w-full">
                          <Img
                            className="h-[13px]"
                            src="images/img_calculator.svg"
                            alt="calculator_Five"
                          />
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            1 532 000
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start mt-[27px] w-[87%] md:w-full">
                          <Img
                            className="h-[13px]"
                            src="images/img_calculator.svg"
                            alt="calculator_Six"
                          />
                          <Text
                            className="ml-0.5 text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            120 000
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[106px] w-[9%] md:w-full">
                    <div className="flex flex-col gap-8 items-end justify-start w-full">
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Qoldiq{" "}
                        </Text>
                        <Text
                          className="mt-[27px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          0
                        </Text>
                        <Text
                          className="mt-[29px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          0
                        </Text>
                        <Text
                          className="mt-7 text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          0
                        </Text>
                        <Text
                          className="mt-[31px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          9 000 000
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[29px] items-start justify-start w-full">
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <Img
                            className="h-[13px]"
                            src="images/img_calculator.svg"
                            alt="calculator_Seven"
                          />
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            7 000 000
                          </Text>
                        </div>
                        <Text
                          className="ml-5 md:ml-[0] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          9 000 000
                        </Text>
                        <Text
                          className="ml-5 md:ml-[0] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          3 000 000
                        </Text>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <Img
                            className="h-[13px]"
                            src="images/img_calculator.svg"
                            alt="calculator_Eight"
                          />
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            1 000 000
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <Img
                            className="h-[13px]"
                            src="images/img_calculator.svg"
                            alt="calculator_Nine"
                          />
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            1 000 000
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <Img
                            className="h-[13px]"
                            src="images/img_calculator.svg"
                            alt="calculator_Ten"
                          />
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            6 000 000
                          </Text>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <Img
                            className="h-[13px]"
                            src="images/img_calculator.svg"
                            alt="calculator_Eleven"
                          />
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            3 000 000
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
        <div className="absolute h-[60px] left-[0] md:px-5 top-[30%] w-1/5">
          <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-start justify-center m-auto p-[17px] w-full">
            <CheckBox
              className="font-medium leading-[normal] mb-1 ml-5 md:ml-[0] sm:pl-5 text-base text-left uppercase"
              inputClassName="h-[18px] mr-[5px] w-[18px]"
              name="buyurtmalar"
              id="buyurtmalar"
              label="BUYURTMALAR"
            ></CheckBox>
          </div>
          <Img
            className="absolute h-[60px] inset-y-[0] left-[0] my-auto object-cover w-[5%]"
            src="images/img_rectangle1564_2.png"
            alt="rectangle1564"
          />
        </div>
      </div>
    </>
  );
};

export default MoliyaKassaPage;
