import React from "react";
import "../../css/cards/Feature.css";

import { IoPlay } from "react-icons/io5";
import { useDispatch } from "react-redux";

import { openVideo } from "../../features/video";

const Feature = ({ image, name, country, modality, camp, video }) => {

    const dispatch = useDispatch();

    return (
        <div className="Feature">
            <div
                className="feature-header"
            >
                <img src={image} alt="Feature Result" className="feature-image"/>
                <button
                    className="feature-video"
                    onClick={() => {
                        // handleOpenModal(true);
                        dispatch(
                            openVideo({
                                modal: true,
                                url: video,
                                type: "common",
                            })
                        );
                    }}
                >
                    <IoPlay />
                </button>
            </div>
            <div className="feature-content">
                <div className="feature-owner">
                    <span className="feature-name">{name}</span>
                </div>
                <h3>{country}</h3>
                <h5>{modality}</h5>
                <h5>{camp}</h5>
            </div>
        </div>
    );
};

export default Feature;
