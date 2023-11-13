import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const sexdaOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const FrameFiftyTwoPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-col font-roboto items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div
            className="bg-cover bg-gray-900 bg-no-repeat md:h-[2318px] sm:h-[839px] h-[900px] pr-7 md:px-5 py-7 relative w-full"
            style={{
              backgroundImage: "url('images/img_showroombuyurtmalar.png')",
            }}
          >
            <div className="absolute md:h-[2318px] h-[839px] inset-[0] justify-center m-auto w-[98%] md:w-full">
              <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[98%]">
                <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                  <div className="flex md:flex-1 flex-col md:gap-10 gap-[99px] items-center justify-start md:mt-0 mt-[27px] w-[15%] md:w-full">
                    <Img
                      className="h-[82px]"
                      src="images/img_group834.svg"
                      alt="groupSeventySix"
                    />
                    <div className="flex flex-col items-start justify-start w-full">
                      <div className="flex flex-row gap-[21px] items-start justify-start w-1/2 md:w-full">
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
                      <div className="flex flex-row gap-[22px] items-start justify-start mt-[175px] w-[98%] md:w-full">
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
                      <div className="flex flex-row gap-[18px] items-center justify-start mt-[33px] w-full">
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
                      <div className="flex flex-row gap-[22px] items-start justify-start mt-8 w-[76%] md:w-full">
                        <Img
                          className="h-[23px] w-[23px]"
                          src="images/img_calendar.svg"
                          alt="calendar"
                        />
                        <Text
                          className="mt-1 text-blue_gray-500 text-sm uppercase"
                          size="txtRobotoMedium14"
                        >
                          YUK CHIQARISH
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-col gap-14 items-center justify-start w-[83%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
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
                    <div className="flex flex-col items-center justify-start w-full">
                      <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-start pr-1 py-1 rounded-[5px] w-full">
                        <div className="flex flex-col gap-[25px] items-center justify-start mb-[345px] mt-[23px] w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[96%] md:w-full">
                            <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between w-[39%] md:w-full">
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
                            <div className="h-10 md:h-[39px] md:ml-[0] ml-[238px] relative w-[19%] md:w-full">
                              <div className="bg-blue_gray-800_8d border border-blue_gray-600_8d border-solid h-[39px] m-auto rounded-[3px] w-full"></div>
                              <SelectBox
                                className="absolute bottom-[23%] font-medium inset-x-[0] leading-[normal] mx-auto text-base text-gray-400 text-left w-[87%] sm:w-full"
                                placeholderClassName="text-gray-400"
                                indicator={
                                  <Img
                                    className="h-[3px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[7px] right-[0] absolute"
                                    src="images/img_arrowdown_gray_400.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="group746"
                                options={sexdaOptionsList}
                                isSearchable={false}
                                placeholder="Sexda"
                              />
                            </div>
                            <div className="bg-blue_gray-900 border border-blue_gray-600 border-solid flex flex-col items-start justify-start md:ml-[0] ml-[19px] sm:px-5 px-[22px] rounded-[5px] w-[19%] md:w-full">
                              <OmborTaminotchigaZayavkaOneTab
                                className="flex flex-col items-center justify-start w-[142px]"
                                username="Excelga olish"
                              />
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[301px] items-start justify-start p-[13px] w-full"
                            style={{
                              backgroundImage: "url('images/img_group159.svg')",
                            }}
                          >
                            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-[41px] md:ml-[0] ml-[5px] w-[81%] md:w-full">
                              <div className="flex flex-col items-start justify-start w-[2%] md:w-full">
                                <Img
                                  className="h-[18px] md:h-auto object-cover w-[89%] sm:w-full"
                                  src="images/img_.png"
                                  alt="Twenty"
                                />
                                <Text
                                  className="mt-[42px] text-[15px] text-gray-400"
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
                                className="sm:flex-col flex-row md:gap-10 gap-[143px] grid grid-cols-3 md:ml-[0] ml-[45px] w-[45%] md:w-full"
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
                              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[77px] w-[7%] md:w-full">
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
                                    1800
                                  </Text>
                                  <Text
                                    className="mt-[21px] text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    1900
                                  </Text>
                                  <Text
                                    className="mt-[23px] text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    2500
                                  </Text>
                                </div>
                              </div>
                              <List
                                className="sm:flex-col flex-row gap-[30px] grid grid-cols-2 md:ml-[0] ml-[89px] w-[23%] md:w-full"
                                orientation="horizontal"
                              >
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col gap-[42px] justify-start w-full">
                                    <Text
                                      className="md:ml-[0] ml-[23px] text-[15px] text-blue_gray-500"
                                      size="txtRobotoMedium15Bluegray500"
                                    >
                                      Id
                                    </Text>
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1600(kosa)
                                      </Text>
                                      <Text
                                        className="mt-5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1500(kosa)
                                      </Text>
                                      <Text
                                        className="mt-[15px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1800(qanot)
                                      </Text>
                                      <Text
                                        className="mt-[21px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1900(kosa)
                                      </Text>
                                      <Text
                                        className="mt-[23px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        2500(kosa)
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col gap-[42px] justify-start w-full">
                                    <Text
                                      className="md:ml-[0] ml-[5px] text-[15px] text-blue_gray-500"
                                      size="txtRobotoMedium15Bluegray500"
                                    >
                                      Soni
                                    </Text>
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1600(kosa)
                                      </Text>
                                      <Text
                                        className="mt-5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1500(kosa)
                                      </Text>
                                      <Text
                                        className="mt-[15px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1800(qanot)
                                      </Text>
                                      <Text
                                        className="mt-[21px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1900(kosa)
                                      </Text>
                                      <Text
                                        className="mt-[23px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        2500(kosa)
                                      </Text>
                                    </div>
                                  </div>
                                </div>
                              </List>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bg-blue_gray-800_7e flex flex-col gap-4 items-start justify-end left-[0] p-2 top-[30%]">
                <Text
                  className="md:ml-[0] ml-[75px] mt-[67px] text-blue_gray-500 text-sm"
                  size="txtRobotoMedium14"
                >
                  Qoldiq qabuli
                </Text>
                <Text
                  className="md:ml-[0] ml-[75px] text-blue_gray-500 text-sm"
                  size="txtRobotoMedium14"
                >
                  Qabul tarixi
                </Text>
              </div>
            </div>
            <div className="absolute bg-blue_gray-800_7e flex flex-row gap-3.5 items-center justify-start left-[0] md:pr-10 sm:pr-5 pr-[49px] top-[31%] w-[19%]">
              <div className="bg-red-300 h-[60px] w-[7%]"></div>
              <div className="flex flex-row gap-5 items-start justify-start w-[88%]">
                <Img
                  className="h-6 w-6"
                  src="images/img_mdicircularsaw.svg"
                  alt="mdicircularsaw"
                />
                <Text
                  className="mt-1 text-base text-white-A700 uppercase"
                  size="txtRobotoMedium16WhiteA700"
                >
                  qoldiqLAR OMBORI{" "}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameFiftyTwoPage;
