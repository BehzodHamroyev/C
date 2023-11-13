import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, SelectBox, Text, TextArea } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const dollardanSumgaOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MoliyaValyutaayriboshlashPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div className="absolute md:h-[2021px] h-[900px] inset-[0] justify-center m-auto md:px-5 w-full">
          <Img
            className="h-[900px] m-auto object-cover w-full"
            src="images/img_global1_6.png"
            alt="globalOne"
          />
          <div className="absolute flex md:flex-col flex-row gap-[38px] inset-x-[0] items-start justify-between mx-auto top-[3%] w-[96%]">
            <div className="flex flex-col md:gap-10 gap-[99px] justify-start md:mt-0 mt-[27px] w-[16%] md:w-full">
              <Img
                className="h-[82px] md:ml-[0] ml-[26px]"
                src="images/img_group834.svg"
                alt="groupSeventySix"
              />
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row gap-[25px] items-center justify-start w-[62%] md:w-full">
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
                <div className="flex flex-row gap-[21px] items-start justify-start ml-1 md:ml-[0] mt-6 w-3/4 md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_arrowdown_blue_gray_500.svg"
                    alt="arrowdown"
                  />
                  <Text
                    className="text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    BUYURTMALAR
                  </Text>
                </div>
                <div className="flex flex-row gap-[13px] items-start justify-start ml-1 md:ml-[0] mt-[27px] w-[42%] md:w-full">
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
                <div className="flex flex-row gap-3.5 items-center justify-start ml-1 md:ml-[0] mt-[31px] w-[48%] md:w-full">
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
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[204px] md:ml-[0] ml-[3px] mt-[157px]"
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
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[131px] ml-1 md:ml-[0] mt-[33px]"
                  onClick={() => navigate("/moliyahodimlarroyhati")}
                  leftIcon={
                    <div className="mr-[22px] bg-blue_gray-500">
                      <Img
                        src="images/img_union_blue_gray_500.svg"
                        alt="Union"
                      />
                    </div>
                  }
                >
                  <div className="font-medium leading-[normal] text-blue_gray-500 text-left text-sm uppercase">
                    qarzdorlik
                  </div>
                </Button>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[211px] ml-1 md:ml-[0] mt-[33px]"
                  onClick={() => navigate("/moliyahodimlarroyhatinine")}
                  leftIcon={
                    <Img
                      className="h-[19px] mt-px mr-[27px]"
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
            </div>
            <div className="flex flex-col gap-[31px] items-center justify-start w-[82%] md:w-full">
              <div className="flex flex-col gap-[41px] items-center justify-start w-full">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                  <FrameFiftyTwoDatafiltr className="flex md:flex-col flex-row gap-[17px] items-center justify-between w-[66%] md:w-full" />
                  <div className="flex flex-row items-center justify-end w-[21%] md:w-full">
                    <div className="h-[38px] relative w-[38px]">
                      <Img
                        className="h-[38px] m-auto rounded-[50%] w-[38px]"
                        src="images/img_il1588xn1_5.png"
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
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-start justify-start p-[15px] rounded-[5px] w-[24%] md:w-full">
                    <div className="flex flex-col gap-[15px] items-end justify-start md:ml-[0] ml-[66px] w-[29%] md:w-full">
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-blue_gray-500 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Valyuta
                        </Text>
                      </div>
                      <div className="flex flex-row gap-2.5 items-end justify-start w-full">
                        <Text
                          className="mb-0.5 mt-3 text-[15px] text-light_green-400"
                          size="txtRobotoMedium15"
                        >
                          $
                        </Text>
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-light_green-400"
                          size="txtRobotoMedium28"
                        >
                          300
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-end justify-end p-4 rounded-[5px] w-[24%] md:w-full">
                    <div className="flex flex-col items-center justify-start mr-4 w-[70%] md:w-full">
                      <div className="flex flex-col gap-3 justify-start w-full">
                        <Text
                          className="ml-9 md:ml-[0] text-blue_gray-500 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Summa
                        </Text>
                        <div className="flex flex-row gap-[5px] items-end justify-evenly w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-blue-400"
                            size="txtRobotoMedium28Blue400"
                          >
                            3 210 000
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
                  <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-start justify-end p-[18px] rounded-[5px] w-[24%] md:w-full">
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[52px] w-[49%] md:w-full">
                      <div className="flex flex-col gap-[9px] justify-start w-full">
                        <Text
                          className="text-blue_gray-500 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Operatsiyalar soni
                        </Text>
                        <div className="flex flex-row gap-2 h-[33px] items-end justify-end md:ml-[0] ml-[46px] w-[33px]">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-red-300"
                            size="txtRobotoMedium28Red300"
                          >
                            1
                          </Text>
                          <Text
                            className="mb-0.5 mt-3 text-[15px] text-red-300"
                            size="txtRobotoMedium15Red300"
                          >
                            ta
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-orange-300 h-24 md:h-[89px] relative rounded-[5px] w-[24%] md:w-full">
                    <div className="bg-blue_gray-800_03 h-[21px] mt-[3px] mx-auto rounded-[5px] w-[48%]"></div>
                    <div className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[4%] w-[74%]">
                      <div className="flex flex-col gap-1.5 justify-start w-full">
                        <Text
                          className="md:ml-[0] ml-[23px] text-lg text-white-A700 tracking-[7.29px]"
                          size="txtRobotoMedium18WhiteA700"
                        >
                          SEYFDA
                        </Text>
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <div className="md:h-[30px] h-[61px] relative w-[81%]">
                            <Text
                              className="absolute inset-x-[0] mx-auto sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-800_03 top-[0] w-max"
                              size="txtRobotoMedium28Bluegray80003"
                            >
                              214 200 000
                            </Text>
                            <Text
                              className="absolute bottom-[0] left-[31%] sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-800_03"
                              size="txtRobotoMedium28Bluegray80003"
                            >
                              300
                            </Text>
                            <Text
                              className="absolute bottom-[8%] right-[11%] text-[15px] text-blue_gray-800_03"
                              size="txtRobotoMedium15Bluegray80003"
                            >
                              dollar
                            </Text>
                          </div>
                          <Text
                            className="mt-[11px] text-[15px] text-blue_gray-800_03"
                            size="txtRobotoMedium15Bluegray80003"
                          >
                            <>so\&#96;m</>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-blue_gray-900_87_01 flex flex-col items-start justify-start p-[45px] md:px-10 sm:px-5 rounded-[5px] shadow-bs6 w-full">
                    <div className="flex flex-col items-start justify-start mb-[45px] w-[95%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                        <div className="md:h-[110px] h-[142px] relative w-[47%] md:w-full">
                          <div className="absolute bottom-[0] flex flex-col items-center justify-start left-[0] w-[66%]">
                            <div className="flex flex-row gap-3.5 items-center justify-between w-full">
                              <Button
                                className="cursor-pointer font-medium leading-[normal] min-w-[142px] rounded-[3px] text-center text-xl"
                                shape="round"
                                color="blue_gray_500"
                                size="xs"
                                variant="fill"
                              >
                                Kurs
                              </Button>
                              <div className="bg-blue_gray-800 flex flex-col items-center justify-start p-1 rounded-[3px]">
                                <Text
                                  className="text-blue_gray-500 text-center text-xl"
                                  size="txtRobotoMedium20Bluegray500"
                                >
                                  10 700
                                </Text>
                              </div>
                            </div>
                          </div>
                          <div className="absolute flex flex-col gap-[5px] inset-x-[0] justify-start mx-auto top-[0] w-full">
                            <Text
                              className="ml-3.5 md:ml-[0] text-blue_gray-500_99 text-xs"
                              size="txtRobotoMedium12Bluegray50099"
                            >
                              Muomala turi
                            </Text>
                            <div className="flex flex-col gap-7 items-center justify-start w-full">
                              <SelectBox
                                className="font-medium leading-[normal] text-base text-left w-full"
                                placeholderClassName="text-white-A700"
                                indicator={
                                  <Img
                                    className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-[13px]"
                                    src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="group626"
                                options={dollardanSumgaOptionsList}
                                isSearchable={false}
                                placeholder="Dollardan sumga"
                                shape="round"
                                color="blue_gray_800_87_04"
                                size="xl"
                                variant="fill"
                              />
                              <div className="flex flex-col items-center justify-start w-[23%] md:w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <Text
                                    className="text-[8px] text-blue_gray-500_99"
                                    size="txtRobotoMedium8Bluegray50099"
                                  >
                                    <>Markaziy bank kusi bo\&#96;yicha</>
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col justify-start w-[47%] md:w-full">
                          <Text
                            className="md:ml-[0] ml-[5px] text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            Aynan
                          </Text>
                          <TextArea
                            className="bg-gray-900_87 border-0 font-medium leading-[normal] mt-0.5 pb-[35px] pl-5 sm:pr-5 pr-[35px] pt-4 rounded-[3px] text-base text-left placeholder:text-white-A700 text-white-A700 w-full"
                            name="group625"
                            placeholder="Mijoz to\&#96;lovni amalga oshirishi uchun"
                          ></TextArea>
                        </div>
                      </div>
                      <div className="flex flex-col justify-start mt-6 w-[47%] md:w-full">
                        <Text
                          className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                          size="txtRobotoMedium12Bluegray50099"
                        >
                          Miqdori
                        </Text>
                        <div className="bg-gray-900_87 flex flex-row items-center justify-between mt-[3px] p-3.5 rounded-[3px] w-full">
                          <Text
                            className="my-0.5 text-base text-white-A700"
                            size="txtRobotoMedium16WhiteA700"
                          >
                            300
                          </Text>
                          <div className="flex flex-row items-start justify-start mr-[15px] my-0.5">
                            <Img
                              className="h-[13px]"
                              src="images/img_calculator.svg"
                              alt="calculator"
                            />
                            <Text
                              className="ml-[7px] text-base text-gray-400"
                              size="txtRobotoMedium16Gray400"
                            >
                              Naqd pul
                            </Text>
                            <Img
                              className="h-[5px] ml-[57px] mt-[5px]"
                              src="images/img_arrowdown_blue_gray_500_3x7.svg"
                              alt="arrowdown_Two"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-start mt-3.5 w-[47%] md:w-full">
                        <Text
                          className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                          size="txtRobotoMedium12Bluegray50099"
                        >
                          Summa
                        </Text>
                        <div className="bg-gray-900_87 flex flex-row items-start justify-between mt-1 p-3.5 rounded-[3px] w-full">
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            3 210 000
                          </Text>
                          <div className="flex flex-row items-start justify-start mr-[15px] my-0.5">
                            <Img
                              className="h-[13px]"
                              src="images/img_calculator.svg"
                              alt="calculator_One"
                            />
                            <Text
                              className="ml-[7px] text-base text-gray-400"
                              size="txtRobotoMedium16Gray400"
                            >
                              Naqd pul
                            </Text>
                            <Img
                              className="h-[5px] ml-[57px] mt-[5px]"
                              src="images/img_arrowdown_blue_gray_500_3x7.svg"
                              alt="arrowdown_Three"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[38px] w-[47%] md:w-full">
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[455px] sm:min-w-full rounded-[3px] sm:text-[17px] md:text-[19px] text-[21px] text-center"
                          shape="round"
                          color="blue_400"
                          size="md"
                          variant="fill"
                        >
                          TASDIQLASH
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-800_7e bottom-[37%] flex flex-col gap-[21px] justify-start left-[0] pb-[30px] md:px-5 w-1/5">
          <div className="h-[60px] relative w-full">
            <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-center justify-center m-auto p-4 w-full">
              <div className="flex flex-row gap-3 items-start justify-start mt-0.5 w-[93%] md:w-full">
                <Img
                  className="h-6"
                  src="images/img_minimize_white_a700.svg"
                  alt="minimize"
                />
                <Text
                  className="text-base text-white-A700 uppercase"
                  size="txtRobotoMedium16WhiteA700"
                >
                  Valyuta ayriboshlash{" "}
                </Text>
              </div>
            </div>
            <div className="absolute bg-red-300 h-[60px] inset-y-[0] left-[0] my-auto w-[6%]"></div>
          </div>
          <Text
            className="md:ml-[0] ml-[87px] text-base text-blue_gray-500"
            size="txtRobotoMedium16"
          >
            Ayriboshlash tarixi
          </Text>
        </div>
      </div>
    </>
  );
};

export default MoliyaValyutaayriboshlashPage;
