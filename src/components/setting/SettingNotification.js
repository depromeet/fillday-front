import * as React from 'react';
import SettingPrivacy from './SettingPrivacy';
import SettingConnectSNS from './SettingConnectSNS';
import PageTitle from './PageTitle';
import SettingNotificationCycle from './SettingNotificationCycle';
import SettingNotificationDisable from './SettingNotificationDisable';

class SettingNotification extends React.Component {
    render() {
        const {notificationCycle, notificationDisable} = this.props.notification;
        return (
            <React.Fragment>
                <PageTitle title="알림 설정"/>
                <SettingNotificationCycle notificationCycle = {notificationCycle} />
                <SettingNotificationDisable notificationDisable = {notificationDisable}/>
            </React.Fragment>

        );
    }
}

export default SettingNotification;