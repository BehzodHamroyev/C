import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

type Sidebar2Props = React.DetailedHTMLProps<
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

const Sidebar2: React.FC<Sidebar2Props> = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu: SideBarMenuType = [
    {
      icon: (
        <Img className="h-6" src="images/img_minimize.svg" alt="minimize" />
      ),
      label: "Valyuta ayriboshlash",
      href: "/moliyavalyutaayriboshlash",
      active: window.location.pathname === "/moliyavalyutaayriboshlash",
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
          className="h-[21px]"
          src="images/img_union_blue_gray_500.svg"
          alt="union"
        />
      ),
      label: "qarzdorlik",
    },
    {
      icon: (
        <Img
          className="h-[19px] w-[19px]"
          src="images/img_ticket.svg"
          alt="ticket"
        />
      ),
      label: "Mahsulot narxlari ",
    },
  ];

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <Img
          className="h-[82px] md:ml-[0] ml-[17px] mr-[37px]"
          src="images/img_group834.svg"
          alt="groupSeventySix"
        />
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              gap: "25px",
              color: "#6e768c",
              fontWeight: 500,
              fontSize: "16px",
              fontFamily: "Roboto",
              paddingLeft: "36px",
              paddingRight: "36px",
            },
          }}
          className="flex flex-col items-center justify-start mt-[88px] sm:pr-5 pr-[31px] w-full"
        >
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <MenuItem
              icon={
                <Img
                  className="h-6 w-6"
                  src="images/img_icoutlineshop.svg"
                  alt="icoutlineshop"
                />
              }
              active={window.location.pathname === "/direktordashboard"}
            >
              <Text className="text-sm">DASHBOARD</Text>
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown_blue_gray_500.svg"
                  alt="arrowdown"
                />
              }
              active={window.location.pathname === "/"}
            >
              <Text className="uppercase">BUYURTMALAR</Text>
            </MenuItem>
          </div>
          <Button
            className="bg-transparent cursor-pointer flex items-center justify-center min-w-[238px] mt-[27px]"
            leftIcon={
              <div className="mr-[13px] bg-blue_gray-500">
                <Img
                  src="images/img_settings_blue_gray_500.svg"
                  alt="settings"
                />
              </div>
            }
          >
            <div className="font-medium font-roboto leading-[normal] text-base text-blue_gray-500 text-left uppercase">
              Kirim{" "}
            </div>
          </Button>
          <div className="flex flex-col gap-[33.81px] items-center justify-start mt-[178px] w-full">
            {sideBarMenu?.map((menu, i) => (
              <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                {menu.label}
              </MenuItem>
            ))}
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar2.defaultProps = {};

export default Sidebar2;
