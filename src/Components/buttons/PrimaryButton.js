import "./PrimaryButton.scss";
import React from "react";

const PrimaryButton = ({ children, buttonType, ...rest }) => {
  return (
    <div className="buttons">
      <a as={buttonType} {...rest}>
        {children}
      </a>
    </div>
  );
};

export default PrimaryButton;
