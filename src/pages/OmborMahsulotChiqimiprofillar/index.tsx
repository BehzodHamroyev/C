import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const kassaOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const OmborMahsulotChiqimiprofillarPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div className="absolute md:h-[1795px] h-[900px] inset-[0] justify-center m-auto md:px-5 w-full">
          <Img
            className="h-[900px] m-auto object-cover w-full"
            src="images/img_global1_3.png"
            alt="globalOne"
          />
          <div className="absolute flex md:flex-col flex-row md:gap-10 h-max inset-[0] items-start justify-between m-auto w-[95%]">
            <div className="flex flex-col md:gap-10 gap-[100px] items-end justify-start md:mt-0 mt-[26px] w-[15%] md:w-full">
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
            <div className="flex flex-col justify-start w-[83%] md:w-full">
              <div className="flex flex-row items-center justify-end md:ml-[0] ml-[873px] w-1/5 md:w-full">
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
              <Text
                className="ml-2 md:ml-[0] mt-5 text-2xl md:text-[22px] text-gray-400 sm:text-xl"
                size="txtRobotoMedium24"
              >
                Mahsulot kirimi
              </Text>
              <div className="flex flex-col items-center justify-start mt-[17px] w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-[5px] shadow-bs6 w-full">
                      <div className="flex flex-col gap-[52px] items-center justify-start mb-10 w-[98%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="bg-blue_gray-900 flex pr-[3px] relative rounded-[5px] shadow-bs w-[44%] md:w-full">
                            <OmborTaminotchigaZayavkaOneTab
                              className="flex flex-col items-center justify-start my-auto w-64"
                              username="Profillar"
                            />
                            <OmborTaminotchigaZayavkaOneTab
                              className="flex flex-col items-center justify-start ml-[-60px] my-auto w-[249px] z-[1]"
                              username="Aksesuarlar"
                            />
                          </div>
                          <div className="bg-blue_gray-900 flex md:flex-1 flex-col items-start justify-start sm:px-5 px-[22px] rounded-[5px] shadow-bs w-1/5 md:w-full">
                            <OmborTaminotchigaZayavkaOneTab
                              className="flex flex-row gap-4 items-center justify-start w-[142px]"
                              username="Keningi"
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="flex md:flex-1 flex-col items-center justify-start w-[45%] md:w-full">
                            <div className="flex flex-col justify-start w-full">
                              <Text
                                className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                                size="txtRobotoMedium12Bluegray50099"
                              >
                                Buyurtma raqami
                              </Text>
                              <Input
                                name="zipcode"
                                placeholder="1024"
                                className="font-medium leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left w-full"
                                wrapClassName="border border-blue_gray-600_87 border-solid mt-[3px] pl-5 pr-[35px] py-4 rounded-[5px] w-full"
                                shape="round"
                                color="gray_900_87"
                                variant="fill"
                              ></Input>
                            </div>
                            <div className="flex flex-col items-center justify-start mt-[22px] w-full">
                              <div className="flex flex-col gap-[5px] justify-start w-full">
                                <div className="flex flex-row gap-[185px] items-center justify-start ml-4 md:ml-[0] w-3/5 md:w-full">
                                  <Text
                                    className="text-blue_gray-500_99 text-xs"
                                    size="txtRobotoMedium12Bluegray50099"
                                  >
                                    Profil turi
                                  </Text>
                                  <Text
                                    className="text-blue_gray-500_99 text-xs"
                                    size="txtRobotoMedium12Bluegray50099"
                                  >
                                    Artikul
                                  </Text>
                                </div>
                                <div className="bg-gray-900_87 border border-blue_gray-600_87 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start px-3.5 rounded-[3px] w-full">
                                  <Text
                                    className="text-base text-white-A700"
                                    size="txtRobotoMedium16WhiteA700"
                                  >
                                    Aldoks
                                  </Text>
                                  <Img
                                    className="h-[5px] sm:ml-[0] ml-[150px]"
                                    src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                    alt="arrowdown_One"
                                  />
                                  <Line className="bg-blue_gray-800_02 h-[52px] sm:h-px ml-2 sm:ml-[0] sm:w-full w-px" />
                                  <Text
                                    className="sm:ml-[0] ml-[19px] text-base text-white-A700"
                                    size="txtRobotoMedium16WhiteA700"
                                  >
                                    Kosa
                                  </Text>
                                  <Img
                                    className="h-[5px] sm:ml-[0] ml-[120px]"
                                    src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                    alt="arrowdown_Two"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col justify-start mt-[18px] w-full">
                              <Text
                                className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                                size="txtRobotoMedium12Bluegray50099"
                              >
                                Rangi
                              </Text>
                              <SelectBox
                                className="border border-blue_gray-600_87 border-solid font-medium leading-[normal] mt-[3px] rounded-[5px] text-base text-left w-full"
                                placeholderClassName="text-white-A700"
                                indicator={
                                  <Img
                                    className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-[13px]"
                                    src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="groupEightyFour"
                                options={kassaOptionsList}
                                isSearchable={false}
                                placeholder="Kassa"
                                shape="round"
                                color="gray_900_87"
                                size="xl"
                                variant="fill"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start mt-[17px] w-full">
                              <div className="flex flex-col gap-[5px] justify-start w-full">
                                <div className="flex flex-row gap-[173px] items-center justify-start ml-4 md:ml-[0] w-[57%] md:w-full">
                                  <Text
                                    className="text-blue_gray-500_99 text-xs"
                                    size="txtRobotoMedium12Bluegray50099"
                                  >
                                    kelish narhi
                                  </Text>
                                  <Text
                                    className="text-blue_gray-500_99 text-xs"
                                    size="txtRobotoMedium12Bluegray50099"
                                  >
                                    soni
                                  </Text>
                                </div>
                                <div className="bg-gray-900_87 border border-blue_gray-600_87 border-solid flex flex-row items-center justify-start px-3.5 rounded-[3px] w-full">
                                  <SelectBox
                                    className="sm:flex-1 font-medium leading-[normal] text-base text-left text-white-A700 w-1/2 sm:w-full"
                                    placeholderClassName="text-white-A700"
                                    indicator={
                                      <Img
                                        className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-[13px]"
                                        src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                        alt="arrow_down"
                                      />
                                    }
                                    isMulti={false}
                                    name="group721"
                                    options={optionsList}
                                    isSearchable={false}
                                    placeholder="35 500"
                                  />
                                  <Line className="bg-blue_gray-800_02 h-[52px] ml-2 w-px" />
                                  <Text
                                    className="ml-[19px] text-base text-white-A700"
                                    size="txtRobotoMedium16WhiteA700"
                                  >
                                    4
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col justify-start mt-[17px] w-full">
                              <Text
                                className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                                size="txtRobotoMedium12Bluegray50099"
                              >
                                Summasi
                              </Text>
                              <Input
                                name="groupEightyFive"
                                placeholder="144 000"
                                className="font-medium leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left w-full"
                                wrapClassName="border border-blue_gray-600_87 border-solid mt-1 pl-3.5 pr-[35px] py-4 rounded-[5px] w-full"
                                shape="round"
                                color="gray_900_87"
                                variant="fill"
                              ></Input>
                            </div>
                            <div className="flex flex-col items-center justify-start mt-[34px] w-full">
                              <Button
                                className="cursor-pointer font-medium leading-[normal] min-w-[455px] sm:min-w-full rounded-[3px] sm:text-[17px] md:text-[19px] text-[21px] text-center"
                                shape="round"
                                color="blue_400"
                                size="md"
                                variant="fill"
                              >
                                <>Jadvalga qo\&#96;shish</>
                              </Button>
                            </div>
                          </div>
                          <div className="flex md:flex-1 flex-col items-center justify-start w-1/2 md:w-full">
                            <div className="bg-gray-900_87 border border-blue_gray-600_87 border-solid flex flex-col items-center justify-start rounded-[5px] w-full">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[503px] items-center justify-start p-0.5 w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group89.svg')",
                                }}
                              >
                                <div className="flex sm:flex-col flex-row sm:gap-10 items-end justify-between mb-[5px] w-full">
                                  <div className="flex flex-col items-start justify-start mb-[74px] sm:mt-0 mt-[49px]">
                                    <Text
                                      className="text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1024
                                    </Text>
                                    <Text
                                      className="ml-0.5 md:ml-[0] mt-[67px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1024
                                    </Text>
                                    <Text
                                      className="ml-0.5 md:ml-[0] mt-[66px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1024
                                    </Text>
                                    <Text
                                      className="ml-0.5 md:ml-[0] mt-[77px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1025
                                    </Text>
                                    <Text
                                      className="ml-0.5 md:ml-[0] mt-[66px] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1025
                                    </Text>
                                  </div>
                                  <List
                                    className="sm:flex-1 sm:flex-col flex-row gap-4 grid grid-cols-3 mb-[72px] sm:mt-0 mt-1.5 w-[46%] sm:w-full"
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
                                        className="mt-6 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Aldoks
                                      </Text>
                                      <Text
                                        className="mt-[67px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Aldoks
                                      </Text>
                                      <Text
                                        className="mt-[66px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Aldoks
                                      </Text>
                                      <Text
                                        className="mt-[77px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Aldoks
                                      </Text>
                                      <Text
                                        className="mt-[66px] text-[15px] text-gray-400"
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
                                        className="mt-6 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Kosa
                                      </Text>
                                      <Text
                                        className="mt-[68px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Qanot
                                      </Text>
                                      <Text
                                        className="mt-[65px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Kosa
                                      </Text>
                                      <Text
                                        className="mt-[76px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        <>o\&#96;rta</>
                                      </Text>
                                      <Text
                                        className="mt-[66px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Kosa
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
                                        className="mt-[22px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Dub mocco
                                      </Text>
                                      <Text
                                        className="mt-[67px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Dub mocco
                                      </Text>
                                      <Text
                                        className="mt-[67px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Rangsiz
                                      </Text>
                                      <Text
                                        className="mt-[77px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Rangsiz
                                      </Text>
                                      <Text
                                        className="mt-[66px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Rangsiz
                                      </Text>
                                    </div>
                                  </List>
                                  <List
                                    className="sm:flex-1 sm:flex-col flex-row gap-[23px] grid grid-cols-3 w-2/5 sm:w-full"
                                    orientation="horizontal"
                                  >
                                    <div className="flex flex-col gap-6 items-center justify-start sm:ml-[0] sm:mt-0 mt-[7px] w-full">
                                      <Text
                                        className="text-[15px] text-blue_gray-500"
                                        size="txtRobotoMedium15Bluegray500"
                                      >
                                        Soni
                                      </Text>
                                      <div className="flex flex-col items-start justify-start">
                                        <Text
                                          className="text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          3
                                        </Text>
                                        <Text
                                          className="mt-1.5 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          4
                                        </Text>
                                        <Text
                                          className="mt-[5px] text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          2
                                        </Text>
                                        <Text
                                          className="mt-[19px] text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          5
                                        </Text>
                                        <Text
                                          className="mt-1.5 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          1
                                        </Text>
                                        <Text
                                          className="mt-[5px] text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          6
                                        </Text>
                                        <Text
                                          className="mt-[17px] text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          2
                                        </Text>
                                        <Text
                                          className="mt-1.5 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          3
                                        </Text>
                                        <Text
                                          className="mt-[5px] text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          1
                                        </Text>
                                        <Text
                                          className="mt-7 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          3
                                        </Text>
                                        <Text
                                          className="mt-1.5 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          4
                                        </Text>
                                        <Text
                                          className="mt-[5px] text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          2
                                        </Text>
                                        <Text
                                          className="mt-[18px] text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          4
                                        </Text>
                                        <Text
                                          className="mt-1.5 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          1
                                        </Text>
                                        <Text
                                          className="mt-[5px] text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          2
                                        </Text>
                                        <Text
                                          className="mt-1.5 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          5
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start justify-start sm:ml-[0] w-full">
                                      <Text
                                        className="text-[15px] text-blue_gray-500 w-full"
                                        size="txtRobotoMedium15Bluegray500"
                                      >
                                        Kelish narxi
                                      </Text>
                                      <Text
                                        className="mt-3.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1600{" "}
                                      </Text>
                                      <Text
                                        className="mt-1.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1200{" "}
                                      </Text>
                                      <Text
                                        className="mt-1.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1200{" "}
                                      </Text>
                                      <Text
                                        className="mt-[18px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1133{" "}
                                      </Text>
                                      <Text
                                        className="mt-1.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1133{" "}
                                      </Text>
                                      <Text
                                        className="mt-1.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        483{" "}
                                      </Text>
                                      <Text
                                        className="mt-4 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1199
                                      </Text>
                                      <Text
                                        className="mt-1.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1228{" "}
                                      </Text>
                                      <Text
                                        className="mt-1.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1199{" "}
                                      </Text>
                                      <Text
                                        className="mt-[27px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1706{" "}
                                      </Text>
                                      <Text
                                        className="mt-1.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1306{" "}
                                      </Text>
                                      <Text
                                        className="mt-1.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1306{" "}
                                      </Text>
                                      <Text
                                        className="mt-4 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1253
                                      </Text>
                                      <Text
                                        className="mt-1.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        603{" "}
                                      </Text>
                                      <Text
                                        className="mt-1.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1253{" "}
                                      </Text>
                                      <Text
                                        className="mt-1.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        603{" "}
                                      </Text>
                                    </div>
                                    <div className="flex flex-col gap-[13px] justify-start sm:ml-[0] w-full">
                                      <Text
                                        className="text-[15px] text-blue_gray-500 w-full"
                                        size="txtRobotoMedium15Bluegray500"
                                      >
                                        Umumiy summa
                                      </Text>
                                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[9px]">
                                        <Text
                                          className="text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          1600{" "}
                                        </Text>
                                        <Text
                                          className="mt-1.5 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          1200{" "}
                                        </Text>
                                        <Text
                                          className="mt-1.5 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          1200{" "}
                                        </Text>
                                        <Text
                                          className="mt-[18px] text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          1133{" "}
                                        </Text>
                                        <Text
                                          className="mt-1.5 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          1133{" "}
                                        </Text>
                                        <Text
                                          className="mt-1.5 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          483{" "}
                                        </Text>
                                        <Text
                                          className="mt-4 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          1199
                                        </Text>
                                        <Text
                                          className="mt-1.5 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          1228{" "}
                                        </Text>
                                        <Text
                                          className="mt-1.5 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          1199{" "}
                                        </Text>
                                        <Text
                                          className="mt-[27px] text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          1706{" "}
                                        </Text>
                                        <Text
                                          className="mt-1.5 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          1306{" "}
                                        </Text>
                                        <Text
                                          className="mt-1.5 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          1306{" "}
                                        </Text>
                                        <Text
                                          className="mt-4 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          1253
                                        </Text>
                                        <Text
                                          className="mt-1.5 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          603{" "}
                                        </Text>
                                        <Text
                                          className="mt-1.5 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          1253{" "}
                                        </Text>
                                        <Text
                                          className="mt-1.5 text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          603{" "}
                                        </Text>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-800_7e bottom-[34%] flex flex-col gap-[34px] items-center justify-start left-[0] md:px-5 py-3 w-[19%]">
          <div className="h-[60px] relative w-full">
            <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-end justify-center m-auto p-[15px] w-full">
              <div className="flex flex-row items-end justify-end mr-[5px] w-[86%] md:w-full">
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
            </div>
            <div className="absolute bg-red-300 h-[60px] inset-y-[0] left-[0] my-auto w-[5%]"></div>
          </div>
          <Text
            className="mb-[9px] text-blue_gray-500 text-sm"
            size="txtRobotoMedium14"
          >
            Yuk chiqish tarixi
          </Text>
        </div>
      </div>
    </>
  );
};

export default OmborMahsulotChiqimiprofillarPage;
