import "./SectionStyle.scss"

import React from 'react';

const SectionTitle = ({children, ...rest}) => {
    return (
        <div>
            <h3 {...rest}>
                {children}
            </h3>
        </div>
    );
};

export default SectionTitle;