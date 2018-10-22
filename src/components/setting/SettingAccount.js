import * as React from 'react';
import SettingPrivacy from './SettingPrivacy';
import SettingConnectSNS from './SettingConnectSNS';
import PageTitle from './PageTitle';

class SettingAccount extends React.Component {
    render() {
        return (
            <React.Fragment>
                <PageTitle title="계정설정"/>
                <SettingPrivacy />
                <SettingConnectSNS />
            </React.Fragment>

        );
    }
}

export default SettingAccount;