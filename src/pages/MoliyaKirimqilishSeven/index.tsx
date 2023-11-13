import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Line, SelectBox, Text } from "components";

const komunalOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const andijonViloyatiElektrTarmoqlariMchjOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const kassaOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const naqdPulOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const optionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const MoliyaKirimqilishSevenPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat md:h-[1026px] sm:h-[745px] h-[900px] m-auto p-[29px] md:px-5 w-full"
          style={{
            backgroundImage: "url('images/img_showroombuyurtmalar.png')",
          }}
        >
          <div className="absolute flex flex-col md:gap-10 gap-[89px] justify-start left-[2%] top-[6%] w-[17%]">
            <Img
              className="h-[82px] md:ml-[0] ml-[17px]"
              src="images/img_group834.svg"
              alt="groupSeventySix"
            />
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row gap-[25px] items-center justify-start w-[56%] md:w-full">
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
              <div className="flex flex-row gap-[21px] items-start justify-start ml-1 md:ml-[0] mt-6 w-[68%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_blue_gray_500.svg"
                  alt="arrowdown"
                />
                <Text
                  className="text-base text-blue_gray-500 uppercase"
                  size="txtRobotoMedium16"
                >
                  BUYURTMALAR
                </Text>
              </div>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[89px] ml-1 md:ml-[0] mt-[27px]"
                onClick={() => navigate("/moliyakirimqilishfour")}
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
                  Kirim{" "}
                </div>
              </Button>
              <div className="flex flex-row gap-5 items-start justify-start ml-1 md:ml-[0] mt-[178px] w-[98%] md:w-full">
                <Img
                  className="h-6"
                  src="images/img_minimize.svg"
                  alt="minimize"
                />
                <Text
                  className="text-base text-blue_gray-500 uppercase"
                  size="txtRobotoMedium16"
                >
                  Valyuta ayriboshlash
                </Text>
              </div>
              <div className="flex flex-row gap-6 items-start justify-start md:ml-[0] ml-[3px] mt-[31px] w-[86%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_fluentclipboar.svg"
                  alt="fluentclipboar"
                />
                <Text
                  className="mt-[3px] text-base text-blue_gray-500 uppercase"
                  size="txtRobotoMedium16"
                >
                  <>Hodimlar ro\&#96;yhati</>
                </Text>
              </div>
              <div className="flex flex-row gap-[22px] items-start justify-start ml-1 md:ml-[0] mt-[33px] w-[56%] md:w-full">
                <Img
                  className="h-[21px]"
                  src="images/img_union_blue_gray_500.svg"
                  alt="union"
                />
                <Text
                  className="mt-1 text-blue_gray-500 text-sm uppercase"
                  size="txtRobotoMedium14"
                >
                  qarzdorlik
                </Text>
              </div>
              <div className="flex flex-row gap-[27px] items-center justify-start ml-1 md:ml-[0] mt-[33px] w-[89%] md:w-full">
                <Img
                  className="h-[19px] w-[19px]"
                  src="images/img_ticket.svg"
                  alt="ticket"
                />
                <Text
                  className="text-base text-blue_gray-500 uppercase"
                  size="txtRobotoMedium16"
                >
                  Mahsulot narxlari{" "}
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-row items-center justify-end right-[5%] top-[3%] w-[16%]">
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
              alt="arrowdown_One"
            />
          </div>
          <div className="absolute bottom-[6%] flex md:h-[1026px] sm:h-[745px] h-[747px] justify-end right-[3%] w-[79%] md:w-full">
            <Line className="bg-blue_gray-900 h-[52px] mb-[287px] ml-[287px] mt-auto w-px" />
            <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-blue_gray-900_87_01 flex flex-col items-start justify-start p-[33px] sm:px-5 rounded-[5px] shadow-bs6 w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[69px] items-start justify-start mb-[155px] md:ml-[0] ml-[13px] w-[93%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[47%] md:w-full">
                      <div className="flex flex-col justify-start w-full">
                        <Text
                          className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                          size="txtRobotoMedium12Bluegray50099"
                        >
                          Chiqim nomi
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
                          name="group520"
                          options={komunalOptionsList}
                          isSearchable={false}
                          placeholder="Komunal"
                          shape="round"
                          color="gray_900_87"
                          size="xl"
                          variant="fill"
                        />
                      </div>
                      <div className="flex flex-col justify-start mt-[21px] w-full">
                        <Text
                          className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                          size="txtRobotoMedium12Bluegray50099"
                        >
                          Qayerga
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
                          name="group522"
                          options={
                            andijonViloyatiElektrTarmoqlariMchjOptionsList
                          }
                          isSearchable={false}
                          placeholder="Andijon viloyati elektr tarmoqlari “MCHJ”"
                          shape="round"
                          color="gray_900_87"
                          size="xl"
                          variant="fill"
                        />
                      </div>
                      <div className="flex flex-col justify-start mt-4 w-full">
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
                          name="group521"
                          options={kassaOptionsList}
                          isSearchable={false}
                          placeholder="Kassa"
                          shape="round"
                          color="gray_900_87"
                          size="xl"
                          variant="fill"
                        />
                      </div>
                      <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-between mt-[53px] w-full">
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
                          className="cursor-pointer font-medium leading-[normal] min-w-[142px] rounded-[3px] text-center text-xl"
                          shape="round"
                          color="blue_gray_800_87_04"
                          size="xs"
                          variant="fill"
                        >
                          Plastik
                        </Button>
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[142px] rounded-[3px] text-center text-xl"
                          shape="round"
                          color="blue_gray_800_87_04"
                          size="xs"
                          variant="fill"
                        >
                          Bank
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[22px] w-full">
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
                              name="group867"
                              options={naqdPulOptionsList}
                              isSearchable={false}
                              placeholder="Naqd pul"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[37px] w-full">
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
                    <div className="flex flex-col items-center justify-start md:mt-0 mt-[3px] w-[47%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="md:ml-[0] ml-[11px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Aynan
                        </Text>
                        <SelectBox
                          className="font-medium leading-[normal] text-base text-left w-full"
                          placeholderClassName="text-white-A700"
                          indicator={
                            <Img
                              className="h-[5px] mr-[0] outline-white-A700 outline-[0.5px] outline w-[13px]"
                              src="images/img_arrowdown_blue_gray_500_3x7.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group519"
                          options={optionsList}
                          isSearchable={false}
                          placeholder="12 365"
                          shape="round"
                          color="gray_900_87"
                          size="2xl"
                          variant="fill"
                        />
                        <Text
                          className="md:ml-[0] ml-[11px] mt-[19px] text-blue_gray-500 text-xs"
                          size="txtRobotoMedium12Bluegray500"
                        >
                          Izoh
                        </Text>
                      </div>
                      <div className="bg-gray-900_87 flex flex-col items-start justify-start mt-0.5 p-3 rounded-[3px] w-full">
                        <Text
                          className="mb-[97px] ml-2 md:ml-[0] text-[17px] text-gray-400"
                          size="txtRobotoMedium17Gray400"
                        >
                          <>Sentyabr oyi uchun to\&#96;lov qilindi.</>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-800_7e flex flex-col gap-[30px] h-max inset-y-[0] justify-start left-[0] my-auto md:px-5 py-3 w-1/5">
          <div className="h-[60px] relative w-full">
            <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-center justify-center m-auto p-[18px] w-full">
              <div className="flex flex-row items-start justify-end w-[90%] md:w-full">
                <Img
                  className="h-[21px]"
                  src="images/img_camera.svg"
                  alt="camera"
                />
                <Text
                  className="ml-7 mt-[3px] text-base text-white-A700 uppercase"
                  size="txtRobotoMedium16WhiteA700"
                >
                  CHIQIM{" "}
                </Text>
                <Img
                  className="h-1 ml-[89px] mt-[9px]"
                  src="images/img_line49.svg"
                  alt="lineFortyNine"
                />
              </div>
            </div>
            <Img
              className="absolute h-[60px] inset-y-[0] left-[0] my-auto object-cover w-[5%]"
              src="images/img_rectangle1564_14.png"
              alt="rectangle1564"
            />
          </div>
          <Text
            className="mb-[9px] md:ml-[0] ml-[86px] text-base text-blue_gray-500"
            size="txtRobotoMedium16"
          >
            Chiqim tarixi
          </Text>
        </div>
      </div>
    </>
  );
};

export default MoliyaKirimqilishSevenPage;
