import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const aynanOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MoliyaHodimlarroyhatiElevenPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div className="md:h-[2741px] h-[900px] m-auto md:px-5 w-full">
          <Img
            className="h-[900px] m-auto object-cover w-full"
            src="images/img_showroombuyurtmalar.png"
            alt="globalOne"
          />
          <div className="absolute flex flex-col gap-[15px] inset-x-[0] justify-start mx-auto top-[3%] w-[95%]">
            <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mr-[34px] w-[98%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-[51px] items-start justify-between w-[72%] md:w-full">
                <Img
                  className="h-[82px] md:mt-0 mt-[27px]"
                  src="images/img_group834.svg"
                  alt="groupSeventySix"
                />
                <FrameFiftyTwoDatafiltr className="flex md:flex-col flex-row gap-[17px] items-center justify-between w-[76%] md:w-full" />
              </div>
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
            </div>
            <div className="md:h-[2431px] sm:h-[663px] h-[666px] md:ml-[0] ml-[226px] relative w-[84%] md:w-full">
              <div className="absolute bg-blue_gray-900_87_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[13px] rounded-[5px] w-full">
                <div className="flex flex-col md:gap-10 gap-[549px] items-center justify-start mb-2.5 mt-0.5 w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="flex md:flex-1 sm:flex-col flex-row gap-[21px] items-center justify-between w-[38%] md:w-full">
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
                      className="md:flex-1 font-medium leading-[normal] md:mt-0 my-[3px] text-base text-left w-[19%] md:w-full"
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
                className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[9px] w-full"
                style={{ backgroundImage: "url('images/img_group421.svg')" }}
              >
                <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[95%] md:w-full">
                  <div className="flex flex-col items-start justify-start mb-[57px] md:mt-0 mt-[52px]">
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
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[151px] grid grid-cols-2 ml-9 md:ml-[0] md:mt-0 mt-[3px] w-[29%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Nomi
                      </Text>
                      <Text
                        className="mt-[33px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        1024
                      </Text>
                      <Text
                        className="mt-8 text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        1025
                      </Text>
                      <Text
                        className="mt-[30px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        1026
                      </Text>
                      <Text
                        className="mt-[35px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        1027
                      </Text>
                      <Text
                        className="mt-[35px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        1028
                      </Text>
                      <Text
                        className="mt-8 text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        1029
                      </Text>
                      <Text
                        className="mt-[33px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        1030
                      </Text>
                      <Text
                        className="mt-[33px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        1031
                      </Text>
                      <Text
                        className="mt-[34px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Jami:
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
                        Akfa diller Andijon
                      </Text>
                      <Text
                        className="mt-[34px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        akfa diller Namangan
                      </Text>
                      <Text
                        className="mt-[30px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        akfa diller Namangan
                      </Text>
                      <Text
                        className="mt-[43px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        <>akfa diller Farg\&#96;ona</>
                      </Text>
                      <Text
                        className="mt-[38px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        akfa diller Navoiy
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        akfa diller Navoiy
                      </Text>
                      <Text
                        className="mt-9 text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        akfa diller Navoiy
                      </Text>
                      <Text
                        className="mt-[34px] text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        akfa diller Jizzah
                      </Text>
                    </div>
                  </List>
                  <div className="flex flex-col items-center justify-start mb-1.5 md:ml-[0] ml-[86px] md:mt-0 mt-[3px] w-[9%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="ml-0.5 md:ml-[0] text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Summasi
                      </Text>
                      <div className="flex flex-row gap-2.5 items-center justify-start mt-[31px] w-[81%] md:w-full">
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
                      <div className="flex flex-row gap-2.5 items-center justify-start mt-[34px] w-[73%] md:w-full">
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
                      <div className="flex flex-row gap-2.5 items-center justify-start mt-[33px] w-[81%] md:w-full">
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
                      <div className="flex flex-row gap-2.5 items-center justify-start mt-[38px] w-[92%] md:w-full">
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
                      <div className="flex flex-row gap-2.5 items-start justify-start mt-[38px] w-full">
                        <Img
                          className="h-[13px]"
                          src="images/img_calculator.svg"
                          alt="calculator_Four"
                        />
                        <Text
                          className="text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          77 650 000
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-center justify-start mt-[35px] w-[92%] md:w-full">
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
                      <div className="flex flex-row gap-2.5 items-center justify-start mt-9 w-[92%] md:w-full">
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
                      <div className="flex flex-row gap-2.5 items-center justify-start mt-9 w-[92%] md:w-full">
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
                      <div className="flex flex-row gap-2.5 items-center justify-start mt-[35px] w-full">
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
                  <div className="flex flex-col items-center justify-start mb-[52px] md:ml-[0] ml-[135px] md:mt-0 mt-0.5 w-[14%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Izoh
                      </Text>
                      <div className="flex flex-row items-end justify-between mt-[26px] w-full">
                        <Text
                          className="mb-0.5 mt-1.5 text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Nexia: AB 735
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
                          Kia: AK 300{" "}
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_One"
                        />
                      </div>
                      <div className="flex flex-row gap-[11px] items-center justify-between mt-[23px] w-full">
                        <Text
                          className="text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          Hamkorbankdan olingan kredit 12%
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Two"
                        />
                      </div>
                      <div className="flex flex-row gap-[11px] items-center justify-between mt-[9px] w-full">
                        <Text
                          className="text-gray-400 text-xs"
                          size="txtRobotoMedium12"
                        >
                          20 noyabrda qaytarishi kerak
                        </Text>
                        <Img
                          className="h-6 w-6"
                          src="images/img_icroundkeyboa.svg"
                          alt="icroundkeyboa_Three"
                        />
                      </div>
                      <div className="flex flex-row items-end justify-between mt-[18px] w-full">
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
                  <List
                    className="sm:flex-col flex-row gap-12 grid grid-cols-2 mb-[58px] md:ml-[0] ml-[41px] w-[19%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col gap-[33px] items-center justify-start w-full">
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
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Muddat
                      </Text>
                      <Text
                        className="mt-[33px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 15. 2022
                      </Text>
                      <Text
                        className="mt-[35px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 16. 2022
                      </Text>
                      <Text
                        className="mt-[33px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 17. 2022
                      </Text>
                      <Text
                        className="mt-[38px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 18. 2022
                      </Text>
                      <Text
                        className="mt-[37px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 19. 2022
                      </Text>
                      <Text
                        className="mt-9 text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 20. 2022
                      </Text>
                      <Text
                        className="mt-[35px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 21. 2022
                      </Text>
                      <Text
                        className="mt-9 text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Sen 22. 2022
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-900 flex md:flex-col flex-row md:gap-5 items-center justify-end pl-[18px] md:px-5 right-[2%] rounded-[5px] shadow-bs4 top-[10%] w-[79%]">
          <OmborTaminotchigaZayavkaOneTab
            className="flex flex-col items-center justify-start w-[135px]"
            username="Diller"
          />
          <OmborTaminotchigaZayavkaOneTab
            className="flex flex-col items-center justify-start md:ml-[0] ml-[70px] w-[127px]"
            username="taminot"
          />
          <List
            className="sm:flex-col flex-row md:gap-10 gap-[68px] grid grid-cols-2 md:ml-[0] ml-[17px] w-[30%] md:w-full"
            orientation="horizontal"
          >
            <OmborTaminotchigaZayavkaOneTab
              className="flex flex-col items-center justify-start w-[129px]"
              username="Oyna "
            />
            <OmborTaminotchigaZayavkaOneTab
              className="flex flex-col items-center justify-start w-[129px]"
              username="Komunal"
            />
          </List>
          <OmborTaminotchigaZayavkaOneTab
            className="flex flex-col items-center justify-start md:ml-[0] ml-[30px] w-[142px]"
            username="Soliqlar"
          />
          <OmborTaminotchigaZayavkaOneTab
            className="flex flex-col items-center justify-start ml-0.5 md:ml-[0] w-[135px]"
            username="bank krediti"
          />
          <OmborTaminotchigaZayavkaOneTab
            className="flex flex-col items-center justify-start w-[126px]"
            username="Umumiy"
          />
        </div>
        <div className="absolute bottom-[31%] h-[60px] left-[0] md:px-5 w-1/5">
          <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-start justify-center m-auto p-[13px] w-full">
            <div className="flex flex-row gap-[19px] items-end justify-start mb-[5px] md:ml-[0] ml-[13px] w-[58%] md:w-full">
              <Img
                className="h-6 mb-0.5"
                src="images/img_union_orange_300.svg"
                alt="union"
              />
              <Text
                className="mt-[7px] text-base text-white-A700 uppercase"
                size="txtRobotoMedium16WhiteA700"
              >
                Qarzdorlik
              </Text>
            </div>
          </div>
          <div className="absolute bg-red-300 h-[60px] inset-y-[0] left-[0] my-auto w-[6%]"></div>
        </div>
        <div className="absolute flex flex-col items-start justify-start left-[1%] md:px-5 top-[28%] w-[17%]">
          <div className="flex flex-row gap-[25px] items-center justify-start w-[56%] md:w-full">
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
          <div className="flex flex-row gap-[21px] items-start justify-start ml-1 md:ml-[0] mt-6 w-[68%] md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_arrowdown_blue_gray_500.svg"
              alt="arrowdown_One"
            />
            <Text
              className="text-base text-blue_gray-500 uppercase"
              size="txtRobotoMedium16"
            >
              BUYURTMALAR
            </Text>
          </div>
          <div className="flex flex-row gap-[13px] items-start justify-start ml-1 md:ml-[0] mt-[27px] w-[38%] md:w-full">
            <Img
              className="h-6"
              src="images/img_settings_blue_gray_500.svg"
              alt="settings"
            />
            <Text
              className="text-base text-blue_gray-500 uppercase"
              size="txtRobotoMedium16"
            >
              Kirim{" "}
            </Text>
          </div>
          <div className="flex flex-row gap-3.5 items-center justify-start ml-1 md:ml-[0] mt-[31px] w-[43%] md:w-full">
            <Img
              className="h-6"
              src="images/img_settings_blue_gray_500.svg"
              alt="settings_One"
            />
            <Text
              className="text-base text-blue_gray-500 uppercase"
              size="txtRobotoMedium16"
            >
              Chiqim{" "}
            </Text>
          </div>
          <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[233px] ml-1 md:ml-[0] mt-[30px]"
            onClick={() => navigate("/moliyavalyutaayriboshlash")}
            leftIcon={
              <div className="mt-px mr-5 bg-blue_gray-500">
                <Img src="images/img_minimize.svg" alt="minimize" />
              </div>
            }
          >
            <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
              Valyuta ayriboshlash
            </div>
          </Button>
          <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[204px] md:ml-[0] ml-[3px] mt-[31px]"
            onClick={() => navigate("/moliyahodimlarroyhatisix")}
            leftIcon={
              <Img
                className="h-6 mr-6"
                src="images/img_fluentclipboar.svg"
                alt="fluent:clipboard-bullet-list-rtl-20-regular"
              />
            }
          >
            <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
              <>Hodimlar ro\&#96;yhati</>
            </div>
          </Button>
        </div>
        <Button
          className="common-pointer bg-transparent bottom-[27%] cursor-pointer flex items-center justify-center left-[2%] mb-[247px] min-w-[211px] ml-[26px]"
          onClick={() => navigate("/moliyahodimlarroyhatinine")}
          leftIcon={
            <Img
              className="h-[19px] mt-px mr-[27px] top-[0] right-[2%] absolute"
              src="images/img_ticket.svg"
              alt="ticket"
            />
          }
        >
          <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
            Mahsulot narxlari{" "}
          </div>
        </Button>
      </div>
    </>
  );
};

export default MoliyaHodimlarroyhatiElevenPage;
