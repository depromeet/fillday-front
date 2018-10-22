import * as React from 'react';
import SettingAccount from './SettingAccount';
import SettingNotification from './SettingNotification';
import SettingSecurity from './SettingSecurity';
import "./setting_page.css";

class Setting extends React.Component {
    render() {
        const style = {
            width : "660px",
            margin: "auto"
        }
        return (
            <div style={style}>
                <SettingAccount/>
                <SettingNotification/>
                <SettingSecurity/>
            </div>
        );
    }
}

export default Setting;