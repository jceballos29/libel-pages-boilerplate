import React, { useRef, useState } from "react";
import "../css/TrainingsToDo.css";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import technologies from "../utils/technologies";
import Tags from "./buttons/Tags";
import ToDoCard from "./cards/ToDoCard";

import Carousel, { consts } from "react-elastic-carousel";

const TrainingsToDo = () => {
    const carousel = useRef(null);

    const [card, setCard] = useState(0);

    const handleTechnology = (id) => {
        setCard(id);
        carousel.current.goTo(id)
    };

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
        { width: 1, showArrows: true },
        { width: 460, showArrows: false },
        { width: 768, showArrows: false },
        { width: 1200, showArrows: false },
    ];

    return (
        <div className="TrainingsToDo">
            <div className="to-do-container container padding">
                <div className="to-do-information">
                    <h1>
                        <span>ENTRENAMIENTOS</span>
                        <br />A REALIZAR EN EL 3DCAMP
                    </h1>
                    <p>
                        Los entrenamientos son con acompañamiento online en
                        vivo, y tendrán sus respectivos cronogramas.
                    </p>
                </div>
                <div className="to-do-tags">
                    {technologies.map((tech) => (
                        <Tags
                            key={tech.name}
                            id={tech.id}
                            icon={tech.icon}
                            name={tech.name}
                            handleTechnology={handleTechnology}
                            active={card === tech.id ? true : false}
                        />
                    ))}
                </div>
                <div className="to-do-content">
                    <Carousel
                        ref={carousel}
                        breakPoints={breakPoints}
                        pagination={false}
                        renderArrow={customArrows}
                        className="to-do-carousel"
                        onChange={(currentItem) => {
                            setCard(currentItem.index);
                        }}
                    >
                        <ToDoCard name="zbrush" />
                        <ToDoCard name="blender" />
                        <ToDoCard name="rigging" />
                        <ToDoCard name="substance" />
                    </Carousel>
                    <button
                        className="to-do-previous to-do-button"
                        onClick={() => {
                            carousel.current.slidePrev();
                        }}
                    >
                        <IoChevronBack />
                    </button>
                    <button
                        className="to-do-next to-do-button"
                        onClick={() => {
                            carousel.current.slideNext();
                        }}
                    >
                        <IoChevronForward />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TrainingsToDo;
