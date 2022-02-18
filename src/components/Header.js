import React, { useEffect, useState } from "react";
import "../css/Header.css";

import logo3dCamp from "../images/3d-camp-logo-header.png";
import BulletPointBlink from "./buttons/BulletPointBlink";

import line from "../images/underline.png";

import imageBackground from "../images/background_header.jpg";
import imageBackgroundWebp from "../images/background_header.webp";

import { isWebpSupported } from "react-image-webp/dist/utils";

import dayjs from "dayjs";

import { getRemainingTimeUntilMsTimestamp } from "../utils/countdown";
import { IoChevronForward } from "react-icons/io5";
import { useSelector } from "react-redux";

const defaultRemainingTime = {
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00",
};

const Header = () => {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);
    const countdownTimestampMs = "Sat, 19 Mar 2022 16:00:00 GMT-5";

    const nowDay = dayjs();
    const openingDay = dayjs("Sat, 19 Mar 2022 16:00:00 GMT-5");

    const banner = useSelector(state => state.banner.value.banner)
    const width = window.innerWidth <= 460 ? 150 : 100;

    const background = isWebpSupported()
        ? {
              backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.6) 100%, rgba(255,255,255,0) 100%), url(${imageBackgroundWebp})`,
          }
        : {
              backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.4) 100%, rgba(255,255,255,0) 100%), url(${imageBackground}),`,
          };

    const paddingTop = banner ? { paddingTop: width + 80} : {paddingTop: 80}; 

    const style = { ...background, ...paddingTop }

    
    useEffect(() => {
        const intervalId = setInterval(() => {
            updateRemainingTime(countdownTimestampMs);
        }, 1000);
        return () => clearInterval(intervalId);
    }, [countdownTimestampMs]);

    function updateRemainingTime(countdown) {
        setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
    }

    const handleLink = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute("href");
        const location = document.querySelector(target).offsetTop;
        window.scrollTo({
            left: 0,
            top: location - 80,
        });
    };

    return (
        <section
            className="Header"
            id="home"
            style={style}
        >
            <img src={logo3dCamp} alt="3D CAMP" className="logo-3d-camp" />
            <h1 className="header-title">
                Únete a nuestro
                <br />
                <b>
                    <span>
                        <img
                            src={line}
                            alt="header-underline"
                            className="header-underline"
                        />
                        CAMPAMENTO
                    </span>{" "}
                    3D
                </b>
            </h1>
            <div className="header-content-info">
                <p>Online en vivo</p>
                <a
                    href="#entrenamientos"
                    className="DegradeButton"
                    onClick={handleLink}
                >
                    ÚNETE AHORA
                    <span className="create-account">
                        <IoChevronForward />
                    </span>
                </a>
            </div>
            {openingDay.isAfter(nowDay) ? (
                <div className="header-info">
                    <div className="camp-schedule">
                        <div className="schedule-content">
                            <div className="schedule-days">
                                <span>45</span>DÍAS
                            </div>
                            <div className="schedule-legend">
                                entrenamiento intensivo
                            </div>
                        </div>
                    </div>

                    <div className="header-information">
                        <BulletPointBlink color={"#6000de"} />
                        <h2>
                            Inicia:
                            <br />
                            <b>19 de Marzo, 4:00 p.m</b>
                            <br />
                            <span>Hora Colombia</span>
                        </h2>
                        <BulletPointBlink color={"#6000de"} />
                    </div>

                    <div className="countdown">
                        <div className="countdown-timer">
                            <div className="countdown-segment">
                                <div className="countdown-label">DIA</div>
                                <div className="countdown-number">
                                    {remainingTime.days}
                                </div>
                            </div>
                            <div className="countdown-segment">
                                <div className="countdown-label">HOR</div>
                                <div className="countdown-number">
                                    {remainingTime.hours}
                                </div>
                            </div>
                            <div className="countdown-segment">
                                <div className="countdown-label">MIN</div>
                                <div className="countdown-number">
                                    {remainingTime.minutes}
                                </div>
                            </div>
                            <div className="countdown-segment">
                                <div className="countdown-label">SEG</div>
                                <div className="countdown-number">
                                    {remainingTime.seconds}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="header-info">
                    <div className="started-camp">
                        <BulletPointBlink color={"#77bf41"} />
                        <p>Ya inició</p>
                    </div>
                    <div className="camp-schedule">
                        <div className="schedule-content">
                            <div className="schedule-days">
                                <span>45</span>DÍAS
                            </div>
                            <div className="schedule-legend">
                                entrenamiento intensivo
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Header;
