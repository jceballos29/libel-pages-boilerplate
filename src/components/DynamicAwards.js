import React from "react";
import "../css/DynamicAwards.css"

import Carousel, { consts } from "react-elastic-carousel";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import line from "../images/underline.png";

const DynamicAwards = () => {

    const customArrows = ({ type, onClick, isEdge }) => {
        const pointer =
            type === consts.PREV ? <IoChevronBack /> : <IoChevronForward />;
        return (
            <button
                onClick={onClick}
                disabled={isEdge}
                style={{
                    fontSize: 36,
                    border: "none",
                    backgroundColor: "transparent",
                    color: "#6000de",
                    position: "relative",
                }}
            >
                {pointer}
            </button>
        );
    };


    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 460, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768, itemsToShow: 4, itemsToScroll: 1, showArrows: false },
        { width: 1200, itemsToShow: 4, itemsToScroll: 1, showArrows: false },
    ];

    return (
        <div className="DynamicAwards">
            <div className="dynamic-container container padding">
                <div className="dynamic-header">
                    <h1>
                        PREMIOS
                        <br />
                        <span>POR DINÁMICAS</span>
                        <img src={line} alt="underline" />
                    </h1>
                    <p>
                        No te pierdas las distintas actividades que tenemos
                        preparadas para ti. Charlas privadas, competencias,
                        reunión de amigos, y mucho más. Podrás elegir no
                        participar en ellas sin problema, pero… Ya verás que no
                        te las querrás perder.
                    </p>
                </div>
                <div className="dynamic-body">
                    {/* <img className="award-1" src={netflix} alt="Netflix" />
                    <img
                        className="award-2"
                        src={primeVieo}
                        alt="prime video"
                    />
                    <img className="award-3" src={hboMax} alt="HBO max" />
                    <img className="award-4" src={disney} alt="Disney" /> */}
                    <div className="award">Acceso a cursos en vídeo</div>
                    <div className="award">Cupones de descuento</div>
                    <div className="award">Membresía Black</div>
                    <div className="award">Feedback en vivo privado</div>
                </div>
                <div className="dynamic-body-mobile">
                    <Carousel
                        // ref={carousel}
                        breakPoints={breakPoints}
                        pagination={false}
                        renderArrow={customArrows}
                        className="dynamic-carousel"
                    >
                        {/* <img className="award" src={netflix} alt="Netflix" />
                        <img
                            className="award"
                            src={primeVieo}
                            alt="prime video"
                        />
                        <img className="award" src={hboMax} alt="HBO max" />
                        <img className="award" src={disney} alt="Disney" /> */}
                        <div className="award">Acceso a cursos en vídeo</div>
                        <div className="award">Cupones de descuento</div>
                        <div className="award">Membresía Black</div>
                        <div className="award">Feedback en vivo privado</div>
                    </Carousel>
                </div>
            </div>
        </div>
    );
};

export default DynamicAwards;
