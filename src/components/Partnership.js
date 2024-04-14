import React from "react";
import './Partnership.css'

function Partnership({ data }){
    return(
        <div className={`partnership-card ${data.style}`}>
            <img className="partnership-image" src={ data.image } alt="Partnership Icon" />
            <h3 className="partnership-action">{ data.action }</h3>
            <p className="partnership-info">{ data.info }</p>
            <button className={`button-component ${data.style}`}>{ data.text }</button>
        </div>
    );
};

export default Partnership;
