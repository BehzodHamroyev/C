import React from "react";
import { ErrorMessage } from "../../components/ErrorMessage";

const shapes = { round: "rounded-[3px]" } as const;
const variants = {
  fill: {
    blue_gray_800_07: "bg-blue_gray-800_07 text-blue_gray-500",
    gray_900: "bg-gray-900 text-white-A700",
    gray_900_87: "bg-gray-900_87 text-white-A700",
    blue_gray_900: "bg-blue_gray-900 text-blue-400",
    blue_gray_800: "bg-blue_gray-800 text-gray-400",
    blue_400: "bg-blue-400 text-white-A700",
    blue_gray_800_87_04: "bg-blue_gray-800_87_04 text-white-A700",
    blue_gray_800_7e: "bg-blue_gray-800_7e text-gray-400",
  },
} as const;
const sizes = {
  xs: "pb-1.5 pt-px px-px",
  sm: "p-1",
  md: "pb-[7px] pt-2 px-[7px]",
  xl: "pb-1.5 pt-[11px] px-1.5",
  "2xl": "pb-[15px] pl-3 pr-[15px] pt-[17px]",
  "3xl": "pb-[19px] pt-3.5 px-3.5",
} as const;

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    wrapClassName: string;
    className: string;
    name: string;
    placeholder: string;
    type: string;
    errors: string[];
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      wrapClassName = "",
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "",
      size = "",
      variant = "",
      color = "",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${wrapClassName} 
              ${(shape && shapes[shape]) || ""} 
              ${(variant && variants[variant]?.[color]) || ""} 
              ${(size && sizes[size]) || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  },
);

export { Input };
