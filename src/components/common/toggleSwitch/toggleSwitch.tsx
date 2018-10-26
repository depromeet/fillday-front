

import * as React from "react";
import Switch from "react-switch";
const styles = require("./toggleSwitch.scss");

interface IToggleSwitchProps {
    onChangeFunc: () => void;
    checked: boolean;
}

const ToggleSwitch = (props: IToggleSwitchProps) => {
    const { onChangeFunc, checked } = props;
    return <Switch
        onChange={onChangeFunc}
        checked={checked}
        id="normal-switch"
        onColor="#6d6c6c"
        offColor="#fdfdfd"
        onHandleColor="#262626"
        offHandleColor="#262626"
        checkedIcon={false}
        uncheckedIcon={false}
        height={31}
        width={72}
        handleDiameter={24}
        className={styles.toggleSwitch}
    />
};

export default ToggleSwitch;