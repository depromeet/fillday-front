import * as React from 'react';
import SettingPrivacy from './SettingPrivacy';
import SettingConnectSNS from './SettingConnectSNS';
import PageTitle from './PageTitle';

class SettingAccount extends React.Component {
    render() {
        const {privacy, snsToken} = this.props.account;
        return (
            <React.Fragment>
                <PageTitle title="계정설정" settingMode/>
                <SettingPrivacy privacy={privacy}/>
                <SettingConnectSNS snsToken={snsToken}/>
            </React.Fragment>

        );
    }
}

export default SettingAccount;