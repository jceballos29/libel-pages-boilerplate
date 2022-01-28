import React from "react";
import "../css/Itinerary.css";

import itineraryEvents from "../utils/itinerary";
import ItineraryCard from "./cards/ItineraryCard";

const Itinerary = () => {
    return (
        <div className="Itinerary">
            <div className="itinerary-container container padding">
                <div className="itinerary-header">
                    <h1>
                        <span>ITINERARIO</span>
                        <br />
                        ACTIVIDADES
                    </h1>
                    <p>
                        Vive una aventura llena de
                        <br />
                        experiencias únicas y aprendizajes
                    </p>
                </div>
                <div className="itinerary-body">
                    {itineraryEvents.map((event, i) => (
                        <ItineraryCard
                            key={i}
                            image={event.image}
                            event={event.event}
                            description={event.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Itinerary;
