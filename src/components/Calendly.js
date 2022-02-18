import React from "react";

import { InlineWidget } from "react-calendly";

const Calendly = () => {
    return (
        <div>
            <InlineWidget
                url="https://calendly.com/libel/asesoria-general"
                style={{ height: 1000 }}
            />
        </div>
    );
};

export default Calendly;
