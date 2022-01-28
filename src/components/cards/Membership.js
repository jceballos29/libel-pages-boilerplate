import React, { useState } from "react";
import "../../css/cards/Membership.css";

import { AiFillQuestionCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { openTrainingMore } from "../../features/training";

const Membership = ({ image, icon, title, price, price_before, options, items }) => {

    const dispatch = useDispatch();
    
    const [value, setValue] = useState("");

    const handleChange = (option) => {
        setValue(option.target.value);
    };
    
    return (
        <div className="Membership">
            <div className="membership-header">
                <img src={image} alt="Header Membership" />
            </div>
            <div className="membership-body">
                <div className="membership-info">
                    <div className="membership-icon">
                        <img src={icon} alt="Membership Icon" />
                    </div>
                    <div className="membership-name">
                        <h4
                            style={
                                title === "Full Plan"
                                    ? { color: "#6000de" }
                                    : { color: "#000000" }
                            }
                        >
                            {title}
                        </h4>
                        <h5>
                            ${price} USD<sup>${price_before}USD</sup>
                        </h5>
                    </div>
                </div>
                <div className="membership-card-option">
                    {options.length !== 0 ? (
                        <select onChange={handleChange}>
                            {options.map((opt, i) => (
                                <option key={i} value={opt.url}>
                                    {opt.option}
                                </option>
                            ))}
                        </select>
                    ) : (
                        <p>Todos disponibles</p>
                    )}
                </div>
                <ul className="membership-card-items">
                    {items.map((e, i) => (
                        <li
                            key={i}
                            style={
                                e.item === "Acceso adicional al campamento."
                                    ? { fontWeight: 700 }
                                    : { fontWeight: 300 }
                            }
                        >
                            {e.item}
                            {e.more ? (
                                <AiFillQuestionCircle className="question-icon" onClick={() => {dispatch(openTrainingMore({modal: true, title:e.item, more:e.more}))}}/>
                            ) : null}
                        </li>
                    ))}
                </ul>
                <div className="membership-button">
                    <a href={value} className="paypal">
                        Pagar con PayPal
                    </a>
                    <a href={value} className="card">
                        Pagar con Tarjeta
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Membership;
