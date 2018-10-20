import * as React from 'react';
import DateUtil from '../../utils/dates';
import arrow from "./imgs/noun-arrow-941551.png";

class MainHeader extends React.Component {
    public render() {
        const date = new DateUtil();
        return (
            <div
            className="main-header">
                <div className="main-header-overlay">
                    {/* 상단 바 */}
                    <div className="main-header-bar">
                        <div className="main-header-logo" />
                        <div className="main-header-setting" />
                    </div>
                    {/* 오늘 날짜 */}
                    <div className="main-header-date">
                        <div className="main-header-day">
                            {/* 날짜 */}
                            {date.getDay()}
                        </div>
                        <div className="main-header-mm-yy">
                            <div className="main-header-month">
                            {/* 월 */}
                            {date.getMonth()}
                            </div>
                            <div className="main-header-year">
                            {/* 연 */}
                            {date.getYear()}
                            </div>
                        </div>
                    </div>
                    {/* 안냇말 */}
                    <div className="main-header-intro">
                        <div className="main-header-greeting">
                            안녕하세요, 기환님.
                        </div>
                        <div className="main-header-mom">
                            {/* 조언 */}
                            오늘은... 일좀 하시죠..?
                        </div>
                    </div>
                    {/* 기록작성으로 이동 */}
                    <div className="main-header-go">
                        오늘 채우러 가기 
                        <img className="main-header-arrow" src={arrow} />
                    </div>
                </div>
            </div>
        );
    }
}

export default MainHeader;