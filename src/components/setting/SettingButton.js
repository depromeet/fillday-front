import React from 'react';

const SettingButton = ({clickEvent, btnName, className}) => {
    const style = {
        width: "140px",
        height: "38px",
        borderRadius: "4px",
        border: "solid 1px #e7e8e7",
        backgroundColor: "#ffffff"
    
    }
    return (
        <button onClick={clickEvent} className={className} style={style}>{btnName}</button>
    );
};

export default SettingButton;