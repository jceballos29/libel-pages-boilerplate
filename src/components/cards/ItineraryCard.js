import React from 'react'
import "../../css/cards/ItineraryCard.css"

const ItineraryCard = ({image, event, description }) => {
    return <div className="ItineraryCard">
        <img src={image} alt="Itinerary Event" />
        <h2>{event}</h2>
        <p>{description}</p>
    </div>;
}

export default ItineraryCard
