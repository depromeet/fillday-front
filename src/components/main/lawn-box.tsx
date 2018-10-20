/*
    잔디 뿌려주는 컴포넌트
*/
import * as React from 'react';
import DateUtil from '../../utils/dates';
import * as ReactTooltip from 'react-tooltip';

interface IDailyLawnProps {
    date: DateUtil;
    level: number;
}
class DailyLawn extends React.Component<IDailyLawnProps, any> {
    constructor(props: IDailyLawnProps) {
        super(props);
    }
    public render() {
        return (
            <React.Fragment>
                <div 
                data-tip={true}
                data-for={`lawn-${this.props.date.toString()}`}
                className="monthly-box-daily-lawn"
                style={{
                    opacity: 0.20 * this.props.level
                }}
                /> 
                <ReactTooltip 
                type='light'
                effect='solid'
                id={`lawn-${this.props.date.toString()}`}
                >
                    <div className="lawn-tooltip-date">
                        {this.props.date.toString()}
                    </div>
                    <div className="lawn-tooltip-summary">
                        <li>
                            평균 집중도: {this.props.level}
                        </li>
                    </div>
                </ReactTooltip>
            </React.Fragment>
        );
    }
}

// 잔디 표시
interface ILawnBoxProps {
    daysToShow: number;
}

export default class LawnBox extends React.Component<ILawnBoxProps, any> {
    public render() {
        const lawnList = [];
        const propsDate = new DateUtil();
        const today = new DateUtil();
        propsDate.travelDay(-this.props.daysToShow);
        propsDate.travelDay(-propsDate.getDay() + 1);
        while (propsDate){
            lawnList.push((
                <DailyLawn 
                key={`${propsDate.getMonth()}-${propsDate.getDay()}-lawn`}
                date={new DateUtil(propsDate)}
                level={Math.floor(Math.random() * 5) + 1}
                />
            ))
            if (propsDate.toString() === today.toString()) {
                break;
            }
            propsDate.travelDay(1);
        }
        return (
            <div
            className="lawn-box">
                {lawnList}
            </div>
        );
    }
}