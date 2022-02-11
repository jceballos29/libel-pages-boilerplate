import React from 'react';
import "../../css/cards/MaterItem.css"

import { IoPlay } from "react-icons/io5"

import Image from "react-image-webp";

import { openVideo } from "../../features/video";
import { useDispatch } from 'react-redux';


const MasterItem = ({ content }) => {
    
    const dispatch = useDispatch();
    return (
        <div className="MasterItem">
            <div className="item-header">
                <div
                    className="item-play"
                    onClick={() => {
                        dispatch(
                            openVideo({
                                modal: true,
                                url: content.video,
                                type: "common",
                            })
                        );
                    }}
                >
                    <IoPlay />
                </div>
                <div className="item-filter"></div>
                <Image
                    webp={content.imageWebp}
                    src={content.image}
                    className="item-image"
                />
            </div>
            <div className="item-content">
                <div className="item-information">
                    <h2 className="item-title">{content.title}</h2>
                    <p className="item-desc">{content.description}</p>
                </div>
                <div className="item-blender">
                    <img src={content.tech} alt="Blender" />
                </div>
            </div>
        </div>
    );
};

export default MasterItem;
