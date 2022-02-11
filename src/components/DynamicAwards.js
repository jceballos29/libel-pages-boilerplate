import React from "react";
import "../css/DynamicAwards.css"

import Carousel, { consts } from "react-elastic-carousel";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import {
    MdVideoSettings,
    MdOutlinePaid,
    MdOutlineImportantDevices,
    MdOutlineRecordVoiceOver,
} from "react-icons/md";

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
        <section className="DynamicAwards">
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
                    <p className="award">
                        <MdVideoSettings className="award-icon" />
                        <span>Acceso a </span>&nbsp;cursos en vídeo
                    </p>
                    <p className="award">
                        <MdOutlinePaid className="award-icon" />
                        <span>Cupones de</span>&nbsp;descuento
                    </p>
                    <p className="award">
                        <MdOutlineImportantDevices className="award-icon" />
                        <span>Membresía</span>&nbsp;Black
                    </p>
                    <p className="award">
                        <MdOutlineRecordVoiceOver className="award-icon" />
                        <span>Feedback en vivo</span>&nbsp;privado
                    </p>
                </div>
                <div className="dynamic-body-mobile">
                    <Carousel
                        breakPoints={breakPoints}
                        pagination={false}
                        renderArrow={customArrows}
                        className="dynamic-carousel"
                    >

                        <p className="award">
                            <MdVideoSettings className="award-icon" />
                            <span>Acceso a </span>&nbsp;cursos en vídeo
                        </p>
                        <p className="award">
                            <MdOutlinePaid className="award-icon" />
                            <span>Cupones de</span>&nbsp;descuento
                        </p>
                        <p className="award">
                            <MdOutlineImportantDevices className="award-icon" />
                            <span>Membresía</span>&nbsp;Black
                        </p>
                        <p className="award">
                            <MdOutlineRecordVoiceOver className="award-icon" />
                            <span>Feedback en vivo</span>&nbsp;privado
                        </p>
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default DynamicAwards;
