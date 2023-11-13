import React from "react";

import { Img, Input, List, SelectBox, Text } from "components";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const OmborBuyurtmalarroyhatiFourPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto sm:pr-5 pr-[29px] py-[29px] relative w-full">
        <Img
          className="absolute h-[82px] left-[3%] top-[6%]"
          src="images/img_group834.svg"
          alt="groupSeventySix"
        />
        <div className="absolute flex md:flex-col flex-row md:gap-5 items-start justify-start md:px-5 right-[5%] top-[3%] w-[73%]">
          <Img
            className="h-[41px] w-[41px]"
            src="images/img_arrowleft.svg"
            alt="arrowleft"
          />
          <Text
            className="md:ml-[0] ml-[27px] md:mt-0 mt-[9px] text-2xl md:text-[22px] text-gray-400 sm:text-xl"
            size="txtRobotoMedium24"
          >
            Buyurtmalar\1024{" "}
          </Text>
          <div className="flex flex-row items-end justify-end md:ml-[0] ml-[555px] w-[22%] md:w-full">
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
              className="mb-[3px] ml-[11px] mt-[7px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-500"
              size="txtRobotoMedium23"
            >
              Operator
            </Text>
            <Img
              className="h-[7px] ml-[67px] my-[15px]"
              src="images/img_arrowdown.svg"
              alt="arrowdown"
            />
          </div>
        </div>
        <div className="absolute md:h-[1545px] h-[662px] sm:h-[704px] inset-[0] justify-center m-auto max-w-[1400px] md:px-5 w-full">
          <div className="absolute md:h-[1545px] h-[662px] sm:h-[704px] inset-y-[0] my-auto right-[0] w-[81%] md:w-full">
            <div className="absolute bg-blue_gray-900 flex flex-col h-full inset-[0] items-start justify-center m-auto p-3 rounded-[5px] w-full">
              <div className="flex sm:flex-col flex-row gap-6 items-center justify-start mb-[607px] md:ml-[0] ml-[11px] w-[38%] md:w-full">
                <Img
                  className="h-[18px] w-[17px]"
                  src="images/img_refresh.svg"
                  alt="refresh"
                />
                <Input
                  name="group268"
                  placeholder="Izlash"
                  className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                  wrapClassName="w-[91%] sm:w-full"
                  shape="round"
                  color="blue_gray_800"
                  size="sm"
                  variant="fill"
                ></Input>
              </div>
            </div>
            <div
              className="absolute bg-cover bg-no-repeat flex flex-col h-[301px] inset-x-[0] items-start justify-start mx-auto p-2 top-[9%] w-full"
              style={{ backgroundImage: "url('images/img_group271.svg')" }}
            >
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mb-[45px] ml-3.5 md:ml-[0] w-[85%] md:w-full">
                <div className="flex flex-col items-start justify-start w-[2%] md:w-full">
                  <Img
                    className="h-[18px] md:h-auto object-cover w-[89%] sm:w-full"
                    src="images/img_.png"
                    alt="Sixteen"
                  />
                  <Text
                    className="mt-[23px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    01
                  </Text>
                  <Text
                    className="h-[18px] mt-6 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    02
                  </Text>
                  <Text
                    className="h-[18px] mt-[23px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    03
                  </Text>
                  <Text
                    className="h-[18px] mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    04
                  </Text>
                  <Text
                    className="h-[18px] mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    05
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[29px]">
                  <Text
                    className="text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    Nomi
                  </Text>
                  <Text
                    className="mt-[23px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Eshik
                  </Text>
                  <Text
                    className="mt-6 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Rom
                  </Text>
                  <Text
                    className="mt-[22px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Eshik
                  </Text>
                  <Text
                    className="mt-[27px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Rom
                  </Text>
                  <Text
                    className="mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Rom
                  </Text>
                </div>
                <List
                  className="sm:flex-col flex-row gap-[59px] grid grid-cols-3 md:ml-[0] ml-[142px] w-[29%] md:w-full"
                  orientation="horizontal"
                >
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Profil turi
                    </Text>
                    <Text
                      className="mt-[26px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Aldoks
                    </Text>
                    <Text
                      className="mt-[27px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      PVH
                    </Text>
                    <Text
                      className="mt-[26px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Exclusive
                    </Text>
                    <Text
                      className="mt-[29px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Exclusive
                    </Text>
                    <Text
                      className="mt-[29px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      Exclusive
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Soni
                    </Text>
                    <Text
                      className="mt-[26px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      3
                    </Text>
                    <Text
                      className="mt-[26px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      2
                    </Text>
                    <Text
                      className="mt-[26px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      4
                    </Text>
                    <Text
                      className="mt-[29px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      10
                    </Text>
                    <Text
                      className="mt-[29px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      12
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Kvadrati
                    </Text>
                    <Text
                      className="mt-[26px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      4.8
                    </Text>
                    <Text
                      className="mt-[26px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      2.4
                    </Text>
                    <Text
                      className="mt-[26px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      7.2
                    </Text>
                    <Text
                      className="mt-[29px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      20
                    </Text>
                    <Text
                      className="mt-[29px] text-blue_gray-500 text-xs"
                      size="txtRobotoMedium12Bluegray500"
                    >
                      48
                    </Text>
                  </div>
                </List>
                <div className="flex flex-col items-center justify-start md:ml-[0] ml-[43px] w-[8%] md:w-full">
                  <div className="flex flex-col gap-[25px] justify-start w-full">
                    <Text
                      className="text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Namunalar
                    </Text>
                    <div className="flex flex-col items-center justify-start ml-5 md:ml-[0] w-[26%] md:w-full">
                      <List
                        className="flex flex-col gap-[22px] items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row h-[19px] items-end justify-evenly my-0 w-full">
                          <div className="flex h-[19px] justify-end relative w-[69%]">
                            <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[85%]">
                              <Img
                                className="h-1.5"
                                src="images/img_vector_white_a700_6x4.svg"
                                alt="vector"
                              />
                              <Img
                                className="h-1.5"
                                src="images/img_vector_6x4.svg"
                                alt="vector_One"
                              />
                            </div>
                            <Img
                              className="absolute h-[19px] inset-[0] justify-center m-auto"
                              src="images/img_file_white_a700.svg"
                              alt="file"
                            />
                          </div>
                          <Img
                            className="h-1.5 mb-0.5 mt-[9px]"
                            src="images/img_vector_1.svg"
                            alt="vector_Two"
                          />
                        </div>
                        <div className="flex flex-1 flex-row h-[19px] items-end justify-evenly my-0 w-full">
                          <div className="flex h-[19px] justify-end relative w-[69%]">
                            <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[85%]">
                              <Img
                                className="h-1.5"
                                src="images/img_vector_white_a700_6x4.svg"
                                alt="vector"
                              />
                              <Img
                                className="h-1.5"
                                src="images/img_vector_6x4.svg"
                                alt="vector_One"
                              />
                            </div>
                            <Img
                              className="absolute h-[19px] inset-[0] justify-center m-auto"
                              src="images/img_file_white_a700.svg"
                              alt="file"
                            />
                          </div>
                          <Img
                            className="h-1.5 mb-0.5 mt-[9px]"
                            src="images/img_vector_1.svg"
                            alt="vector_Two"
                          />
                        </div>
                        <div className="flex flex-1 flex-row h-[19px] items-end justify-evenly my-0 w-full">
                          <div className="flex h-[19px] justify-end relative w-[69%]">
                            <div className="flex flex-row h-full items-center justify-evenly mb-0.5 ml-auto mt-auto w-[85%]">
                              <Img
                                className="h-1.5"
                                src="images/img_vector_white_a700_6x4.svg"
                                alt="vector"
                              />
                              <Img
                                className="h-1.5"
                                src="images/img_vector_6x4.svg"
                                alt="vector_One"
                              />
                            </div>
                            <Img
                              className="absolute h-[19px] inset-[0] justify-center m-auto"
                              src="images/img_file_white_a700.svg"
                              alt="file"
                            />
                          </div>
                          <Img
                            className="h-1.5 mb-0.5 mt-[9px]"
                            src="images/img_vector_1.svg"
                            alt="vector_Two"
                          />
                        </div>
                      </List>
                      <Img
                        className="h-[19px] mt-[22px] w-[19px]"
                        src="images/img_file_white_a700_19x19.svg"
                        alt="file"
                      />
                      <Img
                        className="h-[19px] mt-[25px] w-[19px]"
                        src="images/img_file_white_a700_19x19.svg"
                        alt="file_One"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[60px]">
                  <Text
                    className="text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Muddati
                  </Text>
                  <Text
                    className="mt-[26px] text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    Sen 11. 2022
                  </Text>
                  <Text
                    className="mt-[27px] text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    Sen 12. 2022
                  </Text>
                  <Text
                    className="mt-[26px] text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    Sen 12. 2022
                  </Text>
                  <Text
                    className="mt-[29px] text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    Sen 12. 2022
                  </Text>
                  <Text
                    className="mt-[29px] text-blue_gray-500 text-xs"
                    size="txtRobotoMedium12Bluegray500"
                  >
                    Sen 12. 2022
                  </Text>
                </div>
                <div className="flex flex-col gap-[19px] items-center justify-start md:ml-[0] ml-[98px] md:mt-0 mt-[3px] w-[11%] md:w-full">
                  <Text
                    className="text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Renderga
                  </Text>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <Text
                        className="bg-blue-400 h-[25px] justify-center sm:px-5 px-[21px] py-0.5 rounded text-base text-center text-white-A700 w-[95px]"
                        size="txtRobotoMedium16WhiteA700"
                      >
                        Render
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-5 w-full">
                      <Text
                        className="bg-blue-400 h-[25px] justify-center sm:px-5 px-[21px] py-0.5 rounded text-base text-center text-white-A700 w-[95px]"
                        size="txtRobotoMedium16WhiteA700"
                      >
                        Render
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                      <Text
                        className="bg-blue-400 h-[25px] justify-center sm:px-5 px-[21px] py-0.5 rounded text-base text-center text-white-A700 w-[95px]"
                        size="txtRobotoMedium16WhiteA700"
                      >
                        Render
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-[18px] w-full">
                      <Text
                        className="bg-blue-400 h-[25px] justify-center sm:px-5 px-[21px] py-0.5 rounded text-base text-center text-white-A700 w-[95px]"
                        size="txtRobotoMedium16WhiteA700"
                      >
                        Render
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start mt-5 w-full">
                      <Text
                        className="bg-blue-400 h-[25px] justify-center sm:px-5 px-[21px] py-0.5 rounded text-base text-center text-white-A700 w-[95px]"
                        size="txtRobotoMedium16WhiteA700"
                      >
                        Render
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute md:h-[161px] h-[164px] left-[0] top-[14%] w-1/5">
            <div className="absolute bg-blue_gray-900 flex flex-col h-full inset-[0] items-end justify-center m-auto p-[13px] w-full">
              <div className="flex flex-col gap-[55px] justify-start mb-[9px] mr-[11px] w-[78%] md:w-full">
                <div className="flex flex-row gap-[26px] items-start justify-between w-full">
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_map.svg"
                    alt="map"
                  />
                  <div className="flex sm:flex-1 flex-col items-center justify-start sm:w-full">
                    <SelectBox
                      className="font-medium leading-[normal] text-base text-left text-white-A700 w-full"
                      placeholderClassName="text-white-A700"
                      indicator={
                        <Img
                          className="h-1 mr-[0] outline-white-A700 outline-[0.5px] outline w-[11px]"
                          src="images/img_arrowdown_white_a700.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="language_One"
                      options={languageOneOptionsList}
                      isSearchable={false}
                      placeholder="Bichish "
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3.5 items-start justify-start ml-11 md:ml-[0]">
                  <Text
                    className="text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    Buyutma qoldiq ID
                  </Text>
                  <Text
                    className="text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    Taminotchiga
                  </Text>
                </div>
              </div>
            </div>
            <Text
              className="absolute bg-blue_gray-500 h-[25px] inset-x-[0] justify-center mx-auto pb-1 sm:px-5 px-[35px] text-base text-white-A700 top-[26%] w-max"
              size="txtRobotoMedium16WhiteA700"
            >
              Bichish kartasi
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default OmborBuyurtmalarroyhatiFourPage;
