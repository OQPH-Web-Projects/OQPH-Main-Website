import React from "react";
import Button from "./Button/Button";

function Partnership({ data }){
    return(
        <div>
            <img src={ data.image } alt="Partnership Icon" />
            <h3>{ data.action }</h3>
            <p>{ data.info }</p>
            <Button text={ data.text } />
        </div>
    );
};

export default Partnership;
