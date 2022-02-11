import React, { useRef } from "react";
import "../css/Memberships.css";
import line from "../images/underline.png";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import Carousel, { consts } from "react-elastic-carousel";

import memberships from "../utils/memberships";
import Membership from "./cards/Membership";

const Memberships = () => {


    const carousel = useRef(null);


    const membershipsList = memberships.map((training) => (
        <Membership
            key={training.id}
            image={training.image}
            icon={training.icon}
            title={training.title}
            price={training.price}
            price_before={training.price_before}
            options={training.options}
            items={training.items}
            saving={training.saving}
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
        { width: 768, itemsToShow: 4, itemsToScroll: 1, showArrows: false },
        { width: 1200, itemsToShow: 4, itemsToScroll: 1, showArrows: false },
    ];

    return (
        <section className="Memberships" id="entrenamientos">
            <div className="memberships-container container padding">
                <div className="memberships-header">
                    <h1>
                        ELEGIR <br />
                        <span>ENTRENAMIENTO</span>
                        <img
                            className="convert-underline"
                            src={line}
                            alt="underline"
                        />
                    </h1>
                    <p>
                        En el 3DCAMP puedes elegir de 1 a 4 entrenamientos. Todo depende de tu plan de aprendizaje y el tiempo que puedas invertir en cada uno de los temas.
                    </p>
                </div>
                <div className="memberships-content">
                    <Carousel
                        ref={carousel}
                        breakPoints={breakPoints}
                        pagination={false}
                        renderArrow={customArrows}
                        className="memberships-carousel"
                    >
                        {membershipsList}
                    </Carousel>
                    <button
                        className="nav-buttons memberships-previous"
                        onClick={() => {
                            carousel.current.slidePrev();
                        }}
                    >
                        <IoChevronBack />
                    </button>
                    <button
                        className="nav-buttons memberships-next"
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

export default Memberships;
