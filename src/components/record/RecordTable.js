import * as React from 'react';
import RecordTableBody from './RecordTableBody';
import "./table.css";

export default class RecordTable extends React.Component {
    render() {
        const style = {
            width: "1200px",
            borderSpacing: 0,
            borderCollapse: "collapse"
    
        }
        const {rows, todoList, evaluation } = this.props;
        return (
            <table id="record_table" style={style}>
                <thead>
                    <tr>
                        <th>시간</th>
                        <th>계획</th>
                        <th>몰입도</th>
                        <th>기록</th>
                        <th>할일</th>
                    </tr>
                </thead>
                <RecordTableBody rows={rows}/>
            </table>
        );
    }
}
