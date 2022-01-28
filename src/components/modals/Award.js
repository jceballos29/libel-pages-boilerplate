import React, { useEffect, useState } from "react";
import "../../css/modals/Award.css";

import { IoClose } from "react-icons/io5";
import libel from "../../images/logo_dot_dark.png";

import { useSelector, useDispatch } from "react-redux";

import { closeAward } from "../../features/award";

const Award = () => {
    const [visibility, setVisibility] = useState("hidden");
    const [container, setContainer] = useState("award-closed");

    const modal = useSelector((state) => state.award.value.modal);
    const title = useSelector((state) => state.award.value.title);
    const items = useSelector((state) => state.award.value.items);

    const dispatch = useDispatch();

    useEffect(() => {
        if (modal) {
            setVisibility("visible");
                setContainer("");

            // setTimeout(() => {
            //     setContainer("");
            // }, 100);
        }
    }, [modal]);

    const handleCloseModal = (event) => {
        if (event.target.className === "Award") {
            setContainer("award-closed");
            dispatch(closeAward());
            setVisibility("hidden");
            // setTimeout(() => {
            //     // handleOpenModal(false);
            //     dispatch(closeAward());
            //     setVisibility("hidden");
            // }, 50);
        }
    };

    return (
        <div
            className="Award"
            style={{ visibility: `${visibility}` }}
            onClick={handleCloseModal}
        >
            <div className={`award-container ${container}`}>
                <button
                    className="award-closer"
                    onClick={() => {
                        setContainer("award-closed");
                        dispatch(closeAward());
                        setVisibility("hidden");
                        // setTimeout(() => {
                        //     // handleOpenModal(false);
                        //     dispatch(closeAward());
                        //     setVisibility("hidden");
                        // }, 50);
                    }}
                >
                    <IoClose />
                </button>
                <h1>{title}</h1>
                <ul>
                    {items.map((e, i) => (
                        <li key={i}>
                            <img src={libel} alt="Libel Dot" />
                            {e}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Award;
