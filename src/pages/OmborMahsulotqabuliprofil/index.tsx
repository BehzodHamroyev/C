import React from "react";

import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";

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

const OmborMahsulotqabuliprofilPage: React.FC = () => {
  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat flex flex-col font-roboto h-[900px] items-center justify-start mx-auto sm:pr-5 pr-[29px] py-[29px] w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mb-[17px] mx-auto md:px-5 w-full">
          <Sidebar className="!sticky !w-[273px] flex h-screen md:hidden justify-start md:mt-0 mt-[26px] overflow-auto top-[0]">
            <Img
              className="h-[82px] md:ml-[0] ml-[49px] mr-[41px]"
              src="images/img_group834.svg"
              alt="groupSeventySix"
            />
            <Menu
              menuItemStyles={{
                button: {
                  padding: "17px 17px 17px 40px",
                  gap: "21px",
                  color: "#6e768c",
                  fontWeight: 500,
                  fontSize: "14px",
                  [`&:hover, &.ps-active`]: {
                    color: "#c0c4c6",
                    backgroundColor: "#4047577e !important",
                  },
                },
              }}
              className="flex flex-col items-center justify-end mb-5 mt-[67px] pt-5 w-full"
            >
              <div className="flex flex-col items-center justify-start w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-6 w-6"
                      src="images/img_vector_blue_gray_500_24x24.svg"
                      alt="vector"
                    />
                  }
                >
                  <Text>BICHUV</Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-6"
                      src="images/img_settings.svg"
                      alt="settings"
                    />
                  }
                >
                  <Text className="text-base uppercase">qoldiqlar ombori</Text>
                </MenuItem>
              </div>
              <div className="flex flex-col items-center justify-end mt-[33px] pt-0.5 w-full">
                <SubMenu
                  label={
                    <div className="h-[60px] relative w-full">
                      <div className="absolute flex flex-col inset-x-[0] items-end justify-start p-4 top-[0] w-full">
                        <div className="flex flex-row items-end justify-end mr-1 w-[88%] md:w-full">
                          <Img
                            className="h-[27px] w-[27px]"
                            src="images/img_fluentvehicle.svg"
                            alt="fluentvehicle"
                          />
                          <Text className="ml-[13px] mt-1.5 uppercase">
                            mAHSULOT qabuli{" "}
                          </Text>
                          <Img
                            className="h-1 mb-[9px] ml-3.5 mt-3"
                            src="images/img_line49.svg"
                            alt="lineFortyNine"
                          />
                        </div>
                      </div>
                      <div className="absolute bg-red-300 h-[60px] left-[0] top-[0] w-[5%]"></div>
                    </div>
                  }
                >
                  <div className="flex flex-col items-center justify-end mt-[9px] w-full">
                    <MenuItem>
                      <div className="flex flex-row items-center justify-center md:pl-10 sm:pl-5 pl-[45px]">
                        <Text>Taminot qabuli</Text>
                      </div>
                    </MenuItem>
                    <MenuItem
                      active={
                        window.location.pathname ===
                        "/omborqabultarixibuyurtmalartarkibi"
                      }
                      href="/omborqabultarixibuyurtmalartarkibi"
                    >
                      <div className="flex flex-row items-center justify-center md:pl-10 sm:pl-5 pl-[45px]">
                        <Text>Qabul tarixi</Text>
                      </div>
                    </MenuItem>
                  </div>
                </SubMenu>
                <MenuItem
                  icon={
                    <Img
                      className="h-[26px] w-[26px]"
                      src="images/img_mail.svg"
                      alt="mail"
                    />
                  }
                >
                  <Text className="text-base uppercase">mAHSULOT OMBORI</Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-[23px] mb-1 w-[23px]"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                  }
                >
                  <Text className="uppercase">YUK CHIQARISH</Text>
                </MenuItem>
              </div>
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[38px] items-center justify-start w-full">
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-[97%] md:w-full">
              <Text
                className="text-2xl md:text-[22px] text-gray-400 sm:text-xl"
                size="txtRobotoMedium24"
              >
                Mahsulot kirimi
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
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-start p-[29px] sm:px-5 rounded-[5px] shadow-bs6 w-full">
                    <div className="flex flex-col gap-[52px] items-center justify-start mb-[66px] w-[97%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="bg-blue_gray-800_87 flex md:flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly rounded-[5px] w-[45%] md:w-full">
                          <OmborTaminotchigaZayavkaOneTab
                            className="flex flex-col items-center justify-start w-[225px]"
                            username="Profillar"
                          />
                          <OmborTaminotchigaZayavkaOneTab
                            className="flex flex-col items-center justify-start w-[233px]"
                            username="aksesuarlar"
                          />
                        </div>
                        <div className="bg-blue_gray-900 flex md:flex-1 flex-col items-start justify-start sm:px-5 px-[22px] rounded-[5px] shadow-bs w-1/5 md:w-full">
                          <OmborTaminotchigaZayavkaOneTab
                            className="flex flex-row gap-[17px] items-center justify-start w-[142px]"
                            username="kEYINGI"
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
                              name="group255"
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
                                  name="group768"
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
                              name="group256"
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
                                  "url('images/img_group259.svg')",
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
    </>
  );
};

export default OmborMahsulotqabuliprofilPage;
