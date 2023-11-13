import React from "react";

import { Button, Img, Line, Text } from "components";

type FrameFiftyTwoDatafiltrProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  | "kunbutton"
  | "haftatext"
  | "oytext"
  | "yiltext"
  | "languagetext"
  | "saralashbutton"
> &
  Partial<{
    kunbutton: string;
    haftatext: string;
    oytext: string;
    yiltext: string;
    languagetext: string;
    saralashbutton: string;
  }>;

const FrameFiftyTwoDatafiltr: React.FC<FrameFiftyTwoDatafiltrProps> = (
  props,
) => {
  return (
    <>
      <div className={props.className}>
        <div className="sm:h-[193px] h-[33px] relative w-[82%] md:w-full">
          <div className="absolute flex sm:flex-col flex-row gap-[22px] h-full inset-y-[0] items-center justify-between my-auto right-[0] w-[86%]">
            <div className="flex relative w-[53%] sm:w-full">
              <div className="flex my-auto w-[67%]">
                <div className="border border-blue_gray-800_05 border-solid h-[33px] ml-[undefinedpx] my-auto rotate-[180deg] w-1/2 z-[1]"></div>
                <div className="border border-blue_gray-800_05 border-solid h-[33px] ml-[-0.87px] my-auto rotate-[180deg] w-[51%] z-[1]"></div>
              </div>
              <div className="border border-blue_gray-800_05 border-solid h-[33px] ml-[-0.99px] my-auto rotate-[180deg] rounded-bl rounded-tl w-[34%] z-[1]"></div>
            </div>
            <div className="border border-blue_gray-800_05 border-solid h-[33px] rotate-[180deg] rounded w-[43%]"></div>
          </div>
          <div className="absolute flex flex-col h-full inset-[0] items-center justify-center m-auto w-[98%]">
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start w-full">
              <Button
                className="!text-white-A700 cursor-pointer font-medium font-roboto leading-[normal] min-w-[86px] rounded-bl rounded-tl text-base text-center"
                color="red_300"
                size="xs"
                variant="fill"
              >
                {props?.kunbutton}
              </Button>
              <Text
                className="sm:ml-[0] ml-[22px] text-base text-blue_gray-500"
                size="txtRobotoMedium16"
              >
                {props?.haftatext}
              </Text>
              <Text
                className="h-[19px] sm:ml-[0] ml-[54px] text-base text-blue_gray-500"
                size="txtRobotoMedium16"
              >
                {props?.oytext}
              </Text>
              <Text
                className="sm:ml-[0] ml-[68px] text-base text-blue_gray-500"
                size="txtRobotoMedium16"
              >
                {props?.yiltext}
              </Text>
              <div className="flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[68px] w-[33%] sm:w-full">
                <div className="flex flex-row gap-[11px] items-start justify-between w-full">
                  <Text
                    className="mt-[3px] text-base text-blue_gray-500"
                    size="txtRobotoMedium16"
                  >
                    {props?.languagetext}
                  </Text>
                  <Img
                    className="h-[18px] w-[18px]"
                    src="images/img_vscodeiconsfiletypeexcel.svg"
                    alt="cilcalendar"
                  />
                </div>
                <div className="flex flex-row gap-[11px] items-center justify-start w-[85%] md:w-full">
                  <Line className="bg-blue_gray-800_02 h-px w-[32%]" />
                  <Line className="bg-blue_gray-800_02 h-px w-[62%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start w-[17%] md:w-full">
          <Button
            className="border border-blue_gray-600 border-solid cursor-pointer font-medium font-roboto leading-[normal] min-w-[117px] text-base text-center"
            shape="round"
            color="blue_gray_900"
            size="xs"
            variant="fill"
          >
            {props?.saralashbutton}
          </Button>
        </div>
      </div>
    </>
  );
};

FrameFiftyTwoDatafiltr.defaultProps = {
  kunbutton: "Kun",
  haftatext: "Hafta",
  oytext: "Oy",
  yiltext: "Yil",
  languagetext: "20 Sen -28 Apr   2022",
  saralashbutton: "Saralash",
};

export default FrameFiftyTwoDatafiltr;
