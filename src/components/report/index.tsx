import * as React from 'react';
import GraphicPane from './fillday-report/graphic-report';
import ListPane from './written-diary';
import './report.css';
import { Redirect } from 'react-router';

interface IReportStatus {
  date: Date;
  reports: any;
}
interface IReportProps{
  login: boolean;
}
export default class ReportPage extends React.Component<IReportProps, IReportStatus> {
  constructor(props:IReportProps) {
    super(props);
    this.onDateChange = this.onDateChange.bind(this);
    this.state = {
      date: new Date(),
      reports: undefined
    }
  }
  public onDateChange(date: Date) {
    if (this.state.date.getMonth() !== date.getMonth() &&
        this.state.date.getFullYear() !== date.getFullYear()) {
        // 한달 데이터 새로 가져오기
    }
    this.setState({date});
  }
  public componentDidMount() {
    // 한달치 정보 가져오기.
  }
  public render() {
    if (!this.props.login) {
      return (
        <Redirect to='/' />
      );
    }
    return (
      <div className="report-main">
        <GraphicPane 
        onDateChange={this.onDateChange}
        reports={this.state.reports}
        date={this.state.date}/>
        <ListPane 
        reports={this.state.reports}
        date={this.state.date}/>
      </div>
    );
  }
}