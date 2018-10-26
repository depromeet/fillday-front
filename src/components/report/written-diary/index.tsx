// react-tooltip 사용하기
import * as React from 'react';
import { IDateProps } from '../fillday-report/interfaces';
import FilldayList from './filday-list';

function ListMainTitle(props?: any) {
  return (
    <div className="list-main-title">
      <div className="report-title">
        채워진 기록들
      </div>
      <div className="report-detailed-title">
        지난 기록이 여기에 모여 있습니다.
      </div>
    </div>
  );
}

export default class ListPane extends React.Component<IDateProps, any> {
  public render() {
    return (
      <div className="list-report">
        <ListMainTitle />
        <FilldayList />
      </div>
    );
  }
}