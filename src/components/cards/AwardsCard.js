import React from "react";
import "../../css/cards/AwardsCard.css";

import { IoChevronForward } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { openAward } from "../../features/award";

const AwardsCard = ({ position, title, description, items }) => {
    
    const dispatch = useDispatch();

    return (
        <div className="AwardsCard">
            <div className="awards-position">
                <img src={position} alt="Award Position" />
            </div>
            <div className="awards-information">
                <div className="awards-title" onClick={() => {
                    dispatch(openAward({modal:true, title:title, items:items}))
                    console.log(title, items)
                }}>
                    <h2>{title}</h2>
                    <IoChevronForward />
                </div>
                <div className="awards-description">{description}</div>
            </div>
        </div>
    );
};

export default AwardsCard;
