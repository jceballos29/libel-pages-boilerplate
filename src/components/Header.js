import React, { useEffect, useState } from "react";
import "../css/Header.css";

import DegradeButton from "./buttons/DegradeButton";

import logo3dCamp from "../images/3d-camp-logo.png";
import BulletPointBlink from "./buttons/BulletPointBlink";

import dayjs from "dayjs";

import { getRemainingTimeUntilMsTimestamp } from "../utils/countdown";

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
        <div className="Header">
            <div className="header-container container padding">
                <div className="header-content">
                    <img src={logo3dCamp} alt="3D CAMP" className="logo-3d-camp" />
                    <h1>
                        ÚNETE A<br />
                        NUESTRO <span>CAMPAMENTO</span> 3D
                    </h1>
                    <div className="header-content-info">
                        <p>online en vivo</p>
                        <DegradeButton
                            width={210}
                            name="INSCRIBIRME"
                            paddingLeft={40}
                            link={true}
                        />
                    </div>
                </div>
            </div>
            <div className="header-information">
                <div className="header-information-container container padding">
                    {!openingDay.isBefore(nowDay) ? (
                        <div className="countdown">
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
                    ) : (
                        <div className="started-camp">
                            <BulletPointBlink color={"#77bf41"} />
                            Ya inició
                        </div>
                    )}

                    {/*  */}
                    <div className="camp-schedule">
                        <div className="schedule-days">
                            <span>45</span>DÍAS
                        </div>
                        <div className="schedule-legend">
                            entrenamiento intensivo
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
