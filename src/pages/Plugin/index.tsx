import React from "react";

import { FloatingInput, Img, List, Text } from "components";

const PluginPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <header className="bg-blue_gray-800_05 flex md:flex-col md:gap-5 items-center justify-center md:px-5 rounded-md w-full">
          <div className="flex md:flex-1 flex-row items-start justify-between mb-5 md:ml-[0] ml-[34px] mr-[548px] md:mt-0 mt-[104px] w-[47%] md:w-full">
            <div className="flex flex-col items-center justify-start w-[41%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col gap-[22px] items-start justify-start w-full">
                    <div className="flex flex-row gap-[18px] items-start justify-between w-full">
                      <Text
                        className="text-base text-gray-400"
                        size="txtRobotoMedium16Gray400"
                      >
                        <>Oldindan to\&#96;lov:</>
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtRobotoMedium16WhiteA700"
                      >
                        1 500 000
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[13px] items-center justify-start w-[76%] md:w-full">
                      <Text
                        className="text-base text-gray-400"
                        size="txtRobotoMedium16Gray400"
                      >
                        <>Bo\&#96;lib to\&#96;langan:</>
                      </Text>
                      <Text
                        className="text-base text-white-A700"
                        size="txtRobotoMedium16WhiteA700"
                      >
                        0.0
                      </Text>
                    </div>
                    <div className="flex flex-row gap-9 items-center justify-between w-full">
                      <Text
                        className="text-base text-gray-400"
                        size="txtRobotoMedium16Gray400"
                      >
                        <>Qoldiq to\&#96;lov:</>
                      </Text>
                      <Text
                        className="text-base text-red-300"
                        size="txtRobotoMedium16Red300"
                      >
                        2 000 000
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue_gray-800_03 flex flex-col gap-[7px] justify-start p-0.5 rounded-[5px] w-[30%]">
              <Text
                className="md:ml-[0] ml-[13px] text-[8px] text-blue_gray-500 text-center"
                size="txtRobotoMedium8Bluegray500"
              >
                Profil
              </Text>
              <List
                className="flex flex-col gap-[7px] items-center mb-[46px] mx-auto w-[90%]"
                orientation="vertical"
              >
                <div className="flex flex-row gap-[31px] items-start justify-between w-full">
                  <Text
                    className="text-gray-400 text-sm"
                    size="txtRobotoMedium14Gray400"
                  >
                    Aldoks:
                  </Text>
                  <div className="h-[17px] relative w-[39%]">
                    <Img
                      className="absolute bottom-[0] h-[15px] inset-x-[0] mx-auto rounded-[3px]"
                      src="images/img_menu.svg"
                      alt="menu"
                    />
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-4">
                      <Text
                        className="text-center text-gray-400 text-sm"
                        size="txtRobotoMedium14Gray400"
                      >
                        12
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between w-full">
                  <Text
                    className="text-blue_gray-500 text-sm"
                    size="txtRobotoMedium14"
                  >
                    PVH:
                  </Text>
                  <div className="h-[17px] relative w-[39%]">
                    <Img
                      className="absolute bottom-[0] h-[15px] inset-x-[0] mx-auto rounded-[3px]"
                      src="images/img_menu.svg"
                      alt="menu"
                    />
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto">
                      <Text
                        className="text-blue_gray-500 text-center text-sm"
                        size="txtRobotoMedium14"
                      >
                        0
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                  <Text
                    className="text-blue_gray-500 text-sm"
                    size="txtRobotoMedium14"
                  >
                    Exvlusive:
                  </Text>
                  <div className="h-[17px] relative w-[39%]">
                    <Img
                      className="absolute bottom-[0] h-[15px] inset-x-[0] mx-auto rounded-[3px]"
                      src="images/img_menu.svg"
                      alt="menu"
                    />
                    <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto">
                      <Text
                        className="text-blue_gray-500 text-center text-sm"
                        size="txtRobotoMedium14"
                      >
                        0
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col items-start justify-start mb-[174px] md:ml-[0] ml-[27px] mr-[734px] md:mt-0 mt-[15px] w-[30%] md:w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-base text-center text-gray-400"
                size="txtRobotoMedium16Gray400"
              >
                <>To\&#96;lovlar</>
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start mt-1 w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <FloatingInput
                    wrapClassName="placeholder:bg-blue_gray-800_03 font-medium leading-[normal] placeholder:left-[13px] p-0 sm:pr-5 text-base placeholder:text-blue_gray-500 text-gray-400 text-left placeholder:top-[0] w-full"
                    className="font-medium leading-[normal] p-0 sm:pr-5 text-base text-gray-400 text-left w-full"
                    name="3500000"
                    labelClasses="bg-blue_gray-800_03 left-[13px] top-[0] text-blue_gray-500"
                    focusedClasses="translate-y-[10px] scale-[1]"
                    wrapperClasses="w-full top-[0]"
                    labelText="Umumiy summasi"
                    defaultText="3 500 000"
                  ></FloatingInput>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-row items-center justify-between mb-[229px] md:ml-[0] ml-[395px] mr-[277px] md:mt-0 mt-[15px] w-[38%] md:w-full">
            <div className="flex flex-col items-center justify-start">
              <Text
                className="text-gray-400 text-sm"
                size="txtRobotoMedium14Gray400"
              >
                O’lchov{" "}
              </Text>
            </div>
            <div className="flex flex-col items-center justify-start w-[10%]">
              <div className="flex flex-col items-center justify-start w-full">
                <Text
                  className="text-gray-400 text-sm"
                  size="txtRobotoMedium14Gray400"
                >
                  Smeta{" "}
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-col flex-row sm:gap-[42px] items-center justify-between mb-5 md:ml-[0] ml-[545px] mr-[11px] md:mt-0 mt-[33px] w-[49%] md:w-full">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-52 items-start justify-end p-0.5 rounded-[5px]"
              style={{ backgroundImage: "url('images/img_group646.svg')" }}
            >
              <Text
                className="ml-1 md:ml-[0] mt-2 text-[8px] text-blue_gray-500 w-[83%] sm:w-full"
                size="txtRobotoMedium8Bluegray500"
              >
                Izoh: Narhi chegirma asosida tayyorlanishi kerak.{" "}
              </Text>
            </div>
            <div className="flex flex-col gap-[11px] items-center justify-start w-[61%] sm:w-full">
              <List
                className="flex flex-col gap-2.5 items-center w-full"
                orientation="vertical"
              >
                <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                  <div className="flex flex-col items-center justify-start w-[49%]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[45px] items-center justify-start p-0.5 rounded-[5px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group646.svg')",
                      }}
                    >
                      <div className="flex flex-row gap-[13px] items-start justify-between mb-[3px] w-[93%] md:w-full">
                        <Img
                          className="h-[33px] mt-[5px]"
                          src="images/img_arrowdown_blue_gray_500_33x25.svg"
                          alt="arrowdown"
                        />
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-base text-blue_gray-500 w-full"
                            size="txtRobotoMedium16"
                          >
                            Smeta faylini yuklang
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[49%]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[45px] items-start justify-start p-[5px] rounded-[5px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group646.svg')",
                      }}
                    >
                      <div className="flex flex-row gap-[33px] items-center justify-start mb-0.5 ml-0.5 md:ml-[0] w-[85%] md:w-full">
                        <Img
                          className="h-[33px]"
                          src="images/img_arrowdown_blue_gray_500_33x25.svg"
                          alt="arrowdown_One"
                        />
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-base text-blue_gray-500 text-center"
                            size="txtRobotoMedium16"
                          >
                            Buyurma
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                  <div className="flex flex-col items-center justify-start w-[49%]">
                    <div className="md:h-[43px] h-[45px] relative w-full">
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-start justify-center m-auto p-[5px] rounded-[5px] w-full"
                        style={{
                          backgroundImage: "url('images/img_group646.svg')",
                        }}
                      >
                        <Img
                          className="h-[33px]"
                          src="images/img_arrowdown_blue_gray_500_33x25.svg"
                          alt="arrowdown"
                        />
                      </div>
                      <div className="absolute bottom-[4%] flex flex-col items-center justify-start right-[0]">
                        <Text
                          className="text-base text-blue_gray-500 w-full"
                          size="txtRobotoMedium16"
                        >
                          <>Materiallar ro\&#96;yhati</>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[49%]">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[45px] items-center justify-start px-1.5 rounded-[5px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group646.svg')",
                      }}
                    >
                      <div className="flex flex-row gap-3.5 items-center justify-between w-full">
                        <Img
                          className="h-[33px]"
                          src="images/img_arrowdown_blue_gray_500_33x25.svg"
                          alt="arrowdown_One"
                        />
                        <div className="flex flex-col items-center justify-start">
                          <Text
                            className="text-base text-blue_gray-500 w-full"
                            size="txtRobotoMedium16"
                          >
                            Приложения к счёту
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </List>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-blue_gray-800_03 flex flex-col items-start justify-start rounded-[5px] w-full">
                  <div className="flex flex-col items-center justify-start mb-20 md:ml-[0] ml-[5px]">
                    <Text
                      className="text-[8px] text-blue_gray-500"
                      size="txtRobotoMedium8Bluegray500"
                    >
                      Filtrdan izoh:
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-blue_gray-800_03 flex md:flex-1 flex-col items-center justify-end mb-[167px] md:ml-[0] ml-[388px] mr-[546px] md:mt-0 mt-[33px] p-1 rounded-[5px] w-[14%] md:w-full">
            <div className="flex flex-row gap-[31px] items-center justify-between w-[93%] md:w-full">
              <div className="flex flex-col items-center justify-start w-[39%]">
                <Img
                  className="h-[34px] w-[34px]"
                  src="images/img_file.svg"
                  alt="file"
                />
                <Text
                  className="text-blue_gray-500 text-xs"
                  size="txtRobotoMedium12Bluegray500"
                >
                  №10 030
                </Text>
              </div>
              <div className="flex flex-col gap-[7px] items-center justify-start w-[38%]">
                <div className="flex flex-row gap-[7px] items-start justify-between w-full">
                  <Text
                    className="text-gray-400 text-sm"
                    size="txtRobotoMedium14Gray400"
                  >
                    E
                  </Text>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[15px] items-center justify-start px-[9px] rounded-[3px]"
                    style={{ backgroundImage: "url('images/img_menu.svg')" }}
                  >
                    <div className="flex flex-col items-center justify-start">
                      <Text
                        className="text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        12
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-1.5 items-start justify-between w-full">
                  <div className="flex flex-col items-center justify-start">
                    <Text
                      className="text-gray-400 text-sm"
                      size="txtRobotoMedium14Gray400"
                    >
                      R{" "}
                    </Text>
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[15px] items-center justify-start px-[9px] rounded-[3px] w-[69%]"
                    style={{ backgroundImage: "url('images/img_menu.svg')" }}
                  >
                    <div className="flex flex-col items-center justify-start w-3.5 md:w-full">
                      <Text
                        className="text-center text-gray-400 text-xs"
                        size="txtRobotoMedium12"
                      >
                        32
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default PluginPage;
