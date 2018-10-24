import * as React from 'react';
import "./hourly_record_table.css";
import PageSubTitle from '../setting/PageSubTitle';
import HourlyRecordTableRow from './HourlyRecordTableRow';
import PlusButton from './PlusButton';

class HourlyRecordTable extends React.Component {
    id = 0;
    state = {
        hourlyList: [],
        rowData: null
    }
    addRow = () => {
        const { hourlyList } = this.state;
        this.setState({
            hourlyList: hourlyList.concat({ id: this.id++, ...this.state.rowData }),
            rowData: null

        })
        console.log(HourlyRecordTableRow.state)
    }

    render() {
        const { hourlyList } = this.state;
        let list;
        list = hourlyList.map(
            rowData => (<HourlyRecordTableRow key={rowData.id} info={rowData} />)
        );
        if (hourlyList.length === 0) {
            list = <HourlyRecordTableRow/>
        }
        return (
            <React.Fragment>
                <PlusButton onClicked={this.addRow} />
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
                        {list}
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default HourlyRecordTable;