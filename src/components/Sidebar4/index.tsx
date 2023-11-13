import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

type Sidebar4Props = React.DetailedHTMLProps<
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

const Sidebar4: React.FC<Sidebar4Props> = (props) => {
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
      label: "DASHBOARD",
      href: "/direktordashboard",
      active: window.location.pathname === "/direktordashboard",
    },
    {
      icon: (
        <Img
          className="h-6 mb-2.5 w-6"
          src="images/img_icoutlineshop_blue_gray_500.svg"
          alt="icoutlineshop_One"
        />
      ),
      label: "OMBOR & SAVDO",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_rislideshowline.svg"
          alt="rislideshowline"
        />
      ),
      label: "Sowroomlar oynasi",
    },
    {
      icon: (
        <Img
          className="h-6 w-6"
          src="images/img_fluentclipboar.svg"
          alt="fluentclipboar"
        />
      ),
      label: "<>Hodimlar ro&#96;yhati</>",
    },
    {
      icon: (
        <Img
          className="h-6 mb-[15px] w-6"
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
          className="h-[21px]"
          src="images/img_settings_blue_gray_500.svg"
          alt="settings"
        />
      ),
      label: "Kirim tarixi",
      href: "/moliyakirimtarixi",
      active: window.location.pathname === "/moliyakirimtarixi",
    },
  ];

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <Img
          className="h-[82px] md:ml-[0] ml-[13px] mr-[21px]"
          src="images/img_group834.svg"
          alt="groupSeventySix"
        />
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              gap: "21px",
              paddingBottom: "24px",
              color: "#6e768c",
              fontWeight: 500,
              fontSize: "16px",
              fontFamily: "Roboto",
              paddingLeft: "24px",
              paddingRight: "24px",
            },
          }}
          className="flex flex-col items-center justify-start mt-[93px] sm:pr-5 pr-[35px] w-full"
        >
          {sideBarMenu?.map((menu, i) => (
            <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
              {menu.label}
            </MenuItem>
          ))}
        </Menu>
        {!collapsed && (
          <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[208px] ml-0.5 md:ml-[0] mr-[7px] mt-[91px]"
            onClick={() => navigate("/moliyabuyurtmagachiqimtarixione")}
            leftIcon={
              <Img
                className="mr-[18px]"
                src="images/img_user_blue_gray_500.svg"
                alt="user"
              />
            }
          >
            <div className="font-medium font-roboto leading-[normal] text-base text-blue_gray-500 text-left uppercase">
              Buyurtmaga chiqim
            </div>
          </Button>
        )}
        {!collapsed && (
          <Button
            className="common-pointer bg-transparent cursor-pointer flex items-center justify-center min-w-[178px] mr-[39px] mt-[35px]"
            onClick={() => navigate("/showroommijozlarroyhatione")}
            leftIcon={
              <Img
                className="h-6 mr-5"
                src="images/img_bipersonworkspace.svg"
                alt="bi:person-workspace"
              />
            }
          >
            <div className="font-medium font-roboto leading-[normal] text-blue_gray-500 text-left text-sm uppercase">
              <>Mijozlar ro\&#96;yhati</>
            </div>
          </Button>
        )}
      </Sidebar>
    </>
  );
};

Sidebar4.defaultProps = {};

export default Sidebar4;
