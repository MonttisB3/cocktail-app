import React from "react";
import StartingInfo from "../components/StartingInfo";

function AboutPage(){
    const startHeader = "About me"
    const startInfo = "Here's some more info about me for rich investors"

    return(
        <div className="about-us">
            <StartingInfo infoHeader={startHeader} infoText={startInfo} />
            <h3>Send money, please</h3>
        </div>
    )
}

export default AboutPage;