import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const MoliyaHodimlarroyhatiFourPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <Img
          className="h-[900px] m-auto object-cover w-full"
          src="images/img_global1_13.png"
          alt="globalOne"
        />
        <div className="absolute flex flex-col md:gap-10 gap-[91px] justify-start left-[2%] md:px-5 top-[6%] w-[15%]">
          <Img
            className="h-[82px] md:ml-[0] ml-[19px]"
            src="images/img_group834.svg"
            alt="groupSeventySix"
          />
          <div className="flex flex-col gap-[31px] items-start justify-start w-[90%] md:w-full">
            <div className="flex flex-row gap-[29px] items-start justify-start md:ml-[0] ml-[3px] w-[90%] md:w-full">
              <Img
                className="h-[18px] w-[18px]"
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
            <div className="flex flex-row gap-[22px] items-start justify-start ml-0.5 md:ml-[0] w-[99%] md:w-full">
              <Img
                className="h-[21px] w-[21px]"
                src="images/img_bxbxsaddtoqueue.svg"
                alt="bxbxsaddtoqueue"
              />
              <Text
                className="mt-0.5 text-blue_gray-500 text-sm uppercase"
                size="txtRobotoMedium14"
              >
                <>material qo\&#96;shish</>
              </Text>
            </div>
            <div className="flex flex-row gap-[18px] items-end justify-start w-[66%] md:w-full">
              <Img
                className="h-[27px] w-[27px]"
                src="images/img_ictwotonepricechange.svg"
                alt="ictwotonepricec"
              />
              <Text
                className="mb-0.5 mt-[5px] text-base text-blue_gray-500 uppercase"
                size="txtRobotoMedium16"
              >
                Kassaga
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col gap-[18px] justify-start md:px-5 right-[5%] top-[3%] w-[77%]">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[11px] w-[99%] md:w-full">
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
          <div className="bg-blue_gray-900 flex sm:flex-col flex-row sm:gap-5 items-center justify-start mr-[631px] px-[3px] rounded-[5px] shadow-bs4 w-[43%] md:w-full">
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
        </div>
        <div className="absolute bottom-[12%] md:h-[630px] h-[632px] sm:h-[673px] md:px-5 right-[2%] w-[79%] md:w-full">
          <div className="md:h-[630px] h-[632px] sm:h-[673px] m-auto w-full">
            <div className="absolute bg-blue_gray-900_87_01 flex flex-col h-full inset-[0] items-start justify-center m-auto p-6 sm:px-5 rounded-[5px] w-full">
              <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-start mb-[540px] mt-0.5 w-[39%] md:w-full">
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
              <div className="flex md:flex-col flex-row gap-9 items-center justify-start mb-[3px] ml-3.5 md:ml-[0] w-[61%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[3%] md:w-full">
                  <Img
                    className="h-[18px] md:h-auto object-cover w-[89%] sm:w-full"
                    src="images/img_.png"
                    alt="TwoHundredFortySeven"
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
                    className="h-[18px] mt-[23px] text-[15px] text-gray-400"
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
                  className="sm:flex-col flex-row md:gap-10 gap-[245px] grid sm:grid-cols-1 grid-cols-3 w-[92%] md:w-full"
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
          <div className="absolute flex flex-col items-start justify-start left-[30%] top-[15%]">
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
              className="mt-[26px] text-[15px] text-gray-400 w-full"
              size="txtRobotoMedium15Gray400"
            >
              akfa Andijon
            </Text>
          </div>
        </div>
        <div className="absolute h-[60px] left-[0] md:px-5 top-[42%] w-1/5">
          <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-center justify-center m-auto p-[18px] w-full">
            <div className="flex flex-row items-start justify-start mt-[3px] w-[90%] md:w-full">
              <Img
                className="h-[19px] w-[19px]"
                src="images/img_ticket_white_a700.svg"
                alt="ticket"
              />
              <Text
                className="ml-[15px] text-base text-white-A700 uppercase"
                size="txtRobotoMedium16WhiteA700"
              >
                Mahsulot narxlari{" "}
              </Text>
              <Img
                className="h-1 ml-1.5 mt-1.5"
                src="images/img_line49.svg"
                alt="lineFortyNine"
              />
            </div>
          </div>
          <div className="absolute bg-red-300 h-[60px] inset-y-[0] left-[0] my-auto w-[6%]"></div>
        </div>
      </div>
    </>
  );
};

export default MoliyaHodimlarroyhatiFourPage;
