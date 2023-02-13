import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder6: "rounded-radius6",
  icbRoundedBorder6: "rounded-radius6",
};
const variants = {
  FillTeal400: "bg-teal_400 text-white_A700",
  FillTeal401: "bg-teal_401 text-white_A700",
  icbOutlineIndigo9000c: "bg-white_A700 shadow-bs",
};
const sizes = {
  sm: "p-[15px]",
  md: "pr-[15px] py-[15px]",
  smIcn: "p-[21px] sm:px-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder6", "icbRoundedBorder6"]),
  variant: PropTypes.oneOf([
    "FillTeal400",
    "FillTeal401",
    "icbOutlineIndigo9000c",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
