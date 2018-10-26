import * as React from 'react';
import GraphicPane from './fillday-report/graphic-report';
import ListPane from './written-diary';
import './report.css';

interface IReportStatus {
  date: Date;
}
export default class ReportPage extends React.Component<any, IReportStatus> {
  constructor(props:any) {
    super(props);
    this.onDateChange = this.onDateChange.bind(this);
    this.state = {
      date: new Date(),
    }
  }
  public onDateChange(date: Date) {
    this.setState({date});
  }
  public render() {
    return (
      <div className="report-main">
        <GraphicPane 
        onDateChange={this.onDateChange}
        date={this.state.date}/>
        <ListPane 
        date={this.state.date}/>
      </div>
    );
  }
}