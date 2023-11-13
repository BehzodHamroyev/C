import React from "react";

import { useNavigate } from "react-router-dom";

import { CheckBox, Img, Input, Line, List, SelectBox, Text } from "components";

const languageOneOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShowroomIshlabchiqarishdaOnePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div className="md:h-[3178px] sm:h-[899px] h-[900px] m-auto md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-end m-auto p-[21px] sm:px-5 w-full"
            style={{
              backgroundImage: "url('images/img_showroombuyurtmalar.png')",
            }}
          >
            <div className="flex md:flex-col flex-row md:gap-11 items-start justify-between mt-[7px] w-[98%] md:w-full">
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[82px] items-center justify-start md:mt-0 mt-[27px] w-[14%] md:w-full"
                style={{ backgroundImage: "url('images/img_group834.svg')" }}
              >
                <Img
                  className="h-[82px]"
                  src="images/img_group834.svg"
                  alt="group103"
                />
              </div>
              <div className="flex flex-col items-center justify-start w-[84%] md:w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[96%] md:w-full">
                  <div className="flex flex-row gap-[25px] items-end justify-between w-[29%] sm:w-full">
                    <Text
                      className="sm:text-[31px] md:text-[33px] text-[35px] text-gray-400"
                      size="txtRobotoMedium35"
                    >
                      SHOW ROOM{" "}
                    </Text>
                    <Text
                      className="mt-[13px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-500"
                      size="txtRobotoMedium23"
                    >
                      Andjon
                    </Text>
                  </div>
                  <div className="flex flex-row items-end justify-between w-[17%] sm:w-full">
                    <div className="h-[38px] relative w-[38px]">
                      <Img
                        className="h-[38px] m-auto rounded-[50%] w-[38px]"
                        src="images/img_il1588xn1_1.png"
                        alt="il1588xnOne"
                      />
                      <Img
                        className="absolute h-[38px] inset-[0] justify-center m-auto rounded-[50%] w-[38px]"
                        src="images/img_il1588xn2.png"
                        alt="il1588xnTwo"
                      />
                    </div>
                    <Text
                      className="mb-[3px] mt-[7px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-500"
                      size="txtRobotoMedium23"
                    >
                      Operator
                    </Text>
                    <Img
                      className="h-[7px] my-[15px]"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between mt-[22px] w-[99%] md:w-full">
                  <div className="bg-blue_gray-900_87 flex flex-col items-center justify-end p-[15px] rounded-[5px] w-[32%] md:w-full">
                    <div className="flex flex-col gap-[13px] justify-start w-[51%] md:w-full">
                      <div className="flex flex-col items-center justify-start ml-8 md:ml-[0]">
                        <Text
                          className="text-blue_gray-500 text-sm"
                          size="txtRobotoMedium14"
                        >
                          <>Oldindan to\&#96;lovalar</>
                        </Text>
                      </div>
                      <div className="flex flex-row items-end justify-evenly w-full">
                        <Text
                          className="sm:text-2xl md:text-[26px] text-[28px] text-light_green-400"
                          size="txtRobotoMedium28"
                        >
                          7 190 000
                        </Text>
                        <Text
                          className="mb-[3px] mt-[11px] text-[15px] text-light_green-400"
                          size="txtRobotoMedium15"
                        >
                          <>so\&#96;m</>
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue_gray-900_87 flex flex-col items-center justify-end p-[18px] rounded-[5px] w-[32%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[56%] md:w-full">
                      <div className="flex flex-col gap-[9px] justify-start w-full">
                        <Text
                          className="md:ml-[0] ml-[26px] text-blue_gray-500 text-sm"
                          size="txtRobotoMedium14"
                        >
                          Umumiy summa
                        </Text>
                        <div className="flex flex-row items-end justify-evenly w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-blue-400"
                            size="txtRobotoMedium28Blue400"
                          >
                            30 100 000
                          </Text>
                          <Text
                            className="mb-[3px] mt-[11px] text-[15px] text-blue-700"
                            size="txtRobotoMedium15Blue700"
                          >
                            <>so\&#96;m</>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue_gray-900_87 flex flex-col items-center justify-end p-[18px] rounded-[5px] w-[32%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[57%] md:w-full">
                      <div className="flex flex-col gap-[9px] items-center justify-start w-full">
                        <Text
                          className="text-blue_gray-500 text-sm"
                          size="txtRobotoMedium14"
                        >
                          <>To\&#96;lov qilnishi kerak</>
                        </Text>
                        <div className="flex flex-row items-end justify-evenly w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-red-300"
                            size="txtRobotoMedium28Red300"
                          >
                            22 910 000
                          </Text>
                          <Text
                            className="mb-[3px] mt-[11px] text-[15px] text-red-300"
                            size="txtRobotoMedium15Red300"
                          >
                            <>so\&#96;m</>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-start mt-[18px] py-[11px] rounded-[5px] w-full">
                  <div className="flex flex-col gap-[19px] items-center justify-start mb-3 w-full">
                    <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-[94%] md:w-full">
                      <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between w-[39%] sm:w-full">
                        <Img
                          className="h-[22px]"
                          src="images/img_refresh.svg"
                          alt="refresh"
                        />
                        <Input
                          name="group727"
                          placeholder="Izlash"
                          className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                          wrapClassName="border border-blue_gray-400_7e border-solid sm:w-full"
                          shape="round"
                          color="blue_gray_800_7e"
                          size="xl"
                          variant="fill"
                        ></Input>
                      </div>
                      <SelectBox
                        className="font-medium leading-[normal] sm:mt-0 my-1 text-base text-left w-[16%] sm:w-full"
                        placeholderClassName="text-gray-400"
                        indicator={
                          <Img
                            className="h-[3px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[7px]"
                            src="images/img_arrowdown_gray_400.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="language_One"
                        options={languageOneOptionsList}
                        isSearchable={false}
                        placeholder="Stasus "
                        shape="round"
                        color="blue_gray_800"
                        size="xs"
                        variant="fill"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-start w-full">
                      <Line className="bg-blue_gray-800_01 h-0.5 w-full" />
                      <div className="md:h-[2405px] h-[500px] sm:h-[511px] mt-[11px] relative w-full">
                        <div className="absolute md:h-[485px] h-[495px] inset-[0] justify-center m-auto w-full">
                          <div className="absolute flex flex-col gap-[21px] h-full inset-y-[0] justify-start my-auto right-[27%] w-[5%]">
                            <Text
                              className="text-[15px] text-blue_gray-500"
                              size="txtRobotoMedium15Bluegray500"
                            >
                              Status
                            </Text>
                            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[5px] w-[88%] md:w-full">
                              <div className="flex flex-col items-center justify-start w-full">
                                <div className="bg-red-300 h-3.5 rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-red-300"
                                  size="txtRobotoMedium8Red300"
                                >
                                  Bekor qilindi
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-3.5 w-full">
                                <div className="bg-red-300 h-3.5 rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-red-300"
                                  size="txtRobotoMedium8Red300"
                                >
                                  Bekor qilindi
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-[13px] w-full">
                                <div className="bg-red-300 h-3.5 rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-red-300"
                                  size="txtRobotoMedium8Red300"
                                >
                                  Bekor qilindi
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-[17px] w-full">
                                <div className="bg-red-300 h-3.5 rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-red-300"
                                  size="txtRobotoMedium8Red300"
                                >
                                  Bekor qilindi
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-[17px] w-full">
                                <div className="bg-red-300 h-3.5 rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-red-300"
                                  size="txtRobotoMedium8Red300"
                                >
                                  Bekor qilindi
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-[17px] w-full">
                                <div className="bg-red-300 h-3.5 rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-red-300"
                                  size="txtRobotoMedium8Red300"
                                >
                                  Bekor qilindi
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                                <div className="bg-red-300 h-3.5 rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-red-300"
                                  size="txtRobotoMedium8Red300"
                                >
                                  Bekor qilindi
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-[11px] w-full">
                                <div className="bg-red-300 h-3.5 rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-red-300"
                                  size="txtRobotoMedium8Red300"
                                >
                                  Bekor qilindi
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                                <div className="bg-red-300 h-3.5 rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-red-300"
                                  size="txtRobotoMedium8Red300"
                                >
                                  Bekor qilindi
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                                <div className="bg-red-300 h-3.5 rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-red-300"
                                  size="txtRobotoMedium8Red300"
                                >
                                  Bekor qilindi
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start mt-[15px] w-full">
                                <div className="bg-red-300 h-3.5 rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-red-300"
                                  size="txtRobotoMedium8Red300"
                                >
                                  Bekor qilindi
                                </Text>
                              </div>
                            </div>
                          </div>
                          <Text
                            className="absolute left-[5%] text-[15px] text-blue_gray-500 top-[0]"
                            size="txtRobotoMedium15Bluegray500"
                          >
                            Mijoz
                          </Text>
                          <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[6%] w-full" />
                          <div className="absolute md:h-[481px] h-[490px] inset-[0] justify-center m-auto w-full">
                            <div className="md:h-[481px] h-[490px] m-auto w-full">
                              <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[15%] w-full" />
                              <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[7%] w-[3%]">
                                <Text
                                  className="text-[15px] text-gray-400"
                                  size="txtRobotoMedium15Gray400"
                                >
                                  PDF
                                </Text>
                                <Img
                                  className="h-[19px] mt-6 w-[19px]"
                                  src="images/img_file_blue_gray_500.svg"
                                  alt="file"
                                />
                                <Img
                                  className="h-[19px] mt-[22px] w-[19px]"
                                  src="images/img_file_blue_gray_500.svg"
                                  alt="file_One"
                                />
                                <Img
                                  className="h-[19px] mt-6 w-[19px]"
                                  src="images/img_file_blue_gray_500.svg"
                                  alt="file_Two"
                                />
                                <Img
                                  className="h-[19px] mt-[22px] w-[19px]"
                                  src="images/img_file_blue_gray_500.svg"
                                  alt="file_Three"
                                />
                                <Img
                                  className="h-[19px] mt-[25px] w-[19px]"
                                  src="images/img_union.svg"
                                  alt="union"
                                />
                                <Img
                                  className="h-[19px] mt-[25px] w-[19px]"
                                  src="images/img_file_19x19.svg"
                                  alt="file_Four"
                                />
                                <Img
                                  className="h-[19px] mt-[23px] w-[19px]"
                                  src="images/img_file_19x19.svg"
                                  alt="file_Five"
                                />
                                <Img
                                  className="h-[19px] mt-5 w-[19px]"
                                  src="images/img_file_19x19.svg"
                                  alt="file_Six"
                                />
                                <Img
                                  className="h-[19px] mt-[23px] w-[19px]"
                                  src="images/img_file_19x19.svg"
                                  alt="file_Seven"
                                />
                                <Img
                                  className="h-[19px] mt-[23px] w-[19px]"
                                  src="images/img_file_19x19.svg"
                                  alt="file_Eight"
                                />
                                <Img
                                  className="h-[19px] mt-[23px] w-[19px]"
                                  src="images/img_file_19x19.svg"
                                  alt="file_Nine"
                                />
                              </div>
                            </div>
                            <Img
                              className="absolute h-px inset-x-[0] mx-auto top-[24%]"
                              src="images/img_group90.svg"
                              alt="groupNinety"
                            />
                            <Img
                              className="absolute h-px inset-x-[0] mx-auto top-[32%]"
                              src="images/img_group90.svg"
                              alt="groupNinetyOne"
                            />
                            <Img
                              className="absolute h-px inset-x-[0] mx-auto top-[41%]"
                              src="images/img_group90.svg"
                              alt="groupNinetyTwo"
                            />
                            <Img
                              className="absolute bottom-[24%] h-[42px] inset-x-[0] mx-auto"
                              src="images/img_group92.svg"
                              alt="group102"
                            />
                            <Img
                              className="absolute bottom-[40%] h-[42px] inset-x-[0] mx-auto"
                              src="images/img_group92.svg"
                              alt="group569"
                            />
                            <Img
                              className="absolute bottom-[15%] h-px inset-x-[0] mx-auto"
                              src="images/img_group90.svg"
                              alt="groupNinetySeven"
                            />
                            <Img
                              className="absolute bottom-[6%] h-px inset-x-[0] mx-auto"
                              src="images/img_group90.svg"
                              alt="groupNinetyEight"
                            />
                          </div>
                        </div>
                        <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[2%] my-auto w-[83%]">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                              <Img
                                className="h-[433px] md:mt-0 mt-[50px]"
                                src="images/img_group565.svg"
                                alt="group565"
                              />
                              <div className="flex flex-col items-start justify-start md:ml-[0] ml-[19px] md:mt-0 mt-[43px]">
                                <Text
                                  className="text-[15px] text-blue-700"
                                  size="txtRobotoMedium15Blue700"
                                >
                                  Botir Qodirov
                                </Text>
                                <Text
                                  className="mt-[23px] text-[15px] text-blue-700"
                                  size="txtRobotoMedium15Blue700"
                                >
                                  Sobir Ikromov
                                </Text>
                                <Text
                                  className="mt-6 text-[15px] text-blue-700"
                                  size="txtRobotoMedium15Blue700"
                                >
                                  <>Maftuna To\&#96;lanboyeva</>
                                </Text>
                                <Text
                                  className="mt-[26px] text-[15px] text-blue-700"
                                  size="txtRobotoMedium15Blue700"
                                >
                                  Nodir Fayziyev
                                </Text>
                                <Text
                                  className="mt-[25px] text-[15px] text-blue-700"
                                  size="txtRobotoMedium15Blue700"
                                >
                                  Fahriddin Mahmudov
                                </Text>
                                <Text
                                  className="mt-[26px] text-[15px] text-blue-700"
                                  size="txtRobotoMedium15Blue700"
                                >
                                  Shukurillo Avdusalomov
                                </Text>
                                <Text
                                  className="mt-6 text-[15px] text-blue-700"
                                  size="txtRobotoMedium15Blue700"
                                >
                                  Saida Komilova
                                </Text>
                                <Text
                                  className="mt-[21px] text-[15px] text-blue-700"
                                  size="txtRobotoMedium15Blue700"
                                >
                                  Shukurillo Avdusalomov
                                </Text>
                                <Text
                                  className="mt-6 text-[15px] text-blue-700"
                                  size="txtRobotoMedium15Blue700"
                                >
                                  Saida Komilova
                                </Text>
                                <Text
                                  className="mt-6 text-[15px] text-blue-700"
                                  size="txtRobotoMedium15Blue700"
                                >
                                  Mohira Abdumalikov
                                </Text>
                                <Text
                                  className="mt-[26px] text-[15px] text-blue-400"
                                  size="txtRobotoMedium15Blue400"
                                >
                                  Umarjon Mahkamjonov
                                </Text>
                              </div>
                              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[85px] md:mt-0 mt-[3px] w-[11%] md:w-full">
                                <div className="flex flex-col items-center justify-start w-full">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex flex-col items-start justify-start w-full">
                                      <Text
                                        className="text-[15px] text-blue_gray-500"
                                        size="txtRobotoMedium15Bluegray500"
                                      >
                                        Loyiha nomeri
                                      </Text>
                                      <div className="flex flex-row gap-3 items-center justify-start mt-[21px] w-[84%] md:w-full">
                                        <Img
                                          className="h-[18px] md:h-auto object-cover w-[21%]"
                                          src="images/img_.png"
                                          alt="FiftyTwo"
                                        />
                                        <Text
                                          className="text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          120003
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-3 items-center justify-start mt-[23px] w-[85%] md:w-full">
                                        <Img
                                          className="h-[18px] md:h-auto object-cover w-1/5"
                                          src="images/img_.png"
                                          alt="FiftyThree"
                                        />
                                        <Text
                                          className="text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          120002
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-3 items-center justify-start mt-[23px] w-[85%] md:w-full">
                                        <Img
                                          className="h-[18px] md:h-auto object-cover w-1/5"
                                          src="images/img_.png"
                                          alt="FiftyFour"
                                        />
                                        <Text
                                          className="text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          120002
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-3 items-center justify-start mt-[26px] w-[82%] md:w-full">
                                        <Img
                                          className="h-[18px] md:h-auto object-cover w-[21%]"
                                          src="images/img_.png"
                                          alt="FiftyFive"
                                        />
                                        <Text
                                          className="text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          120001
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-3 items-center justify-start mt-[26px] w-[84%] md:w-full">
                                        <Img
                                          className="h-[18px] md:h-auto object-cover w-[21%]"
                                          src="images/img_.png"
                                          alt="FiftySix"
                                        />
                                        <Text
                                          className="text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          119999
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-3 items-center justify-start mt-[26px] w-[85%] md:w-full">
                                        <Img
                                          className="h-[18px] md:h-auto object-cover w-1/5"
                                          src="images/img_.png"
                                          alt="FiftySeven"
                                        />
                                        <Text
                                          className="text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          119996
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-3 items-center justify-start mt-6 w-[85%] md:w-full">
                                        <Img
                                          className="h-[18px] md:h-auto object-cover w-1/5"
                                          src="images/img_.png"
                                          alt="FiftyEight"
                                        />
                                        <Text
                                          className="text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          119997
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-3 items-center justify-start mt-[21px] w-[85%] md:w-full">
                                        <Img
                                          className="h-[18px] md:h-auto object-cover w-1/5"
                                          src="images/img_.png"
                                          alt="FiftyNine"
                                        />
                                        <Text
                                          className="text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          119996
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-3 items-center justify-start mt-6 w-[85%] md:w-full">
                                        <Img
                                          className="h-[18px] md:h-auto object-cover w-1/5"
                                          src="images/img_.png"
                                          alt="Sixty"
                                        />
                                        <Text
                                          className="text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          119997
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-3 items-center justify-start mt-6 w-[85%] md:w-full">
                                        <Img
                                          className="h-[18px] md:h-auto object-cover w-1/5"
                                          src="images/img_.png"
                                          alt="SixtyOne"
                                        />
                                        <Text
                                          className="text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          119996
                                        </Text>
                                      </div>
                                      <div className="flex flex-row gap-3 items-center justify-start mt-6 w-[85%] md:w-full">
                                        <Img
                                          className="h-[18px] md:h-auto object-cover w-1/5"
                                          src="images/img_.png"
                                          alt="SixtyTwo"
                                        />
                                        <Text
                                          className="text-[15px] text-gray-400"
                                          size="txtRobotoMedium15Gray400"
                                        >
                                          119995
                                        </Text>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[88px] w-[14%] md:w-full">
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="ml-0.5 md:ml-[0] text-[15px] text-blue_gray-500"
                                    size="txtRobotoMedium15Bluegray500"
                                  >
                                    Manzili
                                  </Text>
                                  <Text
                                    className="mt-4 text-[10px] text-blue_gray-500"
                                    size="txtRobotoMedium10"
                                  >
                                    Jalaquduq
                                  </Text>
                                  <Text
                                    className="text-[10px] text-gray-400"
                                    size="txtRobotoMedium10Gray400"
                                  >
                                    <>
                                      Yangisor Qorasuv ko\&#96;cha <br />№ 77 uy
                                    </>
                                  </Text>
                                  <Text
                                    className="mt-1 text-[10px] text-blue_gray-500"
                                    size="txtRobotoMedium10"
                                  >
                                    <>Xo\&#96;jaobod</>
                                  </Text>
                                  <Text
                                    className="text-[10px] text-gray-400"
                                    size="txtRobotoMedium10Gray400"
                                  >
                                    <>
                                      Yettichinor Jome ko\&#96;cha <br />№ 125
                                      uy
                                    </>
                                  </Text>
                                  <Text
                                    className="mt-[3px] text-[10px] text-blue_gray-500"
                                    size="txtRobotoMedium10"
                                  >
                                    Qorasuv
                                  </Text>
                                  <Text
                                    className="text-[10px] text-gray-400"
                                    size="txtRobotoMedium10Gray400"
                                  >
                                    <>
                                      Obodon Toshloq ko\&#96;cha <br />№ 35 uy
                                    </>
                                  </Text>
                                  <Text
                                    className="mt-[7px] text-[10px] text-blue_gray-500"
                                    size="txtRobotoMedium10"
                                  >
                                    Andijon
                                  </Text>
                                  <Text
                                    className="text-[10px] text-gray-400"
                                    size="txtRobotoMedium10Gray400"
                                  >
                                    <>
                                      Yangi bozor Oripov ko\&#96;cha <br />№ 81
                                      uy{" "}
                                    </>
                                  </Text>
                                  <Text
                                    className="mt-[7px] text-[10px] text-blue_gray-500"
                                    size="txtRobotoMedium10"
                                  >
                                    Andijon
                                  </Text>
                                  <Text
                                    className="text-[10px] text-gray-400"
                                    size="txtRobotoMedium10Gray400"
                                  >
                                    <>
                                      Yangi bozor Oripov ko\&#96;cha <br />№ 88
                                      uy{" "}
                                    </>
                                  </Text>
                                  <Text
                                    className="mt-1.5 text-[10px] text-blue_gray-500"
                                    size="txtRobotoMedium10"
                                  >
                                    Shahrixon
                                  </Text>
                                  <Text
                                    className="mt-0.5 text-[10px] text-gray-400"
                                    size="txtRobotoMedium10Gray400"
                                  >
                                    <>
                                      Yodgorov ko\&#96;cha <br />№ 15 uy
                                    </>
                                  </Text>
                                  <Text
                                    className="mt-[5px] text-[10px] text-blue_gray-500"
                                    size="txtRobotoMedium10"
                                  >
                                    Andijon
                                  </Text>
                                  <Text
                                    className="text-[10px] text-gray-400"
                                    size="txtRobotoMedium10Gray400"
                                  >
                                    <>
                                      Oliygoh ko\&#96;cha <br />№ 3 uy
                                    </>
                                  </Text>
                                  <Text
                                    className="text-[10px] text-blue_gray-500"
                                    size="txtRobotoMedium10"
                                  >
                                    Shahrixon
                                  </Text>
                                  <Text
                                    className="mt-0.5 text-[10px] text-gray-400"
                                    size="txtRobotoMedium10Gray400"
                                  >
                                    <>
                                      Yodgorov ko\&#96;cha <br />№ 15 uy
                                    </>
                                  </Text>
                                  <Text
                                    className="mt-[5px] text-[10px] text-blue_gray-500"
                                    size="txtRobotoMedium10"
                                  >
                                    Andijon
                                  </Text>
                                  <Text
                                    className="text-[10px] text-gray-400"
                                    size="txtRobotoMedium10Gray400"
                                  >
                                    <>
                                      Oliygoh ko\&#96;cha <br />№ 3 uy
                                    </>
                                  </Text>
                                  <Text
                                    className="mt-[5px] text-[10px] text-blue_gray-500"
                                    size="txtRobotoMedium10"
                                  >
                                    <>Xo\&#96;jaobod</>
                                  </Text>
                                  <Text
                                    className="text-[10px] text-gray-400"
                                    size="txtRobotoMedium10Gray400"
                                  >
                                    <>
                                      Yettichinor Jome ko\&#96;cha <br />№ 125
                                      uy
                                    </>
                                  </Text>
                                  <Text
                                    className="mt-[5px] text-[10px] text-blue_gray-500"
                                    size="txtRobotoMedium10"
                                  >
                                    Andijon
                                  </Text>
                                  <Text
                                    className="text-[10px] text-gray-400"
                                    size="txtRobotoMedium10Gray400"
                                  >
                                    <>
                                      Yodgorov ko\&#96;cha <br />№ 15 uy
                                    </>
                                  </Text>
                                </div>
                              </div>
                              <List
                                className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-32 grid grid-cols-2 md:ml-[0] ml-[34px] w-[34%] md:w-full"
                                orientation="horizontal"
                              >
                                <div className="flex flex-col items-start justify-start w-full">
                                  <Text
                                    className="ml-0.5 md:ml-[0] text-[15px] text-blue_gray-500"
                                    size="txtRobotoMedium15Bluegray500"
                                  >
                                    <>O\&#96;lchovchi</>
                                  </Text>
                                  <Text
                                    className="mt-[26px] text-gray-400 text-xs"
                                    size="txtRobotoMedium12"
                                  >
                                    Abbos Zokirov
                                  </Text>
                                  <Text
                                    className="mt-[27px] text-gray-400 text-xs"
                                    size="txtRobotoMedium12"
                                  >
                                    Alisher Odilov
                                  </Text>
                                  <Text
                                    className="mt-7 text-gray-400 text-xs"
                                    size="txtRobotoMedium12"
                                  >
                                    Alisher Odilov
                                  </Text>
                                  <Text
                                    className="mt-7 text-gray-400 text-xs"
                                    size="txtRobotoMedium12"
                                  >
                                    Begzod Eraliyev
                                  </Text>
                                  <Text
                                    className="mt-[29px] text-gray-400 text-xs"
                                    size="txtRobotoMedium12"
                                  >
                                    Mansur Ergashev
                                  </Text>
                                  <Text
                                    className="mt-[29px] text-gray-400 text-xs"
                                    size="txtRobotoMedium12"
                                  >
                                    Mehriddin Abdullayev
                                  </Text>
                                  <Text
                                    className="mt-[26px] text-gray-400 text-xs"
                                    size="txtRobotoMedium12"
                                  >
                                    Fahriddin Mahmudov
                                  </Text>
                                  <Text
                                    className="mt-[25px] text-gray-400 text-xs"
                                    size="txtRobotoMedium12"
                                  >
                                    Mehriddin Abdullayev
                                  </Text>
                                  <Text
                                    className="mt-[26px] text-gray-400 text-xs"
                                    size="txtRobotoMedium12"
                                  >
                                    Fahriddin Mahmudov
                                  </Text>
                                  <Text
                                    className="mt-[27px] text-gray-400 text-xs"
                                    size="txtRobotoMedium12"
                                  >
                                    Fahriddin Mahmudov
                                  </Text>
                                  <Text
                                    className="mt-[27px] text-gray-400 text-xs"
                                    size="txtRobotoMedium12"
                                  >
                                    Zuhra Ashurova
                                  </Text>
                                </div>
                                <div className="flex flex-col items-start justify-start w-full">
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
                                  <Text
                                    className="mt-[29px] text-blue_gray-500 text-xs"
                                    size="txtRobotoMedium12Bluegray500"
                                  >
                                    Sen 13. 2022
                                  </Text>
                                  <Text
                                    className="mt-[27px] text-blue_gray-500 text-xs"
                                    size="txtRobotoMedium12Bluegray500"
                                  >
                                    Sen 13. 2022
                                  </Text>
                                  <Text
                                    className="mt-6 text-blue_gray-500 text-xs"
                                    size="txtRobotoMedium12Bluegray500"
                                  >
                                    Sen 13. 2022
                                  </Text>
                                  <Text
                                    className="mt-[27px] text-blue_gray-500 text-xs"
                                    size="txtRobotoMedium12Bluegray500"
                                  >
                                    Sen 13. 2022
                                  </Text>
                                  <Text
                                    className="mt-[29px] text-blue_gray-500 text-xs"
                                    size="txtRobotoMedium12Bluegray500"
                                  >
                                    Sen 13. 2022
                                  </Text>
                                  <Text
                                    className="mt-[26px] text-blue_gray-500 text-xs"
                                    size="txtRobotoMedium12Bluegray500"
                                  >
                                    Sen 13. 2022
                                  </Text>
                                </div>
                              </List>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Img
                        className="h-px mt-[3px]"
                        src="images/img_group90.svg"
                        alt="groupNinetyNine"
                      />
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[31px] items-end justify-start mt-[26px] w-[33%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group71.svg')",
                        }}
                      >
                        <div className="flex flex-row items-start justify-end mb-0.5 mr-[9px] w-[85%] md:w-full">
                          <Text
                            className="mt-[5px] text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            1
                          </Text>
                          <Text
                            className="ml-[31px] mt-[5px] text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            2
                          </Text>
                          <Text
                            className="ml-[30px] mt-[5px] text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            3
                          </Text>
                          <Text
                            className="ml-[30px] mt-[5px] text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            4
                          </Text>
                          <Text
                            className="ml-[29px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
                            size="txtRobotoMedium22"
                          >
                            5
                          </Text>
                          <Text
                            className="ml-[29px] mt-[5px] text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            6
                          </Text>
                          <Text
                            className="ml-[30px] mt-1.5 text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            7
                          </Text>
                          <Text
                            className="ml-[29px] mt-1.5 text-gray-400 text-sm"
                            size="txtRobotoMedium14Gray400"
                          >
                            8
                          </Text>
                          <Img
                            className="h-[9px] ml-8 mt-[9px]"
                            src="images/img_line3.svg"
                            alt="lineThree"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bg-blue_gray-800_7e flex flex-col justify-end left-[0] py-3 top-[30%] w-1/5">
            <div className="flex flex-row gap-[30px] items-center justify-end md:ml-[0] ml-[42px] mr-[26px] mt-1 w-[76%] md:w-full">
              <CheckBox
                className="font-medium leading-[normal] sm:pl-5 text-base text-left uppercase"
                inputClassName="h-[18px] mr-[5px] w-[18px]"
                name="buyurtmalar"
                id="buyurtmalar"
                label="BUYURTMALAR"
                size="sm"
              ></CheckBox>
              <Img
                className="h-1"
                src="images/img_line49.svg"
                alt="lineFortyNine"
              />
            </div>
            <div className="flex flex-col gap-[23px] items-start justify-start md:ml-[0] ml-[87px] mr-[37px] mt-[33px]">
              <Text
                className="text-blue_gray-500 text-sm"
                size="txtRobotoMedium14"
              >
                Yangi buyurtma yaratish
              </Text>
              <Text
                className="text-blue_gray-500 text-sm"
                size="txtRobotoMedium14"
              >
                Tasdiqlangan
              </Text>
            </div>
            <div className="h-[60px] md:h-[72px] mt-3 relative w-full">
              <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-center justify-center m-auto p-5 w-full">
                <Text
                  className="text-sm text-white-A700"
                  size="txtRobotoMedium14WhiteA700"
                >
                  Bekor qilinganlar
                </Text>
              </div>
              <Img
                className="absolute h-[60px] inset-y-[0] left-[0] my-auto object-cover w-[5%]"
                src="images/img_rectangle1564_4.png"
                alt="rectangle1564"
              />
            </div>
            <Text
              className="common-pointer md:ml-[0] ml-[86px] mr-[77px] mt-[15px] text-blue_gray-500 text-sm"
              size="txtRobotoMedium14"
              onClick={() => navigate("/showroombuyurtmalartarixi")}
            >
              Buyurtmalar tarixi
            </Text>
          </div>
        </div>
        <div className="absolute flex flex-col items-start justify-start left-[3%] md:px-5 top-[26%] w-[15%]">
          <div className="flex flex-row gap-[18px] items-start justify-start w-3/5 md:w-full">
            <Img
              className="h-6 w-6"
              src="images/img_icoutlineshop.svg"
              alt="icoutlineshop"
            />
            <Text
              className="mt-1 text-blue_gray-500 text-sm"
              size="txtRobotoMedium14"
            >
              DASHBOARD
            </Text>
          </div>
          <div className="flex flex-row gap-5 items-center justify-start mt-[277px] w-[86%] md:w-full">
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
          <div className="flex flex-row items-start justify-between mt-[30px] w-full">
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
              alt="lineFortyNine_One"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowroomIshlabchiqarishdaOnePage;
