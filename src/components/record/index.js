import * as React from 'react';
import RecordPageHeader from './RecordPageHeader';
import RecordTable from './RecordTable';
import EditButtonGroups from './EditButtonGroups';


export default class RecordMain extends React.Component {
    state = {
        date: null,
        rows: [{
            timeId: 0,
            timeString: "ds",
            doing: "ds",
            immersion: "ds",
            memo: "ds"
        }, {
            timeId: 2,
            timeString: "ds",
            doing: "ds",
            immersion: "ds",
            memo: "ds"
        }],
        todoList: [],
        evaluation: null
    }
    render() {
        const style = {
            width: "1200px",
            margin: "auto",
            marginBottom: "150px",
        }
        const { date, rows, todoList, evaluation } = this.state;
        return (
            <div id="record_main" style={style}>
                <RecordPageHeader date={date} />
                <RecordTable
                    rows={rows}
                    todoList={todoList}
                    evaluation={evaluation} />
                <EditButtonGroups />
            </div>
        );
    }
}
