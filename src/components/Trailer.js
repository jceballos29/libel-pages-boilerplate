import React from "react";
import "../css/Trailer.css";
import { IoPlay } from "react-icons/io5";

import trailerBackground from "../images/trailer-background.png";
import { useDispatch } from "react-redux";

import { openVideo } from "../features/video"

const Trailer = () => {

    const dispatch = useDispatch()
    const url = "https://www.youtube.com/watch?v=GqowtpD6aEQ";

    return (
        <div
            className="Trailer"
            style={{
                backgroundImage: `linear-gradient(0deg, rgba(96,0,222,0.6) 100%, rgba(255,255,255,0) 100%), url(${trailerBackground})`,
            }}
        >
            <div className="trailer-container container">
                <div className="trailer-content">
                    <button className="play" onClick={() => {dispatch(openVideo({modal:true, url, type: "common"}))}}>
                        <IoPlay />
                    </button>
                    <h1 className="trailer-title">VER TRAILER</h1>
                </div>
            </div>
        </div>
    );
};

export default Trailer;
