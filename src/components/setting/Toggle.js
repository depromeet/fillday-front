import React from 'react';
import "./toggle.css";

const Toggle = ({ isSetting }) => {
    function bindClickEvent(e) {
        e.currentTarget.classList.toggle('active');
    }
    if (isSetting) {
        return (
            <span className="toggle-switch active" onClick={bindClickEvent}>
                <span className="toggle-knob"></span>
            </span>
        );
    }
    return (
        <span className="toggle-switch" onClick={bindClickEvent}>
            <span className="toggle-knob"></span>
        </span>
    );
};

export default Toggle;