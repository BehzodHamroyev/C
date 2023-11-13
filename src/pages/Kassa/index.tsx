import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const lavozimiOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const KassaPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat font-roboto h-[900px] mx-auto sm:pr-5 pr-[23px] py-[23px] relative w-full"
        style={{ backgroundImage: "url('images/img_kassa.png')" }}
      >
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start max-w-[1349px] mx-auto md:px-5 top-[3%] w-full">
          <div className="flex md:flex-col flex-row gap-[39px] items-start justify-between w-full">
            <Img
              className="h-[82px] md:mt-0 mt-[27px]"
              src="images/img_group834.svg"
              alt="groupSeventySix"
            />
            <div className="flex flex-col gap-5 items-center justify-start">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
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
              <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-start pr-[3px] py-[3px] rounded-[5px] w-full">
                <div className="flex flex-col gap-[27px] items-center justify-start mb-[84px] mt-[23px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[97%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between w-[39%] md:w-full">
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
                    <div className="flex flex-row gap-[22px] items-center justify-between w-[36%] md:w-full">
                      <div className="h-10 md:h-[39px] relative w-[52%]">
                        <div className="bg-blue_gray-800_8d border border-blue_gray-600_8d border-solid h-[39px] m-auto rounded-[5px] w-full"></div>
                        <SelectBox
                          className="absolute font-medium inset-[0] justify-center leading-[normal] m-auto text-base text-gray-400 text-left w-[87%] sm:w-full"
                          placeholderClassName="text-gray-400"
                          indicator={
                            <Img
                              className="h-[3px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[7px] right-[0] absolute"
                              src="images/img_arrowdown_gray_400.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group788"
                          options={lavozimiOptionsList}
                          isSearchable={false}
                          placeholder="Lavozimi"
                        />
                      </div>
                      <div
                        className="common-pointer bg-blue_gray-900 border border-blue_gray-600 border-solid flex flex-row gap-[11px] items-center justify-end pb-0.5 px-0.5 rounded-[5px] w-[43%]"
                        onClick={() => navigate("/kassaone")}
                      >
                        <OmborTaminotchigaZayavkaOneTab
                          className="flex flex-col h-[38px] md:h-auto items-center justify-start w-[105px]"
                          username="yangi hodim"
                        />
                        <Img
                          className="h-[21px] mr-2"
                          src="images/img_akariconsplus.svg"
                          alt="akariconsplus"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                    <Line className="bg-blue_gray-800_01 h-0.5 w-full" />
                    <div className="md:h-[2568px] h-[500px] relative w-full">
                      <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                        <div className="h-[74px] relative w-full">
                          <Text
                            className="absolute bottom-[19%] left-[1%] text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            001
                          </Text>
                          <Line className="bg-blue_gray-800_01 h-0.5 mt-[31px] mx-auto w-full" />
                          <Img
                            className="absolute h-[74px] inset-[0] justify-center m-auto"
                            src="images/img_group90.svg"
                            alt="groupEightyEight"
                          />
                        </div>
                        <div className="flex flex-col gap-3.5 justify-start mt-3 w-full">
                          <Text
                            className="ml-3 md:ml-[0] text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            002
                          </Text>
                          <div className="flex flex-col items-start justify-start w-full">
                            <Img
                              className="h-px"
                              src="images/img_group90.svg"
                              alt="groupNinety"
                            />
                            <Text
                              className="ml-3 md:ml-[0] mt-[11px] text-blue_gray-500 text-xs"
                              size="txtRobotoMedium12Bluegray500"
                            >
                              003
                            </Text>
                            <Img
                              className="h-px mt-3.5"
                              src="images/img_group90.svg"
                              alt="groupNinetyOne"
                            />
                            <Text
                              className="ml-3 md:ml-[0] mt-[15px] text-blue_gray-500 text-xs"
                              size="txtRobotoMedium12Bluegray500"
                            >
                              004
                            </Text>
                          </div>
                        </div>
                        <div className="flex h-[38px] md:h-[52px] justify-end mt-3.5 relative w-full">
                          <Text
                            className="mb-[7px] ml-3 mt-auto text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            005
                          </Text>
                          <Img
                            className="absolute h-[38px] inset-[0] justify-center m-auto"
                            src="images/img_group92.svg"
                            alt="groupNinetyTwo"
                          />
                        </div>
                        <div className="flex flex-col gap-3.5 justify-start mt-2 w-full">
                          <Text
                            className="ml-3 md:ml-[0] text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            006
                          </Text>
                          <div className="flex flex-col items-start justify-start w-full">
                            <Img
                              className="h-px"
                              src="images/img_group90.svg"
                              alt="group103"
                            />
                            <Text
                              className="ml-3 md:ml-[0] mt-[15px] text-blue_gray-500 text-xs"
                              size="txtRobotoMedium12Bluegray500"
                            >
                              007
                            </Text>
                            <Img
                              className="h-px mt-3.5"
                              src="images/img_group90.svg"
                              alt="group104"
                            />
                            <Text
                              className="ml-3 md:ml-[0] mt-[15px] text-blue_gray-500 text-xs"
                              size="txtRobotoMedium12Bluegray500"
                            >
                              008
                            </Text>
                            <Img
                              className="h-px mt-5"
                              src="images/img_group90.svg"
                              alt="group102"
                            />
                            <Text
                              className="ml-3 md:ml-[0] mt-[13px] text-blue_gray-500 text-xs"
                              size="txtRobotoMedium12Bluegray500"
                            >
                              009
                            </Text>
                            <Img
                              className="h-px mt-3.5"
                              src="images/img_group90.svg"
                              alt="groupNinetySeven"
                            />
                            <Text
                              className="ml-3 md:ml-[0] mt-[13px] text-blue_gray-500 text-xs"
                              size="txtRobotoMedium12Bluegray500"
                            >
                              010
                            </Text>
                            <Img
                              className="h-px mt-3.5"
                              src="images/img_group90.svg"
                              alt="groupNinetyEight"
                            />
                            <Text
                              className="ml-3 md:ml-[0] mt-[13px] text-blue_gray-500 text-xs"
                              size="txtRobotoMedium12Bluegray500"
                            >
                              011
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="absolute flex md:flex-col flex-row md:gap-10 h-full inset-[0] items-center justify-between m-auto w-[95%]">
                        <List
                          className="sm:flex-col flex-row gap-[38px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-5 w-[62%] md:w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col gap-[21px] justify-start w-full">
                            <Text
                              className="ml-1.5 md:ml-[0] text-blue_gray-500 text-xs"
                              size="txtRobotoMedium12Bluegray500"
                            >
                              Hodim
                            </Text>
                            <div className="flex flex-col items-start justify-start w-full">
                              <Text
                                className="text-blue-400 text-xs"
                                size="txtRobotoMedium12Blue400"
                              >
                                Botir Qodirov
                              </Text>
                              <Text
                                className="mt-[33px] text-blue-400 text-xs"
                                size="txtRobotoMedium12Blue400"
                              >
                                Sobir Ikromov
                              </Text>
                              <Text
                                className="mt-[27px] text-blue-400 text-xs"
                                size="txtRobotoMedium12Blue400"
                              >
                                <>Maftuna To\&#96;lanboyeva</>
                              </Text>
                              <Text
                                className="mt-[29px] text-blue-400 text-xs"
                                size="txtRobotoMedium12Blue400"
                              >
                                Nodir Fayziyev
                              </Text>
                              <Text
                                className="mt-7 text-blue-400 text-xs"
                                size="txtRobotoMedium12Blue400"
                              >
                                Fahriddin Mahmudov
                              </Text>
                              <Text
                                className="mt-[17px] text-blue-400 text-xs"
                                size="txtRobotoMedium12Blue400"
                              >
                                <>Maftuna To\&#96;lanboyeva</>
                              </Text>
                              <Text
                                className="mt-[29px] text-blue-400 text-xs"
                                size="txtRobotoMedium12Blue400"
                              >
                                Nodir Fayziyev
                              </Text>
                              <Text
                                className="mt-7 text-blue-400 text-xs"
                                size="txtRobotoMedium12Blue400"
                              >
                                Fahriddin Mahmudov
                              </Text>
                              <Text
                                className="mt-[34px] text-blue-400 text-xs"
                                size="txtRobotoMedium12Blue400"
                              >
                                Saida Komilova
                              </Text>
                              <Text
                                className="mt-[27px] text-blue-400 text-xs"
                                size="txtRobotoMedium12Blue400"
                              >
                                Mohira Abdumalikov
                              </Text>
                              <Text
                                className="mt-[29px] text-blue-400 text-xs"
                                size="txtRobotoMedium12Blue400"
                              >
                                Umarjon Mahkamjonov
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-500 text-xs"
                              size="txtRobotoMedium12Bluegray500"
                            >
                              Lavozimi
                            </Text>
                            <Text
                              className="mt-[31px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Menejer
                            </Text>
                            <Text
                              className="mt-[26px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Montajchi
                            </Text>
                            <Text
                              className="mt-[26px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Montajchi
                            </Text>
                            <Text
                              className="mt-[29px] text-gray-400 text-xs w-full"
                              size="txtRobotoMedium12"
                            >
                              Showroom operatori
                            </Text>
                            <Text
                              className="mt-[17px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Operatori
                            </Text>
                            <Text
                              className="mt-4 text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Operatori
                            </Text>
                            <Text
                              className="mt-7 text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Usta
                            </Text>
                            <Text
                              className="mt-[29px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Usta
                            </Text>
                            <Text
                              className="mt-[34px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Usta
                            </Text>
                            <Text
                              className="mt-[27px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Usta
                            </Text>
                            <Text
                              className="mt-[27px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Katta usta
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-500 text-xs"
                              size="txtRobotoMedium12Bluegray500"
                            >
                              Oylik maoshi
                            </Text>
                            <Text
                              className="mt-[29px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              2 000 000
                            </Text>
                            <Text
                              className="mt-[27px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              2 350 000
                            </Text>
                            <Text
                              className="mt-[26px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              3 000 000
                            </Text>
                            <Text
                              className="mt-[29px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              3 350 000
                            </Text>
                            <Text
                              className="mt-[29px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              3 000 000
                            </Text>
                            <Text
                              className="mt-4 text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              3 000 000
                            </Text>
                            <Text
                              className="mt-[29px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              5 000 000
                            </Text>
                            <Text
                              className="mt-[29px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              5 000 000
                            </Text>
                            <Text
                              className="mt-[34px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              5 000 000
                            </Text>
                            <Text
                              className="mt-[27px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              5 000 000
                            </Text>
                            <Text
                              className="mt-[27px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              5 000 000
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-500 text-xs"
                              size="txtRobotoMedium12Bluegray500"
                            >
                              Telefon raqami
                            </Text>
                            <Text
                              className="mt-5 text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              +998 88 333-22-33
                            </Text>
                            <Text
                              className="text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              +998 88 333-22-63
                            </Text>
                            <Text
                              className="mt-3.5 text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              +998 98 333-22-33
                            </Text>
                            <Text
                              className="text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              +998 98 333-22-63
                            </Text>
                            <Text
                              className="mt-2 text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              +998 98 333-22-33
                            </Text>
                            <Text
                              className="mt-[30px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              +998 98 333-22-33
                            </Text>
                            <Text
                              className="mt-[26px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              +998 98 333-22-33
                            </Text>
                            <Text
                              className="text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              +998 98 333-22-63
                            </Text>
                            <Text
                              className="mt-2 text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              +998 98 333-22-33
                            </Text>
                            <Text
                              className="mt-6 text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              +998 98 333-22-33
                            </Text>
                            <Text
                              className="mt-8 text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              +998 98 333-22-33
                            </Text>
                            <Text
                              className="text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              +998 98 333-22-63
                            </Text>
                            <Text
                              className="mt-[18px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              +998 98 333-22-33
                            </Text>
                            <Text
                              className="mt-7 text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              +998 98 333-22-33
                            </Text>
                            <Text
                              className="text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              +998 98 333-22-63
                            </Text>
                            <Text
                              className="mt-3 text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              +998 98 333-22-33
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-blue_gray-500 text-xs"
                              size="txtRobotoMedium12Bluegray500"
                            >
                              <>Tug\&#96;ilgan sana</>
                            </Text>
                            <Text
                              className="mt-[29px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Sen 11. 2022
                            </Text>
                            <Text
                              className="mt-[27px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Sen 12. 2022
                            </Text>
                            <Text
                              className="mt-[26px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Sen 12. 2022
                            </Text>
                            <Text
                              className="mt-[29px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Sen 12. 2022
                            </Text>
                            <Text
                              className="mt-[29px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Sen 12. 2022
                            </Text>
                            <Text
                              className="mt-4 text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Sen 12. 2022
                            </Text>
                            <Text
                              className="mt-[29px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Sen 12. 2022
                            </Text>
                            <Text
                              className="mt-[29px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Sen 12. 2022
                            </Text>
                            <Text
                              className="mt-[34px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Sen 13. 2022
                            </Text>
                            <Text
                              className="mt-[27px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Sen 13. 2022
                            </Text>
                            <Text
                              className="mt-[27px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              Sen 13. 2022
                            </Text>
                          </div>
                        </List>
                        <div className="flex flex-col gap-[17px] items-start justify-start w-[9%] md:w-full">
                          <Text
                            className="text-[15px] text-blue_gray-500"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            Login & Parol
                          </Text>
                          <List
                            className="flex flex-col gap-3.5 w-[74%]"
                            orientation="vertical"
                          >
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-gray-400 text-xs"
                                  size="txtRobotoMedium12"
                                >
                                  @SuperMan
                                </Text>
                                <div className="flex flex-row gap-[9px] items-start justify-start w-[81%] md:w-full">
                                  <Img
                                    className="h-3 mt-0.5 w-3"
                                    src="images/img_bieyefill.svg"
                                    alt="bieyefill"
                                  />
                                  <Text
                                    className="text-blue_gray-500 text-xs"
                                    size="txtRobotoMedium12Bluegray500"
                                  >
                                    ******
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-gray-400 text-xs"
                                  size="txtRobotoMedium12"
                                >
                                  @SuperMan
                                </Text>
                                <div className="flex flex-row gap-[9px] items-start justify-start w-[81%] md:w-full">
                                  <Img
                                    className="h-3 mt-0.5 w-3"
                                    src="images/img_bieyefill.svg"
                                    alt="bieyefill"
                                  />
                                  <Text
                                    className="text-blue_gray-500 text-xs"
                                    size="txtRobotoMedium12Bluegray500"
                                  >
                                    ******
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-gray-400 text-xs"
                                  size="txtRobotoMedium12"
                                >
                                  @SuperMan
                                </Text>
                                <div className="flex flex-row gap-[9px] items-start justify-start w-[81%] md:w-full">
                                  <Img
                                    className="h-3 mt-0.5 w-3"
                                    src="images/img_bieyefill.svg"
                                    alt="bieyefill"
                                  />
                                  <Text
                                    className="text-blue_gray-500 text-xs"
                                    size="txtRobotoMedium12Bluegray500"
                                  >
                                    ******
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-gray-400 text-xs"
                                  size="txtRobotoMedium12"
                                >
                                  @SuperMan
                                </Text>
                                <div className="flex flex-row gap-[9px] items-start justify-start w-[81%] md:w-full">
                                  <Img
                                    className="h-3 mt-0.5 w-3"
                                    src="images/img_bieyefill.svg"
                                    alt="bieyefill"
                                  />
                                  <Text
                                    className="text-blue_gray-500 text-xs"
                                    size="txtRobotoMedium12Bluegray500"
                                  >
                                    ******
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-gray-400 text-xs"
                                  size="txtRobotoMedium12"
                                >
                                  @SuperMan
                                </Text>
                                <div className="flex flex-row gap-[9px] items-start justify-start w-[81%] md:w-full">
                                  <Img
                                    className="h-3 mt-0.5 w-3"
                                    src="images/img_bieyefill.svg"
                                    alt="bieyefill"
                                  />
                                  <Text
                                    className="text-blue_gray-500 text-xs"
                                    size="txtRobotoMedium12Bluegray500"
                                  >
                                    ******
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-gray-400 text-xs"
                                  size="txtRobotoMedium12"
                                >
                                  @SuperMan
                                </Text>
                                <div className="flex flex-row gap-[9px] items-start justify-start w-[81%] md:w-full">
                                  <Img
                                    className="h-3 mt-0.5 w-3"
                                    src="images/img_bieyefill.svg"
                                    alt="bieyefill"
                                  />
                                  <Text
                                    className="text-blue_gray-500 text-xs"
                                    size="txtRobotoMedium12Bluegray500"
                                  >
                                    ******
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-gray-400 text-xs"
                                  size="txtRobotoMedium12"
                                >
                                  @SuperMan
                                </Text>
                                <div className="flex flex-row gap-[9px] items-start justify-start w-[81%] md:w-full">
                                  <Img
                                    className="h-3 mt-0.5 w-3"
                                    src="images/img_bieyefill.svg"
                                    alt="bieyefill"
                                  />
                                  <Text
                                    className="text-blue_gray-500 text-xs"
                                    size="txtRobotoMedium12Bluegray500"
                                  >
                                    ******
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-gray-400 text-xs"
                                  size="txtRobotoMedium12"
                                >
                                  @SuperMan
                                </Text>
                                <div className="flex flex-row gap-[9px] items-start justify-start w-[81%] md:w-full">
                                  <Img
                                    className="h-3 mt-0.5 w-3"
                                    src="images/img_bieyefill.svg"
                                    alt="bieyefill"
                                  />
                                  <Text
                                    className="text-blue_gray-500 text-xs"
                                    size="txtRobotoMedium12Bluegray500"
                                  >
                                    ******
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-gray-400 text-xs"
                                  size="txtRobotoMedium12"
                                >
                                  @SuperMan
                                </Text>
                                <div className="flex flex-row gap-[9px] items-start justify-start w-[81%] md:w-full">
                                  <Img
                                    className="h-3 mt-0.5 w-3"
                                    src="images/img_bieyefill.svg"
                                    alt="bieyefill"
                                  />
                                  <Text
                                    className="text-blue_gray-500 text-xs"
                                    size="txtRobotoMedium12Bluegray500"
                                  >
                                    ******
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-gray-400 text-xs"
                                  size="txtRobotoMedium12"
                                >
                                  @SuperMan
                                </Text>
                                <div className="flex flex-row gap-[9px] items-start justify-start w-[81%] md:w-full">
                                  <Img
                                    className="h-3 mt-0.5 w-3"
                                    src="images/img_bieyefill.svg"
                                    alt="bieyefill"
                                  />
                                  <Text
                                    className="text-blue_gray-500 text-xs"
                                    size="txtRobotoMedium12Bluegray500"
                                  >
                                    ******
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-gray-400 text-xs"
                                  size="txtRobotoMedium12"
                                >
                                  @SuperMan
                                </Text>
                                <div className="flex flex-row gap-[9px] items-start justify-start w-[81%] md:w-full">
                                  <Img
                                    className="h-3 mt-0.5 w-3"
                                    src="images/img_bieyefill.svg"
                                    alt="bieyefill"
                                  />
                                  <Text
                                    className="text-blue_gray-500 text-xs"
                                    size="txtRobotoMedium12Bluegray500"
                                  >
                                    ******
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </List>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="ml-0.5 md:ml-[0] text-[15px] text-blue_gray-500"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            Manzili
                          </Text>
                          <Text
                            className="mt-4 text-[10px] text-blue_gray-500"
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
                            className="text-[10px] text-gray-400"
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
                            className="mt-[7px] text-[10px] text-gray-400"
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
                            className="mt-[11px] text-[10px] text-blue_gray-500"
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
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            Ishga kelgan sana
                          </Text>
                          <Text
                            className="ml-0.5 md:ml-[0] mt-[29px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Sen 11. 2022
                          </Text>
                          <Text
                            className="ml-0.5 md:ml-[0] mt-[27px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Sen 12. 2022
                          </Text>
                          <Text
                            className="ml-0.5 md:ml-[0] mt-[26px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Sen 12. 2022
                          </Text>
                          <Text
                            className="ml-0.5 md:ml-[0] mt-[29px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Sen 12. 2022
                          </Text>
                          <Text
                            className="ml-0.5 md:ml-[0] mt-[29px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Sen 12. 2022
                          </Text>
                          <Text
                            className="ml-0.5 md:ml-[0] mt-4 text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Sen 12. 2022
                          </Text>
                          <Text
                            className="ml-0.5 md:ml-[0] mt-[29px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Sen 12. 2022
                          </Text>
                          <Text
                            className="ml-0.5 md:ml-[0] mt-[29px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Sen 12. 2022
                          </Text>
                          <Text
                            className="ml-0.5 md:ml-[0] mt-[34px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Sen 13. 2022
                          </Text>
                          <Text
                            className="ml-0.5 md:ml-[0] mt-[27px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Sen 13. 2022
                          </Text>
                          <Text
                            className="ml-0.5 md:ml-[0] mt-[27px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Sen 13. 2022
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-px"
                      src="images/img_group90.svg"
                      alt="groupNinetyNine"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-800_7e flex flex-row gap-3.5 items-center justify-start left-[0] pr-[41px] md:px-5 top-[42%] w-1/5">
          <div className="bg-red-300 h-[60px] w-[7%]"></div>
          <div className="flex flex-row gap-5 items-start justify-start w-[87%]">
            <Img
              className="h-6 w-6"
              src="images/img_fluentclipboar_white_a700.svg"
              alt="fluentclipboar"
            />
            <Text
              className="mt-[3px] text-base text-white-A700 uppercase"
              size="txtRobotoMedium16WhiteA700"
            >
              <>Hodimlar ro\&#96;yhati</>
            </Text>
          </div>
        </div>
        <div className="absolute flex flex-row gap-[21px] items-center justify-center left-[2%] md:px-5 top-[27%] w-[9%]">
          <Img
            className="h-6 w-6"
            src="images/img_icoutlineshop.svg"
            alt="icoutlineshop"
          />
          <Text className="text-blue_gray-500 text-sm" size="txtRobotoMedium14">
            DASHBOARD
          </Text>
        </div>
        <Button
          className="common-pointer bg-transparent bottom-[45%] cursor-pointer flex items-center justify-center left-[2%] mb-96 min-w-[161px] ml-[31px]"
          onClick={() => navigate("/omborqoldiqidsibuyurtmalarroyhatione")}
          leftIcon={
            <Img
              className="h-6 mr-5 right-[3%] absolute"
              src="images/img_mdicircularsaw_blue_gray_500.svg"
              alt="mdi:circular-saw"
            />
          }
        >
          <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
            Ombor qoldiq{" "}
          </div>
        </Button>
        <Button
          className="common-pointer bg-transparent bottom-[39%] cursor-pointer flex items-center justify-center left-[2%] mb-[327px] min-w-[138px] ml-[33px]"
          onClick={() => navigate("/moliyakirimtarixione")}
          leftIcon={
            <div className="mr-[13px] bg-blue_gray-500 right-[3%] absolute">
              <Img
                className="absolute"
                src="images/img_settings_blue_gray_500.svg"
                alt="settings"
              />
            </div>
          }
        >
          <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
            Kirim tarixi
          </div>
        </Button>
        <Button
          className="common-pointer bg-transparent bottom-[33%] cursor-pointer flex items-center justify-center left-[2%] mb-[271px] min-w-[151px] ml-[33px]"
          onClick={() => navigate("/moliyachiqimtarixi")}
          leftIcon={
            <div className="mr-3.5 bg-blue_gray-500 right-[3%] absolute">
              <Img
                className="absolute"
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
        <div className="absolute bottom-[26%] flex flex-row gap-[18px] items-start justify-start left-[2%] md:px-5 w-[15%]">
          <Img
            className="h-[21px]"
            src="images/img_user_blue_gray_500.svg"
            alt="user"
          />
          <Text
            className="text-base text-blue_gray-500 uppercase"
            size="txtRobotoMedium16"
          >
            Buyurtmaga chiqim
          </Text>
        </div>
        <div className="absolute bottom-[20%] flex flex-row gap-5 items-center justify-center left-[2%] md:px-5 w-[13%]">
          <Img
            className="h-6 w-6"
            src="images/img_bipersonworkspace.svg"
            alt="bipersonworkspa"
          />
          <Text
            className="text-blue_gray-500 text-sm uppercase"
            size="txtRobotoMedium14"
          >
            <>Mijozlar ro\&#96;yhati</>
          </Text>
        </div>
        <div className="absolute flex flex-row gap-[21px] items-center justify-center left-[2%] md:px-5 top-[32%] w-[11%]">
          <Img
            className="h-6 w-6"
            src="images/img_icoutlineshop_blue_gray_500.svg"
            alt="icoutlineshop_One"
          />
          <Text
            className="text-blue_gray-500 text-sm uppercase"
            size="txtRobotoMedium14"
          >
            OMBOR & SAVDO
          </Text>
        </div>
        <Button
          className="common-pointer bg-transparent cursor-pointer flex items-center justify-center left-[2%] min-w-[215px] ml-[29px] mt-[310px] top-[37%]"
          onClick={() => navigate("/showroombuyurtmalarstatusone")}
          leftIcon={
            <Img
              className="h-6 mr-5 right-[3%] absolute"
              src="images/img_rislideshowline.svg"
              alt="ri:slideshow-line"
            />
          }
        >
          <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
            Sowroomlar oynasi
          </div>
        </Button>
      </div>
    </>
  );
};

export default KassaPage;
