import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";

const aldoksKosaDubmoccoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const OmborBichishvarenderTwelvePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat font-roboto h-[900px] mx-auto relative w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="absolute md:h-[1935px] h-[900px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div className="md:h-[1935px] h-[900px] m-auto w-full">
            <div className="absolute bg-blue_gray-900_87_01 flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto p-[18px] w-full">
              <Img
                className="common-pointer h-[33px] w-[33px]"
                src="images/img_arrowleft_blue_400.svg"
                alt="arrowleft"
                onClick={() => navigate(-1)}
              />
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[33px]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-400 sm:text-xl"
                  size="txtRobotoMedium24"
                >
                  Bichuv\ №1203
                </Text>
              </div>
              <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-center md:ml-[0] ml-[225px] md:mt-0 mt-[258px] w-[34%] md:w-full">
                <Button
                  className="flex h-[31px] items-center justify-center rounded-[3px] w-[31px]"
                  shape="round"
                  color="blue_gray_800_04"
                  size="xs"
                  variant="fill"
                >
                  <Img className="h-6" src="images/img_offer.svg" alt="offer" />
                </Button>
                <Button
                  className="flex h-[31px] items-center justify-center sm:ml-[0] ml-[15px] rounded-[3px] w-[31px]"
                  shape="round"
                  color="blue_gray_800_04"
                  size="xs"
                  variant="fill"
                >
                  <Img src="images/img_computer.svg" alt="computer" />
                </Button>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start sm:ml-[0] ml-[21px] w-4/5 sm:w-full">
                  <SelectBox
                    className="border border-blue_gray-800_03 border-solid font-medium leading-[normal] rounded-bl-[3px] rounded-tl-[3px] text-[15px] text-left w-[74%] sm:w-full"
                    placeholderClassName="text-blue_gray-500_99"
                    indicator={
                      <Img
                        className="h-[3px] mr-[0] outline-blue_gray-800_04 outline-[0.5px] outline w-[7px]"
                        src="images/img_arrowdown_blue_gray_500_3x7.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="group196"
                    options={aldoksKosaDubmoccoOptionsList}
                    isSearchable={false}
                    placeholder="Aldoks(Kosa) -Dubmocco"
                    color="white_A700"
                    size="md"
                    variant="fill"
                  />
                  <Text
                    className="bg-white-A700 border border-blue_gray-800_03 border-solid h-[31px] justify-center pb-1.5 pl-[11px] sm:pr-5 pr-8 pt-[9px] text-blue_gray-500_99 text-xs w-[51px]"
                    size="txtRobotoMedium12Bluegray50099"
                  >
                    4
                  </Text>
                  <div className="bg-blue_gray-800_04 flex flex-col items-center justify-start p-2 rounded-br-[5px] rounded-tr-[5px] w-[14%] sm:w-full">
                    <Img
                      className="h-3.5 w-3.5"
                      src="images/img_plus.svg"
                      alt="plus"
                    />
                  </div>
                </div>
              </div>
              <Input
                name="tabbarfixed"
                placeholder="saqlash"
                className="font-medium p-0 placeholder:text-blue-400 text-center text-sm tracking-[0.14px] uppercase w-full"
                wrapClassName="flex md:flex-1 mb-[823px] ml-4 md:ml-[0] rounded-[5px] shadow-bs w-[15%] md:w-full"
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
              <Input
                name="tabbarfixed_One"
                placeholder="jadval"
                className="font-medium p-0 placeholder:text-blue-400 text-center text-sm tracking-[0.14px] uppercase w-full"
                wrapClassName="flex md:flex-1 mb-[823px] md:ml-[0] ml-[31px] mr-[7px] rounded-[5px] shadow-bs w-[15%] md:w-full"
                suffix={
                  <Img
                    className="ml-[35px] my-auto"
                    src="images/img_group_947.png"
                    alt="Group 947"
                  />
                }
                shape="round"
                color="blue_gray_900"
                size="md"
                variant="fill"
              ></Input>
            </div>
            <div className="absolute flex flex-col items-center justify-start left-[0] top-[8%] w-[34%]">
              <div className="h-[536px] relative w-full">
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Line className="bg-blue_gray-800_01 h-px w-full" />
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-[41px] w-full" />
                    <Line className="bg-blue_gray-800_01 h-px mt-7 w-full" />
                    <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[182px] mt-7 w-[62%]" />
                    <Line className="bg-blue_gray-800_01 h-[3px] mt-8 w-full" />
                    <Line className="bg-blue_gray-800_01 h-px mt-7 w-full" />
                    <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[182px] mt-7 w-[62%]" />
                    <Line className="bg-blue_gray-800_01 h-[3px] mt-8 w-full" />
                    <Line className="bg-blue_gray-800_01 h-px mt-[27px] w-full" />
                    <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[182px] mt-[29px] w-[62%]" />
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-[30px] w-full" />
                    <Line className="bg-blue_gray-800_01 h-px mt-[27px] w-full" />
                    <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[182px] mt-[29px] w-[62%]" />
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-8 w-full" />
                    <Line className="bg-blue_gray-800_01 h-px mt-7 w-full" />
                    <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[182px] mt-7 w-[62%]" />
                    <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[182px] mt-[29px] w-[62%]" />
                  </div>
                </div>
                <Line className="absolute bg-blue_gray-800_03 h-[533px] inset-y-[0] left-[38%] my-auto w-px" />
                <Line className="absolute bg-blue_gray-800_03 h-[535px] inset-y-[0] my-auto right-[47%] w-px" />
                <Line className="absolute bg-blue_gray-800_03 h-[535px] inset-y-[0] my-auto right-[32%] w-px" />
                <Line className="absolute bg-blue_gray-800_03 h-[533px] inset-y-[0] my-auto right-[24%] w-px" />
                <Line className="absolute bg-blue_gray-800_03 h-[536px] inset-y-[0] my-auto right-[0] w-px" />
                <Text
                  className="absolute right-[11%] text-[15px] text-blue_gray-500 top-[2%]"
                  size="txtRobotoMedium15Bluegray500"
                >
                  Joyi
                </Text>
                <div className="absolute flex flex-col items-start justify-start left-[2%] top-[2%]">
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
                    Aldoks(kosa) Dubmocco
                  </Text>
                  <Text
                    className="mt-[78px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Aldoks(qanot) Silver
                  </Text>
                  <Text
                    className="mt-[71px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    <>Aldoks(o\&#96;rta) </>
                  </Text>
                  <Text
                    className="mt-[73px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Aldoks
                  </Text>
                  <Text
                    className="mt-20 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Aldoks
                  </Text>
                </div>
                <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start my-auto right-[33%]">
                  <Text
                    className="text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    <>O\&#96;lcham</>
                  </Text>
                  <Text
                    className="mt-[27px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    1600{" "}
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    1200{" "}
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    1200{" "}
                  </Text>
                  <Text
                    className="mt-5 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    1133{" "}
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    1133{" "}
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    483{" "}
                  </Text>
                  <Text
                    className="mt-[18px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    1199
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    1228{" "}
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    1199{" "}
                  </Text>
                  <Text
                    className="mt-[30px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    1706{" "}
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    1306{" "}
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    1306{" "}
                  </Text>
                  <Text
                    className="mt-[19px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    1253
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    603{" "}
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    1253{" "}
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    603{" "}
                  </Text>
                </div>
                <div className="absolute flex flex-col gap-[27px] h-max inset-y-[0] items-center justify-start my-auto right-[26%] w-[7%]">
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
                      className="mt-2 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      4
                    </Text>
                    <Text
                      className="mt-[7px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      2
                    </Text>
                    <Text
                      className="mt-[22px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      5
                    </Text>
                    <Text
                      className="mt-2 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      1
                    </Text>
                    <Text
                      className="mt-[7px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      6
                    </Text>
                    <Text
                      className="mt-[19px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      2
                    </Text>
                    <Text
                      className="mt-2 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      3
                    </Text>
                    <Text
                      className="mt-[7px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      1
                    </Text>
                    <Text
                      className="mt-[31px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      3
                    </Text>
                    <Text
                      className="mt-2 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      4
                    </Text>
                    <Text
                      className="mt-[7px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      2
                    </Text>
                    <Text
                      className="mt-5 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      4
                    </Text>
                    <Text
                      className="mt-2 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      1
                    </Text>
                    <Text
                      className="mt-[7px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      2
                    </Text>
                    <Text
                      className="mt-3.5 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      5
                    </Text>
                  </div>
                </div>
                <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[40%] my-auto w-[11%]">
                  <div className="flex flex-row items-start justify-evenly w-full">
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
                    className="mt-[27px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    90 x90
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    90 x90
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    90 x90
                  </Text>
                  <Text
                    className="mt-5 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    90 x90
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    90 x90
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
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
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    90 x90
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    90 x90
                  </Text>
                  <Text
                    className="mt-[30px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    45 x 45
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    45 x 45
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    45 x 45
                  </Text>
                  <Text
                    className="mt-[19px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    45 x 45
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    45 x 45
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    45 x 45
                  </Text>
                  <Text
                    className="mt-2 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    45 x 45
                  </Text>
                </div>
              </div>
              <Line className="bg-blue_gray-800_01 h-0.5 w-full" />
            </div>
          </div>
          <div className="absolute bg-blue_gray-800_87 flex flex-col items-center justify-start p-[9px] right-[16%] top-[8%] w-[52%]">
            <div className="flex flex-col gap-[27px] justify-start mb-[13px] w-[97%] md:w-full">
              <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  Aldoks(Kosa) -Dubmocco
                </Text>
                <div className="flex sm:flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-3/5 sm:w-full">
                  <div className="h-5 relative w-[24%] sm:w-full">
                    <div className="absolute bg-white-A700 border border-blue_gray-500 border-solid h-5 inset-[0] justify-center m-auto rounded-[5px] w-full"></div>
                    <Text
                      className="absolute bottom-[0] left-[27%] text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Yangi
                    </Text>
                  </div>
                  <Text
                    className="bg-light_green-400 border border-blue_gray-500 border-solid h-5 justify-center pl-[26px] pr-[30px] sm:px-5 rounded-[5px] text-[15px] text-white-A700 w-[98px]"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    Sexda
                  </Text>
                  <Text
                    className="bg-blue-400 border border-blue_gray-500 border-solid h-5 justify-center sm:pl-5 pl-[26px] pr-5 rounded-[5px] text-[15px] text-white-A700 w-[98px]"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    Havoda
                  </Text>
                  <Text
                    className="bg-orange-300 border border-blue_gray-500 border-solid h-5 justify-center pl-[19px] pr-4 rounded-[5px] text-[15px] text-white-A700 w-[98px]"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    Omborda
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[7px] w-3/4 md:w-full">
                <div className="flex sm:flex-col flex-row gap-[17px] items-center justify-between w-full">
                  <Text
                    className="bg-gray-400_01 border border-blue_gray-500 border-solid h-5 justify-center sm:px-5 px-[35px] rounded-[5px] text-[15px] text-blue_gray-500 w-40"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    1600(k)
                  </Text>
                  <Text
                    className="bg-gray-400_01 border border-blue_gray-500 border-solid h-5 justify-center sm:px-5 px-[35px] rounded-[5px] text-[15px] text-blue_gray-500 w-40"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    1600(k)
                  </Text>
                  <Text
                    className="bg-gray-400_01 border border-blue_gray-500 border-solid h-5 justify-center sm:px-5 px-[35px] rounded-[5px] text-[15px] text-blue_gray-500 w-40"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    1600(k)
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-between mt-[17px] w-[98%] md:w-full">
                  <Text
                    className="bg-gray-400_01 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[23px] sm:px-5 rounded-[5px] text-[15px] text-blue_gray-500 w-[120px]"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    1200(k)
                  </Text>
                  <Text
                    className="bg-gray-400_01 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[25px] sm:px-5 rounded-[5px] text-[15px] text-blue_gray-500 w-[120px]"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    1200(k)
                  </Text>
                  <Text
                    className="bg-gray-400_01 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[25px] sm:px-5 rounded-[5px] text-[15px] text-blue_gray-500 w-[120px]"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    1200(k)
                  </Text>
                  <Text
                    className="bg-gray-400_01 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[25px] sm:px-5 rounded-[5px] text-[15px] text-blue_gray-500 w-[120px]"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    1200(k)
                  </Text>
                </div>
                <div className="flex flex-row gap-[7px] items-center justify-start mt-3.5 w-[49%] md:w-full">
                  <Text
                    className="bg-gray-400_01 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[23px] sm:px-5 rounded-[5px] text-[15px] text-blue_gray-500 w-[120px]"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    1200(k)
                  </Text>
                  <Text
                    className="bg-gray-400_01 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[23px] sm:px-5 rounded-[5px] text-[15px] text-blue_gray-500 w-[120px]"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    1200(k)
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col items-center justify-start md:px-5 right-[0] top-[9%] w-[16%]">
          <div className="flex flex-col gap-[15px] items-center justify-start w-full">
            <div className="flex flex-col gap-2.5 items-start justify-start w-[85%] md:w-full">
              <div className="flex flex-col items-center justify-start ml-0.5 md:ml-[0]">
                <Text
                  className="text-gray-400 text-xs"
                  size="txtRobotoMedium12"
                >
                  Qoldiq izlash
                </Text>
              </div>
              <div className="flex flex-row items-center justify-evenly w-full">
                <Text
                  className="bg-blue_gray-500 h-10 justify-center pl-[18px] sm:pr-5 pr-[35px] py-2.5 rounded-bl-[3px] rounded-tl-[3px] text-base text-white-A700 w-[135px]"
                  size="txtRobotoMedium16WhiteA700"
                >
                  500
                </Text>
                <div className="bg-red-300 flex flex-col items-end justify-start p-2.5 rounded-br-[3px] rounded-tr-[3px] w-[30%]">
                  <Img
                    className="h-5 mr-1.5 w-5"
                    src="images/img_location.svg"
                    alt="location"
                  />
                </div>
              </div>
            </div>
            <div className="h-[487px] relative w-full">
              <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <Line className="bg-blue_gray-800_01 h-px w-full" />
                  <div className="flex flex-col items-center justify-start mt-[38px] w-full">
                    <div className="flex flex-col gap-[26px] items-center justify-start w-full">
                      <Line className="bg-blue_gray-800_01 h-0.5 w-full" />
                      <Line className="bg-blue_gray-800_01 h-px w-full" />
                      <Line className="bg-blue_gray-800_01 h-px w-full" />
                    </div>
                  </div>
                  <Line className="bg-blue_gray-800_01 h-px mt-[26px] w-full" />
                </div>
              </div>
              <Line className="absolute bg-blue_gray-800_03 h-[66px] left-[0] top-[0] w-px" />
              <Line className="absolute bg-blue_gray-800_03 h-[121px] right-[38%] top-[0] w-px" />
              <Line className="absolute bg-blue_gray-800_03 h-[487px] inset-y-[0] my-auto right-[0] w-px" />
              <div className="absolute flex flex-col gap-3.5 justify-start left-[8%] top-[2%] w-[47%]">
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[39px]">
                  <Text
                    className="text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    ID
                  </Text>
                </div>
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <Text
                    className="bg-orange-300 border border-blue_gray-500 border-solid h-5 justify-center pl-6 pr-[27px] sm:px-5 rounded-[5px] text-[15px] text-white-A700 w-[104px]"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    1600(k)
                  </Text>
                  <Text
                    className="bg-orange-300 border border-blue_gray-500 border-solid h-5 justify-center pl-6 pr-[27px] sm:px-5 rounded-[5px] text-[15px] text-white-A700 w-[104px]"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    1630(k)
                  </Text>
                  <Text
                    className="bg-light_green-400 border border-blue_gray-500 border-solid h-5 justify-center pl-6 pr-[27px] sm:px-5 rounded-[5px] text-[15px] text-white-A700 w-[104px]"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    1650(k)
                  </Text>
                </div>
              </div>
              <div className="absolute flex flex-col gap-[23px] items-center justify-start right-[15%] top-[2%] w-[14%]">
                <Text
                  className="text-[15px] text-blue_gray-500"
                  size="txtRobotoMedium15Bluegray500"
                >
                  Soni
                </Text>
                <div className="flex flex-col gap-[5px] items-start justify-start">
                  <Text
                    className="text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    1
                  </Text>
                  <Text
                    className="text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    2
                  </Text>
                  <Text
                    className="text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    2
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OmborBichishvarenderTwelvePage;
