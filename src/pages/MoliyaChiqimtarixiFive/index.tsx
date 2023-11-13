import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import MoliyaKassaRowsaralash from "components/MoliyaKassaRowsaralash";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";
import Sidebar2 from "components/Sidebar2";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

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

const MoliyaChiqimtarixiFivePage: React.FC = () => {
  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img className="h-6" src="images/img_minimize.svg" alt="minimize" />
      ),
      label: "Valyuta ayriboshlash",
      href: "/moliyavalyutaayriboshlash",
      active: window.location.pathname === "/moliyavalyutaayriboshlash",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_fluentclipboar.svg"
          alt="fluentclipboar"
        />
      ),
      label: "<>Hodimlar ro&#96;yhati</>",
    },
    {
      icon: (
        <Img
          className="h-[21px]"
          src="images/img_union_blue_gray_500.svg"
          alt="union"
        />
      ),
      label: "qarzdorlik",
    },
    {
      icon: (
        <Img
          className="h-[19px] w-[19px]"
          src="images/img_ticket.svg"
          alt="ticket"
        />
      ),
      label: "Mahsulot narxlari ",
    },
  ];

  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto p-7 sm:px-5 w-full"
          style={{
            backgroundImage: "url('images/img_showroombuyurtmalar.png')",
          }}
        >
          <div className="flex md:flex-col flex-row gap-[5px] items-start justify-start mb-[51px] mx-auto md:px-5 w-full">
            <Sidebar2 className="!sticky !w-[238px] flex h-screen md:hidden justify-start md:mt-0 mt-[27px] overflow-auto top-[0]" />
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                <MoliyaKassaRowsaralash className="flex md:flex-col flex-row gap-[17px] items-center justify-between w-[65%] md:w-full" />
                <div className="flex flex-row items-center justify-end w-[21%] md:w-full">
                  <div className="h-[38px] relative w-[38px]">
                    <Img
                      className="h-[38px] m-auto rounded-[50%] w-[38px]"
                      src="images/img_il1588xn1_38x38.png"
                      alt="il1588xnOne"
                    />
                    <Img
                      className="absolute h-[38px] inset-[0] justify-center m-auto rounded-[50%] w-[38px]"
                      src="images/img_il1588xn2_38x38.png"
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
              <div className="bg-blue_gray-800_7e border border-blue_gray-400_7e border-solid flex md:flex-col flex-row md:gap-5 items-center justify-end mt-4 pl-[17px] rounded-[5px] w-full">
                <div className="flex relative w-1/4 md:w-full">
                  <OmborTaminotchigaZayavkaOneTab
                    className="flex flex-col items-center justify-start my-auto w-[142px]"
                    username="Oylik "
                  />
                  <OmborTaminotchigaZayavkaOneTab
                    className="flex flex-col items-center justify-start ml-[-4px] my-auto w-[135px] z-[1]"
                    username="diller"
                  />
                </div>
                <OmborTaminotchigaZayavkaOneTab
                  className="flex flex-col items-center justify-start ml-3.5 md:ml-[0] w-[135px]"
                  username="Akfa"
                />
                <OmborTaminotchigaZayavkaOneTab
                  className="flex flex-col items-center justify-start ml-3.5 md:ml-[0] w-[127px]"
                  username="oyna"
                />
                <List
                  className="md:flex-1 sm:flex-col flex-row gap-2 grid grid-cols-2 ml-3.5 md:ml-[0] w-[24%] md:w-full"
                  orientation="horizontal"
                >
                  <OmborTaminotchigaZayavkaOneTab
                    className="flex flex-col items-center justify-start w-[129px]"
                    username="komunal "
                  />
                  <OmborTaminotchigaZayavkaOneTab
                    className="flex flex-col items-center justify-start w-[129px]"
                    username="Soliqlar"
                  />
                </List>
                <div className="flex ml-2 md:ml-[0] relative w-[24%] md:w-full">
                  <OmborTaminotchigaZayavkaOneTab
                    className="flex flex-col items-center justify-start my-auto w-[135px]"
                    username="oFFis"
                  />
                  <OmborTaminotchigaZayavkaOneTab
                    className="flex flex-col items-center justify-start ml-[-7.76px] my-auto w-[133px] z-[1]"
                    username="Umumiy"
                  />
                </div>
              </div>
              <div className="sm:h-[1146px] md:h-[1955px] h-[666px] mt-[21px] relative w-full">
                <div className="absolute bg-blue_gray-900_87_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[13px] rounded-[5px] w-full">
                  <div className="flex flex-col gap-9 justify-start mb-[86px] mt-0.5 w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
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
                        className="md:flex-1 font-medium leading-[normal] md:ml-[0] ml-[260px] md:mt-0 my-[3px] text-base text-left w-[18%] md:w-full"
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
                        className="md:flex-1 font-medium leading-[normal] md:ml-[0] ml-[26px] md:mt-0 my-[3px] text-base text-left w-[18%] md:w-full"
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
                    <div className="flex sm:flex-col flex-row gap-12 items-start justify-start md:ml-[0] ml-[200px] w-[47%] md:w-full">
                      <List
                        className="sm:flex-col flex-row md:gap-10 gap-[76px] grid grid-cols-3 w-[74%] sm:w-full"
                        orientation="horizontal"
                      >
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
                            Todo glass
                          </Text>
                          <Text
                            className="mt-[35px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Davlat soliq{" "}
                          </Text>
                          <Text
                            className="mt-7 text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Akfa
                          </Text>
                          <Text
                            className="mt-[43px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Offis
                          </Text>
                          <Text
                            className="mt-[37px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Elektroset
                          </Text>
                          <Text
                            className="mt-9 text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Bosh Offis
                          </Text>
                          <Text
                            className="mt-[35px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Uz Gaz Oil
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
                            1023
                          </Text>
                          <Text
                            className="mt-[35px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            <>Yer solig\&#96;i </>
                          </Text>
                          <Text
                            className="mt-[30px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            1025 buyurtma{" "}
                          </Text>
                          <Text
                            className="mt-[38px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Kreslo{" "}
                          </Text>
                          <Text
                            className="mt-[27px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            12 356
                          </Text>
                          <Text
                            className="mt-[51px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            <>Qog\&#96;oz</>
                          </Text>
                          <Text
                            className="mt-[34px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Gaz
                          </Text>
                          <Text
                            className="mt-[35px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Aksesuar
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
                            className="mt-[31px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Kassa
                          </Text>
                          <Text
                            className="mt-[34px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Plastik{" "}
                          </Text>
                          <Text
                            className="mt-[31px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Hisob raqam1
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
                            Hisob raqam2
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
                            Hisob raqam 3
                          </Text>
                          <Text
                            className="mt-[35px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Kassa
                          </Text>
                        </div>
                      </List>
                      <div className="flex flex-col items-center justify-start w-[18%] sm:w-full">
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
                    </div>
                  </div>
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-[0] items-center justify-center m-auto p-[9px] w-full"
                  style={{ backgroundImage: "url('images/img_group421.svg')" }}
                >
                  <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-[96%] md:w-full">
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
                    <div className="flex flex-col items-start justify-start ml-9 md:ml-[0] md:mt-0 mt-[3px]">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Chiqim nomi
                      </Text>
                      <Text
                        className="mt-[33px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Oyna
                      </Text>
                      <Text
                        className="mt-[31px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Soliqlar
                      </Text>
                      <Text
                        className="mt-[29px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Diller
                      </Text>
                      <Text
                        className="mt-[35px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Offis
                      </Text>
                      <Text
                        className="mt-[35px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Komunal
                      </Text>
                      <Text
                        className="mt-8 text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Offis
                      </Text>
                      <Text
                        className="mt-[34px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        <>Yoqilg\&#96;i</>
                      </Text>
                      <Text
                        className="mt-[33px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Transport
                      </Text>
                      <Text
                        className="mt-[33px] text-[15px] text-blue-400"
                        size="txtRobotoMedium15Blue400"
                      >
                        Jami:
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mb-[52px] md:ml-[0] ml-[632px] md:mt-0 mt-0.5 w-[14%] md:w-full">
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
                    <div className="flex flex-col gap-[33px] items-center justify-start mb-[58px] md:ml-[0] ml-[70px] w-[7%] md:w-full">
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
        <div className="absolute bg-blue_gray-800_7e flex flex-col gap-[22px] h-max inset-y-[0] items-center justify-end left-[0] my-auto md:px-5 py-[7px] w-1/5">
          <div className="flex flex-row items-start justify-end mt-6 w-[78%] md:w-full">
            <Img
              className="h-[21px]"
              src="images/img_camera.svg"
              alt="camera"
            />
            <Text
              className="ml-7 mt-[3px] text-base text-white-A700 uppercase"
              size="txtRobotoMedium16WhiteA700"
            >
              CHIQIM{" "}
            </Text>
            <Img
              className="h-1 ml-[89px] mt-[9px]"
              src="images/img_line49.svg"
              alt="lineFortyNine"
            />
          </div>
          <div className="h-[60px] relative w-full">
            <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-start justify-center m-auto p-[18px] w-full">
              <Text
                className="md:ml-[0] ml-[68px] mt-[3px] text-base text-white-A700"
                size="txtRobotoMedium16WhiteA700"
              >
                Chiqim tarixi
              </Text>
            </div>
            <Img
              className="absolute h-[60px] inset-y-[0] left-[0] my-auto object-cover w-[5%]"
              src="images/img_rectangle1564_25.png"
              alt="rectangle1564"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MoliyaChiqimtarixiFivePage;
