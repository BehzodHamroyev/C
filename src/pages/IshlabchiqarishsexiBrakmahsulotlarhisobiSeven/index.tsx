import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const IshlabchiqarishsexiBrakmahsulotlarhisobiSevenPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[1055px] mx-auto pb-[155px] relative w-full">
        <Img
          className="h-[900px] mx-auto object-cover w-full"
          src="images/img_showroombuyurtmalar.png"
          alt="globalOne"
        />
        <div className="absolute h-[60px] left-[0] md:px-5 top-[41%] w-1/5">
          <div className="absolute h-[60px] inset-[0] justify-center m-auto w-full">
            <div className="bg-blue_gray-800_7e h-[60px] m-auto w-full"></div>
            <div className="absolute flex flex-row gap-[21px] h-max inset-y-[0] items-start justify-start left-[10%] my-auto w-[64%]">
              <Img
                className="h-6 w-6"
                src="images/img_mdicircularsaw.svg"
                alt="mdicircularsaw"
              />
              <Text
                className="mt-[3px] text-base text-white-A700 uppercase"
                size="txtRobotoMedium16WhiteA700"
              >
                Brak mahsulot
              </Text>
            </div>
          </div>
          <div className="absolute bg-red-300 h-[60px] inset-y-[0] left-[0] my-auto w-[6%]"></div>
        </div>
        <Img
          className="absolute h-[82px] left-[3%] top-[5%]"
          src="images/img_group834.svg"
          alt="groupSeventySix"
        />
        <div className="absolute flex flex-col gap-[21px] justify-start md:px-5 right-[0] top-[3%] w-[81%]">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[157px] items-start justify-start md:ml-[0] ml-[7px] w-[94%] md:w-full">
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
          <div className="flex md:flex-col flex-row gap-4 items-start justify-between w-full">
            <div className="h-[640px] md:h-[938px] relative w-[99%] md:w-full">
              <div className="absolute bg-blue_gray-900_87_01 flex md:flex-col flex-row md:gap-10 h-full inset-[0] items-start justify-between m-auto p-[21px] sm:px-5 rounded-[5px] w-full">
                <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-start md:ml-[0] ml-[3px] md:mt-0 mt-1">
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
                <Button
                  className="cursor-pointer font-medium mb-[550px] min-w-[201px] mr-[26px] rounded-[5px] text-center text-sm tracking-[0.14px] uppercase"
                  shape="round"
                  color="blue_gray_900"
                  size="md"
                  variant="fill"
                >
                  <>Mahsulot qo\&#96;shish</>
                </Button>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-[299px] inset-x-[0] items-start justify-start mx-auto p-2 top-[15%] w-full"
                style={{ backgroundImage: "url('images/img_group271.svg')" }}
              >
                <div className="flex md:flex-col flex-row gap-[57px] items-center justify-start mb-[3px] ml-3.5 md:ml-[0] w-[66%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[3%] md:w-full">
                    <Img
                      className="h-[18px] md:h-auto object-cover w-[89%] sm:w-full"
                      src="images/img_.png"
                      alt="TwoHundredFortyFive"
                    />
                    <Text
                      className="mt-[23px] text-[15px] text-gray-400"
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
                      className="mt-[23px] text-[15px] text-gray-400"
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
                    <Text
                      className="h-[18px] mt-[26px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      05
                    </Text>
                    <Text
                      className="h-[18px] mt-[26px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      06
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[148px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 w-[90%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Ismi
                      </Text>
                      <Text
                        className="mt-6 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Abdullayev M.
                      </Text>
                      <Text
                        className="mt-[22px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Umarov F.
                      </Text>
                      <Text
                        className="mt-6 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Fayziyev B.
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Qaysarov M.
                      </Text>
                      <Text
                        className="mt-6 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Odilov A.
                      </Text>
                      <Text
                        className="mt-7 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Ergashev M.
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Brak summasi
                      </Text>
                      <Text
                        className="mt-[23px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        20 000
                      </Text>
                      <Text
                        className="mt-6 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        30 000
                      </Text>
                      <Text
                        className="mt-[23px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        15 000
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        30 000
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        150 000
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        500 000
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
                        02.03.2021
                      </Text>
                      <Text
                        className="mt-6 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        02.03.2021
                      </Text>
                      <Text
                        className="mt-[23px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        02.03.2021
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        02.03.2021
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        02.03.2021
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        02.03.2021
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
            <div className="h-[770px] md:mt-0 mt-[17px] relative w-[1%] md:w-full">
              <Line className="bg-blue_gray-800 h-[770px] m-auto w-[5px]" />
              <Line className="absolute bg-blue_gray-500 bottom-[6%] h-[172px] inset-x-[0] mx-auto rounded-sm w-[5px]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IshlabchiqarishsexiBrakmahsulotlarhisobiSevenPage;
