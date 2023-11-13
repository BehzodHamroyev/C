import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const profilNomiOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const OmborBichishvarenderThirteenPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-end justify-start m-auto p-[72px] md:px-10 sm:px-5 w-full"
          style={{
            backgroundImage: "url('images/img_showroombuyurtmalar.png')",
          }}
        >
          <div className="bg-blue_gray-800_87 h-[172px] mb-[583px] mr-[153px] md:px-5 w-[57%]"></div>
        </div>
        <div className="absolute bottom-[0] sm:h-[1070px] h-[1073px] md:h-[1500px] inset-x-[0] mx-auto md:px-5 w-full">
          <div className="absolute bg-blue_gray-900_87_01 flex flex-col h-full inset-[0] items-center justify-center m-auto pl-[13px] py-[13px] w-full">
            <div className="flex flex-col gap-1.5 justify-start mt-[5px] w-[99%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mr-[34px] w-[98%] md:w-full">
                <Img
                  className="common-pointer h-[33px] md:mt-0 mt-[3px] w-[33px]"
                  src="images/img_arrowleft_blue_400.svg"
                  alt="arrowleft"
                  onClick={() => navigate(-1)}
                />
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[33px] md:mt-0 mt-1">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-400 sm:text-xl"
                    size="txtRobotoMedium24"
                  >
                    Bichuv \ №1203
                  </Text>
                </div>
                <Input
                  name="tabbarfixed"
                  placeholder="saqlash"
                  className="font-medium p-0 placeholder:text-blue-400 text-center text-sm tracking-[0.14px] uppercase w-full"
                  wrapClassName="flex md:ml-[0] ml-[701px] rounded-[5px] shadow-bs w-[15%] md:w-full"
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
                  wrapClassName="flex md:ml-[0] ml-[27px] rounded-[5px] shadow-bs w-[15%] md:w-full"
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
              <div className="flex md:flex-col flex-row gap-[9px] items-start justify-end md:ml-[0] ml-[456px] w-[68%] md:w-full">
                <div className="flex flex-col justify-start md:mt-0 mt-[17px] w-[76%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between md:ml-[0] ml-[25px] w-[97%] md:w-full">
                    <Text
                      className="text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Aldoks(Kosa) -Dubmocco
                    </Text>
                    <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-3/5 sm:w-full">
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
                  <div className="flex flex-col items-start justify-start ml-8 md:ml-[0] mt-[26px] w-[72%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[17px] items-center justify-between w-full">
                      <Text
                        className="bg-light_green-400 border border-blue_gray-500 border-solid h-5 justify-center sm:px-5 px-[35px] rounded-[5px] text-[15px] text-white-A700 w-40"
                        size="txtRobotoMedium15WhiteA700"
                      >
                        1600(k)
                      </Text>
                      <Text
                        className="bg-light_green-400 border border-blue_gray-500 border-solid h-5 justify-center sm:px-5 px-[35px] rounded-[5px] text-[15px] text-white-A700 w-40"
                        size="txtRobotoMedium15WhiteA700"
                      >
                        1600(k)
                      </Text>
                      <Text
                        className="bg-light_green-400 border border-blue_gray-500 border-solid h-5 justify-center sm:px-5 px-[35px] rounded-[5px] text-[15px] text-white-A700 w-40"
                        size="txtRobotoMedium15WhiteA700"
                      >
                        1600(k)
                      </Text>
                    </div>
                    <div className="flex sm:flex-col flex-row gap-[7px] items-center justify-between mt-[17px] w-[98%] md:w-full">
                      <Text
                        className="bg-light_green-400 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[30px] sm:px-5 rounded-[5px] text-[15px] text-white-A700 w-[120px]"
                        size="txtRobotoMedium15WhiteA700"
                      >
                        1200(k)
                      </Text>
                      <Text
                        className="bg-light_green-400 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[31px] sm:px-5 rounded-[5px] text-[15px] text-white-A700 w-[120px]"
                        size="txtRobotoMedium15WhiteA700"
                      >
                        1200(k)
                      </Text>
                      <Text
                        className="bg-orange-300 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-8 sm:px-5 rounded-[5px] text-[15px] text-white-A700 w-[120px]"
                        size="txtRobotoMedium15WhiteA700"
                      >
                        1200(k)
                      </Text>
                      <Text
                        className="bg-orange-300 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[30px] sm:px-5 rounded-[5px] text-[15px] text-white-A700 w-[120px]"
                        size="txtRobotoMedium15WhiteA700"
                      >
                        1200(k)
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[7px] items-center justify-start mt-3.5 w-[49%] md:w-full">
                      <Text
                        className="bg-white-A700 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[31px] sm:px-5 rounded-[5px] text-[15px] text-blue_gray-500 w-[120px]"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        1200(k)
                      </Text>
                      <Text
                        className="bg-white-A700 border border-blue_gray-500 border-solid h-5 justify-center pl-[35px] pr-[31px] sm:px-5 rounded-[5px] text-[15px] text-blue_gray-500 w-[120px]"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        1200(k)
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[42px] items-start justify-start mt-10 w-[85%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-start w-[64%] md:w-full">
                      <div className="flex flex-row gap-[15px] items-center justify-between w-[21%] sm:w-full">
                        <Button
                          className="flex h-[31px] items-center justify-center rounded-[3px] w-[31px]"
                          shape="round"
                          color="blue_gray_800_04"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-6"
                            src="images/img_offer.svg"
                            alt="offer"
                          />
                        </Button>
                        <Button
                          className="flex h-[31px] items-center justify-center rounded-[3px] w-[31px]"
                          shape="round"
                          color="blue_gray_800_04"
                          size="xs"
                          variant="fill"
                        >
                          <Img src="images/img_computer.svg" alt="computer" />
                        </Button>
                      </div>
                      <div className="flex flex-row items-center justify-start w-3/4 sm:w-full">
                        <SelectBox
                          className="border border-blue_gray-800_03 border-solid font-medium leading-[normal] rounded-bl-[3px] rounded-tl-[3px] text-left text-xs w-[65%] sm:w-full"
                          placeholderClassName="text-blue_gray-500_99"
                          indicator={
                            <Img
                              className="h-[3px] mr-[0] outline-blue_gray-800_04 outline-[0.5px] outline w-[7px]"
                              src="images/img_arrowdown_blue_gray_500_3x7.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group189"
                          options={profilNomiOptionsList}
                          isSearchable={false}
                          placeholder="Profil nomi"
                          color="white_A700"
                          size="sm"
                          variant="fill"
                        />
                        <Text
                          className="bg-white-A700 border border-blue_gray-800_03 border-solid h-[31px] justify-center pb-1.5 pl-[11px] sm:pr-5 pr-8 pt-[9px] text-blue_gray-500_99 text-xs w-[51px]"
                          size="txtRobotoMedium12Bluegray50099"
                        >
                          4
                        </Text>
                        <div className="bg-blue_gray-800_04 flex flex-col items-center justify-start p-1.5 rounded-br-[5px] rounded-tr-[5px] w-[18%]">
                          <Img
                            className="h-3.5 mb-[5px] w-3.5"
                            src="images/img_plus.svg"
                            alt="plus"
                          />
                        </div>
                      </div>
                    </div>
                    <List
                      className="flex flex-col gap-[33px] items-center w-full"
                      orientation="vertical"
                    >
                      <div className="h-[38px] sm:h-[60px] relative w-full">
                        <div className="absolute bg-white-A700 flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-end mx-auto md:pl-10 sm:pl-5 pl-[119px] top-[0] w-full">
                          <div className="bg-white-A700 border border-blue_gray-500 border-solid h-5 w-1/4"></div>
                          <div className="bg-blue-400 h-5 w-[76%]"></div>
                        </div>
                        <Line className="absolute bg-blue_gray-500 h-[35px] left-[0] top-[0] w-px" />
                        <div className="absolute flex flex-row h-full inset-y-[0] items-start justify-start left-[0] my-auto w-1/5">
                          <Img
                            className="h-px mt-7"
                            src="images/img_line127.svg"
                            alt="line127"
                          />
                          <div className="flex flex-col items-center justify-start mt-5">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              1200(k)
                            </Text>
                          </div>
                          <Img
                            className="h-px mt-7"
                            src="images/img_line128.svg"
                            alt="line128"
                          />
                          <Line className="bg-blue_gray-500 h-[35px] mb-[3px] w-px" />
                        </div>
                        <div className="absolute flex flex-row h-full inset-y-[0] items-start justify-center left-[20%] my-auto w-1/5">
                          <Img
                            className="h-px mt-7"
                            src="images/img_line127.svg"
                            alt="line127_One"
                          />
                          <div className="flex flex-col items-center justify-start mt-5">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              1200(k)
                            </Text>
                          </div>
                          <Img
                            className="h-px mt-7"
                            src="images/img_line128.svg"
                            alt="line128_One"
                          />
                          <Line className="bg-blue_gray-500 h-[35px] mb-[3px] w-px" />
                        </div>
                      </div>
                      <div className="sm:h-[100px] h-[38px] relative w-full">
                        <div className="absolute bg-white-A700 flex sm:flex-col flex-row sm:gap-5 inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                          <div className="bg-white-A700 border border-blue_gray-500 border-solid h-5 w-1/5"></div>
                          <div className="bg-white-A700 border border-blue_gray-500 border-solid h-5 w-1/5"></div>
                          <div className="bg-blue-400 h-5 w-[61%]"></div>
                        </div>
                        <Line className="absolute bg-blue_gray-500 h-[35px] left-[0] top-[0] w-px" />
                        <div className="absolute flex flex-row h-full inset-y-[0] items-start justify-start left-[0] my-auto w-1/5">
                          <Img
                            className="h-px mt-7"
                            src="images/img_line127.svg"
                            alt="line127"
                          />
                          <div className="flex flex-col items-center justify-start mt-5">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              1200(k)
                            </Text>
                          </div>
                          <Img
                            className="h-px mt-7"
                            src="images/img_line128.svg"
                            alt="line128"
                          />
                          <Line className="bg-blue_gray-500 h-[35px] mb-[3px] w-px" />
                        </div>
                        <div className="absolute flex flex-row h-full inset-y-[0] items-start justify-center left-[20%] my-auto w-1/5">
                          <Img
                            className="h-px mt-7"
                            src="images/img_line127.svg"
                            alt="line127_One"
                          />
                          <div className="flex flex-col items-center justify-start mt-5">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              1200(k)
                            </Text>
                          </div>
                          <Img
                            className="h-px mt-7"
                            src="images/img_line128.svg"
                            alt="line128_One"
                          />
                          <Line className="bg-blue_gray-500 h-[35px] mb-[3px] w-px" />
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[24%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="md:h-[892px] h-[993px] overflow-auto relative w-full">
                      <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[10%] w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Line className="bg-blue_gray-800_01 h-px w-full" />
                          <Line className="bg-blue_gray-800_01 h-0.5 mt-[38px] w-full" />
                          <Line className="bg-blue_gray-800_01 h-px mt-[26px] w-full" />
                          <Line className="bg-blue_gray-800_01 h-px mt-[26px] w-full" />
                          <Line className="bg-blue_gray-800_01 h-px mt-[26px] w-full" />
                        </div>
                      </div>
                      <Line className="absolute bg-blue_gray-800_03 h-[480px] left-[0] top-[1%] w-px" />
                      <Line className="absolute bg-blue_gray-800_03 bottom-[0] h-[892px] right-[38%] w-px" />
                      <div className="absolute flex flex-col gap-3.5 justify-start left-[8%] top-[11%] w-[47%]">
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
                      <div className="absolute flex flex-col gap-[23px] items-center justify-start right-[15%] top-[11%] w-[14%]">
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
                      <div className="absolute flex flex-col gap-2 inset-x-[0] items-start justify-start mx-auto top-[2%] w-[85%]">
                        <Text
                          className="ml-1 md:ml-[0] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Qoldiq izlash
                        </Text>
                        <Input
                          name="group750"
                          placeholder="50"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left text-white-A700 w-full"
                          wrapClassName="flex pl-[18px] w-full"
                          suffix={
                            <div className="ml-[35px] pl-5 pr-4 rounded-tr-[3px] rounded-br-[3px] sm:w-full sm:mx-0 w-[30%] bg-red-300 py-2.5">
                              <Img
                                className="h-5 my-auto"
                                src="images/img_location.svg"
                                alt="location"
                              />
                            </div>
                          }
                        ></Input>
                      </div>
                      <Line className="absolute bg-blue_gray-800_03 h-[487px] right-[0] top-[0] w-px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[0] h-[999px] left-[0] w-[34%] sm:w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
              <div className="flex flex-col items-start justify-start w-full">
                <Line className="bg-blue_gray-800_01 h-px w-full" />
                <Line className="bg-blue_gray-800_01 h-0.5 mt-[42px] w-full" />
                <Line className="bg-blue_gray-800_01 h-px mt-[29px] w-full" />
                <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[182px] mt-[29px] w-[62%]" />
                <Line className="bg-blue_gray-800_01 h-[3px] mt-[33px] w-full" />
                <Line className="bg-blue_gray-800_01 h-px mt-[29px] w-full" />
                <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[182px] mt-[29px] w-[62%]" />
                <Line className="bg-blue_gray-800_01 h-[3px] mt-8 w-full" />
                <Line className="bg-blue_gray-800_01 h-px mt-7 w-full" />
                <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[182px] mt-[30px] w-[62%]" />
                <Line className="bg-blue_gray-800_01 h-0.5 mt-[31px] w-full" />
                <Line className="bg-blue_gray-800_01 h-px mt-7 w-full" />
                <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[182px] mt-[30px] w-[62%]" />
                <Line className="bg-blue_gray-800_01 h-0.5 mt-8 w-full" />
                <Line className="bg-blue_gray-800_01 h-px mt-[29px] w-full" />
                <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[182px] mt-[29px] w-[62%]" />
                <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[182px] mt-[30px] w-[62%]" />
                <Line className="bg-blue_gray-800_01 h-0.5 mt-[25px] w-full" />
              </div>
            </div>
            <Line className="absolute bg-blue_gray-800_03 h-[996px] inset-y-[0] left-[38%] my-auto w-px" />
            <Line className="absolute bg-blue_gray-800_03 h-[999px] inset-y-[0] my-auto right-[47%] w-px" />
            <Line className="absolute bg-blue_gray-800_03 h-[999px] inset-y-[0] my-auto right-[32%] w-px" />
            <Line className="absolute bg-blue_gray-800_03 h-[996px] inset-y-[0] my-auto right-[24%] w-px" />
            <Line className="absolute bg-blue_gray-800_03 h-[545px] right-[0] top-[0] w-px" />
            <div className="absolute flex flex-col gap-2 items-start justify-start right-[12%] top-[5%] w-[11%]">
              <div className="flex flex-col gap-[9px] items-start justify-start w-full">
                <div className="flex flex-col h-[22px] items-center justify-start w-[22px]">
                  <Text
                    className="bg-light_green-400 border border-blue_gray-500 border-solid h-[22px] justify-center px-[7px] rounded-[5px] text-[15px] text-white-A700 w-[22px]"
                    size="txtRobotoMedium15WhiteA700"
                  >
                    3
                  </Text>
                </div>
                <div className="flex flex-row gap-[7px] items-center justify-between w-full">
                  <div className="flex flex-col h-[22px] items-center justify-start w-[22px]">
                    <Text
                      className="bg-light_green-400 border border-blue_gray-500 border-solid h-[22px] justify-center px-[7px] rounded-[5px] text-[15px] text-white-A700 w-[22px]"
                      size="txtRobotoMedium15WhiteA700"
                    >
                      2
                    </Text>
                  </div>
                  <div className="flex flex-col h-[22px] items-center justify-start w-[22px]">
                    <Text
                      className="bg-orange-300 border border-blue_gray-500 border-solid h-[22px] justify-center px-[7px] rounded-[5px] text-[15px] text-white-A700 w-[22px]"
                      size="txtRobotoMedium15WhiteA700"
                    >
                      2
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col h-[22px] items-center justify-start w-[22px]">
                <Text
                  className="bg-white-A700 border border-blue_gray-500 border-solid h-[22px] justify-center px-[7px] rounded-[5px] text-[15px] text-blue_gray-500 w-[22px]"
                  size="txtRobotoMedium15Bluegray500"
                >
                  2
                </Text>
              </div>
            </div>
            <div className="absolute flex flex-col items-start justify-start left-[2%] top-[1%]">
              <Text
                className="text-[15px] text-blue_gray-500"
                size="txtRobotoMedium15Bluegray500"
              >
                Profil nomi
              </Text>
              <Text
                className="mt-[25px] text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                Aldoks(kosa) Dubmocco
              </Text>
              <Text
                className="mt-[79px] text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                Aldoks(qanot) Silver
              </Text>
              <Text
                className="mt-[73px] text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                <>Aldoks(o\&#96;rta) </>
              </Text>
              <Text
                className="mt-[75px] text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                Aldoks
              </Text>
              <Text
                className="mt-[82px] text-[15px] text-gray-400"
                size="txtRobotoMedium15Gray400"
              >
                Aldoks
              </Text>
            </div>
            <div className="absolute flex flex-col items-start justify-start right-[33%] top-[1%]">
              <Text
                className="text-[15px] text-blue_gray-500"
                size="txtRobotoMedium15Bluegray500"
              >
                <>O\&#96;lcham</>
              </Text>
              <Text
                className="mt-7 text-[15px] text-gray-400"
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
                className="mt-[21px] text-[15px] text-gray-400"
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
                className="mt-[19px] text-[15px] text-gray-400"
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
                className="mt-[31px] text-[15px] text-gray-400"
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
            <div className="absolute flex flex-col gap-7 items-center justify-start right-[26%] top-[1%] w-[7%]">
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
                  className="mt-5 text-[15px] text-gray-400"
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
                  className="mt-8 text-[15px] text-gray-400"
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
                  className="mt-[21px] text-[15px] text-gray-400"
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
            <div className="absolute flex flex-col items-start justify-start left-[40%] top-[1%] w-[11%]">
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
                className="mt-7 text-[15px] text-gray-400"
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
                className="mt-[21px] text-[15px] text-gray-400"
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
                className="mt-[19px] text-[15px] text-gray-400"
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
                className="mt-[31px] text-[15px] text-gray-400"
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
        </div>
      </div>
    </>
  );
};

export default OmborBichishvarenderThirteenPage;
