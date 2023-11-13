import React from "react";

const sizeClasses = {
  txtRobotoMedium28: "font-medium font-roboto",
  txtRobotoBold15Gray400: "font-bold font-roboto",
  txtRobotoMedium14Lightgreen400: "font-medium font-roboto",
  txtRobotoMedium8Bluegray500: "font-medium font-roboto",
  txtRobotoMedium6: "font-medium font-roboto",
  txtSegoeUISemibold11: "font-segoeui font-semibold",
  txtRobotoMedium8: "font-medium font-roboto",
  txtRobotoMedium28Bluegray80003: "font-medium font-roboto",
  txtRobotoMedium15Blue700: "font-medium font-roboto",
  txtRobotoRegular25: "font-normal font-roboto",
  txtRobotoMedium28WhiteA700: "font-medium font-roboto",
  txtRobotoBold8: "font-bold font-roboto",
  txtRobotoMedium15Red300: "font-medium font-roboto",
  txtRobotoMedium16Bluegray50099: "font-medium font-roboto",
  txtRobotoBold15Blue700: "font-bold font-roboto",
  txtRobotoBold10Gray400: "font-bold font-roboto",
  txtRobotoMedium20: "font-medium font-roboto",
  txtRobotoMedium22Red300: "font-medium font-roboto",
  txtRobotoMedium21: "font-medium font-roboto",
  txtRobotoMedium22: "font-medium font-roboto",
  txtRobotoMedium23: "font-medium font-roboto",
  txtRobotoMedium24: "font-medium font-roboto",
  txtRobotoMedium31Red30002: "font-medium font-roboto",
  txtRobotoMedium12Red300: "font-medium font-roboto",
  txtRobotoMedium17: "font-medium font-roboto",
  txtRobotoMedium18: "font-medium font-roboto",
  txtWorkSansRomanMedium30: "font-medium font-worksans",
  txtRobotoMedium17Gray400: "font-medium font-roboto",
  txtRobotoMedium15Gray400: "font-medium font-roboto",
  txtRobotoMedium17Bluegray500: "font-medium font-roboto",
  txtRobotoMedium22Gray400: "font-medium font-roboto",
  txtRobotoMedium28Blue400: "font-medium font-roboto",
  txtRobotoMedium14Red300: "font-medium font-roboto",
  txtRobotoMedium28Gray400: "font-medium font-roboto",
  txtRobotoMedium31Blue400: "font-medium font-roboto",
  txtRobotoMedium15Orange300: "font-medium font-roboto",
  txtRobotoMedium18WhiteA700: "font-medium font-roboto",
  txtRobotoMedium10: "font-medium font-roboto",
  txtRobotoMedium8Lightgreen400: "font-medium font-roboto",
  txtRobotoMedium12: "font-medium font-roboto",
  txtRobotoMedium31Lightgreen500: "font-medium font-roboto",
  txtRobotoMedium20Bluegray500: "font-medium font-roboto",
  txtRobotoMedium14: "font-medium font-roboto",
  txtRobotoMedium31Bluegray80003: "font-medium font-roboto",
  txtRobotoMedium15: "font-medium font-roboto",
  txtRobotoMedium12Lightgreen400: "font-medium font-roboto",
  txtRobotoMedium16: "font-medium font-roboto",
  txtRobotoMedium14WhiteA700: "font-medium font-roboto",
  txtRobotoMedium17Red300: "font-medium font-roboto",
  txtRobotoMedium22Bluegray500: "font-medium font-roboto",
  txtRobotoMedium8Red300: "font-medium font-roboto",
  txtRobotoMedium12Bluegray500: "font-medium font-roboto",
  txtRobotoMedium20WhiteA700: "font-medium font-roboto",
  txtRobotoMedium15Bluegray500: "font-medium font-roboto",
  txtMontserratSemiBold15: "font-montserrat font-semibold",
  txtRobotoMedium35Bluegray100: "font-medium font-roboto",
  txtRobotoMedium15Blue400: "font-medium font-roboto",
  txtRobotoMedium22Orange300: "font-medium font-roboto",
  txtRobotoMedium14Blue400: "font-medium font-roboto",
  txtRobotoMedium8Blue400: "font-medium font-roboto",
  txtRobotoMedium28Orange300: "font-medium font-roboto",
  txtRobotoMedium12Blue400: "font-medium font-roboto",
  txtRobotoMedium17Lightgreen40003: "font-medium font-roboto",
  txtRobotoBold22: "font-bold font-roboto",
  txtRobotoMedium14Gray400: "font-medium font-roboto",
  txtRobotoMedium12Bluegray50099: "font-medium font-roboto",
  txtRobotoMedium28Lime700: "font-medium font-roboto",
  txtRobotoMedium28Red300: "font-medium font-roboto",
  txtRobotoMedium16Gray400: "font-medium font-roboto",
  txtRobotoMedium14Bluegray50099: "font-medium font-roboto",
  txtRobotoMedium8Orange30001: "font-medium font-roboto",
  txtRobotoMedium17Bluegray80003: "font-medium font-roboto",
  txtRobotoMedium10Gray400: "font-medium font-roboto",
  txtRobotoMedium8Bluegray50099: "font-medium font-roboto",
  txtRobotoMedium15WhiteA700: "font-medium font-roboto",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRegular16: "font-normal font-roboto",
  txtRobotoMedium16WhiteA700: "font-medium font-roboto",
  txtRobotoMedium31: "font-medium font-roboto",
  txtRobotoMedium15Lime700: "font-medium font-roboto",
  txtRobotoBold15: "font-bold font-roboto",
  txtRobotoMedium32: "font-medium font-roboto",
  txtRobotoMedium8Lime700: "font-medium font-roboto",
  txtRobotoMedium33: "font-medium font-roboto",
  txtRobotoMedium15Bluegray80003: "font-medium font-roboto",
  txtRobotoBold14: "font-bold font-roboto",
  txtRobotoMedium35: "font-medium font-roboto",
  txtRobotoMedium16Red300: "font-medium font-roboto",
  txtRobotoBold12: "font-bold font-roboto",
  txtRobotoMedium12Orange300: "font-medium font-roboto",
  txtRobotoBold10: "font-bold font-roboto",
} as const;

export type TextProps = Partial<{
  className: string;
  size: keyof typeof sizeClasses;
  as: any;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  size,
  as,
  ...restProps
}) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
