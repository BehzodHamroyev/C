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
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const statusOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShowroomBuyurtmalartarixiPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div className="md:h-[4050px] sm:h-[899px] h-[900px] m-auto md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-end m-auto p-[23px] sm:px-5 w-full"
            style={{
              backgroundImage: "url('images/img_showroombuyurtmalar.png')",
            }}
          >
            <div className="flex md:flex-col flex-row md:gap-11 items-start justify-between mt-[5px] w-[97%] md:w-full">
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
              <div className="flex flex-col items-start justify-start w-[84%] md:w-full">
                <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between md:ml-[0] ml-[3px] w-[98%] md:w-full">
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
                <FrameFiftyTwoDatafiltr className="flex md:flex-col flex-row gap-[17px] items-center justify-start ml-1.5 md:ml-[0] mt-7 w-[64%] md:w-full" />
                <div className="md:h-[3719px] h-[720px] sm:h-[815px] mt-6 relative w-full">
                  <div className="absolute bg-blue_gray-900_87_01 flex flex-col h-full inset-[0] items-center justify-center m-auto p-4 rounded-[5px] w-full">
                    <div className="flex flex-col justify-start mb-1.5 w-[98%] md:w-full">
                      <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between w-full">
                        <div className="flex sm:flex-1 sm:flex-col flex-row gap-[21px] items-center justify-between w-[39%] sm:w-full">
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
                          className="sm:flex-1 font-medium leading-[normal] sm:mt-0 my-1 text-base text-left w-[16%] sm:w-full"
                          placeholderClassName="text-gray-400"
                          indicator={
                            <Img
                              className="h-[3px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[7px]"
                              src="images/img_arrowdown_gray_400.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group642"
                          options={statusOptionsList}
                          isSearchable={false}
                          placeholder="Status"
                          shape="round"
                          color="blue_gray_800"
                          size="xs"
                          variant="fill"
                        />
                      </div>
                      <Text
                        className="md:ml-[0] ml-[31px] mt-[27px] text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Mijoz
                      </Text>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col h-[31px] items-end justify-start md:ml-[0] ml-[350px] mt-[562px] w-[35%] md:w-full"
                        style={{
                          backgroundImage: "url('images/img_group71.svg')",
                        }}
                      >
                        <div className="flex flex-row items-start justify-end mb-0.5 mr-2 w-[85%] md:w-full">
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
                            className="ml-7 mt-[5px] text-gray-400 text-sm"
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
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[16%] w-full" />
                  <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[10%] w-full" />
                  <div className="absolute md:h-[523px] h-[533px] inset-[0] justify-center m-auto w-full">
                    <div className="md:h-[523px] h-[533px] m-auto w-full">
                      <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[14%] w-full" />
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[7%] w-[3%]">
                        <Text
                          className="text-[15px] text-gray-400"
                          size="txtRobotoMedium15Gray400"
                        >
                          PDF
                        </Text>
                        <Img
                          className="h-[19px] mt-6 w-[19px]"
                          src="images/img_file.svg"
                          alt="file"
                        />
                        <Img
                          className="h-[19px] mt-[22px] w-[19px]"
                          src="images/img_file.svg"
                          alt="file_One"
                        />
                        <Img
                          className="h-[19px] mt-6 w-[19px]"
                          src="images/img_file.svg"
                          alt="file_Two"
                        />
                        <Img
                          className="h-[19px] mt-[22px] w-[19px]"
                          src="images/img_file.svg"
                          alt="file_Three"
                        />
                        <Img
                          className="h-[19px] mt-[25px] w-[19px]"
                          src="images/img_file.svg"
                          alt="file_Four"
                        />
                        <Img
                          className="h-[19px] mt-[23px] w-[19px]"
                          src="images/img_file.svg"
                          alt="file_Five"
                        />
                        <Img
                          className="h-[19px] mt-[23px] w-[19px]"
                          src="images/img_file.svg"
                          alt="file_Six"
                        />
                        <Img
                          className="h-[19px] mt-[22px] w-[19px]"
                          src="images/img_file.svg"
                          alt="file_Seven"
                        />
                        <Img
                          className="h-[19px] mt-[23px] w-[19px]"
                          src="images/img_file.svg"
                          alt="file_Eight"
                        />
                        <Img
                          className="h-[19px] mt-[23px] w-[19px]"
                          src="images/img_file.svg"
                          alt="file_Nine"
                        />
                        <Img
                          className="h-[19px] mt-[23px] w-[19px]"
                          src="images/img_file.svg"
                          alt="file_Ten"
                        />
                        <Img
                          className="h-[19px] mt-[23px] w-[19px]"
                          src="images/img_file.svg"
                          alt="file_Eleven"
                        />
                      </div>
                    </div>
                    <Img
                      className="absolute h-px inset-x-[0] mx-auto top-[22%]"
                      src="images/img_group90.svg"
                      alt="groupNinety"
                    />
                    <Img
                      className="absolute h-px inset-x-[0] mx-auto top-[30%]"
                      src="images/img_group90.svg"
                      alt="groupNinetyOne"
                    />
                    <Img
                      className="absolute h-px inset-x-[0] mx-auto top-[38%]"
                      src="images/img_group90.svg"
                      alt="groupNinetyTwo"
                    />
                    <Img
                      className="absolute h-px inset-x-[0] mx-auto top-[46%]"
                      src="images/img_group90.svg"
                      alt="group103_One"
                    />
                    <Img
                      className="absolute bottom-[46%] h-px inset-x-[0] mx-auto"
                      src="images/img_group90.svg"
                      alt="group104"
                    />
                    <Img
                      className="absolute bottom-[30%] h-[42px] inset-x-[0] mx-auto"
                      src="images/img_group92.svg"
                      alt="group102"
                    />
                    <Img
                      className="absolute bottom-[22%] h-px inset-x-[0] mx-auto"
                      src="images/img_group90.svg"
                      alt="groupNinetySeven"
                    />
                    <Img
                      className="absolute bottom-[14%] h-px inset-x-[0] mx-auto"
                      src="images/img_group90.svg"
                      alt="groupNinetyEight"
                    />
                    <Img
                      className="absolute bottom-[6%] h-px inset-x-[0] mx-auto"
                      src="images/img_group90.svg"
                      alt="groupNinetyNine"
                    />
                  </div>
                  <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                    <div className="flex flex-col justify-start w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:ml-[0] ml-[23px] w-[83%] md:w-full">
                        <div className="flex flex-col items-center justify-start md:mt-0 mt-[50px] w-[1%] md:w-full">
                          <Img
                            className="h-[5px]"
                            src="images/img_line4.svg"
                            alt="lineFour"
                          />
                          <Img
                            className="h-[5px] mt-9"
                            src="images/img_line4.svg"
                            alt="lineFour_One"
                          />
                          <Img
                            className="h-[5px] mt-9"
                            src="images/img_line4.svg"
                            alt="lineFour_Two"
                          />
                          <Img
                            className="h-[5px] mt-[39px]"
                            src="images/img_line4.svg"
                            alt="lineFour_Three"
                          />
                          <Img
                            className="h-[5px] mt-[39px]"
                            src="images/img_line4.svg"
                            alt="lineFour_Four"
                          />
                          <Img
                            className="h-[5px] mt-[37px]"
                            src="images/img_line4.svg"
                            alt="lineFive"
                          />
                          <Img
                            className="h-[5px] mt-[37px]"
                            src="images/img_line4.svg"
                            alt="lineSix"
                          />
                          <Img
                            className="h-[5px] mt-9"
                            src="images/img_line4.svg"
                            alt="lineFour_Five"
                          />
                          <Img
                            className="h-[5px] mt-[37px]"
                            src="images/img_line4.svg"
                            alt="lineFour_Six"
                          />
                          <Img
                            className="h-[5px] mt-[37px]"
                            src="images/img_line4.svg"
                            alt="lineFour_Seven"
                          />
                          <Img
                            className="h-[5px] mt-[37px]"
                            src="images/img_line4.svg"
                            alt="lineFour_Eight"
                          />
                          <Img
                            className="h-[5px] mt-[37px]"
                            src="images/img_line4.svg"
                            alt="lineFour_Nine"
                          />
                        </div>
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
                            className="mt-6 text-[15px] text-blue-700"
                            size="txtRobotoMedium15Blue700"
                          >
                            Fahriddin Mahmudov
                          </Text>
                          <Text
                            className="mt-6 text-[15px] text-blue-700"
                            size="txtRobotoMedium15Blue700"
                          >
                            Fahriddin Mahmudov
                          </Text>
                          <Text
                            className="mt-[23px] text-[15px] text-blue-700"
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
                          <Text
                            className="mt-6 text-[15px] text-blue-700"
                            size="txtRobotoMedium15Blue700"
                          >
                            Salohiddin Mahkamjonov
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[70px] md:mt-0 mt-[3px] w-[11%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex flex-col items-start justify-start w-full">
                                <Text
                                  className="text-[15px] text-blue_gray-500"
                                  size="txtRobotoMedium15Bluegray500"
                                >
                                  Loyiha nomeri
                                </Text>
                                <div className="flex flex-row gap-3 items-center justify-start mt-[21px] w-[85%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="SixtyThree"
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
                                    alt="SixtyFour"
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
                                    alt="SixtyFive"
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
                                    alt="SixtySix"
                                  />
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    120001
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start mt-[26px] w-[85%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="SixtySeven"
                                  />
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    119905
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start mt-6 w-[85%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="SixtyEight"
                                  />
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    119999
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start mt-6 w-[85%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="SixtyNine"
                                  />
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    119998
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start mt-[23px] w-[85%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="Seventy"
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
                                    alt="SeventyOne"
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
                                    alt="SeventyTwo"
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
                                    alt="SeventyThree"
                                  />
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    119995
                                  </Text>
                                </div>
                                <div className="flex flex-row gap-3 items-center justify-start mt-6 w-[85%] md:w-full">
                                  <Img
                                    className="h-[18px] md:h-auto object-cover w-1/5"
                                    src="images/img_.png"
                                    alt="SeventyFour"
                                  />
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoMedium15Gray400"
                                  >
                                    120004
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start md:ml-[0] ml-[85px] w-[14%] md:w-full">
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
                                Yettichinor Jome ko\&#96;cha <br />№ 125 uy
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
                                Yangi bozor Oripov ko\&#96;cha <br />№ 81 uy{" "}
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
                                Yangi bozor Oripov ko\&#96;cha <br />№ 88 uy{" "}
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
                                Yangi bozor Oripov ko\&#96;cha <br />№ 88 uy{" "}
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
                                Yangi bozor Oripov ko\&#96;cha <br />№ 88 uy{" "}
                              </>
                            </Text>
                            <Text
                              className="mt-[3px] text-[10px] text-blue_gray-500"
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
                                Yettichinor Jome ko\&#96;cha <br />№ 125 uy
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
                            <Text
                              className="mt-1 text-[10px] text-blue_gray-500"
                              size="txtRobotoMedium10"
                            >
                              Shahrixon
                            </Text>
                            <Text
                              className="mt-0.5 text-[10px] text-gray-400"
                              size="txtRobotoMedium10Gray400"
                            >
                              <>
                                Oliygoh ko\&#96;cha <br />№ 3 uy
                              </>
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start md:ml-[0] ml-[33px]">
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
                            className="mt-[27px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            ----------------------------
                          </Text>
                          <Text
                            className="mt-[30px] text-gray-400 text-xs"
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
                            className="mt-[27px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Mansur Ergashev
                          </Text>
                          <Text
                            className="mt-[27px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Mansur Ergashev
                          </Text>
                          <Text
                            className="mt-[26px] text-gray-400 text-xs"
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
                            className="mt-7 text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            ----------------------------
                          </Text>
                          <Text
                            className="mt-[27px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Zuhra Ashurova
                          </Text>
                          <Text
                            className="mt-[27px] text-gray-400 text-xs"
                            size="txtRobotoMedium12"
                          >
                            Fotima Mahkamova
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start ml-8 md:ml-[0] w-[5%] md:w-full">
                          <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex flex-col items-end justify-start w-full">
                              <Text
                                className="mr-0.5 text-[15px] text-blue_gray-500"
                                size="txtRobotoMedium15Bluegray500"
                              >
                                Status
                              </Text>
                              <div className="bg-light_green-400_01 h-3.5 mr-[15px] mt-[21px] rounded-[50%] w-3.5"></div>
                              <div className="flex flex-col items-start justify-start mt-[3px] w-[90%] md:w-full">
                                <Text
                                  className="text-[8px] text-light_green-700"
                                  size="txtRobotoMedium8"
                                >
                                  Jarayonda
                                </Text>
                                <div className="bg-light_green-400 h-3.5 md:ml-[0] ml-[11px] mt-3.5 rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-light_green-700"
                                  size="txtRobotoMedium8"
                                >
                                  Jarayonda
                                </Text>
                                <div className="bg-orange-300 h-3.5 md:ml-[0] ml-[11px] mt-[13px] rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-lime-700"
                                  size="txtRobotoMedium8Lime700"
                                >
                                  Kutilmoqda
                                </Text>
                                <div className="bg-light_green-400_01 h-3.5 md:ml-[0] ml-[11px] mt-[17px] rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-light_green-700"
                                  size="txtRobotoMedium8"
                                >
                                  Jarayonda
                                </Text>
                                <div className="bg-light_green-400_01 h-3.5 md:ml-[0] ml-[11px] mt-[17px] rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-light_green-700"
                                  size="txtRobotoMedium8"
                                >
                                  Jarayonda
                                </Text>
                                <div className="bg-light_green-400_01 h-3.5 md:ml-[0] ml-[11px] mt-[15px] rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-light_green-700"
                                  size="txtRobotoMedium8"
                                >
                                  Jarayonda
                                </Text>
                                <div className="bg-light_green-400_01 h-3.5 md:ml-[0] ml-[11px] mt-[15px] rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-light_green-700"
                                  size="txtRobotoMedium8"
                                >
                                  Jarayonda
                                </Text>
                                <div className="bg-light_green-400_01 h-3.5 md:ml-[0] ml-[11px] mt-3.5 rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-light_green-700"
                                  size="txtRobotoMedium8"
                                >
                                  Jarayonda
                                </Text>
                                <div className="bg-light_green-400 h-3.5 md:ml-[0] ml-[11px] mt-[15px] rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-light_green-700"
                                  size="txtRobotoMedium8"
                                >
                                  Jarayonda
                                </Text>
                                <div className="bg-orange-300 h-3.5 md:ml-[0] ml-[11px] mt-[15px] rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-lime-700"
                                  size="txtRobotoMedium8Lime700"
                                >
                                  Kutilmoqda
                                </Text>
                                <div className="bg-light_green-400_01 h-3.5 md:ml-[0] ml-[11px] mt-[15px] rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-light_green-700"
                                  size="txtRobotoMedium8"
                                >
                                  Jarayonda
                                </Text>
                                <div className="bg-light_green-400_01 h-3.5 md:ml-[0] ml-[11px] mt-[15px] rounded-[50%] w-3.5"></div>
                                <Text
                                  className="mt-[3px] text-[8px] text-light_green-700"
                                  size="txtRobotoMedium8"
                                >
                                  Jarayonda
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start ml-11 md:ml-[0]">
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
                            className="mt-[27px] text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            Sen 12. 2022
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
                            Sen 13. 2022
                          </Text>
                          <Text
                            className="mt-[27px] text-blue_gray-500 text-xs"
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
                            className="mt-[27px] text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            Sen 13. 2022
                          </Text>
                          <Text
                            className="mt-[27px] text-blue_gray-500 text-xs"
                            size="txtRobotoMedium12Bluegray500"
                          >
                            Sen 14. 2022
                          </Text>
                        </div>
                      </div>
                      <Line className="bg-blue_gray-800_03 h-0.5 mt-[3px] w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute md:h-[236px] h-[238px] left-[0] top-[31%] w-1/5">
            <div className="bg-blue_gray-800_7e flex flex-col gap-[31px] h-full justify-start m-auto p-3.5 w-full">
              <div className="flex flex-row gap-[30px] items-center justify-end md:ml-[0] ml-[27px] mr-[11px] w-[84%] md:w-full">
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
              <div className="flex flex-col items-start justify-start mb-[68px] md:ml-[0] ml-[71px]">
                <Text
                  className="text-blue_gray-500 text-sm"
                  size="txtRobotoMedium14"
                >
                  Yangi buyurtma yaratish
                </Text>
                <Text
                  className="mt-[15px] text-blue_gray-500 text-sm"
                  size="txtRobotoMedium14"
                >
                  Tasdiqlangan
                </Text>
                <Text
                  className="mt-[21px] text-blue_gray-500 text-sm"
                  size="txtRobotoMedium14"
                >
                  Bekor qilinganlar
                </Text>
              </div>
            </div>
            <div className="absolute bg-blue_gray-800_7e bottom-[5%] flex flex-row gap-[73px] inset-x-[0] items-center justify-start mx-auto md:pr-10 sm:pr-5 pr-[77px] w-full">
              <Img
                className="h-[60px] md:h-auto object-cover w-[7%]"
                src="images/img_rectangle1564_5.png"
                alt="rectangle1564"
              />
              <Text
                className="text-sm text-white-A700"
                size="txtRobotoMedium14WhiteA700"
              >
                Buyurtmalar tarixi
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col items-start justify-start left-[3%] md:px-5 top-1/4 w-[15%]">
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

export default ShowroomBuyurtmalartarixiPage;
