import * as React from 'react';
import GraphicPane from './graphic-report';
import ListPane from './list-report';
import './graphic-report';

export default class ReportPage extends React.Component {
  public render() {
    return (
      <div className="report-page">
        <GraphicPane />
        <ListPane />
      </div>
    );
  }
}