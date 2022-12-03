import "./TeamSection.scss";

import React from "react";
import ParagraphText from "../ParagraphText/ParagraphText";
import SectionTitle from "../titles/SectionTitle";
import TeamMemberItem from "./TeamMemberItem";

import Team00 from "../../Assets/Images/Team00.jpg";
import Team01 from "../../Assets/Images/Team01.jpg";
import Team02 from "../../Assets/Images/Team02.jpg";

const TeamSection = () => {
  return (
    <div id="team">
      <div className="Container">
        <div className="team__wrapper">
          <div className="team__info">
            <ParagraphText>Team Members</ParagraphText>
            <SectionTitle>The Best team Available</SectionTitle>
          </div>
          <div className="team__members">
            <TeamMemberItem img={Team01} name="Specs" title="Photo Editor" />
            <TeamMemberItem img={Team00} name="JD" title="Photographer" />
            <TeamMemberItem img={Team02} name="Anklet" title="Photographer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
