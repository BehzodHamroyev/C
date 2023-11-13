import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const OmborChiqimtarixiPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto p-[27px] sm:px-5 w-full"
          style={{
            backgroundImage: "url('images/img_showroombuyurtmalar.png')",
          }}
        >
          <div className="flex md:flex-col flex-row gap-[38px] items-start justify-between max-w-[1360px] mb-[165px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[101px] items-end justify-start md:mt-0 mt-[27px] w-[15%] md:w-full">
              <Img
                className="h-[82px]"
                src="images/img_group834.svg"
                alt="groupSeventySix"
              />
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row gap-[21px] items-start justify-start ml-0.5 md:ml-[0] w-[49%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_vector_blue_gray_500_24x24.svg"
                    alt="vector"
                  />
                  <Text
                    className="mt-0.5 text-blue_gray-500 text-sm"
                    size="txtRobotoMedium14"
                  >
                    BICHUV
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-start justify-start mt-[31px] w-full">
                  <Img
                    className="h-6"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="mt-[3px] text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    qoldiqlar ombori
                  </Text>
                </div>
                <div className="flex flex-row gap-[22px] items-start justify-start ml-0.5 md:ml-[0] mt-[29px] w-[96%] md:w-full">
                  <Img
                    className="h-[23px] w-[23px]"
                    src="images/img_vector_blue_gray_500.svg"
                    alt="vector_One"
                  />
                  <Text
                    className="mt-1 text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    mAHSULOT QABULI
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[3px] mt-[33px] w-[98%] md:w-full">
                  <Img
                    className="h-[26px] w-[26px]"
                    src="images/img_mail.svg"
                    alt="mail"
                  />
                  <Text
                    className="text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    mAHSULOT OMBORI
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[34px] items-center justify-start w-[83%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                <FrameFiftyTwoDatafiltr className="flex md:flex-col flex-row gap-[17px] items-center justify-between w-[66%] md:w-full" />
                <div className="flex flex-row items-center justify-end w-[21%] md:w-full">
                  <div className="h-[38px] relative w-[38px]">
                    <Img
                      className="h-[38px] m-auto rounded-[50%] w-[38px]"
                      src="images/img_il1588xn1_38x38.png"
                      alt="il1588xnOne"
                    />
                    <Img
                      className="absolute h-[38px] inset-[0] justify-center m-auto rounded-[50%] w-[38px]"
                      src="images/img_il1588xn2_38x38.png"
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
              <div className="bg-blue_gray-900_87_01 border border-blue_gray-600_87 border-solid flex flex-col gap-[13px] justify-start py-3.5 rounded-[5px] w-full">
                <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-start md:ml-[0] ml-[17px] w-[37%] md:w-full">
                  <Img
                    className="h-[22px]"
                    src="images/img_refresh.svg"
                    alt="refresh"
                  />
                  <Input
                    name="group727"
                    placeholder="Izlash"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-400_7e border-solid w-[91%] sm:w-full"
                    shape="round"
                    color="blue_gray_800_7e"
                    size="xl"
                    variant="fill"
                  ></Input>
                </div>
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[220px] items-start justify-end mb-[302px] p-[13px] w-full"
                  style={{ backgroundImage: "url('images/img_group112.svg')" }}
                >
                  <div className="flex md:flex-col flex-row gap-14 items-center justify-start md:ml-[0] ml-[9px] mt-1 w-[77%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-[3%] md:w-full">
                      <Img
                        className="h-[18px] md:h-auto object-cover w-[89%] sm:w-full"
                        src="images/img_.png"
                        alt="TwentyFive"
                      />
                      <Text
                        className="mt-6 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        01
                      </Text>
                      <Text
                        className="h-[18px] mt-6 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        02
                      </Text>
                      <Text
                        className="h-[18px] mt-[23px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        03
                      </Text>
                      <Text
                        className="h-[18px] mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        04
                      </Text>
                    </div>
                    <List
                      className="sm:flex-col flex-row md:gap-10 gap-[253px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[92%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Buyurtma raqami
                        </Text>
                        <Text
                          className="mt-[21px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          1020
                        </Text>
                        <Text
                          className="mt-6 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          1024
                        </Text>
                        <Text
                          className="mt-[23px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          1025
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          1026
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Summasi
                        </Text>
                        <Text
                          className="mt-[23px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          3 500 555
                        </Text>
                        <Text
                          className="mt-6 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          4 500 000
                        </Text>
                        <Text
                          className="mt-[23px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6 000 000
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          7 000 000{" "}
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Sana
                        </Text>
                        <Text
                          className="mt-[23px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          12.03.2021
                        </Text>
                        <Text
                          className="mt-6 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          12.02.2021
                        </Text>
                        <Text
                          className="mt-[23px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          12.05.2021
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          15.03.2021{" "}
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-800_7e bottom-[34%] flex flex-col gap-[19px] justify-end left-[0] md:px-5 py-[9px] w-[19%]">
          <div className="flex flex-row items-end justify-end ml-11 md:ml-[0] mr-5 mt-[19px] w-[77%] md:w-full">
            <Img
              className="h-7 w-7"
              src="images/img_fluentvehicle_white_a700.svg"
              alt="fluentvehicle"
            />
            <Text
              className="mb-0.5 ml-3.5 mt-1.5 text-base text-gray-400 uppercase"
              size="txtRobotoMedium16Gray400"
            >
              yuk chiqarish
            </Text>
            <Img
              className="h-1 ml-[37px] my-[11px]"
              src="images/img_line49.svg"
              alt="lineFortyNine"
            />
          </div>
          <div className="h-[60px] relative w-full">
            <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-center justify-center m-auto p-[17px] w-full">
              <Text
                className="mt-2 text-sm text-white-A700"
                size="txtRobotoMedium14WhiteA700"
              >
                Yuk chiqish tarixi
              </Text>
            </div>
            <Img
              className="absolute h-[60px] inset-y-[0] left-[0] my-auto object-cover w-[5%]"
              src="images/img_rectangle1564_60x13.png"
              alt="rectangle1564"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OmborChiqimtarixiPage;
