import React from "react";
import Button from "../Button/Button";
import './Partnership.css'

function Partnership({ data }){
    return(
        <div className={`partnership-card ${data.style}`}>
            <div className={`partnership-icon-container ${data.style}`}>
                {data.image}
            </div>
            <h3 className="partnership-action">{ data.action }</h3>
            <p className="partnership-info">{ data.info }</p>
            <Button color={ data.style }  text={ data.text } target='contact' />
        </div>
    );
};
export default Partnership;