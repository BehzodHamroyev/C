import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const eshikOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const aldoksOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const kosaOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dubGoldenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SavdobolimibuyurtmauchunzayavkaPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat flex flex-col font-roboto h-[900px] items-center justify-end mx-auto p-[18px] w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="flex flex-col gap-[13px] items-center justify-start max-w-[1365px] mt-[3px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[30px] justify-start w-[98%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
              <Img
                className="common-pointer h-[33px] md:mt-0 mt-[7px] w-[33px]"
                src="images/img_arrowleft_blue_400.svg"
                alt="arrowleft"
                onClick={() => navigate(-1)}
              />
              <div className="flex md:flex-1 flex-col items-center justify-start ml-5 md:ml-[0] w-[16%] md:w-full">
                <div className="bg-blue_gray-900 flex flex-col items-center justify-start rounded-[5px] shadow-bs4 w-full">
                  <OmborTaminotchigaZayavkaOneTab
                    className="flex flex-col items-center justify-start rounded-[5px] w-[205px]"
                    username={<>Materiallar ro\&#96;yhati</>}
                  />
                </div>
              </div>
              <div className="flex md:flex-1 flex-row items-start justify-start md:ml-[0] ml-[890px] md:mt-0 mt-[7px] w-[14%] md:w-full">
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
            <div className="flex flex-row items-start justify-start ml-2 md:ml-[0] w-[24%] md:w-full">
              <Text
                className="text-base text-white-A700"
                size="txtRobotoMedium16WhiteA700"
              >
                Buyurtmalar{" "}
              </Text>
              <Img
                className="h-[11px] ml-[3px] mt-[5px]"
                src="images/img_line108.svg"
                alt="line108"
              />
              <Text
                className="ml-0.5 text-base text-white-A700"
                size="txtRobotoMedium16WhiteA700"
              >
                № 1025
              </Text>
              <Img
                className="h-[11px] ml-0.5 mt-[5px]"
                src="images/img_line108.svg"
                alt="line109"
              />
              <Text
                className="ml-1 text-base text-white-A700"
                size="txtRobotoMedium16WhiteA700"
              >
                Materiallarni kiritish
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-start p-[29px] sm:px-5 rounded-[5px] shadow-bs6 w-full">
                  <div className="flex flex-col items-center justify-start mb-[66px] w-[98%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
                        <div className="flex flex-col items-center justify-start md:mt-0 mt-[46px] w-[37%] md:w-full">
                          <div className="flex flex-col gap-[5px] justify-start w-full">
                            <div className="flex flex-row gap-[168px] items-center justify-start ml-4 md:ml-[0] w-[57%] md:w-full">
                              <Text
                                className="text-blue_gray-500_99 text-xs"
                                size="txtRobotoMedium12Bluegray50099"
                              >
                                Predmet turi
                              </Text>
                              <Text
                                className="text-blue_gray-500_99 text-xs"
                                size="txtRobotoMedium12Bluegray50099"
                              >
                                Soni
                              </Text>
                            </div>
                            <div className="bg-gray-900_87 flex flex-row items-center justify-start px-3.5 rounded-[3px] w-full">
                              <SelectBox
                                className="sm:flex-1 font-medium leading-[normal] text-base text-left text-white-A700 w-1/2 sm:w-full"
                                placeholderClassName="text-white-A700"
                                indicator={
                                  <Img
                                    className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-[13px]"
                                    src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="group869"
                                options={eshikOptionsList}
                                isSearchable={false}
                                placeholder="Eshik"
                              />
                              <Line className="bg-blue_gray-800_02 h-[52px] ml-2 w-px" />
                              <Text
                                className="ml-[19px] text-base text-white-A700"
                                size="txtRobotoMedium16WhiteA700"
                              >
                                5
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center md:ml-[0] ml-[62px] md:mt-0 mt-[45px] w-[32%] md:w-full">
                          <div className="md:h-6 h-[31px] relative w-[51%] sm:w-full">
                            <Text
                              className="absolute left-[30%] text-base text-center text-white-A700 top-[0]"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              Profillar
                            </Text>
                            <div className="absolute bottom-[0] h-6 inset-x-[0] mx-auto w-full">
                              <Line className="absolute bg-white-A700 bottom-[42%] h-px left-[0] w-[90%]" />
                              <Text
                                className="absolute bg-blue-400 flex h-full inset-y-[0] items-center justify-center my-auto right-[0] rounded-[50%] text-base text-center text-white-A700 w-6"
                                size="txtRobotoMedium16WhiteA700"
                              >
                                1
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-1/2 sm:w-full">
                            <div className="flex flex-row items-start justify-evenly w-full">
                              <div className="flex flex-col items-center justify-start mb-2 w-[91%]">
                                <Text
                                  className="text-base text-center text-gray-400"
                                  size="txtRobotoMedium16Gray400"
                                >
                                  Aksesuarlar
                                </Text>
                                <Line className="bg-blue_gray-500 h-px w-full" />
                              </div>
                              <div className="h-[19px] md:h-[29px] mt-2.5 relative w-[18px]">
                                <div className="absolute bg-blue_gray-500 h-[18px] inset-[0] justify-center m-auto rounded-[50%] w-[18px]"></div>
                                <Text
                                  className="absolute h-full inset-[0] justify-center m-auto text-base text-gray-400 w-max"
                                  size="txtRobotoMedium16Gray400"
                                >
                                  2
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="bg-blue_gray-900 flex flex-col items-start justify-start mb-[70px] md:ml-[0] ml-[142px] sm:px-5 px-[22px] rounded-[5px] shadow-bs w-[16%] md:w-full">
                          <OmborTaminotchigaZayavkaOneTab
                            className="flex flex-row gap-4 items-center justify-start w-[142px]"
                            username="Keningi"
                          />
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                        <div className="flex md:flex-1 flex-col gap-[19px] items-center justify-start md:mt-0 mt-[27px] w-[36%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
                            <div className="flex flex-col gap-[5px] justify-start w-full">
                              <div className="flex flex-row gap-[185px] items-center justify-start ml-4 md:ml-[0] w-3/5 md:w-full">
                                <Text
                                  className="text-blue_gray-500_99 text-xs"
                                  size="txtRobotoMedium12Bluegray50099"
                                >
                                  Profil turi
                                </Text>
                                <Text
                                  className="text-blue_gray-500_99 text-xs"
                                  size="txtRobotoMedium12Bluegray50099"
                                >
                                  Artikul
                                </Text>
                              </div>
                              <div className="bg-gray-900_87 flex sm:flex-col flex-row sm:gap-5 items-center justify-start px-3.5 rounded-[3px] w-full">
                                <SelectBox
                                  className="sm:flex-1 font-medium leading-[normal] text-base text-left text-white-A700 w-1/2 sm:w-full"
                                  placeholderClassName="text-white-A700"
                                  indicator={
                                    <Img
                                      className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-[13px]"
                                      src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                      alt="arrow_down"
                                    />
                                  }
                                  isMulti={false}
                                  name="group870"
                                  options={aldoksOptionsList}
                                  isSearchable={false}
                                  placeholder="Aldoks"
                                />
                                <Line className="bg-blue_gray-800_02 h-[52px] sm:h-px ml-2 sm:ml-[0] sm:w-full w-px" />
                                <SelectBox
                                  className="sm:flex-1 font-medium leading-[normal] sm:ml-[0] ml-[19px] text-base text-left text-white-A700 w-2/5 sm:w-full"
                                  placeholderClassName="text-white-A700"
                                  indicator={
                                    <Img
                                      className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-[13px]"
                                      src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                      alt="arrow_down"
                                    />
                                  }
                                  isMulti={false}
                                  name="group872"
                                  options={kosaOptionsList}
                                  isSearchable={false}
                                  placeholder="Kosa"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col justify-start w-[99%] md:w-full">
                              <Text
                                className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                                size="txtRobotoMedium12Bluegray50099"
                              >
                                Rangi
                              </Text>
                              <SelectBox
                                className="font-medium leading-[normal] mt-[3px] rounded-[5px] text-base text-left w-full"
                                placeholderClassName="text-white-A700"
                                indicator={
                                  <Img
                                    className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-[13px]"
                                    src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="group537"
                                options={dubGoldenOptionsList}
                                isSearchable={false}
                                placeholder="Dub Golden"
                                shape="round"
                                color="gray_900_87"
                                size="xl"
                                variant="fill"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start mt-[18px] w-[99%] md:w-full">
                              <div className="flex flex-col gap-[5px] justify-start w-full">
                                <div className="flex flex-row gap-[186px] items-center justify-start ml-4 md:ml-[0] w-[57%] md:w-full">
                                  <Text
                                    className="text-blue_gray-500_99 text-xs"
                                    size="txtRobotoMedium12Bluegray50099"
                                  >
                                    <>O\&#96;lchami</>
                                  </Text>
                                  <Text
                                    className="text-blue_gray-500_99 text-xs"
                                    size="txtRobotoMedium12Bluegray50099"
                                  >
                                    soni
                                  </Text>
                                </div>
                                <div className="bg-gray-900_87 flex flex-row items-center justify-start px-3.5 rounded-[3px] w-full">
                                  <SelectBox
                                    className="sm:flex-1 font-medium leading-[normal] text-base text-left text-white-A700 w-1/2 sm:w-full"
                                    placeholderClassName="text-white-A700"
                                    indicator={
                                      <Img
                                        className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-[13px]"
                                        src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                        alt="arrow_down"
                                      />
                                    }
                                    isMulti={false}
                                    name="group871"
                                    options={optionsList}
                                    isSearchable={false}
                                    placeholder="1 500"
                                  />
                                  <Line className="bg-blue_gray-800_02 h-[52px] ml-2 w-px" />
                                  <Text
                                    className="ml-[19px] text-base text-white-A700"
                                    size="txtRobotoMedium16WhiteA700"
                                  >
                                    4
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex sm:flex-col flex-row gap-2.5 items-center justify-between mt-[21px] w-full">
                              <Button
                                className="cursor-pointer font-medium leading-[normal] min-w-[224px] rounded-[3px] text-center text-xl"
                                shape="round"
                                color="blue_gray_500_87"
                                size="xs"
                                variant="fill"
                              >
                                90
                              </Button>
                              <Button
                                className="cursor-pointer font-medium leading-[normal] min-w-[225px] rounded-[3px] text-center text-xl"
                                shape="round"
                                color="blue_gray_800_87_04"
                                size="xs"
                                variant="fill"
                              >
                                45
                              </Button>
                            </div>
                            <div className="flex flex-col gap-[5px] justify-start mt-[17px]">
                              <Text
                                className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                                size="txtRobotoMedium12Bluegray50099"
                              >
                                Gradus
                              </Text>
                              <Text
                                className="bg-gray-900_87 h-[52px] justify-center pl-3.5 sm:pr-5 pr-[35px] py-4 rounded-[5px] text-base text-white-A700 w-[455px]"
                                size="txtRobotoMedium16WhiteA700"
                              >
                                90
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start mt-[25px] w-[99%] md:w-full">
                              <Button
                                className="cursor-pointer font-medium leading-[normal] min-w-[455px] sm:min-w-full rounded-[3px] sm:text-[17px] md:text-[19px] text-[21px] text-center"
                                shape="round"
                                color="blue_400"
                                size="md"
                                variant="fill"
                              >
                                <>Jadvalga qo\&#96;shish</>
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col items-center justify-start w-3/5 md:w-full">
                          <div className="bg-gray-900_87 flex flex-col items-center justify-start rounded-[5px] w-full">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[503px] items-center justify-end p-2 w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group539.svg')",
                              }}
                            >
                              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[95%] md:w-full">
                                <div className="flex flex-col items-start justify-start mb-[74px] md:mt-0 mt-[42px]">
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    01
                                  </Text>
                                  <Text
                                    className="mt-[67px] text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    02
                                  </Text>
                                  <Text
                                    className="mt-[66px] text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    03
                                  </Text>
                                  <Text
                                    className="mt-[77px] text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    04
                                  </Text>
                                  <Text
                                    className="mt-[66px] text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    05
                                  </Text>
                                </div>
                                <List
                                  className="sm:flex-col flex-row md:gap-10 gap-[61px] grid grid-cols-3 mb-[73px] md:ml-[0] ml-[47px] w-[44%] md:w-full"
                                  orientation="horizontal"
                                >
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-[15px] text-blue_gray-500"
                                      size="txtRobotoMedium15Bluegray500"
                                    >
                                      Profil nomi
                                    </Text>
                                    <Text
                                      className="mt-6 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Aldoks
                                    </Text>
                                    <Text
                                      className="mt-[67px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Aldoks
                                    </Text>
                                    <Text
                                      className="mt-[66px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Aldoks
                                    </Text>
                                    <Text
                                      className="mt-[77px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Aldoks
                                    </Text>
                                    <Text
                                      className="mt-[66px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Aldoks
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-[15px] text-blue_gray-500"
                                      size="txtRobotoMedium15Bluegray500"
                                    >
                                      Artikul
                                    </Text>
                                    <Text
                                      className="mt-6 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Kosa
                                    </Text>
                                    <Text
                                      className="mt-[68px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Qanot
                                    </Text>
                                    <Text
                                      className="mt-[65px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Kosa
                                    </Text>
                                    <Text
                                      className="mt-[76px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      <>o\&#96;rta</>
                                    </Text>
                                    <Text
                                      className="mt-[66px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Kosa
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-[15px] text-blue_gray-500"
                                      size="txtRobotoMedium15Bluegray500"
                                    >
                                      Rangi
                                    </Text>
                                    <Text
                                      className="mt-[22px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Dub mocco
                                    </Text>
                                    <Text
                                      className="mt-[67px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Dub mocco
                                    </Text>
                                    <Text
                                      className="mt-[67px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Rangsiz
                                    </Text>
                                    <Text
                                      className="mt-[77px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Rangsiz
                                    </Text>
                                    <Text
                                      className="mt-[66px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Rangsiz
                                    </Text>
                                  </div>
                                </List>
                                <List
                                  className="sm:flex-col flex-row gap-[58px] grid grid-cols-3 md:ml-[0] ml-[68px] w-[38%] md:w-full"
                                  orientation="horizontal"
                                >
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-[15px] text-blue_gray-500"
                                      size="txtRobotoMedium15Bluegray500"
                                    >
                                      <>O\&#96;lcham</>
                                    </Text>
                                    <Text
                                      className="mt-6 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1600{" "}
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1200{" "}
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1200{" "}
                                    </Text>
                                    <Text
                                      className="mt-[18px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1133{" "}
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1133{" "}
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      483{" "}
                                    </Text>
                                    <Text
                                      className="mt-4 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1199
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1228{" "}
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1199{" "}
                                    </Text>
                                    <Text
                                      className="mt-[27px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1706{" "}
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1306{" "}
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1306{" "}
                                    </Text>
                                    <Text
                                      className="mt-4 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1253
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      603{" "}
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1253{" "}
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      603{" "}
                                    </Text>
                                  </div>
                                  <div className="flex flex-col gap-6 items-end justify-start w-full">
                                    <Text
                                      className="text-[15px] text-blue_gray-500"
                                      size="txtRobotoMedium15Bluegray500"
                                    >
                                      Soni
                                    </Text>
                                    <div className="flex flex-col items-start justify-start">
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        3
                                      </Text>
                                      <Text
                                        className="mt-1.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        4
                                      </Text>
                                      <Text
                                        className="mt-[5px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        2
                                      </Text>
                                      <Text
                                        className="mt-[19px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        5
                                      </Text>
                                      <Text
                                        className="mt-1.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1
                                      </Text>
                                      <Text
                                        className="mt-[5px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        6
                                      </Text>
                                      <Text
                                        className="mt-[17px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        2
                                      </Text>
                                      <Text
                                        className="mt-1.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        3
                                      </Text>
                                      <Text
                                        className="mt-[5px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1
                                      </Text>
                                      <Text
                                        className="mt-7 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        3
                                      </Text>
                                      <Text
                                        className="mt-1.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        4
                                      </Text>
                                      <Text
                                        className="mt-[5px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        2
                                      </Text>
                                      <Text
                                        className="mt-[18px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        4
                                      </Text>
                                      <Text
                                        className="mt-1.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1
                                      </Text>
                                      <Text
                                        className="mt-[5px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        2
                                      </Text>
                                      <Text
                                        className="mt-1.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        5
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <div className="flex flex-row gap-[23px] items-start justify-between w-full">
                                      <Text
                                        className="text-[15px] text-blue_gray-500"
                                        size="txtRobotoMedium15Bluegray500"
                                      >
                                        Gradus{" "}
                                      </Text>
                                      <Text
                                        className="text-[6px] text-blue_gray-500"
                                        size="txtRobotoMedium6"
                                      >
                                        o{" "}
                                      </Text>
                                    </div>
                                    <Text
                                      className="mt-6 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      90 x90
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      90 x90
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      90 x90
                                    </Text>
                                    <Text
                                      className="mt-[18px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      90 x90
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      90 x90
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      90 x90
                                    </Text>
                                    <Text
                                      className="mt-4 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      90 x90
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      90 x90
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      90 x90
                                    </Text>
                                    <Text
                                      className="mt-[27px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      45 x 45
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      45 x 45
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      45 x 45
                                    </Text>
                                    <Text
                                      className="mt-4 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      45 x 45
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      45 x 45
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      45 x 45
                                    </Text>
                                    <Text
                                      className="mt-1.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      45 x 45
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SavdobolimibuyurtmauchunzayavkaPage;
