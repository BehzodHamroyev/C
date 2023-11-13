import React from "react";

import { Img, Input, Line, List, Text } from "components";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const OmborTaminotchigazayavkaPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[936px] mx-auto pb-9 relative w-full">
        <Img
          className="h-[899px] m-auto object-cover w-full"
          src="images/img_global1_899x1440.png"
          alt="globalOne"
        />
        <div className="absolute flex md:flex-col flex-row gap-6 inset-x-[0] items-start justify-between max-w-[1403px] mx-auto md:px-5 top-[2%] w-full">
          <div className="flex md:flex-1 flex-col gap-2.5 items-center justify-start mb-2.5 w-[98%] md:w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="text-2xl md:text-[22px] text-gray-400 sm:text-xl"
                  size="txtRobotoMedium24"
                >
                  TAminotchiga buyurtma
                </Text>
              </div>
              <div className="flex flex-row items-center justify-end sm:mt-0 mt-2 w-[17%] sm:w-full">
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
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                <div className="h-12 md:h-[47px] relative rounded-[5px] shadow-bs4 w-[26%] md:w-full">
                  <div className="absolute bg-blue_gray-900_87_01 flex flex-col h-max inset-[0] items-start justify-center m-auto sm:px-5 px-[30px] w-full">
                    <OmborTaminotchigaZayavkaOneTab
                      className="flex flex-col items-center justify-start w-[121px]"
                      username="omborga"
                    />
                  </div>
                  <div className="absolute bg-blue_gray-900_87_01 h-[47px] inset-y-[0] my-auto right-[0] w-[47%]"></div>
                  <OmborTaminotchigaZayavkaOneTab
                    className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[0] shadow-bs2 w-[164px]"
                    username="Taminotchiga"
                  />
                </div>
                <Input
                  name="tabbarfixed"
                  placeholder="chop etish"
                  className="font-medium p-0 placeholder:text-blue-400 text-center text-sm tracking-[0.14px] uppercase w-full"
                  wrapClassName="flex md:flex-1 md:ml-[0] ml-[596px] md:mt-0 mt-[7px] rounded-[5px] shadow-bs w-[15%] md:w-full"
                  suffix={
                    <Img
                      className="h-[30px] ml-[31px] my-auto"
                      src="images/img_flatcoloriconsprint.svg"
                      alt="flat-color-icons:print"
                    />
                  }
                  shape="round"
                  color="blue_gray_900"
                  size="sm"
                  variant="fill"
                ></Input>
                <Input
                  name="tabbarfixed_One"
                  placeholder="Excelga olish"
                  className="font-medium p-0 placeholder:text-blue-400 text-center text-sm tracking-[0.14px] uppercase w-full"
                  wrapClassName="flex md:flex-1 md:ml-[0] ml-[19px] md:mt-0 mt-[7px] rounded-[5px] shadow-bs w-[15%] md:w-full"
                  suffix={
                    <Img
                      className="ml-[18px] my-auto"
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
              <Text
                className="md:ml-[0] ml-[15px] mt-[38px] text-base text-white-A700"
                size="txtRobotoMedium16WhiteA700"
              >
                Profillar
              </Text>
              <div className="flex flex-col gap-[17px] justify-start mt-2.5 w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="h-[300px] md:h-[999px] relative w-full">
                    <div className="bg-blue_gray-900_87_01 h-[300px] m-auto rounded-[5px] w-full"></div>
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[13px] w-full"
                      style={{
                        backgroundImage:
                          "url('images/img_group92_blue_gray_800_01.svg')",
                      }}
                    >
                      <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mb-10 md:ml-[0] ml-[11px] w-[91%] md:w-full">
                        <div className="flex flex-col items-start justify-start md:mt-0 mt-[59px]">
                          <Text
                            className="text-[15px] text-gray-400"
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
                        <List
                          className="sm:flex-col flex-row md:gap-10 gap-[409px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:ml-[0] ml-[43px] w-[71%] md:w-full"
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
                          <div className="flex flex-col items-start justify-start w-full">
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
                          <div className="flex flex-col items-start justify-start w-full">
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
                        </List>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[242px] w-[5%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              Butun
                            </Text>
                            <Text
                              className="mt-[41px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              6000 x3
                            </Text>
                            <Text
                              className="mt-5 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              6000 x 2
                            </Text>
                            <Text
                              className="mt-[15px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              6000 x 2
                            </Text>
                            <Text
                              className="mt-[21px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              6000 x 4
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              6000 x 1
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Text
                  className="md:ml-[0] ml-[25px] text-base text-white-A700"
                  size="txtRobotoMedium16WhiteA700"
                >
                  Aksesuarlar
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mt-4 w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[318px] items-center justify-start rounded-[5px] w-full"
                  style={{ backgroundImage: "url('images/img_group732.svg')" }}
                >
                  <div className="md:h-[2864px] h-[318px] relative w-full">
                    <div className="absolute bottom-[14%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                      <div className="flex flex-col gap-[45px] items-center justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <Line className="bg-blue_gray-800_01 h-0.5 w-full" />
                            <Line className="bg-blue_gray-800_01 h-px mt-[54px] w-full" />
                            <Line className="bg-blue_gray-800_01 h-px mt-[52px] w-full" />
                            <Line className="bg-blue_gray-800_01 h-px mt-[47px] w-full" />
                          </div>
                        </div>
                        <Line className="bg-blue_gray-800_01 h-px w-full" />
                      </div>
                    </div>
                    <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto w-[99%]">
                      <div className="flex flex-col items-center justify-start md:mt-0 mt-[86px]">
                        <Text
                          className="text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          01
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-800_03 h-[318px] md:h-px md:ml-[0] ml-[23px] md:w-full w-px" />
                      <div className="flex flex-col gap-11 justify-start md:ml-[0] ml-[18px] md:mt-0 mt-[25px] w-[8%] md:w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500 text-center"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Aksesuar nomi
                        </Text>
                        <div className="flex flex-col items-center justify-start ml-4 md:ml-[0]">
                          <Text
                            className="text-[15px] text-center text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Eshik
                          </Text>
                          <Text
                            className="mt-9 text-[15px] text-center text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Rom
                          </Text>
                          <Text
                            className="mt-[30px] text-[15px] text-center text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Eshik
                          </Text>
                          <Text
                            className="mt-7 text-[15px] text-center text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Rom
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-800_03 h-[318px] md:h-px ml-11 md:ml-[0] md:w-full w-px" />
                      <div className="flex flex-col gap-[43px] justify-start md:ml-[0] ml-[21px] md:mt-0 mt-[26px] w-[4%] md:w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          {" "}
                          Turi
                        </Text>
                        <div className="flex flex-col items-center justify-start ml-2 md:ml-[0]">
                          <Text
                            className="text-[15px] text-center text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Eshik
                          </Text>
                          <Text
                            className="mt-9 text-[15px] text-center text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Rom
                          </Text>
                          <Text
                            className="mt-[30px] text-[15px] text-center text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Eshik
                          </Text>
                          <Text
                            className="mt-7 text-[15px] text-center text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            Rom
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-800_03 h-[318px] md:h-px md:ml-[0] ml-[66px] md:w-full w-px" />
                      <div className="flex flex-col gap-[53px] items-start justify-start md:ml-[0] ml-[29px] md:mt-0 mt-4">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          <>O\&#96;rni</>
                        </Text>
                        <Text
                          className="text-[15px] text-center text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Oshiq-moshiq
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-800_03 h-[318px] md:h-px md:ml-[0] ml-[168px] md:w-full w-px" />
                      <div className="flex flex-col gap-[50px] items-start justify-start ml-5 md:ml-[0] md:mt-0 mt-[18px]">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Rangi
                        </Text>
                        <Text
                          className="text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Golden
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-800_03 h-[318px] md:h-px md:ml-[0] ml-[87px] md:w-full w-px" />
                      <div className="flex flex-col gap-[52px] items-center justify-start ml-2.5 md:ml-[0] md:mt-0 mt-4">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Soni
                        </Text>
                        <Text
                          className="text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          4
                        </Text>
                      </div>
                      <Line className="bg-blue_gray-800_03 h-[318px] md:h-px md:ml-[0] ml-[524px] md:w-full w-px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[770px] md:mt-0 mt-[84px] relative w-[1%] md:w-full">
            <Line className="bg-blue_gray-800 h-[770px] m-auto w-[5px]" />
            <Line className="absolute bg-blue_gray-500 bottom-[6%] h-[172px] inset-x-[0] mx-auto rounded-sm w-[5px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OmborTaminotchigazayavkaPage;
