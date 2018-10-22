import * as React from 'react';
import PageSubTitle from './PageSubTitle';
import SettingButton from './SettingButton';

class SettingPrivacy extends React.Component {
    render() {
        return (
            <div className="setting-conponet">
                <PageSubTitle title="개인정보"/>
                <div className="setting-item">
                    <div className="setting-item-title">
                    이름
                    </div>
                    <input type="text"></input>
                    <SettingButton className="privacy-edit-btn" btnName="수정"/>
                </div>
                <div className="setting-item">
                    <div className="setting-item-title">
                    이메일
                    </div>
                      <input type="text" readOnly></input>
                    <SettingButton className="privacy-edit-btn" btnName="수정"/>
                </div>
                <div className="setting-item">
                    <div className="setting-item-title">
                    비밀번호
                    </div>
                    <input type="password" readOnly></input>
                    <SettingButton className="privacy-edit-btn" btnName="수정"/>
                </div>
            </div>
        );
    }
}

export default SettingPrivacy;