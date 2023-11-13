import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const OmborBichishvarenderThreePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[1055px] mx-auto relative w-full">
        <div className="absolute md:h-[2936px] sm:h-[598px] h-[634px] inset-x-[0] max-w-[1400px] mx-auto md:px-5 top-[2%] w-full">
          <Img
            className="absolute h-[82px] left-[4%] top-[5%]"
            src="images/img_group834.svg"
            alt="groupSeventySix"
          />
          <div className="absolute flex md:flex-col flex-row md:gap-5 items-start justify-start right-[2%] top-[0] w-[78%]">
            <Img
              className="h-[41px] w-[41px]"
              src="images/img_arrowleft.svg"
              alt="arrowleft"
            />
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[45px] md:mt-0 mt-[7px]">
              <Text
                className="text-2xl md:text-[22px] text-gray-400 sm:text-xl"
                size="txtRobotoMedium24"
              >
                Bichish kartasi\ №120003
              </Text>
            </div>
            <Button
              className="flex h-[50px] items-center justify-center md:ml-[0] ml-[409px] rounded-[24px] w-[50px]"
              color="blue_gray_800_02"
              size="xs"
              variant="fill"
            >
              <Img src="images/img_jamrefresh_gray_400.svg" alt="jamrefresh" />
            </Button>
            <div className="flex flex-row items-center justify-end ml-8 md:ml-[0] md:mt-0 mt-[5px] w-[21%] md:w-full">
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
          <div className="absolute bottom-[0] flex md:h-[2936px] h-[552px] sm:h-[598px] inset-x-[0] justify-end mx-auto w-full">
            <div className="absolute flex flex-col gap-[22px] justify-start left-[0] top-[30%] w-1/5">
              <div className="flex flex-row gap-[25px] items-center justify-start ml-14 md:ml-[0] w-[51%] md:w-full">
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_grid.svg"
                  alt="grid"
                />
                <Text
                  className="text-base text-blue_gray-500"
                  size="txtRobotoMedium16"
                >
                  DASHBOARD
                </Text>
              </div>
              <div className="bg-blue_gray-900 flex flex-col items-center justify-start py-[13px] w-full">
                <div className="flex flex-col justify-start w-full">
                  <div className="flex flex-row gap-[26px] items-start justify-end md:ml-[0] ml-[55px] w-[71%] md:w-full">
                    <Img
                      className="h-[18px] mt-0.5 w-[18px]"
                      src="images/img_volume_gray_400.svg"
                      alt="volume"
                    />
                    <div className="flex flex-col items-center justify-start w-[78%] sm:w-full">
                      <SelectBox
                        className="font-medium leading-[normal] text-base text-gray-400 text-left w-full"
                        placeholderClassName="text-gray-400"
                        indicator={
                          <Img
                            className="h-1 mr-[0] outline-gray-400 outline-[0.5px] outline w-[11px]"
                            src="images/img_arrowdown_gray_400.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="language"
                        options={languageOptionsList}
                        isSearchable={false}
                        placeholder="Bichish "
                      />
                    </div>
                  </div>
                  <div className="bg-blue_gray-500 flex flex-col items-end justify-start mt-2.5 w-full">
                    <Text
                      className="mb-0.5 mr-[66px] text-base text-white-A700"
                      size="txtRobotoMedium16WhiteA700"
                    >
                      Bichish kartasi
                    </Text>
                  </div>
                  <Text
                    className="md:ml-[0] ml-[100px] mt-[7px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    Qoldiqlar
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="h-[415px] mb-[53px] ml-auto mt-auto"
              src="images/img_component6.svg"
              alt="componentSix"
            />
            <div className="absolute md:h-[2936px] h-[552px] sm:h-[598px] inset-y-[0] my-auto right-[0] w-[81%] md:w-full">
              <div className="absolute bg-blue_gray-900 flex flex-col md:gap-10 gap-[63px] h-full inset-[0] justify-center m-auto p-[11px] rounded-[5px] w-full">
                <div className="flex sm:flex-col flex-row gap-[19px] items-center justify-end md:ml-[0] ml-[653px] w-[41%] md:w-full">
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[213px] text-base text-center"
                    shape="round"
                    color="blue_400"
                    size="sm"
                    variant="fill"
                  >
                    Taminotchiga
                  </Button>
                  <Button
                    className="cursor-pointer font-medium leading-[normal] min-w-[213px] text-base text-center"
                    shape="round"
                    color="blue_400"
                    size="sm"
                    variant="fill"
                  >
                    Excelga olish
                  </Button>
                </div>
                <List
                  className="flex flex-col gap-[53px] mb-[57px] md:ml-[0] ml-[477px] w-[9%]"
                  orientation="vertical"
                >
                  <div className="flex flex-row items-center justify-evenly w-full">
                    <Text
                      className="bg-gray-900 h-[29px] justify-center pl-1.5 sm:pr-5 pr-[35px] py-[5px] rounded-bl-[3px] rounded-tl-[3px] text-base text-white-A700 w-16"
                      size="txtRobotoMedium16WhiteA700"
                    >
                      50
                    </Text>
                    <div className="bg-blue-400 flex flex-col items-center justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[33%]">
                      <Img
                        className="h-[15px] w-3.5"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly w-full">
                    <Text
                      className="bg-gray-900 h-[29px] justify-center pl-1.5 sm:pr-5 pr-[35px] py-[5px] rounded-bl-[3px] rounded-tl-[3px] text-base text-white-A700 w-16"
                      size="txtRobotoMedium16WhiteA700"
                    >
                      80
                    </Text>
                    <div className="bg-blue-400 flex flex-col items-center justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[33%]">
                      <Img
                        className="h-[15px] w-3.5"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly w-full">
                    <Text
                      className="bg-gray-900 h-[29px] justify-center pl-1.5 sm:pr-5 pr-[35px] py-[5px] rounded-bl-[3px] rounded-tl-[3px] text-base text-white-A700 w-16"
                      size="txtRobotoMedium16WhiteA700"
                    >
                      80
                    </Text>
                    <div className="bg-blue-400 flex flex-col items-center justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[33%]">
                      <Img
                        className="h-[15px] w-3.5"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly w-full">
                    <Text
                      className="bg-gray-900 h-[29px] justify-center pl-1.5 sm:pr-5 pr-[35px] py-[5px] rounded-bl-[3px] rounded-tl-[3px] text-base text-white-A700 w-16"
                      size="txtRobotoMedium16WhiteA700"
                    >
                      80
                    </Text>
                    <div className="bg-blue-400 flex flex-col items-center justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[33%]">
                      <Img
                        className="h-[15px] w-3.5"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-evenly w-full">
                    <Text
                      className="bg-gray-900 h-[29px] justify-center pl-1.5 sm:pr-5 pr-[35px] py-[5px] rounded-bl-[3px] rounded-tl-[3px] text-base text-white-A700 w-16"
                      size="txtRobotoMedium16WhiteA700"
                    >
                      80
                    </Text>
                    <div className="bg-blue-400 flex flex-col items-center justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[33%]">
                      <Img
                        className="h-[15px] w-3.5"
                        src="images/img_location.svg"
                        alt="location"
                      />
                    </div>
                  </div>
                </List>
              </div>
              <div className="absolute bottom-[0] md:h-[2936px] h-[487px] inset-x-[0] mx-auto w-full">
                <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Line className="bg-blue_gray-800_01 h-px w-full" />
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-[38px] w-full" />
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-8 w-full">
                      <Line className="bg-blue_gray-800_01 h-px w-[43%]" />
                      <Line className="bg-blue_gray-800_01 h-px w-[48%]" />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[116px] items-start justify-end md:ml-[0] ml-[285px] mt-6 w-3/4 md:w-full">
                      <Line className="bg-blue_gray-800_01 h-px w-[24%]" />
                      <Line className="bg-blue_gray-800_01 h-px w-[64%]" />
                    </div>
                    <Line className="bg-blue_gray-800_01 h-[3px] mt-[25px] w-full" />
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[25px] w-full">
                      <Line className="bg-blue_gray-800_01 h-px w-[43%]" />
                      <Line className="bg-blue_gray-800_01 h-px w-[48%]" />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[116px] items-center justify-end md:ml-[0] ml-[285px] mt-[25px] w-3/4 md:w-full">
                      <Line className="bg-blue_gray-800_01 h-px w-[24%]" />
                      <Line className="bg-blue_gray-800_01 h-px w-[64%]" />
                    </div>
                    <Line className="bg-blue_gray-800_01 h-[3px] mt-[29px] w-full" />
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-6 w-full">
                      <Line className="bg-blue_gray-800_01 h-px w-[43%]" />
                      <Line className="bg-blue_gray-800_01 h-px w-[48%]" />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[116px] items-center justify-end md:ml-[0] ml-[285px] mt-[22px] w-3/4 md:w-full">
                      <Line className="bg-blue_gray-800_01 h-px w-[24%]" />
                      <Line className="bg-blue_gray-800_01 h-px w-[64%]" />
                    </div>
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-[38px] w-full" />
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[27px] w-full">
                      <Line className="bg-blue_gray-800_01 h-px w-[43%]" />
                      <Line className="bg-blue_gray-800_01 h-px w-[48%]" />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[116px] items-center justify-end md:ml-[0] ml-[285px] mt-[23px] w-3/4 md:w-full">
                      <Line className="bg-blue_gray-800_01 h-px w-[24%]" />
                      <Line className="bg-blue_gray-800_01 h-px w-[64%]" />
                    </div>
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-[27px] w-full" />
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between mt-[27px] w-full">
                      <Line className="bg-blue_gray-800_01 h-px w-[43%]" />
                      <Line className="bg-blue_gray-800_01 h-px w-[48%]" />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[116px] items-center justify-end md:ml-[0] ml-[285px] mt-[22px] w-3/4 md:w-full">
                      <Line className="bg-blue_gray-800_01 h-px w-[24%]" />
                      <Line className="bg-blue_gray-800_01 h-px w-[64%]" />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[116px] items-center justify-end md:ml-[0] ml-[285px] mt-[23px] w-3/4 md:w-full">
                      <Line className="bg-blue_gray-800_01 h-px w-[24%]" />
                      <Line className="bg-blue_gray-800_01 h-px w-[64%]" />
                    </div>
                  </div>
                </div>
                <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto py-[7px] w-[99%]">
                  <div className="flex flex-col items-start justify-start md:mt-0 mt-[43px]">
                    <Text
                      className="text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      01
                    </Text>
                    <Text
                      className="h-[18px] mt-[65px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      02
                    </Text>
                    <Text
                      className="h-[18px] mt-[63px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      03
                    </Text>
                    <Text
                      className="h-[18px] mt-[74px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      04
                    </Text>
                    <Text
                      className="h-[18px] mt-[63px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      05
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row gap-[10.5px] grid grid-cols-[repeat(2,_1fr_1px)_1fr] ml-3 md:ml-[0] md:mt-0 mt-0.5 w-[22%] md:w-full"
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
                        className="mt-[23px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Aldoks
                      </Text>
                      <Text
                        className="mt-[65px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Aldoks
                      </Text>
                      <Text
                        className="mt-[63px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Aldoks
                      </Text>
                      <Text
                        className="mt-[74px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Aldoks
                      </Text>
                      <Text
                        className="mt-[63px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Aldoks
                      </Text>
                    </div>
                    <Line className="self-center h-[487px] bg-blue_gray-800_03 w-px" />
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Artikul
                      </Text>
                      <Text
                        className="mt-[23px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        0601
                      </Text>
                      <Text
                        className="mt-[65px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        0602
                      </Text>
                      <Text
                        className="mt-[63px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        0603
                      </Text>
                      <Text
                        className="mt-[74px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        0604
                      </Text>
                      <Text
                        className="mt-[63px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        0605
                      </Text>
                    </div>
                    <Line className="self-center h-[487px] bg-blue_gray-800_03 w-px" />
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Rangi
                      </Text>
                      <Text
                        className="mt-[21px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Dub mocco
                      </Text>
                      <Text
                        className="mt-[65px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Dub mocco
                      </Text>
                      <Text
                        className="mt-[65px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Rangsiz
                      </Text>
                      <Text
                        className="mt-[74px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Rangsiz
                      </Text>
                      <Text
                        className="mt-[63px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Rangsiz
                      </Text>
                    </div>
                  </List>
                  <List
                    className="sm:flex-col flex-row gap-[9.5px] grid grid-cols-[repeat(2,_1fr_1px)_1fr] md:ml-[0] ml-[21px] md:mt-0 mt-0.5 w-[16%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start w-full">
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
                        className="mt-[23px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        90 x90
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        90 x90
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        90 x90
                      </Text>
                      <Text
                        className="mt-[17px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        90 x90
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        90 x90
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        90 x90
                      </Text>
                      <Text
                        className="mt-[15px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        90 x90
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        90 x90
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        90 x90
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        45 x 45
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        45 x 45
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        45 x 45
                      </Text>
                      <Text
                        className="mt-[15px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        45 x 45
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        45 x 45
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        45 x 45
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        45 x 45
                      </Text>
                    </div>
                    <Line className="self-center h-[487px] bg-blue_gray-800_03 w-px" />
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        <>O\&#96;lcham</>
                      </Text>
                      <Text
                        className="mt-[23px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1600{" "}
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1200{" "}
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1200{" "}
                      </Text>
                      <Text
                        className="mt-[17px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1133{" "}
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1133{" "}
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        483{" "}
                      </Text>
                      <Text
                        className="mt-[15px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1199
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1228{" "}
                      </Text>
                      <Text
                        className="mt-[5px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1199{" "}
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1706{" "}
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1306{" "}
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1306{" "}
                      </Text>
                      <Text
                        className="mt-[15px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1253
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        603{" "}
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1253{" "}
                      </Text>
                      <Text
                        className="mt-1.5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        603{" "}
                      </Text>
                    </div>
                    <Line className="self-center h-[487px] bg-blue_gray-800_03 w-px" />
                    <div className="flex flex-col gap-[23px] items-center justify-start w-full">
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
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          4
                        </Text>
                        <Text
                          className="mt-1 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          2
                        </Text>
                        <Text
                          className="mt-[18px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          5
                        </Text>
                        <Text
                          className="mt-[5px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          1
                        </Text>
                        <Text
                          className="mt-[5px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6
                        </Text>
                        <Text
                          className="mt-4 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          2
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          3
                        </Text>
                        <Text
                          className="mt-1 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          1
                        </Text>
                        <Text
                          className="mt-[27px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          3
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          4
                        </Text>
                        <Text
                          className="mt-1 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          2
                        </Text>
                        <Text
                          className="mt-4 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          4
                        </Text>
                        <Text
                          className="mt-[5px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          1
                        </Text>
                        <Text
                          className="mt-1 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          2
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          5
                        </Text>
                      </div>
                    </div>
                  </List>
                  <Text
                    className="md:ml-[0] ml-[46px] md:mt-0 mt-0.5 text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    Render
                  </Text>
                  <div className="flex flex-col gap-[23px] items-center justify-start ml-12 md:ml-[0] md:mt-0 mt-0.5 w-[5%] md:w-full">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Ombor
                    </Text>
                    <div className="flex flex-col items-start justify-start">
                      <Text
                        className="text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1
                      </Text>
                      <Text
                        className="mt-[65px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        5
                      </Text>
                      <Text
                        className="mt-[5px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[21px] items-center justify-start md:ml-[0] ml-[43px] md:mt-0 mt-0.5 w-[4%] md:w-full">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Sexda
                    </Text>
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        2
                      </Text>
                      <Text
                        className="mt-8 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        2
                      </Text>
                      <Text
                        className="mt-[67px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        6
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[39px] md:mt-0 mt-0.5">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Havoda
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start ml-12 md:ml-[0] md:mt-0 mt-0.5 w-[5%] md:w-full">
                    <div className="flex flex-col gap-[47px] items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Butun
                      </Text>
                      <Text
                        className="text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        6000 x 1
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[45px] md:mt-0 mt-[3px] w-[5%] md:w-full">
                    <div className="flex flex-col gap-[46px] items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Qoldiq
                      </Text>
                      <Text
                        className="text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1200 x 1
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[21px] md:mt-0 mt-[3px] w-[6%] md:w-full">
                    <div className="flex flex-col gap-[46px] items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Qoldiq %
                      </Text>
                      <Text
                        className="text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        20 %
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[770px] md:px-5 right-[0] top-[10%] w-[1%]">
          <Line className="bg-blue_gray-800 h-[770px] m-auto w-[5px]" />
          <Line className="absolute bg-blue_gray-500 bottom-[6%] h-[172px] inset-x-[0] mx-auto rounded-sm w-[5px]" />
        </div>
        <div className="absolute bottom-[2%] flex flex-col gap-[9px] justify-start md:px-5 right-[3%] w-[79%]">
          <Text
            className="md:ml-[0] ml-[23px] text-base text-white-A700"
            size="txtRobotoMedium16WhiteA700"
          >
            Aksesuarlar
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[318px] items-center justify-start rounded-[5px] w-full"
              style={{ backgroundImage: "url('images/img_group732.svg')" }}
            >
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[318px] items-start justify-start p-0.5 w-full"
                style={{ backgroundImage: "url('images/img_group211.svg')" }}
              >
                <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mb-[62px] md:ml-[0] ml-[15px] w-[90%] md:w-full">
                  <div className="flex flex-col items-center justify-start md:mt-0 mt-[83px] w-[2%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          01
                        </Text>
                      </div>
                      <Text
                        className="mt-[35px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        02
                      </Text>
                      <Text
                        className="mt-[30px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        03
                      </Text>
                      <Text
                        className="mt-7 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        04
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 items-center justify-start md:ml-[0] ml-[21px] w-[9%] md:w-full">
                    <Text
                      className="text-[15px] text-blue_gray-500 text-center w-full"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Aksesuar nomi
                    </Text>
                    <div className="flex flex-col items-center justify-start">
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
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[134px] grid sm:grid-cols-1 grid-cols-5 ml-28 md:ml-[0] md:mt-0 mt-[13px] w-3/5 md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start w-full">
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
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        <>O\&#96;rni</>
                      </Text>
                      <Text
                        className="mt-[51px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Dastak
                      </Text>
                      <Text
                        className="mt-[35px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Dastak
                      </Text>
                      <Text
                        className="mt-[31px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Oshiq-moshiq
                      </Text>
                      <Text
                        className="mt-7 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Oshiq-moshiq
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
                        className="mt-[49px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Golden
                      </Text>
                      <Text
                        className="mt-[35px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Golden
                      </Text>
                      <Text
                        className="mt-[30px] text-[15px] text-gray-400"
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
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Soni
                      </Text>
                      <Text
                        className="mt-[51px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        1
                      </Text>
                      <Text
                        className="mt-[35px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        2
                      </Text>
                      <Text
                        className="mt-[30px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        5
                      </Text>
                      <Text
                        className="mt-7 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        6
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Ombordan
                      </Text>
                      <Text
                        className="ml-1 md:ml-[0] mt-[51px] text-[15px] text-light_green-400"
                        size="txtRobotoMedium15"
                      >
                        1
                      </Text>
                      <Text
                        className="ml-1 md:ml-[0] mt-[35px] text-[15px] text-light_green-400"
                        size="txtRobotoMedium15"
                      >
                        2
                      </Text>
                      <Text
                        className="ml-1 md:ml-[0] mt-[30px] text-[15px] text-light_green-400"
                        size="txtRobotoMedium15"
                      >
                        5
                      </Text>
                      <Text
                        className="ml-1 md:ml-[0] mt-7 text-[15px] text-orange-300"
                        size="txtRobotoMedium15Orange300"
                      >
                        2
                      </Text>
                    </div>
                  </List>
                  <div className="flex flex-col md:gap-10 gap-[200px] items-start justify-start md:ml-[0] ml-[72px] md:mt-0 mt-3.5">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Taminotchidan
                    </Text>
                    <Text
                      className="md:ml-[0] ml-[3px] text-[15px] text-red-300"
                      size="txtRobotoMedium15Red300"
                    >
                      4
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

export default OmborBichishvarenderThreePage;
