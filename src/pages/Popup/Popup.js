import React from "react";
import "./Popup.css"

const Popup = ({ active, setActive, children }) => {

    return (
        <div className={active ? "popup" : "disable"} onClick={() => setActive(false)}>
            <div className="shadow popupWindow">
                {children}
            </div>
        </div>
    )
}

export default Popup;