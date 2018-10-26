import * as React from 'react';
import GraphicPane from './fillday-report/graphic-report';
import ListPane from './written-diary';
import './report.css';
import { Redirect } from 'react-router';

interface IReportStatus {
  date: Date;
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
    }
  }
  public onDateChange(date: Date) {
    this.setState({date});
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
        date={this.state.date}/>
        <ListPane 
        date={this.state.date}/>
      </div>
    );
  }
}