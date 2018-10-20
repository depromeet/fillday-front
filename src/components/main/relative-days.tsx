import * as React from 'react';
import DateUtil from '../../utils/dates';

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
        today.yesterday();
    }
    return (
        <div className="relative-days">
            {dailySquares}
        </div>
    )
}