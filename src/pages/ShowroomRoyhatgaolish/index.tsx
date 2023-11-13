import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  SelectBox,
  Text,
} from "components";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

const andijonOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShowroomRoyhatgaolishPage: React.FC = () => {
  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat font-roboto h-[900px] mx-auto sm:pr-5 pr-[22px] py-[22px] relative w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="md:h-[1542px] sm:h-[791px] h-[798px] max-w-[1394px] mx-auto md:px-5 w-full">
          <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[97%]">
            <div className="flex md:flex-col flex-row md:gap-11 items-start justify-between w-full">
              <Img
                className="h-[82px] md:mt-0 mt-[27px]"
                src="images/img_group834.svg"
                alt="groupSeventySix"
              />
              <div className="flex flex-col gap-[31px] justify-start">
                <div className="flex flex-row items-end justify-end md:ml-[0] ml-[837px] w-1/5 md:w-full">
                  <div className="flex flex-col h-[38px] items-center justify-start w-[38px]">
                    <Img
                      className="h-[38px] md:h-auto rounded-[50%] w-[38px]"
                      src="images/img_il1588xn1.png"
                      alt="il1588xnOne"
                    />
                  </div>
                  <Text
                    className="mb-[3px] ml-[11px] mt-[7px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-500"
                    size="txtRobotoMedium23"
                  >
                    Operator ismi
                  </Text>
                  <Img
                    className="h-[7px] ml-[15px] my-[15px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-blue_gray-900_87 flex flex-col items-end justify-end p-[26px] sm:px-5 rounded-[5px] w-full">
                    <div className="flex flex-col items-start justify-start mr-[21px] mt-[55px] w-[91%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col items-center justify-start w-3/5 md:w-full">
                          <div className="flex flex-col justify-start w-full">
                            <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                              <Text
                                className="mt-[21px] text-base text-blue_gray-500"
                                size="txtRobotoMedium16"
                              >
                                Nomi
                              </Text>
                              <Input
                                name="group309"
                                placeholder="Mehriddin"
                                className="font-medium leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-base text-left w-full"
                                wrapClassName="pl-[23px] pr-[35px] py-4"
                                shape="round"
                                color="blue_gray_800_87_04"
                                variant="fill"
                              ></Input>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[255px] text-blue_gray-500_99 text-xs"
                              size="txtRobotoMedium12Bluegray50099"
                            >
                              Ismi
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col justify-start w-[34%] md:w-full">
                          <Input
                            name="group318"
                            placeholder="Abdullayev"
                            className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                            wrapClassName="w-full"
                            shape="round"
                            color="blue_gray_800_87_04"
                            size="2xl"
                            variant="fill"
                          ></Input>
                          <Text
                            className="ml-3.5 md:ml-[0] mt-0.5 text-blue_gray-500_99 text-xs"
                            size="txtRobotoMedium12Bluegray50099"
                          >
                            Familyasi
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-4 w-full">
                        <div className="flex flex-col items-end justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-end w-full">
                            <Text
                              className="md:mt-0 mt-[43px] text-base text-blue_gray-500"
                              size="txtRobotoMedium16"
                            >
                              <>
                                Telefon <br />
                                raqami{" "}
                              </>
                            </Text>
                            <Text
                              className="ml-20 md:ml-[0] md:mt-0 mt-5 text-blue_gray-500_99 text-sm"
                              size="txtRobotoMedium14Bluegray50099"
                            >
                              № 1
                            </Text>
                            <div className="bg-blue_gray-800_87_04 flex md:flex-1 flex-row gap-[23px] items-center justify-start mb-[29px] md:ml-[0] ml-[30px] p-2.5 rounded-[3px] w-[16%] md:w-full">
                              <Img
                                className="h-3.5 w-3.5"
                                src="images/img_call.svg"
                                alt="call"
                              />
                              <Text
                                className="my-1.5 text-base text-white-A700"
                                size="txtRobotoMedium16WhiteA700"
                              >
                                +998
                              </Text>
                            </div>
                            <Input
                              name="group315"
                              placeholder="99 123-56-98"
                              className="font-medium leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-base text-left w-full"
                              wrapClassName="md:flex-1 mb-[29px] md:ml-[0] ml-[47px] pl-[23px] pr-[35px] py-4 w-[54%] md:w-full"
                              shape="round"
                              color="blue_gray_800_87_04"
                              variant="fill"
                            ></Input>
                          </div>
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-end w-[81%] md:w-full">
                            <Text
                              className="text-blue_gray-500_99 text-sm"
                              size="txtRobotoMedium14Bluegray50099"
                            >
                              № 2
                            </Text>
                            <div className="bg-blue_gray-800_87_04 flex flex-row gap-[21px] items-center justify-start ml-7 md:ml-[0] p-[11px] rounded-[3px] w-1/5 md:w-full">
                              <Img
                                className="h-3.5 w-3.5"
                                src="images/img_call.svg"
                                alt="call_One"
                              />
                              <Text
                                className="my-1 text-base text-white-A700"
                                size="txtRobotoMedium16WhiteA700"
                              >
                                +998
                              </Text>
                            </div>
                            <Input
                              name="group314"
                              placeholder="99 123-56-98"
                              className="font-medium leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-base text-left w-full"
                              wrapClassName="md:ml-[0] ml-[47px] pl-[23px] pr-[35px] py-4 w-[68%] md:w-full"
                              shape="round"
                              color="blue_gray_800_87_04"
                              variant="fill"
                            ></Input>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-[29px] w-full">
                        <Text
                          className="sm:mt-0 mt-[7px] text-base text-blue_gray-500"
                          size="txtRobotoMedium16"
                        >
                          Bizni qayerdan topgan
                        </Text>
                        <Input
                          name="email"
                          placeholder="mehrbilan@gmail.com"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-base text-left w-full"
                          wrapClassName="sm:flex-1 pl-[23px] pr-[35px] py-4 sm:w-full"
                          type="email"
                          shape="round"
                          color="blue_gray_800_87_04"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[29px] w-full">
                        <div className="flex md:flex-col flex-row md:gap-[53px] items-start justify-between w-full">
                          <div className="flex md:flex-1 flex-col justify-start w-[52%] md:w-full">
                            <div className="flex flex-row items-start justify-between w-full">
                              <Text
                                className="mt-[21px] text-base text-blue_gray-500"
                                size="txtRobotoMedium16"
                              >
                                Manzil
                              </Text>
                              <SelectBox
                                className="sm:flex-1 font-medium leading-[normal] text-base text-left w-[51%] sm:w-full"
                                placeholderClassName="text-white-A700"
                                indicator={
                                  <Img
                                    className="h-1 mr-[0] outline-white-A700 outline-[0.5px] outline w-3"
                                    src="images/img_arrowdown_white_a700.svg"
                                    alt="arrow_down"
                                  />
                                }
                                isSearchable={false}
                                placeholder="Andijon"
                                getOptionLabel={(e) =>
                                  (
                                    <div className="flex items-center">
                                      <Img
                                        className="h-5 mr-[15px]"
                                        src="images/img_location_gray_400.svg"
                                        alt="location"
                                      />
                                      <span>{e.label}</span>
                                    </div>
                                  ) as unknown as string
                                }
                                name="group313"
                                isMulti={false}
                                options={andijonOptionsList}
                                shape="round"
                                color="blue_gray_800_87_04"
                                size="lg"
                                variant="fill"
                              />
                            </div>
                            <Text
                              className="md:ml-[0] ml-[250px] mt-1 text-base text-blue_gray-500_99"
                              size="txtRobotoMedium16Bluegray50099"
                            >
                              Hudud
                            </Text>
                          </div>
                          <div className="flex md:flex-1 flex-col justify-start w-[43%] md:w-full">
                            <div className="bg-blue_gray-800_87_04 flex sm:flex-col flex-row gap-5 items-start justify-start p-2 rounded-[3px] w-full">
                              <Img
                                className="h-5 w-5"
                                src="images/img_home.svg"
                                alt="home"
                              />
                              <Text
                                className="sm:mt-0 my-0.5 text-[17px] text-gray-400"
                                size="txtRobotoMedium17Gray400"
                              >
                                <>
                                  Yangi bozor Oripov ko\&#96;cha <br />№ 88 uy{" "}
                                </>
                              </Text>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[9px] text-base text-blue_gray-500_99"
                              size="txtRobotoMedium16Bluegray50099"
                            >
                              Aniq manzil
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-7 w-full">
                        <Text
                          className="sm:mt-0 mt-2.5 text-base text-blue_gray-500"
                          size="txtRobotoMedium16"
                        >
                          Izoh
                        </Text>
                        <Input
                          name="group311"
                          placeholder="Faqat 18:00dan keyin qo&#96;ng&#96;iroq qilish kerak"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-base text-left w-full"
                          wrapClassName="sm:flex-1 pl-[23px] pr-[35px] py-4 sm:w-full"
                          shape="round"
                          color="blue_gray_800_87_04"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-10 gap-[68px] items-center justify-end md:ml-[0] ml-[250px] mt-[30px] w-3/4 md:w-full">
                        <div className="flex flex-col items-center justify-start w-[46%] md:w-full">
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[324px] rounded-[3px] text-center text-lg"
                            shape="round"
                            color="blue_400"
                            size="md"
                            variant="fill"
                          >
                            Saqlash
                          </Button>
                        </div>
                        <div className="flex flex-col items-center justify-start w-[46%] md:w-full">
                          <Button
                            className="cursor-pointer font-medium leading-[normal] min-w-[324px] rounded-[3px] text-center text-lg"
                            shape="round"
                            color="blue_gray_500"
                            size="md"
                            variant="outline"
                          >
                            Buyurtma berish
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute flex flex-col items-center justify-start left-[24%] top-[0] w-[13%]">
            <div className="bg-blue_gray-900 flex flex-col items-center justify-start rounded-[5px] shadow-bs4 w-full">
              <OmborTaminotchigaZayavkaOneTab
                className="flex flex-col items-center justify-start rounded-[5px] w-[168px]"
                username="Yangi mijoz "
              />
            </div>
          </div>
          <Img
            className="absolute h-[33px] left-[20%] top-[1%] w-[33px]"
            src="images/img_arrowleft_blue_400.svg"
            alt="arrowleft"
          />
          <div className="absolute bg-blue_gray-800_7e flex flex-row gap-[22px] items-center justify-start left-[0] md:pr-10 sm:pr-5 pr-[54px] top-[38%] w-1/5">
            <div className="bg-red-300 h-[60px] w-[7%]"></div>
            <div className="flex flex-row gap-[26px] items-center justify-center w-[83%]">
              <Img
                className="h-6 w-6"
                src="images/img_bipersonworkspace_white_a700.svg"
                alt="bipersonworkspa"
              />
              <Text
                className="text-sm text-white-A700 uppercase"
                size="txtRobotoMedium14WhiteA700"
              >
                <>Mijozlar ro\&#96;yhati</>
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col items-start justify-start left-[2%] md:px-5 top-[26%] w-[15%]">
          <div className="flex flex-row gap-5 items-center justify-start w-[61%] md:w-full">
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
          <CheckBox
            className="!text-blue_gray-500 font-medium leading-[normal] mt-[30px] sm:pl-5 text-base text-left uppercase"
            inputClassName="h-[18px] mr-[5px] w-[18px]"
            name="buyurtmalar"
            id="buyurtmalar"
            label="Buyurtmalar"
            size="sm"
          ></CheckBox>
          <div className="flex flex-row items-start justify-between ml-1 md:ml-[0] mt-[90px] w-[99%] md:w-full">
            <Img className="h-5" src="images/img_vector.svg" alt="vector" />
            <Text
              className="mt-0.5 text-blue_gray-500 text-sm uppercase"
              size="txtRobotoMedium14"
            >
              <>To\&#96;lov qabul qilish</>
            </Text>
            <Img
              className="h-[5px] mt-[5px]"
              src="images/img_line49_blue_gray_500.svg"
              alt="lineFortyNine"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowroomRoyhatgaolishPage;
