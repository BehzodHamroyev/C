import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";
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

const MoliyaHodimlarroyhatiThreePage: React.FC = () => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img
          className="h-6 mb-4 w-6"
          src="images/img_icoutlineshop.svg"
          alt="icoutlineshop"
        />
      ),
      label: "DASHBOARD",
      href: "/direktordashboard",
      active: window.location.pathname === "/direktordashboard",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_arrowdown_blue_gray_500.svg"
          alt="arrowdown"
        />
      ),
      label: "BUYURTMALAR",
      href: "/",
      active: window.location.pathname === "/",
    },
    {
      icon: (
        <Img
          className="h-6"
          src="images/img_settings_blue_gray_500.svg"
          alt="settings"
        />
      ),
      label: "Kirim ",
      href: "/moliyakirimqilishfour",
      active: window.location.pathname === "/moliyakirimqilishfour",
    },
    {
      icon: (
        <Img
          className="h-6"
          src="images/img_settings_blue_gray_500.svg"
          alt="settings_One"
        />
      ),
      label: "Chiqim ",
      href: "/ombormahsulotchiqimiprofillar",
      active: window.location.pathname === "/ombormahsulotchiqimiprofillar",
    },
  ];

  return (
    <>
      <div
        className="bg-cover bg-gray-900 bg-no-repeat font-roboto h-[900px] mx-auto pr-[19px] py-[19px] relative w-full"
        style={{ backgroundImage: "url('images/img_showroombuyurtmalar.png')" }}
      >
        <Sidebar
          onClick={() => collapseSidebar(!collapsed)}
          className="!sticky !w-[238px] flex h-screen md:hidden justify-start left-[2%] overflow-auto md:px-5 top-[0]"
        >
          <Img
            className="h-[82px] ml-6 md:ml-[0] mr-[30px]"
            src="images/img_group834.svg"
            alt="groupSeventySix"
          />
          <Menu
            menuItemStyles={{
              button: {
                padding: 0,
                paddingBottom: "24px",
                gap: "25px",
                marginTop: "2px",
                color: "#6e768c",
                fontWeight: 500,
                fontSize: "16px",
                paddingLeft: "24px",
                paddingRight: "24px",
              },
            }}
            className="flex flex-col items-center justify-start mt-[105px] md:pr-10 sm:pr-5 pr-[98px] w-[69%]"
          >
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </Menu>
          {!collapsed && (
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[233px] ml-1 md:ml-[0] mt-[30px]"
              onClick={() => navigate("/moliyavalyutaayriboshlash")}
              leftIcon={
                <div className="mt-px mr-5 bg-blue_gray-500">
                  <Img src="images/img_minimize.svg" alt="minimize" />
                </div>
              }
            >
              <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
                Valyuta ayriboshlash
              </div>
            </Button>
          )}
          {!collapsed && (
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[204px] md:ml-[0] ml-[3px] mr-[30px] mt-[31px]"
              onClick={() => navigate("/moliyahodimlarroyhatisix")}
              leftIcon={
                <Img
                  className="h-6 mr-6"
                  src="images/img_fluentclipboar.svg"
                  alt="fluent:clipboard-bullet-list-rtl-20-regular"
                />
              }
            >
              <div className="font-medium leading-[normal] text-base text-blue_gray-500 text-left uppercase">
                <>Hodimlar ro\&#96;yhati</>
              </div>
            </Button>
          )}
          {!collapsed && (
            <Button
              className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[131px] ml-1 md:ml-[0] mr-[101px] mt-[33px]"
              onClick={() => navigate("/moliyahodimlarroyhati")}
              leftIcon={
                <div className="mr-[22px] bg-blue_gray-500">
                  <Img src="images/img_union_blue_gray_500.svg" alt="Union" />
                </div>
              }
            >
              <div className="font-medium leading-[normal] text-blue_gray-500 text-left text-sm uppercase">
                qarzdorlik
              </div>
            </Button>
          )}
        </Sidebar>
        <div className="absolute flex flex-col gap-[18px] justify-start md:px-5 right-[5%] top-[3%] w-[76%]">
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between ml-1.5 md:ml-[0] w-full">
            <FrameFiftyTwoDatafiltr className="flex md:flex-1 md:flex-col flex-row gap-[17px] items-center justify-between w-[66%] md:w-full" />
            <div className="flex md:flex-1 flex-row items-center justify-end w-[21%] md:w-full">
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
                alt="arrowdown_One"
              />
            </div>
          </div>
          <div className="bg-blue_gray-900 flex sm:flex-col flex-row sm:gap-5 items-center justify-start mr-[626px] pl-[3px] rounded-[5px] shadow-bs4 w-[43%] md:w-full">
            <OmborTaminotchigaZayavkaOneTab
              className="flex flex-col items-center justify-start w-[142px]"
              username="Oyna"
            />
            <OmborTaminotchigaZayavkaOneTab
              className="flex flex-col items-center justify-start ml-4 sm:ml-[0] w-[135px]"
              username="Diller"
            />
            <OmborTaminotchigaZayavkaOneTab
              className="flex flex-col items-center justify-start sm:ml-[0] ml-[43px] w-[129px]"
              username="taminot"
            />
          </div>
        </div>
        <div className="absolute bottom-[12%] h-[632px] sm:h-[672px] md:h-[922px] md:px-5 right-[2%] w-4/5 md:w-full">
          <div className="absolute bg-blue_gray-900_87_01 flex flex-col h-full inset-[0] items-start justify-center m-auto p-[25px] sm:px-5 rounded-[5px] w-full">
            <div className="flex sm:flex-col flex-row gap-[21px] items-center justify-start mb-[539px] w-[38%] md:w-full">
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
          </div>
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col h-[299px] inset-x-[0] items-start justify-start mx-auto p-2 top-[14%] w-full"
            style={{ backgroundImage: "url('images/img_group271.svg')" }}
          >
            <div className="flex md:flex-col flex-row gap-[37px] items-center justify-start mb-[3px] ml-3.5 md:ml-[0] w-[78%] md:w-full">
              <div className="flex flex-col items-start justify-start w-[3%] md:w-full">
                <Img
                  className="h-[18px] md:h-auto object-cover w-[89%] sm:w-full"
                  src="images/img_.png"
                  alt="TwoHundredFiftyThree"
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
                  className="mt-[23px] text-[15px] text-gray-400"
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
                <Text
                  className="h-[18px] mt-[26px] text-[15px] text-gray-400"
                  size="txtRobotoMedium15Gray400"
                >
                  06
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row md:gap-10 gap-[103px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 w-[94%] md:w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    Mahsulot nomi{" "}
                  </Text>
                  <Text
                    className="mt-[25px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Akfa seriy (6200){" "}
                  </Text>
                  <Text
                    className="mt-6 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Akfa dub mocco(6500)
                  </Text>
                  <Text
                    className="mt-[21px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Exclusive 7000
                  </Text>
                  <Text
                    className="mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Exclusive 7000
                  </Text>
                  <Text
                    className="mt-[29px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Engelberg 8500
                  </Text>
                  <Text
                    className="mt-[25px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Engelberf 9000
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    Yetkazib beruvchi nomi
                  </Text>
                  <Text
                    className="mt-6 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    akfa Andijon
                  </Text>
                  <Text
                    className="mt-6 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    akfa Andijon
                  </Text>
                  <Text
                    className="mt-[23px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    akfa Andijon
                  </Text>
                  <Text
                    className="mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    akfa Andijon
                  </Text>
                  <Text
                    className="mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    akfa Andijon
                  </Text>
                  <Text
                    className="mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    akfa Andijon
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
                    className="mt-[23px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Yodoviy
                  </Text>
                  <Text
                    className="h-[18px] mt-6 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Oq
                  </Text>
                  <Text
                    className="mt-[22px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Qora
                  </Text>
                  <Text
                    className="h-[18px] mt-[27px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Oq
                  </Text>
                  <Text
                    className="h-[18px] mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Oq
                  </Text>
                  <Text
                    className="h-[18px] mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    Oq
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                  <Text
                    className="text-[15px] text-blue_gray-500"
                    size="txtRobotoMedium15Bluegray500"
                  >
                    Narxi
                  </Text>
                  <Text
                    className="mt-[23px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    32 000
                  </Text>
                  <Text
                    className="mt-6 text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    40 000
                  </Text>
                  <Text
                    className="mt-[23px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    100 000
                  </Text>
                  <Text
                    className="mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    300 000
                  </Text>
                  <Text
                    className="mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    40 000
                  </Text>
                  <Text
                    className="mt-[26px] text-[15px] text-gray-400"
                    size="txtRobotoMedium15Gray400"
                  >
                    100 000
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="absolute bottom-1/4 h-[60px] left-[0] md:px-5 w-1/5">
          <div className="absolute bg-blue_gray-800_7e flex flex-col h-full inset-[0] items-start justify-center m-auto p-[18px] w-full">
            <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[13px] mt-[3px] w-[82%] md:w-full">
              <Img
                className="h-[19px] w-[19px]"
                src="images/img_ticket_white_a700.svg"
                alt="ticket"
              />
              <Text
                className="text-base text-white-A700 uppercase"
                size="txtRobotoMedium16WhiteA700"
              >
                Mahsulot narxlari{" "}
              </Text>
            </div>
          </div>
          <div className="absolute bg-red-300 h-[60px] inset-y-[0] left-[0] my-auto w-[6%]"></div>
        </div>
      </div>
    </>
  );
};

export default MoliyaHodimlarroyhatiThreePage;
