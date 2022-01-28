import React from "react";
import "../css/Awards.css";

import awardsBackground from "../images/award-background.png";

import libel from "../images/logo_dot.png"
import AwardsCard from "./cards/AwardsCard";

const awards = [
    {
        title: "masters libel",
        description:
            "Participa por uno de los Master de Libel y avanza al siguiente nivel en tu aprendizaje.",
        position: libel,
        items: [
            "Máster en Blender para Videojuegos y Animación",
            "Máster en Escultura para Impresión 3D",
            "Máster en Rigging para Videojuegos y Animación",
        ],
    },
    {
        title: "Escuelas Libel",
        description:
            "Inicia tu curva de aprendizaje con acompañamiento online en vivo en Blender y ZBrush.",
        position: libel,
        items: [
            "Escuela Domina Blender: Plan Nivel Básico y Plan Nivel Intermedio",
            "Escuela ZBrush",
        ],
    },
    {
        title: "Mem. Recargada",
        description: "Aprende sin límites con los mejores contenidos de Libel.",
        position: libel,
        items: [
            "41 cursos para que aprendas en un solo lugar ZBrush, Blender, CC3, Substance Painter, 3D Max y más",
        ],
    },
];

const Awards = () => {
    return (
        <div className="Awards">
            <div className="awards-container container padding">
                <h1>PREMIOS</h1>
                <div className="awards-content">
                    <div className="awards-image">
                        <img
                            src={awardsBackground}
                            alt="Awards Background"
                            className="awards-background-image"
                        />
                    </div>
                    <div className="awards-items">
                        {awards.map((award) => (
                            <AwardsCard
                                key={award.title}
                                position={award.position}
                                title={award.title}
                                description={award.description}
                                items={award.items}
                            />
                        ))}
                        <a className="save-your-quote" href="/#">
                            APARTA&nbsp;<span>TU CUPO</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awards;
