/*
    반년간의 잔디 상태를 보여주는 컴포넌트
    월 표시와 잔디밭의 레이아웃 담당.
*/
import * as React from 'react';
import LawnBox from './lawn-box';
import DateUtil from '../../utils/dates';


interface IMonthProps {
    daysToShow: number;
};
function TextMonth(props: IMonthProps) {
    const today = new DateUtil();
    const date = new DateUtil();
    const months = [];
    date.travelDay(-props.daysToShow);

    while (date.getMonth() !== today.getMonth()) {
        months.push((
            <div 
            key={date.getMonth()}
            className="monthly-text-month">
                {date.getMonth()}
            </div>
        ));
        date.travelMonth(1);
    }
    months.push((
        <div 
        key={date.getMonth()}
        className="monthly-text-month">
            {date.getMonth()}
        </div>
    ));
    return (
        <div className="lawn-month-list">
            {months}
        </div>
    )
}
// 잔디 표시
export default class HalfYearLawns extends React.Component {
    public render() {
        const daysToShow = 150;
        return (
            <div
            className="half-year-lawns">
                <div className="halfyear-fillday">
                    반년간의 필데이
                </div>
                <TextMonth daysToShow={daysToShow}/>
                <LawnBox daysToShow={daysToShow}/>
            </div>
        );
    }
}