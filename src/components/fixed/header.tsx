import * as React from 'react';
import { Link } from 'react-router-dom';

interface IHeaderProps{
    login: boolean;
    onLogin: () => void;
}
export default class Header extends React.Component<IHeaderProps, any> {
    public render() {
        return (
            <div className="header">
                <div className="header-main">
                    <Link to={'/'}>
                        <div className="header-logo" />
                    </Link>
                    {
                        this.props.login?(
                            <React.Fragment>
                            <Link to={'/fillday/report'}>
                                <div className="header-list" />
                            </Link>
                            <div className="header-alarm" />
                            <div className="header-setting" />
                            <div className="header-write">
                                <div className="header-write-img" />
                                <div className="header-write-text">
                                    글쓰기
                                </div>
                            </div>
                            </React.Fragment>
                        ): (
                            <div className="header-start">
                                <div className="header-start-img"/>
                                <div className="header-start-text">
                                    시작하기
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}