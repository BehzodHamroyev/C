import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const mahsulotGuruhiOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const OmborMahsulotlaromboriOnePage: React.FC = () => {
  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat font-roboto h-[900px] mx-auto sm:pr-5 pr-7 py-7 relative w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="flex flex-col h-full items-center justify-start max-w-[1400px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[254px] items-center justify-start md:mt-0 mt-[27px] w-1/5 md:w-full">
              <Img
                className="h-[82px]"
                src="images/img_group834.svg"
                alt="groupSeventySix"
              />
              <div className="h-[60px] relative w-full">
                <div className="absolute bg-blue_gray-800_7e flex flex-row gap-4 h-full inset-[0] items-start justify-center m-auto p-[13px] w-full">
                  <Img
                    className="h-[26px] ml-[30px] mt-1.5 w-[26px]"
                    src="images/img_computer_gray_400.svg"
                    alt="computer"
                  />
                  <div className="flex flex-col items-center justify-start mt-2">
                    <Text
                      className="text-base text-gray-400 uppercase"
                      size="txtRobotoMedium16Gray400"
                    >
                      Mahsulot ombori
                    </Text>
                  </div>
                </div>
                <div className="absolute bg-red-300 h-[60px] inset-y-[0] left-[0] my-auto w-[5%]"></div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[15px] items-center justify-start w-[81%] md:w-full">
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
                <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-end pr-0.5 pt-0.5 rounded-[5px] w-full">
                  <div className="flex flex-col gap-5 items-center justify-start mt-3.5 w-full">
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
                          name="group750"
                          options={mahsulotGuruhiOptionsList}
                          isSearchable={false}
                          placeholder="Mahsulot guruhi"
                        />
                      </div>
                      <Button
                        className="border border-blue_gray-600 border-solid cursor-pointer flex items-center justify-center min-w-[211px] md:ml-[0] ml-[9px] rounded-[5px]"
                        rightIcon={
                          <div className="h-6 ml-[17px] w-6 bg-blue_gray-500 p-1.5 rounded flex justify-center items-center">
                            <Img
                              className="h-[11px]"
                              src="images/img_plus_red_300.svg"
                              alt="plus"
                            />
                          </div>
                        }
                        shape="round"
                        color="blue_gray_900"
                        size="sm"
                        variant="fill"
                      >
                        <div className="font-medium text-center text-sm tracking-[0.14px] uppercase">
                          <>mahsulot Qo\&#96;shish</>
                        </div>
                      </Button>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[651px] items-start justify-start p-3.5 w-full"
                      style={{
                        backgroundImage: "url('images/img_group181.svg')",
                      }}
                    >
                      <div className="flex md:flex-col flex-row md:gap-10 gap-[111px] items-center justify-start ml-2.5 md:ml-[0] w-[84%] md:w-full">
                        <List
                          className="sm:flex-col flex-row gap-[49px] grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 w-4/5 md:w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col items-start justify-start w-full">
                            <Img
                              className="h-[18px] md:h-auto object-cover w-[89%] sm:w-full"
                              src="images/img__18x15.png"
                              alt="TwentyFour"
                            />
                            <Text
                              className="mt-10 text-[15px] text-gray-400"
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
                            <Text
                              className="mt-6 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              06
                            </Text>
                            <Text
                              className="mt-5 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              07
                            </Text>
                            <Text
                              className="mt-[15px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              08
                            </Text>
                            <Text
                              className="mt-[21px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              09
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              10
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              Nomi
                            </Text>
                            <Text
                              className="mt-[39px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              PVH (Dummocco) 6500
                            </Text>
                            <Text
                              className="mt-[21px] text-[15px] text-gray-400"
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
                            <Text
                              className="mt-[22px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              PVH (Dummocco) 6500
                            </Text>
                            <Text
                              className="mt-[21px] text-[15px] text-gray-400"
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
                            <Text
                              className="ml-9 md:ml-[0] mt-[177px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Summa{" "}
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
                              Kosa
                            </Text>
                            <Text
                              className="mt-5 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Kosa
                            </Text>
                            <Text
                              className="mt-[15px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Kosa
                            </Text>
                            <Text
                              className="mt-[21px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Kosa
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Kosa
                            </Text>
                            <Text
                              className="mt-6 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Qanot
                            </Text>
                            <Text
                              className="mt-5 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Qanot
                            </Text>
                            <Text
                              className="mt-[15px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Qanot
                            </Text>
                            <Text
                              className="mt-[21px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Qanot
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Qanot
                            </Text>
                          </div>
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-[15px] text-blue_gray-500 text-center"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              <>
                                Mahsulot <br />
                                guruhi
                              </>
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Profil
                            </Text>
                            <Text
                              className="mt-5 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Profil
                            </Text>
                            <Text
                              className="mt-[15px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Profil
                            </Text>
                            <Text
                              className="mt-[21px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Aksesuar
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Aksesuar
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Profil
                            </Text>
                            <Text
                              className="mt-5 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Profil
                            </Text>
                            <Text
                              className="mt-[15px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Profil
                            </Text>
                            <Text
                              className="mt-[21px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Aksesuar
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Aksesuar
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
                              className="mt-[41px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              80 000
                            </Text>
                            <Text
                              className="mt-5 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              80 000
                            </Text>
                            <Text
                              className="mt-[15px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              150 000
                            </Text>
                            <Text
                              className="mt-[21px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              150 000
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              150 000
                            </Text>
                            <Text
                              className="mt-6 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              80 000
                            </Text>
                            <Text
                              className="mt-5 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              80 000
                            </Text>
                            <Text
                              className="mt-[15px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              150 000
                            </Text>
                            <Text
                              className="mt-[21px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              150 000
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              150 000
                            </Text>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
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
                                5
                              </Text>
                              <Text
                                className="mt-[19px] text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                25
                              </Text>
                              <Text
                                className="mt-[15px] text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                35
                              </Text>
                              <Text
                                className="mt-[21px] text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                65
                              </Text>
                              <Text
                                className="mt-[23px] text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                45
                              </Text>
                              <Text
                                className="mt-6 text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                5
                              </Text>
                              <Text
                                className="mt-[19px] text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                25
                              </Text>
                              <Text
                                className="mt-[15px] text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                35
                              </Text>
                              <Text
                                className="mt-[21px] text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                65
                              </Text>
                              <Text
                                className="mt-[23px] text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                45
                              </Text>
                            </div>
                          </div>
                        </List>
                        <div className="flex flex-col items-center justify-start w-[9%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              Sumasi
                            </Text>
                            <Text
                              className="mt-[41px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              400 000
                            </Text>
                            <Text
                              className="mt-5 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              2 000 000
                            </Text>
                            <Text
                              className="mt-[15px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              5 250 000
                            </Text>
                            <Text
                              className="mt-[21px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              9 750 000
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              6 750 000
                            </Text>
                            <Text
                              className="mt-6 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              400 000
                            </Text>
                            <Text
                              className="mt-5 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              2 000 000
                            </Text>
                            <Text
                              className="mt-[15px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              5 250 000
                            </Text>
                            <Text
                              className="mt-[21px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              9 750 000
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              6 750 000
                            </Text>
                            <Text
                              className="mt-[177px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              24 750 000
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
        <div className="absolute flex flex-col items-start justify-start left-[3%] md:px-5 top-[27%] w-[14%]">
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
            <Img className="h-6" src="images/img_settings.svg" alt="settings" />
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
          <div className="flex flex-row gap-[22px] items-start justify-start ml-0.5 md:ml-[0] mt-[92px] w-3/4 md:w-full">
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
    </>
  );
};

export default OmborMahsulotlaromboriOnePage;
