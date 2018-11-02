import * as React from 'react';
import PageSubTitle from './PageSubTitle';
import SettingButton from './SettingButton';

class SettingSecurity extends React.Component {
    render() {
        return (
            <div>
                <PageSubTitle title="보안"/>
                <div className="setting-item">
                    <div className="setting-item-title">
                    로그아웃
                    </div>
                    <SettingButton btnName="로그아웃"/>
                </div>
                <div className="setting-item">
                    <div className="setting-item-title">
                    회원탈퇴
                    </div>
                    <SettingButton btnName="회원탈퇴"/>
                </div>
            </div>
        );
    }
}

export default SettingSecurity;