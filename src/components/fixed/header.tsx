import * as React from 'react';


export default class Header extends React.Component {
    public render() {
        return (
            <div className="header">
                <div className="header-main">
                    <div className="header-logo" />
                    <div className="header-list" />
                    <div className="header-alarm" />
                    <div className="header-setting" />
                    <div className="header-write">
                        <div className="header-write-img" />
                        <div className="header-write-text">
                            글쓰기
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}