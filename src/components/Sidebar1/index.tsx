import React from "react";

import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Line, Text } from "components";

type Sidebar1Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;
type SideBarMenuType = {
  icon?: JSX.Element;
  label: JSX.Element | string;
  suffix?: JSX.Element;
  href?: string;
  target?: string;
  active?: boolean;
}[];

const Sidebar1: React.FC<Sidebar1Props> = (props) => {
  const navigate = useNavigate();

  const sideBarMenu: SideBarMenuType = [
    { label: "<>O&#96;lcham</>" },
    { label: "1600 " },
    { label: "1200 " },
    { label: "1200 " },
    { label: "1133 " },
    { label: "1133 " },
    { label: "483 " },
    { label: "1199" },
    { label: "1228 " },
    { label: "1199 " },
    { label: "1706 " },
    { label: "1306 " },
    { label: "1306 " },
    { label: "1253" },
    { label: "603 " },
    { label: "1253 " },
    { label: "603  " },
  ];

  return (
    <>
      <Sidebar className={props.className}>
        <div className="bg-blue_gray-900 flex md:flex-col flex-row gap-[50px] items-center justify-start p-[9px] w-full">
          <Img
            className="common-pointer h-[41px] mb-[995px] md:ml-[0] ml-[17px] mr-[412px] w-[41px]"
            src="images/img_arrowleft.svg"
            alt="arrowleft_One"
            onClick={() => navigate(-1)}
          />
          <div className="flex flex-col items-center justify-start">
            <Text
              className="text-2xl md:text-[22px] text-gray-400 sm:text-xl"
              size="txtRobotoMedium24"
            >
              Bichish kartasi\ №120003
            </Text>
          </div>
        </div>
        <Img
          className="common-pointer h-[41px] mb-[995px] md:ml-[0] ml-[17px] mr-[412px] w-[41px]"
          src="images/img_arrowleft.svg"
          alt="arrowleft_One"
          onClick={() => navigate(-1)}
        />
        <div className="flex flex-col items-center justify-start mb-[1001px] ml-[49px] mt-1.5">
          <Text
            className="text-2xl md:text-[22px] text-gray-400 sm:text-xl"
            size="txtRobotoMedium24"
          >
            Bichish kartasi\ №120003
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start mb-[444px] mt-[72px] w-full">
          <div className="flex flex-col items-start justify-start w-full">
            <Line className="bg-blue_gray-800_01 h-px w-full" />
            <Line className="bg-blue_gray-800_01 h-0.5 mt-[41px] w-full" />
            <Line className="bg-blue_gray-800_01 h-px mt-7 w-full" />
            <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[181px] mt-7 w-[62%]" />
            <Line className="bg-blue_gray-800_01 h-[3px] mt-8 w-full" />
            <Line className="bg-blue_gray-800_01 h-px mt-7 w-full" />
            <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[181px] mt-7 w-[63%]" />
            <Line className="bg-blue_gray-800_01 h-[3px] mt-8 w-full" />
            <Line className="bg-blue_gray-800_01 h-px mt-[27px] w-full" />
            <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[181px] mt-[29px] w-[63%]" />
            <Line className="bg-blue_gray-800_01 h-0.5 mt-[30px] w-full" />
            <Line className="bg-blue_gray-800_01 h-px mt-[27px] w-full" />
            <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[181px] mt-[29px] w-[63%]" />
            <Line className="bg-blue_gray-800_01 h-0.5 mt-8 w-full" />
            <Line className="bg-blue_gray-800_01 h-px mt-7 w-full" />
            <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[181px] mt-7 w-[63%]" />
            <Line className="bg-blue_gray-800_01 h-px md:ml-[0] ml-[181px] mt-[29px] w-[63%]" />
            <Line className="bg-blue_gray-800_01 h-0.5 mt-[25px] w-full" />
          </div>
        </div>
        <Line className="bg-blue_gray-800_03 h-[980px] mb-0.5 ml-[182px] mr-[297px] mt-[72px] w-px" />
        <Line className="bg-blue_gray-800_03 h-[982px] ml-[251px] mr-[228px] mt-[72px] w-px" />
        <Line className="bg-blue_gray-800_03 h-[982px] ml-[323px] mr-[156px] mt-[72px] w-px" />
        <Line className="bg-blue_gray-800_03 h-[980px] ml-[364px] mr-[115px] mt-[74px] w-px" />
        <Line className="bg-blue_gray-800_03 h-[536px] mb-[446px] ml-[479px] mt-[72px] w-px" />
        <div className="flex flex-col gap-[7px] items-start justify-start mb-[853px] ml-[371px] mr-[58px] mt-[120px] w-[11%]">
          <div className="flex flex-col gap-[9px] items-start justify-start w-full">
            <div className="flex flex-col h-[22px] items-center justify-start w-[22px]">
              <Text
                className="bg-light_green-400 border border-blue_gray-500 border-solid h-[22px] justify-center px-[7px] rounded-[5px] text-[15px] text-white-A700 w-[22px]"
                size="txtRobotoMedium15WhiteA700"
              >
                3
              </Text>
            </div>
            <div className="flex flex-row gap-[7px] items-center justify-between w-full">
              <div className="flex flex-col h-[22px] items-center justify-start w-[22px]">
                <Text
                  className="bg-light_green-400 border border-blue_gray-500 border-solid h-[22px] justify-center px-[7px] rounded-[5px] text-[15px] text-white-A700 w-[22px]"
                  size="txtRobotoMedium15WhiteA700"
                >
                  2
                </Text>
              </div>
              <div className="flex flex-col h-[22px] items-center justify-start w-[22px]">
                <Text
                  className="bg-orange-300 border border-blue_gray-500 border-solid h-[22px] justify-center px-[7px] rounded-[5px] text-[15px] text-white-A700 w-[22px]"
                  size="txtRobotoMedium15WhiteA700"
                >
                  2
                </Text>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-[22px] items-center justify-start w-[22px]">
            <Text
              className="bg-white-A700 border border-blue_gray-500 border-solid h-[22px] justify-center px-[7px] rounded-[5px] text-[15px] text-blue_gray-500 w-[22px]"
              size="txtRobotoMedium15Bluegray500"
            >
              2
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start mb-[535px] ml-2.5 mr-[304px] mt-[82px]">
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
            Aldoks(kosa) Dubmocco
          </Text>
          <Text
            className="mt-[78px] text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            Aldoks(qanot) Silver
          </Text>
          <Text
            className="mt-[71px] text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            <>Aldoks(o\&#96;rta) </>
          </Text>
          <Text
            className="mt-[73px] text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            Aldoks
          </Text>
          <Text
            className="mt-20 text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            Aldoks
          </Text>
        </div>
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              paddingLeft: "4px",
              flexDirection: "column",
              color: "#c0c4c6",
              fontWeight: 500,
              fontSize: "15px",
              fontFamily: "Roboto",
              paddingTop: "4px",
              paddingBottom: "4px",
              [`&:hover, &.ps-active`]: { color: "#6e768c" },
            },
          }}
          className="flex flex-col items-center justify-start mb-[460px] mt-[78px] md:pr-10 sm:pr-5 pr-[423px] w-[12%]"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
        <div className="flex flex-col gap-[27px] items-center justify-start mb-[451px] ml-[326px] mr-[124px] mt-[83px] w-[7%]">
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
              className="mt-2 text-[15px] text-gray-400"
              size="txtRobotoMedium15Gray400"
            >
              4
            </Text>
            <Text
              className="mt-[7px] text-[15px] text-gray-400"
              size="txtRobotoMedium15Gray400"
            >
              2
            </Text>
            <Text
              className="mt-[22px] text-[15px] text-gray-400"
              size="txtRobotoMedium15Gray400"
            >
              5
            </Text>
            <Text
              className="mt-2 text-[15px] text-gray-400"
              size="txtRobotoMedium15Gray400"
            >
              1
            </Text>
            <Text
              className="mt-[7px] text-[15px] text-gray-400"
              size="txtRobotoMedium15Gray400"
            >
              6
            </Text>
            <Text
              className="mt-[19px] text-[15px] text-gray-400"
              size="txtRobotoMedium15Gray400"
            >
              2
            </Text>
            <Text
              className="mt-2 text-[15px] text-gray-400"
              size="txtRobotoMedium15Gray400"
            >
              3
            </Text>
            <Text
              className="mt-[7px] text-[15px] text-gray-400"
              size="txtRobotoMedium15Gray400"
            >
              1
            </Text>
            <Text
              className="mt-[31px] text-[15px] text-gray-400"
              size="txtRobotoMedium15Gray400"
            >
              3
            </Text>
            <Text
              className="mt-2 text-[15px] text-gray-400"
              size="txtRobotoMedium15Gray400"
            >
              4
            </Text>
            <Text
              className="mt-[7px] text-[15px] text-gray-400"
              size="txtRobotoMedium15Gray400"
            >
              2
            </Text>
            <Text
              className="mt-5 text-[15px] text-gray-400"
              size="txtRobotoMedium15Gray400"
            >
              4
            </Text>
            <Text
              className="mt-2 text-[15px] text-gray-400"
              size="txtRobotoMedium15Gray400"
            >
              1
            </Text>
            <Text
              className="mt-[7px] text-[15px] text-gray-400"
              size="txtRobotoMedium15Gray400"
            >
              2
            </Text>
            <Text
              className="mt-3.5 text-[15px] text-gray-400"
              size="txtRobotoMedium15Gray400"
            >
              5
            </Text>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start mb-[456px] ml-[191px] mr-[237px] mt-[82px] w-[11%]">
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
            className="mt-[27px] text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            90 x90
          </Text>
          <Text
            className="mt-2 text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            90 x90
          </Text>
          <Text
            className="mt-2 text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            90 x90
          </Text>
          <Text
            className="mt-5 text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            90 x90
          </Text>
          <Text
            className="mt-2 text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            90 x90
          </Text>
          <Text
            className="mt-2 text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            90 x90
          </Text>
          <Text
            className="mt-[18px] text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            90 x90
          </Text>
          <Text
            className="mt-2 text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            90 x90
          </Text>
          <Text
            className="mt-2 text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            90 x90
          </Text>
          <Text
            className="mt-[30px] text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            45 x 45
          </Text>
          <Text
            className="mt-2 text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            45 x 45
          </Text>
          <Text
            className="mt-2 text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            45 x 45
          </Text>
          <Text
            className="mt-[19px] text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            45 x 45
          </Text>
          <Text
            className="mt-2 text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            45 x 45
          </Text>
          <Text
            className="mt-2 text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            45 x 45
          </Text>
          <Text
            className="mt-2 text-[15px] text-gray-400"
            size="txtRobotoMedium15Gray400"
          >
            45 x 45
          </Text>
        </div>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
