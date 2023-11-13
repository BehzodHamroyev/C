import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";

const daromadOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShowroomDashboardPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[1118px] mx-auto pb-8 relative w-full">
        <div className="absolute md:h-[2199px] h-[900px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <div className="md:h-[2199px] h-[900px] m-auto w-full">
            <Img
              className="h-[900px] m-auto object-cover w-full"
              src="images/img_global1_900x1439.png"
              alt="globalOne"
            />
            <div className="absolute flex md:flex-col flex-row md:gap-11 inset-x-[0] items-start justify-between mx-auto top-[3%] w-[96%]">
              <Img
                className="h-[82px] md:mt-0 mt-[27px]"
                src="images/img_group834.svg"
                alt="groupSeventySix"
              />
              <div className="flex flex-col gap-[25px] items-center justify-start">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[95%] md:w-full">
                  <div className="sm:h-[227px] h-[33px] md:mt-0 mt-1 relative w-[54%] md:w-full">
                    <div className="absolute flex sm:flex-col flex-row gap-[22px] h-full inset-y-[0] items-center justify-between my-auto right-[0] w-[86%]">
                      <div className="flex relative w-[53%] sm:w-full">
                        <div className="flex my-auto w-[67%]">
                          <div className="border border-blue_gray-800_05 border-solid h-[33px] my-auto rotate-[180deg] w-1/2"></div>
                          <div className="border border-blue_gray-800_05 border-solid h-[33px] ml-[-0.86px] my-auto rotate-[180deg] w-[51%] z-[1]"></div>
                        </div>
                        <div className="border border-blue_gray-800_05 border-solid h-[33px] ml-[-0.99px] my-auto rotate-[180deg] rounded-bl rounded-tl w-[34%] z-[1]"></div>
                      </div>
                      <div className="border border-blue_gray-800_05 border-solid h-[33px] rotate-[180deg] rounded w-[43%]"></div>
                    </div>
                    <div className="absolute flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-center justify-center m-auto w-[98%]">
                      <Button
                        className="cursor-pointer font-medium leading-[normal] min-w-[86px] rounded-bl rounded-tl text-base text-center"
                        color="blue_400"
                        size="xs"
                        variant="fill"
                      >
                        Kun
                      </Button>
                      <Text
                        className="sm:ml-[0] ml-[22px] text-base text-blue_gray-500"
                        size="txtRobotoMedium16"
                      >
                        Hafta
                      </Text>
                      <Text
                        className="h-[19px] sm:ml-[0] ml-[54px] text-base text-blue_gray-500"
                        size="txtRobotoMedium16"
                      >
                        Oy
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[68px] text-base text-blue_gray-500"
                        size="txtRobotoMedium16"
                      >
                        Yil
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[69px] text-base text-blue_gray-500"
                        size="txtRobotoMedium16"
                      >
                        20 Sen -28 Apr 2022
                      </Text>
                      <Img
                        className="h-[18px] sm:ml-[0] ml-[11px] w-[18px]"
                        src="images/img_vscodeiconsfiletypeexcel.svg"
                        alt="cilcalendar"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-end justify-between w-[17%] md:w-full">
                    <div className="flex flex-col h-[38px] items-center justify-start w-[38px]">
                      <Img
                        className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                        src="images/img_il1588xn1_3.png"
                        alt="il1588xnOne"
                      />
                    </div>
                    <Text
                      className="mb-[3px] mt-[7px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-500"
                      size="txtRobotoMedium23"
                    >
                      Operator
                    </Text>
                    <Img
                      className="h-[7px] my-[15px]"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-[25px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <List
                      className="md:flex-1 sm:flex-col flex-row gap-[25px] grid sm:grid-cols-1 grid-cols-2 w-[49%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                        <div className="bg-blue_gray-900_87 flex flex-row gap-5 items-center justify-start p-[15px] rounded-[5px] w-full">
                          <Img
                            className="h-[31px] ml-0.5"
                            src="images/img_eye.svg"
                            alt="eye"
                          />
                          <div className="flex flex-col items-start justify-start mt-[9px] w-[52%]">
                            <Text
                              className="text-blue_gray-500 text-sm"
                              size="txtRobotoMedium14"
                            >
                              Tashrif buyurganlar
                            </Text>
                            <Text
                              className="mt-3 sm:text-2xl md:text-[26px] text-[28px] text-gray-400"
                              size="txtRobotoMedium28Gray400"
                            >
                              560
                            </Text>
                            <div className="flex flex-col items-center justify-start mt-3.5">
                              <Text
                                className="text-blue_gray-500 text-sm"
                                size="txtRobotoMedium14"
                              >
                                <span className="text-blue_gray-500 font-roboto text-left font-medium">
                                  82%{" "}
                                </span>
                                <span className="text-light_green-400 font-roboto text-left font-medium">
                                  18%{" "}
                                </span>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start sm:ml-[0] w-full">
                        <div className="bg-blue_gray-900_87 flex flex-row gap-[15px] items-center justify-start p-[15px] rounded-[5px] w-full">
                          <Img
                            className="h-[54px] ml-[3px]"
                            src="images/img_user_blue_gray_500_54x63.svg"
                            alt="user"
                          />
                          <div className="flex flex-col items-start justify-start mb-1.5 w-[56%]">
                            <Text
                              className="text-blue_gray-500 text-sm"
                              size="txtRobotoMedium14"
                            >
                              <>Ro\&#96;yhatga olinganlar</>
                            </Text>
                            <Text
                              className="mt-[22px] sm:text-2xl md:text-[26px] text-[28px] text-orange-300"
                              size="txtRobotoMedium28Orange300"
                            >
                              503
                            </Text>
                            <div className="flex flex-col items-center justify-start mt-2">
                              <Text
                                className="text-blue_gray-500 text-sm"
                                size="txtRobotoMedium14"
                              >
                                <span className="text-blue_gray-500 font-roboto text-left font-medium">
                                  79%{" "}
                                </span>
                                <span className="text-orange-300 font-roboto text-left font-medium">
                                  29%{" "}
                                </span>
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </List>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[24%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <div className="bg-blue_gray-900_87 flex flex-col items-start justify-start p-3.5 rounded-[5px] w-full">
                          <div className="flex flex-col justify-start mb-[7px] md:ml-[0] ml-[11px] w-[76%] md:w-full">
                            <Text
                              className="md:ml-[0] ml-[55px] mr-[9px] text-blue_gray-500 text-sm"
                              size="txtRobotoMedium14"
                            >
                              Shartnomalar soni
                            </Text>
                            <div className="flex flex-row gap-[26px] items-end justify-start mt-2 w-[58%] md:w-full">
                              <Img
                                className="h-[52px]"
                                src="images/img_bag.svg"
                                alt="bag"
                              />
                              <Text
                                className="mb-1 mt-[15px] sm:text-2xl md:text-[26px] text-[28px] text-light_green-400"
                                size="txtRobotoMedium28"
                              >
                                60
                              </Text>
                            </div>
                            <div className="flex flex-row gap-[52px] items-center justify-end md:ml-[0] ml-[77px] mt-[3px] w-[57%] md:w-full">
                              <Text
                                className="text-blue_gray-500 text-sm"
                                size="txtRobotoMedium14"
                              >
                                356{" "}
                              </Text>
                              <Text
                                className="text-light_green-400 text-sm"
                                size="txtRobotoMedium14Lightgreen400"
                              >
                                30%
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-start justify-start p-[15px] rounded-[5px] w-[24%] md:w-full">
                      <div className="flex flex-col items-start justify-start mb-1.5 md:ml-[0] ml-[5px] w-[78%] md:w-full">
                        <Text
                          className="md:ml-[0] ml-[77px] text-blue_gray-500 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Yakunlangan
                        </Text>
                        <div className="flex flex-row gap-[23px] items-center justify-start mt-2 w-3/5 md:w-full">
                          <Img
                            className="h-[53px] w-[54px]"
                            src="images/img_computer_blue_gray_500.svg"
                            alt="computer"
                          />
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-red-300"
                            size="txtRobotoMedium28Red300"
                          >
                            50
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[53px] items-center justify-end md:ml-[0] ml-[81px] w-[56%] md:w-full">
                          <Text
                            className="text-blue_gray-500 text-sm"
                            size="txtRobotoMedium14"
                          >
                            453
                          </Text>
                          <Text
                            className="text-red-300 text-sm"
                            size="txtRobotoMedium14Red300"
                          >
                            13%
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row gap-[11px] items-center justify-between w-full">
                    <div className="bg-gradient  flex md:flex-1 flex-col gap-[29px] items-center justify-end p-1.5 rounded-[5px] w-[33%] md:w-full">
                      <div className="flex flex-col items-start justify-start mt-5 w-[86%] md:w-full">
                        <Text
                          className="text-[17px] text-blue_gray-400"
                          size="txtRobotoMedium17"
                        >
                          Buyurtmalar uumiy summasi
                        </Text>
                        <div className="flex flex-col items-center justify-start mt-[22px] w-full">
                          <div className="flex flex-col gap-[25px] items-start justify-start w-full">
                            <div className="flex flex-row gap-[11px] items-center justify-start w-[72%] md:w-full">
                              <div className="bg-blue-400 flex flex-col items-center justify-start my-[7px] p-1 rounded-[13px] w-[26px]">
                                <Img
                                  className="h-4"
                                  src="images/img_question_white_a700.svg"
                                  alt="question"
                                />
                              </div>
                              <Text
                                className="sm:text-[31px] md:text-[33px] text-[35px] text-blue_gray-100"
                                size="txtRobotoMedium35Bluegray100"
                              >
                                198 654.56
                              </Text>
                            </div>
                            <Line className="bg-indigo-500 h-0.5 w-full" />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-3.5 w-[85%] md:w-full">
                          <div className="flex flex-col justify-start w-full">
                            <Text
                              className="md:ml-[0] ml-[39px] text-[17px] text-blue_gray-400"
                              size="txtRobotoMedium17"
                            >
                              <>Oldindan to\&#96;lov</>
                            </Text>
                            <div className="flex flex-row items-center justify-between mt-0.5 w-full">
                              <Img
                                className="h-[22px] w-[23px]"
                                src="images/img_group512.svg"
                                alt="group512"
                              />
                              <Text
                                className="sm:text-[27px] md:text-[29px] text-[31px] text-light_green-500"
                                size="txtRobotoMedium31Lightgreen500"
                              >
                                309 070 000
                              </Text>
                              <Text
                                className="text-[17px] text-blue_gray-400"
                                size="txtRobotoMedium17"
                              >
                                so’m
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start mt-[42px] w-[79%] md:w-full">
                          <div className="flex flex-col justify-start w-full">
                            <Text
                              className="md:ml-[0] ml-[39px] text-[17px] text-blue_gray-400"
                              size="txtRobotoMedium17"
                            >
                              <>Qoldiq to\&#96;lov</>
                            </Text>
                            <div className="flex flex-row items-center justify-between mt-0.5 w-full">
                              <Img
                                className="h-[22px] w-[23px]"
                                src="images/img_group512_blue_gray_500.svg"
                                alt="group512_One"
                              />
                              <Text
                                className="sm:text-[27px] md:text-[29px] text-[31px] text-blue-400"
                                size="txtRobotoMedium31Blue400"
                              >
                                72 080 000
                              </Text>
                              <Text
                                className="text-[17px] text-blue_gray-400"
                                size="txtRobotoMedium17"
                              >
                                so’m
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-orange-300 flex flex-col items-start justify-start p-[13px] rounded-[5px] w-[93%] md:w-full">
                        <div className="flex flex-col justify-start mb-[9px] w-[83%] md:w-full">
                          <Text
                            className="md:ml-[0] ml-[39px] text-[17px] text-blue_gray-800_03"
                            size="txtRobotoMedium17Bluegray80003"
                          >
                            Kassaga
                          </Text>
                          <div className="flex flex-row items-end justify-between mt-0.5 w-full">
                            <Img
                              className="h-[22px] my-1.5 w-[23px]"
                              src="images/img_group512_red_300.svg"
                              alt="group512_Two"
                            />
                            <Text
                              className="sm:text-[27px] md:text-[29px] text-[31px] text-blue_gray-800_03"
                              size="txtRobotoMedium31Bluegray80003"
                            >
                              82 080 000
                            </Text>
                            <Text
                              className="mb-[3px] mt-[13px] text-[17px] text-blue_gray-800_03"
                              size="txtRobotoMedium17Bluegray80003"
                            >
                              so’m
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-center justify-start p-3 rounded-[5px] w-[67%] md:w-full">
                      <div className="flex flex-col items-start justify-start mb-[66px] w-[97%] md:w-full">
                        <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                          <Text
                            className="mt-[22px] sm:text-[17px] md:text-[19px] text-[21px] text-blue_gray-500"
                            size="txtRobotoMedium21"
                          >
                            Daromad
                          </Text>
                          <div className="h-10 md:h-[46px] mb-[7px] relative w-[28%]">
                            <div className="bg-blue_gray-800_8d border border-blue_gray-600_8d border-solid h-[39px] m-auto rounded-[3px] w-full"></div>
                            <SelectBox
                              className="absolute font-medium inset-[0] justify-center leading-[normal] m-auto text-base text-gray-400 text-left w-[87%] sm:w-full"
                              placeholderClassName="text-gray-400"
                              indicator={
                                <Img
                                  className="h-[3px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[7px] right-[0] absolute"
                                  src="images/img_arrowdown_gray_400.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="group734"
                              options={daromadOptionsList}
                              isSearchable={false}
                              placeholder="Daromad"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-start mt-4 w-[31%] md:w-full">
                          <Text
                            className="md:text-3xl sm:text-[28px] text-[32px] text-white-A700"
                            size="txtRobotoMedium32"
                          >
                            125 000 000
                          </Text>
                          <Text
                            className="ml-0.5 text-[17px] text-blue_gray-500"
                            size="txtRobotoMedium17Bluegray500"
                          >
                            so’m
                          </Text>
                        </div>
                        <div className="h-[187px] md:h-[216px] mt-[35px] relative w-[99%] md:w-full">
                          <div className="absolute md:h-[181px] h-[184px] inset-[0] justify-center m-auto w-full">
                            <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="md:ml-[0] ml-[3px] text-base text-blue_gray-500"
                                  size="txtRobotoMedium16"
                                >
                                  400
                                </Text>
                                <Line className="bg-blue_gray-800_03 h-0.5 w-full" />
                                <Text
                                  className="md:ml-[0] ml-[3px] mt-[21px] text-base text-blue_gray-500"
                                  size="txtRobotoMedium16"
                                >
                                  300
                                </Text>
                                <Line className="bg-blue_gray-800_03 h-0.5 w-full" />
                              </div>
                              <div className="h-[60px] md:h-[79px] mt-[19px] relative w-full">
                                <div className="absolute flex flex-col gap-[22px] h-full inset-y-[0] items-center justify-start left-[0] my-auto">
                                  <Text
                                    className="text-base text-blue_gray-500"
                                    size="txtRobotoMedium16"
                                  >
                                    200
                                  </Text>
                                  <Text
                                    className="text-base text-blue_gray-500"
                                    size="txtRobotoMedium16"
                                  >
                                    100
                                  </Text>
                                </div>
                                <Line className="absolute bg-blue_gray-800_03 h-0.5 inset-x-[0] mx-auto top-[30%] w-full" />
                              </div>
                              <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                                <Line className="bg-blue_gray-800_03 h-0.5 w-full" />
                                <Text
                                  className="md:ml-[0] ml-[3px] text-base text-blue_gray-500"
                                  size="txtRobotoMedium16"
                                >
                                  0
                                </Text>
                              </div>
                            </div>
                            <div className="absolute flex flex-col font-segoeui h-full inset-[0] justify-center m-auto w-full">
                              <div className="md:h-[164px] h-[182px] md:ml-[0] ml-[41px] relative w-[94%] md:w-full">
                                <Text
                                  className="absolute right-[13%] text-[11px] text-purple-200 top-[0]"
                                  size="txtSegoeUISemibold11"
                                >
                                  <>
                                    Sentyabr oyida so\&#96;m: 1 000 000 <br />$
                                    : 125 sotilgan
                                  </>
                                </Text>
                                <div
                                  className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[165px] inset-x-[0] items-end justify-start mx-auto p-3 w-full"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group96.png')",
                                  }}
                                >
                                  <Img
                                    className="h-[11px] mb-[129px] mr-[188px]"
                                    src="images/img_union_red_300.svg"
                                    alt="union"
                                  />
                                </div>
                              </div>
                              <Line className="bg-blue_gray-800_03 h-0.5 w-full" />
                            </div>
                          </div>
                          <div className="absolute bg-indigo-A200 bottom-[0] h-2 left-[5%] rounded-[50%] w-2"></div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end md:ml-[0] ml-[59px] mt-[11px] w-[91%] md:w-full">
                          <Text
                            className="text-base text-blue_gray-500"
                            size="txtRobotoMedium16"
                          >
                            1
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[35px] text-base text-blue_gray-500"
                            size="txtRobotoMedium16"
                          >
                            2
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[33px] text-base text-blue_gray-500"
                            size="txtRobotoMedium16"
                          >
                            3
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[37px] text-base text-blue_gray-500"
                            size="txtRobotoMedium16"
                          >
                            4
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[33px] text-base text-blue_gray-500"
                            size="txtRobotoMedium16"
                          >
                            5
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[33px] text-base text-blue_gray-500"
                            size="txtRobotoMedium16"
                          >
                            6
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[37px] text-base text-blue_gray-500"
                            size="txtRobotoMedium16"
                          >
                            7
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[35px] text-base text-blue_gray-500"
                            size="txtRobotoMedium16"
                          >
                            8
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[33px] text-base text-blue_gray-500"
                            size="txtRobotoMedium16"
                          >
                            9
                          </Text>
                          <Text
                            className="h-[19px] md:ml-[0] ml-[33px] text-base text-blue_gray-500"
                            size="txtRobotoMedium16"
                          >
                            10
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[29px] text-base text-blue_gray-500"
                            size="txtRobotoMedium16"
                          >
                            11
                          </Text>
                          <Text
                            className="h-[19px] ml-7 md:ml-[0] text-base text-blue_gray-500"
                            size="txtRobotoMedium16"
                          >
                            12
                          </Text>
                          <Text
                            className="h-[19px] md:ml-[0] ml-[25px] text-base text-blue_gray-500"
                            size="txtRobotoMedium16"
                          >
                            13
                          </Text>
                          <Text
                            className="h-[19px] md:ml-[0] ml-[26px] text-base text-blue_gray-500"
                            size="txtRobotoMedium16"
                          >
                            14
                          </Text>
                          <Text
                            className="h-[19px] md:ml-[0] ml-[23px] text-base text-blue_gray-500"
                            size="txtRobotoMedium16"
                          >
                            15
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-blue_gray-800_7e flex flex-row gap-[30px] items-center justify-start left-[0] md:pr-10 sm:pr-5 pr-[100px] top-[34%] w-1/5">
            <div className="bg-red-300 h-[60px] w-[8%]"></div>
            <div className="flex flex-row gap-[29px] items-center justify-center w-[74%]">
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_volume_white_a700.svg"
                alt="volume"
              />
              <Text
                className="text-sm text-white-A700 uppercase"
                size="txtRobotoMedium14WhiteA700"
              >
                DASHBOARD
              </Text>
            </div>
          </div>
          <div className="absolute flex flex-col gap-[30px] h-max inset-y-[0] items-start justify-start left-[3%] my-auto w-[15%]">
            <div className="flex flex-row gap-5 items-start justify-start w-[77%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_fluentclipboar.svg"
                alt="fluentclipboar"
              />
              <Text
                className="mt-[3px] text-base text-blue_gray-500 uppercase"
                size="txtRobotoMedium16"
              >
                Buyurtmalar
              </Text>
            </div>
            <div className="flex flex-row gap-5 items-center justify-start w-[86%] md:w-full">
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
            <div className="flex flex-row items-start justify-between w-full">
              <Img className="h-5" src="images/img_vector.svg" alt="vector" />
              <Text
                className="mt-0.5 text-blue_gray-500 text-sm uppercase"
                size="txtRobotoMedium14"
              >
                <>To\&#96;lov qabul qilish</>
              </Text>
              <Img
                className="h-[5px] mt-[5px]"
                src="images/img_line49_blue_gray_500.svg"
                alt="lineFortyNine"
              />
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-900_87_01 bottom-[3%] flex flex-col items-center justify-start p-[25px] md:px-5 right-[2%] rounded-[5px] w-[53%]">
          <div className="flex flex-col md:gap-10 gap-[78px] items-start justify-start mb-[3px] w-[99%] md:w-full">
            <div className="flex flex-row sm:gap-10 gap-[347px] items-start justify-start w-[87%] md:w-full">
              <Text
                className="mt-2 sm:text-[17px] md:text-[19px] text-[21px] text-blue_gray-500"
                size="txtRobotoMedium21"
              >
                Homashyo sarfi{" "}
              </Text>
              <Text
                className="text-white-A700 text-xl"
                size="txtRobotoMedium20WhiteA700"
              >
                305 800 000
              </Text>
            </div>
            <List
              className="sm:flex-col flex-row gap-[31px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center md:ml-[0] ml-[3px] w-full"
              orientation="horizontal"
            >
              <div className="h-[210px] relative w-full">
                <div className="flex flex-col gap-2 h-full justify-start mt-[63px] mx-auto">
                  <Text
                    className="ml-5 md:ml-[0] text-blue_gray-500 text-lg"
                    size="txtRobotoMedium18"
                  >
                    Profillar{" "}
                  </Text>
                  <Text
                    className="sm:text-[29px] md:text-[31px] text-[33px] text-white-A700"
                    size="txtRobotoMedium33"
                  >
                    125 568
                  </Text>
                </div>
                <Img
                  className="absolute h-[210px] inset-[0] justify-center m-auto w-[210px]"
                  src="images/img_group517.svg"
                  alt="group517"
                />
              </div>
              <div className="h-[210px] relative w-full">
                <div className="flex flex-col h-full justify-start mt-[66px] mx-auto">
                  <Text
                    className="ml-5 md:ml-[0] sm:text-[17px] md:text-[19px] text-[21px] text-blue_gray-500"
                    size="txtRobotoMedium21"
                  >
                    Oyna
                  </Text>
                  <Text
                    className="mt-0.5 sm:text-[29px] md:text-[31px] text-[33px] text-white-A700"
                    size="txtRobotoMedium33"
                  >
                    125 568
                  </Text>
                </div>
                <Img
                  className="absolute h-[210px] inset-[0] justify-center m-auto w-[210px]"
                  src="images/img_group517_gray_900.svg"
                  alt="group517"
                />
              </div>
              <div className="h-[210px] relative w-full">
                <div className="flex flex-col gap-[5px] h-full items-center justify-start mt-16 mx-auto">
                  <Text
                    className="sm:text-[17px] md:text-[19px] text-[21px] text-blue_gray-500"
                    size="txtRobotoMedium21"
                  >
                    Aksesuar
                  </Text>
                  <Text
                    className="sm:text-[29px] md:text-[31px] text-[33px] text-white-A700"
                    size="txtRobotoMedium33"
                  >
                    125 568
                  </Text>
                </div>
                <Img
                  className="absolute h-[210px] inset-[0] justify-center m-auto w-[210px]"
                  src="images/img_group517_gray_900_210x210.svg"
                  alt="group517"
                />
              </div>
            </List>
          </div>
        </div>
        <div className="absolute bottom-[3%] flex flex-col items-center justify-start left-[19%] md:px-5 w-[26%]">
          <div className="bg-blue_gray-900_87 flex flex-col gap-[17px] items-start justify-center p-7 sm:px-5 rounded-[5px] w-full">
            <Text
              className="mt-1 sm:text-[17px] md:text-[19px] text-[21px] text-blue_gray-500"
              size="txtRobotoMedium21"
            >
              <>Ro\&#96;yhatga olinganlar</>
            </Text>
            <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Line className="bg-blue_gray-800_03 h-[3px] w-full" />
                <Text
                  className="mt-[9px] text-[15px] text-blue_gray-500"
                  size="txtRobotoMedium15Bluegray500"
                >
                  Umumiy soni
                </Text>
                <div className="flex flex-row items-start justify-between mt-0.5 w-full">
                  <div className="flex flex-col justify-start">
                    <div className="flex flex-row gap-[37px] items-start justify-start mr-3 w-[89%] md:w-full">
                      <Text
                        className="text-white-A700 text-xl"
                        size="txtRobotoMedium20WhiteA700"
                      >
                        356
                      </Text>
                      <Text
                        className="h-[19px] mt-1 text-[17px] text-red-300"
                        size="txtRobotoMedium17Red300"
                      >
                        49
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[71px] text-[17px] text-blue_gray-500"
                      size="txtRobotoMedium17Bluegray500"
                    >
                      51%
                    </Text>
                  </div>
                  <Img
                    className="h-[31px] mt-[3px]"
                    src="images/img_line46.svg"
                    alt="lineFortySix"
                  />
                </div>
              </div>
            </div>
            <div className="h-[171px] md:h-[97px] mb-1 relative w-[99%]">
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                  <Line className="bg-blue_gray-800_03 h-[3px] w-full" />
                  <div className="flex flex-row items-start justify-between w-full">
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Qiziquvchilar
                      </Text>
                      <div className="flex flex-row gap-[37px] items-start justify-start mt-0.5 w-[89%] md:w-full">
                        <Text
                          className="text-white-A700 text-xl"
                          size="txtRobotoMedium20WhiteA700"
                        >
                          356
                        </Text>
                        <Text
                          className="h-[19px] mt-1 text-[17px] text-red-300"
                          size="txtRobotoMedium17Red300"
                        >
                          83
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[71px] text-[17px] text-blue_gray-500"
                        size="txtRobotoMedium17Bluegray500"
                      >
                        37%
                      </Text>
                    </div>
                    <Img
                      className="h-[79px] mt-0.5"
                      src="images/img_line46_blue_400.svg"
                      alt="lineFortySix_One"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                <div className="flex flex-col items-start justify-start w-full">
                  <Line className="bg-blue_gray-800_03 h-[3px] w-full" />
                  <Text
                    className="mt-[9px] text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    Shartnoma tuzganlar
                  </Text>
                  <div className="flex flex-row items-start justify-start w-full">
                    <Text
                      className="text-white-A700 text-xl"
                      size="txtRobotoMedium20WhiteA700"
                    >
                      356
                    </Text>
                    <div className="md:h-6 h-[39px] ml-[37px] mt-[5px] relative w-[11%]">
                      <Text
                        className="absolute h-[19px] left-[0] text-[17px] text-light_green-400_03 top-[0]"
                        size="txtRobotoMedium17Lightgreen40003"
                      >
                        37
                      </Text>
                      <Text
                        className="absolute bottom-[0] inset-x-[0] mx-auto text-[17px] text-blue_gray-500 w-max"
                        size="txtRobotoMedium17Bluegray500"
                      >
                        83%
                      </Text>
                    </div>
                    <Img
                      className="h-[33px] ml-[58px]"
                      src="images/img_line48.svg"
                      alt="lineFortyEight"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowroomDashboardPage;
