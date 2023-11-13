import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, SelectBox, Text } from "components";
import FrameFiftyTwoDatafiltr from "components/FrameFiftyTwoDatafiltr";
import OmborTaminotchigaZayavkaOneTab from "components/OmborTaminotchigaZayavkaOneTab";

type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const mahsulotGuruhiOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const ShowroomBuyurtmayaratishOnePage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_rislideshowline.svg"
          alt="rislideshowline"
        />
      ),
      label: "Sowroomlar oynasi",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[3px] w-6"
          src="images/img_fluentclipboar.svg"
          alt="fluentclipboar"
        />
      ),
      label: "<>Hodimlar ro&#96;yhati</>",
    },
    {
      icon: (
        <Img
          className="h-6 mb-2 w-6"
          src="images/img_mdicircularsaw_blue_gray_500.svg"
          alt="mdicircularsaw"
        />
      ),
      label: "Ombor qoldiq ",
      href: "/omborqoldiqidsi",
      active: window.location.pathname === "/omborqoldiqidsi",
    },
    {
      icon: (
        <Img
          className="h-[21px] mb-1"
          src="images/img_settings_blue_gray_500.svg"
          alt="settings"
        />
      ),
      label: "Kirim tarixi",
      href: "/moliyakirimtarixi",
      active: window.location.pathname === "/moliyakirimtarixi",
    },
    {
      icon: (
        <Img
          className="h-[21px] mb-[5px]"
          src="images/img_settings_blue_gray_500.svg"
          alt="settings_One"
        />
      ),
      label: "Chiqim tarixi",
      href: "/omborchiqimtarixi",
      active: window.location.pathname === "/omborchiqimtarixi",
    },
    {
      icon: (
        <Img
          className="h-[21px] mb-1"
          src="images/img_user_blue_gray_500.svg"
          alt="user"
        />
      ),
      label: "Buyurtmaga chiqim",
      href: "/moliyabuyurtmagachiqimtarixi",
      active: window.location.pathname === "/moliyabuyurtmagachiqimtarixi",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[25px] w-6"
          src="images/img_bipersonworkspace.svg"
          alt="bipersonworkspa"
        />
      ),
      label: "<>Mijozlar ro&#96;yhati</>",
    },
  ];

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat font-roboto h-[900px] mx-auto sm:pr-5 pr-[29px] py-[29px] relative w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[215px] bg-cover bg-no-repeat flex h-screen md:hidden justify-start left-[2%] overflow-auto md:px-5 top-[0]"
          style={{ backgroundImage: "url('images/img_group834.svg')" }}
        >
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[82px] items-center justify-start ml-5 md:ml-[0] mr-3 w-[85%]"
            style={{ backgroundImage: "url('images/img_group834.svg')" }}
          >
            <Img
              className="h-[82px]"
              src="images/img_group834.svg"
              alt="group103"
            />
          </div>
          <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[127px] ml-0.5 md:ml-[0] mr-[86px] mt-[93px]"
            onClick={() => navigate("/direktordashboard")}
            leftIcon={
              <Img
                className="h-6 mr-[21px]"
                src="images/img_icoutlineshop.svg"
                alt="ic:outline-shop"
              />
            }
          >
            <div className="font-medium leading-[normal] text-blue_gray-500 text-left text-sm">
              DASHBOARD
            </div>
          </Button>
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                gap: "20px",
                paddingBottom: "28px",
                paddingLeft: "28px",
                paddingRight: "25px",
                color: "#6e768c",
                fontWeight: 500,
                fontSize: "16px",
              },
            }}
            className="flex flex-col items-center justify-end mt-[101px] sm:pr-5 pr-7 w-full"
          >
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </Menu>
        </Sidebar>
        <div className="absolute flex flex-col gap-[18px] items-start justify-start md:px-5 right-[5%] top-[3%] w-[76%]">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
            <FrameFiftyTwoDatafiltr className="flex md:flex-1 md:flex-col flex-row gap-[17px] items-center justify-between md:mt-0 mt-[3px] w-[65%] md:w-full" />
            <div className="flex md:flex-1 flex-row items-end justify-between w-[17%] md:w-full">
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
          <div className="bg-blue_gray-900_87_01 flex sm:flex-col flex-row sm:gap-5 items-center justify-start px-[3px] w-[42%] md:w-full">
            <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-start w-[37%] sm:w-full">
              <OmborTaminotchigaZayavkaOneTab
                className="flex flex-col items-center justify-start shadow-bs2 w-[165px]"
                username="homashyo"
              />
            </div>
            <OmborTaminotchigaZayavkaOneTab
              className="flex flex-col items-center justify-start w-[136px]"
              username="tAYYOR "
            />
            <OmborTaminotchigaZayavkaOneTab
              className="flex flex-col items-center justify-start w-[121px]"
              username="sAVDO"
            />
          </div>
        </div>
        <div className="absolute bottom-[3%] flex flex-col items-center justify-start md:px-5 right-[3%] w-[79%]">
          <div className="bg-blue_gray-900_87_01 flex flex-col items-center justify-end pr-0.5 pt-0.5 rounded-[5px] w-full">
            <div className="flex flex-col gap-[9px] items-center justify-start mt-2.5 w-full">
              <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-[96%] md:w-full">
                <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-between mb-[3px] w-[39%] md:w-full">
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
                <div className="h-10 md:h-[39px] md:mt-0 mt-[3px] relative w-[19%] md:w-full">
                  <div className="bg-blue_gray-800_8d border border-blue_gray-600_8d border-solid h-[39px] m-auto rounded-[3px] w-full"></div>
                  <SelectBox
                    className="absolute bottom-[23%] font-medium inset-x-[0] leading-[normal] mx-auto text-base text-gray-400 text-left w-[87%] sm:w-full"
                    placeholderClassName="text-gray-400"
                    indicator={
                      <Img
                        className="h-[3px] mr-[0] outline-gray-400 outline-[0.5px] outline w-[7px] right-[0] absolute"
                        src="images/img_arrowdown_gray_400.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="group744"
                    options={mahsulotGuruhiOptionsList}
                    isSearchable={false}
                    placeholder="Mahsulot guruhi"
                  />
                </div>
              </div>
              <div
                className="bg-cover bg-no-repeat flex flex-col h-[651px] items-start justify-start p-3.5 w-full"
                style={{ backgroundImage: "url('images/img_group149.svg')" }}
              >
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start ml-2.5 md:ml-[0] w-[85%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[2%] md:w-full">
                    <Img
                      className="h-[18px] md:h-auto object-cover w-[89%] sm:w-full"
                      src="images/img__18x15.png"
                      alt="ThirtySeven"
                    />
                    <Text
                      className="mt-10 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      01
                    </Text>
                    <Text
                      className="mt-5 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      02
                    </Text>
                    <Text
                      className="mt-[15px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      03
                    </Text>
                    <Text
                      className="mt-[21px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      04
                    </Text>
                    <Text
                      className="mt-[23px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      05
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[49px]">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Nomi
                    </Text>
                    <Text
                      className="mt-[39px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      PVH (Dummocco) 6500
                    </Text>
                    <Text
                      className="mt-[21px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Aldoks
                    </Text>
                    <Text
                      className="mt-[15px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Aldoks
                    </Text>
                    <Text
                      className="mt-[21px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Aldoks
                    </Text>
                    <Text
                      className="mt-[23px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Aldoks
                    </Text>
                    <Text
                      className="mt-[372px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Summa{" "}
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[210px]">
                    <Text
                      className="text-[15px] text-blue_gray-500 text-center"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      <>
                        Mahsulot <br />
                        guruhi
                      </>
                    </Text>
                    <Text
                      className="mt-[23px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Profil
                    </Text>
                    <Text
                      className="mt-5 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Profil
                    </Text>
                    <Text
                      className="mt-[15px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Profil
                    </Text>
                    <Text
                      className="mt-[21px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Aksesuar
                    </Text>
                    <Text
                      className="mt-[23px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      Aksesuar
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[33px]">
                    <Text
                      className="text-[15px] text-blue_gray-500"
                      size="txtRobotoMedium15Bluegray500"
                    >
                      Kelish narxi
                    </Text>
                    <Text
                      className="mt-[41px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      80 000
                    </Text>
                    <Text
                      className="mt-5 text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      80 000
                    </Text>
                    <Text
                      className="mt-[15px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      150 000
                    </Text>
                    <Text
                      className="mt-[21px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      150 000
                    </Text>
                    <Text
                      className="mt-[23px] text-[15px] text-gray-400"
                      size="txtRobotoMedium15Gray400"
                    >
                      150 000
                    </Text>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[75px] w-[4%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Soni
                      </Text>
                      <Text
                        className="mt-[41px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        5
                      </Text>
                      <Text
                        className="mt-[19px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        25
                      </Text>
                      <Text
                        className="mt-[15px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        35
                      </Text>
                      <Text
                        className="mt-[21px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        65
                      </Text>
                      <Text
                        className="mt-[23px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        45
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[123px] w-[9%] md:w-full">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text
                        className="text-[15px] text-blue_gray-500"
                        size="txtRobotoMedium15Bluegray500"
                      >
                        Sumasi
                      </Text>
                      <Text
                        className="mt-[41px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        400 000
                      </Text>
                      <Text
                        className="mt-5 text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        2 000 000
                      </Text>
                      <Text
                        className="mt-[15px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        5 250 000
                      </Text>
                      <Text
                        className="mt-[21px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        9 750 000
                      </Text>
                      <Text
                        className="mt-[23px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        6 750 000
                      </Text>
                      <Text
                        className="mt-[372px] text-[15px] text-gray-400"
                        size="txtRobotoMedium15Gray400"
                      >
                        24 750 000
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[60px] left-[0] md:px-5 top-[30%] w-1/5">
          <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-start justify-center m-auto p-[17px] w-full">
            <div className="flex flex-row gap-[21px] items-center justify-start md:ml-[0] ml-[11px] w-[65%] md:w-full">
              <Img
                className="h-6 w-6"
                src="images/img_icoutlineshop_white_a700_24x24.svg"
                alt="icoutlineshop"
              />
              <Text
                className="text-sm text-white-A700 uppercase"
                size="txtRobotoMedium14WhiteA700"
              >
                OMBOR & SAVDO
              </Text>
            </div>
          </div>
          <div className="absolute bg-red-300 h-[60px] inset-y-[0] left-[0] my-auto w-[6%]"></div>
        </div>
      </div>
    </>
  );
};

export default ShowroomBuyurtmayaratishOnePage;
