import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import MoliyaKassaRowsaralash from "components/MoliyaKassaRowsaralash";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const languageTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const toLovTuriOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const aynanOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MoliyaShowroomdankirimtarixiOnePage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat font-roboto h-[900px] mx-auto pr-[19px] py-[19px] relative w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="absolute flex flex-col gap-[25px] items-center justify-start md:px-5 right-[2%] top-[3%] w-[78%]">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
            <Img
              className="h-[33px] w-[33px]"
              src="images/img_arrowleft_blue_400.svg"
              alt="arrowleft"
            />
            <MoliyaKassaRowsaralash className="flex md:flex-col flex-row gap-[17px] items-center justify-start ml-3 md:ml-[0] w-[66%] md:w-full" />
            <div className="flex flex-row items-center justify-end md:ml-[0] ml-[111px] w-[21%] md:w-full">
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
          <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-full">
            <div className="flex sm:flex-1 flex-col items-center justify-start sm:mt-0 mt-12 w-[15%] sm:w-full">
              <div className="bg-blue_gray-900 flex flex-col items-center justify-start rounded-[5px] shadow-bs4 w-full">
                <OmborTaminotchigaZayavkaOneTab
                  className="flex flex-col items-center justify-start rounded-[5px] w-[168px]"
                  username="Andijon "
                />
              </div>
            </div>
            <div className="bg-blue_gray-900_87 flex sm:flex-1 flex-row gap-[29px] items-center justify-center p-[18px] rounded-[5px] w-[32%] sm:w-full">
              <Img
                className="h-[55px] ml-[9px]"
                src="images/img_question_orange_300.svg"
                alt="question"
              />
              <div className="flex flex-col items-center justify-start mb-0.5 mr-[71px] w-[57%]">
                <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                  <Text
                    className="text-blue_gray-500 text-sm"
                    size="txtRobotoMedium14"
                  >
                    Umumiy kirim summasi
                  </Text>
                  <div className="flex flex-row items-end justify-evenly w-full">
                    <Text
                      className="sm:text-2xl md:text-[26px] text-[28px] text-orange-300"
                      size="txtRobotoMedium28Orange300"
                    >
                      56 084 000
                    </Text>
                    <Text
                      className="mb-[3px] mt-[11px] text-[15px] text-orange-300"
                      size="txtRobotoMedium15Orange300"
                    >
                      <>so\&#96;m</>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[2%] md:h-[1727px] sm:h-[668px] h-[672px] md:px-5 right-[2%] w-[79%] md:w-full">
          <SelectBox
            className="font-medium leading-[normal] ml-auto mr-[30px] mt-4 text-base text-left w-1/5 sm:w-full"
            placeholderClassName="text-gray-400"
            indicator={
              <Img
                className="h-[3px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[7px] right-[0] absolute"
                src="images/img_arrowdown_gray_400.svg"
                alt="arrow_down"
              />
            }
            isMulti={false}
            name="language_Two"
            options={languageTwoOptionsList}
            isSearchable={false}
            placeholder="Showroomni tanlang "
            shape="round"
            color="blue_gray_800"
            size="xs"
            variant="fill"
          />
          <div className="absolute md:h-[1727px] sm:h-[668px] h-[672px] inset-[0] justify-center m-auto w-full">
            <div className="md:h-[1727px] sm:h-[668px] h-[672px] m-auto w-full">
              <div className="absolute bg-blue_gray-900_87_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[13px] rounded-[5px] w-full">
                <div className="flex flex-col md:gap-10 gap-[545px] items-center justify-start mb-3 mt-[5px] w-[99%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                    <div className="flex md:flex-1 sm:flex-col flex-row gap-[21px] items-center justify-between md:mt-0 mt-1 w-[39%] md:w-full">
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
                    <SelectBox
                      className="md:flex-1 font-medium leading-[normal] mb-3 md:ml-[0] ml-[249px] text-base text-left w-[19%] md:w-full"
                      placeholderClassName="text-gray-400"
                      indicator={
                        <Img
                          className="h-[3px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[7px]"
                          src="images/img_arrowdown_gray_400.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="group642"
                      options={toLovTuriOptionsList}
                      isSearchable={false}
                      placeholder="To&#96;lov turi"
                      shape="round"
                      color="blue_gray_800"
                      size="xs"
                      variant="fill"
                    />
                    <SelectBox
                      className="md:flex-1 font-medium leading-[normal] mb-3 md:ml-[0] ml-[25px] text-base text-left w-[19%] md:w-full"
                      placeholderClassName="text-gray-400"
                      indicator={
                        <Img
                          className="h-[3px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[7px]"
                          src="images/img_arrowdown_gray_400.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="group640"
                      options={aynanOptionsList}
                      isSearchable={false}
                      placeholder="Aynan"
                      shape="round"
                      color="blue_gray_800"
                      size="xs"
                      variant="fill"
                    />
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[37px] items-end justify-start p-1 w-[35%] md:w-full"
                    style={{
                      backgroundImage: "url('images/img_group71_gray_900.svg')",
                    }}
                  >
                    <div className="flex flex-row items-start justify-end mb-0.5 mr-1.5 w-[87%] md:w-full">
                      <Text
                        className="mt-1 text-gray-400 text-sm"
                        size="txtRobotoMedium14Gray400"
                      >
                        1
                      </Text>
                      <Text
                        className="ml-[31px] mt-1 text-gray-400 text-sm"
                        size="txtRobotoMedium14Gray400"
                      >
                        2
                      </Text>
                      <Text
                        className="ml-[30px] mt-1 text-gray-400 text-sm"
                        size="txtRobotoMedium14Gray400"
                      >
                        3
                      </Text>
                      <Text
                        className="ml-[30px] mt-1 text-gray-400 text-sm"
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
                        className="ml-[29px] mt-1 text-gray-400 text-sm"
                        size="txtRobotoMedium14Gray400"
                      >
                        6
                      </Text>
                      <Text
                        className="ml-[30px] mt-[5px] text-gray-400 text-sm"
                        size="txtRobotoMedium14Gray400"
                      >
                        7
                      </Text>
                      <Text
                        className="ml-[29px] mt-[5px] text-gray-400 text-sm"
                        size="txtRobotoMedium14Gray400"
                      >
                        8
                      </Text>
                      <Img
                        className="h-2.5 ml-8 mt-2"
                        src="images/img_line3.svg"
                        alt="lineThree"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-[456px] inset-x-[0] items-center justify-start mx-auto p-2.5 top-[12%] w-full"
                style={{ backgroundImage: "url('images/img_group400.svg')" }}
              >
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mb-1 w-[96%] md:w-full">
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[189px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[71%] md:w-full"
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
                        className="mt-[34px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        002
                      </Text>
                      <Text
                        className="mt-[33px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        003
                      </Text>
                      <Text
                        className="mt-[38px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        004
                      </Text>
                      <Text
                        className="mt-[38px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        005
                      </Text>
                      <Text
                        className="mt-[35px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        006
                      </Text>
                      <Text
                        className="mt-9 text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        007
                      </Text>
                      <Text
                        className="mt-9 text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        008
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Qayerdan
                      </Text>
                      <Text
                        className="mt-8 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Mijoz
                      </Text>
                      <Text
                        className="mt-[34px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Mijoz{" "}
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Mijoz
                      </Text>
                      <Text
                        className="mt-[42px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Mijoz
                      </Text>
                      <Text
                        className="mt-[38px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Mijoz
                      </Text>
                      <Text
                        className="mt-[35px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Mijoz
                      </Text>
                      <Text
                        className="mt-[34px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Ombor
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Ombor
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Qayerga
                      </Text>
                      <Text
                        className="mt-[31px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Kassa
                      </Text>
                      <Text
                        className="mt-[34px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Kassa{" "}
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Kassa
                      </Text>
                      <Text
                        className="mt-[42px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Kassa
                      </Text>
                      <Text
                        className="mt-[38px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Kassa
                      </Text>
                      <Text
                        className="mt-[35px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Kassa
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Kassa
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Kassa
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Aynan
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        <>Oldindan to\&#96;lov</>
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        <>Yakuniy to\&#96;lov</>
                      </Text>
                      <Text
                        className="mt-[29px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        <>Oldindan to\&#96;lov</>
                      </Text>
                      <Text
                        className="mt-[42px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        <>Ko\&#96;cha</>
                      </Text>
                      <Text
                        className="mt-[38px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        <>Oldindan to\&#96;lov</>
                      </Text>
                      <Text
                        className="mt-[35px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        <>Oldindan to\&#96;lov</>
                      </Text>
                      <Text
                        className="mt-[37px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Profil chiqindisi
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        Selofan chiqindisi
                      </Text>
                    </div>
                  </List>
                  <div className="flex flex-col items-center justify-start md:mt-0 mt-0.5 w-[14%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Izoh
                      </Text>
                      <div className="flex flex-row items-end justify-evenly mt-[26px] w-full">
                        <Text
                          className="mt-[7px] text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          1024 loyihaga oldin...
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa"
                        />
                      </div>
                      <div className="flex flex-row items-end justify-between mt-[25px] w-full">
                        <Text
                          className="mb-0.5 mt-1.5 text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Diller2
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_One"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-between mt-[22px] w-full">
                        <Text
                          className="text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Aksesuarlar
                        </Text>
                        <Img
                          className="h-6 mt-1.5 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Two"
                        />
                      </div>
                      <div className="flex flex-row items-start justify-between mt-4 w-full">
                        <Text
                          className="text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Akdeduarlar
                        </Text>
                        <Img
                          className="h-6 mt-[7px] w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Three"
                        />
                      </div>
                      <div className="flex flex-row items-end justify-between mt-8 w-full">
                        <Text
                          className="my-1 text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          RetPen
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Four"
                        />
                      </div>
                      <div className="flex flex-row items-end justify-between mt-[26px] w-full">
                        <Text
                          className="mb-0.5 mt-1.5 text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          yodoviy
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Five"
                        />
                      </div>
                      <div className="flex flex-row items-end justify-between mt-[27px] w-full">
                        <Text
                          className="mb-0.5 mt-1.5 text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Mijoz
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Six"
                        />
                      </div>
                      <div className="flex flex-row items-end justify-between mt-[25px] w-full">
                        <Text
                          className="mb-0.5 mt-1.5 text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Showroom
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Seven"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[33px] items-center justify-start w-[7%] md:w-full">
                    <Text
                      className="text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Sana
                    </Text>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 11. 2022
                      </Text>
                      <Text
                        className="mt-[35px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 12. 2022
                      </Text>
                      <Text
                        className="mt-[33px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 12. 2022
                      </Text>
                      <Text
                        className="mt-[38px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 12. 2022
                      </Text>
                      <Text
                        className="mt-[37px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 12. 2022
                      </Text>
                      <Text
                        className="mt-9 text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 12. 2022
                      </Text>
                      <Text
                        className="mt-[35px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 12. 2022
                      </Text>
                      <Text
                        className="mt-9 text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 13. 2022
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-row sm:gap-10 h-max inset-y-[0] items-center justify-between left-[7%] my-auto w-[47%]">
              <div className="flex flex-col items-start justify-start">
                <Text
                  className="text-[15px] text-blue_gray-500"
                  size="txtRobotoMedium15Bluegray500"
                >
                  Kirim nomi
                </Text>
                <Text
                  className="mt-[33px] text-[15px] text-blue-400"
                  size="txtRobotoMedium15Blue400"
                >
                  1024
                </Text>
                <Text
                  className="mt-[31px] text-[15px] text-blue-400"
                  size="txtRobotoMedium15Blue400"
                >
                  1025
                </Text>
                <Text
                  className="mt-[30px] text-[15px] text-blue-400"
                  size="txtRobotoMedium15Blue400"
                >
                  1024
                </Text>
                <Text
                  className="mt-[35px] text-[15px] text-blue-400"
                  size="txtRobotoMedium15Blue400"
                >
                  1024
                </Text>
                <Text
                  className="mt-[35px] text-[15px] text-blue-400"
                  size="txtRobotoMedium15Blue400"
                >
                  1001
                </Text>
                <Text
                  className="mt-8 text-[15px] text-blue-400"
                  size="txtRobotoMedium15Blue400"
                >
                  1023
                </Text>
                <Text
                  className="mt-8 text-[15px] text-blue-400"
                  size="txtRobotoMedium15Blue400"
                >
                  Profil
                </Text>
                <Text
                  className="mt-[33px] text-[15px] text-blue-400"
                  size="txtRobotoMedium15Blue400"
                >
                  Selofan
                </Text>
                <Text
                  className="mt-[35px] text-[15px] text-blue-400"
                  size="txtRobotoMedium15Blue400"
                >
                  Jami:
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-[21%]">
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="ml-0.5 md:ml-[0] text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    Kirim summasi
                  </Text>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-[35px] w-[66%] md:w-full">
                    <Img
                      className="h-[13px]"
                      src="images/img_calculator.svg"
                      alt="calculator"
                    />
                    <Text
                      className="text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      150 000
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-[34px] w-[59%] md:w-full">
                    <Img
                      className="h-[13px]"
                      src="images/img_calculator.svg"
                      alt="calculator_One"
                    />
                    <Text
                      className="text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      50 000
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-[33px] w-[66%] md:w-full">
                    <Img
                      className="h-[13px]"
                      src="images/img_calculator.svg"
                      alt="calculator_Two"
                    />
                    <Text
                      className="text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      120 000
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-[38px] w-3/4 md:w-full">
                    <Img
                      className="h-[13px]"
                      src="images/img_calculator.svg"
                      alt="calculator_Three"
                    />
                    <Text
                      className="text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      9 650 000
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-start justify-start mt-[38px] w-3/4 md:w-full">
                    <Img
                      className="h-[13px]"
                      src="images/img_calculator.svg"
                      alt="calculator_Four"
                    />
                    <Text
                      className="text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      7 650 000
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-[35px] w-3/4 md:w-full">
                    <Img
                      className="h-[13px]"
                      src="images/img_calculator.svg"
                      alt="calculator_Five"
                    />
                    <Text
                      className="text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      9 650 000
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-9 w-3/4 md:w-full">
                    <Img
                      className="h-[13px]"
                      src="images/img_calculator.svg"
                      alt="calculator_Six"
                    />
                    <Text
                      className="text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      3 530 000
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-9 w-3/4 md:w-full">
                    <Img
                      className="h-[13px]"
                      src="images/img_calculator.svg"
                      alt="calculator_Seven"
                    />
                    <Text
                      className="text-gray-400 text-xs"
                      size="txtRobotoMedium12"
                    >
                      1 120 000
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2.5 items-center justify-start mt-[35px] w-[82%] md:w-full">
                    <Img
                      className="h-[13px]"
                      src="images/img_trash.svg"
                      alt="trash"
                    />
                    <Text
                      className="text-blue-400 text-xs"
                      size="txtRobotoMedium12Blue400"
                    >
                      56 084 000
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[282px] flex h-screen md:hidden justify-start left-[0] overflow-auto md:px-5 top-[0]"
        >
          <Img
            className="h-[82px] md:ml-[0] mx-[49px]"
            src="images/img_group834.svg"
            alt="groupSeventySix"
          />
          <Menu
            menuItemStyles={{
              button: {
                padding: "17px 17px 17px 40px",
                gap: "21px",
                color: "#6e768c",
                fontWeight: 500,
                fontSize: "14px",
                [`&:hover, &.ps-active`]: {
                  color: "#ffffff",
                  backgroundColor: "#4047577e !important",
                },
              },
            }}
            className="flex flex-col items-center justify-start mb-5 mt-[77px] py-5 w-full"
          >
            <div className="flex flex-col items-center justify-start w-full">
              <MenuItem
                icon={
                  <Img
                    className="h-6 w-6"
                    src="images/img_icoutlineshop.svg"
                    alt="icoutlineshop"
                  />
                }
                active={window.location.pathname === "/direktordashboard"}
                href="/direktordashboard"
              >
                <Text>DASHBOARD</Text>
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    className="h-6 w-6"
                    src="images/img_icoutlineshop_blue_gray_500.svg"
                    alt="icoutlineshop_One"
                  />
                }
              >
                <Text className="uppercase">OMBOR & SAVDO</Text>
              </MenuItem>
            </div>
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[282px] mt-[35px]"
              onClick={() => navigate("/showroombuyurtmalarstatusone")}
              leftIcon={
                <Img
                  className="h-6 mr-5"
                  src="images/img_rislideshowline.svg"
                  alt="ri:slideshow-line"
                />
              }
            >
              <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
                Sowroomlar oynasi
              </div>
            </Button>
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[282px] mt-[35px]"
              onClick={() => navigate("/kassa")}
              leftIcon={
                <Img
                  className="h-6 mr-5"
                  src="images/img_fluentclipboar.svg"
                  alt="fluent:clipboard-bullet-list-rtl-20-regular"
                />
              }
            >
              <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
                <>Hodimlar ro\&#96;yhati</>
              </div>
            </Button>
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[282px] mt-[35px]"
              onClick={() => navigate("/omborqoldiqidsibuyurtmalarroyhatione")}
              leftIcon={
                <Img
                  className="h-6 mr-5"
                  src="images/img_mdicircularsaw_blue_gray_500.svg"
                  alt="mdi:circular-saw"
                />
              }
            >
              <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
                Ombor qoldiq{" "}
              </div>
            </Button>
            <div className="flex flex-col md:gap-10 gap-[115px] items-center justify-end mt-[29px] w-full">
              <MenuItem
                icon={
                  <Img
                    className="h-[23px] mb-0.5"
                    src="images/img_camera.svg"
                    alt="camera"
                  />
                }
                active={window.location.pathname === "/moliyakirimtarixi"}
                href="/moliyakirimtarixi"
              >
                <Text className="uppercase">Kirim tarixi</Text>
              </MenuItem>
              <MenuItem
                icon={
                  <Img
                    className="h-6 w-6"
                    src="images/img_bipersonworkspace.svg"
                    alt="bipersonworkspa"
                  />
                }
              >
                <Text className="uppercase">
                  <>Mijozlar ro\&#96;yhati</>
                </Text>
              </MenuItem>
            </div>
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center mb-[73px] min-w-[282px]"
              onClick={() => navigate("/moliyachiqimtarixi")}
              leftIcon={
                <div className="mr-3.5 bg-blue_gray-500">
                  <Img
                    src="images/img_settings_blue_gray_500.svg"
                    alt="settings"
                  />
                </div>
              }
            >
              <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
                Chiqim tarixi
              </div>
            </Button>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};

export default MoliyaShowroomdankirimtarixiOnePage;
