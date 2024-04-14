import React from "react";
import Button from "../Button/Button";
import './Partnership.css'

function Partnership({ data }){
    return(
        <div className={`partnership-card ${data.style}`}>
            <img className="partnership-image" src={ data.image } alt="Partnership Icon" />
            <h3 className="partnership-action">{ data.action }</h3>
            <p className="partnership-info">{ data.info }</p>
            <Button color={ data.style }  text={ data.text } />
        </div>
    );
};
export default Partnership;