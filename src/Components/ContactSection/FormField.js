import "./ContactSection.scss";

import React from "react";

const FormField = ({ label, id, rows = 1, className, ...rest }) => {
  return (
    <div className={className}>
      <label htmlFor={id}>
        {label}
        {rows <= 1 ? (
          <input type="text" id={id} {...rest} />
        ) : (
          <textarea id={id} rows={rows} {...rest} />
        )}
      </label>
    </div>
  );
};

export default FormField;
