import React, { useRef } from "react";
import "../css/FeaturedResults.css";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import features from "../utils/featuredResults";

import Feature from "./cards/Feature";

import Carousel, { consts } from "react-elastic-carousel";

import line from "../images/line.png";

const FeaturedResults = () => {
    const carousel = useRef(null);

    const featuredList = features.map((feature, f) => (
        <Feature
            key={f}
            image={feature.image}
            video={feature.video}
            name={feature.name}
            country={feature.country}
            modality={feature.modality}
            camp={feature.camp}
        />
    ));

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
        { width: 768, itemsToShow: 3, itemsToScroll: 1, showArrows: false },
        { width: 1200, itemsToShow: 3, itemsToScroll: 1, showArrows: false },
    ];

    return (
        <section className="FeaturedResults" id="results">
            <div className="results-container container padding">
                <div className="results-header">
                    <div className="results-title">
                        <h1>
                            IMPRESIONANTES
                            <br />
                            <span>RESULTADOS</span>
                            <img src={line} alt="underline" />
                        </h1>
                        <a href="/https://www.youtube.com/watch?v=L_49m_pSwE8&list=PLK9UG5le_PO-0BOFa1CysBEcR2yVNgwZd&ab_channel=LIBELACADEMY">
                            VER MÁS{" "}
                            <IoChevronForward style={{ marginLeft: "10px" }} />
                        </a>
                    </div>
                </div>
                <div className="results-content">
                    <Carousel
                        ref={carousel}
                        breakPoints={breakPoints}
                        pagination={false}
                        renderArrow={customArrows}
                        className="results-carousel"
                    >
                        {featuredList}
                    </Carousel>
                    <button
                        className="results-buttons result-previous"
                        onClick={() => {
                            carousel.current.slidePrev();
                        }}
                    >
                        <IoChevronBack />
                    </button>
                    <button
                        className="results-buttons result-next"
                        onClick={() => {
                            carousel.current.slideNext();
                        }}
                    >
                        <IoChevronForward />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FeaturedResults;
