import "./TeamSection.scss";

import React from "react";
import ParagraphText from "../ParagraphText/ParagraphText";

import ThemeContext from "../../contexts/ThemeContext";
import { useContext } from "react";

const TeamMemberItem = ({ img, name, title }) => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <div className={theme}>
      <div id="TeamMemberItemDiv">
        <div className="teamMember__img">
          <img src={img} alt={name} />
        </div>
        <ParagraphText className="teamMember__name">{name}</ParagraphText>
        <ParagraphText className="teamMember__subtitle">{title}</ParagraphText>
      </div>
    </div>
  );
};

export default TeamMemberItem;
