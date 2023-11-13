import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const andijonOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShowroomBuyurtmayaratishTwoPage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_icoutlineshop.svg"
          alt="icoutlineshop"
        />
      ),
      label: <Text className="mt-1">DASHBOARD</Text>,
      href: "/direktordashboard",
      active: window.location.pathname === "/direktordashboard",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_bipersonworkspace.svg"
          alt="bipersonworkspa"
        />
      ),
      label: (
        <Text className="uppercase">
          <>Mijozlar ro\&#96;yhati</>
        </Text>
      ),
    },
    {
      icon: <Img className="h-5" src="images/img_vector.svg" alt="vector" />,
      label: (
        <>
          <Text className="mt-0.5 uppercase">
            <>To\&#96;lov qabul qilish</>
          </Text>
          <Img
            className="h-[5px] mt-[5px]"
            src="images/img_line49_blue_gray_500.svg"
            alt="lineFortyNine"
          />
        </>
      ),
    },
  ];

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat flex flex-col font-roboto h-[900px] items-center justify-start mx-auto w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <div
          className="bg-cover bg-no-repeat flex flex-col h-[900px] items-center justify-start sm:pr-5 pr-[29px] py-[29px] w-full"
          style={{
            backgroundImage: "url('images/img_showroombuyurtmalar.png')",
          }}
        >
          <div className="flex md:flex-col flex-row md:gap-5 items-start justify-evenly mb-[50px] mx-auto md:px-5 w-full">
            <Sidebar
              onClick={() => collapseSidebar(!collapsed)}
              className="!sticky !w-[276px] bg-cover bg-no-repeat flex h-screen md:hidden justify-start md:mt-0 mt-[27px] overflow-auto top-[0]"
              style={{ backgroundImage: "url('images/img_group834.svg')" }}
            >
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[82px] items-center justify-start md:ml-[0] ml-[49px] mr-[43px] w-[66%]"
                style={{ backgroundImage: "url('images/img_group834.svg')" }}
              >
                <Img
                  className="h-[82px]"
                  src="images/img_group834.svg"
                  alt="group103"
                />
              </div>
              <Menu
                menuItemStyles={{
                  button: {
                    padding: 0,
                    gap: "18px",
                    color: "#6e768c",
                    fontWeight: 500,
                    fontSize: "14px",
                    paddingLeft: "36px",
                    paddingRight: "36px",
                    [`&:hover, &.ps-active`]: { color: "#ffffff" },
                  },
                }}
                className="flex flex-col items-center justify-start mt-[95px] pb-[88px] w-full"
              >
                <div className="flex flex-col gap-[30.67px] items-center justify-start w-full">
                  {sideBarMenu?.map((menu, i) => (
                    <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                      {menu.label}
                    </MenuItem>
                  ))}
                </div>
                <div className="flex md:h-[251px] sm:h-[309px] h-px justify-end relative w-full">
                  <div className="bg-blue_gray-800_7e h-[60px] mb-[125px] mt-auto mx-auto w-full"></div>
                  <div className="absolute bg-blue_gray-800_7e bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto py-[17px] w-full">
                    <div className="flex flex-col gap-3 items-center justify-start mt-[13px] w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start w-full">
                        <Img
                          className="h-[18px]"
                          src="images/img_checkmark.svg"
                          alt="checkmark"
                        />
                        <Text className="sm:mt-0 mt-1 uppercase">
                          BUYURTMALAR
                        </Text>
                        <Img
                          className="h-1 sm:mt-0 mt-2.5"
                          src="images/img_line49.svg"
                          alt="lineFortyNine_One"
                        />
                      </div>
                      <MenuItem>
                        <div className="flex flex-row gap-[72px] items-center justify-start sm:pr-5">
                          <div className="bg-red-300 h-[60px] w-[6%]"></div>
                          <Text className="text-white-A700">
                            Yangi buyurtma yaratish
                          </Text>
                        </div>
                      </MenuItem>
                      <MenuItem>
                        <div className="flex flex-col gap-[23px] items-center justify-start md:px-10 sm:px-5">
                          <Text>Tasdiqlangan</Text>
                          <Text className="font-medium text-blue_gray-500 text-sm">
                            Bekor qilinganlar
                          </Text>
                          <Text
                            className="common-pointer font-medium text-blue_gray-500 text-sm"
                            onClick={() =>
                              navigate("/showroombuyurtmalartarixi")
                            }
                          >
                            Buyurtmalar tarixi
                          </Text>
                        </div>
                      </MenuItem>
                    </div>
                  </div>
                </div>
              </Menu>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-7 items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[98%] md:w-full">
                <Text
                  className="md:mt-0 mt-0.5 sm:text-[31px] md:text-[33px] text-[35px] text-gray-400"
                  size="txtRobotoMedium35"
                >
                  Yangi buyurtma{" "}
                </Text>
                <Text
                  className="md:ml-[0] ml-[31px] md:mt-0 mt-[13px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-500"
                  size="txtRobotoMedium23"
                >
                  Andjon
                </Text>
                <div className="flex flex-row items-end justify-between md:ml-[0] ml-[562px] w-[17%] md:w-full">
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
              <div className="flex flex-col items-center justify-start w-full">
                <div className="bg-blue_gray-900_87 flex flex-col items-center justify-start p-[15px] rounded-[5px] w-full">
                  <div className="flex flex-col justify-start my-[9px] w-full">
                    <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-start md:ml-[0] ml-[33px] w-[39%] md:w-full">
                      <Img
                        className="h-[22px]"
                        src="images/img_refresh.svg"
                        alt="refresh"
                      />
                      <Input
                        name="group727"
                        placeholder="Izlash"
                        className="font-medium leading-[normal] p-0 placeholder:text-gray-400 text-base text-left w-full"
                        wrapClassName="border border-blue_gray-400_7e border-solid w-[91%] sm:w-full"
                        shape="round"
                        color="blue_gray_800_7e"
                        size="xl"
                        variant="fill"
                      ></Input>
                    </div>
                    <Line className="bg-blue_gray-800_01 h-0.5 mt-[19px] w-full" />
                    <div className="flex flex-col gap-[21px] items-start justify-start md:ml-[0] ml-[72px] mt-[22px] w-[91%] md:w-full">
                      <div className="flex sm:flex-col flex-row sm:gap-10 gap-[103px] items-center justify-start w-[61%] md:w-full">
                        <Text
                          className="text-base text-blue_gray-500"
                          size="txtRobotoMedium16"
                        >
                          Shartnoma nomeri
                        </Text>
                        <div className="bg-gray-900_87 flex flex-row gap-3 items-center justify-start p-3.5 rounded-[3px] w-[61%] sm:w-full">
                          <Img
                            className="h-[19px] md:h-auto object-cover w-[5%]"
                            src="images/img_.png"
                            alt="Forty"
                          />
                          <Text
                            className="text-base text-white-A700"
                            size="txtRobotoMedium16WhiteA700"
                          >
                            0053
                          </Text>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row gap-[33px] items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-col items-center justify-start w-[61%] md:w-full">
                          <div className="flex flex-col justify-start w-full">
                            <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                              <Text
                                className="text-base text-blue_gray-500"
                                size="txtRobotoMedium16"
                              >
                                Nomi
                              </Text>
                              <Input
                                name="group422"
                                placeholder="Mehriddin"
                                className="font-medium leading-[normal] p-0 placeholder:text-white-A700 sm:px-5 text-base text-left w-full"
                                wrapClassName="sm:flex-1 pl-[23px] pr-[35px] py-4 sm:w-full"
                                shape="round"
                                color="blue_gray_800_87_04"
                                variant="fill"
                              ></Input>
                            </div>
                            <Text
                              className="md:ml-[0] ml-[244px] text-blue_gray-500_99 text-xs"
                              size="txtRobotoMedium12Bluegray50099"
                            >
                              Ismi
                            </Text>
                          </div>
                        </div>
                        <div className="flex md:flex-1 flex-col justify-start w-[37%] md:w-full">
                          <Input
                            name="group431"
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
                    </div>
                    <div className="flex flex-col items-end justify-start ml-16 md:ml-[0] mt-[15px] w-[91%] md:w-full">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                        <Text
                          className="md:mt-0 mt-[18px] text-base text-blue_gray-500"
                          size="txtRobotoMedium16"
                        >
                          Telefon raqami{" "}
                        </Text>
                        <div className="flex flex-col md:ml-[0] ml-[136px] relative w-[37%] md:w-full">
                          <div className="bg-blue_gray-800_87_04 flex flex-row gap-[21px] items-center justify-start mx-auto p-[11px] rounded-[3px] w-full">
                            <Img
                              className="h-3.5 w-3.5"
                              src="images/img_call.svg"
                              alt="call"
                            />
                            <Text
                              className="my-1 text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              +998 99 161-69-29
                            </Text>
                          </div>
                          <Text
                            className="ml-[5px] mt-[-0.33px] text-blue_gray-500_99 text-sm z-[1]"
                            size="txtRobotoMedium14Bluegray50099"
                          >
                            № 1
                          </Text>
                        </div>
                        <div className="flex flex-col ml-8 md:ml-[0] relative w-[36%] md:w-full">
                          <div className="bg-blue_gray-800_87_04 flex flex-row gap-[23px] items-center justify-start mx-auto p-2.5 rounded-[3px] w-full">
                            <Img
                              className="h-3.5 w-3.5"
                              src="images/img_call.svg"
                              alt="call_One"
                            />
                            <Text
                              className="my-1.5 text-base text-white-A700"
                              size="txtRobotoMedium16WhiteA700"
                            >
                              +998 99 161-69-29
                            </Text>
                          </div>
                          <Text
                            className="ml-3.5 mt-[-0.53px] text-blue_gray-500_99 text-sm z-[1]"
                            size="txtRobotoMedium14Bluegray50099"
                          >
                            № 2
                          </Text>
                        </div>
                      </div>
                      <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-2 w-full">
                        <Text
                          className="sm:mt-0 mt-1.5 text-base text-blue_gray-500"
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
                      <div className="flex flex-col items-center justify-start mt-5 w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                          <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                            <Text
                              className="text-base text-blue_gray-500"
                              size="txtRobotoMedium16"
                            >
                              Manzil
                            </Text>
                            <SelectBox
                              className="md:flex-1 font-medium leading-[normal] md:ml-[0] ml-[188px] text-base text-left w-[37%] md:w-full"
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
                              name="group428"
                              isMulti={false}
                              options={andijonOptionsList}
                              shape="round"
                              color="blue_gray_800_87_04"
                              size="lg"
                              variant="fill"
                            />
                            <div className="bg-blue_gray-800_87_04 flex md:flex-1 flex-row gap-[22px] items-start justify-center ml-8 md:ml-[0] pt-[11px] px-[11px] rounded-[3px] w-[37%] md:w-full">
                              <Img
                                className="h-5 ml-0.5 w-5"
                                src="images/img_home.svg"
                                alt="home"
                              />
                              <Text
                                className="mr-8 text-gray-400 text-sm"
                                size="txtRobotoMedium14Gray400"
                              >
                                <>
                                  Yangi bozor Oripov ko\&#96;cha <br />№ 88 uy{" "}
                                </>
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row items-start justify-between mt-1 w-[49%] md:w-full">
                            <Text
                              className="text-base text-blue_gray-500_99"
                              size="txtRobotoMedium16Bluegray50099"
                            >
                              Hudud
                            </Text>
                            <Text
                              className="text-base text-blue_gray-500_99"
                              size="txtRobotoMedium16Bluegray50099"
                            >
                              Aniq manzil
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start mt-[3px] w-full">
                        <Text
                          className="text-base text-blue_gray-500"
                          size="txtRobotoMedium16"
                        >
                          <>O\&#96;lchov uchun qulay vaqt</>
                        </Text>
                        <Input
                          name="language_Three"
                          placeholder="20:00 "
                          className="!placeholder:text-blue_gray-500 !text-blue_gray-500 font-medium leading-[normal] p-0 text-base text-left w-full"
                          wrapClassName="flex md:flex-1 mb-[65px] md:ml-[0] ml-[63px] w-[37%] md:w-full"
                          suffix={
                            <div className="h-[23px] mb-px ml-[35px] w-[23px] bg-blue_gray-500">
                              <Img
                                className="h-[23px] my-auto"
                                src="images/img_calendar_blue_gray_500.svg"
                                alt="calendar"
                              />
                            </div>
                          }
                          shape="round"
                          color="gray_900_87"
                          size="2xl"
                          variant="fill"
                        ></Input>
                        <div className="flex flex-col md:ml-[0] ml-[30px] relative w-[37%] md:w-full">
                          <div className="bg-gray-900_87 flex flex-col items-start justify-start mx-auto p-[13px] rounded-[3px] w-full">
                            <Text
                              className="mb-[52px] md:ml-[0] ml-[11px] text-base text-blue_gray-500"
                              size="txtRobotoRegular16"
                            >
                              Mijozga 10% chegirma qilinadi
                            </Text>
                          </div>
                          <Text
                            className="ml-5 mt-[-0.43px] text-base text-blue_gray-500 z-[1]"
                            size="txtRobotoMedium16"
                          >
                            Izoh
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start mt-[25px] w-[37%] md:w-full">
                        <Button
                          className="cursor-pointer font-medium leading-[normal] min-w-[356px] rounded-[3px] text-center text-lg"
                          shape="round"
                          color="blue_400"
                          size="md"
                          variant="fill"
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
      </div>
    </>
  );
};

export default ShowroomBuyurtmayaratishTwoPage;
