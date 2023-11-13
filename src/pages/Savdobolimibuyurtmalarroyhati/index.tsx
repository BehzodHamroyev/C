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

const SavdobolimibuyurtmalarroyhatiPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div className="absolute md:h-[4480px] h-[899px] inset-[0] justify-center m-auto md:px-5 w-full">
          <Img
            className="h-[899px] m-auto object-cover w-full"
            src="images/img_global1_5.png"
            alt="globalOne"
          />
          <div className="absolute flex flex-col gap-[19px] h-max inset-[0] items-center justify-center m-auto w-[96%]">
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
                        src="images/img_il1588xn1.png"
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
            <div className="flex md:flex-col flex-row gap-[31px] items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col gap-8 items-start justify-start md:mt-0 mt-[292px] w-[16%] md:w-full">
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
              <div className="bg-blue_gray-900_87_01 flex md:flex-1 flex-col items-center justify-start pr-[3px] py-[3px] rounded-[5px] w-[83%] md:w-full">
                <div className="flex flex-col gap-3 items-center justify-start mb-[84px] mt-2 w-full">
                  <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[96%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between w-[39%] sm:w-full">
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
                    <div className="flex flex-col items-center justify-start w-[16%] sm:w-full">
                      <SelectBox
                        className="font-medium leading-[normal] text-base text-left w-full"
                        placeholderClassName="text-gray-400"
                        indicator={
                          <Img
                            className="h-[3px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[7px]"
                            src="images/img_arrowdown_gray_400.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="group736"
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
                  <div className="flex flex-col items-center justify-start w-full">
                    <Line className="bg-blue_gray-800_01 h-0.5 w-full" />
                    <div className="md:h-[3462px] h-[500px] sm:h-[512px] mt-3 relative w-full">
                      <div className="absolute md:h-[480px] h-[490px] inset-[0] justify-center m-auto w-full">
                        <Line className="bg-blue_gray-800_01 h-0.5 mt-[31px] mx-auto w-full" />
                        <div className="absolute md:h-[480px] h-[490px] inset-[0] justify-center m-auto w-full">
                          <div className="md:h-[480px] h-[490px] m-auto w-full">
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
                                src="images/img_file.svg"
                                alt="file_Four"
                              />
                              <Img
                                className="h-[19px] mt-3.5 w-[19px]"
                                src="images/img_file.svg"
                                alt="file_Five"
                              />
                              <Img
                                className="h-[19px] mt-[22px] w-[19px]"
                                src="images/img_file.svg"
                                alt="file_Six"
                              />
                              <Img
                                className="h-[19px] mt-[25px] w-[19px]"
                                src="images/img_file.svg"
                                alt="file_Seven"
                              />
                              <Img
                                className="h-[19px] mt-[29px] w-[19px]"
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
                            className="absolute bottom-[43%] h-px inset-x-[0] mx-auto"
                            src="images/img_group90.svg"
                            alt="group103_One"
                          />
                          <Img
                            className="absolute h-[38px] inset-x-[0] mx-auto top-[41%]"
                            src="images/img_group92.svg"
                            alt="groupNinetyTwo"
                          />
                          <Img
                            className="absolute bottom-[34%] h-px inset-x-[0] mx-auto"
                            src="images/img_group90.svg"
                            alt="group104"
                          />
                          <Img
                            className="absolute bottom-[24%] h-px inset-x-[0] mx-auto"
                            src="images/img_group90.svg"
                            alt="group102"
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
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[2%] my-auto w-[83%]">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                            <Img
                              className="h-[433px] md:mt-0 mt-[50px]"
                              src="images/img_group565.svg"
                              alt="group565"
                            />
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[19px]">
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
                            <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[134px] md:mt-0 mt-[3px] w-[11%] md:w-full">
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
                                        alt="OneHundredFiftyTwo"
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
                                        alt="OneHundredFiftyThree"
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
                                        alt="OneHundredFiftyFour"
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
                                        alt="OneHundredFiftyFive"
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
                                        alt="OneHundredFiftySix"
                                      />
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        119999
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center justify-start mt-[13px] w-[85%] md:w-full">
                                      <Img
                                        className="h-[18px] md:h-auto object-cover w-1/5"
                                        src="images/img_.png"
                                        alt="OneHundredFiftySeven"
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
                                        alt="OneHundredFiftyEight"
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
                                        alt="OneHundredFiftyNine"
                                      />
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        119999
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center justify-start mt-[31px] w-[85%] md:w-full">
                                      <Img
                                        className="h-[18px] md:h-auto object-cover w-1/5"
                                        src="images/img_.png"
                                        alt="OneHundredSixty"
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
                                        alt="OneHundredSixtyOne"
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
                                        alt="OneHundredSixtyTwo"
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
                                  className="mt-[7px] text-[10px] text-gray-400"
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
                                  className="mt-[11px] text-[10px] text-blue_gray-500"
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
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[33px]">
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
                                ----------------------------
                              </Text>
                              <Text
                                className="mt-[30px] text-gray-400 text-xs"
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
                                className="mt-4 text-gray-400 text-xs"
                                size="txtRobotoMedium12"
                              >
                                ----------------------------
                              </Text>
                              <Text
                                className="mt-[30px] text-gray-400 text-xs"
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
                                className="mt-8 text-gray-400 text-xs"
                                size="txtRobotoMedium12"
                              >
                                Fahriddin Mahmudov
                              </Text>
                              <Text
                                className="mt-7 text-gray-400 text-xs"
                                size="txtRobotoMedium12"
                              >
                                ----------------------------
                              </Text>
                              <Text
                                className="mt-[27px] text-gray-400 text-xs"
                                size="txtRobotoMedium12"
                              >
                                Zuhra Ashurova
                              </Text>
                            </div>
                            <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[35px] w-[5%] md:w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="flex flex-col items-end justify-start w-full">
                                  <Text
                                    className="mr-0.5 text-[15px] text-blue_gray-500"
                                    size="txtRobotoMedium15Bluegray500"
                                  >
                                    Status
                                  </Text>
                                  <div className="bg-light_green-400_01 h-3.5 mr-[15px] mt-[21px] rounded-[50%] w-3.5"></div>
                                  <div className="flex flex-col items-start justify-start mt-[3px] w-[90%] md:w-full">
                                    <Text
                                      className="text-[8px] text-light_green-700"
                                      size="txtRobotoMedium8"
                                    >
                                      Jarayonda
                                    </Text>
                                    <div className="bg-light_green-400 h-3.5 md:ml-[0] ml-[11px] mt-3.5 rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-[3px] text-[8px] text-light_green-700"
                                      size="txtRobotoMedium8"
                                    >
                                      Jarayonda
                                    </Text>
                                    <div className="bg-orange-300 h-3.5 md:ml-[0] ml-[11px] mt-[13px] rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-[3px] text-[8px] text-lime-700"
                                      size="txtRobotoMedium8Lime700"
                                    >
                                      Kutilmoqda
                                    </Text>
                                    <div className="bg-light_green-400_01 h-3.5 md:ml-[0] ml-[11px] mt-[17px] rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-[3px] text-[8px] text-light_green-700"
                                      size="txtRobotoMedium8"
                                    >
                                      Jarayonda
                                    </Text>
                                    <div className="bg-light_green-400_01 h-3.5 md:ml-[0] ml-[11px] mt-[17px] rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-[3px] text-[8px] text-light_green-700"
                                      size="txtRobotoMedium8"
                                    >
                                      Jarayonda
                                    </Text>
                                    <div className="bg-orange-300 h-3.5 md:ml-[0] ml-[11px] mt-1 rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-[3px] text-[8px] text-lime-700"
                                      size="txtRobotoMedium8Lime700"
                                    >
                                      Kutilmoqda
                                    </Text>
                                    <div className="bg-light_green-400_01 h-3.5 md:ml-[0] ml-[11px] mt-[17px] rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-[3px] text-[8px] text-light_green-700"
                                      size="txtRobotoMedium8"
                                    >
                                      Jarayonda
                                    </Text>
                                    <div className="bg-light_green-400_01 h-3.5 md:ml-[0] ml-[11px] mt-[17px] rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-[3px] text-[8px] text-light_green-700"
                                      size="txtRobotoMedium8"
                                    >
                                      Jarayonda
                                    </Text>
                                    <div className="bg-light_green-400 h-3.5 md:ml-[0] ml-[11px] mt-[21px] rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-[3px] text-[8px] text-light_green-700"
                                      size="txtRobotoMedium8"
                                    >
                                      Jarayonda
                                    </Text>
                                    <div className="bg-orange-300 h-3.5 md:ml-[0] ml-[11px] mt-[15px] rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-[3px] text-[8px] text-lime-700"
                                      size="txtRobotoMedium8Lime700"
                                    >
                                      Kutilmoqda
                                    </Text>
                                    <div className="bg-light_green-400_01 h-3.5 md:ml-[0] ml-[11px] mt-[15px] rounded-[50%] w-3.5"></div>
                                    <Text
                                      className="mt-[3px] text-[8px] text-light_green-700"
                                      size="txtRobotoMedium8"
                                    >
                                      Jarayonda
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-start justify-start ml-11 md:ml-[0]">
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
                                className="mt-4 text-blue_gray-500 text-xs"
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
                                className="mt-[34px] text-blue_gray-500 text-xs"
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-px mt-[3px]"
                      src="images/img_group90.svg"
                      alt="groupNinetyNine"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-800_7e flex flex-col gap-7 items-center justify-start left-[0] md:px-5 py-3 top-[26%] w-1/5">
          <div className="h-[60px] relative w-full">
            <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-end justify-center m-auto p-[18px] w-full">
              <div className="flex flex-row gap-[30px] items-center justify-end mr-[7px] mt-0.5 w-[85%] md:w-full">
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
            </div>
            <div className="absolute bg-red-300 h-[60px] inset-y-[0] left-[0] my-auto w-[6%]"></div>
          </div>
          <div className="flex flex-col gap-[23px] items-start justify-start mb-[39px]">
            <Text
              className="text-blue_gray-500 text-sm"
              size="txtRobotoMedium14"
            >
              Tasdiqlangan
            </Text>
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

export default SavdobolimibuyurtmalarroyhatiPage;
