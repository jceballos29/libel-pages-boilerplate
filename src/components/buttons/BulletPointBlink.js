import React from "react";
import "../../css/buttons/BulletPointBlink.css";

const BulletPointBlink = ({ color }) => {

    const background = color +'4c'

    return (
        <div className="BulletPointBlink">
            <div
                className="bullet-flash"
                style={{ backgroundColor: background }}
            ></div>
            <div className="bullet-center" style={{ backgroundColor: color }}>
                {" "}
            </div>
        </div>
    );
};

export default BulletPointBlink;
