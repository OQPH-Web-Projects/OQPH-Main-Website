import React from "react";
import Button from "./Button";

function Partnership({action, info, text, style}){
    return(
        <div>
            <img src='' alt="Partnership Icon" />
            <h3>{action}</h3>
            <p>{info}</p>
            <Button text={ text } style={ style } />
        </div>
    );
};

export default Partnership;
