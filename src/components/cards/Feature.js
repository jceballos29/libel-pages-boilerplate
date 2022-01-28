import React from "react";
import "../../css/cards/Feature.css";

import { IoPlay } from "react-icons/io5";
import { useDispatch } from "react-redux";

import { openVideo } from "../../features/video";

const Feature = ({ image, name, title, course, url }) => {

    const dispatch = useDispatch();

    return (
        <div className="Feature">
            <div
                className="feature-header"
                style={{ backgroundImage: ` url(${image})` }}
            >
                <button
                    className="feature-video"
                    onClick={() => {
                        // handleOpenModal(true);
                        dispatch(openVideo({ modal: true, url: url, type:"common" }));
                    }}
                >
                    <IoPlay />
                </button>
            </div>
            <div className="feature-content">
                <div className="feature-owner">
                    <span className="feature-name">{name}</span>
                </div>
                <h3>{title}</h3>
                <h5>{course}</h5>
            </div>
        </div>
    );
};

export default Feature;
