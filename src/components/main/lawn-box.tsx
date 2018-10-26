/*
    잔디 뿌려주는 컴포넌트
*/
import * as React from 'react';
import DateUtil from '../../utils/dates';
import * as ReactTooltip from 'react-tooltip';
import { COLOR } from '../..//utils/color';

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
                    backgroundColor: COLOR[this.props.level],
                }}
                /> 
                <ReactTooltip 
                border={true}
                type='light'
                effect='solid'
                id={`lawn-${this.props.date.toString()}`}
                className="tooltip-box"
                >
                    <div className="tooltip-time">
                        {this.props.date.toString()}
                    </div>
                    <li>
                        평균 집중도: {this.props.level}
                    </li>
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
                level={Math.floor(Math.random() * 4)}
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