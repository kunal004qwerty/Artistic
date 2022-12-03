import "./ContactSection.scss";

import React from "react";
import SectionTitle from "../titles/SectionTitle";
import ParagraphText from "../ParagraphText/ParagraphText";
import FormField from "./FormField";
import PrimaryButton from "../buttons/PrimaryButton";

const ContactSection = () => {
  return (
    <div id="contact">
      <div className="continer">
        <div className="contact__wrapper">
          <div className="contact__info">
            <SectionTitle>Get In Touch</SectionTitle>
            <ParagraphText>We would love to hear from you.</ParagraphText>
          </div>
          <form className="contact__form">
            <FormField
              className="contact__field--fullWidth"
              label="Name"
              id="name"
              type="text"
              name="name"
              required
            />
            <FormField
              label="Email"
              id="email"
              type="email"
              name="email"
              required
            />
            <FormField
              label="Subject"
              id="subject"
              type="subject"
              name="subject"
              required
            />
            <FormField
              className="contact__field--fullWidth"
              label="Message"
              rows={6}
              id="subject"
              type="subject"
              name="subject"
              required
            />
            <PrimaryButton type="submit" className="Contact__Submit">
              Submit
            </PrimaryButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
