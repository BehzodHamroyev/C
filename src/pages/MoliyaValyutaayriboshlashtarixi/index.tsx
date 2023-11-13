import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const toLovTuriOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MoliyaValyutaayriboshlashtarixiPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div className="md:h-[3816px] h-[900px] m-auto md:px-5 w-full">
          <Img
            className="h-[900px] m-auto object-cover w-full"
            src="images/img_global1_7.png"
            alt="globalOne"
          />
          <div className="absolute flex md:flex-col flex-row gap-[33px] h-max inset-[0] items-start justify-between m-auto w-[96%]">
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
            <div className="flex flex-col gap-[38px] items-center justify-start w-[82%] md:w-full">
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
                    alt="arrowdown_One"
                  />
                </div>
              </div>
              <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-start py-[29px] rounded-[5px] w-full">
                <div className="flex flex-col gap-3.5 items-center justify-start mb-[180px] w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-[96%] md:w-full">
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
                    <SelectBox
                      className="font-medium leading-[normal] md:mt-0 my-[3px] text-base text-left w-[19%] md:w-full"
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
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[461px] items-center justify-start p-3.5 w-full"
                    style={{
                      backgroundImage: "url('images/img_group400.svg')",
                    }}
                  >
                    <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[97%] md:w-full">
                      <div className="flex flex-col items-start justify-start mb-1 md:mt-0 mt-[53px]">
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
                      <div className="flex flex-col items-start justify-start mb-0.5 md:ml-[0] ml-[18px]">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Muomala turi
                        </Text>
                        <Text
                          className="mt-[34px] text-[15px] text-blue-400"
                          size="txtRobotoMedium15Blue400"
                        >
                          Dollardan sumga
                        </Text>
                        <Text
                          className="mt-[31px] text-[15px] text-blue-400"
                          size="txtRobotoMedium15Blue400"
                        >
                          Dollardan sumga
                        </Text>
                        <Text
                          className="mt-[30px] text-[15px] text-blue-400"
                          size="txtRobotoMedium15Blue400"
                        >
                          Dollardan sumga
                        </Text>
                        <Text
                          className="mt-[35px] text-[15px] text-blue-400"
                          size="txtRobotoMedium15Blue400"
                        >
                          Dollardan sumga
                        </Text>
                        <Text
                          className="mt-[35px] text-[15px] text-blue-400"
                          size="txtRobotoMedium15Blue400"
                        >
                          Dollardan sumga
                        </Text>
                        <Text
                          className="mt-8 text-[15px] text-blue-400"
                          size="txtRobotoMedium15Blue400"
                        >
                          Dollardan sumga
                        </Text>
                        <Text
                          className="mt-[33px] text-[15px] text-blue-400"
                          size="txtRobotoMedium15Blue400"
                        >
                          Dollardan sumga
                        </Text>
                        <Text
                          className="mt-[33px] text-[15px] text-blue-400"
                          size="txtRobotoMedium15Blue400"
                        >
                          Sumdan dollarga
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[33px] items-center justify-start mb-[5px] md:ml-[0] ml-[95px] w-[5%] md:w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Miqdori
                        </Text>
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            $ 300
                          </Text>
                          <Text
                            className="mt-[34px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            $ 300
                          </Text>
                          <Text
                            className="mt-[33px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            $ 300
                          </Text>
                          <Text
                            className="mt-[38px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            $ 300
                          </Text>
                          <Text
                            className="mt-[38px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            $ 300
                          </Text>
                          <Text
                            className="mt-[35px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            $ 300
                          </Text>
                          <Text
                            className="mt-9 text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            $ 300
                          </Text>
                          <Text
                            className="mt-9 text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            $ 300
                          </Text>
                        </div>
                      </div>
                      <List
                        className="sm:flex-col flex-row md:gap-10 gap-24 grid grid-cols-2 mb-[3px] md:ml-[0] ml-[89px] w-[22%] md:w-full"
                        orientation="horizontal"
                      >
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-[15px] text-blue_gray-500"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            <>To\&#96;lov turi</>
                          </Text>
                          <Text
                            className="mt-9 text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            naqd pul
                          </Text>
                          <Text
                            className="mt-[34px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            naqd pul
                          </Text>
                          <Text
                            className="mt-[33px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            hisob raqam
                          </Text>
                          <Text
                            className="mt-[38px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            naqd pul
                          </Text>
                          <Text
                            className="mt-[38px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            plastik
                          </Text>
                          <Text
                            className="mt-[35px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            naqd pul
                          </Text>
                          <Text
                            className="mt-9 text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            naqd pul
                          </Text>
                          <Text
                            className="mt-9 text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            naqd pul
                          </Text>
                        </div>
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-[15px] text-blue_gray-500"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            Summasi
                          </Text>
                          <Text
                            className="mt-[35px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            3 210 000
                          </Text>
                          <Text
                            className="mt-[34px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            3 210 000
                          </Text>
                          <Text
                            className="mt-[33px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            3 210 000
                          </Text>
                          <Text
                            className="mt-[38px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            3 210 000
                          </Text>
                          <Text
                            className="mt-[38px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            3 210 000
                          </Text>
                          <Text
                            className="mt-[35px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            3 210 000
                          </Text>
                          <Text
                            className="mt-9 text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            3 210 000
                          </Text>
                          <Text
                            className="mt-9 text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            3 210 000
                          </Text>
                        </div>
                      </List>
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[124px] md:mt-0 mt-[3px] w-[14%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-[15px] text-blue_gray-500"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            Izoh
                          </Text>
                          <div className="flex flex-row gap-[15px] items-end justify-between mt-[26px] w-full">
                            <Text
                              className="mt-[7px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              <>Mijoz to\&#96;lovi uchun</>
                            </Text>
                            <Img
                              className="h-6 w-6"
                              src="images/img_icroundkeyboa.svg"
                              alt="icroundkeyboa"
                            />
                          </div>
                          <div className="flex flex-row gap-[15px] items-end justify-between mt-[25px] w-full">
                            <Text
                              className="mt-[7px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              <>Mijoz to\&#96;lovi uchun</>
                            </Text>
                            <Img
                              className="h-6 w-6"
                              src="images/img_icroundkeyboa.svg"
                              alt="icroundkeyboa_One"
                            />
                          </div>
                          <div className="flex flex-row gap-[15px] items-start justify-between mt-[23px] w-full">
                            <Text
                              className="text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              <>Mijoz to\&#96;lovi uchun</>
                            </Text>
                            <Img
                              className="h-6 mt-[5px] w-6"
                              src="images/img_icroundkeyboa.svg"
                              alt="icroundkeyboa_Two"
                            />
                          </div>
                          <div className="flex flex-row gap-[15px] items-start justify-between mt-[17px] w-full">
                            <Text
                              className="text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              <>Mijoz to\&#96;lovi uchun</>
                            </Text>
                            <Img
                              className="h-6 mt-1.5 w-6"
                              src="images/img_icroundkeyboa.svg"
                              alt="icroundkeyboa_Three"
                            />
                          </div>
                          <div className="flex flex-row gap-[34px] items-end justify-between mt-8 w-full">
                            <Text
                              className="mt-1.5 text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              <>Mijoz to\&#96;lovi uchun</>
                            </Text>
                            <Img
                              className="h-6 w-6"
                              src="images/img_icroundkeyboa.svg"
                              alt="icroundkeyboa_Four"
                            />
                          </div>
                          <div className="flex flex-row gap-[15px] items-end justify-between mt-[26px] w-full">
                            <Text
                              className="mb-0.5 mt-1.5 text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              <>Mijoz to\&#96;lovi uchun</>
                            </Text>
                            <Img
                              className="h-6 w-6"
                              src="images/img_icroundkeyboa.svg"
                              alt="icroundkeyboa_Five"
                            />
                          </div>
                          <div className="flex flex-row gap-[34px] items-end justify-between mt-[27px] w-full">
                            <Text
                              className="mt-1.5 text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              <>Mijoz to\&#96;lovi uchun</>
                            </Text>
                            <Img
                              className="h-6 w-6"
                              src="images/img_icroundkeyboa.svg"
                              alt="icroundkeyboa_Six"
                            />
                          </div>
                          <div className="flex flex-row gap-[15px] items-end justify-between mt-[25px] w-full">
                            <Text
                              className="mt-[7px] text-gray-400 text-xs"
                              size="txtRobotoMedium12"
                            >
                              <>Mijoz to\&#96;lovi uchun</>
                            </Text>
                            <Img
                              className="h-6 w-6"
                              src="images/img_icroundkeyboa.svg"
                              alt="icroundkeyboa_Seven"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col gap-[33px] items-center justify-start mb-[5px] md:ml-[0] ml-[104px] w-[7%] md:w-full">
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
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-800_7e bottom-[37%] flex flex-col gap-[15px] items-center justify-end left-[0] md:px-5 py-2.5 w-1/5">
          <div className="flex flex-row gap-3 items-start justify-start mt-2 w-[82%] md:w-full">
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
          <div className="h-[60px] relative w-full">
            <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-end justify-center m-auto p-[19px] w-full">
              <Text
                className="mr-[37px] mt-0.5 text-base text-white-A700"
                size="txtRobotoMedium16WhiteA700"
              >
                Ayriboshlash tarixi
              </Text>
            </div>
            <Img
              className="absolute h-[60px] inset-y-[0] left-[0] my-auto object-cover w-[5%]"
              src="images/img_rectangle1564_30.png"
              alt="rectangle1564"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoliyaValyutaayriboshlashtarixiPage;
