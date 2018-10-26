import * as React from 'react';
import { IDateProps } from './interfaces';

export default class CalanderGraph extends React.Component<IDateProps, any> {
    public render() {
        return (
            <div className="report-box-shadow calendar-data">
                <div className="report-subtitle">
                    채운 날
                </div>
            </div>
        );
    }
}