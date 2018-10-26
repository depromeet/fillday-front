import * as React from 'react';
import { IDateProps } from './interfaces';

export default class CalanderGraph extends React.Component<IDateProps, any> {
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