import * as React from 'react';
import LineGraph from './line-graph';
import CircleGraph from './circle-graph';
import { IDateProps } from './interfaces';
// 그래프 리포트 상단

interface IReportProps {
  date: Date,
  reports: any
}
export default class TopGraph extends React.Component<IReportProps, any> {
  public render() {
    console.log(this.props.date);
    return (
      <div className="report-box-shadow weekly-graph-report">
        <LineGraph 
        date={this.props.date}
        reports={this.props.reports}
        />
        <CircleGraph 
        date={this.props.date}
        reports={this.props.reports}
        />
      </div>
    );
  }
}