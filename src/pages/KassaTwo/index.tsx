import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, SelectBox, Text } from "components";

const selectOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const KassaTwoPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div
          className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto p-7 sm:px-5 w-full"
          style={{
            backgroundImage: "url('images/img_showroombuyurtmalar.png')",
          }}
        >
          <div className="flex md:flex-col flex-row gap-[27px] items-start justify-start max-w-[1366px] mb-2.5 mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col md:gap-10 gap-[106px] items-center justify-start md:mt-0 mt-[26px] w-[16%] md:w-full">
              <Img
                className="h-[82px]"
                src="images/img_group834.svg"
                alt="groupSeventySix"
              />
              <div className="flex flex-col items-start justify-start w-full">
                <div className="flex flex-row gap-[21px] items-center justify-start w-3/5 md:w-full">
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
                <div className="flex flex-row gap-[21px] items-center justify-start mt-5 w-[73%] md:w-full">
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
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[215px] mt-5"
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
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[161px] ml-0.5 md:ml-[0] mt-[111px]"
                  onClick={() =>
                    navigate("/omborqoldiqidsibuyurtmalarroyhatione")
                  }
                  leftIcon={
                    <Img
                      className="h-6 mr-5"
                      src="images/img_mdicircularsaw_blue_gray_500.svg"
                      alt="mdi:circular-saw"
                    />
                  }
                >
                  <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
                    Ombor qoldiq{" "}
                  </div>
                </Button>
                <Button
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[138px] ml-1 md:ml-[0] mt-[35px]"
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
                  className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[151px] ml-1 md:ml-[0] mt-[35px]"
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
                <div className="flex flex-row gap-[18px] items-start justify-start ml-1 md:ml-[0] mt-9 w-[97%] md:w-full">
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
                <div className="flex flex-row gap-5 items-center justify-start ml-0.5 md:ml-[0] mt-[31px] w-[83%] md:w-full">
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
            <div className="flex md:flex-1 flex-col gap-[38px] justify-start w-[83%] md:w-full">
              <div className="flex flex-row items-center justify-end md:ml-[0] ml-[878px] w-1/5 md:w-full">
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
              <div className="bg-blue_gray-900_87_01 flex flex-col font-montserrat items-center justify-start p-9 sm:px-5 rounded-[5px] w-full">
                <div className="flex flex-col gap-[38px] items-center justify-start mb-[18px] w-[94%] md:w-full">
                  <Text
                    className="text-[15px] text-white-A700"
                    size="txtMontserratSemiBold15"
                  >
                    <>Yangi hodim ro\&#96;yhatga olish</>
                  </Text>
                  <div className="flex flex-col font-roboto items-center justify-start w-full">
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                      <div className="flex md:flex-1 flex-col justify-start w-[47%] md:w-full">
                        <Text
                          className="ml-3.5 md:ml-[0] text-blue_gray-500_99 text-xs"
                          size="txtRobotoMedium12Bluegray50099"
                        >
                          Ismi
                        </Text>
                        <Input
                          name="group378"
                          placeholder="Bobur"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                          wrapClassName="mt-1 w-full"
                          shape="round"
                          color="blue_gray_800_87_04"
                          size="2xl"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex md:flex-1 flex-col justify-start w-[47%] md:w-full">
                        <a
                          href="javascript:"
                          className="ml-3.5 md:ml-[0] text-blue_gray-500_99 text-xs"
                        >
                          <Text size="txtRobotoMedium12Bluegray50099">
                            Login
                          </Text>
                        </a>
                        <Input
                          name="group379"
                          placeholder="Bobur"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                          wrapClassName="mt-[3px] w-full"
                          shape="round"
                          color="blue_gray_800_87_04"
                          size="2xl"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[17px] w-full">
                      <div className="flex md:flex-1 flex-col justify-start w-[47%] md:w-full">
                        <Text
                          className="ml-3.5 md:ml-[0] text-blue_gray-500_99 text-xs"
                          size="txtRobotoMedium12Bluegray50099"
                        >
                          Familyasi
                        </Text>
                        <Input
                          name="group380"
                          placeholder="Azizov"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                          wrapClassName="mt-[3px] w-full"
                          shape="round"
                          color="blue_gray_800_87_04"
                          size="2xl"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex md:flex-1 flex-col gap-[5px] justify-start w-[47%] md:w-full">
                        <Text
                          className="ml-3.5 md:ml-[0] text-blue_gray-500_99 text-xs"
                          size="txtRobotoMedium12Bluegray50099"
                        >
                          Parol
                        </Text>
                        <Input
                          name="password"
                          placeholder="*****"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                          wrapClassName="w-full"
                          shape="round"
                          color="blue_gray_800_87_04"
                          size="3xl"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[17px] w-full">
                      <div className="flex md:flex-1 flex-col justify-start w-[47%] md:w-full">
                        <Text
                          className="ml-3.5 md:ml-[0] text-blue_gray-500_99 text-xs"
                          size="txtRobotoMedium12Bluegray50099"
                        >
                          Otasining ismi
                        </Text>
                        <Input
                          name="group382"
                          placeholder="Karimjon o&#96;g&#96;li"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                          wrapClassName="mt-[3px] w-full"
                          shape="round"
                          color="blue_gray_800_87_04"
                          size="2xl"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex md:flex-1 flex-col justify-start w-[47%] md:w-full">
                        <Text
                          className="ml-3.5 md:ml-[0] text-blue_gray-500_99 text-xs"
                          size="txtRobotoMedium12Bluegray50099"
                        >
                          Parolni qaytarish
                        </Text>
                        <Input
                          name="password_One"
                          placeholder="****"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                          wrapClassName="mt-[3px] w-full"
                          shape="round"
                          color="blue_gray_800_87_04"
                          size="3xl"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[11px] w-full">
                      <div className="flex md:flex-1 flex-col gap-[5px] justify-start w-[47%] md:w-full">
                        <Text
                          className="ml-3.5 md:ml-[0] text-blue_gray-500_99 text-xs"
                          size="txtRobotoMedium12Bluegray50099"
                        >
                          Yashash manzili
                        </Text>
                        <Input
                          name="group384"
                          placeholder="Andijon"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                          wrapClassName="w-full"
                          shape="round"
                          color="blue_gray_800_87_04"
                          size="2xl"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex md:flex-1 flex-col justify-start w-[47%] md:w-full">
                        <Text
                          className="ml-3.5 md:ml-[0] text-blue_gray-500_99 text-xs"
                          size="txtRobotoMedium12Bluegray50099"
                        >
                          Hodim ishga kelgan sana
                        </Text>
                        <Input
                          name="group385"
                          placeholder="02.11.2020"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                          wrapClassName="mt-[3px] w-full"
                          shape="round"
                          color="blue_gray_800_87_04"
                          size="2xl"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-3.5 w-full">
                      <div className="flex md:flex-1 flex-col justify-start w-[47%] md:w-full">
                        <Text
                          className="ml-3.5 md:ml-[0] text-blue_gray-500_99 text-xs"
                          size="txtRobotoMedium12Bluegray50099"
                        >
                          <>Tug\&#96;ilgan sana</>
                        </Text>
                        <Input
                          name="group386"
                          placeholder="12.03.2010"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                          wrapClassName="mt-[3px] w-full"
                          shape="round"
                          color="blue_gray_800_87_04"
                          size="2xl"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex md:flex-1 flex-col justify-start w-[47%] md:w-full">
                        <Text
                          className="ml-3.5 md:ml-[0] text-blue_gray-500_99 text-xs"
                          size="txtRobotoMedium12Bluegray50099"
                        >
                          Buyruq raqami
                        </Text>
                        <Input
                          name="group387"
                          placeholder="№ 1025"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                          wrapClassName="mt-[3px] w-full"
                          shape="round"
                          color="blue_gray_800_87_04"
                          size="2xl"
                          variant="fill"
                        ></Input>
                      </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[11px] w-full">
                      <div className="flex md:flex-1 flex-col justify-start w-[47%] md:w-full">
                        <Text
                          className="ml-3.5 md:ml-[0] text-blue_gray-500_99 text-xs"
                          size="txtRobotoMedium12Bluegray50099"
                        >
                          Telefon raqami
                        </Text>
                        <Input
                          name="group388"
                          placeholder="+998 88 161 50 50"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                          wrapClassName="mt-1 w-full"
                          shape="round"
                          color="blue_gray_800_87_04"
                          size="2xl"
                          variant="fill"
                        ></Input>
                      </div>
                      <div className="flex md:flex-1 flex-col justify-start w-[47%] md:w-full">
                        <Text
                          className="ml-3.5 md:ml-[0] text-blue_gray-500_99 text-xs"
                          size="txtRobotoMedium12Bluegray50099"
                        >
                          Lavozimi
                        </Text>
                        <SelectBox
                          className="mt-1 w-full"
                          indicator={
                            <Img
                              className="h-[7px] mr-[0] w-[7px]"
                              src="images/img_close.svg"
                              alt="close"
                            />
                          }
                          isSearchable={false}
                          options={selectOptionsList}
                          isMulti={false}
                          getOptionLabel={(e) =>
                            (
                              <div className="flex items-center">
                                <Img
                                  className="h-[7px] mr-[35px] w-[7px]"
                                  src="images/img_close.svg"
                                  alt="close"
                                />
                                <span>{e.label}</span>
                              </div>
                            ) as unknown as string
                          }
                          name="group389"
                          shape="round"
                          color="blue_gray_800_87_04"
                          size="3xl"
                          variant="fill"
                        />
                      </div>
                    </div>
                    <Input
                      name="buttonsaqlash"
                      placeholder="saqlash"
                      className="font-medium p-0 placeholder:text-blue-400 text-center text-sm tracking-[0.14px] uppercase w-full"
                      wrapClassName="border border-blue_gray-600 border-solid flex mt-[63px] rounded-[5px] w-[38%]"
                      suffix={
                        <Img
                          className="h-6 ml-[35px] my-auto"
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bg-blue_gray-800_7e flex flex-row gap-[15px] items-center justify-start left-[0] pr-[41px] md:px-5 top-[42%] w-[19%]">
          <Img
            className="h-[60px] md:h-auto object-cover w-[6%]"
            src="images/img_rectangle1564_6.png"
            alt="rectangle1564"
          />
          <div className="flex flex-row gap-5 items-start justify-start w-[88%]">
            <Img
              className="h-6 w-6"
              src="images/img_fluentclipboar_white_a700.svg"
              alt="fluentclipboar"
            />
            <Text
              className="mt-[3px] text-base text-white-A700 uppercase"
              size="txtRobotoMedium16WhiteA700"
            >
              <>Hodimlar ro\&#96;yhati</>
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default KassaTwoPage;
