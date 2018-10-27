import * as React from 'react';
import RelativeDays from './relative-days';
import HalfYearLawns from './halfyear-lawns';
// 메인 페이지의 실제 내용 표시부 
function MainIntro() {
    return (
        <div className="main-intro">
            <div className="intro-row">
                <div className="intro-report">
                    <div className="intro-title">
                        필데이는 몰입한 시간을<br/>
                        채우는 공간입니다.
                    </div>
                    <div className="intro-report-detail">
                        하루 중 계획한 일에 제대로 집중하셨나요?<br/>
                        필데이는 하루를 직접 계획하고, <br/>
                        그 시간동안 계획을 위해 제대로 집중을 했는지 <br/>
                        평가를 하고 기록하는 데일리 리포트입니다.
                    </div>
                    <div className="intro-goto-video">
                        <div className="intro-goto-video-text">
                            옆 영상에서 데일리 리포트 확인
                        </div>
                    </div>
                </div>
                <div className="intro-report-video intro-box">
                    <iframe 
                    width="598" height="398"
                    src="https://www.youtube.com/embed/RNfgXXjvxNA" 
                    allow="encrypted-media" 
                    frameBorder={0}
                    allowFullScreen={true}
                    />
                </div>
            </div>
            <div className="intro-row">
                <div className="intro-img intro-box" />
                <div className="intro-graph">
                    <div className="intro-title">
                        여러분의 변화를 <br/>
                        직접 확인해보세요.
                    </div>
                    <div className="intro-graph-subtitle">
                        알기 쉬운 변화의 그래프
                    </div>
                    <div className="intro-graph-detail">
                        어제와 오늘의 변화, 지난주의 성장의 변화가 느껴지시나요?<br/>
                        필데이는 변화되는 색을 쉽게 확인 할 수 있도록<br/>
                        색의 변화를 그래프로 보여드립니다.
                    </div>

                    <div className="intro-graph-subtitle">
                        긍정적인 변화의 시작
                    </div>
                    <div className="intro-graph-detail">
                        하루 하루 채워가는 여러분의 기록,<br/>
                        그리고 하루 하루 변해가는 여러분의 변화를<br/>
                        필데이와 함께 시작해보세요.
                    </div>
                </div>
            </div>
        </div>
    )
}
interface IMainBodyProps {
    login: boolean;
    user: firebase.User | undefined;
}
export default class MainBody extends React.Component<IMainBodyProps, any> {
    public render() {
        return (
            <div
            className="main-body">
                {
                    this.props.login? (
                        <React.Fragment>
                        <RelativeDays />
                        <HalfYearLawns />
                        </React.Fragment>
                    ): (
                        <MainIntro />
                    )
                }
            </div>
        );
    }
}