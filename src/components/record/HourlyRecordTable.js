import * as React from 'react';
import "./resource/css/hourly_record_table.css";
import HourlyRecordTableRow from './HourlyRecordTableRow';
import PlusButton from './PlusButton';

class HourlyRecordTable extends React.Component {
    defaultFormat = {
        start:0,
        end:0,
        plan:'',
        retrospect: '',
        score: 'Best'
    }
    render() {
        const { onTimeLineStartChnage, onTimeLineEndChnage,
            onTimeLineScoreChnage, onTimeLineRetrospectChnage, onTimeLinePlanChnage, timeLines,addTableow, isEditMode }
            = this.props;
            
        const list = timeLines.map(
            (timeLine, index) => (
                <HourlyRecordTableRow key={index}
                    timeLine={timeLine}
                    onTimeLineStartChnage={onTimeLineStartChnage}
                    onTimeLineEndChnage={onTimeLineEndChnage}
                    onTimeLineRetrospectChnage={onTimeLineRetrospectChnage}
                    onTimeLineScoreChnage={onTimeLineScoreChnage}
                    onTimeLinePlanChnage={onTimeLinePlanChnage}
                    isEditMode={isEditMode}
                />
            )
        )
        if(isEditMode) {
            return (
                <React.Fragment>
                    <PlusButton onAddLow={() =>{
                        addTableow(this.defaultFormat)
                    }} />
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
        return (
            <React.Fragment>
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
        )
    }
}

export default HourlyRecordTable;