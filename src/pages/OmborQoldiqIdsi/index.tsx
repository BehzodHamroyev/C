import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";

const OmborQoldiqIdsiPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat flex flex-col font-roboto h-[900px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="flex flex-col gap-9 items-center justify-start max-w-[1413px] mb-[23px] mt-[27px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[94%] md:w-full">
            <Img
              className="common-pointer h-[33px] md:mt-0 mt-[7px] w-[33px]"
              src="images/img_arrowleft_blue_400.svg"
              alt="arrowleft"
              onClick={() => navigate(-1)}
            />
            <Text
              className="md:ml-[0] ml-[27px] md:mt-0 mt-[9px] text-2xl md:text-[22px] text-gray-400 sm:text-xl"
              size="txtRobotoMedium24"
            >
              № 1024{" "}
            </Text>
            <div className="flex flex-row items-center justify-end mb-0.5 md:ml-[0] ml-[957px] w-[17%] md:w-full">
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
          <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start w-[98%] md:w-full">
              <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-start pr-0.5 py-0.5 rounded-[5px] w-full">
                <div className="flex flex-col items-center justify-start mb-[346px] mt-[25px] w-full">
                  <div className="flex flex-col gap-[22px] items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row gap-[15px] items-start justify-start w-[94%] md:w-full">
                      <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between md:mt-0 mt-1 w-[33%] md:w-full">
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
                      <div className="flex flex-row sm:gap-10 items-start justify-between w-[67%] md:w-full">
                        <Button
                          className="border border-blue_gray-400_87 border-solid flex h-10 items-center justify-center mt-1 w-10"
                          shape="circle"
                          color="blue_gray_800_87_01"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            src="images/img_jamrefresh_blue_400.svg"
                            alt="jamrefresh"
                          />
                        </Button>
                        <Button
                          className="cursor-pointer font-medium mb-1 min-w-[201px] rounded-[5px] text-center text-sm tracking-[0.14px] uppercase"
                          shape="round"
                          color="blue_gray_900"
                          size="sm"
                          variant="fill"
                        >
                          Qabul qilish
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="h-[300px] relative w-full">
                        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Line className="bg-blue_gray-800_06 h-px w-full" />
                            <div className="flex flex-col items-center justify-start mt-14 w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <Line className="bg-blue_gray-800_06 h-0.5 w-full" />
                                <Line className="bg-blue_gray-800_06 h-px mt-[47px] w-full" />
                                <Line className="bg-blue_gray-800_06 h-px mt-[33px] w-full" />
                                <Line className="bg-blue_gray-800_06 h-px mt-[37px] w-full" />
                                <Line className="bg-blue_gray-800_06 h-px mt-[37px] w-full" />
                              </div>
                            </div>
                            <Line className="bg-blue_gray-800_06 h-px mt-[41px] w-full" />
                          </div>
                        </div>
                        <Line className="absolute bg-blue_gray-800_03 h-[300px] inset-y-[0] left-[6%] my-auto w-px" />
                        <Line className="absolute bg-blue_gray-800_03 h-[300px] inset-y-[0] left-[19%] my-auto w-px" />
                        <Line className="absolute bg-blue_gray-800_03 h-[300px] inset-y-[0] left-[29%] my-auto w-px" />
                        <Line className="absolute bg-blue_gray-800_03 h-[300px] inset-y-[0] left-[45%] my-auto w-px" />
                        <Line className="absolute bg-blue_gray-800_03 h-[300px] inset-y-[0] my-auto right-[39%] w-px" />
                        <Line className="absolute bg-blue_gray-800_03 h-[300px] inset-y-[0] my-auto right-[28%] w-px" />
                        <div className="absolute flex flex-col gap-[34px] items-end justify-start right-[21%] top-[5%] w-[6%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Text
                                className="text-[15px] text-blue_gray-500"
                                size="txtRobotoMedium15Bluegray500"
                              >
                                Qabul qilish
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-[71%] md:w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <Text
                                className="bg-gray-900 h-6 justify-center pl-[19px] sm:pr-5 pr-7 py-0.5 rounded-[3px] text-base text-white-A700 w-[55px]"
                                size="txtRobotoMedium16WhiteA700"
                              >
                                1
                              </Text>
                            </div>
                            <div className="flex flex-col items-center justify-start mt-5 w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <Text
                                  className="bg-gray-900 h-6 justify-center pl-[19px] sm:pr-5 pr-[26px] py-0.5 rounded-[3px] text-base text-white-A700 w-[55px]"
                                  size="txtRobotoMedium16WhiteA700"
                                >
                                  3
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start mt-2.5 w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <Text
                                  className="bg-gray-900 h-6 justify-center pl-[19px] sm:pr-5 pr-[26px] py-0.5 rounded-[3px] text-base text-white-A700 w-[55px]"
                                  size="txtRobotoMedium16WhiteA700"
                                >
                                  5
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-[31%] flex flex-col items-center justify-start right-[24%] w-[18px]">
                          <div className="flex flex-col items-center justify-start w-[18px] md:w-full">
                            <div className="flex flex-col items-center justify-start w-[18px] md:w-full">
                              <Text
                                className="text-base text-white-A700"
                                size="txtRobotoMedium16WhiteA700"
                              >
                                50
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-[30%] flex flex-col items-center justify-start right-[22%] w-[4%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="bg-gray-900 h-6 justify-center pl-[19px] sm:pr-5 pr-7 py-0.5 rounded-[3px] text-base text-white-A700 w-[55px]"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              1
                            </Text>
                          </div>
                        </div>
                        <div className="absolute bottom-[16%] flex flex-col items-center justify-start right-[22%] w-[4%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Text
                              className="bg-gray-900 h-6 justify-center pl-[19px] sm:pr-5 pr-[26px] py-0.5 rounded-[3px] text-base text-white-A700 w-[55px]"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              3
                            </Text>
                          </div>
                        </div>
                        <div className="absolute flex flex-col items-start justify-start left-[7%] top-[4%]">
                          <Text
                            className="text-[15px] text-blue_gray-500"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            Profil nomi
                          </Text>
                          <Text
                            className="mt-[41px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Aldoks
                          </Text>
                          <Text
                            className="mt-5 text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Aldoks
                          </Text>
                          <Text
                            className="mt-[15px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Aldoks
                          </Text>
                          <Text
                            className="mt-[21px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Aldoks
                          </Text>
                          <Text
                            className="mt-[23px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Aldoks
                          </Text>
                        </div>
                        <div className="absolute flex flex-col items-start justify-start left-[22%] top-[5%]">
                          <Text
                            className="text-[15px] text-blue_gray-500"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            Artikul
                          </Text>
                          <Text
                            className="mt-[41px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            0601
                          </Text>
                          <Text
                            className="mt-5 text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            0602
                          </Text>
                          <Text
                            className="mt-[15px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            0603
                          </Text>
                          <Text
                            className="mt-[21px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            0604
                          </Text>
                          <Text
                            className="mt-[23px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            0605
                          </Text>
                        </div>
                        <div className="absolute flex flex-col items-start justify-start left-[32%] top-[5%]">
                          <Text
                            className="text-[15px] text-blue_gray-500"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            Rangi
                          </Text>
                          <Text
                            className="mt-[39px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Dub mocco
                          </Text>
                          <Text
                            className="mt-5 text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Dub mocco
                          </Text>
                          <Text
                            className="mt-[17px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Rangsiz
                          </Text>
                          <Text
                            className="mt-[21px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Rangsiz
                          </Text>
                          <Text
                            className="mt-[23px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Rangsiz
                          </Text>
                        </div>
                        <div className="absolute flex flex-col items-center justify-start right-[46%] top-[5%] w-[5%]">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              <>O\&#96;lchami</>
                            </Text>
                            <Text
                              className="mt-[41px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              1600
                            </Text>
                            <Text
                              className="mt-5 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              1500
                            </Text>
                            <Text
                              className="mt-[15px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              1800
                            </Text>
                            <Text
                              className="mt-[21px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              1900
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              2500
                            </Text>
                          </div>
                        </div>
                        <div className="absolute flex flex-col items-center justify-start right-[31%] top-[5%] w-[7%]">
                          <div className="flex flex-col gap-[42px] justify-start w-full">
                            <Text
                              className="ml-7 md:ml-[0] text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              Id
                            </Text>
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                1600(kosa)
                              </Text>
                              <Text
                                className="mt-5 text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                1500(kosa)
                              </Text>
                              <Text
                                className="mt-[15px] text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                1800(qanot)
                              </Text>
                              <Text
                                className="mt-[21px] text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                1900(kosa)
                              </Text>
                              <Text
                                className="mt-[23px] text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                2500(kosa)
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="absolute flex flex-col items-start justify-start left-[2%] top-[4%] w-[2%]">
                          <Img
                            className="h-[18px] md:h-auto object-cover w-[89%] sm:w-full"
                            src="images/img_.png"
                            alt="TwentyOne"
                          />
                          <Text
                            className="mt-[42px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            01
                          </Text>
                          <Text
                            className="mt-5 text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            02
                          </Text>
                          <Text
                            className="mt-[15px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            03
                          </Text>
                          <Text
                            className="mt-[21px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            04
                          </Text>
                          <Text
                            className="mt-[23px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            05
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-800_06 h-px w-full" />
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
      </div>
    </>
  );
};

export default OmborQoldiqIdsiPage;
