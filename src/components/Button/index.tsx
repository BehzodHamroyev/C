import React from "react";

const shapes = { circle: "rounded-[50%]", round: "rounded" } as const;
const variants = {
  fill: {
    blue_gray_800_87_01: "bg-blue_gray-800_87_01",
    blue_gray_800_07: "bg-blue_gray-800_07",
    red_300: "bg-red-300",
    blue_gray_500: "bg-blue_gray-500 text-blue_gray-900",
    blue_gray_800: "bg-blue_gray-800 text-blue_gray-500",
    blue_gray_900: "bg-blue_gray-900 shadow-bs text-blue-400",
    blue_gray_800_02: "bg-blue_gray-800_02 shadow-bs1",
    blue_gray_800_04: "bg-blue_gray-800_04",
    blue_gray_500_87: "bg-blue_gray-500_87 text-blue_gray-900",
    blue_gray_800_87_04: "bg-blue_gray-800_87_04 text-blue_gray-500",
    blue_400: "bg-blue-400 text-white-A700",
  },
  outline: {
    blue_gray_500: "border border-blue_gray-500 border-solid text-white-A700",
  },
} as const;
const sizes = { xs: "p-[5px]", sm: "p-2.5", md: "p-[15px]" } as const;

export type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "onClick"
> &
  Partial<{
    className: string;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
    leftIcon: React.ReactNode;
    rightIcon: React.ReactNode;
    onClick: () => void;
  }>;

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

export { Button };
