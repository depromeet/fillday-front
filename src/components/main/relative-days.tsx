/* 
    과거 8일간의 기록을 보여주는 컴포넌트 
*/
import * as React from 'react';
import DateUtil from '../../utils/dates';
import arrow from "./imgs/noun-arrow-941551.png";

// 레포트 페이지로 이동 

function GotoReport () {
    return (
        <div className="goto-report">
            <div className="goto-text">
                잘, 채워지고 있나요?
            </div>
            <div className="goto-text">
                이번주는 어땠어요? 
            </div>
            <div className="goto-report-text">
                자세히 보기
                <img className="main-header-arrow" src={arrow} />
            </div>
        </div>
    )
}
// 상대 날짜 표기 박스
interface ISquareProps {
    day: number;
    weekday: string;
    relativeDay: string;
}

function DailySquare (props: ISquareProps) {
    return (
        <div className="daily-square">
            {/* 검정색 탑 바 */}
            <div className="daily-square-topbar" />
            <div className="daily-square-content">
                {/* 날짜, 왼쪽 부분 */}
                <div className="daily-square-number">
                    {props.day}
                </div>

                {/* 요일, 어제오늘 표시 - 오른쪽 */}
                <div className="daily-square-right">
                    {/* 요일 */}
                    <div className="daily-square-string">
                        {props.weekday}
                    </div>
                    {/* 어제/오늘 */}
                    <div className="daily-square-relative">
                        {props.relativeDay}
                    </div>
                </div>
            </div>
        </div>
    );
}


// 상대 날짜로 8일간의 날/요일/어제오늘 표기
const relativeString = [
    "오늘", "어제", "그제", "3일 전",
    "4일 전", "5일 전", "6일 전", "일주일 전"
];
export default function RelativeDays () {
    const dailySquares = [];
    const today = new DateUtil();

    for (let i = 0 ;i < 8;i++) {
        dailySquares.push((
                <DailySquare
                key={`D-${i}`}
                day={today.getDay()}
                weekday={today.getWeekday()}
                relativeDay={relativeString[i]}
                />
        ));
        today.travelDay(-1);
    }
    return (
        <div className="report-section">
            <div className="relative-days">
                {dailySquares}
            </div>
            <GotoReport />
        </div>
    )
}