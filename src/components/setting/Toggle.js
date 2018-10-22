import React from 'react';
import "./toggle.css";

const Toggle = () => {
    function bindClickEvent() {
        const toggler = document.querySelector('.toggle-switch');

        toggler.onclick = function () {
            toggler.classList.toggle('active');
        }
    }
    return (
        <span className="toggle-switch" onClick={bindClickEvent}>
            <span className="toggle-knob"></span>
        </span>
    );
};

export default Toggle;