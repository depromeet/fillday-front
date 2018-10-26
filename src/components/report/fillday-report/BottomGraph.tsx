// Recharts 사용하기
import * as React from 'react';
import BarGraph from './bottom-bar';
import CalanderGraph from './bottom-calendar';
import { IDateProps } from './interfaces';

export default class BottomGraph extends React.Component<IDateProps, any> {
  public render() {
    return (
      <div className="subgraph-report">
        {/* 막대 그래프 */}
        <BarGraph />
        {/* 달력 요약 */}
        <CalanderGraph 
        date={this.props.date}
        onDateChange={this.props.onDateChange}
        />
      </div>
    );
  }
}