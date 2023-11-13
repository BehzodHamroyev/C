import React from "react";

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const ShowroomMijozlarroyhatiPage: React.FC = () => {
  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat font-roboto h-[900px] mx-auto sm:pr-5 pr-[27px] py-[27px] relative w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="flex flex-col h-full items-center justify-start m-auto max-w-[1400px] md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[187px] items-center justify-start md:mt-0 mt-7 w-1/5 md:w-full">
              <Img
                className="h-[82px]"
                src="images/img_group834.svg"
                alt="groupSeventySix"
              />
              <div className="bg-blue_gray-800_7e flex flex-row gap-[22px] items-center justify-start md:pr-10 sm:pr-5 pr-[54px] w-full">
                <div className="bg-red-300 h-[60px] w-[7%]"></div>
                <div className="flex flex-row gap-[26px] items-center justify-center w-[83%]">
                  <Img
                    className="h-6 w-6"
                    src="images/img_bipersonworkspace_white_a700.svg"
                    alt="bipersonworkspa"
                  />
                  <Text
                    className="text-sm text-white-A700 uppercase"
                    size="txtRobotoMedium14WhiteA700"
                  >
                    <>Mijozlar ro\&#96;yhati</>
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[22px] items-start justify-start w-[81%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 gap-[125px] items-start justify-start ml-0.5 md:ml-[0] w-[94%] md:w-full">
                <FrameFiftyTwoDatafiltr className="flex md:flex-col flex-row gap-[17px] items-center justify-between w-[68%] md:w-full" />
                <div className="flex flex-row items-end justify-between w-[21%] md:w-full">
                  <div className="flex flex-col h-[38px] items-center justify-start w-[38px]">
                    <Img
                      className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                      src="images/img_il1588xn1.png"
                      alt="il1588xnOne"
                    />
                  </div>
                  <Text
                    className="mb-[3px] mt-[7px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-500"
                    size="txtRobotoMedium23"
                  >
                    Operator ismi
                  </Text>
                  <Img
                    className="h-[7px] my-[15px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
              </div>
              <div className="md:h-[2788px] sm:h-[778px] h-[782px] relative w-full">
                <div className="md:h-[233px] sm:h-[778px] h-[782px] m-auto w-full">
                  <div className="absolute bg-blue_gray-900_87_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[17px] rounded-[5px] w-full">
                    <div className="flex flex-col md:gap-10 gap-[665px] items-center justify-start mb-1.5 w-[98%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <div className="flex md:flex-1 sm:flex-col flex-row gap-[21px] items-center justify-between md:mt-0 mt-[3px] w-[39%] md:w-full">
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
                        <Button
                          className="cursor-pointer font-medium mb-[3px] min-w-[201px] rounded-[5px] text-center text-sm tracking-[0.14px] uppercase"
                          shape="round"
                          color="blue_gray_900"
                          size="sm"
                          variant="fill"
                        >
                          Yangi Mijoz
                        </Button>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-8 items-end justify-start p-0.5 w-[35%] md:w-full"
                        style={{
                          backgroundImage:
                            "url('images/img_group71_gray_900.svg')",
                        }}
                      >
                        <div className="flex flex-row items-center justify-end mr-[7px] w-[86%] md:w-full">
                          <Text
                            className="text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            1
                          </Text>
                          <Text
                            className="ml-[31px] text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            2
                          </Text>
                          <Text
                            className="ml-[30px] text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            3
                          </Text>
                          <Text
                            className="ml-[30px] text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            4
                          </Text>
                          <Text
                            className="ml-[29px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
                            size="txtRobotoMedium22"
                          >
                            5
                          </Text>
                          <Text
                            className="ml-7 text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            6
                          </Text>
                          <Text
                            className="ml-[30px] text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            7
                          </Text>
                          <Text
                            className="ml-[29px] text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            8
                          </Text>
                          <Img
                            className="h-[9px] ml-8"
                            src="images/img_line3.svg"
                            alt="lineThree"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[16%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[11%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[22%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[28%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[33%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[39%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[45%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-[0] justify-center m-auto w-full" />
                  <Line className="absolute bg-blue_gray-800_01 bottom-[43%] h-0.5 inset-x-[0] mx-auto w-full" />
                  <Line className="absolute bg-blue_gray-800_01 bottom-[20%] h-0.5 inset-x-[0] mx-auto w-full" />
                  <Line className="absolute bg-blue_gray-800_01 bottom-[37%] h-0.5 inset-x-[0] mx-auto w-full" />
                  <Line className="absolute bg-blue_gray-800_01 bottom-[14%] h-0.5 inset-x-[0] mx-auto w-full" />
                  <Line className="absolute bg-blue_gray-800_01 bottom-[31%] h-0.5 inset-x-[0] mx-auto w-full" />
                  <Line className="absolute bg-blue_gray-800_03 bottom-[26%] h-0.5 inset-x-[0] mx-auto w-full" />
                </div>
                <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-[0] items-center justify-center m-auto w-[95%]">
                  <List
                    className="sm:flex-col flex-row gap-[18px] grid grid-cols-2 w-[21%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        001
                      </Text>
                      <Text
                        className="mt-[29px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        002
                      </Text>
                      <Text
                        className="mt-7 text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        003
                      </Text>
                      <Text
                        className="mt-[31px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        004
                      </Text>
                      <Text
                        className="mt-[31px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        005
                      </Text>
                      <Text
                        className="mt-[29px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        006
                      </Text>
                      <Text
                        className="mt-[30px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        007
                      </Text>
                      <Text
                        className="mt-[30px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        008
                      </Text>
                      <Text
                        className="mt-[30px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        009
                      </Text>
                      <Text
                        className="mt-[30px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        010
                      </Text>
                      <Text
                        className="mt-7 text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        011
                      </Text>
                      <Text
                        className="mt-[30px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        012
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Ismi va familyasi
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-blue-700"
                        size="txtRobotoMedium15Blue700"
                      >
                        Botir Qodirov
                      </Text>
                      <Text
                        className="mt-[25px] text-[15px] text-blue-700"
                        size="txtRobotoMedium15Blue700"
                      >
                        Sobir Ikromov
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-blue-700"
                        size="txtRobotoMedium15Blue700"
                      >
                        <>Maftuna To\&#96;lanboyeva</>
                      </Text>
                      <Text
                        className="mt-[29px] text-[15px] text-blue-700"
                        size="txtRobotoMedium15Blue700"
                      >
                        Nodir Fayziyev
                      </Text>
                      <Text
                        className="mt-[27px] text-[15px] text-blue-700"
                        size="txtRobotoMedium15Blue700"
                      >
                        Fahriddin Mahmudov
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-blue-700"
                        size="txtRobotoMedium15Blue700"
                      >
                        Shukurillo Avdusalomov
                      </Text>
                      <Text
                        className="mt-[27px] text-[15px] text-blue-700"
                        size="txtRobotoMedium15Blue700"
                      >
                        Saida Komilova
                      </Text>
                      <Text
                        className="mt-[27px] text-[15px] text-blue-700"
                        size="txtRobotoMedium15Blue700"
                      >
                        Mohira Abdumalikov
                      </Text>
                      <Text
                        className="mt-7 text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Umarjon Mahkamjonov
                      </Text>
                      <Text
                        className="mt-[27px] text-[15px] text-blue-700"
                        size="txtRobotoMedium15Blue700"
                      >
                        Salohiddin Mahkamjonov
                      </Text>
                      <Text
                        className="mt-[23px] text-[15px] text-blue-700"
                        size="txtRobotoMedium15Blue700"
                      >
                        Saida Komilova
                      </Text>
                      <Text
                        className="mt-[27px] text-[15px] text-blue-700"
                        size="txtRobotoMedium15Blue700"
                      >
                        Mohira Abdumalikov
                      </Text>
                    </div>
                  </List>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[53px]">
                    <Text
                      className="ml-0.5 md:ml-[0] text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Manzili
                    </Text>
                    <Text
                      className="mt-[17px] text-[10px] text-blue_gray-500"
                      size="txtRobotoMedium10"
                    >
                      Jalaquduq
                    </Text>
                    <Text
                      className="text-[10px] text-gray-400"
                      size="txtRobotoMedium10Gray400"
                    >
                      <>
                        Yangisor Qorasuv ko\&#96;cha <br />№ 77 uy
                      </>
                    </Text>
                    <Text
                      className="mt-1 text-[10px] text-blue_gray-500"
                      size="txtRobotoMedium10"
                    >
                      <>Xo\&#96;jaobod</>
                    </Text>
                    <Text
                      className="text-[10px] text-gray-400"
                      size="txtRobotoMedium10Gray400"
                    >
                      <>
                        Yettichinor Jome ko\&#96;cha <br />№ 125 uy
                      </>
                    </Text>
                    <Text
                      className="mt-[3px] text-[10px] text-blue_gray-500"
                      size="txtRobotoMedium10"
                    >
                      Qorasuv
                    </Text>
                    <Text
                      className="mt-0.5 text-[10px] text-gray-400"
                      size="txtRobotoMedium10Gray400"
                    >
                      <>
                        Obodon Toshloq ko\&#96;cha <br />№ 35 uy
                      </>
                    </Text>
                    <Text
                      className="mt-[7px] text-[10px] text-blue_gray-500"
                      size="txtRobotoMedium10"
                    >
                      Andijon
                    </Text>
                    <Text
                      className="text-[10px] text-gray-400"
                      size="txtRobotoMedium10Gray400"
                    >
                      <>
                        Yangi bozor Oripov ko\&#96;cha <br />№ 81 uy{" "}
                      </>
                    </Text>
                    <Text
                      className="mt-[7px] text-[10px] text-blue_gray-500"
                      size="txtRobotoMedium10"
                    >
                      Andijon
                    </Text>
                    <Text
                      className="text-[10px] text-gray-400"
                      size="txtRobotoMedium10Gray400"
                    >
                      <>
                        Yangi bozor Oripov ko\&#96;cha <br />№ 88 uy{" "}
                      </>
                    </Text>
                    <Text
                      className="mt-1 text-[10px] text-blue_gray-500"
                      size="txtRobotoMedium10"
                    >
                      Shahrixon
                    </Text>
                    <Text
                      className="mt-0.5 text-[10px] text-gray-400"
                      size="txtRobotoMedium10Gray400"
                    >
                      <>
                        Yodgorov ko\&#96;cha <br />№ 15 uy
                      </>
                    </Text>
                    <Text
                      className="mt-[5px] text-[10px] text-blue_gray-500"
                      size="txtRobotoMedium10"
                    >
                      Andijon
                    </Text>
                    <Text
                      className="text-[10px] text-gray-400"
                      size="txtRobotoMedium10Gray400"
                    >
                      <>
                        Oliygoh ko\&#96;cha <br />№ 3 uy
                      </>
                    </Text>
                    <Text
                      className="mt-[5px] text-[10px] text-blue_gray-500"
                      size="txtRobotoMedium10"
                    >
                      <>Xo\&#96;jaobod</>
                    </Text>
                    <Text
                      className="text-[10px] text-gray-400"
                      size="txtRobotoMedium10Gray400"
                    >
                      <>
                        Yettichinor Jome ko\&#96;cha <br />№ 125 uy
                      </>
                    </Text>
                    <Text
                      className="mt-[5px] text-[10px] text-blue_gray-500"
                      size="txtRobotoMedium10"
                    >
                      Andijon
                    </Text>
                    <Text
                      className="text-[10px] text-gray-400"
                      size="txtRobotoMedium10Gray400"
                    >
                      <>
                        Yodgorov ko\&#96;cha <br />№ 15 uy
                      </>
                    </Text>
                    <Text
                      className="mt-1 text-[10px] text-blue_gray-500"
                      size="txtRobotoMedium10"
                    >
                      Shahrixon
                    </Text>
                    <Text
                      className="mt-0.5 text-[10px] text-gray-400"
                      size="txtRobotoMedium10Gray400"
                    >
                      <>
                        Oliygoh ko\&#96;cha <br />№ 3 uy
                      </>
                    </Text>
                    <Text
                      className="mt-1 text-[10px] text-blue_gray-500"
                      size="txtRobotoMedium10"
                    >
                      Andijon
                    </Text>
                    <Text
                      className="text-[10px] text-gray-400"
                      size="txtRobotoMedium10Gray400"
                    >
                      <>
                        Oliygoh ko\&#96;cha <br />№ 3 uy
                      </>
                    </Text>
                    <Text
                      className="mt-[5px] text-[10px] text-blue_gray-500"
                      size="txtRobotoMedium10"
                    >
                      <>Xo\&#96;jaobod</>
                    </Text>
                    <Text
                      className="text-[10px] text-gray-400"
                      size="txtRobotoMedium10Gray400"
                    >
                      <>
                        Yettichinor Jome ko\&#96;cha <br />№ 125 uy
                      </>
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[66px] grid grid-cols-2 md:ml-[0] ml-[47px] w-[28%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Hudud
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Jalaquduq
                      </Text>
                      <Text
                        className="mt-[29px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        <>Xo\&#96;jaobod</>
                      </Text>
                      <Text
                        className="mt-[27px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Qorasuv
                      </Text>
                      <Text
                        className="mt-8 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Andijon
                      </Text>
                      <Text
                        className="mt-[31px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Andijon
                      </Text>
                      <Text
                        className="mt-7 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Shahrihon
                      </Text>
                      <Text
                        className="mt-[31px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Andijon
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Xo’jaobod
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Andijon
                      </Text>
                      <Text
                        className="mt-7 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Shahrixon
                      </Text>
                      <Text
                        className="mt-[29px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Andijon
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Xo’jaobod
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="ml-0.5 md:ml-[0] text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Bizni qayerdan topdingiz
                      </Text>
                      <Text
                        className="mt-7 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Instagramdagi postlarda
                      </Text>
                      <Text
                        className="mt-[29px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Televideniyada reklamada
                      </Text>
                      <Text
                        className="mt-7 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Telegramdagi kanalda
                      </Text>
                      <Text
                        className="mt-[31px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Mijozlardan biri tavsiya qildi
                      </Text>
                      <Text
                        className="mt-[31px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Telegramdagi kanalda
                      </Text>
                      <Text
                        className="mt-[29px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Telegramdagi kanalda
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Televideniyada reklamada
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Televideniyada reklamada
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Televideniyada reklamada
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Televideniyada reklamada
                      </Text>
                      <Text
                        className="mt-7 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Televideniyada reklamada
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Televideniyada reklamada
                      </Text>
                    </div>
                  </List>
                  <div className="flex flex-col items-center justify-start ml-20 md:ml-[0] w-[12%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="ml-0.5 md:ml-[0] text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Izoh
                      </Text>
                      <div className="flex flex-row items-center justify-evenly mt-[25px] w-full">
                        <Text
                          className="text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Izoh yozish kerak
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly mt-[23px] w-full">
                        <Text
                          className="text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Izoh yozish kerak
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_One"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly mt-[19px] w-full">
                        <Text
                          className="text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Izoh yozish kerak
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Two"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly mt-[22px] w-full">
                        <Text
                          className="text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Izoh yozish kerak
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Three"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly mt-[22px] w-full">
                        <Text
                          className="text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Izoh yozish kerak
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Four"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-evenly mt-[17px] w-full">
                        <Text
                          className="text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Izoh yozish kerak
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Five"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly mt-[22px] w-full">
                        <Text
                          className="mt-[3px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Izoh yozish kerak
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Six"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-evenly mt-5 w-full">
                        <Text
                          className="text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Izoh yozish kerak
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Seven"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly mt-6 w-full">
                        <Text
                          className="text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Izoh yozish kerak
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Eight"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly mt-[17px] w-full">
                        <Text
                          className="mt-[5px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Izoh yozish kerak
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Nine"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-evenly mt-5 w-full">
                        <Text
                          className="mt-[3px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Izoh yozish kerak
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Ten"
                        />
                      </div>
                      <div className="flex flex-row items-center justify-evenly mt-5 w-full">
                        <Text
                          className="text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Izoh yozish kerak
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Eleven"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[27px]">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Telefon raqami
                    </Text>
                    <Text
                      className="mt-[19px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      <>
                        +998 99 123-56-56
                        <br />
                        +998 99 152-96-95
                      </>
                    </Text>
                    <Text
                      className="mt-2.5 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      <>
                        +998 93 900-56-56
                        <br />
                        +998 90 896-96-95
                      </>
                    </Text>
                    <Text
                      className="mt-[9px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      <>
                        +998 93 123-58-00
                        <br />
                        +998 98 152-00-00
                      </>
                    </Text>
                    <Text
                      className="mt-[13px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      <>
                        +998 88 200-58-00
                        <br />
                        +998 91 100-00-00
                      </>
                    </Text>
                    <Text
                      className="mt-[13px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      <>
                        +998 93 123-00-00
                        <br />
                        +998 94 152-02-00
                      </>
                    </Text>
                    <Text
                      className="mt-[13px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      <>
                        +998 99 555-90-00
                        <br />
                        +998 98 999-00-00
                      </>
                    </Text>
                    <Text
                      className="mt-[9px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      <>
                        +998 93 161-58-00
                        <br />
                        +998 98 603-00-00
                      </>
                    </Text>
                    <Text
                      className="mt-[11px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      <>
                        +998 93 603-58-00
                        <br />
                        +998 98 560-00-00
                      </>
                    </Text>
                    <Text
                      className="mt-[11px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      <>
                        +998 96 603-58-00
                        <br />
                        +998 97 860-05-00
                      </>
                    </Text>
                    <Text
                      className="mt-[11px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      <>
                        +998 96 603-58-00
                        <br />
                        +998 97 860-05-00
                      </>
                    </Text>
                    <Text
                      className="mt-2.5 text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      <>
                        +998 93 161-58-00
                        <br />
                        +998 98 603-00-00
                      </>
                    </Text>
                    <Text
                      className="mt-[11px] text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      <>
                        +998 93 603-58-00
                        <br />
                        +998 98 560-00-00
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col items-start justify-start left-[2%] md:px-5 top-[26%] w-[15%]">
          <div className="flex flex-row gap-5 items-center justify-start w-[61%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_icoutlineshop.svg"
              alt="icoutlineshop"
            />
            <Text
              className="text-blue_gray-500 text-sm"
              size="txtRobotoMedium14"
            >
              DASHBOARD
            </Text>
          </div>
          <CheckBox
            className="!text-blue_gray-500 font-medium leading-[normal] mt-[30px] sm:pl-5 text-base text-left uppercase"
            inputClassName="h-[18px] mr-[5px] w-[18px]"
            name="buyurtmalar"
            id="buyurtmalar"
            label="Buyurtmalar"
            size="sm"
          ></CheckBox>
          <div className="flex flex-row items-start justify-between ml-1 md:ml-[0] mt-[90px] w-[99%] md:w-full">
            <Img className="h-5" src="images/img_vector.svg" alt="vector" />
            <Text
              className="mt-0.5 text-blue_gray-500 text-sm uppercase"
              size="txtRobotoMedium14"
            >
              <>To\&#96;lov qabul qilish</>
            </Text>
            <Img
              className="h-[5px] mt-[5px]"
              src="images/img_line49_blue_gray_500.svg"
              alt="lineFortyNine"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowroomMijozlarroyhatiPage;
