import * as React from 'react';
import "./hourly_record_table.css";
import PageSubTitle from '../setting/PageSubTitle';
import HourlyRecordTableRow from './HourlyRecordTableRow';
import PlusButton from './PlusButton';

class HourlyRecordTable extends React.Component {
    addRow(e) {
        console.log(e)
    }
    render() {
        return (
            <React.Fragment>
                <PlusButton onClicked = {this.addRow}/>
                <table className="hourly-reocrd-table">
                    <thead>
                        <tr>
                            <th>시간</th>
                            <th>계획</th>
                            <th>몰입도</th>
                            <th>기록</th>
                        </tr>
                    </thead>
                    <tbody>
                        <HourlyRecordTableRow/>
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default HourlyRecordTable;