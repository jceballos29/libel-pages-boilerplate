import React, { useEffect, useState } from "react";
import "../../css/cards/Membership.css";

import { AiFillQuestionCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";

import { openTrainingMore } from "../../features/training";

const Membership = ({
    image,
    icon,
    title,
    price,
    price_before,
    options,
    items,
    saving,
}) => {
    const dispatch = useDispatch();

    const [value, setValue] = useState({paypal: null, card: null});

    const handleChange = (option) => {
        const item = options.find((e) => e.option === option.target.value);
        setValue(item.url);
    };

    useEffect(() => {
        if (options.length === 0) {
            setValue({
                paypal: "https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KTT77XMQ9PAYU",
                card: "https://checkout.payulatam.com/ppp-web-gateway-payu//pr?dlink=095a6eM7c37cR267",
            });
        }
    }, [options]);

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
                            ${price}
                            <sup>99</sup> USD<sub>${price_before}USD</sub>
                        </h5>
                    </div>
                </div>
                {saving ? (
                    <p
                        style={{
                            alignSelf: "center",
                            textAlign: "center",
                            fontSize: 14,
                            fontWeight: 600,
                            color: "var(--base-3)",
                        }}
                    >
                        Ahorra {saving} USD
                    </p>
                ) : null}
                <div className="membership-card-option">
                    {options.length !== 0 ? (
                        <select onChange={handleChange}>
                            {options.map((opt, i) => (
                                <option key={i} value={opt.option}>
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
                                <AiFillQuestionCircle
                                    className="question-icon"
                                    onClick={() => {
                                        dispatch(
                                            openTrainingMore({
                                                modal: true,
                                                title: e.item,
                                                more: e.more,
                                            })
                                        );
                                    }}
                                />
                            ) : null}
                        </li>
                    ))}
                </ul>
                <div className="membership-button">
                    <a
                        href={value.paypal}
                        target="_blank"
                        rel="noreferrer"
                        className="paypal"
                    >
                        Pagar con PayPal
                    </a>
                    <a
                        href={value.card}
                        target="_blank"
                        rel="noreferrer"
                        className="card"
                    >
                        Pagar con Tarjeta
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Membership;
