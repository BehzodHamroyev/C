import React from "react";

import { useNavigate } from "react-router-dom";

import { Img, Input, Line, List, Text } from "components";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const OmborTaminotchigazayavkaOnePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat flex flex-col font-roboto h-[936px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_ombortaminotchiga.png')" }}
      >
        <div className="flex md:flex-col flex-row gap-6 items-end justify-between max-w-[1403px] mb-[57px] mt-4 mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col gap-[46px] items-center justify-start w-[98%] md:w-full">
            <div className="flex flex-col gap-[27px] items-start justify-start w-full">
              <div className="flex flex-row gap-[33px] items-center justify-start w-1/4 md:w-full">
                <Img
                  className="common-pointer h-[33px] w-[33px]"
                  src="images/img_arrowleft_blue_400.svg"
                  alt="arrowleft"
                  onClick={() => navigate(-1)}
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-400 sm:text-xl"
                    size="txtRobotoMedium24"
                  >
                    Bichish kartasi\ №1203\\
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
                <div className="h-12 md:h-[47px] relative rounded-[5px] shadow-bs4 w-[26%] md:w-full">
                  <div className="absolute bg-blue_gray-900_87_01 h-[47px] inset-[0] justify-center m-auto w-full"></div>
                  <div className="absolute bg-blue_gray-900_87_01 h-[47px] inset-y-[0] left-[0] my-auto w-[47%]"></div>
                  <OmborTaminotchigaZayavkaOneTab
                    className="absolute flex flex-col h-max inset-y-[0] items-center justify-start left-[0] my-auto shadow-bs2 w-[166px]"
                    username="Omborga"
                  />
                  <OmborTaminotchigaZayavkaOneTab
                    className="absolute flex flex-col h-max inset-y-[0] items-center justify-start my-auto right-[9%] w-[121px]"
                    username="Taminotchiga"
                  />
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[596px] md:mt-0 mt-[7px] w-[15%] md:w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <Input
                      name="buttonadd"
                      placeholder="Chop etish"
                      className="font-medium p-0 placeholder:text-blue-400 text-center text-sm tracking-[0.14px] uppercase w-full"
                      wrapClassName="border border-blue_gray-600 border-solid flex rounded-[5px] w-full"
                      suffix={
                        <Img
                          className="h-[30px] ml-[21px] my-auto"
                          src="images/img_flatcoloriconsprint.svg"
                          alt="flat-color-icons:print"
                        />
                      }
                      shape="round"
                      color="blue_gray_900"
                      size="sm"
                      variant="fill"
                    ></Input>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[19px] md:mt-0 mt-[7px] w-[15%] md:w-full">
                  <Input
                    name="buttonadd_One"
                    placeholder="Exselga olish"
                    className="font-medium p-0 placeholder:text-blue-400 text-center text-sm tracking-[0.14px] uppercase w-full"
                    wrapClassName="border border-blue_gray-600 border-solid flex rounded-[5px] w-full"
                    suffix={
                      <Img
                        className="ml-4 my-auto"
                        src="images/img_vscodeiconsfiletypeexcel.svg"
                        alt="vscode-icons:file-type-excel"
                      />
                    }
                    shape="round"
                    color="blue_gray_900"
                    size="md"
                    variant="fill"
                  ></Input>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-start rounded-[5px] w-full">
                <div
                  className="bg-cover bg-no-repeat flex flex-col h-[704px] items-start justify-start p-[13px] w-full"
                  style={{ backgroundImage: "url('images/img_group223.svg')" }}
                >
                  <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start mb-[445px] md:ml-[0] ml-[50px] w-[83%] md:w-full">
                    <div className="flex flex-col items-start justify-start md:mt-0 mt-[59px]">
                      <Text
                        className="text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        01
                      </Text>
                      <Text
                        className="mt-5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        02
                      </Text>
                      <Text
                        className="mt-[15px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        03
                      </Text>
                      <Text
                        className="mt-[21px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        04
                      </Text>
                      <Text
                        className="mt-[23px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        05
                      </Text>
                    </div>
                    <List
                      className="sm:flex-col flex-row md:gap-10 gap-[199px] grid sm:grid-cols-1 grid-cols-4 md:ml-[0] ml-[106px] w-[56%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Profil nomi
                        </Text>
                        <Text
                          className="mt-[41px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Aldoks
                        </Text>
                        <Text
                          className="mt-5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Aldoks
                        </Text>
                        <Text
                          className="mt-[15px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Aldoks
                        </Text>
                        <Text
                          className="mt-[21px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Aldoks
                        </Text>
                        <Text
                          className="mt-[23px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          Aldoks
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Artikul
                        </Text>
                        <Text
                          className="mt-[41px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          0601
                        </Text>
                        <Text
                          className="mt-5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          0602
                        </Text>
                        <Text
                          className="mt-[15px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          0603
                        </Text>
                        <Text
                          className="mt-[21px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          0604
                        </Text>
                        <Text
                          className="mt-[23px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          0605
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
                          className="mt-[41px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          1600
                        </Text>
                        <Text
                          className="mt-5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          1500
                        </Text>
                        <Text
                          className="mt-[15px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          1300
                        </Text>
                        <Text
                          className="mt-[21px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          1000
                        </Text>
                        <Text
                          className="mt-[23px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          1200
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Ombordan
                        </Text>
                        <Text
                          className="mt-[41px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          3
                        </Text>
                        <Text
                          className="mt-[19px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          2
                        </Text>
                        <Text
                          className="mt-[15px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          1
                        </Text>
                        <Text
                          className="mt-[21px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          5
                        </Text>
                        <Text
                          className="mt-[23px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6
                        </Text>
                      </div>
                    </List>
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[58px] w-[6%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Butun
                        </Text>
                        <Text
                          className="mt-[41px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6000 x3
                        </Text>
                        <Text
                          className="mt-5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6000 x 2
                        </Text>
                        <Text
                          className="mt-[15px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6000 x 2
                        </Text>
                        <Text
                          className="mt-[21px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6000 x 4
                        </Text>
                        <Text
                          className="mt-[23px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6000 x 1
                        </Text>
                      </div>
                    </div>
                    <List
                      className="sm:flex-col flex-row md:gap-10 gap-[72px] grid grid-cols-2 md:ml-[0] ml-[76px] w-[16%] md:w-full"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Omborda
                        </Text>
                        <Text
                          className="mt-[41px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          3
                        </Text>
                        <Text
                          className="mt-[19px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          2
                        </Text>
                        <Text
                          className="mt-[15px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          1
                        </Text>
                        <Text
                          className="mt-[21px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          5
                        </Text>
                        <Text
                          className="mt-[23px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Sexda
                        </Text>
                        <Text
                          className="mt-[41px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          3
                        </Text>
                        <Text
                          className="mt-[19px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          2
                        </Text>
                        <Text
                          className="mt-[15px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          1
                        </Text>
                        <Text
                          className="mt-[21px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          5
                        </Text>
                        <Text
                          className="mt-[23px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          6
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[770px] md:mt-0 mt-[87px] relative w-[1%] md:w-full">
            <Line className="bg-blue_gray-800 h-[770px] m-auto w-[5px]" />
            <Line className="absolute bg-blue_gray-500 bottom-[6%] h-[172px] inset-x-[0] mx-auto rounded-sm w-[5px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default OmborTaminotchigazayavkaOnePage;
