import Styles from "./Paragraphtext.scss";
import React from "react";
import ThemeContext from "../../contexts/ThemeContext";
import { useContext } from "react";

const ParagraphText = ({ children, ...rest }) => {
  const { theme } = useContext(ThemeContext);
  // console.log(theme);

  return (
    <div className={`${Styles} ${theme}`}>
      <p {...rest}>{children}</p>
    </div>
  );
};

export default ParagraphText;
