import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, List, SelectBox, Text } from "components";
import MoliyaKassaRowsaralash from "components/MoliyaKassaRowsaralash";

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

const MoliyaKirimtarixiPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div className="absolute md:h-[2947px] sm:h-[899px] h-[900px] inset-[0] justify-center m-auto md:px-5 w-full">
          <Img
            className="h-[899px] m-auto object-cover w-full"
            src="images/img_global1_899x1439.png"
            alt="globalOne"
          />
          <div className="absolute flex md:flex-col flex-row gap-2 h-max inset-[0] items-start justify-center m-auto w-[96%]">
            <div className="flex flex-col md:gap-10 gap-24 justify-start md:mt-0 mt-[27px] w-[18%] md:w-full">
              <Img
                className="h-[82px] md:ml-[0] ml-[19px]"
                src="images/img_group834.svg"
                alt="groupSeventySix"
              />
              <div className="flex flex-col items-start justify-start w-full">
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
                    alt="arrowdown"
                  />
                  <Text
                    className="text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    BUYURTMALAR
                  </Text>
                </div>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[102px] ml-1 md:ml-[0] mt-[200px]"
                  onClick={() => navigate("/moliyakirimqilishsix")}
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
                    Chiqim{" "}
                  </div>
                </Button>
                <div className="flex flex-row gap-5 items-start justify-start ml-1 md:ml-[0] mt-[30px] w-[98%] md:w-full">
                  <Img
                    className="h-6"
                    src="images/img_minimize.svg"
                    alt="minimize"
                  />
                  <Text
                    className="text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    Valyuta ayriboshlash
                  </Text>
                </div>
                <div className="flex flex-row gap-6 items-start justify-start md:ml-[0] ml-[3px] mt-[31px] w-[86%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_fluentclipboar.svg"
                    alt="fluentclipboar"
                  />
                  <Text
                    className="mt-[3px] text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    <>Hodimlar ro\&#96;yhati</>
                  </Text>
                </div>
                <div className="flex flex-row gap-[22px] items-start justify-start ml-1 md:ml-[0] mt-[33px] w-[56%] md:w-full">
                  <Img
                    className="h-[21px]"
                    src="images/img_union_blue_gray_500.svg"
                    alt="union"
                  />
                  <Text
                    className="mt-1 text-blue_gray-500 text-sm uppercase"
                    size="txtRobotoMedium14"
                  >
                    qarzdorlik
                  </Text>
                </div>
                <div className="flex flex-row gap-[27px] items-center justify-start ml-1 md:ml-[0] mt-[33px] w-[89%] md:w-full">
                  <Img
                    className="h-[19px] w-[19px]"
                    src="images/img_ticket.svg"
                    alt="ticket"
                  />
                  <Text
                    className="text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    Mahsulot narxlari{" "}
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[23px] items-center justify-start w-[83%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                <MoliyaKassaRowsaralash className="flex md:flex-col flex-row gap-[17px] items-center justify-between w-[66%] md:w-full" />
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
              <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-start py-[18px] rounded-[5px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[97%] md:w-full">
                    <div className="flex sm:flex-col flex-row gap-6 items-center justify-between w-[38%] md:w-full">
                      <Img
                        className="h-[18px] w-[17px]"
                        src="images/img_refresh.svg"
                        alt="refresh"
                      />
                      <Input
                        name="group397"
                        placeholder="Izlash"
                        className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                        wrapClassName="sm:w-full"
                        shape="round"
                        color="blue_gray_800"
                        size="sm"
                        variant="fill"
                      ></Input>
                    </div>
                    <SelectBox
                      className="font-medium leading-[normal] md:ml-[0] ml-[261px] text-base text-left w-[18%] md:w-full"
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
                      className="font-medium leading-[normal] md:ml-[0] ml-[25px] text-base text-left w-[18%] md:w-full"
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
                  <div className="md:h-[1754px] h-[489px] sm:h-[503px] mt-[27px] relative w-full">
                    <div
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[456px] inset-x-[0] items-center justify-start mx-auto p-2.5 top-[0] w-full"
                      style={{
                        backgroundImage: "url('images/img_group400.svg')",
                      }}
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
                    <div className="absolute flex flex-col h-max inset-y-[0] items-start justify-start left-[7%] my-auto">
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
                    <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[10%]">
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
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[37px] items-end justify-start mt-[162px] p-1 w-[34%] md:w-full"
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
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-800_7e flex flex-col items-end justify-end left-[0] md:px-5 py-[22px] top-[36%] w-1/5">
          <div className="flex flex-row items-start justify-start mr-[29px] mt-[9px] w-[79%] md:w-full">
            <Img
              className="h-[21px]"
              src="images/img_camera.svg"
              alt="camera"
            />
            <Text
              className="ml-[21px] text-base text-white-A700 uppercase"
              size="txtRobotoMedium16WhiteA700"
            >
              kirim
            </Text>
            <Img
              className="h-1.5 ml-[109px] mt-[5px]"
              src="images/img_arrowup.svg"
              alt="arrowup"
            />
          </div>
          <div className="h-[60px] md:h-[71px] mt-[11px] relative w-full">
            <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-start justify-center m-auto p-[18px] w-full">
              <Text
                className="md:ml-[0] ml-[62px] mt-1.5 text-sm text-white-A700"
                size="txtRobotoMedium14WhiteA700"
              >
                Kirim tarixi
              </Text>
            </div>
            <div className="absolute bg-red-300 h-[60px] inset-y-[0] left-[0] my-auto w-[6%]"></div>
          </div>
          <Text
            className="mr-[34px] mt-[5px] text-blue_gray-500 text-sm"
            size="txtRobotoMedium14"
          >
            Showroomdan kirim tarixi
          </Text>
        </div>
      </div>
    </>
  );
};

export default MoliyaKirimtarixiPage;
