import React from "react";

import { Button, Img, Input, Text } from "components";

const OmborMahsulotlaromboriPage: React.FC = () => {
  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat font-roboto h-[900px] mx-auto sm:pr-5 pr-[29px] py-[29px] relative w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="flex flex-col h-full items-center justify-start m-auto max-w-[1400px] md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[254px] items-center justify-start md:mt-0 mt-[26px] w-1/5 md:w-full">
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
            <div className="flex md:flex-1 flex-col gap-[38px] items-center justify-start w-[81%] md:w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-[97%] md:w-full">
                <Text
                  className="mb-0.5 sm:mt-0 mt-1.5 text-2xl md:text-[22px] text-gray-400 sm:text-xl"
                  size="txtRobotoMedium24"
                >
                  <>Yangi mahsulot qo\&#96;shish</>
                </Text>
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
              <div className="bg-blue_gray-900_87_01 flex flex-col items-start justify-start p-[42px] md:px-10 sm:px-5 rounded-[5px] w-full">
                <div className="flex flex-col items-start justify-start mb-52 ml-0.5 md:ml-[0] w-[95%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
                    <div className="flex md:flex-1 flex-col gap-[5px] justify-start mb-0.5 w-[47%] md:w-full">
                      <Text
                        className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                        size="txtRobotoMedium12Bluegray50099"
                      >
                        Mahsulot turi
                      </Text>
                      <Input
                        name="language"
                        placeholder="Profil "
                        className="font-medium leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left w-full"
                        wrapClassName="border border-blue_gray-600_87 border-solid pl-3.5 pr-[35px] py-4 w-full"
                        shape="round"
                        color="gray_900_87"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col justify-start md:mt-0 mt-[3px] w-[47%] md:w-full">
                      <Text
                        className="md:ml-[0] ml-[11px] text-blue_gray-500 text-xs"
                        size="txtRobotoMedium12Bluegray500"
                      >
                        <>O\&#96;lchami</>
                      </Text>
                      <Input
                        name="zipcode"
                        placeholder="6000"
                        className="font-medium leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-base text-left w-full"
                        wrapClassName="border border-blue_gray-600_87 border-solid mt-0.5 pl-[23px] pr-[35px] py-[17px] w-full"
                        shape="round"
                        color="gray_900_87"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[17px] w-full">
                    <div className="flex md:flex-1 flex-col gap-[5px] justify-start w-[47%] md:w-full">
                      <Text
                        className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                        size="txtRobotoMedium12Bluegray50099"
                      >
                        Mahsulot nomi
                      </Text>
                      <Input
                        name="aldoksCounter"
                        placeholder="Aldoks 2"
                        className="font-medium leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left w-full"
                        wrapClassName="border border-blue_gray-600_87 border-solid pl-3.5 pr-[35px] py-4 rounded-[5px] w-full"
                        shape="round"
                        color="gray_900_87"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col justify-start w-[47%] md:w-full">
                      <Text
                        className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                        size="txtRobotoMedium12Bluegray50099"
                      >
                        Narxi
                      </Text>
                      <Input
                        name="group166"
                        placeholder="125 000"
                        className="font-medium leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left w-full"
                        wrapClassName="border border-blue_gray-600_87 border-solid mt-1 pl-3.5 pr-[35px] py-4 rounded-[5px] w-full"
                        shape="round"
                        color="gray_900_87"
                        variant="fill"
                      ></Input>
                    </div>
                  </div>
                  <div className="flex flex-col justify-start mt-[17px] w-[47%] md:w-full">
                    <Text
                      className="ml-3.5 md:ml-[0] text-blue_gray-500 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Rangi
                    </Text>
                    <Input
                      name="group163"
                      placeholder="Dub mocco"
                      className="font-medium leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-600_87 border-solid mt-[3px] pl-3.5 pr-[35px] py-4 w-full"
                      shape="round"
                      color="gray_900_87"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex flex-col justify-start mt-[19px] w-[47%] md:w-full">
                    <Text
                      className="ml-3.5 md:ml-[0] text-blue_gray-500 text-sm"
                      size="txtRobotoMedium14"
                    >
                      Artikul
                    </Text>
                    <Input
                      name="group164"
                      placeholder="Kosa"
                      className="font-medium leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left w-full"
                      wrapClassName="border border-blue_gray-600_87 border-solid mt-1 pl-3.5 pr-[35px] py-4 w-full"
                      shape="round"
                      color="gray_900_87"
                      variant="fill"
                    ></Input>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[17px] w-full">
                    <div className="flex md:flex-1 flex-col justify-start w-[47%] md:w-full">
                      <Text
                        className="ml-4 md:ml-[0] text-blue_gray-500_99 text-xs"
                        size="txtRobotoMedium12Bluegray50099"
                      >
                        <>O\&#96;lchov birligi</>
                      </Text>
                      <Input
                        name="group167"
                        placeholder="Millimetr"
                        className="font-medium leading-[normal] p-0 placeholder:text-white-A700 sm:pr-5 text-base text-left w-full"
                        wrapClassName="border border-blue_gray-600_87 border-solid mt-[3px] pl-3.5 pr-[35px] py-4 w-full"
                        shape="round"
                        color="gray_900_87"
                        variant="fill"
                      ></Input>
                    </div>
                    <div className="flex md:flex-1 flex-col items-center justify-start w-[47%] md:w-full">
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

export default OmborMahsulotlaromboriPage;
