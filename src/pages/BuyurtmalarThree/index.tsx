import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const eshikOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const dubmoccoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BuyurtmalarThreePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat flex flex-col font-roboto h-[900px] items-center justify-end mx-auto p-[18px] w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="flex flex-col gap-[13px] items-center justify-start max-w-[1354px] mt-[3px] mx-auto md:px-5 w-full">
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
            <div className="flex flex-row items-start justify-start ml-4 md:ml-[0] w-[24%] md:w-full">
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
                  <div className="flex flex-col items-center justify-start mb-[66px] w-[99%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between w-full">
                      <div className="flex md:flex-1 flex-col md:gap-10 gap-[87px] items-center justify-start md:mt-0 mt-[99px] w-[37%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
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
                                  name="group883"
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
                          <div className="flex flex-col items-center justify-start mt-[50px] w-[99%] md:w-full">
                            <div className="flex flex-col gap-[5px] justify-start w-full">
                              <div className="flex flex-row gap-[163px] items-center justify-start ml-4 md:ml-[0] w-[57%] md:w-full">
                                <Text
                                  className="text-blue_gray-500_99 text-xs"
                                  size="txtRobotoMedium12Bluegray50099"
                                >
                                  Aksesuar turi
                                </Text>
                                <Text
                                  className="text-blue_gray-500_99 text-xs"
                                  size="txtRobotoMedium12Bluegray50099"
                                >
                                  <>o\&#96;rni</>
                                </Text>
                              </div>
                              <div className="bg-gray-900 flex sm:flex-col flex-row sm:gap-5 items-center justify-start px-3.5 rounded-[3px] w-full">
                                <Text
                                  className="text-base text-white-A700"
                                  size="txtRobotoMedium16WhiteA700"
                                >
                                  Eshik
                                </Text>
                                <Img
                                  className="h-[5px] ml-40 sm:ml-[0]"
                                  src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                  alt="arrowdown_One"
                                />
                                <Line className="bg-blue_gray-800_02 h-[52px] sm:h-px ml-2 sm:ml-[0] sm:w-full w-px" />
                                <Text
                                  className="sm:ml-[0] ml-[19px] text-base text-white-A700"
                                  size="txtRobotoMedium16WhiteA700"
                                >
                                  Dastak
                                </Text>
                                <Img
                                  className="h-[5px] sm:ml-[0] ml-[105px]"
                                  src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                  alt="arrowdown_Two"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col justify-start mt-6 w-[99%] md:w-full">
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
                              name="group567"
                              options={dubmoccoOptionsList}
                              isSearchable={false}
                              placeholder="Dubmocco"
                              shape="round"
                              color="gray_900"
                              size="xl"
                              variant="fill"
                            />
                          </div>
                          <div className="flex flex-col justify-start mt-5 w-[99%] md:w-full">
                            <Text
                              className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                              size="txtRobotoMedium12Bluegray50099"
                            >
                              Soni
                            </Text>
                            <SelectBox
                              className="font-medium leading-[normal] mt-1 rounded-[5px] text-base text-left w-full"
                              placeholderClassName="text-white-A700"
                              indicator={
                                <Img
                                  className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-[13px]"
                                  src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="group568"
                              options={optionsList}
                              isSearchable={false}
                              placeholder="2"
                              shape="round"
                              color="gray_900"
                              size="xl"
                              variant="fill"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
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
                      <div className="flex md:flex-1 flex-col gap-[41px] items-center justify-start w-[59%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[98%] md:w-full">
                          <div className="md:h-6 h-[31px] md:mt-0 mt-[45px] relative w-[56%] md:w-full">
                            <div className="absolute md:h-[23px] h-[31px] inset-y-[0] left-[0] my-auto w-1/2">
                              <Text
                                className="absolute left-[30%] text-base text-center text-white-A700 top-[0]"
                                size="txtRobotoMedium16WhiteA700"
                              >
                                Profillar
                              </Text>
                              <div className="absolute bottom-[0] h-6 md:h-[23px] inset-x-[0] mx-auto w-full">
                                <Line className="absolute bg-white-A700 bottom-[42%] h-px left-[0] w-[90%]" />
                                <div className="absolute bg-blue-400 flex flex-col h-full inset-y-[0] items-start justify-end my-auto p-0.5 right-[0] rounded-[50%] w-6">
                                  <Text
                                    className="md:ml-[0] ml-[5px] text-base text-white-A700"
                                    size="txtRobotoMedium16WhiteA700"
                                  >
                                    1
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="absolute md:h-6 h-[31px] inset-y-[0] my-auto right-[0] w-[51%]">
                              <Text
                                className="absolute left-[23%] text-base text-center text-white-A700 top-[0]"
                                size="txtRobotoMedium16WhiteA700"
                              >
                                Aksesuarlar
                              </Text>
                              <div className="absolute bottom-[0] h-6 inset-x-[0] mx-auto w-full">
                                <Line className="absolute bg-white-A700 bottom-[42%] h-px left-[0] w-[89%]" />
                                <Text
                                  className="absolute bg-blue-400 flex h-full inset-y-[0] items-center justify-center my-auto right-[0] rounded-[50%] text-base text-center text-white-A700 w-6"
                                  size="txtRobotoMedium16WhiteA700"
                                >
                                  2
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Button
                            className="cursor-pointer font-medium mb-[29px] min-w-[201px] rounded-[5px] text-center text-sm tracking-[0.14px] uppercase"
                            shape="round"
                            color="blue_gray_900"
                            size="md"
                            variant="fill"
                          >
                            Saqlash
                          </Button>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="bg-gray-900 flex flex-col items-center justify-start rounded-[5px] w-full">
                            <div
                              className="bg-cover bg-no-repeat flex flex-col h-[503px] items-start justify-start p-[9px] w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group571.svg')",
                              }}
                            >
                              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mb-[329px] md:ml-[0] ml-[23px] w-[86%] md:w-full">
                                <div className="flex flex-col items-start justify-start md:mt-0 mt-[42px] w-[3%] md:w-full">
                                  <div className="flex flex-col items-center justify-start">
                                    <Text
                                      className="text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      01
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start mt-[15px] w-[17px] md:w-full">
                                    <Text
                                      className="text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      02
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start mt-[11px] w-[17px] md:w-full">
                                    <Text
                                      className="text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      03
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-center justify-start mt-2.5 w-[17px] md:w-full">
                                    <Text
                                      className="text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      04
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[62px]">
                                  <Text
                                    className="md:ml-[0] ml-[3px] text-[15px] text-blue_gray-500 text-center"
                                    size="txtRobotoMedium15Bluegray500"
                                  >
                                    Aksesuar turi
                                  </Text>
                                  <Text
                                    className="mt-6 text-[15px] text-center text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    Eshik
                                  </Text>
                                  <Text
                                    className="ml-0.5 md:ml-[0] mt-[15px] text-[15px] text-center text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    Rom
                                  </Text>
                                  <Text
                                    className="mt-[11px] text-[15px] text-center text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    Eshik
                                  </Text>
                                  <Text
                                    className="ml-0.5 md:ml-[0] mt-2.5 text-[15px] text-center text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    Rom
                                  </Text>
                                </div>
                                <div className="flex flex-col justify-start md:ml-[0] ml-[87px] w-[16%] md:w-full">
                                  <Text
                                    className="ml-1.5 md:ml-[0] text-[15px] text-blue_gray-500"
                                    size="txtRobotoMedium15Bluegray500"
                                  >
                                    <>O\&#96;rni</>
                                  </Text>
                                  <div className="flex flex-col gap-[15px] items-center justify-start md:ml-[0] ml-[15px] mt-6">
                                    <Text
                                      className="text-[15px] text-center text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Dastak
                                    </Text>
                                    <Text
                                      className="text-[15px] text-center text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Dastak
                                    </Text>
                                  </div>
                                  <div className="flex flex-col gap-2.5 items-center justify-start mt-[13px] w-full">
                                    <Text
                                      className="text-[15px] text-center text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Oshiq-moshiq
                                    </Text>
                                    <Text
                                      className="text-[15px] text-center text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Oshiq-moshiq
                                    </Text>
                                  </div>
                                </div>
                                <List
                                  className="sm:flex-col flex-row md:gap-10 gap-[102px] grid grid-cols-2 md:ml-[0] ml-[82px] w-[30%] md:w-full"
                                  orientation="horizontal"
                                >
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
                                      Golden
                                    </Text>
                                    <Text
                                      className="mt-[15px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Golden
                                    </Text>
                                    <Text
                                      className="mt-[11px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Golden
                                    </Text>
                                    <Text
                                      className="mt-2.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      Golden
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="text-[15px] text-blue_gray-500"
                                      size="txtRobotoMedium15Bluegray500"
                                    >
                                      Soni
                                    </Text>
                                    <Text
                                      className="mt-6 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      3
                                    </Text>
                                    <Text
                                      className="mt-[15px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      5
                                    </Text>
                                    <Text
                                      className="mt-[11px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      3
                                    </Text>
                                    <Text
                                      className="mt-2.5 text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      4
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

export default BuyurtmalarThreePage;
