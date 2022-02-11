import React, { useRef } from "react";
import "../css/Master.css";
import MasterItem from "./cards/MaterItem"
import Carousel, { consts } from "react-elastic-carousel";
import contentMaster from "../utils/contentMaster";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import decoration1 from "../images/decorations/02.png"
import decoration2 from "../images/decorations/04.png";

import line from "../images/underline.png";

const Master = () => {

    const carousel = useRef(null);

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
        { width: 1, itemsToShow: 1 },
        { width: 460, itemsToShow: 2, itemsToScroll: 1 },
        { width: 768, itemsToShow: 2, itemsToScroll: 1, },
        { width: 1024, itemsToShow: 4, itemsToScroll: 1, showArrows: false },
        { width: 1200, itemsToShow: 4, itemsToScroll: 1, showArrows: false },
    ];

    return (
        <section className="Master" id="contenido">
            <div className="master-container container padding">
                <img
                    src={decoration1}
                    alt="Master Decoration"
                    className="decoration-1"
                />
                <img
                    src={decoration2}
                    alt="Master Decoration"
                    className="decoration-2"
                />

                <div className="master-header">
                    <h1 className="master-title">
                        ENTRENAMIENTOS
                        <br />
                        <span>
                            A REALIZAR EN EL{" "}
                            <b>
                                <img
                                    src={line}
                                    alt="header-underline"
                                    className="header-underline"
                                />
                                3DCAMP
                            </b>
                        </span>
                    </h1>
                    <p className="header-paragraph">
                        Los entrenamientos son con acompañamiento online en
                        vivo, y tendrán sus respectivos cronogramas.
                    </p>
                </div>
                <div className="master-body">
                    <Carousel
                        ref={carousel}
                        breakPoints={breakPoints}
                        pagination={false}
                        renderArrow={customArrows}
                        className="master-carousel"
                    >
                        {contentMaster.map((item, index) => (
                            <MasterItem key={index} content={item} />
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Master;
