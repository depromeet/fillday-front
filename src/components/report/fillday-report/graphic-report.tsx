// Recharts 사용하기
import * as React from 'react';
import TopGraph from './TopGraph';
import BottomGraph from './BottomGraph';
import { IDateProps } from './interfaces';

class GraphicMainTitle extends React.Component {
  public render() {
    return (
      <div 
      className="graphic-main-title">
        {/* 메인 제목 */}
        <div
        className="report-title">
          필데이 리포트
        </div>
        <div
        className="report-detailed-title">
          {/* 기간 */}
          2018.10.08 - 2018.10.15
        </div>
      </div>
    );
  }
}

interface IReportProps {
  date: Date;
  onDateChange: (date:Date) => void;
  reports: any;
}

export default class GraphicPane extends React.Component<IReportProps, any> {
  public render() {
    return (
        <div className="graphic-report">
          <GraphicMainTitle />
          <TopGraph
          date={this.props.date} 
          reports={this.props.reports} />
          <BottomGraph 
          date={this.props.date}
          reports={this.props.reports}
          onDateChange={this.props.onDateChange}/>
        </div>
    );
  }
}