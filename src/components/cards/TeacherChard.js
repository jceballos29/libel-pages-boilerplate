import React from "react";
import "../../css/cards/TeacherChard.css";

import { IoPlay } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { openVideo } from "../../features/video";

const TeacherChard = ({ image, avatar, title, name, id }) => {
    const dispatch = useDispatch();
    return (
        <div className="TeacherCard">
            <div
                className="teacher-image"
                onClick={() => {
                    dispatch(
                        openVideo({
                            modal: true,
                            url: "https://www.youtube.com/watch?v=GqowtpD6aEQ&feature=emb_title",
                            type: "common",
                        })
                    );
                }}
            >
                <img src={image} alt="Course" />
                <div className="teacher-image-filter">
                    <IoPlay />
                </div>
            </div>
            <div className="teacher-content">
                <h3 className="teacher-title">{title}</h3>

                <p className="teacher-info">
                    <span>Instructor:</span>
                    {name}
                </p>
            </div>
        </div>
    );
};

export default TeacherChard;
