import React from "react";

import { Button, Img, Line, List, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const OmborQabultarixiBuyurtmalarroyhatiOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[949px] mx-auto relative w-full">
        <div className="h-[949px] m-auto md:px-5 w-full">
          <div className="h-[949px] m-auto w-full">
            <div className="h-[949px] m-auto w-full">
              <Img
                className="h-[949px] m-auto object-cover w-full"
                src="images/img_global1_949x1440.png"
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
              <div className="absolute bg-blue_gray-800_7e h-[177px] left-[0] top-[34%] w-[19%]"></div>
            </div>
            <div className="absolute h-[60px] inset-y-[0] left-[0] my-auto overflow-hidden w-[19%]">
              <div className="w-full h-full absolute bg-blue_gray_800_7e"></div>
              <div
                className="h-full absolute bg-red_300"
                style={{ width: "5%" }}
              ></div>
            </div>
          </div>
          <div className="absolute flex flex-col gap-7 justify-start left-[3%] top-[37%] w-[15%]">
            <div className="flex flex-row items-end justify-start w-full">
              <Img
                className="h-[27px] w-[27px]"
                src="images/img_fluentvehicle.svg"
                alt="fluentvehicle"
              />
              <Text
                className="ml-[17px] mt-1.5 text-base text-gray-400 uppercase"
                size="txtRobotoMedium16Gray400"
              >
                yangi qabuli{" "}
              </Text>
              <Img
                className="h-1 mb-[9px] ml-12 mt-3"
                src="images/img_line49.svg"
                alt="lineFortyNine"
              />
            </div>
            <div className="flex flex-col gap-10 items-start justify-start md:ml-[0] ml-[43px]">
              <Text
                className="text-blue_gray-500 text-sm"
                size="txtRobotoMedium14"
              >
                Taminot qabuli
              </Text>
              <Text
                className="text-gray-400 text-sm"
                size="txtRobotoMedium14Gray400"
              >
                Qabul tarixi
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col gap-[47px] inset-x-[0] justify-start max-w-[1357px] mx-auto md:px-5 top-[3%] w-full">
          <FrameFiftyTwoDatafiltr className="flex md:flex-col flex-row gap-[17px] items-center justify-start md:ml-[0] ml-[241px] w-[53%] md:w-full" />
          <div className="flex md:flex-col flex-row gap-[34px] items-center justify-between w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[15%] md:w-full">
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
              <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[3px] mt-[220px] w-[98%] md:w-full">
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
              <div className="flex flex-row gap-[22px] items-start justify-start ml-0.5 md:ml-[0] mt-8 w-3/4 md:w-full">
                <Img
                  className="h-[23px] w-[23px]"
                  src="images/img_calendar.svg"
                  alt="calendar"
                />
                <Text
                  className="mt-1 text-blue_gray-500 text-sm uppercase"
                  size="txtRobotoMedium14"
                >
                  YUK CHIQARISH
                </Text>
              </div>
            </div>
            <div className="bg-blue_gray-900_87_01 border border-blue_gray-800_87_02 border-solid md:h-[408px] h-[605px] sm:h-[994px] py-5 relative rounded-[5px] w-[83%] md:w-full">
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-[170px] inset-x-[0] items-start justify-start mx-auto p-[11px] top-[8%] w-full"
                style={{ backgroundImage: "url('images/img_group143.svg')" }}
              >
                <div className="flex flex-col items-start justify-start mb-0.5 md:ml-[0] ml-[11px]">
                  <Text
                    className="text-[15px] text-gray-400"
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
              </div>
              <List
                className="absolute sm:flex-col flex-row md:gap-10 gap-[86px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 left-[9%] top-[3%] w-[64%]"
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
                    Taminotchi ismi
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
              </List>
              <Img
                className="absolute h-[19px] left-[1%] top-[3%]"
                src="images/img_refresh.svg"
                alt="refresh"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OmborQabultarixiBuyurtmalarroyhatiOnePage;
