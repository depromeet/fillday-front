import * as React from 'react';
import LineGraph from './line-graph';
import CircleGraph from './circle-graph';
import { IDateProps } from './interfaces';
// 그래프 리포트 상단

export default class TopGraph extends React.Component<IDateProps, any> {
  public render() {
    console.log(this.props.date);
    return (
      <div className="report-box-shadow weekly-graph-report">
        <LineGraph />
        <CircleGraph />
      </div>
    );
  }
}