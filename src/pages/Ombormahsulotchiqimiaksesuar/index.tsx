import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const dubmoccoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const OmbormahsulotchiqimiaksesuarPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto p-[29px] sm:px-5 w-full"
          style={{
            backgroundImage: "url('images/img_showroombuyurtmalar.png')",
          }}
        >
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between max-w-[1363px] mb-[22px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[100px] items-end justify-start md:mt-0 mt-[26px] w-[15%] md:w-full">
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
            <div className="flex md:flex-1 flex-col justify-start w-[83%] md:w-full">
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
                      <div className="flex flex-col gap-[52px] items-center justify-start mb-8 w-[98%] md:w-full">
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
                          <Input
                            name="buttonsaqlash"
                            placeholder="saqlash"
                            className="font-medium p-0 placeholder:text-blue-400 text-center text-sm tracking-[0.14px] uppercase w-full"
                            wrapClassName="border border-blue_gray-600 border-solid flex md:flex-1 md:mt-0 my-1 rounded-[5px] md:w-full"
                            suffix={
                              <Img
                                className="h-6 ml-[29px] my-auto"
                                src="images/img_save.svg"
                                alt="save"
                              />
                            }
                            shape="round"
                            color="blue_gray_900"
                            size="md"
                            variant="fill"
                          ></Input>
                        </div>
                        <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                          <div className="flex md:flex-1 flex-col md:gap-10 gap-[111px] items-center justify-start w-[45%] md:w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col justify-start w-[99%] md:w-full">
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
                              <div className="flex flex-col items-center justify-start mt-[30px] w-[99%] md:w-full">
                                <div className="flex flex-col gap-[5px] justify-start w-full">
                                  <div className="flex flex-row gap-[163px] items-center justify-start ml-4 md:ml-[0] w-[57%] md:w-full">
                                    <Text
                                      className="text-blue_gray-500_99 text-xs"
                                      size="txtRobotoMedium12Bluegray50099"
                                    >
                                      Aksesuar turi
                                    </Text>
                                    <Text
                                      className="text-blue_gray-500_99 text-xs"
                                      size="txtRobotoMedium12Bluegray50099"
                                    >
                                      <>o\&#96;rni</>
                                    </Text>
                                  </div>
                                  <div className="bg-gray-900_87 border border-blue_gray-600_87 border-solid flex sm:flex-col flex-row sm:gap-5 items-center justify-start px-3.5 rounded-[3px] w-full">
                                    <Text
                                      className="text-base text-white-A700"
                                      size="txtRobotoMedium16WhiteA700"
                                    >
                                      Eshik
                                    </Text>
                                    <Img
                                      className="h-[5px] ml-40 sm:ml-[0]"
                                      src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                      alt="arrowdown_One"
                                    />
                                    <Line className="bg-blue_gray-800_02 h-[52px] sm:h-px ml-2 sm:ml-[0] sm:w-full w-px" />
                                    <Text
                                      className="sm:ml-[0] ml-[19px] text-base text-white-A700"
                                      size="txtRobotoMedium16WhiteA700"
                                    >
                                      Dastak
                                    </Text>
                                    <Img
                                      className="h-[5px] sm:ml-[0] ml-[105px]"
                                      src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                      alt="arrowdown_Two"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col justify-start mt-6 w-[99%] md:w-full">
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
                                  name="group150"
                                  options={dubmoccoOptionsList}
                                  isSearchable={false}
                                  placeholder="Dubmocco"
                                  shape="round"
                                  color="gray_900_87"
                                  size="xl"
                                  variant="fill"
                                />
                              </div>
                              <div className="flex flex-col justify-start mt-[15px]">
                                <Text
                                  className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                                  size="txtRobotoMedium12Bluegray50099"
                                >
                                  Soni
                                </Text>
                                <Text
                                  className="bg-gray-900_87 border border-blue_gray-600_87 border-solid h-[52px] justify-center mt-1 pl-3.5 sm:pr-5 pr-[35px] py-4 rounded-[5px] text-base text-white-A700 w-[455px]"
                                  size="txtRobotoMedium16WhiteA700"
                                >
                                  3
                                </Text>
                              </div>
                            </div>
                            <div className="flex flex-col items-center justify-start w-[99%] md:w-full">
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
                                className="bg-cover bg-no-repeat flex flex-col h-[503px] items-start justify-start p-[5px] w-full"
                                style={{
                                  backgroundImage:
                                    "url('images/img_group156.svg')",
                                }}
                              >
                                <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start mb-[333px] mt-1 w-[88%] md:w-full">
                                  <div className="flex flex-col items-center justify-start sm:mt-0 mt-[42px] w-[8%] sm:w-full">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1024
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1024
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-center justify-start mt-[11px] w-full">
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1024
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-center justify-start mt-2.5 w-full">
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        1024
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-6 justify-start sm:ml-[0] ml-[25px] w-[21%] sm:w-full">
                                    <Text
                                      className="text-[15px] text-blue_gray-500 text-center"
                                      size="txtRobotoMedium15Bluegray500"
                                    >
                                      Aksesuar turi
                                    </Text>
                                    <div className="flex flex-col items-center justify-start ml-1.5 md:ml-[0]">
                                      <Text
                                        className="text-[15px] text-center text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Eshik
                                      </Text>
                                      <Text
                                        className="mt-[15px] text-[15px] text-center text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Rom
                                      </Text>
                                      <Text
                                        className="mt-[11px] text-[15px] text-center text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Eshik
                                      </Text>
                                      <Text
                                        className="mt-2.5 text-[15px] text-center text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Rom
                                      </Text>
                                    </div>
                                  </div>
                                  <div className="flex flex-col gap-[13px] justify-start sm:ml-[0] ml-[25px] w-[22%] sm:w-full">
                                    <div className="flex flex-col items-start justify-start md:ml-[0] ml-[18px]">
                                      <Text
                                        className="text-[15px] text-blue_gray-500"
                                        size="txtRobotoMedium15Bluegray500"
                                      >
                                        <>O\&#96;rni</>
                                      </Text>
                                      <Text
                                        className="mt-6 text-[15px] text-center text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Dastak
                                      </Text>
                                      <Text
                                        className="mt-[15px] text-[15px] text-center text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Dastak
                                      </Text>
                                    </div>
                                    <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                                      <Text
                                        className="text-[15px] text-center text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Oshiq-moshiq
                                      </Text>
                                      <Text
                                        className="text-[15px] text-center text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Oshiq-moshiq
                                      </Text>
                                    </div>
                                  </div>
                                  <List
                                    className="sm:flex-col flex-row gap-[59px] grid grid-cols-2 sm:ml-[0] ml-[33px] w-[31%] sm:w-full"
                                    orientation="horizontal"
                                  >
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
                                        Golden
                                      </Text>
                                      <Text
                                        className="mt-[15px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Golden
                                      </Text>
                                      <Text
                                        className="mt-[11px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Golden
                                      </Text>
                                      <Text
                                        className="mt-2.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        Golden
                                      </Text>
                                    </div>
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <Text
                                        className="text-[15px] text-blue_gray-500"
                                        size="txtRobotoMedium15Bluegray500"
                                      >
                                        Soni
                                      </Text>
                                      <Text
                                        className="mt-6 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        2
                                      </Text>
                                      <Text
                                        className="mt-[15px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        3
                                      </Text>
                                      <Text
                                        className="mt-[11px] text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        3
                                      </Text>
                                      <Text
                                        className="mt-2.5 text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        5
                                      </Text>
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
            <Img
              className="absolute h-[60px] inset-y-[0] left-[0] my-auto object-cover w-[5%]"
              src="images/img_rectangle1564.png"
              alt="rectangle1564"
            />
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

export default OmbormahsulotchiqimiaksesuarPage;
