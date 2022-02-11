import React, { useEffect, useState } from "react";
import "../css/FloatingSidebar.css";

import libel from "../images/logo_dot.png";
import { useSelector } from "react-redux";

import {
    IoClose,
    IoWalletOutline,
    IoBarbellOutline,
    IoRocketOutline,
} from "react-icons/io5";

import {
    AiOutlineHome,
    AiOutlineQuestionCircle,
    AiOutlineTrophy,
    AiOutlineLike,
} from "react-icons/ai";

import {BiCategoryAlt} from "react-icons/bi"

const links = [
    {
        id: 1,
        title: "Inicio",
        Icon: AiOutlineHome,
        url: "#home",
        location: 0,
    },
    {
        id: 2,
        title: "Entrenamientos",
        Icon: IoBarbellOutline,
        url: "#contenido",
        location: 936,
    },
    {
        id: 4,
        title: "Métodos de Pago",
        Icon: IoWalletOutline,
        url: "#financing",
        location: 3186,
    },
    {
        id: 3,
        title: "Itinerario",
        Icon: IoRocketOutline,
        url: "#itinerary",
        location: 2436,
    },
    {
        id: 3,
        title: "Categorías",
        Icon: BiCategoryAlt,
        url: "#categories",
        location: 2436,
    },
    {
        id: 3,
        title: "Premios",
        Icon: AiOutlineTrophy,
        url: "#awards",
        location: 2436,
    },
    {
        id: 3,
        title: "Resultados",
        Icon: AiOutlineLike,
        url: "#results",
        location: 2436,
    },

    {
        id: 5,
        title: "Preguntas",
        Icon: AiOutlineQuestionCircle,
        url: "#faq",
        location: 3706,
    },
];

const FloatingSidebar = () => {
    const sideMenu = useSelector((state) => state.sideMenu.value.menu);

    const [expanded, setExpanded] = useState(true);
    const [appear, setAppear] = useState({ opacity: 0 });

    const handleLink = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute("href");
        const location = document.querySelector(target).offsetTop;
        console.log(location);
        window.scrollTo({
            left: 0,
            top: location - 80,
        });
    };

    useEffect(() => {
        if (expanded) {
            setTimeout(() => {
                setAppear({ opacity: 1 });
            }, 300);
        } else {
            setAppear({ opacity: 0 });
        }
    }, [expanded]);

    console.log(sideMenu);

    return (
        <div
            className={
                expanded ? "FloatingSidebar expanded" : "FloatingSidebar"
            }
            style={
                sideMenu
                    ? {
                          transform: "translateX(-200%)",
                          visibility: "hidden",
                          opacity: 0,
                      }
                    : {
                          transform: "translateX(0)",
                          visibility: "visible",
                          opacity: 1,
                      }
            }
        >
            <div
                className={
                    expanded ? "sidebar-icon-close" : "sidebar-icon-open"
                }
                onClick={() => {
                    setExpanded(!expanded);
                }}
            >
                {expanded ? (
                    <IoClose />
                ) : (
                    <img src={libel} alt="Libel Academy" />
                )}
            </div>
            {expanded ? (
                <div className="sidebar-links" style={appear}>
                    {links.map(({ id, title, url, Icon }) => (
                        <span key={id}>
                            <Icon />{" "}
                            <a href={url} onClick={handleLink}>
                                {title}
                            </a>
                        </span>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default FloatingSidebar;
