import React, { useEffect, useState } from "react";
import "../../css/cards/ToDoCard.css";

import DegradeButton from "../buttons/DegradeButton";

import image from "../../images/trainings/zbrush.png";
import zbrush from "../../images/technologies/zbrush.png";
import blender from "../../images/technologies/blender.png";
import mayaSubstance from "../../images/technologies/maya+substance.png";
import maya from "../../images/technologies/maya.png";

const ToDoCards = ({ name = "zbrush" }) => {
    const [tech, setTech] = useState(null);

    useEffect(() => {
        if (name === "zbrush") {
            setTech(zbrush);
        }
        if (name === "blender") {
            setTech(blender);
        }
        if (name === "rigging") {
            setTech(maya);
        }
        if (name === "substance") {
            setTech(mayaSubstance);
        }
    }, [name]);

    return (
        <div className="ToDoCard">
            <div className="to-do-card-image">
                <img src={image} alt="Training" className="to-do-image-card" />
                <div className="to-do-card-technology">
                    <img src={tech} alt="Technology" />
                </div>
            </div>
            <div className="to-do-card-content">
                <h2>
                    Personajes en{" "}
                    <span style={{ textTransform: "capitalize" }}>
                        {name === "substance" ? "Maya + Substance" : name}
                    </span>
                </h2>
                <p>
                    Crea personajes en{" "}
                    <span style={{ textTransform: "capitalize" }}>{name}</span>{" "}
                    desde la escultura hasta la pintura con acompañamiento en
                    vivo.
                </p>
                <div className="to-do-card-buttons">
                    <DegradeButton
                        name={"UNIRSE"}
                        width={220}
                        paddingLeft={28}
                        link={true}
                    />
                </div>
                <div className="to-do-card-buttons-mobile">
                    <DegradeButton
                        name={"UNIRSE"}
                        width={220}
                        paddingLeft={28}
                        link={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default ToDoCards;
