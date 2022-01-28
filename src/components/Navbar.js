import React, { useState, useEffect } from "react";
import "../css/Navbar.css";

import { IoCaretDown, IoCaretUp, IoClose, IoMenu } from "react-icons/io5";

import logo from "../images/logo.png";
import lo3dCamp from "../images/3d-camp-logo.png"

import bulletPoint1 from "../images/courses-list/002-gantt chart.png";
import bulletPoint2 from "../images/courses-list/021-mail.png";
import bulletPoint3 from "../images/courses-list/029-video marketing.png";
import bulletPoint4 from "../images/courses-list/040-Branching.png";
import bulletPoint5 from "../images/courses-list/063-heart.png";
import bulletPoint6 from "../images/courses-list/078-internet.png";
import bulletPoint7 from "../images/courses-list/093-idea.png";

import coursesPreviewList from "../utils/previewCourses";
import SlideShow from "./sliders/SlideShow";

import { getRemainingTimeUntilMsTimestamp } from "../utils/countdown";

const defaultRemainingTime = {
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00",
};



const Navbar = () => {
    const [menu, setMenu] = useState(false);
    const [showMenu, setShowMenu] = useState("none");
    const [courses, setCourses] = useState(false);
    const [coursesMenu, setCoursesMenu] = useState({
        visibility: "hidden",
        opacity: 0,
    });
    const [courseColor, setCourseColor] = useState("#ffffff");
    const [top, setTop] = useState("-100%");
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

    // const countdownTimestampMs = 1644696000000;
    const countdownTimestampMs = "Sat, 19 Mar 2022 16:00:00 GMT-5";


    useEffect(() => {
        if (menu) {
            setShowMenu("flex");
        } else {
            setShowMenu("none");
        }
    }, [menu]);

    useEffect(() => {
        if (courses) {
            setCoursesMenu({ visibility: "visible", opacity: 1 });
            setCourseColor("#8f8f8f");
            setTop("0");
        } else {
            setCoursesMenu({ visibility: "hidden", opacity: 0 });
            setCourseColor("#ffffff");
            setTop("-100%");
        }
    }, [courses]);

    const handleCloseCourseMenu = (event) => {
        if (event.target.className === "courses-menu-container") {
            setCourses(false);
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    return (
        <div className="Navbar">
            <div className="navbar-container container">
                <div className="home">
                    <a className="logo" href="https://libel.academy">
                        <img src={logo} alt="Libel Academy" />
                    </a>
                </div>
                <div className="navigation">
                    <div className="nav-countdown">
                        <a
                            href="https://libel.academy/3d-camp"
                            className="nav-countdown-image"
                        >
                            <img src={lo3dCamp} alt="3D Camp" />
                        </a>
                        <div className="nav-countdown-title">
                            3D CAMP <br />{" "}
                            <a href="https://libel.academy/3d-camp">
                                ONLINE - EN VIVO
                            </a>
                        </div>
                        <div className="nav-countdown-timer">
                            <div className="nav-countdown-segment">
                                <div className="nav-countdown-letters">DIA</div>
                                <div className="nav-countdown-numbers">
                                    {remainingTime.days}
                                </div>
                            </div>
                            <div className="nav-countdown-segment">
                                <div className="nav-countdown-letters">HOR</div>
                                <div className="nav-countdown-numbers">
                                    {remainingTime.hours}
                                </div>
                            </div>
                            <div className="nav-countdown-segment">
                                <div className="nav-countdown-letters">MIN</div>
                                <div className="nav-countdown-numbers">
                                    {remainingTime.minutes}
                                </div>
                            </div>
                            <div className="nav-countdown-segment">
                                <div className="nav-countdown-letters">SEG</div>
                                <div className="nav-countdown-numbers">
                                    {remainingTime.seconds}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="shortcuts">
                        <a href="https://libel.academy/zbrush/">Licencias</a>

                        <button
                            style={{ color: `${courseColor}` }}
                            className="nav-courses"
                            onClick={() => {
                                setCourses(!courses);
                            }}
                        >
                            Cursos
                            {courses ? (
                                <IoCaretUp
                                    style={{
                                        marginLeft: "10px",
                                        fontSize: "12 px",
                                    }}
                                />
                            ) : (
                                <IoCaretDown
                                    style={{
                                        marginLeft: "10px",
                                        fontSize: "12 px",
                                    }}
                                />
                            )}
                        </button>
                    </div>
                </div>
                <div className="academy">
                    <a
                        href="https://cursos.libel.academy/users/sign_up"
                        target={"_blank"}
                        rel="noreferrer"
                        className="register"
                    >
                        Crear cuenta
                    </a>
                    <a
                        href="https://cursos.libel.academy/users/sign_in"
                        target={"_blank"}
                        rel="noreferrer"
                        className="login"
                    >
                        ENTRAR
                    </a>
                    <div className="menu-icon">
                        <IoMenu
                            onClick={() => {
                                setMenu(!menu);
                            }}
                        />
                    </div>
                </div>
                <ul className="menu-list" style={{ display: `${showMenu}` }}>
                    <div className="menu-countdown">
                        <div className="menu-countdown-image">
                            <img src={lo3dCamp} alt="3D Camp" />
                        </div>
                        <div className="menu-countdown-timer">
                            <div className="menu-countdown-segment">
                                <div className="menu-countdown-letters">
                                    DIA
                                </div>
                                <div className="menu-countdown-numbers">
                                    {remainingTime.days}
                                </div>
                            </div>
                            <div className="menu-countdown-segment">
                                <div className="menu-countdown-letters">
                                    HOR
                                </div>
                                <div className="menu-countdown-numbers">
                                    {remainingTime.hours}
                                </div>
                            </div>
                            <div className="menu-countdown-segment">
                                <div className="menu-countdown-letters">
                                    MIN
                                </div>
                                <div className="menu-countdown-numbers">
                                    {remainingTime.minutes}
                                </div>
                            </div>
                            <div className="menu-countdown-segment">
                                <div className="menu-countdown-letters">
                                    SEG
                                </div>
                                <div className="menu-countdown-numbers">
                                    {remainingTime.seconds}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-academy">
                        <a
                            href="https://cursos.libel.academy/users/sign_up"
                            className="register-mobile"
                        >
                            Crear cuenta
                        </a>
                        <a
                            href="https://cursos.libel.academy/users/sign_in"
                            className="login-mobile"
                        >
                            Entrar
                        </a>
                    </div>
                    <div className="menu-shortcuts">
                        <li>
                            <a href="https://cursos.libel.academy/collections?category=courses">
                                Cursos
                            </a>
                        </li>
                        <li>
                            <a href="https://libel.academy/libel/master/">
                                Masters
                            </a>
                        </li>
                        <li>
                            <a href="https://cursos.libel.academy/bundles/membresia-plus-escuela-zbrush">
                                Escuela Zbrush
                            </a>
                        </li>
                        <li>
                            <a href="https://aprende-blender.libel.academy/">
                                Escuela Blender
                            </a>
                        </li>
                        <li>
                            <a href="https://cursos.libel.academy/collections?q=Rigging">
                                Escuela Rigging
                            </a>
                        </li>
                        <li>
                            <a href="https://cursos.libel.academy/collections?q=concep">
                                Escuela Ilustración
                            </a>
                        </li>
                        <li>
                            <a href="https://libel.academy/zbrush/">
                                Licencias
                            </a>
                        </li>
                    </div>
                    <button
                        className="menu-list-close"
                        onClick={() => {
                            setMenu(!menu);
                        }}
                    >
                        <IoClose />
                    </button>
                </ul>
            </div>
            <div
                className="courses-menu-container"
                style={coursesMenu}
                onClick={handleCloseCourseMenu}
            >
                <div className="courses-menu" style={{ top: `${top}` }}>
                    <div className="courses-list">
                        <div className="courses-column">
                            <h3>TODOS LOS CURSOS</h3>
                            <ul>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint7}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a
                                        href="https://cursos.libel.academy/collections?q=Rigging"
                                        target={"_blank"}
                                        rel="noreferrer"
                                    >
                                        Curso de Rigging
                                    </a>
                                </li>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint6}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a
                                        href="https://aprende-blender.libel.academy/"
                                        target={"_blank"}
                                        rel="noreferrer"
                                    >
                                        Curso de Blender
                                    </a>
                                </li>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint5}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a
                                        href="https://cursos.libel.academy/bundles/membresia-plus-escuela-zbrush"
                                        target={"_blank"}
                                        rel="noreferrer"
                                    >
                                        Curso de ZBrush
                                    </a>
                                </li>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint4}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a
                                        href="https://cursos.libel.academy/collections?q=concep"
                                        target={"_blank"}
                                        rel="noreferrer"
                                    >
                                        Curso de ilustración
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="courses-column">
                            <h3>ENTRENAMIENTOS</h3>
                            <ul>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint1}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a href="https://libel.academy/libel/master/">
                                        Masters
                                    </a>
                                </li>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint2}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a href="https://cursos.libel.academy/collections?category=membresias">
                                        Membresías
                                    </a>
                                </li>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint3}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a href="https://libel.academy/3d-camp/">
                                        3D Camp
                                    </a>
                                </li>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint4}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a href="https://cursos.libel.academy/collections?category=courses">
                                        Aprende a tu ritmo
                                    </a>
                                </li>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint5}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a href="https://libel.academy/zbrush/">
                                        Licencias ZBrush
                                    </a>
                                </li>
                                <li>
                                    <div className="corses-bullet-point">
                                        <img
                                            src={bulletPoint6}
                                            alt="bullet point"
                                        />
                                    </div>
                                    <a href="https://libel.academy/master-personajes-estilizados/">
                                        Reallusion
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="courses-preview">
                        {courses ? (
                            <SlideShow courses={coursesPreviewList} />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
