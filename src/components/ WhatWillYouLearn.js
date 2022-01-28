import React from "react";
import "../css/WhatWillYouLearn.css"

import teachers from "../utils/teachers";
import TeacherCard from "./cards/TeacherChard";

const WhatWillYouLearn = () => {
    return (
        <div className="WhatWillYouLearn">
            <div className="learn-container container padding">
                <h1>¿QUÉ APRENDERÁS?</h1>
                <div className="learn-content">
                    {teachers.map((t) => (
                        <TeacherCard
                            avatar={t.avatar}
                            id={t.position}
                            image={t.image}
                            name={t.name}
                            title={t.course}
                            key={t.position}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhatWillYouLearn;
