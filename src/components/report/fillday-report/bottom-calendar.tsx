import * as React from 'react';
import { IDateProps } from './interfaces';

class FillCalendar extends React.Component<IDateProps, any> {
    public render() {
        return (
            <div>
                하 캘린더 만들어 버리기;
            </div>
        );
    }
}

export default class CalanderGraph extends React.Component<IDateProps & {reports: any}, any> {
    public render() {
        return (
            <div className="report-box-shadow calendar-data">
                <div className="report-subtitle">
                    필 캘린더
                </div>
            </div>
        );
    }
}