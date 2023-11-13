import React from "react";

import { Img, Input, Line, List, Text } from "components";

const OmborChiqimtarixiBuyurtmalartarkibiPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[953px] mx-auto pb-[27px] relative w-full">
        <div className="absolute h-[900px] md:h-[994px] inset-x-[0] mx-auto md:px-5 top-[0] w-full">
          <Img
            className="h-[900px] m-auto object-cover w-full"
            src="images/img_showroombuyurtmalar.png"
            alt="globalOne"
          />
          <div className="absolute flex md:flex-col flex-row gap-[39px] inset-x-[0] items-start justify-between mx-auto top-[3%] w-[95%]">
            <div className="flex flex-col md:gap-10 gap-[100px] items-end justify-start md:mt-0 mt-[27px] w-[15%] md:w-full">
              <Img
                className="h-[82px]"
                src="images/img_group834.svg"
                alt="groupSeventySix"
              />
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row gap-[21px] items-start justify-start ml-0.5 md:ml-[0] w-[49%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_vector_blue_gray_500_24x24.svg"
                    alt="vector"
                  />
                  <Text
                    className="mt-0.5 text-blue_gray-500 text-sm"
                    size="txtRobotoMedium14"
                  >
                    BICHUV
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-start justify-start mt-[31px] w-full">
                  <Img
                    className="h-6"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                  <Text
                    className="mt-[3px] text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    qoldiqlar ombori
                  </Text>
                </div>
                <div className="flex flex-row gap-[22px] items-start justify-start ml-0.5 md:ml-[0] mt-[29px] w-[96%] md:w-full">
                  <Img
                    className="h-[23px] w-[23px]"
                    src="images/img_vector_blue_gray_500.svg"
                    alt="vector_One"
                  />
                  <Text
                    className="mt-1 text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    mAHSULOT QABULI
                  </Text>
                </div>
                <div className="flex flex-row gap-[18px] items-center justify-start md:ml-[0] ml-[3px] mt-[33px] w-[98%] md:w-full">
                  <Img
                    className="h-[26px] w-[26px]"
                    src="images/img_mail.svg"
                    alt="mail"
                  />
                  <Text
                    className="text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    mAHSULOT OMBORI
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-[83%] md:w-full">
              <div className="flex flex-col gap-[35px] justify-start md:ml-[0] ml-[11px] w-[97%] md:w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Img
                    className="h-[41px] w-[41px]"
                    src="images/img_arrowleft_blue_400.svg"
                    alt="arrowleft"
                  />
                  <div className="flex flex-row items-center justify-end">
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
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <Text
                  className="ml-2.5 md:ml-[0] text-base text-white-A700"
                  size="txtRobotoMedium16WhiteA700"
                >
                  Profil
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mt-[11px] w-full">
                <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-end pt-3.5 rounded-[5px] w-full">
                  <div className="flex flex-col gap-4 items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[95%] md:w-full">
                      <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between mb-[3px] w-2/5 md:w-full">
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
                      <div className="flex flex-col items-center justify-start md:mt-0 mt-[3px] w-[19%] md:w-full">
                        <Input
                          name="buttonadd"
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
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[300px] items-start justify-start p-[13px] w-full"
                      style={{
                        backgroundImage: "url('images/img_group3.svg')",
                      }}
                    >
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start mb-10 md:ml-[0] ml-[13px] w-[52%] md:w-full">
                        <div className="flex flex-col items-start justify-start sm:mt-0 mt-[59px]">
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
                          className="sm:flex-col flex-row md:gap-10 gap-32 grid grid-cols-3 sm:ml-[0] ml-[57px] w-[68%] sm:w-full"
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
                              kosa
                            </Text>
                            <Text
                              className="mt-[22px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              qanot
                            </Text>
                            <Text
                              className="mt-[13px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              kosa
                            </Text>
                            <Text
                              className="mt-[21px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              kosa
                            </Text>
                            <Text
                              className="mt-[25px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              qanot
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
                              className="mt-[39px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Dub mocco
                            </Text>
                            <Text
                              className="mt-5 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Dub mocco
                            </Text>
                            <Text
                              className="mt-[17px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Rangsiz
                            </Text>
                            <Text
                              className="mt-[21px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Rangsiz
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Rangsiz
                            </Text>
                          </div>
                        </List>
                        <div className="flex flex-col items-center justify-start sm:ml-[0] ml-[77px] w-[6%] sm:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              Soni
                            </Text>
                            <Text
                              className="mt-[41px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              20
                            </Text>
                            <Text
                              className="mt-5 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              3
                            </Text>
                            <Text
                              className="mt-[15px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              2
                            </Text>
                            <Text
                              className="mt-[21px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              10
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              20
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Text
                className="ml-2 md:ml-[0] mt-[67px] text-base text-white-A700"
                size="txtRobotoMedium16WhiteA700"
              >
                Aksesuarlar
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[3%] flex flex-col items-center justify-start md:px-5 right-[3%] w-[79%]">
          <div className="h-[318px] relative w-full">
            <Img
              className="h-[318px] m-auto rounded-[5px]"
              src="images/img_group732.svg"
              alt="rectangleTwenty"
            />
            <div className="absolute h-[318px] inset-[0] justify-center m-auto w-full">
              <div className="absolute h-[318px] inset-[0] justify-center m-auto w-full">
                <div className="absolute bottom-[14%] flex flex-col inset-x-[0] items-center justify-start mx-auto w-full">
                  <div className="flex flex-col gap-[45px] items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Line className="bg-blue_gray-800_01 h-0.5 w-full" />
                        <Line className="bg-blue_gray-800_01 h-px mt-[54px] w-full" />
                        <Line className="bg-blue_gray-800_01 h-px mt-[52px] w-full" />
                        <Line className="bg-blue_gray-800_01 h-px mt-[47px] w-full" />
                      </div>
                    </div>
                    <Line className="bg-blue_gray-800_01 h-px w-full" />
                  </div>
                </div>
                <Line className="absolute bg-blue_gray-800_03 h-[318px] inset-y-[0] left-[10%] my-auto w-px" />
              </div>
              <Line className="absolute bg-blue_gray-800_03 h-[318px] inset-y-[0] left-[32%] my-auto w-px" />
              <Line className="absolute bg-blue_gray-800_03 h-[318px] inset-y-[0] left-[23%] my-auto w-px" />
              <Line className="absolute bg-blue_gray-800_03 h-[318px] inset-y-[0] left-[47%] my-auto w-px" />
              <Line className="absolute bg-blue_gray-800_03 h-[318px] inset-y-[0] my-auto right-[41%] w-px" />
              <Line className="absolute bg-blue_gray-800_03 h-[318px] inset-y-[0] my-auto right-[34%] w-px" />
              <Line className="absolute bg-blue_gray-800_03 h-[318px] inset-y-[0] my-auto right-[0] w-px" />
              <div className="absolute flex flex-row items-end justify-between left-[4%] top-[1%] w-[15%]">
                <div className="flex flex-col items-center justify-start mt-[82px]">
                  <Text
                    className="text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    01
                  </Text>
                  <Text
                    className="mt-[38px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    01
                  </Text>
                  <Text
                    className="mt-[30px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    01
                  </Text>
                  <Text
                    className="mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    01
                  </Text>
                </div>
                <div className="flex flex-col gap-6 justify-start w-3/5">
                  <Text
                    className="mr-4 text-[15px] text-blue_gray-500 text-center w-[83%] sm:w-full"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    Aksesuar nomi
                  </Text>
                  <div className="flex flex-col items-start justify-start ml-10 md:ml-[0]">
                    <Text
                      className="md:ml-[0] ml-[3px] text-[15px] text-center text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Stublina
                    </Text>
                    <Text
                      className="mt-[35px] text-[15px] text-center text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Stublina
                    </Text>
                    <Text
                      className="mt-[30px] text-[15px] text-center text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Stublina
                    </Text>
                    <Text
                      className="mt-7 text-[15px] text-center text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Stublina
                    </Text>
                  </div>
                </div>
              </div>
              <div className="absolute flex flex-col items-start justify-start left-1/4 top-[8%]">
                <Text
                  className="text-[15px] text-blue_gray-500"
                  size="txtRobotoMedium15Bluegray500"
                >
                  {" "}
                  Turi
                </Text>
                <Text
                  className="md:ml-[0] ml-[3px] mt-[43px] text-[15px] text-center text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  Eshik
                </Text>
                <Text
                  className="ml-1.5 md:ml-[0] mt-9 text-[15px] text-center text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  Rom
                </Text>
                <Text
                  className="md:ml-[0] ml-[3px] mt-[30px] text-[15px] text-center text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  Eshik
                </Text>
                <Text
                  className="ml-1.5 md:ml-[0] mt-7 text-[15px] text-center text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  Rom
                </Text>
              </div>
              <div className="absolute flex flex-col items-start justify-start left-[36%] top-[5%]">
                <Text
                  className="text-[15px] text-blue_gray-500"
                  size="txtRobotoMedium15Bluegray500"
                >
                  <>O\&#96;rni</>
                </Text>
                <Text
                  className="ml-0.5 md:ml-[0] mt-[53px] text-[15px] text-center text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  Oshiq-moshiq
                </Text>
                <Text
                  className="md:ml-[0] ml-[26px] mt-[35px] text-[15px] text-center text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  Dastak
                </Text>
                <Text
                  className="md:ml-[0] ml-[26px] mt-8 text-[15px] text-center text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  Dastak
                </Text>
                <Text
                  className="md:ml-[0] ml-[26px] mt-[26px] text-[15px] text-center text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  Dastak
                </Text>
              </div>
              <div className="absolute flex flex-col inset-x-[0] items-start justify-start mx-auto top-[6%]">
                <Text
                  className="text-[15px] text-blue_gray-500"
                  size="txtRobotoMedium15Bluegray500"
                >
                  Rangi
                </Text>
                <Text
                  className="mt-[50px] text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  Golden
                </Text>
                <Text
                  className="mt-9 text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  Golden
                </Text>
                <Text
                  className="mt-8 text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  Golden
                </Text>
                <Text
                  className="mt-7 text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  Golden
                </Text>
              </div>
              <div className="absolute flex flex-col items-start justify-start right-[36%] top-[5%]">
                <Text
                  className="text-[15px] text-blue_gray-500"
                  size="txtRobotoMedium15Bluegray500"
                >
                  Soni
                </Text>
                <Text
                  className="mt-[52px] text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  6
                </Text>
                <Text
                  className="mt-[37px] text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  6
                </Text>
                <Text
                  className="mt-[30px] text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  6
                </Text>
                <Text
                  className="mt-7 text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  6
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-800_7e bottom-[37%] flex flex-col gap-[19px] justify-end left-[0] md:px-5 py-[9px] w-[19%]">
          <div className="flex flex-row items-end justify-end ml-11 md:ml-[0] mr-5 mt-[19px] w-[77%] md:w-full">
            <Img
              className="h-7 w-7"
              src="images/img_fluentvehicle_white_a700.svg"
              alt="fluentvehicle"
            />
            <Text
              className="mb-0.5 ml-3.5 mt-1.5 text-base text-gray-400 uppercase"
              size="txtRobotoMedium16Gray400"
            >
              yuk chiqarish
            </Text>
            <Img
              className="h-1 ml-[37px] my-[11px]"
              src="images/img_line49.svg"
              alt="lineFortyNine"
            />
          </div>
          <div className="h-[60px] relative w-full">
            <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-center justify-center m-auto p-[17px] w-full">
              <Text
                className="mt-2 text-sm text-white-A700"
                size="txtRobotoMedium14WhiteA700"
              >
                Yuk chiqish tarixi
              </Text>
            </div>
            <Img
              className="absolute h-[60px] inset-y-[0] left-[0] my-auto object-cover w-[5%]"
              src="images/img_rectangle1564_1.png"
              alt="rectangle1564"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default OmborChiqimtarixiBuyurtmalartarkibiPage;
