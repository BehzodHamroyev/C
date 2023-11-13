import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const MoliyaHodimlarroyhatiTwoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat flex flex-col font-roboto h-[900px] items-center justify-start mx-auto pr-[19px] py-[19px] w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start max-w-[1420px] mb-[90px] mt-[9px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-[27px] w-1/5 md:w-full">
            <Img
              className="h-[82px]"
              src="images/img_group834.svg"
              alt="groupSeventySix"
            />
            <div className="flex flex-col items-start justify-start mt-[105px] w-[86%] md:w-full">
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
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[131px] ml-1 md:ml-[0] mt-[33px]"
                onClick={() => navigate("/moliyahodimlarroyhati")}
                leftIcon={
                  <div className="mr-[22px] bg-blue_gray-500">
                    <Img src="images/img_union_blue_gray_500.svg" alt="Union" />
                  </div>
                }
              >
                <div className="font-medium leading-[normal] text-blue_gray-500 text-left text-sm uppercase">
                  qarzdorlik
                </div>
              </Button>
            </div>
            <div className="h-[60px] md:h-[81px] mt-[21px] relative w-full">
              <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-start justify-center m-auto p-[18px] w-full">
                <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[13px] mt-[3px] w-[82%] md:w-full">
                  <Img
                    className="h-[19px] w-[19px]"
                    src="images/img_ticket_white_a700.svg"
                    alt="ticket"
                  />
                  <Text
                    className="text-base text-white-A700 uppercase"
                    size="txtRobotoMedium16WhiteA700"
                  >
                    Mahsulot narxlari{" "}
                  </Text>
                </div>
              </div>
              <div className="absolute bg-red-300 h-[60px] inset-y-[0] left-[0] my-auto w-[6%]"></div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start w-[81%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-10 gap-[157px] items-start justify-start md:ml-[0] ml-[3px] w-[96%] md:w-full">
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
            <div className="bg-blue_gray-900 flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-[18px] px-[3px] rounded-[5px] shadow-bs4 w-[42%] md:w-full">
              <OmborTaminotchigaZayavkaOneTab
                className="flex flex-col items-center justify-start w-[142px]"
                username="Oyna"
              />
              <OmborTaminotchigaZayavkaOneTab
                className="flex flex-col items-center justify-start w-[142px]"
                username="diller"
              />
              <OmborTaminotchigaZayavkaOneTab
                className="flex flex-col items-center justify-start sm:ml-[0] ml-[39px] w-[135px]"
                username="Taminot"
              />
            </div>
            <div className="h-[632px] md:h-[653px] sm:h-[696px] mt-6 relative w-full">
              <div className="absolute bg-blue_gray-900_87_01 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[25px] sm:px-5 rounded-[5px] w-full">
                <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-start mb-[539px] w-[38%] md:w-full">
                  <Img
                    className="h-[22px]"
                    src="images/img_refresh.svg"
                    alt="refresh"
                  />
                  <Input
                    name="group727"
                    placeholder="Izlash"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                    wrapClassName="border border-blue_gray-400_7e border-solid w-[91%] sm:w-full"
                    shape="round"
                    color="blue_gray_800_7e"
                    size="xl"
                    variant="fill"
                  ></Input>
                </div>
              </div>
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-[299px] inset-x-[0] items-start justify-start mx-auto p-2 top-[14%] w-full"
                style={{ backgroundImage: "url('images/img_group271.svg')" }}
              >
                <div className="flex md:flex-col flex-row gap-[37px] items-center justify-start mb-[3px] ml-3.5 md:ml-[0] w-[61%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[3%] md:w-full">
                    <Img
                      className="h-[18px] md:h-auto object-cover w-[89%] sm:w-full"
                      src="images/img_.png"
                      alt="TwoHundredFiftyTwo"
                    />
                    <Text
                      className="mt-[23px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      01
                    </Text>
                    <Text
                      className="h-[18px] mt-6 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      02
                    </Text>
                    <Text
                      className="mt-[23px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      03
                    </Text>
                    <Text
                      className="h-[18px] mt-[26px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      04
                    </Text>
                    <Text
                      className="h-[18px] mt-[26px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      05
                    </Text>
                    <Text
                      className="h-[18px] mt-[26px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      06
                    </Text>
                  </div>
                  <List
                    className="sm:flex-col flex-row md:gap-10 gap-[103px] grid sm:grid-cols-1 grid-cols-4 w-[92%] md:w-full"
                    orientation="horizontal"
                  >
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Mahsulot nomi{" "}
                      </Text>
                      <Text
                        className="mt-[25px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Akfa seriy (6200){" "}
                      </Text>
                      <Text
                        className="mt-6 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Akfa dub mocco(6500)
                      </Text>
                      <Text
                        className="mt-[21px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Exclusive 7000
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Exclusive 7000
                      </Text>
                      <Text
                        className="mt-[29px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Engelberg 8500
                      </Text>
                      <Text
                        className="mt-[25px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Engelberf 9000
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Diller nomi
                      </Text>
                      <Text
                        className="mt-6 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        akfa Andijon
                      </Text>
                      <Text
                        className="mt-6 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        akfa Andijon
                      </Text>
                      <Text
                        className="mt-[23px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        akfa Andijon
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        akfa Andijon
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        akfa Andijon
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        akfa Andijon
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
                        className="mt-[23px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Yodoviy
                      </Text>
                      <Text
                        className="h-[18px] mt-6 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Oq
                      </Text>
                      <Text
                        className="mt-[22px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Qora
                      </Text>
                      <Text
                        className="h-[18px] mt-[27px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Oq
                      </Text>
                      <Text
                        className="h-[18px] mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Oq
                      </Text>
                      <Text
                        className="h-[18px] mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        Oq
                      </Text>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Narxi
                      </Text>
                      <Text
                        className="mt-[23px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        32 000
                      </Text>
                      <Text
                        className="mt-6 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        40 000
                      </Text>
                      <Text
                        className="mt-[23px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        100 000
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        300 000
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        40 000
                      </Text>
                      <Text
                        className="mt-[26px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        100 000
                      </Text>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoliyaHodimlarroyhatiTwoPage;
