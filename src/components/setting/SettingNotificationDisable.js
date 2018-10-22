import * as React from 'react';
import PageSubTitle from './PageSubTitle';
import Toggle from './Toggle';

class SettingNotificationDisable extends React.Component {
    render() {
        return (
            <div>
                <PageSubTitle title="방해금지"/>
                <div className="setting-item">
                    <div className="setting-item-title">
                        방해금지 활성화
                    </div>
                    <Toggle/>
                </div>
                <div className="setting-item">
                    <div className="setting-item-title">
                        금지시간 설정
                    </div>
                    {/*  */}
                </div>
            </div>
        );
    }
}

export default SettingNotificationDisable;