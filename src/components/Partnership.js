import React from "react";

function Partnership({action, info, text, style}){
    return(
        <div>
            <img src='' alt="Partnership Icon" />
            <h3>{action}</h3>
            <p>{info}</p>
            <button className={style}>{text}</button>
        </div>
    );
};

export default Partnership;
