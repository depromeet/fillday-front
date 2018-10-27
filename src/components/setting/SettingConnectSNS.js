import * as React from 'react';
import PageSubTitle from './PageSubTitle';
import SettingButton from './SettingButton';

class SettingConnectSNS extends React.Component {
    state = {
        kakao: null,
        facebook: null,
        google: null,
    }
    render() {
        return (
            <div>
                <PageSubTitle title="소셜 계정 연결" />
                <div className="setting-item">
                    <div className="setting-item-title">
                        카카오와 연결
                    </div>
                    <SettingButton className="btn-kakao" btnName="KAKAO"/>
                </div>
                <div className="setting-item">
                    <div className="setting-item-title">
                        페이스북과 연결
                    </div>
                    <SettingButton className="btn-facebook" btnName="FACEBOOK"/>
                </div>
                <div className="setting-item">
                    <div className="setting-item-title">
                        구글과 연결
                    </div>
                    <SettingButton className="btn-google" btnName="GOOGLE"/>
                </div>
            </div >
        );
    }
}

export default SettingConnectSNS;