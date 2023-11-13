import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { useNavigate } from "react-router-dom";

import { Img, Text } from "components";

type Sidebar5Props = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Sidebar5: React.FC<Sidebar5Props> = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();
  const navigate = useNavigate();

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
      >
        <Img
          className="common-pointer h-[82px] ml-2 md:ml-[0] mr-[17px]"
          src="images/img_group834.svg"
          alt="groupSeventySix"
          onClick={() => navigate("/savdobolimitolovhisobi")}
        />
        <Menu
          menuItemStyles={{
            button: {
              padding: 0,
              gap: "29px",
              paddingLeft: "41px",
              color: "#6e768c",
              fontWeight: 500,
              fontSize: "16px",
              fontFamily: "Roboto",
            },
          }}
          className="flex flex-col items-center justify-start mt-[101px] pr-10 sm:pr-5 w-full"
        >
          <div className="flex flex-col gap-[31px] items-center justify-start w-full">
            <MenuItem
              icon={
                <Img
                  className="h-[18px] w-[18px]"
                  src="images/img_arrowdown_blue_gray_500.svg"
                  alt="arrowdown_One"
                />
              }
              active={window.location.pathname === "/"}
            >
              <Text className="uppercase">BUYURTMALAR</Text>
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  className="h-[21px] w-[21px]"
                  src="images/img_bxbxsaddtoqueue.svg"
                  alt="bxbxsaddtoqueue"
                />
              }
            >
              <Text className="mt-0.5 text-sm uppercase">
                <>material qo\&#96;shish</>
              </Text>
            </MenuItem>
          </div>
          <div className="flex flex-col items-center justify-start mt-[188px] w-full">
            <MenuItem
              icon={
                <Img
                  className="h-[19px] mb-[3px] w-[19px]"
                  src="images/img_ticket.svg"
                  alt="ticket"
                />
              }
            >
              <Text className="mt-[3px] uppercase">mahsulot narxlari</Text>
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar5.defaultProps = {};

export default Sidebar5;
