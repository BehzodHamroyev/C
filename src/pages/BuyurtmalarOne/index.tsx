import React from "react";

import { Button, CheckBox, Img, Line, List, SelectBox, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const tasdiqlanganOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BuyurtmalarOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto p-7 sm:px-5 w-full"
          style={{
            backgroundImage: "url('images/img_showroombuyurtmalar.png')",
          }}
        >
          <div className="flex flex-col gap-[17px] items-center justify-start max-w-[1368px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-col flex-row md:gap-11 items-start justify-between w-[99%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[82px] items-center justify-start md:mt-0 mt-[27px] w-[14%] md:w-full"
                style={{ backgroundImage: "url('images/img_group834.svg')" }}
              >
                <Img
                  className="h-[82px]"
                  src="images/img_group834.svg"
                  alt="group103"
                />
              </div>
              <div className="flex flex-col gap-[26px] items-center justify-start w-[84%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                  <FrameFiftyTwoDatafiltr className="flex md:flex-col flex-row gap-[17px] items-center justify-between w-[66%] md:w-full" />
                  <div className="flex flex-row items-start justify-start w-[17%] md:w-full">
                    <div className="h-[38px] relative w-[38px]">
                      <Img
                        className="h-[38px] m-auto rounded-[50%] w-[38px]"
                        src="images/img_il1588xn1_1.png"
                        alt="il1588xnOne"
                      />
                      <Img
                        className="absolute h-[38px] inset-[0] justify-center m-auto rounded-[50%] w-[38px]"
                        src="images/img_il1588xn2.png"
                        alt="il1588xnTwo"
                      />
                    </div>
                    <Text
                      className="ml-[11px] mt-1 sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-500"
                      size="txtRobotoMedium23"
                    >
                      Filter
                    </Text>
                    <Img
                      className="h-[7px] ml-[60px] mt-4"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-center justify-end p-[15px] rounded-[5px] w-[32%] md:w-full">
                    <div className="flex flex-col gap-3 justify-start mt-0.5 w-[26%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-blue_gray-500 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Tasdiqlangan
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[7px] items-end justify-end md:ml-[0] ml-[22px] w-[64%] md:w-full">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-light_green-400"
                          size="txtRobotoMedium28"
                        >
                          15
                        </Text>
                        <Text
                          className="mb-0.5 mt-3 text-[15px] text-light_green-400"
                          size="txtRobotoMedium15"
                        >
                          ta
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-start justify-end p-3.5 rounded-[5px] w-[32%] md:w-full">
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[98px] mt-1 w-[29%] md:w-full">
                      <div className="flex flex-col gap-[13px] justify-start w-full">
                        <Text
                          className="text-blue_gray-500 text-sm"
                          size="txtRobotoMedium14"
                        >
                          <>Qayta ko\&#96;rilgan</>
                        </Text>
                        <div className="flex flex-row gap-1.5 items-center justify-end md:ml-[0] ml-[27px] w-[55%] md:w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-red-300"
                            size="txtRobotoMedium28Red300"
                          >
                            08
                          </Text>
                          <Text
                            className="text-[15px] text-red-300"
                            size="txtRobotoMedium15Red300"
                          >
                            ta
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-start justify-end p-[18px] rounded-[5px] w-[32%] md:w-full">
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[100px] w-[26%] md:w-full">
                      <div className="flex flex-col gap-[9px] items-end justify-start w-full">
                        <Text
                          className="text-blue_gray-500 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Umumiy soni
                        </Text>
                        <div className="flex flex-row gap-[5px] items-end justify-end w-[63%] md:w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-blue-400"
                            size="txtRobotoMedium28Blue400"
                          >
                            23
                          </Text>
                          <Text
                            className="mb-0.5 mt-3 text-[15px] text-blue-400"
                            size="txtRobotoMedium15Blue400"
                          >
                            ta
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row gap-[31px] items-center justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-8 items-start justify-start w-[16%] md:w-full">
                <div className="flex flex-row gap-[22px] items-start justify-start ml-0.5 md:ml-[0] w-[85%] md:w-full">
                  <Img
                    className="h-[21px] w-[21px]"
                    src="images/img_bxbxsaddtoqueue.svg"
                    alt="bxbxsaddtoqueue"
                  />
                  <Text
                    className="mt-0.5 text-blue_gray-500 text-sm uppercase"
                    size="txtRobotoMedium14"
                  >
                    <>material qo\&#96;shish</>
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-end justify-start w-[57%] md:w-full">
                  <Img
                    className="h-[27px] w-[27px]"
                    src="images/img_ictwotonepricechange.svg"
                    alt="ictwotonepricec"
                  />
                  <Text
                    className="mb-0.5 mt-[5px] text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    Kassaga
                  </Text>
                </div>
                <div className="flex flex-row gap-[25px] items-start justify-start w-full">
                  <Img
                    className="h-[19px] mb-[3px] w-[19px]"
                    src="images/img_ticket.svg"
                    alt="ticket"
                  />
                  <Text
                    className="mt-[3px] text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    mahsulot narxlari
                  </Text>
                </div>
              </div>
              <div className="md:h-[2439px] sm:h-[648px] h-[663px] relative w-[83%] md:w-full">
                <div className="md:h-[648px] h-[663px] m-auto w-full">
                  <div className="absolute bg-blue_gray-900_87_01 flex flex-col h-full inset-[0] justify-center m-auto p-[17px] rounded-[5px] w-full">
                    <SelectBox
                      className="font-medium leading-[normal] md:ml-[0] ml-[899px] mr-[19px] text-base text-left w-[16%] sm:w-full"
                      placeholderClassName="text-gray-400"
                      indicator={
                        <Img
                          className="h-[3px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[7px]"
                          src="images/img_arrowdown_gray_400.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="group401"
                      options={tasdiqlanganOptionsList}
                      isSearchable={false}
                      placeholder="Tasdiqlangan"
                      shape="round"
                      color="blue_gray_800"
                      size="xs"
                      variant="fill"
                    />
                    <div className="flex flex-col gap-[21px] justify-start md:ml-[0] ml-[757px] mt-7 w-[5%] md:w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Status
                      </Text>
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[5px] w-[91%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="bg-blue-400 h-3.5 rounded-[50%] w-3.5"></div>
                          <Text
                            className="mt-[3px] text-[8px] text-blue-400"
                            size="txtRobotoMedium8Blue400"
                          >
                            Tasdiqlangan
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-3.5 w-full">
                          <div className="bg-blue-400 h-3.5 rounded-[50%] w-3.5"></div>
                          <Text
                            className="mt-[3px] text-[8px] text-blue-400"
                            size="txtRobotoMedium8Blue400"
                          >
                            Tasdiqlangan
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[13px] w-full">
                          <div className="bg-blue-400 h-3.5 rounded-[50%] w-3.5"></div>
                          <Text
                            className="mt-[3px] text-[8px] text-blue-400"
                            size="txtRobotoMedium8Blue400"
                          >
                            Tasdiqlangan
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[17px] w-full">
                          <div className="bg-blue-400 h-3.5 rounded-[50%] w-3.5"></div>
                          <Text
                            className="mt-[3px] text-[8px] text-blue-400"
                            size="txtRobotoMedium8Blue400"
                          >
                            Tasdiqlangan
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[17px] w-full">
                          <div className="bg-blue-400 h-3.5 rounded-[50%] w-3.5"></div>
                          <Text
                            className="mt-[3px] text-[8px] text-blue-400"
                            size="txtRobotoMedium8Blue400"
                          >
                            Tasdiqlangan
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[17px] w-full">
                          <div className="bg-blue-400 h-3.5 rounded-[50%] w-3.5"></div>
                          <Text
                            className="mt-[3px] text-[8px] text-blue-400"
                            size="txtRobotoMedium8Blue400"
                          >
                            Tasdiqlangan
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                          <div className="bg-blue-400 h-3.5 rounded-[50%] w-3.5"></div>
                          <Text
                            className="mt-[3px] text-[8px] text-blue-400"
                            size="txtRobotoMedium8Blue400"
                          >
                            Tasdiqlangan
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[11px] w-full">
                          <div className="bg-blue-400 h-3.5 rounded-[50%] w-3.5"></div>
                          <Text
                            className="mt-[3px] text-[8px] text-blue-400"
                            size="txtRobotoMedium8Blue400"
                          >
                            Tasdiqlangan
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                          <div className="bg-blue-400 h-3.5 rounded-[50%] w-3.5"></div>
                          <Text
                            className="mt-[3px] text-[8px] text-blue-400"
                            size="txtRobotoMedium8Blue400"
                          >
                            Tasdiqlangan
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                          <div className="bg-blue-400 h-3.5 rounded-[50%] w-3.5"></div>
                          <Text
                            className="mt-[3px] text-[8px] text-blue-400"
                            size="txtRobotoMedium8Blue400"
                          >
                            Tasdiqlangan
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                          <div className="bg-blue-400 h-3.5 rounded-[50%] w-3.5"></div>
                          <Text
                            className="mt-[3px] text-[8px] text-blue-400"
                            size="txtRobotoMedium8Blue400"
                          >
                            Tasdiqlangan
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[31px] items-end justify-start mb-[7px] md:ml-[0] ml-[353px] mr-[367px] mt-[35px] w-[34%] md:w-full"
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
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[16%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[10%] w-full" />
                  <div className="absolute md:h-[481px] h-[490px] inset-[0] justify-center m-auto w-full">
                    <div className="md:h-[481px] h-[490px] m-auto w-full">
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
                          src="images/img_file_gray_400.svg"
                          alt="file_Four"
                        />
                        <Img
                          className="h-[19px] mt-[25px] w-[19px]"
                          src="images/img_file_1.svg"
                          alt="file_Five"
                        />
                        <Img
                          className="h-[19px] mt-[23px] w-[19px]"
                          src="images/img_file_1.svg"
                          alt="file_Six"
                        />
                        <Img
                          className="h-[19px] mt-5 w-[19px]"
                          src="images/img_file_1.svg"
                          alt="file_Seven"
                        />
                        <Img
                          className="h-[19px] mt-[23px] w-[19px]"
                          src="images/img_file_1.svg"
                          alt="file_Eight"
                        />
                        <Img
                          className="h-[19px] mt-[23px] w-[19px]"
                          src="images/img_file_1.svg"
                          alt="file_Nine"
                        />
                        <Img
                          className="h-[19px] mt-[23px] w-[19px]"
                          src="images/img_file_1.svg"
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
                      className="absolute h-px inset-x-[0] mx-auto top-[41%]"
                      src="images/img_group90.svg"
                      alt="groupNinetyTwo"
                    />
                    <Img
                      className="absolute bottom-[24%] h-[42px] inset-x-[0] mx-auto"
                      src="images/img_group92.svg"
                      alt="group102"
                    />
                    <Img
                      className="absolute bottom-[40%] h-[42px] inset-x-[0] mx-auto"
                      src="images/img_group92.svg"
                      alt="group569"
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
                <Img
                  className="absolute bottom-[13%] h-px inset-x-[0] mx-auto"
                  src="images/img_group90.svg"
                  alt="groupNinetyNine"
                />
                <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[2%] my-auto w-[83%]">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                      <Img
                        className="h-[433px] md:mt-0 mt-[50px]"
                        src="images/img_group565.svg"
                        alt="group565"
                      />
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[35px] md:mt-0 mt-[3px]">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Showroom nomi
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          Andijon
                        </Text>
                        <Text
                          className="mt-6 text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          Andijon
                        </Text>
                        <Text
                          className="mt-[23px] text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          Andijon
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          Namangan
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          Namangan
                        </Text>
                        <Text
                          className="mt-[13px] text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          Namangan
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          Namangan
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          <>Ho\&#96;jaobod</>
                        </Text>
                        <Text
                          className="mt-[31px] text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          <>Ho\&#96;jaobod</>
                        </Text>
                        <Text
                          className="mt-6 text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          <>Ho\&#96;jaobod</>
                        </Text>
                        <Text
                          className="mt-6 text-[15px] text-blue-700"
                          size="txtRobotoMedium15Blue700"
                        >
                          <>Ho\&#96;jaobod</>
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[117px] md:mt-0 mt-[3px] w-[11%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-[15px] text-blue_gray-500"
                                size="txtRobotoMedium15Bluegray500"
                              >
                                Loyiha nomeri
                              </Text>
                              <div className="flex flex-row gap-3 items-center justify-start mt-[21px] w-[85%] md:w-full">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-1/5"
                                  src="images/img_.png"
                                  alt="OneHundredSixtySix"
                                />
                                <Text
                                  className="text-[15px] text-gray-400"
                                  size="txtRobotoMedium15Gray400"
                                >
                                  120003
                                </Text>
                              </div>
                              <div className="flex flex-row gap-3 items-center justify-start mt-[23px] w-[85%] md:w-full">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-1/5"
                                  src="images/img_.png"
                                  alt="OneHundredSixtySeven"
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
                                  alt="OneHundredSixtyEight"
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
                                  alt="OneHundredSixtyNine"
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
                                  alt="OneHundredSeventy"
                                />
                                <Text
                                  className="text-[15px] text-gray-400"
                                  size="txtRobotoMedium15Gray400"
                                >
                                  119999
                                </Text>
                              </div>
                              <div className="flex flex-row gap-3 items-center justify-start mt-[26px] w-[85%] md:w-full">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-1/5"
                                  src="images/img_.png"
                                  alt="OneHundredSeventyOne"
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
                                  alt="OneHundredSeventyTwo"
                                />
                                <Text
                                  className="text-[15px] text-gray-400"
                                  size="txtRobotoMedium15Gray400"
                                >
                                  119997
                                </Text>
                              </div>
                              <div className="flex flex-row gap-3 items-center justify-start mt-[21px] w-[85%] md:w-full">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-1/5"
                                  src="images/img_.png"
                                  alt="OneHundredSeventyThree"
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
                                  alt="OneHundredSeventyFour"
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
                                  alt="OneHundredSeventyFive"
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
                                  alt="OneHundredSeventySix"
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
                            className="mt-1.5 text-[10px] text-blue_gray-500"
                            size="txtRobotoMedium10"
                          >
                            Shahrixon
                          </Text>
                          <Text
                            className="mt-0.5 text-[10px] text-gray-400"
                            size="txtRobotoMedium10Gray400"
                          >
                            <>
                              Yodgorov ko\&#96;cha <br />№ 15 uy
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
                              Oliygoh ko\&#96;cha <br />№ 3 uy
                            </>
                          </Text>
                          <Text
                            className="text-[10px] text-blue_gray-500"
                            size="txtRobotoMedium10"
                          >
                            Shahrixon
                          </Text>
                          <Text
                            className="mt-0.5 text-[10px] text-gray-400"
                            size="txtRobotoMedium10Gray400"
                          >
                            <>
                              Yodgorov ko\&#96;cha <br />№ 15 uy
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
                      <List
                        className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[124px] grid grid-cols-2 md:ml-[0] ml-[33px] w-[34%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-start justify-start w-full">
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
                            Mansur Ergashev
                          </Text>
                          <Text
                            className="mt-[29px] text-gray-400 text-xs"
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
                            className="mt-[29px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Mehriddin Abdullayev
                          </Text>
                          <Text
                            className="mt-[26px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Fahriddin Mahmudov
                          </Text>
                          <Text
                            className="mt-[25px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Mehriddin Abdullayev
                          </Text>
                          <Text
                            className="mt-[26px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Fahriddin Mahmudov
                          </Text>
                          <Text
                            className="mt-[27px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Fahriddin Mahmudov
                          </Text>
                          <Text
                            className="mt-7 text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Zuhra Ashurova
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
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
                            className="mt-[70px] text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            Sen 13. 2022
                          </Text>
                        </div>
                      </List>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-800_7e flex flex-col justify-start left-[0] md:px-5 py-[33px] top-[21%] w-1/5">
          <div className="flex flex-row gap-[30px] items-center justify-end md:ml-[0] ml-[45px] w-3/4 md:w-full">
            <CheckBox
              className="font-medium leading-[normal] sm:pl-5 text-base text-left uppercase"
              inputClassName="h-[18px] mr-[5px] w-[18px]"
              name="buyurtmalar"
              id="buyurtmalar"
              label="BUYURTMALAR"
            ></CheckBox>
            <Img
              className="h-1"
              src="images/img_line49.svg"
              alt="lineFortyNine"
            />
          </div>
          <div className="h-[60px] md:h-[71px] mt-[11px] relative w-full">
            <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-start justify-center m-auto p-4 w-full">
              <Text
                className="md:ml-[0] ml-[70px] mt-[9px] text-sm text-white-A700"
                size="txtRobotoMedium14WhiteA700"
              >
                Tasdiqlangan
              </Text>
            </div>
            <Img
              className="absolute h-[60px] inset-y-[0] left-[0] my-auto object-cover w-[5%]"
              src="images/img_rectangle1564_27.png"
              alt="rectangle1564"
            />
          </div>
          <div className="flex flex-col gap-[23px] items-center justify-start mb-2 md:ml-[0] ml-[86px] mt-[26px]">
            <Text
              className="text-blue_gray-500 text-sm"
              size="txtRobotoMedium14"
            >
              <>Qayta ko\&#96;rilganlar</>
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

export default BuyurtmalarOnePage;
