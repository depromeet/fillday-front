import * as React from 'react';
import Select from "react-select";
import styled from 'styled-components';
import { Input, TextArea } from './RecordStyle';
import CustomSelect from './CustomSelect';

function timeFormatting(hour) {
    const endHour = hour + 1;
    const startHourString = hour.toString();
    const str1 = startHourString.length >= 2 ? startHourString : `0${startHourString}`;
    return `${str1}:00`;
}

const getTimeoptions = () => {
    const options = [];
    for (let i = 0; i < 23; i++) {
        options.push({
            value: i,
            name: timeFormatting(i)
        })
    }
    return options;
}

const optionScores = [
    { value: 'Best', name: 'Best', className: 'custom-class' },
    { value: 'Soso', name: 'Soso', className: 'custom-class' },
    { value: 'Bad', name: 'Bad', className: 'custom-class' }
];

const timeOptions = getTimeoptions();

class HourlyRecordTableRow extends React.Component {
    pressEnter = (e) => {
        e.target.clientHeight = "1px";
    }
    render() {
        const { start, end, plan, retrospect, score, id } = this.props.timeLine;
        const { onTimeLineStartChnage, onTimeLineEndChnage,
            onTimeLineScoreChnage, onTimeLineRetrospectChnage, onTimeLinePlanChnage, isEditMode }
            = this.props;
        if (!isEditMode) {
            return (
                <tr>
                    <td>
                        {timeFormatting(start)} ~ {timeFormatting(end)}
                    </td>
                    <td>
                        {plan}
                    </td>
                    <td>
                        {score}
                    </td>
                    <td>
                        {retrospect}
                    </td>
                </tr>
            )
        }
        return (
            <tr>
                <td>
                    <CustomSelect
                        selectName={timeFormatting(start)}
                        id={id}
                        onChange={onTimeLineStartChnage}
                        optionList={timeOptions}
                        mini
                    />
                    ~
                    <CustomSelect
                        id={id}
                        selectName={timeFormatting(end)}
                        onChange={onTimeLineEndChnage}
                        optionList={timeOptions}
                        mini
                    />

                </td>
                <td>
                    <Input
                        type="text"
                        placeholder="계획을 입력해주세요"
                        border="border"
                        value={plan}
                        onChange={(e) => {
                            onTimeLinePlanChnage(id, e.target.value);
                        }}
                    />
                </td>
                <td>
                    <CustomSelect
                        id={id}
                        selectName={score}
                        onChange={onTimeLineScoreChnage}
                        optionList={optionScores}
                    />
                </td>
                <td>
                    <Input
                        type="text"
                        placeholder="기록을 입력해주세요"
                        border="border"
                        value={retrospect}
                        onChange={(e) => {
                            onTimeLineRetrospectChnage(id, e.target.value);
                        }}
                    />
                </td>
            </tr>
        );
    }
}

export default HourlyRecordTableRow;