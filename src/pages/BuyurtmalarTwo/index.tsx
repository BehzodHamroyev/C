import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  SelectBox,
  Text,
} from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const statusOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BuyurtmalarTwoPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div className="absolute md:h-[4353px] sm:h-[898px] h-[900px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto p-7 sm:px-5 w-full"
            style={{
              backgroundImage: "url('images/img_showroombuyurtmalar.png')",
            }}
          >
            <div className="flex md:flex-col flex-row gap-[31px] items-start justify-between mb-[34px] w-[99%] md:w-full">
              <div className="flex flex-col md:gap-10 gap-[337px] items-center justify-start md:mt-0 mt-[27px] w-[16%] md:w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[82px] items-center justify-start w-[87%] md:w-full"
                  style={{ backgroundImage: "url('images/img_group834.svg')" }}
                >
                  <Img
                    className="h-[82px]"
                    src="images/img_group834.svg"
                    alt="group103"
                  />
                </div>
                <div className="flex flex-col gap-8 items-start justify-start w-full">
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
              </div>
              <div className="flex flex-col gap-[31px] items-center justify-start w-[83%] md:w-full">
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
                <div className="md:h-[3783px] sm:h-[735px] h-[739px] relative w-full">
                  <div className="absolute bg-blue_gray-900_87_01 flex flex-col md:gap-10 gap-[625px] h-full inset-[0] items-center justify-center m-auto p-5 rounded-[5px] w-full">
                    <div className="flex flex-col items-center justify-start mt-2 w-[99%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                        <Img
                          className="h-[18px] w-[17px]"
                          src="images/img_refresh.svg"
                          alt="refresh"
                        />
                        <Input
                          name="group494"
                          placeholder="Izlash"
                          className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                          wrapClassName="md:flex-1 md:ml-[0] ml-[17px] w-[35%] md:w-full"
                          shape="round"
                          color="blue_gray_800"
                          size="sm"
                          variant="fill"
                        ></Input>
                        <SelectBox
                          className="md:flex-1 font-medium leading-[normal] md:ml-[0] ml-[490px] text-base text-left w-[16%] md:w-full"
                          placeholderClassName="text-gray-400"
                          indicator={
                            <Img
                              className="h-[3px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[7px]"
                              src="images/img_arrowdown_gray_400.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group495"
                          options={statusOptionsList}
                          isSearchable={false}
                          placeholder="Status"
                          shape="round"
                          color="blue_gray_800"
                          size="xs"
                          variant="fill"
                        />
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[31px] items-end justify-start mb-[3px] w-[34%] md:w-full"
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
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[18%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[12%] w-full" />
                  <div className="absolute md:h-[523px] h-[533px] inset-[0] justify-center m-auto w-full">
                    <div className="md:h-[523px] h-[533px] m-auto w-full">
                      <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[14%] w-full" />
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
                          className="h-[19px] mt-[23px] w-[19px]"
                          src="images/img_file.svg"
                          alt="file_Five"
                        />
                        <Img
                          className="h-[19px] mt-[23px] w-[19px]"
                          src="images/img_file.svg"
                          alt="file_Six"
                        />
                        <Img
                          className="h-[19px] mt-[22px] w-[19px]"
                          src="images/img_file.svg"
                          alt="file_Seven"
                        />
                        <Img
                          className="h-[19px] mt-[23px] w-[19px]"
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
                        <Img
                          className="h-[19px] mt-[23px] w-[19px]"
                          src="images/img_file.svg"
                          alt="file_Eleven"
                        />
                      </div>
                    </div>
                    <Img
                      className="absolute h-px inset-x-[0] mx-auto top-[22%]"
                      src="images/img_group90.svg"
                      alt="groupNinety"
                    />
                    <Img
                      className="absolute h-px inset-x-[0] mx-auto top-[30%]"
                      src="images/img_group90.svg"
                      alt="groupNinetyOne"
                    />
                    <Img
                      className="absolute h-px inset-x-[0] mx-auto top-[38%]"
                      src="images/img_group90.svg"
                      alt="groupNinetyTwo"
                    />
                    <Img
                      className="absolute h-px inset-x-[0] mx-auto top-[46%]"
                      src="images/img_group90.svg"
                      alt="group103_One"
                    />
                    <Img
                      className="absolute bottom-[46%] h-px inset-x-[0] mx-auto"
                      src="images/img_group90.svg"
                      alt="group104"
                    />
                    <Img
                      className="absolute bottom-[30%] h-[42px] inset-x-[0] mx-auto"
                      src="images/img_group92.svg"
                      alt="group102"
                    />
                    <Img
                      className="absolute bottom-[22%] h-px inset-x-[0] mx-auto"
                      src="images/img_group90.svg"
                      alt="groupNinetySeven"
                    />
                    <Img
                      className="absolute bottom-[14%] h-px inset-x-[0] mx-auto"
                      src="images/img_group90.svg"
                      alt="groupNinetyEight"
                    />
                    <Img
                      className="absolute bottom-[6%] h-px inset-x-[0] mx-auto"
                      src="images/img_group90.svg"
                      alt="groupNinetyNine"
                    />
                  </div>
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-col justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start md:ml-[0] ml-[23px] w-[83%] md:w-full">
                        <div className="flex flex-col items-center justify-start mb-4 md:mt-0 mt-[50px] w-[1%] md:w-full">
                          <Img
                            className="h-[5px]"
                            src="images/img_line4.svg"
                            alt="lineFour"
                          />
                          <Img
                            className="h-[5px] mt-9"
                            src="images/img_line4.svg"
                            alt="lineFour_One"
                          />
                          <Img
                            className="h-[5px] mt-9"
                            src="images/img_line4.svg"
                            alt="lineFour_Two"
                          />
                          <Img
                            className="h-[5px] mt-[39px]"
                            src="images/img_line4.svg"
                            alt="lineFour_Three"
                          />
                          <Img
                            className="h-[5px] mt-[39px]"
                            src="images/img_line4.svg"
                            alt="lineFour_Four"
                          />
                          <Img
                            className="h-[5px] mt-[37px]"
                            src="images/img_line4.svg"
                            alt="lineFive"
                          />
                          <Img
                            className="h-[5px] mt-[37px]"
                            src="images/img_line4.svg"
                            alt="lineSix"
                          />
                          <Img
                            className="h-[5px] mt-9"
                            src="images/img_line4.svg"
                            alt="lineFour_Five"
                          />
                          <Img
                            className="h-[5px] mt-[37px]"
                            src="images/img_line4.svg"
                            alt="lineFour_Six"
                          />
                          <Img
                            className="h-[5px] mt-[37px]"
                            src="images/img_line4.svg"
                            alt="lineFour_Seven"
                          />
                          <Img
                            className="h-[5px] mt-[37px]"
                            src="images/img_line4.svg"
                            alt="lineFour_Eight"
                          />
                          <Img
                            className="h-[5px] mt-[37px]"
                            src="images/img_line4.svg"
                            alt="lineFour_Nine"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start mb-2 md:ml-[0] ml-[29px]">
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
                          <Text
                            className="mt-[23px] text-[15px] text-blue-700"
                            size="txtRobotoMedium15Blue700"
                          >
                            <>Ho\&#96;jaobod</>
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mb-2.5 md:ml-[0] ml-[123px] md:mt-0 mt-[3px] w-[11%] md:w-full">
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
                                    alt="OneHundredEightySeven"
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
                                    alt="OneHundredEightyEight"
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
                                    alt="OneHundredEightyNine"
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
                                    alt="OneHundredNinety"
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
                                    alt="OneHundredNinetyOne"
                                  />
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    119905
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start mt-6 w-[85%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="OneHundredNinetyTwo"
                                  />
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    119999
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start mt-6 w-[85%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="OneHundredNinetyThree"
                                  />
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    119998
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start mt-[23px] w-[85%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="OneHundredNinetyFour"
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
                                    alt="OneHundredNinetyFive"
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
                                    alt="OneHundredNinetySix"
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
                                    alt="OneHundredNinetySeven"
                                  />
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    119995
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start mt-6 w-[85%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="OneHundredNinetyEight"
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
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[85px] w-[14%] md:w-full">
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
                                Yangi bozor Oripov ko\&#96;cha <br />№ 88 uy{" "}
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
                                Yangi bozor Oripov ko\&#96;cha <br />№ 88 uy{" "}
                              </>
                            </Text>
                            <Text
                              className="mt-[3px] text-[10px] text-blue_gray-500"
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
                            <Text
                              className="mt-1 text-[10px] text-blue_gray-500"
                              size="txtRobotoMedium10"
                            >
                              Shahrixon
                            </Text>
                            <Text
                              className="mt-0.5 text-[10px] text-gray-400"
                              size="txtRobotoMedium10Gray400"
                            >
                              <>
                                Oliygoh ko\&#96;cha <br />№ 3 uy
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[26px] items-start justify-start mb-[11px] md:ml-[0] ml-[33px]">
                          <Text
                            className="ml-0.5 md:ml-[0] text-[15px] text-blue_gray-500"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            <>O\&#96;lchovchi</>
                          </Text>
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Abbos Zokirov
                          </Text>
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Alisher Odilov
                          </Text>
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Alisher Odilov
                          </Text>
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Begzod Eraliyev
                          </Text>
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Mansur Ergashev
                          </Text>
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Mansur Ergashev
                          </Text>
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Mansur Ergashev
                          </Text>
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Mehriddin Abdullayev
                          </Text>
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Fahriddin Mahmudov
                          </Text>
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Fahriddin Mahmudov
                          </Text>
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Zuhra Ashurova
                          </Text>
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Fotima Mahkamova
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start mb-[17px] ml-8 md:ml-[0] w-[5%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-[21px] items-center justify-start w-full">
                              <Text
                                className="text-[15px] text-blue_gray-500"
                                size="txtRobotoMedium15Bluegray500"
                              >
                                Status
                              </Text>
                              <div className="flex flex-col items-center justify-start w-[32%] md:w-full">
                                <div className="bg-blue-400 h-3.5 rounded-[50%] w-3.5"></div>
                                <div className="bg-red-300 h-3.5 mt-[27px] rounded-[50%] w-3.5"></div>
                                <div className="bg-red-300 h-3.5 mt-[26px] rounded-[50%] w-3.5"></div>
                                <div className="bg-blue-400 h-3.5 mt-[30px] rounded-[50%] w-3.5"></div>
                                <div className="bg-blue-400 h-3.5 mt-[30px] rounded-[50%] w-3.5"></div>
                                <div className="bg-blue-400 h-3.5 mt-7 rounded-[50%] w-3.5"></div>
                                <div className="bg-blue-400 h-3.5 mt-7 rounded-[50%] w-3.5"></div>
                                <div className="bg-blue-400 h-3.5 mt-[27px] rounded-[50%] w-3.5"></div>
                                <div className="bg-red-300 h-3.5 mt-7 rounded-[50%] w-3.5"></div>
                                <div className="bg-red-300 h-3.5 mt-7 rounded-[50%] w-3.5"></div>
                                <div className="bg-blue-400 h-3.5 mt-7 rounded-[50%] w-3.5"></div>
                                <div className="bg-blue-400 h-3.5 mt-7 rounded-[50%] w-3.5"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start mb-[11px] md:ml-[0] ml-[47px]">
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
                            className="mt-[27px] text-blue_gray-500 text-xs"
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
                            className="mt-[26px] text-blue_gray-500 text-xs"
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
                            Sen 14. 2022
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-800_03 h-0.5 mt-[3px] w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img
            className="absolute h-[60px] left-[0] object-cover top-[40%] w-1/5"
            src="images/img_rectangle1565_1.png"
            alt="rectangle1565"
          />
        </div>
        <Img
          className="absolute h-[60px] left-[0] object-cover top-[40%] w-[1%]"
          src="images/img_rectangle1564_29.png"
          alt="rectangle1564"
        />
        <div className="absolute bg-blue_gray-800_7e flex flex-col gap-[33px] items-center justify-center left-[0] p-[26px] md:px-5 top-[21%] w-1/5">
          <div className="flex flex-row gap-[30px] items-center justify-end mt-[7px] w-[92%] md:w-full">
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
          <div className="flex flex-col items-start justify-start mb-3">
            <Text
              className="text-blue_gray-500 text-sm"
              size="txtRobotoMedium14"
            >
              Tasdiqlangan
            </Text>
            <Text
              className="mt-[33px] text-blue_gray-500 text-sm"
              size="txtRobotoMedium14"
            >
              <>Qayta ko\&#96;rilganlar</>
            </Text>
            <Text
              className="mt-[41px] text-sm text-white-A700"
              size="txtRobotoMedium14WhiteA700"
            >
              Buyurtmalar tarixi
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyurtmalarTwoPage;
