import * as React from 'react';
import arrow from "./imgs/noun-arrow-941551.png";

class MainHeader extends React.Component {
    public render() {
        return (
            <div
            className="main-header">
                <div className="main-header-overlay">
                    <div className="main-header-bar">
                        <div className="main-header-logo" />
                        <div className="main-header-setting" />
                    </div>
                    <div className="main-header-date">
                        <div className="main-header-day">
                            10
                        </div>
                        <div className="main-header-mm-yy">
                            <div className="main-header-month">
                                OCT
                            </div>
                            <div className="main-header-year">
                                2018
                            </div>
                        </div>
                    </div>
                    <div className="main-header-intro">
                        <div className="main-header-greeting">
                            안녕하세요, 기환님.
                        </div>
                        <div className="main-header-mom">
                            오늘은... 일좀 하시죠..?
                        </div>
                    </div>
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