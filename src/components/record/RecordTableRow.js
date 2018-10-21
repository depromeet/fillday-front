import * as React from 'react';

const timeTable = {
    "0": "00:00~01:00",
    "1": "01:00~02:00",
    "2": "02:00~03:00",
    "3": "03:00~4:00",
    "4": "04:00~5:00",
    "5": "00:00~01:00",
    "6": "00:00~01:00",
    "7": "00:00~01:00",
    "8": "00:00~01:00",
    "9": "00:00~01:00",
    "10": "00:00~01:00",
    "11": "00:00~01:00",
    "12": "00:00~01:00",
}

class RecordTableRow extends React.Component {
    render() {
        const { timeId, timeString, doing, immersion, memo } = this.props.rowData;
        return (
            <tr>
                <td>{timeString}</td>
                <td><input type="text" defaultValue={doing}></input></td>
                <td className="select-immersion">
                    <select className="">
                        <option>Best</option>
                        <option>Soso</option>
                        <option>Bad</option>
                    </select>
                </td>
                <td><input type="text" defaultValue={memo}></input></td>
            </tr>
        );
    }
}

export default RecordTableRow;