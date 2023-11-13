import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, List, Text } from "components";

const OmborBuyurtmalarroyhatiThreePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat flex flex-col font-roboto h-[900px] items-center justify-start mx-auto p-[29px] sm:px-5 w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="flex flex-col gap-8 items-center justify-start max-w-[1346px] mb-[107px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[99%] md:w-full">
            <Img
              className="common-pointer h-[33px] md:mt-0 mt-[7px] w-[33px]"
              src="images/img_arrowleft_blue_400.svg"
              alt="arrowleft"
              onClick={() => navigate(-1)}
            />
            <Text
              className="md:ml-[0] ml-[27px] md:mt-0 mt-2 text-2xl md:text-[22px] text-gray-400 sm:text-xl"
              size="txtRobotoMedium24"
            >
              № 1024{" "}
            </Text>
            <div className="flex flex-row items-end justify-end mb-0.5 md:ml-[0] ml-[957px] w-[17%] md:w-full">
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
                className="mb-[3px] ml-[11px] mt-[7px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-500"
                size="txtRobotoMedium23"
              >
                Operator
              </Text>
              <Img
                className="h-[7px] ml-[67px] my-[15px]"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
          </div>
          <div className="md:h-[1315px] h-[662px] relative w-full">
            <div className="absolute bg-blue_gray-900_87_01 flex flex-row h-full inset-[0] items-center justify-center m-auto p-2.5 rounded-[5px] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[600px] ml-[11px] w-[97%]">
                <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between w-[33%] md:w-full">
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
                <div className="flex h-[29px] justify-end md:ml-[0] ml-[825px] md:mt-0 mt-[3px] relative w-[2%] md:w-full">
                  <Img
                    className="absolute bottom-[14%] h-2.5 right-[0] w-[9px]"
                    src="images/img_save_white_a700.svg"
                    alt="save"
                  />
                  <Img
                    className="h-2.5 mb-1 ml-[5px] mt-auto w-[9px]"
                    src="images/img_vector_white_a700.svg"
                    alt="vector"
                  />
                  <Img
                    className="absolute h-[29px] inset-[0] justify-center m-auto"
                    src="images/img_file_white_a700.svg"
                    alt="file"
                  />
                </div>
                <Img
                  className="h-2.5 ml-0.5 md:ml-[0] md:mt-0 mt-[18px]"
                  src="images/img_sort.svg"
                  alt="sort"
                />
              </div>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-[301px] inset-x-[0] items-start justify-start mx-auto p-2.5 top-[9%] w-full"
              style={{ backgroundImage: "url('images/img_group228.svg')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-[43px] ml-4 md:ml-[0] w-[92%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[2%] md:w-full">
                  <Img
                    className="h-[18px] md:h-auto object-cover w-[84%] sm:w-full"
                    src="images/img_.png"
                    alt="Eighteen"
                  />
                  <Text
                    className="mt-[23px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    01
                  </Text>
                  <Text
                    className="mt-6 text-[15px] text-gray-400"
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
                    className="mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    04
                  </Text>
                  <Text
                    className="mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    05
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[101px] grid grid-cols-2 md:ml-[0] ml-[38px] w-[15%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Turi
                    </Text>
                    <Text
                      className="mt-[23px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Eshik
                    </Text>
                    <Text
                      className="mt-6 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Rom
                    </Text>
                    <Text
                      className="mt-[22px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Eshik
                    </Text>
                    <Text
                      className="mt-[26px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Rom
                    </Text>
                    <Text
                      className="mt-[26px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Rom
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[26px] items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Nomi
                    </Text>
                    <Text
                      className="text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      E-01
                    </Text>
                    <Text
                      className="text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      R-01
                    </Text>
                    <Text
                      className="text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      E-04
                    </Text>
                    <Text
                      className="text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      R-03
                    </Text>
                    <Text
                      className="text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      R-13
                    </Text>
                  </div>
                </List>
                <List
                  className="sm:flex-col flex-row md:gap-10 gap-[178px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 ml-20 md:ml-[0] w-3/5 md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Soni
                    </Text>
                    <Text
                      className="mt-[26px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      3
                    </Text>
                    <Text
                      className="mt-[26px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      2
                    </Text>
                    <Text
                      className="mt-[26px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      4
                    </Text>
                    <Text
                      className="mt-[29px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      10
                    </Text>
                    <Text
                      className="mt-[29px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      12
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Kvadrati
                    </Text>
                    <Text
                      className="mt-[26px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      4.8
                    </Text>
                    <Text
                      className="mt-[26px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      2.4
                    </Text>
                    <Text
                      className="mt-[26px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      7.2
                    </Text>
                    <Text
                      className="mt-[29px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      20
                    </Text>
                    <Text
                      className="mt-[29px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      48
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Profil turi
                    </Text>
                    <Text
                      className="mt-[26px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Aldoks
                    </Text>
                    <Text
                      className="mt-[27px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      PVH
                    </Text>
                    <Text
                      className="mt-[26px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Exclusive
                    </Text>
                    <Text
                      className="mt-[29px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Exclusive
                    </Text>
                    <Text
                      className="mt-[29px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Exclusive
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Muddati
                    </Text>
                    <Text
                      className="mt-[26px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Sen 11. 2022
                    </Text>
                    <Text
                      className="mt-[27px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Sen 12. 2022
                    </Text>
                    <Text
                      className="mt-[26px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Sen 12. 2022
                    </Text>
                    <Text
                      className="mt-[29px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Sen 12. 2022
                    </Text>
                    <Text
                      className="mt-[29px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Sen 12. 2022
                    </Text>
                  </div>
                </List>
                <div className="flex flex-col gap-[19px] justify-start md:ml-[0] ml-[60px] w-[10%] md:w-full">
                  <Text
                    className="ml-4 md:ml-[0] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Renderga
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="bg-blue-400 h-[25px] justify-center sm:px-5 px-[30px] py-0.5 rounded text-base text-center text-white-A700 w-[113px]"
                        size="txtRobotoMedium16WhiteA700"
                      >
                        Render
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-5 w-full">
                      <Text
                        className="bg-blue-400 h-[25px] justify-center sm:px-5 px-[30px] py-0.5 rounded text-base text-center text-white-A700 w-[113px]"
                        size="txtRobotoMedium16WhiteA700"
                      >
                        Render
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                      <Text
                        className="bg-blue-400 h-[25px] justify-center sm:px-5 px-[30px] py-0.5 rounded text-base text-center text-white-A700 w-[113px]"
                        size="txtRobotoMedium16WhiteA700"
                      >
                        Render
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[18px] w-full">
                      <Text
                        className="bg-blue-400 h-[25px] justify-center sm:px-5 px-[30px] py-0.5 rounded text-base text-center text-white-A700 w-[113px]"
                        size="txtRobotoMedium16WhiteA700"
                      >
                        Render
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-5 w-full">
                      <Text
                        className="bg-blue-400 h-[25px] justify-center sm:px-5 px-[30px] py-0.5 rounded text-base text-center text-white-A700 w-[113px]"
                        size="txtRobotoMedium16WhiteA700"
                      >
                        Render
                      </Text>
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

export default OmborBuyurtmalarroyhatiThreePage;
