import React from "react";

import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
} from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const bekorQilinganlarOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BuyurtmalarPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div className="absolute md:h-[3301px] sm:h-[898px] h-[900px] inset-[0] justify-center m-auto md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-full items-center justify-start m-auto p-7 sm:px-5 w-full"
            style={{
              backgroundImage: "url('images/img_showroombuyurtmalar.png')",
            }}
          >
            <div className="flex flex-col gap-[26px] items-center justify-start mb-1 w-[99%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-11 items-start justify-between w-[99%] md:w-full">
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
                <div className="flex flex-col gap-[26px] items-center justify-start w-[84%] md:w-full">
                  <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[97%] md:w-full">
                    <FrameFiftyTwoDatafiltr className="flex md:flex-col flex-row gap-[17px] items-center justify-between w-[66%] md:w-full" />
                    <div className="flex flex-row items-start justify-start w-[17%] md:w-full">
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
                        className="ml-[11px] mt-1 sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-500"
                        size="txtRobotoMedium23"
                      >
                        Filter
                      </Text>
                      <Img
                        className="h-[7px] ml-[60px] mt-4"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                    </div>
                  </div>
                  <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                    <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-center justify-end p-[15px] rounded-[5px] w-[32%] md:w-full">
                      <div className="flex flex-col gap-3 justify-start mt-0.5 w-[26%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <Text
                            className="text-blue_gray-500 text-sm"
                            size="txtRobotoMedium14"
                          >
                            Tasdiqlangan
                          </Text>
                        </div>
                        <div className="flex flex-row gap-[7px] items-end justify-end md:ml-[0] ml-[22px] w-[64%] md:w-full">
                          <Text
                            className="sm:text-2xl md:text-[26px] text-[28px] text-light_green-400"
                            size="txtRobotoMedium28"
                          >
                            15
                          </Text>
                          <Text
                            className="mb-0.5 mt-3 text-[15px] text-light_green-400"
                            size="txtRobotoMedium15"
                          >
                            ta
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-start justify-end p-3.5 rounded-[5px] w-[32%] md:w-full">
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[98px] mt-1 w-[29%] md:w-full">
                        <div className="flex flex-col gap-[13px] justify-start w-full">
                          <Text
                            className="text-blue_gray-500 text-sm"
                            size="txtRobotoMedium14"
                          >
                            <>Qayta ko\&#96;rilgan</>
                          </Text>
                          <div className="flex flex-row gap-1.5 items-center justify-end md:ml-[0] ml-[27px] w-[55%] md:w-full">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-red-300"
                              size="txtRobotoMedium28Red300"
                            >
                              08
                            </Text>
                            <Text
                              className="text-[15px] text-red-300"
                              size="txtRobotoMedium15Red300"
                            >
                              ta
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue_gray-900_87 flex md:flex-1 flex-col items-start justify-end p-[18px] rounded-[5px] w-[32%] md:w-full">
                      <div className="flex flex-col items-center justify-start md:ml-[0] ml-[100px] w-[26%] md:w-full">
                        <div className="flex flex-col gap-[9px] items-end justify-start w-full">
                          <Text
                            className="text-blue_gray-500 text-sm"
                            size="txtRobotoMedium14"
                          >
                            Umumiy soni
                          </Text>
                          <div className="flex flex-row gap-[5px] items-end justify-end w-[63%] md:w-full">
                            <Text
                              className="sm:text-2xl md:text-[26px] text-[28px] text-blue-400"
                              size="txtRobotoMedium28Blue400"
                            >
                              23
                            </Text>
                            <Text
                              className="mb-0.5 mt-3 text-[15px] text-blue-400"
                              size="txtRobotoMedium15Blue400"
                            >
                              ta
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-[31px] items-center justify-between w-full">
                <div className="flex md:flex-1 flex-col gap-8 items-start justify-start w-[16%] md:w-full">
                  <div className="flex flex-row gap-[22px] items-start justify-start ml-0.5 md:ml-[0] w-[85%] md:w-full">
                    <Img
                      className="h-[21px] w-[21px]"
                      src="images/img_bxbxsaddtoqueue.svg"
                      alt="bxbxsaddtoqueue"
                    />
                    <Text
                      className="mt-0.5 text-blue_gray-500 text-sm uppercase"
                      size="txtRobotoMedium14"
                    >
                      <>material qo\&#96;shish</>
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[18px] items-end justify-start w-[57%] md:w-full">
                    <Img
                      className="h-[27px] w-[27px]"
                      src="images/img_ictwotonepricechange.svg"
                      alt="ictwotonepricec"
                    />
                    <Text
                      className="mb-0.5 mt-[5px] text-base text-blue_gray-500 uppercase"
                      size="txtRobotoMedium16"
                    >
                      Kassaga
                    </Text>
                  </div>
                  <div className="flex flex-row gap-[25px] items-start justify-start w-full">
                    <Img
                      className="h-[19px] mb-[3px] w-[19px]"
                      src="images/img_ticket.svg"
                      alt="ticket"
                    />
                    <Text
                      className="mt-[3px] text-base text-blue_gray-500 uppercase"
                      size="txtRobotoMedium16"
                    >
                      mahsulot narxlari
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[83%] md:w-full">
                  <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-start py-2 rounded-[5px] w-full">
                    <div className="flex flex-col gap-[18px] items-center justify-start mb-3.5 w-full">
                      <div className="flex sm:flex-col flex-row md:gap-10 items-start justify-between w-[95%] md:w-full">
                        <div className="flex sm:flex-col flex-row gap-6 items-center justify-between sm:mt-0 mt-1 w-[39%] sm:w-full">
                          <Img
                            className="h-[18px] w-[17px]"
                            src="images/img_refresh.svg"
                            alt="refresh"
                          />
                          <Input
                            name="group298"
                            placeholder="Izlash"
                            className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                            wrapClassName="sm:w-full"
                            shape="round"
                            color="blue_gray_800"
                            size="sm"
                            variant="fill"
                          ></Input>
                        </div>
                        <SelectBox
                          className="font-medium leading-[normal] mb-1 text-base text-left w-[16%] sm:w-full"
                          placeholderClassName="text-gray-400"
                          indicator={
                            <Img
                              className="h-[3px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[7px]"
                              src="images/img_arrowdown_gray_400.svg"
                              alt="arrow_down"
                            />
                          }
                          isMulti={false}
                          name="group296"
                          options={bekorQilinganlarOptionsList}
                          isSearchable={false}
                          placeholder="Bekor qilinganlar"
                          shape="round"
                          color="blue_gray_800"
                          size="xs"
                          variant="fill"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-start w-full">
                        <Line className="bg-blue_gray-800_01 h-0.5 w-full" />
                        <div className="md:h-[2191px] h-[457px] sm:h-[464px] mt-[7px] relative w-full">
                          <div className="absolute h-[452px] md:h-[970px] inset-[0] justify-center m-auto w-full">
                            <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[2%] my-auto w-[73%]">
                              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                <Img
                                  className="h-[18px] w-[17px]"
                                  src="images/img_refresh.svg"
                                  alt="refresh_One"
                                />
                                <Text
                                  className="ml-3.5 md:ml-[0] text-[15px] text-blue_gray-500"
                                  size="txtRobotoBold15"
                                >
                                  Mijoz
                                </Text>
                                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[547px]">
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
                                    Mansur Ergashev
                                  </Text>
                                  <Text
                                    className="mt-[29px] text-gray-400 text-xs"
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
                                </div>
                                <div className="flex md:flex-1 flex-col gap-[21px] items-start justify-start ml-6 md:ml-[0] w-[8%] md:w-full">
                                  <Text
                                    className="text-[15px] text-blue_gray-500"
                                    size="txtRobotoBold15"
                                  >
                                    Status
                                  </Text>
                                  <List
                                    className="flex flex-col gap-3.5 items-center w-full"
                                    orientation="vertical"
                                  >
                                    <div className="flex md:flex-1 flex-col items-center justify-start w-[92%] md:w-full">
                                      <div className="flex flex-col items-center justify-start w-full">
                                        <div className="bg-red-300 h-3.5 rounded-[50%] w-3.5"></div>
                                        <Text
                                          className="mt-[3px] text-[8px] text-red-300"
                                          size="txtRobotoBold8"
                                        >
                                          <>Qayta ko\&#96;rilgan</>
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="flex md:flex-1 flex-col items-center justify-start w-[92%] md:w-full">
                                      <div className="flex flex-col justify-start w-full">
                                        <div className="bg-red-300 h-3.5 md:ml-[0] ml-[11px] mr-7 rounded-[50%] w-3.5"></div>
                                        <Text
                                          className="mt-[3px] text-[8px] text-red-300"
                                          size="txtRobotoBold8"
                                        >
                                          <>Qayta ko\&#96;rilgan</>
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="flex md:flex-1 flex-col items-center justify-start w-[92%] md:w-full">
                                      <div className="flex flex-col justify-start w-full">
                                        <div className="bg-red-300 h-3.5 md:ml-[0] ml-[11px] mr-7 rounded-[50%] w-3.5"></div>
                                        <Text
                                          className="mt-[3px] text-[8px] text-red-300"
                                          size="txtRobotoBold8"
                                        >
                                          <>Qayta ko\&#96;rilgan</>
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="flex md:flex-1 flex-col items-center justify-start w-[92%] md:w-full">
                                      <div className="flex flex-col justify-start w-full">
                                        <div className="bg-red-300 h-3.5 md:ml-[0] ml-[11px] mr-7 rounded-[50%] w-3.5"></div>
                                        <Text
                                          className="mt-[3px] text-[8px] text-red-300"
                                          size="txtRobotoBold8"
                                        >
                                          <>Qayta ko\&#96;rilgan</>
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="flex md:flex-1 flex-col items-center justify-start w-[92%] md:w-full">
                                      <div className="flex flex-col justify-start w-full">
                                        <div className="bg-red-300 h-3.5 md:ml-[0] ml-[11px] mr-7 rounded-[50%] w-3.5"></div>
                                        <Text
                                          className="mt-[3px] text-[8px] text-red-300"
                                          size="txtRobotoBold8"
                                        >
                                          <>Qayta ko\&#96;rilgan</>
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="flex md:flex-1 flex-col items-center justify-start w-[92%] md:w-full">
                                      <div className="flex flex-col justify-start w-full">
                                        <div className="bg-red-300 h-3.5 md:ml-[0] ml-[11px] mr-7 rounded-[50%] w-3.5"></div>
                                        <Text
                                          className="mt-[3px] text-[8px] text-red-300"
                                          size="txtRobotoBold8"
                                        >
                                          <>Qayta ko\&#96;rilgan</>
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="flex md:flex-1 flex-col items-center justify-start w-[92%] md:w-full">
                                      <div className="flex flex-col justify-start w-full">
                                        <div className="bg-red-300 h-3.5 md:ml-[0] ml-[11px] mr-7 rounded-[50%] w-3.5"></div>
                                        <Text
                                          className="mt-[3px] text-[8px] text-red-300"
                                          size="txtRobotoBold8"
                                        >
                                          <>Qayta ko\&#96;rilgan</>
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="flex md:flex-1 flex-col items-center justify-start w-[92%] md:w-full">
                                      <div className="flex flex-col justify-start w-full">
                                        <div className="bg-red-300 h-3.5 md:ml-[0] ml-[11px] mr-7 rounded-[50%] w-3.5"></div>
                                        <Text
                                          className="mt-[3px] text-[8px] text-red-300"
                                          size="txtRobotoBold8"
                                        >
                                          <>Qayta ko\&#96;rilgan</>
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="flex md:flex-1 flex-col items-center justify-start w-[92%] md:w-full">
                                      <div className="flex flex-col justify-start w-full">
                                        <div className="bg-red-300 h-3.5 md:ml-[0] ml-[11px] mr-7 rounded-[50%] w-3.5"></div>
                                        <Text
                                          className="mt-[3px] text-[8px] text-red-300"
                                          size="txtRobotoBold8"
                                        >
                                          <>Qayta ko\&#96;rilgan</>
                                        </Text>
                                      </div>
                                    </div>
                                    <div className="flex md:flex-1 flex-col items-center justify-start w-[92%] md:w-full">
                                      <div className="flex flex-col justify-start w-full">
                                        <div className="bg-red-300 h-3.5 md:ml-[0] ml-[11px] mr-7 rounded-[50%] w-3.5"></div>
                                        <Text
                                          className="mt-[3px] text-[8px] text-red-300"
                                          size="txtRobotoBold8"
                                        >
                                          <>Qayta ko\&#96;rilgan</>
                                        </Text>
                                      </div>
                                    </div>
                                  </List>
                                </div>
                              </div>
                            </div>
                            <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[7%] w-full" />
                            <div className="absolute md:h-[438px] h-[447px] inset-[0] justify-center m-auto w-full">
                              <div className="md:h-[438px] h-[447px] m-auto w-full">
                                <Line className="absolute bg-blue_gray-800_01 h-0.5 inset-x-[0] mx-auto top-[17%] w-full" />
                                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[7%] w-[3%]">
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoBold15Gray400"
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
                                    className="h-[19px] mt-[22px] w-[19px]"
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
                                </div>
                              </div>
                              <Img
                                className="absolute h-px inset-x-[0] mx-auto top-[26%]"
                                src="images/img_group90.svg"
                                alt="groupNinety"
                              />
                              <Img
                                className="absolute h-px inset-x-[0] mx-auto top-[35%]"
                                src="images/img_group90.svg"
                                alt="groupNinetyOne"
                              />
                              <Img
                                className="absolute h-px inset-x-[0] mx-auto top-[45%]"
                                src="images/img_group90.svg"
                                alt="groupNinetyTwo"
                              />
                              <Img
                                className="absolute bottom-[45%] h-px inset-x-[0] mx-auto"
                                src="images/img_group90.svg"
                                alt="group580"
                              />
                              <Img
                                className="absolute bottom-[36%] h-px inset-x-[0] mx-auto"
                                src="images/img_group90.svg"
                                alt="group581"
                              />
                              <Img
                                className="absolute bottom-[16%] h-[42px] inset-x-[0] mx-auto"
                                src="images/img_group92.svg"
                                alt="group102"
                              />
                              <Img
                                className="absolute bottom-[7%] h-px inset-x-[0] mx-auto"
                                src="images/img_group90.svg"
                                alt="groupNinetySeven"
                              />
                            </div>
                          </div>
                          <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[2%] my-auto w-[83%]">
                            <div className="flex flex-col items-center justify-start w-full">
                              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                                <Img
                                  className="h-[390px] md:mt-0 mt-[50px]"
                                  src="images/img_group565_blue_gray_500.svg"
                                  alt="group565"
                                />
                                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[19px] md:mt-0 mt-[43px]">
                                  <Text
                                    className="text-[15px] text-blue-700"
                                    size="txtRobotoBold15Blue700"
                                  >
                                    Botir Qodirov
                                  </Text>
                                  <Text
                                    className="mt-[23px] text-[15px] text-blue-700"
                                    size="txtRobotoBold15Blue700"
                                  >
                                    Sobir Ikromov
                                  </Text>
                                  <Text
                                    className="mt-6 text-[15px] text-blue-700"
                                    size="txtRobotoBold15Blue700"
                                  >
                                    <>Maftuna To\&#96;lanboyeva</>
                                  </Text>
                                  <Text
                                    className="mt-[26px] text-[15px] text-blue-700"
                                    size="txtRobotoBold15Blue700"
                                  >
                                    Nodir Fayziyev
                                  </Text>
                                  <Text
                                    className="mt-[25px] text-[15px] text-blue-700"
                                    size="txtRobotoBold15Blue700"
                                  >
                                    Fahriddin Mahmudov
                                  </Text>
                                  <Text
                                    className="mt-6 text-[15px] text-blue-700"
                                    size="txtRobotoBold15Blue700"
                                  >
                                    Fahriddin Mahmudov
                                  </Text>
                                  <Text
                                    className="mt-[25px] text-[15px] text-blue-700"
                                    size="txtRobotoBold15Blue700"
                                  >
                                    Fahriddin Mahmudov
                                  </Text>
                                  <Text
                                    className="mt-[23px] text-[15px] text-blue-700"
                                    size="txtRobotoBold15Blue700"
                                  >
                                    Shukurillo Avdusalomov
                                  </Text>
                                  <Text
                                    className="mt-6 text-[15px] text-blue-700"
                                    size="txtRobotoBold15Blue700"
                                  >
                                    Saida Komilova
                                  </Text>
                                  <Text
                                    className="mt-6 text-[15px] text-blue-700"
                                    size="txtRobotoBold15Blue700"
                                  >
                                    Mohira Abdumalikov
                                  </Text>
                                </div>
                                <div className="flex md:flex-1 flex-col items-center justify-start ml-20 md:ml-[0] md:mt-0 mt-[3px] w-[11%] md:w-full">
                                  <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex flex-col items-center justify-start w-full">
                                      <div className="flex flex-col items-start justify-start w-full">
                                        <Text
                                          className="text-[15px] text-blue_gray-500"
                                          size="txtRobotoBold15"
                                        >
                                          Loyiha nomeri
                                        </Text>
                                        <div className="flex flex-row gap-3 items-center justify-start mt-[21px] w-[84%] md:w-full">
                                          <Img
                                            className="h-[18px] md:h-auto object-cover w-1/5"
                                            src="images/img_.png"
                                            alt="OneHundredSeventySeven"
                                          />
                                          <Text
                                            className="text-[15px] text-gray-400"
                                            size="txtRobotoBold15Gray400"
                                          >
                                            120003
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center justify-start mt-[23px] w-[84%] md:w-full">
                                          <Img
                                            className="h-[18px] md:h-auto object-cover w-1/5"
                                            src="images/img_.png"
                                            alt="OneHundredSeventyEight"
                                          />
                                          <Text
                                            className="text-[15px] text-gray-400"
                                            size="txtRobotoBold15Gray400"
                                          >
                                            120002
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center justify-start mt-[23px] w-[84%] md:w-full">
                                          <Img
                                            className="h-[18px] md:h-auto object-cover w-1/5"
                                            src="images/img_.png"
                                            alt="OneHundredSeventyNine"
                                          />
                                          <Text
                                            className="text-[15px] text-gray-400"
                                            size="txtRobotoBold15Gray400"
                                          >
                                            120002
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center justify-start mt-[26px] w-[82%] md:w-full">
                                          <Img
                                            className="h-[18px] md:h-auto object-cover w-[21%]"
                                            src="images/img_.png"
                                            alt="OneHundredEighty"
                                          />
                                          <Text
                                            className="text-[15px] text-gray-400"
                                            size="txtRobotoBold15Gray400"
                                          >
                                            120001
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center justify-start mt-[26px] w-[84%] md:w-full">
                                          <Img
                                            className="h-[18px] md:h-auto object-cover w-1/5"
                                            src="images/img_.png"
                                            alt="OneHundredEightyOne"
                                          />
                                          <Text
                                            className="text-[15px] text-gray-400"
                                            size="txtRobotoBold15Gray400"
                                          >
                                            119999
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center justify-start mt-6 w-[84%] md:w-full">
                                          <Img
                                            className="h-[18px] md:h-auto object-cover w-1/5"
                                            src="images/img_.png"
                                            alt="OneHundredEightyTwo"
                                          />
                                          <Text
                                            className="text-[15px] text-gray-400"
                                            size="txtRobotoBold15Gray400"
                                          >
                                            119999
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center justify-start mt-[25px] w-[84%] md:w-full">
                                          <Img
                                            className="h-[18px] md:h-auto object-cover w-1/5"
                                            src="images/img_.png"
                                            alt="OneHundredEightyThree"
                                          />
                                          <Text
                                            className="text-[15px] text-gray-400"
                                            size="txtRobotoBold15Gray400"
                                          >
                                            119999
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center justify-start mt-[23px] w-[84%] md:w-full">
                                          <Img
                                            className="h-[18px] md:h-auto object-cover w-1/5"
                                            src="images/img_.png"
                                            alt="OneHundredEightyFour"
                                          />
                                          <Text
                                            className="text-[15px] text-gray-400"
                                            size="txtRobotoBold15Gray400"
                                          >
                                            119996
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center justify-start mt-6 w-[84%] md:w-full">
                                          <Img
                                            className="h-[18px] md:h-auto object-cover w-1/5"
                                            src="images/img_.png"
                                            alt="OneHundredEightyFive"
                                          />
                                          <Text
                                            className="text-[15px] text-gray-400"
                                            size="txtRobotoBold15Gray400"
                                          >
                                            119997
                                          </Text>
                                        </div>
                                        <div className="flex flex-row gap-3 items-center justify-start mt-6 w-[84%] md:w-full">
                                          <Img
                                            className="h-[18px] md:h-auto object-cover w-1/5"
                                            src="images/img_.png"
                                            alt="OneHundredEightySix"
                                          />
                                          <Text
                                            className="text-[15px] text-gray-400"
                                            size="txtRobotoBold15Gray400"
                                          >
                                            119996
                                          </Text>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[84px] w-[14%] md:w-full">
                                  <div className="flex flex-col items-start justify-start w-full">
                                    <Text
                                      className="ml-0.5 md:ml-[0] text-[15px] text-blue_gray-500"
                                      size="txtRobotoBold15"
                                    >
                                      Manzili
                                    </Text>
                                    <Text
                                      className="mt-4 text-[10px] text-blue_gray-500"
                                      size="txtRobotoBold10"
                                    >
                                      Jalaquduq
                                    </Text>
                                    <Text
                                      className="text-[10px] text-gray-400"
                                      size="txtRobotoBold10Gray400"
                                    >
                                      <>
                                        Yangisor Qorasuv ko\&#96;cha <br />№ 77
                                        uy
                                      </>
                                    </Text>
                                    <Text
                                      className="mt-1 text-[10px] text-blue_gray-500"
                                      size="txtRobotoBold10"
                                    >
                                      <>Xo\&#96;jaobod</>
                                    </Text>
                                    <Text
                                      className="text-[10px] text-gray-400"
                                      size="txtRobotoBold10Gray400"
                                    >
                                      <>
                                        Yettichinor Jome ko\&#96;cha <br />№ 125
                                        uy
                                      </>
                                    </Text>
                                    <Text
                                      className="mt-[3px] text-[10px] text-blue_gray-500"
                                      size="txtRobotoBold10"
                                    >
                                      Qorasuv
                                    </Text>
                                    <Text
                                      className="text-[10px] text-gray-400"
                                      size="txtRobotoBold10Gray400"
                                    >
                                      <>
                                        Obodon Toshloq ko\&#96;cha <br />№ 35 uy
                                      </>
                                    </Text>
                                    <Text
                                      className="mt-[7px] text-[10px] text-blue_gray-500"
                                      size="txtRobotoBold10"
                                    >
                                      Andijon
                                    </Text>
                                    <Text
                                      className="text-[10px] text-gray-400"
                                      size="txtRobotoBold10Gray400"
                                    >
                                      <>
                                        Yangi bozor Oripov ko\&#96;cha <br />№
                                        81 uy{" "}
                                      </>
                                    </Text>
                                    <Text
                                      className="mt-[7px] text-[10px] text-blue_gray-500"
                                      size="txtRobotoBold10"
                                    >
                                      Andijon
                                    </Text>
                                    <Text
                                      className="text-[10px] text-gray-400"
                                      size="txtRobotoBold10Gray400"
                                    >
                                      <>
                                        Yangi bozor Oripov ko\&#96;cha <br />№
                                        88 uy{" "}
                                      </>
                                    </Text>
                                    <Text
                                      className="mt-1 text-[10px] text-blue_gray-500"
                                      size="txtRobotoBold10"
                                    >
                                      Andijon
                                    </Text>
                                    <Text
                                      className="text-[10px] text-gray-400"
                                      size="txtRobotoBold10Gray400"
                                    >
                                      <>
                                        Yangi bozor Oripov ko\&#96;cha <br />№
                                        88 uy{" "}
                                      </>
                                    </Text>
                                    <Text
                                      className="mt-[5px] text-[10px] text-blue_gray-500"
                                      size="txtRobotoBold10"
                                    >
                                      Andijon
                                    </Text>
                                    <Text
                                      className="text-[10px] text-gray-400"
                                      size="txtRobotoBold10Gray400"
                                    >
                                      <>
                                        Yangi bozor Oripov ko\&#96;cha <br />№
                                        88 uy{" "}
                                      </>
                                    </Text>
                                    <Text
                                      className="mt-[3px] text-[10px] text-blue_gray-500"
                                      size="txtRobotoBold10"
                                    >
                                      Shahrixon
                                    </Text>
                                    <Text
                                      className="mt-0.5 text-[10px] text-gray-400"
                                      size="txtRobotoBold10Gray400"
                                    >
                                      <>
                                        Yodgorov ko\&#96;cha <br />№ 15 uy
                                      </>
                                    </Text>
                                    <Text
                                      className="mt-[5px] text-[10px] text-blue_gray-500"
                                      size="txtRobotoBold10"
                                    >
                                      Andijon
                                    </Text>
                                    <Text
                                      className="text-[10px] text-gray-400"
                                      size="txtRobotoBold10Gray400"
                                    >
                                      <>
                                        Oliygoh ko\&#96;cha <br />№ 3 uy
                                      </>
                                    </Text>
                                    <Text
                                      className="mt-[5px] text-[10px] text-blue_gray-500"
                                      size="txtRobotoBold10"
                                    >
                                      <>Xo\&#96;jaobod</>
                                    </Text>
                                    <Text
                                      className="text-[10px] text-gray-400"
                                      size="txtRobotoBold10Gray400"
                                    >
                                      <>
                                        Yettichinor Jome ko\&#96;cha <br />№ 125
                                        uy
                                      </>
                                    </Text>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start md:ml-[0] ml-[274px]">
                                  <Text
                                    className="text-[15px] text-gray-400"
                                    size="txtRobotoBold15Gray400"
                                  >
                                    Muddati
                                  </Text>
                                  <Text
                                    className="mt-[26px] text-blue_gray-500 text-xs"
                                    size="txtRobotoBold12"
                                  >
                                    Sen 11. 2022
                                  </Text>
                                  <Text
                                    className="mt-[27px] text-blue_gray-500 text-xs"
                                    size="txtRobotoBold12"
                                  >
                                    Sen 12. 2022
                                  </Text>
                                  <Text
                                    className="mt-[26px] text-blue_gray-500 text-xs"
                                    size="txtRobotoBold12"
                                  >
                                    Sen 12. 2022
                                  </Text>
                                  <Text
                                    className="mt-[29px] text-blue_gray-500 text-xs"
                                    size="txtRobotoBold12"
                                  >
                                    Sen 12. 2022
                                  </Text>
                                  <Text
                                    className="mt-[29px] text-blue_gray-500 text-xs"
                                    size="txtRobotoBold12"
                                  >
                                    Sen 12. 2022
                                  </Text>
                                  <Text
                                    className="mt-[27px] text-blue_gray-500 text-xs"
                                    size="txtRobotoBold12"
                                  >
                                    Sen 12. 2022
                                  </Text>
                                  <Text
                                    className="mt-7 text-blue_gray-500 text-xs"
                                    size="txtRobotoBold12"
                                  >
                                    Sen 12. 2022
                                  </Text>
                                  <Text
                                    className="mt-[26px] text-blue_gray-500 text-xs"
                                    size="txtRobotoBold12"
                                  >
                                    Sen 13. 2022
                                  </Text>
                                  <Text
                                    className="mt-[27px] text-blue_gray-500 text-xs"
                                    size="txtRobotoBold12"
                                  >
                                    Sen 13. 2022
                                  </Text>
                                  <Text
                                    className="mt-[27px] text-blue_gray-500 text-xs"
                                    size="txtRobotoBold12"
                                  >
                                    Sen 13. 2022
                                  </Text>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="h-px mt-[3px]"
                          src="images/img_group90.svg"
                          alt="groupNinetyEight"
                        />
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[31px] items-end justify-start mt-16 w-[33%] md:w-full"
                          style={{
                            backgroundImage: "url('images/img_group71.svg')",
                          }}
                        >
                          <div className="flex flex-row items-start justify-end mb-0.5 mr-2 w-[85%] md:w-full">
                            <Text
                              className="mt-[5px] text-gray-400 text-sm"
                              size="txtRobotoBold14"
                            >
                              1
                            </Text>
                            <Text
                              className="ml-[30px] mt-[5px] text-gray-400 text-sm"
                              size="txtRobotoBold14"
                            >
                              2
                            </Text>
                            <Text
                              className="ml-[29px] mt-[5px] text-gray-400 text-sm"
                              size="txtRobotoBold14"
                            >
                              3
                            </Text>
                            <Text
                              className="ml-[29px] mt-[5px] text-gray-400 text-sm"
                              size="txtRobotoBold14"
                            >
                              4
                            </Text>
                            <Text
                              className="ml-[27px] text-[22px] text-center sm:text-lg text-white-A700 md:text-xl"
                              size="txtRobotoBold22"
                            >
                              5
                            </Text>
                            <Text
                              className="ml-7 mt-[5px] text-gray-400 text-sm"
                              size="txtRobotoBold14"
                            >
                              6
                            </Text>
                            <Text
                              className="ml-[29px] mt-1.5 text-gray-400 text-sm"
                              size="txtRobotoBold14"
                            >
                              7
                            </Text>
                            <Text
                              className="ml-7 mt-1.5 text-gray-400 text-sm"
                              size="txtRobotoBold14"
                            >
                              8
                            </Text>
                            <Img
                              className="h-[9px] ml-[31px] mt-[9px]"
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
          </div>
          <Img
            className="absolute h-[60px] left-[0] object-cover top-[34%] w-1/5"
            src="images/img_rectangle1565_60x275.png"
            alt="rectangle1565"
          />
        </div>
        <Img
          className="absolute h-[60px] left-[0] object-cover top-[34%] w-[1%]"
          src="images/img_rectangle1564_28.png"
          alt="rectangle1564"
        />
        <div className="absolute bg-blue_gray-800_7e flex flex-col gap-[33px] items-center justify-end left-[0] p-[26px] md:px-5 top-[21%] w-1/5">
          <div className="flex flex-row gap-[30px] items-center justify-end mt-[7px] w-[92%] md:w-full">
            <CheckBox
              className="font-medium leading-[normal] sm:pl-5 text-base text-left uppercase"
              inputClassName="h-[18px] mr-[5px] w-[18px]"
              name="buyurtmalar"
              id="buyurtmalar"
              label="BUYURTMALAR"
            ></CheckBox>
            <Img
              className="h-1"
              src="images/img_line49.svg"
              alt="lineFortyNine"
            />
          </div>
          <div className="flex flex-col items-start justify-start">
            <Text
              className="text-blue_gray-500 text-sm"
              size="txtRobotoMedium14"
            >
              Tasdiqlangan
            </Text>
            <Text
              className="mt-[37px] text-sm text-white-A700"
              size="txtRobotoMedium14WhiteA700"
            >
              <>Qayta ko\&#96;rilganlar</>
            </Text>
            <Text
              className="mt-12 text-blue_gray-500 text-sm"
              size="txtRobotoMedium14"
            >
              Buyurtmalar tarixi
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyurtmalarPage;
