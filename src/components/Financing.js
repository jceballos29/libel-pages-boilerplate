import React, { useRef } from "react";

import "../css/Financing.css";
import line from "../images/line.png";


import Carousel, { consts } from "react-elastic-carousel";

import paymentMethods from "../utils/paymentMethods";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Financing = () => {
    const carousel = useRef(null);

    const paymentMethodsList = paymentMethods.map((method, i) => (
        <div key={i} className="method">
            <img src={method.image} alt={method.name} />
            <p>{method.name}</p>
        </div>
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
                    color: "#000000",
                    position: "relative",
                }}
            >
                {pointer}
            </button>
        );
    };

    const breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 375, itemsToShow: 3, itemsToScroll: 1 },
        { width: 768, itemsToShow: 6, itemsToScroll: 1, showArrows: false },
        { width: 1200, itemsToShow: 6, itemsToScroll: 1, showArrows: false },
    ];

    return (
        <section className="Financing" id="financing">
            <div className="financing-container container padding">
                <div className="financing-header">
                    <h1 className="financing-title">
                        MÉTODOS DE <span>PAGO</span>
                        <img
                            className="convert-underline"
                            src={line}
                            alt="underline"
                        />
                    </h1>
                </div>
                <div className="financing-content">
                    <div className="payment-methods">
                        <Carousel
                            ref={carousel}
                            breakPoints={breakPoints}
                            pagination={false}
                            renderArrow={customArrows}
                            className="payment-carousel"
                        >
                            {paymentMethodsList}
                        </Carousel>

                        <button
                            className="nav-buttons payment-previous"
                            onClick={() => {
                                carousel.current.slidePrev();
                            }}
                        >
                            <IoChevronBack />
                        </button>

                        <button
                            className="nav-buttons payment-next"
                            onClick={() => {
                                carousel.current.slideNext();
                            }}
                        >
                            <IoChevronForward />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Financing;
