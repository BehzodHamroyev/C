import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const moccoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const IshlabchiqarishsexiOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[1055px] mx-auto pb-[155px] relative w-full">
        <Img
          className="h-[900px] mx-auto object-cover w-full"
          src="images/img_showroombuyurtmalar.png"
          alt="globalOne"
        />
        <div className="absolute h-[60px] left-[0] md:px-5 top-[41%] w-1/5">
          <div className="absolute h-[60px] inset-[0] justify-center m-auto w-full">
            <div className="bg-blue_gray-800_7e h-[60px] m-auto w-full"></div>
            <div className="absolute flex flex-row gap-[21px] h-max inset-y-[0] items-start justify-start left-[10%] my-auto w-[64%]">
              <Img
                className="h-6 w-6"
                src="images/img_mdicircularsaw.svg"
                alt="mdicircularsaw"
              />
              <Text
                className="mt-[3px] text-base text-white-A700 uppercase"
                size="txtRobotoMedium16WhiteA700"
              >
                Brak mahsulot
              </Text>
            </div>
          </div>
          <div className="absolute bg-red-300 h-[60px] inset-y-[0] left-[0] my-auto w-[6%]"></div>
        </div>
        <Img
          className="absolute h-[82px] left-[3%] top-[5%]"
          src="images/img_group834.svg"
          alt="groupSeventySix"
        />
        <div className="absolute flex md:flex-col flex-row gap-[31px] items-start justify-between max-w-[1162px] md:px-5 right-[0] top-[3%] w-full">
          <div className="flex md:flex-1 flex-col gap-[35px] justify-start w-[97%] md:w-full">
            <div className="flex flex-row items-center justify-end md:ml-[0] ml-[872px] w-1/5 md:w-full">
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
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-400 sm:text-xl"
                size="txtRobotoMedium24"
              >
                Buyurtma qoldiq ID{" "}
              </Text>
              <div className="flex flex-col items-center justify-start mt-0.5 w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-start p-[38px] sm:px-5 rounded-[5px] shadow-bs6 w-full">
                      <div className="flex flex-col gap-[41px] items-center justify-start mb-[57px] w-[99%] md:w-full">
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="bg-blue_gray-900 h-12 md:h-[43px] relative rounded-[5px] shadow-bs w-[45%] md:w-full">
                            <OmborTaminotchigaZayavkaOneTab
                              className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[262px]"
                              username="aksesuarlar"
                            />
                            <OmborTaminotchigaZayavkaOneTab
                              className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-[255px]"
                              username="profillar"
                            />
                          </div>
                          <div className="bg-blue_gray-900 flex md:flex-1 flex-col items-start justify-start sm:px-5 px-[22px] rounded-[5px] shadow-bs w-1/5 md:w-full">
                            <OmborTaminotchigaZayavkaOneTab
                              className="flex flex-col items-center justify-start w-[142px]"
                              username="saqlash"
                            />
                          </div>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="flex md:flex-1 flex-col items-center justify-start w-[45%] md:w-full">
                            <div className="flex flex-col gap-[5px] justify-start w-full">
                              <Text
                                className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                                size="txtRobotoMedium12Bluegray50099"
                              >
                                Masul shaxs
                              </Text>
                              <Input
                                name="group684"
                                placeholder="Rustam Fozilov"
                                className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                                wrapClassName="rounded-[5px] w-full"
                                shape="round"
                                color="gray_900"
                                size="3xl"
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
                                <div className="bg-gray-900 flex sm:flex-col flex-row sm:gap-5 items-center justify-start px-3.5 rounded-[3px] w-full">
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
                                className="font-medium leading-[normal] mt-[3px] rounded-[5px] text-base text-left w-full"
                                placeholderClassName="text-white-A700"
                                indicator={
                                  <Img
                                    className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-[13px]"
                                    src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isMulti={false}
                                name="group682"
                                options={moccoOptionsList}
                                isSearchable={false}
                                placeholder="Mocco"
                                shape="round"
                                color="gray_900"
                                size="xl"
                                variant="fill"
                              />
                            </div>
                            <div className="flex flex-col items-center justify-start mt-[17px] w-full">
                              <div className="flex flex-col justify-start w-full">
                                <div className="flex flex-row gap-[158px] items-center justify-start ml-4 md:ml-[0] w-[57%] md:w-full">
                                  <Text
                                    className="text-blue_gray-500_99 text-xs"
                                    size="txtRobotoMedium12Bluegray50099"
                                  >
                                    Olchami (mm)
                                  </Text>
                                  <Text
                                    className="text-blue_gray-500_99 text-xs"
                                    size="txtRobotoMedium12Bluegray50099"
                                  >
                                    soni
                                  </Text>
                                </div>
                                <div className="bg-gray-900 flex flex-row items-center justify-start mt-1 px-3.5 rounded-[3px] w-full">
                                  <Text
                                    className="text-base text-white-A700"
                                    size="txtRobotoMedium16WhiteA700"
                                  >
                                    1200
                                  </Text>
                                  <Line className="bg-blue_gray-800_02 h-[52px] ml-[185px] w-px" />
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
                                name="group683"
                                placeholder="144 000"
                                className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                                wrapClassName="mt-1 rounded-[5px] w-full"
                                shape="round"
                                color="gray_900"
                                size="2xl"
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
                            <div className="bg-gray-900 flex flex-col items-center justify-start rounded-[5px] w-full">
                              <div
                                className="bg-cover bg-no-repeat flex flex-col h-[503px] items-center justify-start p-0.5 w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group89.svg')",
                                }}
                              >
                                <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mb-[294px] w-full">
                                  <div className="flex flex-col md:gap-10 gap-[67px] items-start justify-start sm:mt-0 mt-[50px]">
                                    <Text
                                      className="text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1024
                                    </Text>
                                    <Text
                                      className="ml-0.5 md:ml-[0] text-[15px] text-gray-400"
                                      size="txtRobotoMedium15Gray400"
                                    >
                                      1024
                                    </Text>
                                  </div>
                                  <div className="flex flex-col items-start justify-start sm:mt-0 mt-[7px]">
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
                                  </div>
                                  <div className="flex flex-col items-start justify-start sm:mt-0 mt-[7px]">
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
                                  </div>
                                  <div className="flex flex-col items-start justify-start sm:mt-0 mt-[9px]">
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
                                  </div>
                                  <div className="flex flex-col items-start justify-start">
                                    <Text
                                      className="text-[15px] text-blue_gray-500"
                                      size="txtRobotoMedium15Bluegray500"
                                    >
                                      <>O\&#96;lchami</>
                                    </Text>
                                    <Text
                                      className="mt-8 text-[15px] text-gray-400"
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
                                  </div>
                                  <List
                                    className="sm:flex-1 sm:flex-col flex-row gap-[17px] grid grid-cols-2 w-[23%] sm:w-full"
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
                                      </div>
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
          <div className="h-[770px] md:mt-0 mt-[76px] relative w-[1%] md:w-full">
            <Line className="bg-blue_gray-800 h-[770px] m-auto w-[5px]" />
            <Line className="absolute bg-blue_gray-500 bottom-[6%] h-[172px] inset-x-[0] mx-auto rounded-sm w-[5px]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default IshlabchiqarishsexiOnePage;
