import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Line, SelectBox, Text } from "components";
import MoliyaKassaRowsaralash from "components/MoliyaKassaRowsaralash";
import Sidebar11 from "components/Sidebar11";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const qarzdorlikniSoNdirishOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const kassaOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const jumaboyevQobiljonOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const naqdPulOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MoliyaKirimqilishFourPage: React.FC = () => {
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
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto sm:pr-5 pr-7 py-7 relative w-full">
        <div className="absolute md:h-[1168px] sm:h-[744px] h-[820px] inset-[0] justify-center m-auto md:px-5 w-full">
          <Sidebar11 className="!sticky !w-[238px] flex h-screen md:hidden justify-start left-[0] overflow-auto top-[0]" />
          <div className="absolute flex md:flex-col flex-row md:gap-10 items-start justify-between right-[2%] top-[0] w-4/5">
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
          <div className="absolute bottom-[0] flex md:h-[1168px] sm:h-[744px] h-[747px] justify-end right-[0] w-[83%] md:w-full">
            <Line className="bg-blue_gray-900 h-[52px] mb-[287px] ml-[287px] mt-auto w-px" />
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-blue_gray-900_87_01 flex flex-col items-start justify-start p-8 sm:px-5 rounded-[5px] shadow-bs6 w-full">
                  <div className="flex flex-col items-start justify-start mb-[156px] ml-3.5 md:ml-[0] w-[93%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex md:flex-1 flex-col items-center justify-start w-[47%] md:w-full">
                        <div className="flex flex-col justify-start w-full">
                          <Text
                            className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                            size="txtRobotoMedium12Bluegray50099"
                          >
                            Kirim nomi
                          </Text>
                          <SelectBox
                            className="font-medium leading-[normal] mt-1 text-base text-left w-full"
                            placeholderClassName="text-white-A700"
                            indicator={
                              <Img
                                className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-[13px]"
                                src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="group446"
                            options={qarzdorlikniSoNdirishOptionsList}
                            isSearchable={false}
                            placeholder="Qarzdorlikni so&#96;ndirish"
                            shape="round"
                            color="gray_900_87"
                            size="xl"
                            variant="fill"
                          />
                        </div>
                        <div className="flex flex-col justify-start mt-[21px] w-full">
                          <Text
                            className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                            size="txtRobotoMedium12Bluegray50099"
                          >
                            Qayerga
                          </Text>
                          <SelectBox
                            className="font-medium leading-[normal] mt-[3px] rounded-[5px] text-base text-left w-full"
                            placeholderClassName="text-white-A700"
                            indicator={
                              <Img
                                className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-[13px]"
                                src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="group448"
                            options={kassaOptionsList}
                            isSearchable={false}
                            placeholder="Kassa"
                            shape="round"
                            color="gray_900_87"
                            size="xl"
                            variant="fill"
                          />
                        </div>
                        <div className="flex flex-col justify-start mt-4 w-full">
                          <Text
                            className="ml-3.5 md:ml-[0] text-blue_gray-500 text-sm"
                            size="txtRobotoMedium14"
                          >
                            Qayerdan
                          </Text>
                          <SelectBox
                            className="font-medium leading-[normal] mt-[3px] text-base text-left w-full"
                            placeholderClassName="text-white-A700"
                            indicator={
                              <Img
                                className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-[13px]"
                                src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="group447"
                            options={jumaboyevQobiljonOptionsList}
                            isSearchable={false}
                            placeholder="Jumaboyev Qobiljon"
                            shape="round"
                            color="gray_900_87"
                            size="xl"
                            variant="fill"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-between mt-[53px] w-full">
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[142px] rounded-[3px] text-center text-xl"
                            shape="round"
                            color="blue_gray_500"
                            size="xs"
                            variant="fill"
                          >
                            Naqd
                          </Button>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[142px] rounded-[3px] text-center text-xl"
                            shape="round"
                            color="blue_gray_800"
                            size="xs"
                            variant="fill"
                          >
                            Plastik
                          </Button>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[142px] rounded-[3px] text-center text-xl"
                            shape="round"
                            color="blue_gray_800"
                            size="xs"
                            variant="fill"
                          >
                            Bank
                          </Button>
                        </div>
                      </div>
                      <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-1 w-[47%] md:w-full">
                        <Text
                          className="md:ml-[0] ml-[11px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Aynan
                        </Text>
                        <div className="flex flex-col items-start justify-start w-full">
                          <div className="bg-gray-900_87 flex flex-col items-end justify-end p-5 rounded-[3px] w-full">
                            <Img
                              className="h-[5px] mt-2"
                              src="images/img_arrowdown_blue_gray_500_3x7.svg"
                              alt="arrowdown_Two"
                            />
                          </div>
                          <Text
                            className="md:ml-[0] ml-[11px] mt-[19px] text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            Izoh
                          </Text>
                          <div className="bg-gray-900_87 flex flex-col items-start justify-start mt-0.5 p-3 rounded-[3px] w-full">
                            <Text
                              className="mb-[97px] ml-2 md:ml-[0] text-[17px] text-gray-400"
                              size="txtRobotoMedium17Gray400"
                            >
                              <>2 oy kechikish bilan to\&#96;ladi</>
                            </Text>
                          </div>
                          <Text
                            className="md:ml-[0] ml-[3px] mt-[35px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            <> Oylik maoshi: 9 000 000 so\&#96;m</>
                          </Text>
                          <Text
                            className="mt-5 text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            <>Avans: 0.0 so\&#96;m</>
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[73px] items-start justify-start mt-4 w-[77%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-[61%] md:w-full">
                        <div className="flex flex-col gap-[5px] justify-start w-full">
                          <div className="flex flex-row gap-[207px] items-center justify-start ml-4 md:ml-[0] w-[67%] md:w-full">
                            <Text
                              className="text-blue_gray-500_99 text-xs"
                              size="txtRobotoMedium12Bluegray50099"
                            >
                              Summa
                            </Text>
                            <Text
                              className="text-blue_gray-500_99 text-xs"
                              size="txtRobotoMedium12Bluegray50099"
                            >
                              <>To\&#96;lov turi</>
                            </Text>
                          </div>
                          <div className="bg-gray-900_87 flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-3.5 rounded-[3px] w-full">
                            <Text
                              className="sm:mt-0 my-0.5 text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              100 000
                            </Text>
                            <Img
                              className="h-[13px] ml-48 sm:ml-[0]"
                              src="images/img_calculator.svg"
                              alt="calculator"
                            />
                            <SelectBox
                              className="sm:flex-1 font-medium leading-[normal] sm:ml-[0] ml-[7px] sm:mt-0 my-0.5 text-base text-gray-400 text-left w-[32%] sm:w-full"
                              placeholderClassName="text-gray-400"
                              indicator={
                                <Img
                                  className="h-[5px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[13px]"
                                  src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="group829"
                              options={naqdPulOptionsList}
                              isSearchable={false}
                              placeholder="Naqd pul"
                            />
                          </div>
                        </div>
                      </div>
                      <Text
                        className="md:mt-0 mt-[7px] text-[15px] text-red-300"
                        size="txtRobotoMedium15Red300"
                      >
                        <> Hodimning qarzi: 100 000 so\&#96;m</>
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[37px] w-[47%] md:w-full">
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
        <div className="absolute bg-blue_gray-800_7e flex flex-col gap-4 justify-start left-[0] md:px-5 py-3 top-[36%] w-1/5">
          <div className="h-[60px] relative w-full">
            <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-center justify-center m-auto p-[19px] w-full">
              <div className="flex flex-row items-start justify-start w-[91%] md:w-full">
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
            </div>
            <div className="absolute bg-red-300 h-[60px] inset-y-[0] left-[0] my-auto w-[6%]"></div>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start mb-[9px] md:ml-[0] ml-[81px]">
            <Text
              className="text-blue_gray-500 text-sm"
              size="txtRobotoMedium14"
            >
              Kirim tarixi
            </Text>
            <Text
              className="text-blue_gray-500 text-sm"
              size="txtRobotoMedium14"
            >
              Showroomdan kirim tarixi
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoliyaKirimqilishFourPage;
