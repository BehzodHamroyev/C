import React from "react";

import { Img, Input, List, Text } from "components";

const OmborBuyurtmalarroyhatiPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div className="absolute md:h-[1925px] sm:h-[899px] h-[900px] inset-[0] justify-center m-auto md:px-5 w-full">
          <Img
            className="h-[899px] m-auto object-cover w-full"
            src="images/img_global1.png"
            alt="globalOne"
          />
          <div className="absolute flex md:flex-col flex-row gap-[37px] inset-x-[0] items-start justify-between mx-auto top-[3%] w-[95%]">
            <div className="flex flex-col md:gap-10 gap-[368px] items-center justify-start md:mt-0 mt-[26px] w-[15%] md:w-full">
              <Img
                className="h-[82px]"
                src="images/img_group834.svg"
                alt="groupSeventySix"
              />
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row gap-[18px] items-start justify-start w-full">
                  <Img
                    className="h-6"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="mt-[3px] text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    qoldiqlar ombori
                  </Text>
                </div>
                <div className="flex flex-row gap-[22px] items-start justify-start ml-0.5 md:ml-[0] mt-[29px] w-[96%] md:w-full">
                  <Img
                    className="h-[23px] w-[23px]"
                    src="images/img_vector_blue_gray_500.svg"
                    alt="vector"
                  />
                  <Text
                    className="mt-1 text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    mAHSULOT QABULI
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[3px] mt-[33px] w-[98%] md:w-full">
                  <Img
                    className="h-[26px] w-[26px]"
                    src="images/img_mail.svg"
                    alt="mail"
                  />
                  <Text
                    className="text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    mAHSULOT OMBORI
                  </Text>
                </div>
                <div className="flex flex-row gap-[22px] items-start justify-start ml-0.5 md:ml-[0] mt-8 w-3/4 md:w-full">
                  <Img
                    className="h-[23px] w-[23px]"
                    src="images/img_calendar.svg"
                    alt="calendar"
                  />
                  <Text
                    className="mt-1 text-blue_gray-500 text-sm uppercase"
                    size="txtRobotoMedium14"
                  >
                    YUK CHIQARISH
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col font-worksans gap-8 items-center justify-start w-[83%] md:w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[98%] md:w-full">
                <Text
                  className="sm:mt-0 mt-[3px] text-3xl sm:text-[26px] md:text-[28px] text-gray-400 tracking-[-0.60px]"
                  size="txtWorkSansRomanMedium30"
                >
                  Buyurtmalar
                </Text>
                <div className="flex flex-row font-roboto items-end justify-end">
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
                    className="mb-[3px] ml-[11px] mt-[7px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-500"
                    size="txtRobotoMedium23"
                  >
                    Operator
                  </Text>
                  <Img
                    className="h-[7px] ml-[67px] my-[15px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
              </div>
              <div className="font-roboto md:h-[1505px] h-[662px] sm:h-[704px] relative w-full">
                <div className="absolute bg-blue_gray-900_87_01 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[11px] rounded-[5px] w-full">
                  <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-start mb-[599px] ml-5 md:ml-[0] w-[38%] md:w-full">
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
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-start justify-center m-auto p-0.5 w-full"
                  style={{ backgroundImage: "url('images/img_group116.svg')" }}
                >
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-2.5 ml-5 md:ml-[0] w-3/5 md:w-full">
                    <List
                      className="sm:flex-col flex-row gap-[27px] grid grid-cols-2 w-[22%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-start justify-start w-full">
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[89%] sm:w-full"
                          src="images/img_.png"
                          alt="Seventeen"
                        />
                        <Text
                          className="mt-[23px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          01
                        </Text>
                        <Text
                          className="h-[18px] mt-6 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          02
                        </Text>
                        <Text
                          className="h-[18px] mt-[23px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          03
                        </Text>
                        <Text
                          className="h-[18px] mt-[26px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          04
                        </Text>
                        <Text
                          className="h-[18px] mt-[26px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          05
                        </Text>
                        <Text
                          className="h-[18px] mt-[26px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          06
                        </Text>
                        <Text
                          className="h-[18px] mt-6 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          07
                        </Text>
                        <Text
                          className="h-[18px] mt-[21px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          08
                        </Text>
                        <Text
                          className="h-[18px] mt-6 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          09
                        </Text>
                        <Text
                          className="h-[18px] mt-6 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          10
                        </Text>
                        <Text
                          className="mt-6 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          11
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[21px] justify-start w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Loyiha nomeri
                        </Text>
                        <div className="flex flex-col items-start justify-start ml-7 md:ml-[0]">
                          <Text
                            className="text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            1024
                          </Text>
                          <Text
                            className="mt-6 text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            120002
                          </Text>
                          <Text
                            className="mt-[23px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            120002
                          </Text>
                          <Text
                            className="mt-[26px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            120001
                          </Text>
                          <Text
                            className="mt-[26px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            119999
                          </Text>
                          <Text
                            className="mt-[26px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            119996
                          </Text>
                          <Text
                            className="mt-6 text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            119997
                          </Text>
                          <Text
                            className="mt-[21px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            119996
                          </Text>
                          <Text
                            className="mt-6 text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            119997
                          </Text>
                          <Text
                            className="mt-[25px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            119996
                          </Text>
                          <Text
                            className="mt-6 text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            119995
                          </Text>
                        </div>
                      </div>
                    </List>
                    <List
                      className="sm:flex-col flex-row md:gap-10 gap-[119px] grid grid-cols-2 md:ml-[0] ml-[78px] w-[43%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[13px] items-center justify-start w-full">
                          <Text
                            className="text-[15px] text-blue_gray-500 text-center w-full"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            Materiallarga buyurtma
                          </Text>
                          <div className="flex flex-col items-center justify-start w-[21%] md:w-full">
                            <div className="flex flex-row h-[19px] items-end justify-evenly w-[19px]">
                              <div className="flex h-[19px] justify-end relative w-[69%]">
                                <Img
                                  className="absolute bottom-[11%] h-1.5 right-[0]"
                                  src="images/img_vector_6x4.svg"
                                  alt="vector"
                                />
                                <Img
                                  className="h-1.5 mb-0.5 ml-0.5 mt-auto"
                                  src="images/img_vector_white_a700_6x4.svg"
                                  alt="vector_One"
                                />
                                <Img
                                  className="absolute h-[19px] inset-[0] justify-center m-auto"
                                  src="images/img_file_white_a700.svg"
                                  alt="file"
                                />
                              </div>
                              <Img
                                className="h-1.5 mb-0.5 mt-[9px]"
                                src="images/img_vector_1.svg"
                                alt="vector_Two"
                              />
                            </div>
                            <div className="flex flex-row h-[19px] items-end justify-evenly mt-[22px] w-[19px]">
                              <div className="flex h-[19px] justify-end relative w-[69%]">
                                <Img
                                  className="absolute bottom-[11%] h-1.5 right-[0]"
                                  src="images/img_vector_6x4.svg"
                                  alt="vector_Three"
                                />
                                <Img
                                  className="h-1.5 mb-0.5 ml-0.5 mt-auto"
                                  src="images/img_vector_white_a700_6x4.svg"
                                  alt="vector_Four"
                                />
                                <Img
                                  className="absolute h-[19px] inset-[0] justify-center m-auto"
                                  src="images/img_file_white_a700.svg"
                                  alt="file_One"
                                />
                              </div>
                              <Img
                                className="h-1.5 mb-0.5 mt-[9px]"
                                src="images/img_vector_1.svg"
                                alt="vector_Five"
                              />
                            </div>
                            <div className="flex flex-row h-[19px] items-end justify-evenly mt-6 w-[19px]">
                              <div className="flex h-[19px] justify-end relative w-[69%]">
                                <Img
                                  className="absolute bottom-[11%] h-1.5 right-[0]"
                                  src="images/img_vector_6x4.svg"
                                  alt="vector_Six"
                                />
                                <Img
                                  className="h-1.5 mb-0.5 ml-0.5 mt-auto"
                                  src="images/img_vector_white_a700_6x4.svg"
                                  alt="vector_Seven"
                                />
                                <Img
                                  className="absolute h-[19px] inset-[0] justify-center m-auto"
                                  src="images/img_file_white_a700.svg"
                                  alt="file_Two"
                                />
                              </div>
                              <Img
                                className="h-1.5 mb-0.5 mt-[9px]"
                                src="images/img_vector_1.svg"
                                alt="vector_Eight"
                              />
                            </div>
                            <Img
                              className="h-[19px] mt-[22px] w-[19px]"
                              src="images/img_file_white_a700_19x19.svg"
                              alt="file_Three"
                            />
                            <Img
                              className="h-[19px] mt-[25px] w-[19px]"
                              src="images/img_file_white_a700_19x19.svg"
                              alt="file_Four"
                            />
                            <div className="flex flex-row h-[19px] items-end justify-evenly mt-[25px] w-[19px]">
                              <div className="flex h-[19px] justify-end relative w-[69%]">
                                <Img
                                  className="absolute bottom-[11%] h-1.5 right-[0]"
                                  src="images/img_vector_6x4.svg"
                                  alt="vector_Nine"
                                />
                                <Img
                                  className="h-1.5 mb-0.5 ml-0.5 mt-auto"
                                  src="images/img_vector_white_a700_6x4.svg"
                                  alt="vector_Ten"
                                />
                                <Img
                                  className="absolute h-[19px] inset-[0] justify-center m-auto"
                                  src="images/img_file_white_a700.svg"
                                  alt="file_Five"
                                />
                              </div>
                              <Img
                                className="h-1.5 mb-0.5 mt-[9px]"
                                src="images/img_vector_1.svg"
                                alt="vector_Eleven"
                              />
                            </div>
                            <div className="flex flex-row h-[19px] items-end justify-evenly mt-[23px] w-[19px]">
                              <div className="flex h-[19px] justify-end relative w-[69%]">
                                <Img
                                  className="absolute bottom-[11%] h-1.5 right-[0]"
                                  src="images/img_vector_6x4.svg"
                                  alt="vector_Twelve"
                                />
                                <Img
                                  className="h-1.5 mb-0.5 ml-0.5 mt-auto"
                                  src="images/img_vector_white_a700_6x4.svg"
                                  alt="vector_Thirteen"
                                />
                                <Img
                                  className="absolute h-[19px] inset-[0] justify-center m-auto"
                                  src="images/img_file_white_a700.svg"
                                  alt="file_Six"
                                />
                              </div>
                              <Img
                                className="h-1.5 mb-0.5 mt-[9px]"
                                src="images/img_vector_1.svg"
                                alt="vector_Fourteen"
                              />
                            </div>
                            <div className="flex flex-row h-[19px] items-end justify-evenly mt-5 w-[19px]">
                              <div className="flex h-[19px] justify-end relative w-[69%]">
                                <Img
                                  className="absolute bottom-[11%] h-1.5 right-[0]"
                                  src="images/img_vector_6x4.svg"
                                  alt="vector_Fifteen"
                                />
                                <Img
                                  className="h-1.5 mb-0.5 ml-0.5 mt-auto"
                                  src="images/img_vector_white_a700_6x4.svg"
                                  alt="vector_Sixteen"
                                />
                                <Img
                                  className="absolute h-[19px] inset-[0] justify-center m-auto"
                                  src="images/img_file_white_a700.svg"
                                  alt="file_Seven"
                                />
                              </div>
                              <Img
                                className="h-1.5 mb-0.5 mt-[9px]"
                                src="images/img_vector_1.svg"
                                alt="vector_Seventeen"
                              />
                            </div>
                            <div className="flex flex-row h-[19px] items-end justify-evenly mt-[23px] w-[19px]">
                              <div className="flex h-[19px] justify-end relative w-[69%]">
                                <Img
                                  className="absolute bottom-[11%] h-1.5 right-[0]"
                                  src="images/img_vector_6x4.svg"
                                  alt="vector_Eighteen"
                                />
                                <Img
                                  className="h-1.5 mb-0.5 ml-0.5 mt-auto"
                                  src="images/img_vector_white_a700_6x4.svg"
                                  alt="vector_Nineteen"
                                />
                                <Img
                                  className="absolute h-[19px] inset-[0] justify-center m-auto"
                                  src="images/img_file_white_a700.svg"
                                  alt="file_Eight"
                                />
                              </div>
                              <Img
                                className="h-1.5 mb-0.5 mt-[9px]"
                                src="images/img_vector_1.svg"
                                alt="vector_Twenty"
                              />
                            </div>
                            <div className="flex flex-row h-[19px] items-end justify-evenly mt-[23px] w-[19px]">
                              <div className="flex h-[19px] justify-end relative w-[69%]">
                                <Img
                                  className="absolute bottom-[11%] h-1.5 right-[0]"
                                  src="images/img_vector_6x4.svg"
                                  alt="vector_TwentyOne"
                                />
                                <Img
                                  className="h-1.5 mb-0.5 ml-0.5 mt-auto"
                                  src="images/img_vector_white_a700_6x4.svg"
                                  alt="vector_TwentyTwo"
                                />
                                <Img
                                  className="absolute h-[19px] inset-[0] justify-center m-auto"
                                  src="images/img_file_white_a700.svg"
                                  alt="file_Nine"
                                />
                              </div>
                              <Img
                                className="h-1.5 mb-0.5 mt-[9px]"
                                src="images/img_vector_1.svg"
                                alt="vector_TwentyThree"
                              />
                            </div>
                            <div className="flex flex-row h-[19px] items-end justify-evenly mt-[23px] w-[19px]">
                              <div className="flex h-[19px] justify-end relative w-[69%]">
                                <Img
                                  className="absolute bottom-[11%] h-1.5 right-[0]"
                                  src="images/img_vector_6x4.svg"
                                  alt="vector_TwentyFour"
                                />
                                <Img
                                  className="h-1.5 mb-0.5 ml-0.5 mt-auto"
                                  src="images/img_vector_white_a700_6x4.svg"
                                  alt="vector_TwentyFive"
                                />
                                <Img
                                  className="absolute h-[19px] inset-[0] justify-center m-auto"
                                  src="images/img_file_white_a700.svg"
                                  alt="file_Ten"
                                />
                              </div>
                              <Img
                                className="h-1.5 mb-0.5 mt-[9px]"
                                src="images/img_vector_1.svg"
                                alt="vector_TwentySix"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                          <Text
                            className="text-[15px] text-blue_gray-500"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            Namunalar
                          </Text>
                          <div className="flex flex-col items-center justify-start w-[26%] md:w-full">
                            <div className="flex flex-row h-[19px] items-end justify-evenly w-[19px]">
                              <div className="flex h-[19px] justify-end relative w-[69%]">
                                <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[85%]">
                                  <Img
                                    className="h-1.5"
                                    src="images/img_vector_white_a700_6x4.svg"
                                    alt="vector"
                                  />
                                  <Img
                                    className="h-1.5"
                                    src="images/img_vector_6x4.svg"
                                    alt="vector_One"
                                  />
                                </div>
                                <Img
                                  className="absolute h-[19px] inset-[0] justify-center m-auto"
                                  src="images/img_file_white_a700.svg"
                                  alt="file"
                                />
                              </div>
                              <Img
                                className="h-1.5 mb-0.5 mt-[9px]"
                                src="images/img_vector_1.svg"
                                alt="vector_Two"
                              />
                            </div>
                            <div className="flex flex-row h-[19px] items-end justify-evenly mt-[22px] w-[19px]">
                              <div className="flex h-[19px] justify-end relative w-[69%]">
                                <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[85%]">
                                  <Img
                                    className="h-1.5"
                                    src="images/img_vector_white_a700_6x4.svg"
                                    alt="vector_Three"
                                  />
                                  <Img
                                    className="h-1.5"
                                    src="images/img_vector_6x4.svg"
                                    alt="vector_Four"
                                  />
                                </div>
                                <Img
                                  className="absolute h-[19px] inset-[0] justify-center m-auto"
                                  src="images/img_file_white_a700.svg"
                                  alt="file_One"
                                />
                              </div>
                              <Img
                                className="h-1.5 mb-0.5 mt-[9px]"
                                src="images/img_vector_1.svg"
                                alt="vector_Five"
                              />
                            </div>
                            <div className="flex flex-row h-[19px] items-end justify-evenly mt-6 w-[19px]">
                              <div className="flex h-[19px] justify-end relative w-[69%]">
                                <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[85%]">
                                  <Img
                                    className="h-1.5"
                                    src="images/img_vector_white_a700_6x4.svg"
                                    alt="vector_Six"
                                  />
                                  <Img
                                    className="h-1.5"
                                    src="images/img_vector_6x4.svg"
                                    alt="vector_Seven"
                                  />
                                </div>
                                <Img
                                  className="absolute h-[19px] inset-[0] justify-center m-auto"
                                  src="images/img_file_white_a700.svg"
                                  alt="file_Two"
                                />
                              </div>
                              <Img
                                className="h-1.5 mb-0.5 mt-[9px]"
                                src="images/img_vector_1.svg"
                                alt="vector_Eight"
                              />
                            </div>
                            <Img
                              className="h-[19px] mt-[22px] w-[19px]"
                              src="images/img_file_white_a700_19x19.svg"
                              alt="file_Three"
                            />
                            <Img
                              className="h-[19px] mt-[25px] w-[19px]"
                              src="images/img_file_white_a700_19x19.svg"
                              alt="file_Four"
                            />
                            <div className="flex flex-row h-[19px] items-end justify-evenly mt-[25px] w-[19px]">
                              <div className="flex h-[19px] justify-end relative w-[69%]">
                                <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[85%]">
                                  <Img
                                    className="h-1.5"
                                    src="images/img_vector_white_a700_6x4.svg"
                                    alt="vector_Nine"
                                  />
                                  <Img
                                    className="h-1.5"
                                    src="images/img_vector_6x4.svg"
                                    alt="vector_Ten"
                                  />
                                </div>
                                <Img
                                  className="absolute h-[19px] inset-[0] justify-center m-auto"
                                  src="images/img_file_white_a700.svg"
                                  alt="file_Five"
                                />
                              </div>
                              <Img
                                className="h-1.5 mb-0.5 mt-[9px]"
                                src="images/img_vector_1.svg"
                                alt="vector_Eleven"
                              />
                            </div>
                            <div className="flex flex-row h-[19px] items-end justify-evenly mt-[23px] w-[19px]">
                              <div className="flex h-[19px] justify-end relative w-[69%]">
                                <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[85%]">
                                  <Img
                                    className="h-1.5"
                                    src="images/img_vector_white_a700_6x4.svg"
                                    alt="vector_Twelve"
                                  />
                                  <Img
                                    className="h-1.5"
                                    src="images/img_vector_6x4.svg"
                                    alt="vector_Thirteen"
                                  />
                                </div>
                                <Img
                                  className="absolute h-[19px] inset-[0] justify-center m-auto"
                                  src="images/img_file_white_a700.svg"
                                  alt="file_Six"
                                />
                              </div>
                              <Img
                                className="h-1.5 mb-0.5 mt-[9px]"
                                src="images/img_vector_1.svg"
                                alt="vector_Fourteen"
                              />
                            </div>
                            <div className="flex flex-row h-[19px] items-end justify-evenly mt-5 w-[19px]">
                              <div className="flex h-[19px] justify-end relative w-[69%]">
                                <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[85%]">
                                  <Img
                                    className="h-1.5"
                                    src="images/img_vector_white_a700_6x4.svg"
                                    alt="vector_Fifteen"
                                  />
                                  <Img
                                    className="h-1.5"
                                    src="images/img_vector_6x4.svg"
                                    alt="vector_Sixteen"
                                  />
                                </div>
                                <Img
                                  className="absolute h-[19px] inset-[0] justify-center m-auto"
                                  src="images/img_file_white_a700.svg"
                                  alt="file_Seven"
                                />
                              </div>
                              <Img
                                className="h-1.5 mb-0.5 mt-[9px]"
                                src="images/img_vector_1.svg"
                                alt="vector_Seventeen"
                              />
                            </div>
                            <div className="flex flex-row h-[19px] items-end justify-evenly mt-[23px] w-[19px]">
                              <div className="flex h-[19px] justify-end relative w-[69%]">
                                <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[85%]">
                                  <Img
                                    className="h-1.5"
                                    src="images/img_vector_white_a700_6x4.svg"
                                    alt="vector_Eighteen"
                                  />
                                  <Img
                                    className="h-1.5"
                                    src="images/img_vector_6x4.svg"
                                    alt="vector_Nineteen"
                                  />
                                </div>
                                <Img
                                  className="absolute h-[19px] inset-[0] justify-center m-auto"
                                  src="images/img_file_white_a700.svg"
                                  alt="file_Eight"
                                />
                              </div>
                              <Img
                                className="h-1.5 mb-0.5 mt-[9px]"
                                src="images/img_vector_1.svg"
                                alt="vector_Twenty"
                              />
                            </div>
                            <div className="flex flex-row h-[19px] items-end justify-evenly mt-[23px] w-[19px]">
                              <div className="flex h-[19px] justify-end relative w-[69%]">
                                <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[85%]">
                                  <Img
                                    className="h-1.5"
                                    src="images/img_vector_white_a700_6x4.svg"
                                    alt="vector_TwentyOne"
                                  />
                                  <Img
                                    className="h-1.5"
                                    src="images/img_vector_6x4.svg"
                                    alt="vector_TwentyTwo"
                                  />
                                </div>
                                <Img
                                  className="absolute h-[19px] inset-[0] justify-center m-auto"
                                  src="images/img_file_white_a700.svg"
                                  alt="file_Nine"
                                />
                              </div>
                              <Img
                                className="h-1.5 mb-0.5 mt-[9px]"
                                src="images/img_vector_1.svg"
                                alt="vector_TwentyThree"
                              />
                            </div>
                            <div className="flex flex-row h-[19px] items-end justify-evenly mt-[23px] w-[19px]">
                              <div className="flex h-[19px] justify-end relative w-[69%]">
                                <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[85%]">
                                  <Img
                                    className="h-1.5"
                                    src="images/img_vector_white_a700_6x4.svg"
                                    alt="vector_TwentyFour"
                                  />
                                  <Img
                                    className="h-1.5"
                                    src="images/img_vector_6x4.svg"
                                    alt="vector_TwentyFive"
                                  />
                                </div>
                                <Img
                                  className="absolute h-[19px] inset-[0] justify-center m-auto"
                                  src="images/img_file_white_a700.svg"
                                  alt="file_Ten"
                                />
                              </div>
                              <Img
                                className="h-1.5 mb-0.5 mt-[9px]"
                                src="images/img_vector_1.svg"
                                alt="vector_TwentySix"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[93px]">
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
                        className="mt-[29px] text-blue_gray-500 text-xs"
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
                        className="mt-6 text-blue_gray-500 text-xs"
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
                        className="mt-8 text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 13. 2022
                      </Text>
                      <Text
                        className="mt-[23px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 13. 2022
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-800_7e flex flex-col gap-6 justify-start left-[0] md:px-5 py-3 top-[26%] w-1/5">
          <div className="h-[60px] relative w-full">
            <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-end justify-center m-auto p-3.5 w-full">
              <div className="flex flex-row items-start justify-end mr-[11px] mt-1.5 w-[82%] md:w-full">
                <Img className="h-6 w-6" src="images/img_map.svg" alt="map" />
                <Text
                  className="ml-[23px] text-base text-white-A700 uppercase"
                  size="txtRobotoMedium16WhiteA700"
                >
                  Bichuv
                </Text>
                <Img
                  className="h-1 ml-[86px] mt-[7px]"
                  src="images/img_line49.svg"
                  alt="lineFortyNine"
                />
              </div>
            </div>
            <div className="absolute bg-red-300 h-[60px] inset-y-[0] left-[0] my-auto w-[6%]"></div>
          </div>
          <div className="flex flex-col gap-[23px] items-start justify-start mb-3.5 md:ml-[0] ml-[87px]">
            <Text
              className="text-blue_gray-500 text-sm"
              size="txtRobotoMedium14"
            >
              Bichish kartasi
            </Text>
            <Text
              className="text-blue_gray-500 text-sm"
              size="txtRobotoMedium14"
            >
              Buyurtma qoldiq ID
            </Text>
            <Text
              className="text-blue_gray-500 text-sm"
              size="txtRobotoMedium14"
            >
              Taminotchiga buyurtma
            </Text>
            <Text
              className="text-blue_gray-500 text-sm"
              size="txtRobotoMedium14"
            >
              Buyurtmalar tarixi
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default OmborBuyurtmalarroyhatiPage;
