import "./Services.scss";

import React from "react";
import ParagraphText from "../ParagraphText/ParagraphText";

const ServiceItems = ({ icon, titles, desc }) => {
  return (
    <div className="Service__Card">
      <div className="Service__Icon">{icon}</div>
      <div className="Service__Title">{titles}</div>
      <ParagraphText className="servivce__desc">{desc}</ParagraphText>
    </div>
  );
};

export default ServiceItems;
