import React from "react";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";

const statusOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const SavdobolimibuyurtmalarroyhatiOnePage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-900 font-roboto h-[900px] mx-auto relative w-full">
        <div className="md:h-[1987px] h-[900px] m-auto md:px-5 w-full">
          <div className="md:h-[1987px] h-[900px] m-auto w-full">
            <Img
              className="h-[900px] m-auto object-cover w-full"
              src="images/img_global1_900x1439.png"
              alt="globalOne"
            />
            <div className="absolute flex md:flex-col flex-row md:gap-11 inset-x-[0] items-start justify-between mx-auto top-[3%] w-[95%]">
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
              <div className="flex flex-col gap-9 justify-start w-[84%] md:w-full">
                <div className="flex flex-row items-start justify-end md:ml-[0] ml-[916px] w-[16%] md:w-full">
                  <div className="h-[38px] relative w-[38px]">
                    <Img
                      className="h-[38px] m-auto rounded-[50%] w-[38px]"
                      src="images/img_il1588xn1.png"
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
                <div className="bg-blue_gray-900_87_01 flex flex-col gap-5 items-center justify-center pr-[3px] py-[3px] rounded-[5px] w-full">
                  <div className="flex flex-col items-center justify-start mt-11 w-[95%] md:w-full">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                      <Img
                        className="h-[18px] w-[17px]"
                        src="images/img_refresh.svg"
                        alt="refresh"
                      />
                      <Input
                        name="group671"
                        placeholder="Izlash"
                        className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                        wrapClassName="md:flex-1 md:ml-[0] ml-[17px] w-[35%] md:w-full"
                        shape="round"
                        color="blue_gray_800"
                        size="sm"
                        variant="fill"
                      ></Input>
                      <SelectBox
                        className="md:flex-1 font-medium leading-[normal] md:ml-[0] ml-[490px] text-base text-left w-[16%] md:w-full"
                        placeholderClassName="text-gray-400"
                        indicator={
                          <Img
                            className="h-[3px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[7px]"
                            src="images/img_arrowdown_gray_400.svg"
                            alt="arrow_down"
                          />
                        }
                        isMulti={false}
                        name="group672"
                        options={statusOptionsList}
                        isSearchable={false}
                        placeholder="Status"
                        shape="round"
                        color="blue_gray_800"
                        size="xs"
                        variant="fill"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 items-center justify-start mb-[84px] w-full">
                    <Line className="bg-blue_gray-800_01 h-0.5 w-full" />
                    <div className="md:h-[1486px] h-[491px] relative w-full">
                      <div className="absolute flex flex-col gap-[42px] inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                        <div className="h-[74px] relative w-full">
                          <Line className="bg-blue_gray-800_01 h-0.5 mt-[31px] mx-auto w-full" />
                          <Img
                            className="absolute h-[74px] inset-[0] justify-center m-auto"
                            src="images/img_group90.svg"
                            alt="groupEightyEight"
                          />
                        </div>
                        <div className="flex flex-col items-center justify-start w-full">
                          <Img
                            className="h-px"
                            src="images/img_group90.svg"
                            alt="groupNinety"
                          />
                          <Img
                            className="h-px mt-[41px]"
                            src="images/img_group90.svg"
                            alt="groupNinetyOne"
                          />
                          <Img
                            className="h-[38px] mt-11"
                            src="images/img_group92.svg"
                            alt="groupNinetyTwo"
                          />
                          <Img
                            className="h-px mt-[38px]"
                            src="images/img_group90.svg"
                            alt="group103_One"
                          />
                          <Img
                            className="h-px mt-11"
                            src="images/img_group90.svg"
                            alt="group104"
                          />
                          <Img
                            className="h-px mt-[50px]"
                            src="images/img_group90.svg"
                            alt="group102"
                          />
                          <Img
                            className="h-px mt-[42px]"
                            src="images/img_group90.svg"
                            alt="groupNinetySeven"
                          />
                          <Img
                            className="h-px mt-[42px]"
                            src="images/img_group90.svg"
                            alt="groupNinetyEight"
                          />
                        </div>
                      </div>
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[5%] my-auto w-4/5">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <div className="flex flex-col items-start justify-start">
                              <Text
                                className="text-[15px] text-blue_gray-500"
                                size="txtRobotoMedium15Bluegray500"
                              >
                                Showroom nomi
                              </Text>
                              <Text
                                className="mt-[26px] text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                Andijon
                              </Text>
                              <Text
                                className="mt-6 text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                Andijon
                              </Text>
                              <Text
                                className="mt-[23px] text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                Andijon
                              </Text>
                              <Text
                                className="mt-[26px] text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                Namangan
                              </Text>
                              <Text
                                className="mt-[26px] text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                Namangan
                              </Text>
                              <Text
                                className="mt-[13px] text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                Namangan
                              </Text>
                              <Text
                                className="mt-[26px] text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                Namangan
                              </Text>
                              <Text
                                className="mt-[26px] text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                <>Ho\&#96;jaobod</>
                              </Text>
                              <Text
                                className="mt-[31px] text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                <>Ho\&#96;jaobod</>
                              </Text>
                              <Text
                                className="mt-6 text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                <>Ho\&#96;jaobod</>
                              </Text>
                              <Text
                                className="mt-6 text-[15px] text-blue-700"
                                size="txtRobotoMedium15Blue700"
                              >
                                <>Ho\&#96;jaobod</>
                              </Text>
                            </div>
                            <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[236px] w-[11%] md:w-full">
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
                                        alt="TwoHundredFour"
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
                                        alt="TwoHundredFive"
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
                                        alt="TwoHundredSix"
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
                                        alt="TwoHundredSeven"
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
                                        alt="TwoHundredEight"
                                      />
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        119999
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center justify-start mt-[13px] w-[85%] md:w-full">
                                      <Img
                                        className="h-[18px] md:h-auto object-cover w-1/5"
                                        src="images/img_.png"
                                        alt="TwoHundredNine"
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
                                        alt="TwoHundredTen"
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
                                        alt="TwoHundredEleven"
                                      />
                                      <Text
                                        className="text-[15px] text-gray-400"
                                        size="txtRobotoMedium15Gray400"
                                      >
                                        119999
                                      </Text>
                                    </div>
                                    <div className="flex flex-row gap-3 items-center justify-start mt-[31px] w-[85%] md:w-full">
                                      <Img
                                        className="h-[18px] md:h-auto object-cover w-1/5"
                                        src="images/img_.png"
                                        alt="TwoHundredTwelve"
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
                                        alt="TwoHundredThirteen"
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
                                        alt="TwoHundredFourteen"
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
                            <div className="flex flex-col items-start justify-start md:ml-[0] ml-[381px]">
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
                                className="mt-4 text-blue_gray-500 text-xs"
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
                                className="mt-[34px] text-blue_gray-500 text-xs"
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
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Img
                      className="h-px"
                      src="images/img_group90.svg"
                      alt="groupNinetyNine"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FrameFiftyTwoDatafiltr className="absolute flex md:flex-col flex-row gap-[17px] items-center justify-center left-[20%] top-[3%] w-1/2" />
          <div className="absolute bg-blue_gray-800_7e flex flex-row gap-[29px] items-center justify-start left-[0] md:pr-10 pr-12 sm:pr-5 top-[36%] w-1/5">
            <div className="bg-red-300 h-[60px] w-[7%]"></div>
            <div className="flex flex-row gap-[27px] items-center justify-center w-[81%]">
              <Img
                className="h-[21px] w-[21px]"
                src="images/img_bxbxsaddtoqueue_white_a700.svg"
                alt="bxbxsaddtoqueue"
              />
              <Text
                className="text-sm text-white-A700 uppercase"
                size="txtRobotoMedium14WhiteA700"
              >
                <>Material qo\&#96;shish</>
              </Text>
            </div>
          </div>
        </div>
        <div className="absolute flex flex-col items-start justify-start left-[3%] md:px-5 top-[33%] w-[15%]">
          <div className="flex flex-row gap-[29px] items-start justify-start w-[78%] md:w-full">
            <Img
              className="h-[18px] w-[18px]"
              src="images/img_arrowdown_blue_gray_500.svg"
              alt="arrowdown_One"
            />
            <Text
              className="text-base text-blue_gray-500 uppercase"
              size="txtRobotoMedium16"
            >
              BUYURTMALAR
            </Text>
          </div>
          <div className="flex flex-row gap-[18px] items-end justify-start mt-[85px] w-[57%] md:w-full">
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
          <div className="flex flex-row gap-[25px] items-start justify-start mt-[31px] w-full">
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
      </div>
    </>
  );
};

export default SavdobolimibuyurtmalarroyhatiOnePage;
