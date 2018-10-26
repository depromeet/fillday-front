import * as React from 'react';
import DateUtil from '../../utils/dates';
import { Link } from 'react-router-dom';

interface IMainHeaderState {
    hover: boolean;
}
interface IMainHeaderProps {
    login: boolean;
}
class MainHeader extends React.Component<IMainHeaderProps, IMainHeaderState> {
    constructor(props: any) {
        super(props);
        this.onMouseOut = this.onMouseOut.bind(this);
        this.onMouseOver = this.onMouseOver.bind(this);
        this.state = {
            hover: false
        }
    }

    public onMouseOut() {
        this.setState({hover:false});
    }
    public onMouseOver() {
        this.setState({hover:true});
    }
    public render() {
        const date = new DateUtil();
        return (
            <div
            className="main-header">
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
                        {
                            this.props.login? 
                            "안녕하세요, 기환님.": 
                            "열정이 채워져가는 공간,"
                        }
                    </div>
                    <div className="main-header-mom">
                        {/* 조언 */}
                        {
                            this.props.login? 
                            "오늘은 일좀 하실거죠?": 
                            "안녕하세요. 필데이에 오신것을 환영합니다."
                        }
                    </div>
                </div>
                {/* 기록작성으로 이동 */}
                <Link to ={'/fillday/report'}>
                    <div className="main-writing-section"
                    onMouseOut={this.onMouseOut}
                    onMouseOver={this.onMouseOver}>
                        {/* 손모양 로고 */}
                        <div className={this.state.hover ? "fillday-ani": "" } />
                        <div 
                        className={`main-writing-logo`} />
                        <div className="main-writing-hint">
                            <div className="main-writing-title">
                                {
                                    this.props.login?
                                    "필데이 작성하러 가기":
                                    "시작하시려면 로그인을 해주세요."
                                }
                            </div>
                            <div className="main-writing-subs">
                                {
                                    this.props.login?
                                    "오늘은 어땠나요? 하고 싶던 일을 얼마나 해냈는지, 오늘을 채워주세요.":
                                    "색이 채워질 노트를 먼저 만들어 볼까요?"
                                }
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default MainHeader;