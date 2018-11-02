import * as React from 'react';
import { IDateProps } from './interfaces';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { COLOR } from '../../../utils/color';

interface IFillCalState {
    date: Date;
}
class FillCalendar extends React.Component<IDateProps & {reports: any}, any> {
    private modifiersStyles = {
        level0: {
        },
        level1: {
            backgroundColor: COLOR[1],
            color: "#262626"
        },
        level2: {
            backgroundColor: COLOR[2],
            color: "#ffffff"
        },
        level3: {
            backgroundColor: COLOR[3],
            color: "#ffffff"
        },
        today: {
            fontWeight: "bold",
            color: '#000000'
        }
    }
    private modifiers = {
        level0: (day:Date) => this.whatLevel(0, day),
        level1: (day:Date) => this.whatLevel(1, day),
        level2: (day:Date) => this.whatLevel(2, day),
        level3: (day:Date) => this.whatLevel(3, day),
        today: this.props.date
    }
    constructor(props:IDateProps & {reports:any}) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.state = {
            date: props.date
        };
    }
    public whatLevel(lev: number, day: Date) {
        const levels = {
            level0: [1,4,2,10,11],
            level1: [7,8,12,16,24],
            level2: [3,6, 21, 22, 23, 29],
            level3: [5, 9, 13, 14, 15],
        }
        return day.getMonth() === this.state.date.getMonth() 
                && levels[`level${lev}`].includes(day.getDate());
    }
    public handleDayClick(day: Date, mod: DayModifiers, e: React.MouseEvent<HTMLDivElement>) {
        this.props.onDateChange(this.props.date.setDate(day.getDate()));
        this.modifiers.today = day;
        this.setState({date: day});
    }
    public handleMonthChange(day: Date) {
        // 
        this.setState({date: day});
    }
    public render() {
        return (
            <div className="fillday-calendar">
                <DayPicker
                modifiers={this.modifiers}
                modifiersStyles={this.modifiersStyles}
                onDayClick={this.handleDayClick}
                onMonthChange={this.handleMonthChange}
                />
            </div>
        );
    }
}

export default class CalanderGraph extends React.Component<IDateProps & {reports: any}, any> {
    public render() {
        return (
            <div className="report-box-shadow calendar-data">
                <div className="report-subtitle">
                    월간<br/>
                    필캘린더
                </div>
                <FillCalendar 
                date={this.props.date}
                reports={this.props.reports}
                onDateChange={this.props.onDateChange}
                />
            </div>
        );
    }
}