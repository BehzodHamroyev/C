import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

type Sidebar3Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Sidebar3: React.FC<Sidebar3Props> = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

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
              color: "#6e768c",
              fontWeight: 500,
              fontSize: "14px",
              fontFamily: "Roboto",
              paddingLeft: "24px",
              paddingRight: "24px",
            },
          }}
          className="flex flex-col items-center justify-start mt-[93px] sm:pr-5 pr-[35px] w-full"
        >
          <div className="flex flex-col gap-[35px] items-center justify-start w-full">
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
              <Text>DASHBOARD</Text>
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  className="h-6 w-6"
                  src="images/img_icoutlineshop_blue_gray_500.svg"
                  alt="icoutlineshop_One"
                />
              }
            >
              <Text className="uppercase">OMBOR & SAVDO</Text>
            </MenuItem>
          </div>
          <Button
            className="bg-transparent cursor-pointer flex items-center justify-center min-w-[217px] mt-[35px]"
            leftIcon={
              <Img
                className="h-6 mr-5"
                src="images/img_rislideshowline.svg"
                alt="ri:slideshow-line"
              />
            }
          >
            <div className="font-medium font-roboto leading-[normal] text-base text-blue_gray-500 text-left uppercase">
              Sowroomlar oynasi
            </div>
          </Button>
          <Button
            className="bg-transparent cursor-pointer flex items-center justify-center min-w-[217px] mt-[35px]"
            leftIcon={
              <Img
                className="h-6 mr-5"
                src="images/img_fluentclipboar.svg"
                alt="fluent:clipboard-bullet-list-rtl-20-regular"
              />
            }
          >
            <div className="font-medium font-roboto leading-[normal] text-base text-blue_gray-500 text-left uppercase">
              <>Hodimlar ro\&#96;yhati</>
            </div>
          </Button>
          <Button
            className="bg-transparent cursor-pointer flex items-center justify-center min-w-[217px] mt-[35px]"
            leftIcon={
              <Img
                className="h-6 mr-5"
                src="images/img_mdicircularsaw_blue_gray_500.svg"
                alt="mdi:circular-saw"
              />
            }
          >
            <div className="font-medium font-roboto leading-[normal] text-base text-blue_gray-500 text-left uppercase">
              Ombor qoldiq{" "}
            </div>
          </Button>
          <Button
            className="bg-transparent cursor-pointer flex items-center justify-center min-w-[217px] mt-[35px]"
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
              Kirim tarixi
            </div>
          </Button>
          <div className="flex flex-col gap-[35px] items-center justify-start mt-[91px] w-full">
            <MenuItem
              icon={
                <Img
                  className="h-[21px]"
                  src="images/img_user_blue_gray_500.svg"
                  alt="user"
                />
              }
              active={
                window.location.pathname === "/moliyabuyurtmagachiqimtarixi"
              }
            >
              <Text className="text-base uppercase">Buyurtmaga chiqim</Text>
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  className="h-6 w-6"
                  src="images/img_bipersonworkspace.svg"
                  alt="bipersonworkspa"
                />
              }
            >
              <Text className="uppercase">
                <>Mijozlar ro\&#96;yhati</>
              </Text>
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar3.defaultProps = {};

export default Sidebar3;
