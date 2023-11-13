import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const IshlabchiqarishsexiBrakmahsulotlarhisobiFivePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[1055px] mx-auto pb-[137px] relative w-full">
        <div className="sm:h-[2150px] md:h-[4427px] h-[918px] mx-auto md:px-5 w-full">
          <div className="absolute md:h-[4427px] h-[900px] inset-[0] justify-center m-auto w-full">
            <Img
              className="h-[900px] m-auto object-cover w-full"
              src="images/img_showroombuyurtmalar.png"
              alt="globalOne"
            />
            <div className="absolute flex md:flex-col flex-row gap-[18px] h-max inset-[0] items-start justify-between m-auto w-[97%]">
              <div className="flex flex-col md:gap-10 gap-[174px] justify-start md:mt-0 mt-7 w-[16%] md:w-full">
                <Img
                  className="h-[82px] md:ml-[0] ml-[5px]"
                  src="images/img_group834.svg"
                  alt="groupSeventySix"
                />
                <div className="flex flex-col gap-[35px] justify-start w-full">
                  <div className="flex flex-row gap-[31px] items-start justify-start w-full">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="images/img_arrowdown_blue_gray_500.svg"
                      alt="arrowdown"
                    />
                    <Text
                      className="text-base text-blue_gray-500 uppercase"
                      size="txtRobotoMedium16"
                    >
                      yangi BUYURTMALAR
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[22px] items-center justify-start md:ml-[0] ml-[5px] w-4/5 md:w-full">
                    <Img
                      className="h-[19px] w-[19px]"
                      src="images/img_ticket.svg"
                      alt="ticket"
                    />
                    <Text
                      className="text-base text-blue_gray-500 uppercase"
                      size="txtRobotoMedium16"
                    >
                      narx belgilash
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[26px] items-start justify-start w-[84%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-10 gap-[164px] items-start justify-start w-[95%] md:w-full">
                  <FrameFiftyTwoDatafiltr className="flex md:flex-col flex-row gap-[17px] items-center justify-between w-[65%] md:w-full" />
                  <div className="flex flex-row items-center justify-end w-[21%] md:w-full">
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
                      alt="arrowdown_One"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[3px] w-full">
                  <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-end justify-start mb-[685px] p-[13px] rounded-[5px] w-[24%] md:w-full">
                    <div className="flex flex-col items-center justify-start my-1 w-[79%] md:w-full">
                      <div className="flex flex-col gap-2.5 justify-start w-full">
                        <Text
                          className="md:ml-[0] ml-[18px] text-blue_gray-500 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Umumiy haqdorlik
                        </Text>
                        <div className="flex flex-row gap-3 items-end justify-between w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-blue-400"
                            size="txtRobotoMedium28Blue400"
                          >
                            30 100 000
                          </Text>
                          <Text
                            className="mb-1 mt-2.5 text-[15px] text-blue-400"
                            size="txtRobotoMedium15Blue400"
                          >
                            <>so\&#96;m</>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-center justify-end mb-[685px] p-[15px] rounded-[5px] w-[24%] md:w-full">
                    <div className="flex flex-col gap-3.5 justify-start w-[84%] md:w-full">
                      <div className="flex flex-col items-center justify-start mr-[23px]">
                        <Text
                          className="text-blue_gray-500 text-sm"
                          size="txtRobotoMedium14"
                        >
                          <>Akfadan o\&#96;tkazma summasi</>
                        </Text>
                      </div>
                      <div className="flex flex-row gap-[5px] items-end justify-end md:ml-[0] ml-[34px] w-[83%] md:w-full">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-light_green-400"
                          size="txtRobotoMedium28"
                        >
                          7 190 000
                        </Text>
                        <Text
                          className="mb-[3px] mt-[11px] text-[15px] text-light_green-400"
                          size="txtRobotoMedium15"
                        >
                          <>so\&#96;m</>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-center justify-end mb-[685px] p-[18px] rounded-[5px] w-[24%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[78%] md:w-full">
                      <div className="flex flex-col gap-[9px] justify-start w-full">
                        <Text
                          className="md:ml-[0] ml-[25px] text-blue_gray-500 text-sm"
                          size="txtRobotoMedium14"
                        >
                          <>Qoldiq to\&#96;lov</>
                        </Text>
                        <div className="flex flex-row items-end justify-evenly w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-red-300"
                            size="txtRobotoMedium28Red300"
                          >
                            22 910 000
                          </Text>
                          <Text
                            className="mb-[3px] mt-[11px] text-[15px] text-red-300"
                            size="txtRobotoMedium15Red300"
                          >
                            <>so\&#96;m</>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-300 h-24 md:h-[758px] mb-[685px] p-1 relative rounded-[5px] w-[24%] md:w-full">
                    <div className="bg-blue_gray-800_03 h-[21px] mx-auto rounded-[5px] w-[48%]"></div>
                    <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[4%] w-[70%]">
                      <div className="flex flex-col gap-[18px] items-center justify-start w-full">
                        <Text
                          className="text-lg text-white-A700 tracking-[4.23px]"
                          size="txtRobotoMedium18WhiteA700"
                        >
                          KASSADA
                        </Text>
                        <div className="flex flex-row gap-[11px] items-end justify-between w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-800_03"
                            size="txtRobotoMedium28Bluegray80003"
                          >
                            82 910 000
                          </Text>
                          <Text
                            className="mb-[3px] mt-[11px] text-[15px] text-blue_gray-800_03"
                            size="txtRobotoMedium15Bluegray80003"
                          >
                            <>so\&#96;m</>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[770px] md:mt-0 mt-3 relative w-[1%] md:w-full">
                    <Line className="bg-blue_gray-800 h-[770px] m-auto w-[5px]" />
                    <Line className="absolute bg-blue_gray-500 bottom-[6%] h-[172px] inset-x-[0] mx-auto rounded-sm w-[5px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-blue_gray-900_87_01 bottom-[0] flex flex-col gap-[34px] justify-start right-[3%] rounded-[5px] w-[79%]">
            <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-start ml-5 md:ml-[0] mt-[26px] w-[37%] md:w-full">
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
              className="bg-cover bg-no-repeat flex flex-col h-[515px] items-start justify-start mb-[83px] p-[13px] w-full"
              style={{ backgroundImage: "url('images/img_group216.svg')" }}
            >
              <div className="flex sm:flex-col flex-row sm:gap-10 gap-[220px] items-center justify-start md:ml-[0] ml-[9px] w-[70%] md:w-full">
                <List
                  className="sm:flex-col flex-row gap-[27px] grid sm:grid-cols-1 grid-cols-3 w-3/5 sm:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-start justify-start sm:ml-[0] sm:mt-0 mt-[41px] w-full">
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
                    <Text
                      className="h-[18px] mt-6 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      07
                    </Text>
                    <Text
                      className="h-[18px] mt-[21px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      08
                    </Text>
                    <Text
                      className="h-[18px] mt-6 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      09
                    </Text>
                    <Text
                      className="h-[18px] mt-6 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      10
                    </Text>
                    <Text
                      className="mt-6 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      11
                    </Text>
                  </div>
                  <div className="flex flex-col gap-[23px] items-center justify-start sm:ml-[0] w-full">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Faktura nomeri
                    </Text>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        120003
                      </Text>
                      <Text
                        className="mt-6 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        120002
                      </Text>
                      <Text
                        className="mt-[23px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        120002
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        120001
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        119999
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        119996
                      </Text>
                      <Text
                        className="mt-6 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        119997
                      </Text>
                      <Text
                        className="mt-[21px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        119996
                      </Text>
                      <Text
                        className="mt-6 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        119997
                      </Text>
                      <Text
                        className="mt-[25px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        119996
                      </Text>
                      <Text
                        className="mt-6 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        119995
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start sm:ml-[0] w-full">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Summasi
                    </Text>
                    <Text
                      className="mt-[23px] text-[15px] text-light_green-400"
                      size="txtRobotoMedium15"
                    >
                      2 320 000
                    </Text>
                    <Text
                      className="mt-[25px] text-[15px] text-light_green-400"
                      size="txtRobotoMedium15"
                    >
                      Tayyor
                    </Text>
                    <Text
                      className="mt-6 text-[15px] text-light_green-400"
                      size="txtRobotoMedium15"
                    >
                      Tayyor
                    </Text>
                    <Text
                      className="mt-[26px] text-[15px] text-light_green-400"
                      size="txtRobotoMedium15"
                    >
                      Tayyor
                    </Text>
                    <Text
                      className="mt-[25px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Kutish
                    </Text>
                    <Text
                      className="mt-[27px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Kutish
                    </Text>
                    <Text
                      className="mt-[25px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Kutish
                    </Text>
                    <Text
                      className="mt-[21px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Kutish
                    </Text>
                    <Text
                      className="mt-[25px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Kutish
                    </Text>
                    <Text
                      className="mt-[25px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Kutish
                    </Text>
                    <Text
                      className="mt-[25px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Kutish
                    </Text>
                  </div>
                </List>
                <div className="flex flex-col gap-6 justify-start w-[12%] sm:w-full">
                  <Text
                    className="text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    <>To\&#96;lov turi</>
                  </Text>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[5px]">
                    <Text
                      className="text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Naqd pul
                    </Text>
                    <Text
                      className="mt-6 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Hisob raqam
                    </Text>
                    <Text
                      className="mt-[21px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Plastik
                    </Text>
                    <Text
                      className="mt-[30px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Naqd pul
                    </Text>
                    <Text
                      className="mt-6 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Hisob raqam
                    </Text>
                    <Text
                      className="mt-[21px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Plastik
                    </Text>
                    <Text
                      className="mt-8 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Naqd pul
                    </Text>
                    <Text
                      className="mt-6 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Hisob raqam
                    </Text>
                    <Text
                      className="mt-[21px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Plastik
                    </Text>
                    <Text
                      className="mt-[23px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Naqd pul
                    </Text>
                    <Text
                      className="mt-6 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Hisob raqam
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-800_7e flex flex-row gap-[30px] items-center justify-start left-[0] pr-[100px] md:px-5 top-[22%] w-1/5">
          <div className="bg-red-300 h-[60px] w-[8%]"></div>
          <div className="flex flex-row gap-[29px] items-center justify-center w-[74%]">
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_volume_white_a700.svg"
              alt="volume"
            />
            <Text
              className="text-sm text-white-A700 uppercase"
              size="txtRobotoMedium14WhiteA700"
            >
              DASHBOARD
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default IshlabchiqarishsexiBrakmahsulotlarhisobiFivePage;
