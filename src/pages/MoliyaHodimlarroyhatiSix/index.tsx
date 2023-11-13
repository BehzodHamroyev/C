import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const MoliyaHodimlarroyhatiSixPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <Img
          className="h-[899px] m-auto object-cover w-full"
          src="images/img_global1_9.png"
          alt="globalOne"
        />
        <div className="absolute flex flex-col md:gap-10 gap-[100px] justify-start left-[2%] md:px-5 top-[6%] w-[17%]">
          <Img
            className="h-[82px] ml-5 md:ml-[0]"
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
          </div>
        </div>
        <div className="absolute flex flex-col gap-[30px] h-max inset-y-[0] items-center justify-start my-auto md:px-5 right-[2%] w-4/5">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[96%] md:w-full">
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
                  src="images/img_il1588xn2_1.png"
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
          <div className="md:h-[2199px] h-[755px] relative w-full">
            <div className="absolute bg-blue_gray-900_87_01 flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto p-5 rounded-[5px] w-full">
              <div className="flex md:flex-1 sm:flex-col flex-row gap-[21px] items-center justify-start mb-[667px] md:mt-0 mt-1.5 w-[38%] md:w-full">
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
              <div className="flex md:flex-1 flex-col items-center justify-start mb-[666px] md:ml-[0] ml-[219px] md:mt-0 mt-[7px] w-1/5 md:w-full">
                <div className="md:h-10 h-[39px] relative w-full">
                  <div className="bg-blue-400 h-10 m-auto rounded w-full"></div>
                  <Text
                    className="absolute bottom-[21%] inset-x-[0] mx-auto text-base text-center text-white-A700 w-max"
                    size="txtRobotoMedium16WhiteA700"
                  >
                    Oylik belgilash
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 flex-col items-center justify-start mb-[666px] md:ml-[0] ml-[23px] md:mt-0 mt-[7px] w-1/5 md:w-full">
                <div className="md:h-10 h-[39px] relative w-full">
                  <div className="bg-blue-400 h-10 m-auto rounded w-full"></div>
                  <Text
                    className="absolute bottom-[21%] inset-x-[0] mx-auto text-base text-center text-white-A700 w-max"
                    size="txtRobotoMedium16WhiteA700"
                  >
                    Excelga olish
                  </Text>
                </div>
              </div>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-[149px] inset-x-[0] items-center justify-end mx-auto p-1.5 top-[12%] w-full"
              style={{ backgroundImage: "url('images/img_group616.svg')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mt-[3px] w-[99%] md:w-full">
                <div className="flex flex-col gap-[34px] items-start justify-start mb-[13px] md:mt-0 mt-[53px]">
                  <Text
                    className="text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    001
                  </Text>
                  <Text
                    className="text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    002
                  </Text>
                </div>
                <div className="flex flex-col gap-8 items-start justify-start mb-3 md:ml-[0] ml-[18px]">
                  <Text
                    className="text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    Hodimnig ismi
                  </Text>
                  <Text
                    className="text-[15px] text-blue-700"
                    size="txtRobotoMedium15Blue700"
                  >
                    Botir Qodirov Mahmudovich
                  </Text>
                  <Text
                    className="text-[15px] text-blue-700"
                    size="txtRobotoMedium15Blue700"
                  >
                    Botir Qodirov Umarovich
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start mb-3 md:ml-[0] ml-[53px]">
                  <Text
                    className="text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    Lavozimi
                  </Text>
                  <Text
                    className="mt-[33px] text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    Kassir
                  </Text>
                  <Text
                    className="mt-9 text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    <>Sotuv bo\&#96;limi boshlig\&#96;i</>
                  </Text>
                </div>
                <div className="flex flex-col gap-[33px] items-center justify-start mb-[13px] md:ml-[0] ml-[19px]">
                  <Text
                    className="text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    Telefon raqami
                  </Text>
                  <Text
                    className="text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    +998 99 999-99-99
                  </Text>
                  <Text
                    className="text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    +998 88 888-88-88
                  </Text>
                </div>
                <div className="flex flex-col gap-[33px] items-start justify-start mb-[13px] md:ml-[0] ml-[43px]">
                  <Text
                    className="text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    Belgilangan oylik
                  </Text>
                  <Text
                    className="text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    7 000 000
                  </Text>
                  <Text
                    className="text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    3 000 000
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start mb-3 md:ml-[0] ml-[66px]">
                  <Text
                    className="text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    Oylik turi
                  </Text>
                  <Text
                    className="mt-[33px] text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    Kvadrat
                  </Text>
                  <Text
                    className="mt-9 text-gray-400 text-xs"
                    size="txtRobotoMedium12"
                  >
                    Oylik
                  </Text>
                </div>
                <div className="flex flex-col gap-6 justify-start md:ml-[0] ml-[123px] w-[16%] md:w-full">
                  <Text
                    className="text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    Manzili
                  </Text>
                  <div className="flex flex-col gap-2 items-center justify-start md:ml-[0] ml-[5px]">
                    <Text
                      className="text-[10px] text-gray-400 w-full"
                      size="txtRobotoMedium10Gray400"
                    >
                      Andijon viloyati, Marhamat tumani, Yangisor MFY №45 uy
                    </Text>
                    <Text
                      className="text-[10px] text-gray-400 w-full"
                      size="txtRobotoMedium10Gray400"
                    >
                      <>
                        Andijon viloyati, Ho\&#96;jaobod tumani, Yangisor MFY
                        №45 uy
                      </>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[39%] h-[60px] left-[0] md:px-5 w-1/5">
          <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-start justify-center m-auto p-[13px] w-full">
            <div className="flex flex-row gap-3 items-center justify-start md:ml-[0] ml-[15px] w-[81%] md:w-full">
              <Img
                className="h-[33px] w-[33px]"
                src="images/img_calendar_white_a700.svg"
                alt="calendar"
              />
              <Text
                className="text-base text-white-A700 uppercase"
                size="txtRobotoMedium16WhiteA700"
              >
                <>Hodimlar ro\&#96;yhati </>
              </Text>
            </div>
          </div>
          <Img
            className="absolute h-[60px] inset-y-[0] left-[0] my-auto object-cover w-[5%]"
            src="images/img_rectangle1564_31.png"
            alt="rectangle1564"
          />
        </div>
        <div className="absolute bottom-[29%] flex flex-col gap-[33px] items-start justify-start left-[2%] md:px-5 w-[15%]">
          <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[131px]"
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
          <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[211px]"
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
    </>
  );
};

export default MoliyaHodimlarroyhatiSixPage;
