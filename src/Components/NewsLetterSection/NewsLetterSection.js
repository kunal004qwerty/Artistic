import "./NewsSection.scss";

import React from "react";
import SectionTitle from "../titles/SectionTitle";
import ParagraphText from "../ParagraphText/ParagraphText";

const NewsLetterSection = () => {
  return (
    <div id="NewsLetterSection">
      <div className="Container">
        <div className="newsletter__wrapper">
          <SectionTitle className="newsletter__tittle">
            Join Newsletter
          </SectionTitle>
          <ParagraphText className="newsletter__subtitle">
            Get regular updates every week
          </ParagraphText>
          <form className="newsletter__form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterSection;
<div className="Container"></div>;
