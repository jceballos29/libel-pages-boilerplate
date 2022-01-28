import React from "react";
import "../../css/cards/Master.css";

import { IoAdd } from "react-icons/io5";
import { useDispatch } from "react-redux";

import { openVideo } from "../../features/video";

const Master = ({ image, title, professor, technology, url, master }) => {

    const dispatch = useDispatch();

    return (
        <div className="Master">
            <div className="master-content">
                <div className="master-image">
                    <div className="cover-image">
                        <button
                            className="master-more"
                            onClick={() => {
                                // handleOpenModal(true);
                                dispatch(openVideo({ modal: true, url: url, type:"master", master: master }));
                            }}
                        >
                            <IoAdd />
                        </button>
                    </div>
                    <img src={image} alt="Result" />
                </div>
                <div className="master-professor">
                    <h3>{title}</h3>
                    <p>{professor}</p>
                </div>
            </div>
            <div className="master-technology">
                <img src={technology} alt="tech" />
            </div>
        </div>
    );
};

export default Master;
