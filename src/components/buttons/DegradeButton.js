import React from 'react'
import "../../css/buttons/DegradeButton.css";
import { IoChevronForward } from "react-icons/io5";
import { Link } from 'react-scroll';

const DegradeButton = ({url="/#", name, width, paddingLeft=20, link}) => {
    return link ? (
        <Link
            to="entrenamientos"
            hashSpy={true}
            spy={true}
            smooth={true}
            duration={700}
            offset={-80}
            className="DegradeButton"
            style={{ width: width, paddingLeft: paddingLeft }}
        >
            {name}
            <span className="create-account">
                <IoChevronForward />
            </span>
        </Link>
    ) : (
        <a
            href={url}
            className="DegradeButton"
            style={{ width: width, paddingLeft: paddingLeft }}
        >
            {name}
            <span className="create-account">
                <IoChevronForward />
            </span>
        </a>
    );
}

export default DegradeButton;
