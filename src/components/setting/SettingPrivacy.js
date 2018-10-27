import * as React from 'react';
import PageSubTitle from './PageSubTitle';
import SettingButton from './SettingButton';

class SettingPrivacy extends React.Component {
    render() {
        console.log(this.props);
        const { name, email, password } = this.props.privacy;
        return (
            <div className="setting-conponet">
                <PageSubTitle title="개인정보" />
                <div className="setting-item">
                    <div className="setting-item-title">
                        이름
                    </div>
                    <input type="text" value={name}></input>
                    <SettingButton edit btnName="수정" />
                </div>
                <div className="setting-item">
                    <div className="setting-item-title">
                        이메일
                    </div>
                    <input type="text" value={email} readOnly></input>
                    <SettingButton edit btnName="수정" />
                </div>
                <div className="setting-item">
                    <div className="setting-item-title">
                        비밀번호
                    </div>
                    <input type="password" value={password} readOnly></input>
                    <SettingButton edit btnName="수정" />
                </div>
            </div>
        );
    }
}

export default SettingPrivacy;