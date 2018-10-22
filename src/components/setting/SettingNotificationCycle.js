import * as React from 'react';
import PageSubTitle from './PageSubTitle';
import Toggle from './Toggle';

class SettingNotificationCycle extends React.Component {
    render() {
        return (
            <div>
                <PageSubTitle title="알림"/>
                <div className="setting-item">
                    <div className="setting-item-title">
                    웹 알림 활성화
                    </div>
                <Toggle/>
                </div>
                <div className="setting-item">
                    <div className="setting-item-title">
                    알림 주기 시간
                    </div>
                <select>
                    <option>2시간 단위로 알려주세요.</option>
                </select>
                </div>
                <div className="setting-item">
                    <div className="setting-item-title">
                    알림 받는 요일
                    </div>
                    {/*  */}
                </div>
            </div>
        );
    }
}

export default SettingNotificationCycle;