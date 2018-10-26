/* 
    과거 8일간의 기록을 보여주는 컴포넌트 
*/
import * as React from 'react';
import DateUtil from '../../utils/dates';
import { COLOR, EVAL } from '../..//utils/color';

// 상대 날짜 표기 박스
interface ISquareProps {
    day: number;
    weekday: string;
    relativeDay: string;
}

function DailySquare (props: ISquareProps) {
    return (
        <div className="daily-square daily-square-pastdays">
            <div className="daily-square-content">
                <div className="daily-square-date">
                    {/* 날짜 */}
                    <div className="daily-square-number">
                        {props.day}
                    </div>
                    {/* 요일 */}
                    <div className="daily-square-string">
                        {props.weekday}
                    </div>
                </div>
                <div className="daily-square-title">
                    양념갈비 먹었다
                </div>
                <div className="daily-square-eval">
                    <div style={{
                        width: "8px",
                        height: "8px",
                        borderRadius:"50%",
                        backgroundColor: COLOR[3],
                    }} />
                    <div className="daily-square-eval-text">
                        {EVAL[3]}
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
            <div className="weekly-fillday">
                주간 필데이
            </div>
            <div className="relative-days">
                {dailySquares}
            </div>
        </div>
    )
}