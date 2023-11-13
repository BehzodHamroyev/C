import React from "react";

import { Line, Text } from "components";

type OmborTaminotchigaZayavkaOneTabProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "username" | "indicator"
> &
  Partial<{ username: string; indicator: string }>;

const OmborTaminotchigaZayavkaOneTab: React.FC<
  OmborTaminotchigaZayavkaOneTabProps
> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-start p-3 w-auto">
          {!!props?.username ? (
            <Text
              className="text-blue-400 text-center text-sm tracking-[0.14px] uppercase w-auto"
              size="txtRobotoMedium14Blue400"
            >
              {props?.username}
            </Text>
          ) : null}
        </div>
        {!!props?.indicator ? (
          <Line className="bg-blue-400 h-0.5 w-full" />
        ) : null}
      </div>
    </>
  );
};

OmborTaminotchigaZayavkaOneTab.defaultProps = {};

export default OmborTaminotchigaZayavkaOneTab;
