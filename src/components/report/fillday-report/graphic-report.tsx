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
          기간 별 필 등급을 체크합니다.
        </div>
      </div>
    );
  }
}

interface IReportProps {
  date: Date;
  onDateChange: (date:number) => void;
  reports: any;
}

export default class GraphicPane extends React.Component<IReportProps, any> {
  public render() {
    return (
        <div className="graphic-report">
          <GraphicMainTitle />
          <BottomGraph 
          date={this.props.date}
          reports={this.props.reports}
          onDateChange={this.props.onDateChange}/>
          <TopGraph
          date={this.props.date} 
          reports={this.props.reports} />
        </div>
    );
  }
}