import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const zipcodeOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const oLchovchiOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const naqdPulOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShowroomtolovqabulqilishPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto p-[22px] sm:px-5 w-full"
          style={{
            backgroundImage: "url('images/img_showroombuyurtmalar.png')",
          }}
        >
          <div className="flex md:flex-col flex-row md:gap-[47px] items-start justify-between max-w-[1364px] mb-[18px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[98px] justify-start md:mt-0 mt-[34px] w-[15%] md:w-full">
              <Img
                className="h-[82px] md:ml-[0] ml-[9px]"
                src="images/img_group834.svg"
                alt="groupSeventySix"
              />
              <div className="flex flex-col gap-[30px] items-start justify-start w-[93%] md:w-full">
                <div className="flex flex-row gap-[21px] items-center justify-start w-[72%] md:w-full">
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
                <div className="flex flex-row gap-[26px] items-start justify-start w-[90%] md:w-full">
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_checkmark.svg"
                    alt="checkmark"
                  />
                  <Text
                    className="mt-[3px] text-base text-blue_gray-500 uppercase"
                    size="txtRobotoMedium16"
                  >
                    Buyurtmalar
                  </Text>
                </div>
                <div className="flex flex-row gap-5 items-center justify-start w-full">
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
            <div className="flex md:flex-1 flex-col gap-[42px] items-start justify-start w-[83%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[3px] w-[94%] md:w-full">
                <Img
                  className="h-[33px] md:mt-0 mt-[7px] w-[33px]"
                  src="images/img_arrowleft_blue_400.svg"
                  alt="arrowleft"
                />
                <div className="flex flex-col items-center justify-start ml-5 md:ml-[0] w-1/5 md:w-full">
                  <div className="bg-blue_gray-900 flex flex-col items-center justify-start rounded-[5px] shadow-bs4 w-full">
                    <OmborTaminotchigaZayavkaOneTab
                      className="flex flex-col items-center justify-start rounded-[5px] w-[205px]"
                      username={<>to\&#96;lov qabul qilish</>}
                    />
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start md:ml-[0] ml-[588px] md:mt-0 mt-[7px] w-1/5 md:w-full">
                  <div className="flex flex-col h-[38px] items-center justify-start w-[38px]">
                    <Img
                      className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                      src="images/img_il1588xn1_1.png"
                      alt="il1588xnOne"
                    />
                  </div>
                  <Text
                    className="ml-[18px] text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    Operator ismi
                  </Text>
                  <Img
                    className="h-[5px] ml-11"
                    src="images/img_line4.svg"
                    alt="lineFour"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-start p-[33px] sm:px-5 rounded-[5px] shadow-bs6 w-full">
                    <div className="flex flex-col items-start justify-start mb-[155px] w-[98%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col gap-[22px] items-center justify-start w-[45%] md:w-full">
                          <div className="flex flex-col justify-start w-full">
                            <Text
                              className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                              size="txtRobotoMedium12Bluegray50099"
                            >
                              Buyurtma nomeri
                            </Text>
                            <SelectBox
                              className="font-medium leading-[normal] mt-[3px] text-base text-left w-full"
                              placeholderClassName="text-white-A700"
                              indicator={
                                <Img
                                  className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-[13px]"
                                  src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                  alt="arrow_down"
                                />
                              }
                              isMulti={false}
                              name="zipcode"
                              options={zipcodeOptionsList}
                              isSearchable={false}
                              placeholder="1024"
                              shape="round"
                              color="gray_900_87"
                              size="xl"
                              variant="fill"
                            />
                          </div>
                          <div className="flex flex-col justify-start w-full">
                            <Text
                              className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                              size="txtRobotoMedium12Bluegray50099"
                            >
                              Qayerga
                            </Text>
                            <Input
                              name="group287"
                              placeholder="Showroom Andijon"
                              className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                              wrapClassName="mt-[3px] rounded-[5px] w-full"
                              shape="round"
                              color="gray_900_87"
                              size="2xl"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col justify-start w-1/2 md:w-full">
                          <Text
                            className="md:ml-[0] ml-[11px] text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            Izoh
                          </Text>
                          <div className="bg-gray-900_87 flex flex-col items-start justify-start mt-0.5 p-3 rounded-[3px] w-full">
                            <Text
                              className="mb-[97px] ml-2 md:ml-[0] text-[17px] text-gray-400"
                              size="txtRobotoMedium17Gray400"
                            >
                              <>2 oy kechikish bilan to\&#96;ladi</>
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 gap-[70px] items-start justify-start mt-4 w-[57%] md:w-full">
                        <div className="flex flex-col justify-start w-[79%] sm:w-full">
                          <Text
                            className="ml-3.5 md:ml-[0] text-blue_gray-500 text-sm"
                            size="txtRobotoMedium14"
                          >
                            Qayerdan
                          </Text>
                          <SelectBox
                            className="font-medium leading-[normal] mt-[3px] text-base text-left w-full"
                            placeholderClassName="text-white-A700"
                            indicator={
                              <Img
                                className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-[13px]"
                                src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="group286"
                            options={oLchovchiOptionsList}
                            isSearchable={false}
                            placeholder="O&#96;lchovchi"
                            shape="round"
                            color="gray_900_87"
                            size="xl"
                            variant="fill"
                          />
                        </div>
                        <Text
                          className="sm:mt-0 mt-[34px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          № 1024
                        </Text>
                      </div>
                      <Text
                        className="md:ml-[0] ml-[525px] mt-[22px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        <>Umumiy summa: 89 000 000 so\&#96;m</>
                      </Text>
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-3 w-[69%] md:w-full">
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[142px] rounded-[3px] text-center text-xl"
                          shape="round"
                          color="blue_gray_500_87"
                          size="xs"
                          variant="fill"
                        >
                          Naqd
                        </Button>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[142px] md:ml-[0] ml-[13px] rounded-[3px] text-center text-xl"
                          shape="round"
                          color="blue_gray_800_87_04"
                          size="xs"
                          variant="fill"
                        >
                          Plastik
                        </Button>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[142px] md:ml-[0] ml-[13px] rounded-[3px] text-center text-xl"
                          shape="round"
                          color="blue_gray_800_87_04"
                          size="xs"
                          variant="fill"
                        >
                          Bank
                        </Button>
                        <Text
                          className="md:ml-[0] ml-[69px] md:mt-0 mt-3 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          <>Oldindan to\&#96;lov: 0.0 so\&#96;m</>
                        </Text>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 gap-[70px] items-start justify-start mt-[22px] w-[71%] md:w-full">
                        <div className="flex flex-col gap-[37px] items-center justify-start w-[63%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col gap-[5px] justify-start w-full">
                              <div className="flex flex-row gap-[207px] items-center justify-start ml-4 md:ml-[0] w-[67%] md:w-full">
                                <Text
                                  className="text-blue_gray-500_99 text-xs"
                                  size="txtRobotoMedium12Bluegray50099"
                                >
                                  Summa
                                </Text>
                                <Text
                                  className="text-blue_gray-500_99 text-xs"
                                  size="txtRobotoMedium12Bluegray50099"
                                >
                                  <>To\&#96;lov turi</>
                                </Text>
                              </div>
                              <div className="bg-gray-900_87 flex sm:flex-col flex-row sm:gap-5 items-center justify-start p-3.5 rounded-[3px] w-full">
                                <Text
                                  className="sm:mt-0 my-0.5 text-base text-white-A700"
                                  size="txtRobotoMedium16WhiteA700"
                                >
                                  100 000
                                </Text>
                                <Img
                                  className="h-[13px] ml-48 sm:ml-[0]"
                                  src="images/img_calculator.svg"
                                  alt="calculator"
                                />
                                <SelectBox
                                  className="sm:flex-1 font-medium leading-[normal] sm:ml-[0] ml-[7px] sm:mt-0 my-0.5 text-base text-gray-400 text-left w-[32%] sm:w-full"
                                  placeholderClassName="text-gray-400"
                                  indicator={
                                    <Img
                                      className="h-[5px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[13px]"
                                      src="images/img_arrowdown_blue_gray_500_3x7.svg"
                                      alt="arrow_down"
                                    />
                                  }
                                  isMulti={false}
                                  name="group776"
                                  options={naqdPulOptionsList}
                                  isSearchable={false}
                                  placeholder="Naqd pul"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start w-full">
                            <Button
                              className="cursor-pointer font-medium leading-[normal] min-w-[455px] sm:min-w-full rounded-[3px] sm:text-[17px] md:text-[19px] text-[21px] text-center"
                              shape="round"
                              color="blue_400"
                              size="md"
                              variant="fill"
                            >
                              TASDIQLASH
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-col gap-[26px] items-start justify-start">
                          <Text
                            className="text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            <>Bo\&#96;lib to\&#96;langan: 0.0 so\&#96;m</>
                          </Text>
                          <Text
                            className="text-[15px] text-red-300"
                            size="txtRobotoMedium15Red300"
                          >
                            <>Qoldiq to\&#96;lov: 100 000 so\&#96;m</>
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
        <div className="absolute bg-blue_gray-800_7e flex flex-col gap-[23px] h-max inset-y-[0] justify-start left-[0] my-auto md:px-5 py-3 w-1/5">
          <div className="h-[60px] relative w-full">
            <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-end justify-center m-auto p-[19px] w-full">
              <div className="flex flex-row items-start justify-end mr-1.5 w-[88%] md:w-full">
                <Img
                  className="h-5"
                  src="images/img_calculator_white_a700.svg"
                  alt="calculator_One"
                />
                <Text
                  className="ml-[17px] mt-0.5 text-sm text-white-A700 uppercase"
                  size="txtRobotoMedium14WhiteA700"
                >
                  <>To\&#96;lov qabul qilish</>
                </Text>
                <Img
                  className="h-1 ml-[11px] mt-2"
                  src="images/img_line49.svg"
                  alt="lineFortyNine"
                />
              </div>
            </div>
            <Img
              className="absolute h-[60px] inset-y-[0] left-[0] my-auto object-cover w-[5%]"
              src="images/img_rectangle1564_8.png"
              alt="rectangle1564"
            />
          </div>
          <Text
            className="mb-[21px] md:ml-[0] ml-[87px] text-base text-blue_gray-500"
            size="txtRobotoMedium16"
          >
            <>Kassaga to\&#96;lov tarixi </>
          </Text>
        </div>
      </div>
    </>
  );
};

export default ShowroomtolovqabulqilishPage;
