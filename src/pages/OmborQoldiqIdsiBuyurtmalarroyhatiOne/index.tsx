import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const rangiOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const OmborQoldiqIdsiBuyurtmalarroyhatiOnePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat flex flex-col font-roboto h-[900px] items-center justify-start mx-auto sm:pr-5 pr-7 py-7 w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly max-w-[1395px] mb-[3px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[27px] w-1/5 md:w-full">
            <Img
              className="h-[82px] md:ml-[0] ml-[49px]"
              src="images/img_group834.svg"
              alt="groupSeventySix"
            />
            <div className="flex flex-col gap-8 items-start justify-start md:ml-[0] ml-[39px] mt-[92px] w-[81%] md:w-full">
              <div className="flex flex-row gap-[21px] items-center justify-start ml-0.5 md:ml-[0] w-[59%] md:w-full">
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
              <div className="flex flex-row gap-[21px] items-center justify-start ml-0.5 md:ml-[0] w-[72%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_icoutlineshop_blue_gray_500.svg"
                  alt="icoutlineshop_One"
                />
                <Text
                  className="text-blue_gray-500 text-sm uppercase"
                  size="txtRobotoMedium14"
                >
                  OMBOR & SAVDO
                </Text>
              </div>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[215px] ml-0.5 md:ml-[0]"
                onClick={() => navigate("/showroombuyurtmalarstatusone")}
                leftIcon={
                  <Img
                    className="h-6 mr-5"
                    src="images/img_rislideshowline.svg"
                    alt="ri:slideshow-line"
                  />
                }
              >
                <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
                  Sowroomlar oynasi
                </div>
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[200px]"
                onClick={() => navigate("/kassa")}
                leftIcon={
                  <Img
                    className="h-6 mr-5"
                    src="images/img_fluentclipboar.svg"
                    alt="fluent:clipboard-bullet-list-rtl-20-regular"
                  />
                }
              >
                <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
                  <>Hodimlar ro\&#96;yhati</>
                </div>
              </Button>
            </div>
            <div className="bg-blue_gray-800_7e flex flex-row gap-3.5 items-center justify-start mt-[11px] md:pr-10 pr-20 sm:pr-5 w-full">
              <div className="bg-red-300 h-[60px] w-[8%]"></div>
              <div className="flex flex-row gap-5 items-start justify-center w-[85%]">
                <Img
                  className="h-6 w-6"
                  src="images/img_mdicircularsaw.svg"
                  alt="mdicircularsaw"
                />
                <Text
                  className="mt-1 text-base text-white-A700 uppercase"
                  size="txtRobotoMedium16WhiteA700"
                >
                  Ombor qoldiq{" "}
                </Text>
              </div>
            </div>
            <div className="flex flex-col gap-[41px] items-start justify-start md:ml-[0] ml-[39px] mt-[31px] w-[210px] md:w-full">
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[138px] ml-0.5 md:ml-[0]"
                onClick={() => navigate("/moliyakirimtarixione")}
                leftIcon={
                  <div className="mr-[13px] bg-blue_gray-500">
                    <Img
                      src="images/img_settings_blue_gray_500.svg"
                      alt="settings"
                    />
                  </div>
                }
              >
                <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
                  Kirim tarixi
                </div>
              </Button>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[151px] ml-0.5 md:ml-[0]"
                onClick={() => navigate("/moliyachiqimtarixi")}
                leftIcon={
                  <div className="mr-3.5 bg-blue_gray-500">
                    <Img
                      src="images/img_settings_blue_gray_500.svg"
                      alt="settings"
                    />
                  </div>
                }
              >
                <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
                  Chiqim tarixi
                </div>
              </Button>
              <div className="flex flex-row gap-[18px] items-start justify-start ml-0.5 md:ml-[0] w-full">
                <Img
                  className="h-[21px]"
                  src="images/img_user_blue_gray_500.svg"
                  alt="user"
                />
                <Text
                  className="text-base text-blue_gray-500 uppercase"
                  size="txtRobotoMedium16"
                >
                  Buyurtmaga chiqim
                </Text>
              </div>
              <div className="flex flex-row gap-5 items-center justify-start w-[85%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_bipersonworkspace.svg"
                  alt="bipersonworkspa"
                />
                <Text
                  className="text-blue_gray-500 text-sm uppercase"
                  size="txtRobotoMedium14"
                >
                  <>Mijozlar ro\&#96;yhati</>
                </Text>
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 flex-col gap-[55px] items-center justify-start w-[81%] md:w-full">
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
            <div className="flex flex-col items-center justify-start w-full">
              <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-start pr-0.5 py-0.5 rounded-[5px] w-full">
                <div className="flex flex-col gap-[25px] items-center justify-start mb-[348px] mt-[26px] w-full">
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
                        className="absolute bottom-[18%] font-medium inset-x-[0] leading-[normal] mx-auto text-base text-gray-400 text-left w-[87%] sm:w-full"
                        placeholderClassName="text-gray-400"
                        indicator={
                          <Img
                            className="h-[3px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[7px] right-[0] absolute"
                            src="images/img_arrowdown_gray_400.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="group814"
                        options={rangiOptionsList}
                        isSearchable={false}
                        placeholder="Rangi"
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
                      backgroundImage: "url('images/img_group395.svg')",
                    }}
                  >
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-[41px] ml-2 md:ml-[0] w-[71%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-[3%] md:w-full">
                        <Img
                          className="h-[18px] md:h-auto object-cover w-[89%] sm:w-full"
                          src="images/img_.png"
                          alt="OneHundredTen"
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
                        className="sm:flex-col flex-row md:gap-10 gap-[143px] grid grid-cols-3 md:ml-[0] ml-[45px] w-[52%] md:w-full"
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
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[77px] w-[8%] md:w-full">
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
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[89px] w-[11%] md:w-full">
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OmborQoldiqIdsiBuyurtmalarroyhatiOnePage;
