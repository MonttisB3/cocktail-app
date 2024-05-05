import React from "react";

function StartingInfo ({ infoHeader, infoText }) {

    return(
        <div className="starting-info">
            <h2>{infoHeader}</h2>
            <p>{infoText}</p>
            <hr/>
        </div>
    )
}

export default StartingInfo