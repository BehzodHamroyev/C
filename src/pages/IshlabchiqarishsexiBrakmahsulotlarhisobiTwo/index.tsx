import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  SelectBox,
  Text,
  TextArea,
} from "components";

const yodoviyKolyonniyOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const IshlabchiqarishsexiBrakmahsulotlarhisobiTwoPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[1055px] mx-auto pb-[155px] relative w-full">
        <Img
          className="h-[900px] mx-auto object-cover w-full"
          src="images/img_showroombuyurtmalar.png"
          alt="globalOne"
        />
        <div className="absolute flex flex-col md:gap-10 gap-[93px] justify-start left-[3%] md:px-5 top-[5%] w-[15%]">
          <Img
            className="h-[82px] ml-2 md:ml-[0]"
            src="images/img_group834.svg"
            alt="groupSeventySix"
          />
          <div className="flex flex-col gap-[39px] items-start justify-start w-full">
            <div className="flex flex-col items-center justify-start w-[62%] md:w-full">
              <div className="flex flex-row gap-[25px] items-center justify-start w-full">
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
            </div>
            <div className="flex flex-row gap-[31px] items-start justify-start ml-0.5 md:ml-[0] w-full">
              <Img
                className="h-[18px] w-[18px]"
                src="images/img_arrowdown_blue_gray_500.svg"
                alt="arrowdown"
              />
              <Text
                className="text-base text-blue_gray-500 uppercase"
                size="txtRobotoMedium16"
              >
                yangi BUYURTMALAR
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col gap-[38px] justify-start md:px-5 right-[0] top-[3%] w-[81%]">
          <div className="flex flex-row items-center justify-end md:ml-[0] ml-[873px] w-1/5 md:w-full">
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
          <div className="flex md:flex-col flex-row gap-8 items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col items-center justify-start md:mt-0 mt-1 w-[97%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-blue_gray-900_87_01 flex flex-col items-start justify-start p-[45px] md:px-10 sm:px-5 rounded-[5px] shadow-bs6 w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 gap-[69px] items-start justify-start mb-11 w-[95%] md:w-full">
                    <div className="flex flex-col gap-[38px] items-center justify-start md:mt-0 mt-0.5 w-[47%] md:w-full">
                      <div className="flex flex-col items-start justify-start w-full">
                        <div className="flex flex-col justify-start w-full">
                          <Text
                            className="ml-3.5 md:ml-[0] text-blue_gray-500_99 text-xs"
                            size="txtRobotoMedium12Bluegray50099"
                          >
                            Oyna turi
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
                            name="group280"
                            options={yodoviyKolyonniyOptionsList}
                            isSearchable={false}
                            placeholder="Yodoviy Kolyonniy"
                            shape="round"
                            color="blue_gray_800_87_04"
                            size="xl"
                            variant="fill"
                          />
                        </div>
                        <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mt-9 w-[96%] md:w-full">
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[80px] rounded-[3px] text-center text-xl"
                            shape="round"
                            color="blue_gray_500_87"
                            size="xs"
                            variant="fill"
                          >
                            2mm
                          </Button>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[80px] sm:ml-[0] ml-[7px] rounded-[3px] text-center text-xl"
                            shape="round"
                            color="blue_gray_800_87_04"
                            size="xs"
                            variant="fill"
                          >
                            4mm
                          </Button>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[80px] sm:ml-[0] ml-[9px] rounded-[3px] text-center text-xl"
                            shape="round"
                            color="blue_gray_800_87_04"
                            size="xs"
                            variant="fill"
                          >
                            6mm
                          </Button>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[80px] sm:ml-[0] ml-[9px] rounded-[3px] text-center text-xl"
                            shape="round"
                            color="blue_gray_800_87_04"
                            size="xs"
                            variant="fill"
                          >
                            8mm
                          </Button>
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[80px] sm:ml-[0] ml-[9px] rounded-[3px] text-center text-xl"
                            shape="round"
                            color="blue_gray_800_87_04"
                            size="xs"
                            variant="fill"
                          >
                            10mm
                          </Button>
                        </div>
                        <div className="flex flex-col gap-[5px] justify-start mt-[22px] w-full">
                          <Text
                            className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                            size="txtRobotoMedium12Bluegray50099"
                          >
                            Olchami
                          </Text>
                          <Text
                            className="bg-gray-900_87 h-[52px] justify-center pl-3.5 sm:pr-5 pr-[35px] py-4 rounded-[3px] text-base text-white-A700 w-[455px]"
                            size="txtRobotoMedium16WhiteA700"
                          >
                            4
                          </Text>
                        </div>
                        <div className="flex flex-col justify-start mt-3.5 w-full">
                          <Text
                            className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                            size="txtRobotoMedium12Bluegray50099"
                          >
                            Narxi
                          </Text>
                          <Input
                            name="group282"
                            placeholder="10 000"
                            className="!placeholder:text-gray-400 !text-gray-400 font-medium leading-[normal] p-0 text-left text-xs w-full"
                            wrapClassName="mt-1 w-full"
                            shape="round"
                            color="gray_900_87"
                            size="3xl"
                            variant="fill"
                          ></Input>
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
                    <div className="flex flex-col justify-start w-[47%] md:w-full">
                      <Text
                        className="md:ml-[0] ml-[5px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        Aynan
                      </Text>
                      <TextArea
                        className="bg-gray-900_87 border-0 font-medium leading-[normal] mt-0.5 pb-[35px] pl-5 sm:pr-5 pr-[35px] pt-4 rounded-[3px] text-base text-left placeholder:text-white-A700 text-white-A700 w-full"
                        name="group279"
                        placeholder="Mijoz to\&#96;lovni amalga oshirishi uchun"
                      ></TextArea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[770px] relative w-[1%] md:w-full">
              <Line className="bg-blue_gray-800 h-[770px] m-auto w-[5px]" />
              <Line className="absolute bg-blue_gray-500 bottom-[6%] h-[172px] inset-x-[0] mx-auto rounded-sm w-[5px]" />
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-800_7e flex flex-row gap-7 items-center justify-start left-[0] pr-[53px] md:px-5 top-[32%] w-1/5">
          <div className="bg-red-300 h-[60px] w-[7%]"></div>
          <div className="flex flex-row gap-[17px] items-start justify-center w-[81%]">
            <Img
              className="h-8 w-8"
              src="images/img_siglyphtagprice.svg"
              alt="siglyphtagprice"
            />
            <Text
              className="mt-1 text-base text-white-A700 uppercase"
              size="txtRobotoMedium16WhiteA700"
            >
              Narx belgilash
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default IshlabchiqarishsexiBrakmahsulotlarhisobiTwoPage;
