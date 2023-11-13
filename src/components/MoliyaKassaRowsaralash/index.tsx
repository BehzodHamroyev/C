import React from "react";

import { Button, Img, Text } from "components";

type MoliyaKassaRowsaralashProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "userkun"
  | "userhafta"
  | "useroy"
  | "useryil"
  | "userlanguage"
  | "usersaralash"
> &
  Partial<{
    userkun: string;
    userhafta: string;
    useroy: string;
    useryil: string;
    userlanguage: string;
    usersaralash: string;
  }>;

const MoliyaKassaRowsaralash: React.FC<MoliyaKassaRowsaralashProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="sm:h-[227px] h-[33px] relative w-[82%] md:w-full">
          <div className="absolute flex sm:flex-col flex-row gap-[22px] h-full inset-y-[0] items-center justify-between my-auto right-[0] w-[86%]">
            <div className="flex relative w-[53%] sm:w-full">
              <div className="flex my-auto w-[67%]">
                <div className="border border-blue_gray-800_05 border-solid h-[33px] my-auto rotate-[180deg] w-1/2"></div>
                <div className="border border-blue_gray-800_05 border-solid h-[33px] ml-[-0.87px] my-auto rotate-[180deg] w-[51%] z-[1]"></div>
              </div>
              <div className="border border-blue_gray-800_05 border-solid h-[33px] ml-[-0.98px] my-auto rotate-[180deg] rounded-bl rounded-tl w-[34%] z-[1]"></div>
            </div>
            <div className="border border-blue_gray-800_05 border-solid h-[33px] rotate-[180deg] rounded w-[43%]"></div>
          </div>
          <div className="absolute flex sm:flex-col flex-row sm:gap-5 h-full inset-[0] items-center justify-center m-auto w-[98%]">
            <Button
              className="cursor-pointer font-medium font-roboto leading-[normal] min-w-[86px] rounded-bl rounded-tl text-base text-center"
              color="blue_400"
              size="xs"
              variant="fill"
            >
              {props?.userkun}
            </Button>
            <Text
              className="sm:ml-[0] ml-[22px] text-base text-blue_gray-500"
              size="txtRobotoMedium16"
            >
              {props?.userhafta}
            </Text>
            <Text
              className="h-[19px] sm:ml-[0] ml-[54px] text-base text-blue_gray-500"
              size="txtRobotoMedium16"
            >
              {props?.useroy}
            </Text>
            <Text
              className="sm:ml-[0] ml-[68px] text-base text-blue_gray-500"
              size="txtRobotoMedium16"
            >
              {props?.useryil}
            </Text>
            <Text
              className="sm:ml-[0] ml-[69px] text-base text-blue_gray-500"
              size="txtRobotoMedium16"
            >
              {props?.userlanguage}
            </Text>
            <Img
              className="h-[18px] sm:ml-[0] ml-[11px] w-[18px]"
              src="images/img_vscodeiconsfiletypeexcel.svg"
              alt="cilcalendar"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-[17%] md:w-full">
          <Button
            className="cursor-pointer font-medium font-roboto leading-[normal] min-w-[117px] text-base text-center"
            shape="round"
            color="blue_400"
            size="xs"
            variant="fill"
          >
            {props?.usersaralash}
          </Button>
        </div>
      </div>
    </>
  );
};

MoliyaKassaRowsaralash.defaultProps = {
  userkun: "Kun",
  userhafta: "Hafta",
  useroy: "Oy",
  useryil: "Yil",
  userlanguage: "20 Sen -28 Apr   2022",
  usersaralash: "Saralash",
};

export default MoliyaKassaRowsaralash;
