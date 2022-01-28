import React from "react";
import "../../css/cards/Course.css";

import { IoCaretForwardOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

import { openVideo } from "../../features/video";

const Course = ({image, avatar, software, title, price, info, start, url, video }) => {

    const dispatch = useDispatch();


    return (
        <div className="Course">
            <div
                className="course-banner"
                style={{
                    backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6839110644257703) 30%, rgba(255,255,255,0) 80%), url(${image})`,
                }}
            >
                <button
                    className="course-play"
                    onClick={() => {
                        // handleOpenModal(true);
                        dispatch(
                            openVideo({ modal: true, url: video, type: "common" })
                        );
                    }}
                >
                    <IoCaretForwardOutline style={{ marginLeft: 2 }} />
                </button>
                <a href={url} className="course-start-now">
                    EMPEZAR AHORA
                </a>
            </div>
            <div className="course-information">
                <div className="course-information-title">
                    <h4>{title}</h4>
                    <img src={avatar} alt="teacher" />
                </div>
                <div className="course-information-price">
                    <span className="price">${price} USD</span>
                    <div className="line"></div>
                </div>
                <div className="course-information-text">
                    <p>{info}</p>
                </div>
                <div className="course-information-start">
                    {start ? (
                        <>
                            <h5>EMPIEZA EN</h5>
                            <div className="course-date">
                                <div className="segment">
                                    <div className="numbers">5</div>
                                    <div className="letters">DÍAS</div>
                                </div>
                                <div className="segment">
                                    <div className="numbers">15</div>
                                    <div className="letters">HOR</div>
                                </div>
                                <div className="segment">
                                    <div className="numbers">22</div>
                                    <div className="letters">MIN</div>
                                </div>
                                <div className="segment">
                                    <div className="numbers">45</div>
                                    <div className="letters">SEG</div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <h5>INICIA CUANDO QUIERAS</h5>
                            <img src={software} alt="software" />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Course;
