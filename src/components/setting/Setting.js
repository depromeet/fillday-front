import * as React from 'react';
import SettingAccount from './SettingAccount';
import SettingNotification from './SettingNotification';
import SettingSecurity from './SettingSecurity';
import "./setting_page.css";

class Setting extends React.Component {
    state = {
        editing: false,
        userSetting:{
            account: {
                privacy: {
                    name: '홍길동',
                    email: 'depromeet@gmail.com',
                    password: '12345',
                },
                snsToken: {
                    kakao: null,
                    facebook: null,
                    google: null,
                },
            },
            notification:{
                notificationCycle: {
                    isSetting: true,
                    cycle: null,
                    dayOfWeek:[]
                },
                notificationDisable:{
                    isSettingDisabled: false,
                    disabledTime: {
                        from: null,
                        to: null
                    }
                }
            }
        }
    }
    componentDidMount() {
        const settingData = JSON.parse(localStorage.getItem('userSetting'));
        if(settingData) {
            this.setState({
                userSetting: settingData 
            })
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (!this.state.editing
            && !nextState.editing
            && nextProps.info === this.props.info) {
            return false;
        }
        return true;
    }
    render() {
        const style = {
            width : "660px",
            margin: "auto"
        }
        const {account, notification} = this.state.userSetting;
        return (
            <div style={style}>
                <SettingAccount account={account}/>
                <SettingNotification notification={notification}/>
                <SettingSecurity/>
            </div>
        );
    }
}

export default Setting;