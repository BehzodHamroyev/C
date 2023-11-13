import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const qavatCounterOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const moccoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const IshlabchiqarishsexiPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[1055px] mx-auto pb-[155px] relative w-full">
        <div className="h-[900px] mx-auto md:px-5 w-full">
          <Img
            className="h-[900px] m-auto object-cover w-full"
            src="images/img_showroombuyurtmalar.png"
            alt="globalOne"
          />
          <div className="absolute flex sm:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between mx-auto top-[3%] w-[92%]">
            <Img
              className="h-[82px] sm:mt-0 mt-[26px]"
              src="images/img_group834.svg"
              alt="groupSeventySix"
            />
            <div className="flex flex-row items-center justify-end">
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
          <div className="absolute h-[60px] left-[0] top-[35%] w-1/5">
            <div className="absolute h-[60px] inset-[0] justify-center m-auto w-full">
              <div className="bg-blue_gray-800_7e h-[60px] m-auto w-full"></div>
              <div className="absolute bottom-[27%] flex flex-row gap-[15px] items-center justify-center left-[12%] w-[70%]">
                <Img
                  className="h-6 w-6"
                  src="images/img_plus_white_a700.svg"
                  alt="plus"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-base text-white-A700 uppercase"
                    size="txtRobotoMedium16WhiteA700"
                  >
                    oynaga buyurtma
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute bg-red-300 h-[60px] inset-y-[0] left-[0] my-auto w-[6%]"></div>
          </div>
        </div>
        <div className="absolute flex md:flex-col flex-row md:gap-[42px] items-center justify-between max-w-[1172px] md:px-5 right-[0] top-[10%] w-full">
          <div className="flex md:flex-1 flex-col justify-start w-[96%] md:w-full">
            <Text
              className="md:ml-[0] ml-[11px] text-2xl md:text-[22px] text-gray-400 sm:text-xl"
              size="txtRobotoMedium24"
            >
              Buyurtma qoldiq ID{" "}
            </Text>
            <div className="flex flex-col items-center justify-start mt-0.5 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-start p-[38px] sm:px-5 rounded-[5px] shadow-bs6 w-full">
                    <div className="flex flex-col gap-[43px] items-center justify-start mb-[57px] w-[99%] md:w-full">
                      <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-full">
                        <div className="bg-blue_gray-900 flex flex-col items-center justify-start rounded-[5px] shadow-bs">
                          <OmborTaminotchigaZayavkaOneTab
                            className="flex flex-col items-center justify-start rounded-[5px] w-[253px]"
                            username="Oyna"
                          />
                        </div>
                        <Input
                          name="buttonsaqlash"
                          placeholder="saqlash"
                          className="font-medium p-0 placeholder:text-blue-400 text-center text-sm tracking-[0.14px] uppercase w-full"
                          wrapClassName="border border-blue_gray-600 border-solid flex sm:flex-1 sm:mt-0 mt-2 rounded-[5px] sm:w-full"
                          suffix={
                            <Img
                              className="h-6 ml-[29px] my-auto"
                              src="images/img_save.svg"
                              alt="save"
                            />
                          }
                          shape="round"
                          color="blue_gray_900"
                          size="md"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col md:gap-10 gap-[124px] items-center justify-start w-[45%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col justify-start w-full">
                              <Text
                                className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                                size="txtRobotoMedium12Bluegray50099"
                              >
                                Loyiha nomeri
                              </Text>
                              <Input
                                name="zipcode"
                                placeholder="1024"
                                className="font-medium leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left w-full"
                                wrapClassName="mt-[3px] pl-5 pr-[35px] py-4 rounded-[5px] w-full"
                                shape="round"
                                color="gray_900"
                                variant="fill"
                              ></Input>
                            </div>
                            <div className="flex flex-col justify-start mt-[23px] w-full">
                              <Text
                                className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                                size="txtRobotoMedium12Bluegray50099"
                              >
                                Steklopaket
                              </Text>
                              <SelectBox
                                className="font-medium leading-[normal] mt-[3px] text-base text-left w-full"
                                placeholderClassName="text-white-A700"
                                indicator={
                                  <Img
                                    className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-[13px]"
                                    src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="qavatCounter"
                                options={qavatCounterOptionsList}
                                isSearchable={false}
                                placeholder="2 qavat"
                                shape="round"
                                color="gray_900"
                                size="xl"
                                variant="fill"
                              />
                            </div>
                            <div className="flex flex-col justify-start mt-[18px] w-full">
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
                                name="group637"
                                options={moccoOptionsList}
                                isSearchable={false}
                                placeholder="Mocco"
                                shape="round"
                                color="gray_900"
                                size="xl"
                                variant="fill"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start mt-[17px] w-full">
                              <div className="flex flex-col justify-start w-full">
                                <div className="flex flex-row items-center justify-between ml-4 md:ml-[0] w-[65%] md:w-full">
                                  <Text
                                    className="text-blue_gray-500_99 text-xs"
                                    size="txtRobotoMedium12Bluegray50099"
                                  >
                                    <>Olchami (bo\&#96;yi)</>
                                  </Text>
                                  <Text
                                    className="text-blue_gray-500_99 text-xs"
                                    size="txtRobotoMedium12Bluegray50099"
                                  >
                                    Olchami (eni)
                                  </Text>
                                </div>
                                <div className="bg-gray-900 flex flex-row items-center justify-start mt-1 px-3.5 rounded-[3px] w-full">
                                  <Text
                                    className="text-base text-white-A700"
                                    size="txtRobotoMedium16WhiteA700"
                                  >
                                    1200
                                  </Text>
                                  <Line className="bg-blue_gray-800_02 h-[52px] ml-[185px] w-px" />
                                  <Text
                                    className="ml-[19px] text-base text-white-A700"
                                    size="txtRobotoMedium16WhiteA700"
                                  >
                                    1350
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
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
                        <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                          <div className="h-[503px] sm:h-[777px] relative w-full">
                            <div className="bg-gray-900 h-[503px] m-auto rounded-[5px] w-full"></div>
                            <div
                              className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-center justify-center m-auto p-0.5 w-full"
                              style={{
                                backgroundImage:
                                  "url('images/img_group640_blue_gray_800_01.svg')",
                              }}
                            >
                              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mb-[293px] w-full">
                                <div className="flex flex-col items-center justify-start sm:mt-0 mt-[50px]">
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    1024
                                  </Text>
                                </div>
                                <List
                                  className="sm:flex-1 sm:flex-col flex-row md:gap-10 gap-[88px] grid grid-cols-3 w-[62%] sm:w-full"
                                  orientation="horizontal"
                                >
                                  <div className="flex flex-col items-start justify-start sm:ml-[0] sm:mt-0 mt-2 w-full">
                                    <Text
                                      className="text-blue_gray-500 text-xs"
                                      size="txtRobotoMedium12Bluegray500"
                                    >
                                      Steklopaket
                                    </Text>
                                    <Text
                                      className="mt-[27px] text-gray-400 text-xs"
                                      size="txtRobotoMedium12"
                                    >
                                      1-qavat
                                    </Text>
                                    <Text
                                      className="mt-[11px] text-gray-400 text-xs"
                                      size="txtRobotoMedium12"
                                    >
                                      2-qavat
                                    </Text>
                                    <Text
                                      className="mt-[15px] text-gray-400 text-xs"
                                      size="txtRobotoMedium12"
                                    >
                                      2-qavat
                                    </Text>
                                    <Text
                                      className="mt-3 text-gray-400 text-xs"
                                      size="txtRobotoMedium12"
                                    >
                                      2-qavat
                                    </Text>
                                    <Text
                                      className="mt-3 text-gray-400 text-xs"
                                      size="txtRobotoMedium12"
                                    >
                                      3-qavat
                                    </Text>
                                    <Text
                                      className="mt-3 text-gray-400 text-xs"
                                      size="txtRobotoMedium12"
                                    >
                                      3-qavat
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start sm:ml-[0] sm:mt-0 mt-2 w-full">
                                    <Text
                                      className="text-blue_gray-500 text-xs"
                                      size="txtRobotoMedium12Bluegray500"
                                    >
                                      Rangi
                                    </Text>
                                    <Text
                                      className="mt-[27px] text-gray-400 text-xs"
                                      size="txtRobotoMedium12"
                                    >
                                      Yodoviy
                                    </Text>
                                    <Text
                                      className="mt-[15px] text-gray-400 text-xs"
                                      size="txtRobotoMedium12"
                                    >
                                      Yodoviy
                                    </Text>
                                    <Text
                                      className="mt-2 text-gray-400 text-xs"
                                      size="txtRobotoMedium12"
                                    >
                                      Yodoviy
                                    </Text>
                                    <Text
                                      className="h-[15px] mt-3 text-gray-400 text-xs"
                                      size="txtRobotoMedium12"
                                    >
                                      Oq
                                    </Text>
                                    <Text
                                      className="h-[15px] mt-[15px] text-gray-400 text-xs"
                                      size="txtRobotoMedium12"
                                    >
                                      Oq
                                    </Text>
                                    <Text
                                      className="h-[15px] mt-[13px] text-gray-400 text-xs"
                                      size="txtRobotoMedium12"
                                    >
                                      Oq
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start mb-1 sm:ml-[0] w-full">
                                    <Text
                                      className="text-blue_gray-500 text-xs"
                                      size="txtRobotoMedium12Bluegray500"
                                    >
                                      <>O\&#96;lchami</>
                                    </Text>
                                    <Text
                                      className="ml-0.5 md:ml-[0] mt-[34px] text-gray-400 text-xs"
                                      size="txtRobotoMedium12"
                                    >
                                      1600x1300{" "}
                                    </Text>
                                    <Text
                                      className="ml-0.5 md:ml-[0] mt-2.5 text-gray-400 text-xs"
                                      size="txtRobotoMedium12"
                                    >
                                      1200x2000{" "}
                                    </Text>
                                    <Text
                                      className="ml-0.5 md:ml-[0] mt-2.5 text-gray-400 text-xs"
                                      size="txtRobotoMedium12"
                                    >
                                      1200x1300{" "}
                                    </Text>
                                    <Text
                                      className="ml-0.5 md:ml-[0] mt-[21px] text-gray-400 text-xs"
                                      size="txtRobotoMedium12"
                                    >
                                      1133x3600
                                    </Text>
                                    <Text
                                      className="ml-0.5 md:ml-[0] mt-2.5 text-gray-400 text-xs"
                                      size="txtRobotoMedium12"
                                    >
                                      1133x3300{" "}
                                    </Text>
                                    <Text
                                      className="ml-0.5 md:ml-[0] mt-2.5 text-gray-400 text-xs"
                                      size="txtRobotoMedium12"
                                    >
                                      4830x1250{" "}
                                    </Text>
                                  </div>
                                </List>
                                <List
                                  className="sm:flex-1 sm:flex-col flex-row gap-6 grid grid-cols-2 w-[23%] sm:w-full"
                                  orientation="horizontal"
                                >
                                  <div className="flex flex-col gap-[27px] items-end justify-start w-full">
                                    <Text
                                      className="text-blue_gray-500 text-xs"
                                      size="txtRobotoMedium12Bluegray500"
                                    >
                                      Soni
                                    </Text>
                                    <div className="flex flex-col items-start justify-start">
                                      <Text
                                        className="text-gray-400 text-xs"
                                        size="txtRobotoMedium12"
                                      >
                                        3
                                      </Text>
                                      <Text
                                        className="mt-[9px] text-gray-400 text-xs"
                                        size="txtRobotoMedium12"
                                      >
                                        4
                                      </Text>
                                      <Text
                                        className="mt-2 text-gray-400 text-xs"
                                        size="txtRobotoMedium12"
                                      >
                                        2
                                      </Text>
                                      <Text
                                        className="mt-[22px] text-gray-400 text-xs"
                                        size="txtRobotoMedium12"
                                      >
                                        5
                                      </Text>
                                      <Text
                                        className="mt-[9px] text-gray-400 text-xs"
                                        size="txtRobotoMedium12"
                                      >
                                        1
                                      </Text>
                                      <Text
                                        className="mt-2 text-gray-400 text-xs"
                                        size="txtRobotoMedium12"
                                      >
                                        6
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-[13px] justify-start w-full">
                                    <Text
                                      className="text-blue_gray-500 text-xs w-full"
                                      size="txtRobotoMedium12Bluegray500"
                                    >
                                      Umumiy summa
                                    </Text>
                                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px]">
                                      <Text
                                        className="text-gray-400 text-xs"
                                        size="txtRobotoMedium12"
                                      >
                                        1600{" "}
                                      </Text>
                                      <Text
                                        className="mt-[9px] text-gray-400 text-xs"
                                        size="txtRobotoMedium12"
                                      >
                                        1200{" "}
                                      </Text>
                                      <Text
                                        className="mt-[9px] text-gray-400 text-xs"
                                        size="txtRobotoMedium12"
                                      >
                                        1200{" "}
                                      </Text>
                                      <Text
                                        className="mt-[21px] text-gray-400 text-xs"
                                        size="txtRobotoMedium12"
                                      >
                                        1133{" "}
                                      </Text>
                                      <Text
                                        className="mt-[9px] text-gray-400 text-xs"
                                        size="txtRobotoMedium12"
                                      >
                                        1133{" "}
                                      </Text>
                                      <Text
                                        className="mt-[9px] text-gray-400 text-xs"
                                        size="txtRobotoMedium12"
                                      >
                                        483{" "}
                                      </Text>
                                    </div>
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
          <div className="h-[770px] relative w-[1%] md:w-full">
            <Line className="bg-blue_gray-800 h-[770px] m-auto w-[5px]" />
            <Line className="absolute bg-blue_gray-500 bottom-[6%] h-[172px] inset-x-[0] mx-auto rounded-sm w-[5px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default IshlabchiqarishsexiPage;
