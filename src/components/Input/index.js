import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray200: "bg-white_A700 border border-bluegray_200 border-solid",
  FillWhiteA700: "bg-white_A700",
  FillGray50: "bg-gray_50",
};
const shapes = { RoundedBorder6: "rounded-radius6" };
const sizes = {
  sm: "px-[7px] py-[8px]",
  md: "pl-[3px] pr-[10px] py-[10px]",
  lg: "p-[10px]",
  xl: "pl-[6px] pr-[10px] py-[11px]",
  "2xl": "p-[16px]",
  "3xl": "pb-[12px] pt-[18px] px-[12px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder6"]),
  variant: PropTypes.oneOf([
    "OutlineBluegray200",
    "FillWhiteA700",
    "FillGray50",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "3xl"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "OutlineBluegray200",
  size: "2xl",
};

export { Input };
