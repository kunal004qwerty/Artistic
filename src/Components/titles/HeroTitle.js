import React from "react";
import "./TitleStyles.scss";

import ThemeContext from "../../contexts/ThemeContext";
import { useContext } from "react";

const HeroTitle = ({ children }, ...rest) => {
  const { theme } = useContext(ThemeContext);
  // console.log(theme);

  return (
    <h1 className={theme} {...rest}>
      {children}
    </h1>
  );
};

export default HeroTitle;
