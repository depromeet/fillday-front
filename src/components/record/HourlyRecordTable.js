import * as React from 'react';
import "./resource/css/hourly_record_table.css";
import HourlyRecordTableRow from './HourlyRecordTableRow';
import PlusButton from './PlusButton';

class HourlyRecordTable extends React.Component {
    state = {
        hourlyList: [{
            from: 2,
            to: 3,
            plan: '아무것도 안하기',
            immersion: 3,
            memo: 'ㅇㅇ'
        }],
        rowData: null
    }
    addRow = () => {
        const { hourlyList } = this.state;
        this.setState({
            hourlyList: hourlyList.concat({ id: this.id++, ...this.state.rowData }),
            rowData: null

        })
    }

    render() {
        const { onTimeLineStartChnage, onTimeLineEndChnage,
            onTimeLineScoreChnage, onTimeLineRetrospectChnage, onTimeLinePlanChnage, timeLines }
            = this.props;

        console.log(this.props)
        const list = timeLines.map(
            (timeLine, index) => (
                <HourlyRecordTableRow key={index}
                    timeLine={timeLine}
                    onTimeLineStartChnage={onTimeLineStartChnage}
                    onTimeLineEndChnage={onTimeLineEndChnage}
                    onTimeLineRetrospectChnage={onTimeLineRetrospectChnage}
                    onTimeLineScoreChnage={onTimeLineScoreChnage}
                    onTimeLinePlanChnage={onTimeLinePlanChnage}
                />
            )
        )
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