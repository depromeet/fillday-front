import * as React from 'react';
import RecordTableRow from './RecordTableRow';

function timeFormatting(startHour) {
    const endHour = startHour + 1;
    const startHourString = startHour.toString();
    const endHourString = endHour.toString();
    const str1 = startHourString.length >= 2 ? startHourString : `0${startHourString}`;
    const str2 = endHourString.length >= 2 ? endHourString : `0${endHourString}`;

    return `${str1}:00~${str2}:00`;
}

export default class RecordTableBody extends React.Component {
    constructor() {
        super();
        this.state = null
    }
    static defaultProps = {
        defaultDataForamt: {
            timeId: 0,
            timeString: "",
            doing: "",
            immersion: "",
            memo: ""
        }
    }
    componentDidMount() {
        const tbody = document.getElementsByTagName("tbody")[0];
        
        const targetTr = tbody.getElementsByTagName("tr")[0];
        const todoTd = document.createElement("td");
        const todo = document.createElement("div");
        todoTd.setAttribute("rowspan", "24");
        todoTd.appendChild(todo);
        targetTr.appendChild(todoTd);

        const evalationTr = document.createElement("tr");
        const evalationTitleTd = document.createElement("td");
        evalationTitleTd.innerText = "하루 평가";

        const evalationTitleTextAreaTd = document.createElement("td");
        evalationTitleTextAreaTd.setAttribute("colspan","4");
        
        const evalationTitleTextArea = document.createElement("textArea");
        evalationTitleTextAreaTd.appendChild(evalationTitleTextArea);
        evalationTr.appendChild(evalationTitleTd);
        evalationTr.appendChild(evalationTitleTextAreaTd);
        tbody.appendChild(evalationTr);
        
    }
    handleCreate = (data) => {
        const { rows } = this.state;
        this.setState({
            rows: rows.concat(data)
        })
    }
    render() {
        const data = this.props.rows;
        const temp = [];
        for (let i = 0; i < 24; i++) {
            let obj;
            if(data[i] && data[i].timeId === i) {
                obj = Object.assign({}, data[i]);
            } else {
                obj = Object.assign({}, this.props.defaultDataForamt);
                obj.timeId = i;
            }
            obj.timeString = timeFormatting(i);
            temp.push(obj)
        }
        
        const rowss = temp.map(
            rowData => (<RecordTableRow key={rowData.timeId} rowData={rowData} />)
        )
        return (
            <tbody>
                {rowss}
            </tbody>
        );
    }
}
