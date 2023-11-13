import React from "react";

import { Img, Input, Line, List, Text } from "components";

const OmborQabultarixiBuyurtmalartarkibiPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[1046px] mx-auto pb-[146px] relative w-full">
        <Img
          className="h-[900px] mx-auto object-cover w-full"
          src="images/img_showroombuyurtmalar.png"
          alt="globalOne"
        />
        <div className="absolute flex flex-col inset-x-[0] items-end justify-start max-w-[1332px] mx-auto md:px-5 top-[3%] w-full">
          <div className="flex flex-row items-center justify-end w-[17%] md:w-full">
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
          <div className="flex flex-col items-center justify-start mt-[54px]">
            <Text
              className="text-base text-white-A700"
              size="txtRobotoMedium16WhiteA700"
            >
              Profil
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start mt-[9px] w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-blue_gray-900_87_01 border border-blue_gray-600_87 border-solid flex flex-col items-center justify-end pt-3 rounded-[5px] w-full">
                <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[96%] md:w-full">
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
                    <Input
                      name="buttonadd"
                      placeholder="mahsulot Qo&#96;shish"
                      className="font-medium p-0 placeholder:text-blue-400 text-center text-sm tracking-[0.14px] uppercase w-full"
                      wrapClassName="border border-blue_gray-600 border-solid flex rounded-[5px] md:w-full"
                      suffix={
                        <div className="h-6 ml-[26px] w-6 bg-blue_gray-500 p-1.5 rounded flex justify-center items-center">
                          <Img
                            className="h-[11px] my-auto"
                            src="images/img_plus_red_300.svg"
                            alt="plus"
                          />
                        </div>
                      }
                      shape="round"
                      color="blue_gray_900"
                      size="md"
                      variant="fill"
                    ></Input>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[300px] items-start justify-start p-[13px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group266.svg')",
                    }}
                  >
                    <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mb-10 md:ml-[0] ml-[38px] w-[42%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-[4%] sm:w-full">
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[89%] sm:w-full"
                          src="images/img_.png"
                          alt="TwentyThree"
                        />
                        <Text
                          className="mt-8 text-[15px] text-gray-400"
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
                        className="sm:flex-col flex-row md:gap-10 gap-[77px] grid grid-cols-3 sm:ml-[0] ml-[83px] w-[62%] sm:w-full"
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
                            kosa
                          </Text>
                          <Text
                            className="mt-[22px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            qanot
                          </Text>
                          <Text
                            className="mt-[13px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            kosa
                          </Text>
                          <Text
                            className="mt-[21px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            kosa
                          </Text>
                          <Text
                            className="mt-[25px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            qanot
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
                      <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[77px] w-[6%] sm:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-[15px] text-blue_gray-500"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            Soni
                          </Text>
                          <Text
                            className="mt-[41px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            20
                          </Text>
                          <Text
                            className="mt-5 text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            3
                          </Text>
                          <Text
                            className="mt-[15px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            2
                          </Text>
                          <Text
                            className="mt-[21px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            10
                          </Text>
                          <Text
                            className="mt-[23px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            20
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Text
              className="md:ml-[0] ml-[11px] mt-[23px] text-base text-white-A700"
              size="txtRobotoMedium16WhiteA700"
            >
              Aksesuarlar
            </Text>
            <div className="flex flex-col items-center justify-start mt-[9px] w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[318px] items-center justify-start rounded-[5px] w-full"
                style={{
                  backgroundImage:
                    "url('images/img_group732_blue_gray_900.svg')",
                }}
              >
                <div className="h-[318px] relative w-full">
                  <div className="h-[318px] m-auto w-full">
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
                    <Line className="absolute bg-blue_gray-800_03 h-[318px] inset-y-[0] left-[9%] my-auto w-px" />
                  </div>
                  <Line className="absolute bg-blue_gray-800_03 h-[318px] inset-y-[0] left-[27%] my-auto w-px" />
                  <Line className="absolute bg-blue_gray-800_03 h-[318px] inset-y-[0] left-[20%] my-auto w-px" />
                  <Line className="absolute bg-blue_gray-800_03 h-[318px] inset-y-[0] left-[40%] my-auto w-px" />
                  <Line className="absolute bg-blue_gray-800_03 h-[318px] inset-[0] justify-center m-auto w-px" />
                  <Line className="absolute bg-blue_gray-800_03 h-[318px] inset-y-[0] my-auto right-[45%] w-px" />
                  <div className="absolute flex flex-row items-end justify-between left-[4%] top-[1%] w-[13%]">
                    <div className="flex flex-col items-center justify-start mt-[82px]">
                      <Text
                        className="text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        01
                      </Text>
                      <Text
                        className="mt-[38px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        01
                      </Text>
                      <Text
                        className="mt-[30px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        01
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        01
                      </Text>
                    </div>
                    <div className="flex flex-col gap-6 justify-start w-3/5">
                      <Text
                        className="mr-4 text-[15px] text-blue_gray-500 text-center w-[83%] sm:w-full"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Aksesuar nomi
                      </Text>
                      <div className="flex flex-col items-start justify-start ml-10 md:ml-[0]">
                        <Text
                          className="md:ml-[0] ml-[3px] text-[15px] text-center text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Stublina
                        </Text>
                        <Text
                          className="mt-[35px] text-[15px] text-center text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Stublina
                        </Text>
                        <Text
                          className="mt-[30px] text-[15px] text-center text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Stublina
                        </Text>
                        <Text
                          className="mt-7 text-[15px] text-center text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Stublina
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex flex-col items-start justify-start left-[21%] top-[8%]">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      {" "}
                      Turi
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[43px] text-[15px] text-center text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Eshik
                    </Text>
                    <Text
                      className="ml-1.5 md:ml-[0] mt-9 text-[15px] text-center text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Rom
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] mt-[30px] text-[15px] text-center text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Eshik
                    </Text>
                    <Text
                      className="ml-1.5 md:ml-[0] mt-7 text-[15px] text-center text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Rom
                    </Text>
                  </div>
                  <div className="absolute flex flex-col items-start justify-start left-[31%] top-[5%]">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      <>O\&#96;rni</>
                    </Text>
                    <Text
                      className="ml-0.5 md:ml-[0] mt-[53px] text-[15px] text-center text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Oshiq-moshiq
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[26px] mt-[35px] text-[15px] text-center text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Dastak
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[26px] mt-8 text-[15px] text-center text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Dastak
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[26px] mt-[26px] text-[15px] text-center text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Dastak
                    </Text>
                  </div>
                  <div className="absolute flex flex-col items-start justify-start left-[41%] top-[6%]">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Rangi
                    </Text>
                    <Text
                      className="mt-[50px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Golden
                    </Text>
                    <Text
                      className="mt-9 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Golden
                    </Text>
                    <Text
                      className="mt-8 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Golden
                    </Text>
                    <Text
                      className="mt-7 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Golden
                    </Text>
                  </div>
                  <div className="absolute flex flex-col items-start justify-start right-[46%] top-[5%]">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Soni
                    </Text>
                    <Text
                      className="mt-[52px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      6
                    </Text>
                    <Text
                      className="mt-[37px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      6
                    </Text>
                    <Text
                      className="mt-[30px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      6
                    </Text>
                    <Text
                      className="mt-7 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      6
                    </Text>
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

export default OmborQabultarixiBuyurtmalartarkibiPage;
