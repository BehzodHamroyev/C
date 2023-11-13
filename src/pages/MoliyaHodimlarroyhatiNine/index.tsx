import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const MoliyaHodimlarroyhatiNinePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <Img
          className="h-[900px] m-auto object-cover w-full"
          src="images/img_global1_14.png"
          alt="globalOne"
        />
        <div className="absolute flex md:flex-col flex-row md:gap-10 inset-x-[0] items-start justify-between max-w-[1321px] mx-auto md:px-5 top-[3%] w-full">
          <div className="flex md:flex-1 md:flex-col flex-row md:gap-[51px] items-start justify-between w-[72%] md:w-full">
            <Img
              className="h-[82px] md:mt-0 mt-[27px]"
              src="images/img_group834.svg"
              alt="groupSeventySix"
            />
            <FrameFiftyTwoDatafiltr className="flex md:flex-col flex-row gap-[17px] items-center justify-between w-[76%] md:w-full" />
          </div>
          <div className="flex md:flex-1 flex-row items-center justify-end w-[17%] md:w-full">
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
        <div className="absolute bottom-[12%] md:h-[629px] h-[632px] sm:h-[672px] md:px-5 right-[1%] w-4/5 md:w-full">
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
                  alt="TwoHundredFiftyOne"
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
                className="sm:flex-col flex-row md:gap-10 gap-[136px] grid sm:grid-cols-1 grid-cols-4 w-[92%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    Oyna turi{" "}
                  </Text>
                  <Text
                    className="mt-[23px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Yodoviy kolyonniy
                  </Text>
                  <Text
                    className="mt-6 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Oq kolyonniy
                  </Text>
                  <Text
                    className="mt-[23px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Qora kolyonniy{" "}
                  </Text>
                  <Text
                    className="mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Oq oddiy
                  </Text>
                  <Text
                    className="mt-7 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Oq oddiy
                  </Text>
                  <Text
                    className="mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Oq oddiy
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    <>O\&#96;lchami</>
                  </Text>
                  <Text
                    className="mt-[23px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    6
                  </Text>
                  <Text
                    className="mt-6 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    4
                  </Text>
                  <Text
                    className="mt-[22px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    4
                  </Text>
                  <Text
                    className="mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    2
                  </Text>
                  <Text
                    className="mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    4
                  </Text>
                  <Text
                    className="mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    6t
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
        <div className="absolute bottom-[26%] h-[60px] left-[0] md:px-5 w-1/5">
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
          <Img
            className="absolute h-[60px] inset-y-[0] left-[0] my-auto object-cover w-[5%]"
            src="images/img_rectangle1564_33.png"
            alt="rectangle1564"
          />
        </div>
        <div className="absolute flex flex-col items-start justify-start left-[2%] md:px-5 top-[27%] w-[17%]">
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
      </div>
    </>
  );
};

export default MoliyaHodimlarroyhatiNinePage;
