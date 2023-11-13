import React from "react";

import { Img, Input, List, SelectBox, Text } from "components";

const statusOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const OmborBuyurtmalarroyhatiTwoPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto sm:pr-5 pr-[29px] py-[29px] relative w-full">
        <Img
          className="absolute h-[82px] left-[3%] top-[6%]"
          src="images/img_group834.svg"
          alt="groupSeventySix"
        />
        <div className="absolute flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1071px] md:px-5 right-[5%] top-[3%] w-full">
          <Text
            className="text-2xl md:text-[22px] text-gray-400 sm:text-xl"
            size="txtRobotoMedium24"
          >
            Bichish kartasi\{" "}
          </Text>
          <div className="flex flex-row items-end justify-end">
            <div className="h-[38px] relative w-[38px]">
              <Img
                className="h-[38px] m-auto rounded-[50%] w-[38px]"
                src="images/img_il1588xn1_38x38.png"
                alt="il1588xnOne"
              />
              <Img
                className="absolute h-[38px] inset-[0] justify-center m-auto rounded-[50%] w-[38px]"
                src="images/img_il1588xn2_38x38.png"
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
        <div className="absolute sm:h-[1332px] md:h-[1995px] h-[662px] inset-[0] justify-center m-auto max-w-[1400px] md:px-5 w-full">
          <div className="absolute sm:h-[1332px] md:h-[1995px] h-[662px] inset-y-[0] my-auto right-[0] w-[81%] md:w-full">
            <div className="absolute bg-blue_gray-900 flex sm:flex-col flex-row md:gap-10 h-full inset-[0] items-start justify-between m-auto p-4 rounded-[5px] w-full">
              <div className="flex sm:flex-col flex-row gap-6 items-center justify-start mb-[599px] ml-2 sm:ml-[0]">
                <Img
                  className="h-[18px] w-[17px]"
                  src="images/img_refresh.svg"
                  alt="refresh"
                />
                <Input
                  name="group213"
                  placeholder="Izlash"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                  wrapClassName="w-[91%] sm:w-full"
                  shape="round"
                  color="blue_gray_800"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
              <SelectBox
                className="sm:flex-1 font-medium leading-[normal] mb-[597px] mr-[19px] sm:mt-0 mt-0.5 text-base text-left w-[16%] sm:w-full"
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
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-start justify-center m-auto p-0.5 w-full"
              style={{ backgroundImage: "url('images/img_group216.svg')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start ml-5 md:ml-[0] w-[90%] md:w-full">
                <List
                  className="sm:flex-col flex-row gap-[27px] grid grid-cols-2 w-[15%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-start justify-start w-full">
                    <Img
                      className="h-[18px] md:h-auto object-cover w-[89%] sm:w-full"
                      src="images/img_.png"
                      alt="Fifteen"
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
                        120003
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
                  className="sm:flex-col flex-row md:gap-10 gap-[119px] grid grid-cols-2 md:ml-[0] ml-[78px] w-[29%] md:w-full"
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
                            <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[77%]">
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
                            <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[77%]">
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
                            <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[77%]">
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
                            <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[77%]">
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
                            <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[77%]">
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
                            <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[77%]">
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
                            <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[77%]">
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
                            <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[77%]">
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
                            <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[77%]">
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
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[195px]">
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
                <div className="flex flex-col gap-6 items-start justify-start md:ml-[0] ml-[183px] md:mt-0 mt-2 w-[6%] md:w-full">
                  <Text
                    className="text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    Status
                  </Text>
                  <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] w-[97%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-[47%] md:w-full">
                        <div className="bg-red-300 h-3.5 rounded-[50%] w-3.5"></div>
                        <Text
                          className="text-[8px] text-red-300"
                          size="txtRobotoMedium8Red300"
                        >
                          Kutish
                        </Text>
                        <div className="bg-red-300 h-3.5 mt-4 rounded-[50%] w-3.5"></div>
                        <Text
                          className="text-[8px] text-red-300"
                          size="txtRobotoMedium8Red300"
                        >
                          Kutish
                        </Text>
                        <div className="bg-red-300 h-3.5 mt-3.5 rounded-[50%] w-3.5"></div>
                        <Text
                          className="text-[8px] text-red-300"
                          size="txtRobotoMedium8Red300"
                        >
                          Kutish
                        </Text>
                        <div className="bg-orange-300 h-3.5 mt-[19px] rounded-[50%] w-3.5"></div>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[8px] text-orange-300_01"
                          size="txtRobotoMedium8Orange30001"
                        >
                          Taminotchida
                        </Text>
                        <div className="bg-light_green-400 h-3.5 ml-4 md:ml-[0] mt-[18px] rounded-[50%] w-3.5"></div>
                        <Text
                          className="md:ml-[0] ml-[5px] text-[8px] text-light_green-400"
                          size="txtRobotoMedium8Lightgreen400"
                        >
                          Topshirildi
                        </Text>
                        <div className="bg-orange-300 h-3.5 md:ml-[0] ml-[15px] mt-[19px] rounded-[50%] w-3.5"></div>
                        <Text
                          className="text-[8px] text-orange-300_01"
                          size="txtRobotoMedium8Orange30001"
                        >
                          Taminotchida
                        </Text>
                        <div className="bg-orange-300 h-3.5 md:ml-[0] ml-[15px] mt-[18px] rounded-[50%] w-3.5"></div>
                        <Text
                          className="text-[8px] text-orange-300_01"
                          size="txtRobotoMedium8Orange30001"
                        >
                          Taminotchida
                        </Text>
                        <div className="bg-light_green-400 h-3.5 md:ml-[0] ml-[15px] mt-[15px] rounded-[50%] w-3.5"></div>
                        <Text
                          className="md:ml-[0] ml-[5px] mt-0.5 text-[8px] text-light_green-400"
                          size="txtRobotoMedium8Lightgreen400"
                        >
                          Topshirildi
                        </Text>
                        <div className="bg-light_green-400 h-3.5 md:ml-[0] ml-[15px] mt-[17px] rounded-[50%] w-3.5"></div>
                        <Text
                          className="md:ml-[0] ml-[5px] text-[8px] text-light_green-400"
                          size="txtRobotoMedium8Lightgreen400"
                        >
                          Topshirildi
                        </Text>
                        <div className="bg-light_green-400 h-3.5 md:ml-[0] ml-[15px] mt-5 rounded-[50%] w-3.5"></div>
                        <Text
                          className="md:ml-[0] ml-[5px] text-[8px] text-light_green-400"
                          size="txtRobotoMedium8Lightgreen400"
                        >
                          Topshirildi
                        </Text>
                        <div className="bg-light_green-400 h-3.5 md:ml-[0] ml-[15px] mt-3.5 rounded-[50%] w-3.5"></div>
                        <Text
                          className="md:ml-[0] ml-[5px] mt-0.5 text-[8px] text-light_green-400"
                          size="txtRobotoMedium8Lightgreen400"
                        >
                          Topshirildi
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute md:h-[161px] h-[164px] left-[0] top-[11%] w-1/5">
            <div className="absolute bg-blue_gray-900 flex flex-col h-full inset-[0] items-end justify-center m-auto p-[13px] w-full">
              <div className="flex flex-col gap-[55px] justify-start mb-[9px] mr-[11px] w-[78%] md:w-full">
                <div className="flex flex-row gap-[26px] items-start justify-between w-full">
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_map.svg"
                    alt="map"
                  />
                  <div className="flex sm:flex-1 flex-col items-center justify-start sm:w-full">
                    <SelectBox
                      className="font-medium leading-[normal] text-base text-left text-white-A700 w-full"
                      placeholderClassName="text-white-A700"
                      indicator={
                        <Img
                          className="h-1 mr-[0] outline-white-A700 outline-[0.5px] outline w-[11px]"
                          src="images/img_arrowdown_white_a700.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="language_One"
                      options={languageOneOptionsList}
                      isSearchable={false}
                      placeholder="Bichish "
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3.5 items-start justify-start ml-11 md:ml-[0]">
                  <Text
                    className="text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    Buyutma qoldiq ID
                  </Text>
                  <Text
                    className="text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    Taminotchiga
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="absolute bg-blue_gray-500 h-[25px] inset-x-[0] justify-center mx-auto pb-1 sm:px-5 px-[35px] text-base text-white-A700 top-[26%] w-max"
              size="txtRobotoMedium16WhiteA700"
            >
              Bichish kartasi
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default OmborBuyurtmalarroyhatiTwoPage;
