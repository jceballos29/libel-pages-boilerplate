import React from "react";
import "../../css/cards/TeacherChard.css";

import { IoPlay } from "react-icons/io5";

const TeacherChard = ({ image, avatar, title, name, id }) => {
    return (
        <div className="TeacherChard">
            <div className="teacher-content">
                <div className="teacher-image">
                    <img src={image} alt="Course" />
                    <div className="teacher-image-filter">
                        <IoPlay />
                    </div>
                </div>
                <h3 className="teacher-title">{title}</h3>
            </div>
            <div className="teacher-info">
                <img
                    src={avatar}
                    alt="Teacher Avatar"
                    className="teacher-avatar"
                />
                <p className="teacher-name">
                    <span>Instructor:</span>
                    <br />
                    {name}
                </p>
            </div>
        </div>
    );
};

export default TeacherChard;
