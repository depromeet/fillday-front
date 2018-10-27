import * as React from 'react';
import { Link } from 'react-router-dom';
import * as ReactTooltip from 'react-tooltip';

interface IHeaderProps{
    login: boolean;
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
                                <div className="header-list" 
                                data-tip={true}
                                data-for={"goto-report"}
                                />
                                <ReactTooltip
                                place="bottom"
                                border={true}
                                type='light'
                                effect='solid'
                                id={"goto-report"}
                                >
                                    리포트 기록 보기
                                </ReactTooltip>
                            </Link>
                            <div className="header-alarm" 
                            data-tip={true}
                            data-for={"goto-write"}
                            />
                            <ReactTooltip
                            place="bottom"
                            border={true}
                            type='light'
                            effect='solid'
                            id={"goto-write"}
                            >
                                필데이 채우기
                            </ReactTooltip>
                            <Link to={'/fillday/setting'}>
                                <div className="header-setting" 
                                data-tip={true}
                                data-for={"goto-setting"}
                                />
                            </Link>
                            <ReactTooltip
                                place="bottom"
                            border={true}
                            type='light'
                            effect='solid'
                            id={"goto-setting"}
                            >
                                필데이 설정하기
                            </ReactTooltip>
                            <div className="header-write">
                                <div className="header-write-img" />
                                <div className="header-write-text">
                                    글쓰기
                                </div>
                            </div>
                            </React.Fragment>
                        ): (
                            <Link to={'/fillday/login'}>
                            <div className="header-start">
                                <div className="header-start-img"/>
                                <div className="header-start-text">
                                    시작하기
                                </div>
                            </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        );
    }
}