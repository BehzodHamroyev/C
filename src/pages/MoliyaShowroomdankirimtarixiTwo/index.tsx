import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import MoliyaKassaRowsaralash from "components/MoliyaKassaRowsaralash";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const showroomniTanlangOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MoliyaShowroomdankirimtarixiTwoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat font-roboto h-[900px] mx-auto sm:pr-5 pr-[27px] py-[27px] relative w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="absolute h-[826px] inset-[0] justify-center m-auto max-w-[1363px] md:px-5 w-full">
          <MoliyaKassaRowsaralash className="flex md:flex-col flex-row gap-[17px] items-center justify-center mb-[-6.22px] ml-[233px] w-[53%] z-[1]" />
          <div className="flex flex-row items-center justify-end mb-[-11.46px] ml-auto mr-[42px] w-[17%] z-[1]">
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
          <OmborTaminotchigaZayavkaOneTab
            className="flex flex-col items-center justify-start mb-[undefinedpx] ml-[398px] mt-[113px] w-[174px] z-[1]"
            username="Showroom"
          />
          <div className="flex flex-col md:gap-10 gap-[65px] justify-start m-auto w-full">
            <Img
              className="h-[82px]"
              src="images/img_group834.svg"
              alt="groupSeventySix"
            />
            <div className="md:h-[1916px] sm:h-[641px] h-[651px] md:ml-[0] ml-[226px] relative w-[84%] md:w-full">
              <div className="sm:h-[641px] h-[651px] md:h-[720px] m-auto w-full">
                <div className="absolute bg-blue_gray-900_87_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-5 rounded-[5px] w-full">
                  <div className="flex flex-col gap-[42px] justify-start mb-12 w-[99%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex md:flex-1 sm:flex-col flex-row gap-[21px] items-center justify-between w-[39%] md:w-full">
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
                      <div className="h-10 md:h-[39px] relative w-[19%] md:w-full">
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
                          name="group831"
                          options={showroomniTanlangOptionsList}
                          isSearchable={false}
                          placeholder="Showroomni tanlang"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[207px] w-[9%] md:w-full">
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
                              <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-8 w-[83%] md:w-full">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-1/5"
                                  src="images/img_.png"
                                  alt="OneHundredThirtyNine"
                                />
                                <Text
                                  className="text-[15px] text-blue_gray-500"
                                  size="txtRobotoMedium15Bluegray500"
                                >
                                  120003
                                </Text>
                              </div>
                              <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[31px] w-[83%] md:w-full">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-1/5"
                                  src="images/img_.png"
                                  alt="OneHundredForty"
                                />
                                <Text
                                  className="text-[15px] text-blue_gray-500"
                                  size="txtRobotoMedium15Bluegray500"
                                >
                                  120002
                                </Text>
                              </div>
                              <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[30px] w-[83%] md:w-full">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-1/5"
                                  src="images/img_.png"
                                  alt="OneHundredFortyOne"
                                />
                                <Text
                                  className="text-[15px] text-blue_gray-500"
                                  size="txtRobotoMedium15Bluegray500"
                                >
                                  120002
                                </Text>
                              </div>
                              <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[38px] w-4/5 md:w-full">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-[21%]"
                                  src="images/img_.png"
                                  alt="OneHundredFortyTwo"
                                />
                                <Text
                                  className="text-[15px] text-gray-400"
                                  size="txtRobotoMedium15Gray400"
                                >
                                  120001
                                </Text>
                              </div>
                              <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[31px] w-[83%] md:w-full">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-1/5"
                                  src="images/img_.png"
                                  alt="OneHundredFortyThree"
                                />
                                <Text
                                  className="text-[15px] text-gray-400"
                                  size="txtRobotoMedium15Gray400"
                                >
                                  119996
                                </Text>
                              </div>
                              <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[30px] w-[83%] md:w-full">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-1/5"
                                  src="images/img_.png"
                                  alt="OneHundredFortyFour"
                                />
                                <Text
                                  className="text-[15px] text-gray-400"
                                  size="txtRobotoMedium15Gray400"
                                >
                                  119997
                                </Text>
                              </div>
                              <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[34px] w-[83%] md:w-full">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-1/5"
                                  src="images/img_.png"
                                  alt="OneHundredFortyFive"
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
                                  alt="OneHundredFortySix"
                                />
                                <Text
                                  className="text-[15px] text-gray-400"
                                  size="txtRobotoMedium15Gray400"
                                >
                                  119995
                                </Text>
                              </div>
                              <div className="flex flex-row gap-3 items-center justify-start ml-0.5 md:ml-[0] mt-[38px] w-[83%] md:w-full">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-1/5"
                                  src="images/img_.png"
                                  alt="OneHundredFortySeven"
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
                  </div>
                </div>
                <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[21%] w-full" />
                <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[13%] w-full" />
                <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[29%] w-full" />
                <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[37%] w-full" />
                <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[44%] w-full" />
                <Line className="absolute bg-blue_gray-800_01 bottom-[47%] h-0.5 inset-x-[0] mx-auto w-full" />
                <Line className="absolute bg-blue_gray-800_01 bottom-[39%] h-0.5 inset-x-[0] mx-auto w-full" />
                <Line className="absolute bg-blue_gray-800_01 bottom-[31%] h-0.5 inset-x-[0] mx-auto w-full" />
                <Line className="absolute bg-blue_gray-800_01 bottom-[23%] h-0.5 inset-x-[0] mx-auto w-full" />
                <Line className="absolute bg-blue_gray-800_01 bottom-[15%] h-0.5 inset-x-[0] mx-auto w-full" />
              </div>
              <Line className="absolute bg-blue_gray-800_01 bottom-[8%] h-0.5 inset-x-[0] mx-auto w-full" />
              <div className="absolute bottom-[10%] flex md:flex-col flex-row md:gap-5 items-end justify-start left-[2%] w-[93%]">
                <div className="flex flex-col items-start justify-start mb-[5px] md:mt-0 mt-[53px]">
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
                  <Text
                    className="mt-9 text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    009
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[230px] grid sm:grid-cols-1 grid-cols-3 mb-[3px] md:ml-[0] ml-[18px] w-1/2 md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Showroom
                    </Text>
                    <Text
                      className="mt-[34px] text-[15px] text-blue-400"
                      size="txtRobotoMedium15Blue400"
                    >
                      Andijon
                    </Text>
                    <Text
                      className="mt-[31px] text-[15px] text-blue-400"
                      size="txtRobotoMedium15Blue400"
                    >
                      Andijon
                    </Text>
                    <Text
                      className="mt-[30px] text-[15px] text-blue-400"
                      size="txtRobotoMedium15Blue400"
                    >
                      Andijon
                    </Text>
                    <Text
                      className="mt-[35px] text-[15px] text-blue-400"
                      size="txtRobotoMedium15Blue400"
                    >
                      <>Qo\&#96;rg\&#96;ontepa</>
                    </Text>
                    <Text
                      className="mt-[35px] text-[15px] text-blue-400"
                      size="txtRobotoMedium15Blue400"
                    >
                      <>Qo\&#96;rg\&#96;ontepa</>
                    </Text>
                    <Text
                      className="mt-[33px] text-[15px] text-blue-400"
                      size="txtRobotoMedium15Blue400"
                    >
                      Namangan
                    </Text>
                    <Text
                      className="mt-8 text-[15px] text-blue-400"
                      size="txtRobotoMedium15Blue400"
                    >
                      Yangi bozor
                    </Text>
                    <Text
                      className="mt-[33px] text-[15px] text-blue-400"
                      size="txtRobotoMedium15Blue400"
                    >
                      Yangi bozor
                    </Text>
                    <Text
                      className="mt-[33px] text-[15px] text-blue-400"
                      size="txtRobotoMedium15Blue400"
                    >
                      Yangi bozor
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Summasi
                    </Text>
                    <Text
                      className="mt-[35px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      86 000 000
                    </Text>
                    <Text
                      className="mt-[34px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      32 500 000
                    </Text>
                    <Text
                      className="mt-[33px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      8 000 000
                    </Text>
                    <Text
                      className="mt-[38px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      9 650 000
                    </Text>
                    <Text
                      className="mt-[38px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      7 650 000
                    </Text>
                    <Text
                      className="mt-[35px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      9 650 000
                    </Text>
                    <Text
                      className="mt-9 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      3 530 000
                    </Text>
                    <Text
                      className="mt-9 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      1 120 000
                    </Text>
                    <Text
                      className="mt-9 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      1 745 000
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      <>To\&#96;langan</>
                    </Text>
                    <Text
                      className="mt-[33px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      80 000 000
                    </Text>
                    <Text
                      className="mt-[34px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      30 500 000
                    </Text>
                    <Text
                      className="mt-[33px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      7 000 000
                    </Text>
                    <Text
                      className="mt-[38px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      9 650 000
                    </Text>
                    <Text
                      className="mt-[38px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      7 650 000
                    </Text>
                    <Text
                      className="mt-[35px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      9 650 000
                    </Text>
                    <Text
                      className="mt-9 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      3 530 000
                    </Text>
                    <Text
                      className="mt-9 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      1 120 000
                    </Text>
                    <Text
                      className="mt-9 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      1 745 000
                    </Text>
                  </div>
                </List>
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[77px] grid grid-cols-2 mb-[5px] md:ml-[0] ml-[49px] w-[22%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col gap-[33px] justify-start w-full">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Qoldiq
                    </Text>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[23px]">
                      <Text
                        className="text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        6 000 000
                      </Text>
                      <Text
                        className="mt-[34px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        2 500 000
                      </Text>
                      <Text
                        className="mt-[33px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        1 000 000
                      </Text>
                      <Text
                        className="mt-[38px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        0
                      </Text>
                      <Text
                        className="mt-[38px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        0
                      </Text>
                      <Text
                        className="mt-[35px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        0
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        0
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        0
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        0
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[33px] items-center justify-start w-full">
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
                      <Text
                        className="mt-9 text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 13. 2022
                      </Text>
                    </div>
                  </div>
                </List>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[60px] w-[15%] md:w-full">
                  <div className="flex flex-col gap-[34px] justify-start w-full">
                    <Text
                      className="md:ml-[0] ml-[18px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Izoh
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-6 relative w-full">
                        <Text
                          className="absolute left-[0] text-blue_gray-500 text-xs top-[0]"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Tezroq bitirib berishni iltimos qilgan
                        </Text>
                        <Img
                          className="absolute h-6 inset-y-[0] my-auto right-[0] w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa"
                        />
                      </div>
                      <div className="flex flex-row gap-[9px] items-start justify-between mt-[26px] w-full">
                        <Text
                          className="text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          <>Mijoz o\&#96;lchovchidan shikoyat qildi sekin...</>
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_One"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[17px] w-full">
                        <Text
                          className="mt-[3px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          ...
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Two"
                        />
                      </div>
                      <div className="flex flex-row items-end justify-between mt-[26px] w-full">
                        <Text
                          className="mb-0.5 mt-1.5 text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          ...
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Three"
                        />
                      </div>
                      <div className="flex flex-row items-end justify-between mt-7 w-full">
                        <Text
                          className="mb-0.5 mt-1.5 text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          ...
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Four"
                        />
                      </div>
                      <div className="h-[29px] md:h-[58px] mt-[30px] relative w-full">
                        <Img
                          className="absolute h-6 right-[0] top-[0] w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Five"
                        />
                        <Text
                          className="absolute h-max inset-y-[0] left-[0] my-auto text-blue_gray-500 text-xs w-[85%] sm:w-full"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Bu mijoz janjal qilib qaytib sizlar bilan ...
                        </Text>
                      </div>
                      <div className="flex flex-row items-start justify-evenly mt-5 w-full">
                        <Text
                          className="sm:flex-1 text-blue_gray-500 text-xs w-[83%] sm:w-full"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Masjid qurilishi uchun 10% chegirma qilindi...
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Six"
                        />
                      </div>
                      <div className="flex flex-row gap-9 items-start justify-between mt-[17px] w-full">
                        <Text
                          className="mt-[3px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          <>Izohga hojat yo\&#96;q</>
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Seven"
                        />
                      </div>
                      <div className="flex flex-row items-end justify-between mt-[26px] w-full">
                        <Text
                          className="mb-0.5 mt-1.5 text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          ...
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Eight"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex sm:flex-col flex-row md:gap-10 items-end justify-between max-w-[1138px] md:px-5 right-[2%] top-[10%] w-full">
          <OmborTaminotchigaZayavkaOneTab
            className="flex flex-col items-center justify-start sm:mt-0 mt-12 w-[201px]"
            username="umumiy"
          />
          <div className="bg-blue_gray-900_87 flex sm:flex-1 flex-row gap-[29px] items-center justify-center p-[18px] rounded-[5px] w-[32%] sm:w-full">
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
        <div className="absolute bg-blue_gray-800_7e bottom-[37%] flex flex-row gap-[22px] items-center justify-start left-[0] pr-[94px] md:px-5 w-1/5">
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
        <div className="absolute flex flex-row gap-[21px] items-center justify-center left-[3%] md:px-5 top-[26%] w-[9%]">
          <Img
            className="h-6 w-6"
            src="images/img_icoutlineshop.svg"
            alt="icoutlineshop"
          />
          <Text className="text-blue_gray-500 text-sm" size="txtRobotoMedium14">
            DASHBOARD
          </Text>
        </div>
        <Button
          className="common-pointer bg-transparent cursor-pointer flex items-center justify-center left-[3%] min-w-[200px] ml-[38px] mt-[386px] top-[46%]"
          onClick={() => navigate("/kassa")}
          leftIcon={
            <Img
              className="h-6 mr-5 right-[3%] absolute"
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
          className="common-pointer bg-transparent bottom-[45%] cursor-pointer flex items-center justify-center left-[3%] mb-[376px] min-w-[161px] ml-[38px]"
          onClick={() => navigate("/omborqoldiqidsibuyurtmalarroyhatione")}
          leftIcon={
            <Img
              className="h-6 mr-5 right-[3%] absolute"
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
          className="common-pointer bg-transparent bottom-[32%] cursor-pointer flex items-center justify-center left-[3%] mb-[262px] min-w-[151px] ml-[41px]"
          onClick={() => navigate("/moliyachiqimtarixi")}
          leftIcon={
            <div className="mr-3.5 bg-blue_gray-500 right-[3%] absolute">
              <Img
                className="absolute"
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
        <div className="absolute bottom-[26%] flex flex-row gap-[18px] items-start justify-center left-[3%] md:px-5 w-[15%]">
          <Img
            className="h-[21px]"
            src="images/img_user_blue_gray_500.svg"
            alt="user"
          />
          <Text
            className="text-base text-blue_gray-500 uppercase"
            size="txtRobotoMedium16"
          >
            Buyurtmaga chiqim
          </Text>
        </div>
        <div className="absolute bottom-[19%] flex flex-row gap-5 items-center justify-center left-[3%] md:px-5 w-[13%]">
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
        <div className="absolute flex flex-row gap-[21px] items-center justify-center left-[3%] md:px-5 top-[33%] w-[11%]">
          <Img
            className="h-6 w-6"
            src="images/img_icoutlineshop_blue_gray_500.svg"
            alt="icoutlineshop_One"
          />
          <Text
            className="text-blue_gray-500 text-sm uppercase"
            size="txtRobotoMedium14"
          >
            OMBOR & SAVDO
          </Text>
        </div>
        <Button
          className="common-pointer bg-transparent cursor-pointer flex items-center justify-center left-[3%] min-w-[215px] ml-[41px] mt-[327px] top-[39%]"
          onClick={() => navigate("/showroombuyurtmalarstatusone")}
          leftIcon={
            <Img
              className="h-6 mr-5 right-[3%] absolute"
              src="images/img_rislideshowline.svg"
              alt="ri:slideshow-line"
            />
          }
        >
          <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
            Sowroomlar oynasi
          </div>
        </Button>
      </div>
    </>
  );
};

export default MoliyaShowroomdankirimtarixiTwoPage;
