import React from "react";

import { Button, Img, Input, Line, List, SelectBox, Text } from "components";

const languageOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const OmborBichishvarenderFourPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-roboto gap-2.5 items-end justify-start mx-auto sm:pr-5 pr-[23px] py-[23px] w-full">
        <div className="flex flex-col items-center max-w-[1400px] mx-auto md:px-5 w-full">
          <div className="md:h-[3401px] h-[636px] sm:h-[708px] relative w-full">
            <Img
              className="absolute h-[82px] left-[4%] top-[5%]"
              src="images/img_group834.svg"
              alt="groupSeventySix"
            />
            <div className="absolute flex md:flex-col flex-row md:gap-5 items-start justify-start right-[2%] top-[0] w-[78%]">
              <Img
                className="h-[41px] w-[41px]"
                src="images/img_arrowleft.svg"
                alt="arrowleft"
              />
              <div className="flex flex-col items-center justify-start md:ml-[0] ml-[45px] md:mt-0 mt-[7px]">
                <Text
                  className="text-2xl md:text-[22px] text-gray-400 sm:text-xl"
                  size="txtRobotoMedium24"
                >
                  Bichish kartasi\ №120003
                </Text>
              </div>
              <Button
                className="flex h-[50px] items-center justify-center md:ml-[0] ml-[409px] rounded-[24px] w-[50px]"
                color="blue_gray_800_02"
                size="xs"
                variant="fill"
              >
                <Img src="images/img_jamrefresh.svg" alt="jamrefresh" />
              </Button>
              <div className="flex flex-row items-center justify-end ml-8 md:ml-[0] md:mt-0 mt-[5px] w-[21%] md:w-full">
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
                  className="h-[7px] ml-[43px]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
            </div>
            <div className="absolute bottom-[0] flex md:h-[3401px] h-[555px] sm:h-[708px] inset-x-[0] justify-end mx-auto w-full">
              <div className="absolute flex flex-col gap-[22px] justify-start left-[0] top-[30%] w-1/5">
                <div className="flex flex-row gap-[25px] items-center justify-start ml-14 md:ml-[0] w-[51%] md:w-full">
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_grid.svg"
                    alt="grid"
                  />
                  <Text
                    className="text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    DASHBOARD
                  </Text>
                </div>
                <div className="bg-blue_gray-900 flex flex-col items-center justify-start py-[13px] w-full">
                  <div className="flex flex-col justify-start w-full">
                    <div className="flex flex-row gap-[26px] items-start justify-end md:ml-[0] ml-[55px] w-[71%] md:w-full">
                      <Img
                        className="h-[18px] mt-0.5 w-[18px]"
                        src="images/img_volume.svg"
                        alt="volume"
                      />
                      <div className="flex flex-col items-center justify-start w-[78%] sm:w-full">
                        <SelectBox
                          className="font-medium leading-[normal] text-base text-gray-400 text-left w-full"
                          placeholderClassName="text-gray-400"
                          indicator={
                            <Img
                              className="h-1 mr-[0] outline-gray-400 outline-[0.5px] outline w-[11px]"
                              src="images/img_arrowdown_gray_400.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="language"
                          options={languageOptionsList}
                          isSearchable={false}
                          placeholder="Bichish "
                        />
                      </div>
                    </div>
                    <div className="bg-blue_gray-500 flex flex-col items-end justify-start mt-2.5 w-full">
                      <Text
                        className="mb-0.5 mr-[67px] text-base text-white-A700"
                        size="txtRobotoMedium16WhiteA700"
                      >
                        Bichish kartasi
                      </Text>
                    </div>
                    <Text
                      className="md:ml-[0] ml-[100px] mt-[7px] text-base text-blue_gray-500"
                      size="txtRobotoMedium16"
                    >
                      Qoldiqlar
                    </Text>
                  </div>
                </div>
              </div>
              <Img
                className="h-[415px] mb-14 ml-auto mt-auto"
                src="images/img_component6.svg"
                alt="componentSix"
              />
              <div className="absolute md:h-[3401px] h-[555px] sm:h-[708px] inset-y-[0] my-auto right-[0] w-[81%] md:w-full">
                <div className="md:h-[3401px] h-[555px] sm:h-[708px] m-auto w-full">
                  <div className="absolute bg-blue_gray-900 flex flex-col h-full inset-[0] items-end justify-center m-auto rounded-[5px] w-full">
                    <div className="flex flex-col gap-[54px] justify-start mr-3 mt-2.5 w-3/5 md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                        <Input
                          name="group756"
                          placeholder="Taminotchi"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                          wrapClassName="flex sm:flex-1 rounded sm:w-full"
                          prefix={
                            <Img
                              className="h-[33px] mr-[11px] my-auto"
                              src="images/img_car.svg"
                              alt="car"
                            />
                          }
                          shape="round"
                          color="blue_400"
                          size="xs"
                          variant="fill"
                        ></Input>
                        <Input
                          name="group759"
                          placeholder="Saqlash"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                          wrapClassName="flex sm:flex-1 rounded sm:w-full"
                          prefix={
                            <Img
                              className="h-[23px] mr-[17px] my-auto"
                              src="images/img_flatuisave.svg"
                              alt="flat-ui:save"
                            />
                          }
                          shape="round"
                          color="blue_400"
                          size="xl"
                          variant="fill"
                        ></Input>
                        <Input
                          name="group755"
                          placeholder="Excelga olish"
                          className="font-medium leading-[normal] p-0 placeholder:text-white-A700 text-base text-left w-full"
                          wrapClassName="flex sm:flex-1 rounded sm:w-full"
                          prefix={
                            <Img
                              className="h-8 mr-[17px] my-auto"
                              src="images/img_vscodeiconsfiletypeexcel.svg"
                              alt="vscode-icons:file-type-excel"
                            />
                          }
                          shape="round"
                          color="blue_400"
                          size="sm"
                          variant="fill"
                        ></Input>
                      </div>
                      <List
                        className="flex flex-col gap-1 ml-9 md:ml-[0] w-[18%]"
                        orientation="vertical"
                      >
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <div className="bg-gray-900 flex flex-col items-start justify-start rounded-bl-[3px] rounded-tl-[3px]">
                            <Text
                              className="ml-4 md:ml-[0] text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              50
                            </Text>
                          </div>
                          <div className="bg-blue-400 flex flex-col items-end justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[30%]">
                            <Img
                              className="h-3 mr-1 w-3"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <div className="bg-gray-900 flex flex-col items-start justify-start rounded-bl-[3px] rounded-tl-[3px]">
                            <Text
                              className="ml-4 md:ml-[0] text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              50
                            </Text>
                          </div>
                          <div className="bg-blue-400 flex flex-col items-end justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[30%]">
                            <Img
                              className="h-3 mr-1 w-3"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <div className="bg-gray-900 flex flex-col items-start justify-start rounded-bl-[3px] rounded-tl-[3px]">
                            <Text
                              className="ml-4 md:ml-[0] text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              50
                            </Text>
                          </div>
                          <div className="bg-blue-400 flex flex-col items-end justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[30%]">
                            <Img
                              className="h-3 mr-1 w-3"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <div className="bg-gray-900 flex flex-col items-start justify-start rounded-bl-[3px] rounded-tl-[3px]">
                            <Text
                              className="ml-4 md:ml-[0] text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              50
                            </Text>
                          </div>
                          <div className="bg-blue-400 flex flex-col items-end justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[30%]">
                            <Img
                              className="h-3 mr-1 w-3"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <div className="bg-gray-900 flex flex-col items-start justify-start rounded-bl-[3px] rounded-tl-[3px]">
                            <Text
                              className="ml-4 md:ml-[0] text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              50
                            </Text>
                          </div>
                          <div className="bg-blue-400 flex flex-col items-end justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[30%]">
                            <Img
                              className="h-3 mr-1 w-3"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <div className="bg-gray-900 flex flex-col items-start justify-start rounded-bl-[3px] rounded-tl-[3px]">
                            <Text
                              className="ml-4 md:ml-[0] text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              50
                            </Text>
                          </div>
                          <div className="bg-blue-400 flex flex-col items-end justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[30%]">
                            <Img
                              className="h-3 mr-1 w-3"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <div className="bg-gray-900 flex flex-col items-start justify-start rounded-bl-[3px] rounded-tl-[3px]">
                            <Text
                              className="ml-4 md:ml-[0] text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              50
                            </Text>
                          </div>
                          <div className="bg-blue-400 flex flex-col items-end justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[30%]">
                            <Img
                              className="h-3 mr-1 w-3"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <div className="bg-gray-900 flex flex-col items-start justify-start rounded-bl-[3px] rounded-tl-[3px]">
                            <Text
                              className="ml-4 md:ml-[0] text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              50
                            </Text>
                          </div>
                          <div className="bg-blue-400 flex flex-col items-end justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[30%]">
                            <Img
                              className="h-3 mr-1 w-3"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <div className="bg-gray-900 flex flex-col items-start justify-start rounded-bl-[3px] rounded-tl-[3px]">
                            <Text
                              className="ml-4 md:ml-[0] text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              50
                            </Text>
                          </div>
                          <div className="bg-blue-400 flex flex-col items-end justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[30%]">
                            <Img
                              className="h-3 mr-1 w-3"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <div className="bg-gray-900 flex flex-col items-start justify-start rounded-bl-[3px] rounded-tl-[3px]">
                            <Text
                              className="ml-4 md:ml-[0] text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              50
                            </Text>
                          </div>
                          <div className="bg-blue-400 flex flex-col items-end justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[30%]">
                            <Img
                              className="h-3 mr-1 w-3"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <div className="bg-gray-900 flex flex-col items-start justify-start rounded-bl-[3px] rounded-tl-[3px]">
                            <Text
                              className="ml-4 md:ml-[0] text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              50
                            </Text>
                          </div>
                          <div className="bg-blue-400 flex flex-col items-end justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[30%]">
                            <Img
                              className="h-3 mr-1 w-3"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <div className="bg-gray-900 flex flex-col items-start justify-start rounded-bl-[3px] rounded-tl-[3px]">
                            <Text
                              className="ml-4 md:ml-[0] text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              50
                            </Text>
                          </div>
                          <div className="bg-blue-400 flex flex-col items-end justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[30%]">
                            <Img
                              className="h-3 mr-1 w-3"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <div className="bg-gray-900 flex flex-col items-start justify-start rounded-bl-[3px] rounded-tl-[3px]">
                            <Text
                              className="ml-4 md:ml-[0] text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              50
                            </Text>
                          </div>
                          <div className="bg-blue-400 flex flex-col items-end justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[30%]">
                            <Img
                              className="h-3 mr-1 w-3"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <div className="bg-gray-900 flex flex-col items-start justify-start rounded-bl-[3px] rounded-tl-[3px]">
                            <Text
                              className="ml-4 md:ml-[0] text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              50
                            </Text>
                          </div>
                          <div className="bg-blue-400 flex flex-col items-end justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[30%]">
                            <Img
                              className="h-3 mr-1 w-3"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <div className="bg-gray-900 flex flex-col items-start justify-start rounded-bl-[3px] rounded-tl-[3px]">
                            <Text
                              className="ml-4 md:ml-[0] text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              50
                            </Text>
                          </div>
                          <div className="bg-blue-400 flex flex-col items-end justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[30%]">
                            <Img
                              className="h-3 mr-1 w-3"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-evenly w-full">
                          <div className="bg-gray-900 flex flex-col items-start justify-start rounded-bl-[3px] rounded-tl-[3px]">
                            <Text
                              className="ml-4 md:ml-[0] text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              50
                            </Text>
                          </div>
                          <div className="bg-blue-400 flex flex-col items-end justify-start p-1.5 rounded-br-[3px] rounded-tr-[3px] w-[30%]">
                            <Img
                              className="h-3 mr-1 w-3"
                              src="images/img_location.svg"
                              alt="location"
                            />
                          </div>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="absolute bottom-[0] md:h-[3401px] h-[487px] inset-x-[0] mx-auto w-full">
                    <div className="md:h-[3401px] h-[487px] m-auto w-full">
                      <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Line className="bg-blue_gray-800_01 h-px w-full" />
                          <Line className="bg-blue_gray-800_01 h-0.5 mt-[38px] w-full" />
                          <Line className="bg-blue_gray-800_01 h-px mt-[25px] w-full" />
                          <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[285px] mt-[26px] w-3/4" />
                          <Line className="bg-blue_gray-800_01 h-[3px] mt-[30px] w-full" />
                          <Line className="bg-blue_gray-800_01 h-px mt-[25px] w-full" />
                          <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[285px] mt-[26px] w-3/4" />
                          <Line className="bg-blue_gray-800_01 h-[3px] mt-[29px] w-full" />
                          <Line className="bg-blue_gray-800_01 h-px mt-6 w-full" />
                          <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[285px] mt-[27px] w-3/4" />
                          <Line className="bg-blue_gray-800_01 h-0.5 mt-7 w-full" />
                          <Line className="bg-blue_gray-800_01 h-px mt-[25px] w-full" />
                          <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[285px] mt-[27px] w-3/4" />
                          <Line className="bg-blue_gray-800_01 h-0.5 mt-[29px] w-full" />
                          <Line className="bg-blue_gray-800_01 h-px mt-[26px] w-full" />
                          <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[285px] mt-[26px] w-3/4" />
                          <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[284px] mt-[27px] w-3/4" />
                        </div>
                      </div>
                      <div className="absolute flex md:flex-col flex-row md:gap-5 h-full inset-[0] items-start justify-center m-auto pl-[3px] py-[3px] w-[97%]">
                        <List
                          className="sm:flex-col flex-row gap-[10.5px] grid grid-cols-[repeat(2,_1fr_1px)_1fr] md:mt-0 mt-1.5 w-[22%] md:w-full"
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
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Aldoks
                            </Text>
                            <Text
                              className="mt-[65px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Aldoks
                            </Text>
                            <Text
                              className="mt-[63px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Aldoks
                            </Text>
                            <Text
                              className="mt-[74px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Aldoks
                            </Text>
                            <Text
                              className="mt-[63px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Aldoks
                            </Text>
                          </div>
                          <Line className="self-center h-[487px] bg-blue_gray-800_03 w-px" />
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              Artikul
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              0601
                            </Text>
                            <Text
                              className="mt-[65px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              0602
                            </Text>
                            <Text
                              className="mt-[63px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              0603
                            </Text>
                            <Text
                              className="mt-[74px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              0604
                            </Text>
                            <Text
                              className="mt-[63px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              0605
                            </Text>
                          </div>
                          <Line className="self-center h-[487px] bg-blue_gray-800_03 w-px" />
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              Rangi
                            </Text>
                            <Text
                              className="mt-[21px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Dub mocco
                            </Text>
                            <Text
                              className="mt-[65px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Dub mocco
                            </Text>
                            <Text
                              className="mt-[65px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Rangsiz
                            </Text>
                            <Text
                              className="mt-[74px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Rangsiz
                            </Text>
                            <Text
                              className="mt-[63px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              Rangsiz
                            </Text>
                          </div>
                        </List>
                        <List
                          className="sm:flex-col flex-row gap-[7.5px] grid grid-cols-[repeat(1,_1fr_1px)_1fr] md:ml-[0] ml-[92px] md:mt-0 mt-1.5 w-[10%] md:w-full"
                          orientation="horizontal"
                        >
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              <>O\&#96;lcham</>
                            </Text>
                            <Text
                              className="mt-[23px] text-[15px] text-gray-400"
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
                              className="mt-[17px] text-[15px] text-gray-400"
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
                              className="mt-[15px] text-[15px] text-gray-400"
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
                              className="mt-[5px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              1199{" "}
                            </Text>
                            <Text
                              className="mt-[26px] text-[15px] text-gray-400"
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
                              className="mt-[15px] text-[15px] text-gray-400"
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
                          <Line className="self-center h-[487px] bg-blue_gray-800_03 w-px" />
                          <div className="flex flex-col gap-[23px] items-center justify-start w-full">
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
                                className="mt-1 text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                2
                              </Text>
                              <Text
                                className="mt-[18px] text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                5
                              </Text>
                              <Text
                                className="mt-[5px] text-[15px] text-gray-400"
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
                                className="mt-4 text-[15px] text-gray-400"
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
                                className="mt-1 text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                1
                              </Text>
                              <Text
                                className="mt-[27px] text-[15px] text-gray-400"
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
                                className="mt-1 text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                2
                              </Text>
                              <Text
                                className="mt-4 text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                4
                              </Text>
                              <Text
                                className="mt-[5px] text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                1
                              </Text>
                              <Text
                                className="mt-1 text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                2
                              </Text>
                              <Text
                                className="mt-[11px] text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                5
                              </Text>
                            </div>
                          </div>
                        </List>
                        <Text
                          className="md:ml-[0] ml-[46px] md:mt-0 mt-1.5 text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Render
                        </Text>
                        <div className="flex flex-col gap-[21px] items-center justify-start md:ml-[0] ml-[137px] md:mt-0 mt-1.5 w-[4%] md:w-full">
                          <Text
                            className="text-[15px] text-blue_gray-500"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            Sexda
                          </Text>
                          <div className="flex flex-col items-start justify-start">
                            <Text
                              className="text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              2
                            </Text>
                            <Text
                              className="mt-8 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              2
                            </Text>
                            <Text
                              className="mt-[67px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              6
                            </Text>
                            <Text
                              className="mt-9 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              3
                            </Text>
                            <Text
                              className="mt-2.5 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              1
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[139px] md:mt-0 mt-1.5 w-[6%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              Butun
                            </Text>
                            <Text
                              className="mt-[47px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              6000 x 1
                            </Text>
                            <Text
                              className="mt-[214px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              6000 x 2
                            </Text>
                            <Text
                              className="mt-[29px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              6000 x 1
                            </Text>
                            <Text
                              className="mt-4 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              6000 x 1
                            </Text>
                            <Text
                              className="mt-[30px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              6000 x 1
                            </Text>
                            <Text
                              className="mt-2.5 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              6000 x 1
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start ml-9 md:ml-[0] md:mt-0 mt-2 w-[6%] md:w-full">
                          <div className="flex flex-col md:gap-10 gap-[214px] justify-start w-full">
                            <div className="flex flex-col gap-[46px] items-start justify-start md:ml-[0] ml-[7px]">
                              <Text
                                className="text-[15px] text-blue_gray-500"
                                size="txtRobotoMedium15Bluegray500"
                              >
                                Qoldiq
                              </Text>
                              <Text
                                className="text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                1200 x 1
                              </Text>
                            </div>
                            <div className="flex flex-col items-end justify-start mr-[7px]">
                              <Text
                                className="text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                3412 x 1
                              </Text>
                              <Text
                                className="mt-[29px] text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                3378 x 1
                              </Text>
                              <Text
                                className="mt-4 text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                375 x 1
                              </Text>
                              <Text
                                className="mt-[30px] text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                469 x 1
                              </Text>
                              <Text
                                className="mt-2.5 text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                469 x 1
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[21px] md:mt-0 mt-[7px] w-[6%] md:w-full">
                          <div className="flex flex-col items-start justify-start w-full">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              Qoldiq %
                            </Text>
                            <Text
                              className="mt-[46px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              20 %
                            </Text>
                            <Text
                              className="mt-[214px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              56.7 %
                            </Text>
                            <Text
                              className="mt-[29px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              56.47 %
                            </Text>
                            <Text
                              className="mt-4 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              60.3 %
                            </Text>
                            <Text
                              className="mt-[30px] text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              32.62 %
                            </Text>
                            <Text
                              className="mt-2.5 text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              32.62 %
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute flex md:flex-col flex-row md:gap-5 h-max inset-y-[0] items-start justify-start left-[0] my-auto w-[74%]">
                      <div className="flex flex-col items-start justify-start md:mt-0 mt-[41px]">
                        <Text
                          className="text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          01
                        </Text>
                        <Text
                          className="h-[18px] mt-[65px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          02
                        </Text>
                        <Text
                          className="h-[18px] mt-[63px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          03
                        </Text>
                        <Text
                          className="h-[18px] mt-[74px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          04
                        </Text>
                        <Text
                          className="h-[18px] mt-[63px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          05
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[271px] w-[7%] md:w-full">
                        <div className="flex flex-row items-start justify-evenly w-full">
                          <Text
                            className="text-[15px] text-blue_gray-500"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            Gradus{" "}
                          </Text>
                          <Text
                            className="text-[6px] text-blue_gray-500"
                            size="txtRobotoMedium6"
                          >
                            o{" "}
                          </Text>
                        </div>
                        <Text
                          className="mt-[23px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          90 x90
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          90 x90
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          90 x90
                        </Text>
                        <Text
                          className="mt-[17px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          90 x90
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          90 x90
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          90 x90
                        </Text>
                        <Text
                          className="mt-[15px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          90 x90
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          90 x90
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          90 x90
                        </Text>
                        <Text
                          className="mt-[26px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          45 x 45
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          45 x 45
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          45 x 45
                        </Text>
                        <Text
                          className="mt-[15px] text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          45 x 45
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          45 x 45
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          45 x 45
                        </Text>
                        <Text
                          className="mt-1.5 text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          45 x 45
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[23px] items-center justify-start md:ml-[0] ml-[263px] w-[6%] md:w-full">
                        <Text
                          className="text-[15px] text-blue_gray-500"
                          size="txtRobotoMedium15Bluegray500"
                        >
                          Ombor
                        </Text>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            1
                          </Text>
                          <Text
                            className="mt-[65px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            5
                          </Text>
                          <Text
                            className="mt-[5px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            1
                          </Text>
                          <Text
                            className="mt-[39px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            2
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[59px] w-[15%] md:w-full">
                        <div className="flex flex-col justify-start w-full">
                          <Text
                            className="md:ml-[0] ml-[65px] text-[15px] text-blue_gray-500"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            Havoda
                          </Text>
                          <Text
                            className="md:ml-[0] ml-[81px] mt-[279px] text-[15px] text-gray-400"
                            size="txtRobotoMedium15Gray400"
                          >
                            2
                          </Text>
                          <div className="flex flex-col md:gap-10 gap-16 items-start justify-start mr-[27px] mt-1.5 w-[77%] md:w-full">
                            <div className="flex flex-row items-center justify-between w-full">
                              <Text
                                className="text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                1
                              </Text>
                              <Text
                                className="text-[15px] text-gray-400"
                                size="txtRobotoMedium15Gray400"
                              >
                                2
                              </Text>
                            </div>
                            <Text
                              className="text-[15px] text-gray-400"
                              size="txtRobotoMedium15Gray400"
                            >
                              1
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[0] h-[490px] right-[0] w-[1%]">
                  <Line className="bg-blue_gray-800 h-[490px] m-auto w-[5px]" />
                  <Line className="absolute bg-blue_gray-500 bottom-[28%] h-[158px] inset-x-[0] mx-auto rounded-sm w-[5px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[9px] justify-start mb-3.5 md:px-5 w-4/5 md:w-full">
          <Text
            className="md:ml-[0] ml-[23px] text-base text-white-A700"
            size="txtRobotoMedium16WhiteA700"
          >
            Vizual
          </Text>
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[318px] items-start justify-start p-[34px] sm:px-5 w-full"
            style={{ backgroundImage: "url('images/img_group81.svg')" }}
          >
            <div className="flex flex-col justify-start mb-[19px] md:ml-[0] ml-[38px] w-[57%] md:w-full">
              <Text
                className="md:ml-[0] ml-[13px] text-blue_gray-500 text-xs"
                size="txtRobotoMedium12Bluegray500"
              >
                Aldoks -(Silver)Qanot
              </Text>
              <div className="flex flex-col items-start justify-start mt-[3px] w-full">
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly w-full">
                  <Text
                    className="border border-blue_gray-500 border-solid sm:px-5 px-[35px] py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1600
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid sm:px-5 px-[35px] py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1600-sexda
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid sm:px-5 px-[35px] py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1600-sexda
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid sm:pl-5 pl-[35px] pr-[19px] pt-1 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1200-qoldiq
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly mt-3 w-full">
                  <Text
                    className="border border-blue_gray-500 border-solid sm:px-5 px-[35px] py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1200
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid pl-[25px] pr-[31px] sm:px-5 py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1200-sexda
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid pl-[25px] pr-[31px] sm:px-5 py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1200-sexda
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid pl-[25px] pr-[31px] sm:px-5 py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1200-sexda
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid sm:pl-5 pl-[35px] pr-[19px] pt-1 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1200-qoldiq
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly mt-[11px] w-full">
                  <Text
                    className="border border-blue_gray-500 border-solid sm:px-5 px-[35px] py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1600
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid sm:px-5 px-[35px] py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1600-sexda
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid sm:px-5 px-[35px] py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1600-sexda
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid sm:pl-5 pl-[35px] pr-[19px] pt-1 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1200-qoldiq
                  </Text>
                </div>
                <Text
                  className="md:ml-[0] ml-[9px] mt-5 text-blue_gray-500 text-xs"
                  size="txtRobotoMedium12Bluegray500"
                >
                  2. Aldoks -(Dub Moccco)Kosa
                </Text>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly mt-[3px] w-full">
                  <Text
                    className="border border-blue_gray-500 border-solid sm:px-5 px-[35px] py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1600
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid sm:px-5 px-[35px] py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1600-sexda
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid sm:px-5 px-[35px] py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1600-sexda
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid sm:pl-5 pl-[35px] pr-[19px] pt-1 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1200-qoldiq
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly mt-3 w-full">
                  <Text
                    className="border border-blue_gray-500 border-solid sm:px-5 px-[35px] py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1200
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid pl-[25px] pr-[31px] sm:px-5 py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1200-sexda
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid pl-[25px] pr-[31px] sm:px-5 py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1200-sexda
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid pl-[25px] pr-[31px] sm:px-5 py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1200-sexda
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid sm:pl-5 pl-[35px] pr-[19px] pt-1 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1200-qoldiq
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-evenly mt-[11px] w-full">
                  <Text
                    className="border border-blue_gray-500 border-solid sm:px-5 px-[35px] py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1600
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid sm:px-5 px-[35px] py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1600-sexda
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid sm:px-5 px-[35px] py-0.5 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1600-sexda
                  </Text>
                  <Text
                    className="border border-blue_gray-500 border-solid sm:pl-5 pl-[35px] pr-[19px] pt-1 rounded-sm text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    1200-qoldiq
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OmborBichishvarenderFourPage;
