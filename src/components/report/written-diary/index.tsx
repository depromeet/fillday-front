// react-tooltip 사용하기
import * as React from 'react';
import { IDateProps } from '../fillday-report/interfaces';

function ListMainTitle(props?: any) {
  return (
    <div className="list-main-title">
      <div className="report-title">
        채워진 기록들
      </div>
      <div className="report-detailed-title">
        5일
      </div>
    </div>
  );
}

export default class ListPane extends React.Component<IDateProps, any> {
  public render() {
    return (
      <div className="list-report">
        <ListMainTitle />
      </div>
    );
  }
}