import React from 'react'
import "../../css/buttons/TransparentButton.css"

const TransparentButton = ({url="/#", width, name, color}) => {
    return <a href={url} className="TransparentButton" style={{ width: width, color: color }}>
        {name}
    </a>;
}

export default TransparentButton
