import * as React from 'react';
import Select from "react-select";
import styled from 'styled-components';
import { Input } from './RecordStyle';
import CustomSelect from './CustomSelect';

const options = [
    { value: 0, name: 'Best', className: 'custom-class' },
    { value: 1, name: 'Soso', className: 'custom-class' },
    { value: 2, name: 'Bad', className: 'custom-class' }
];

const timeOptions = [
    { value: 0, name: 'Best', className: 'custom-class' },
    { value: 1, name: 'Soso', className: 'custom-class' },
    { value: 2, name: 'Bad', className: 'custom-class' }
];

class HourlyRecordTableRow extends React.Component {
    render() {
        const {start, end, plan, retrospect, score, id} = this.props.timeLine;
        const { onTimeLineStartChnage, onTimeLineEndChnage,
            onTimeLineScoreChnage, onTimeLineRetrospectChnage, onTimeLinePlanChnage }
            = this.props;
        return (
            <tr>
                <td>
                <CustomSelect
                        name="immersrion"
                        value={start}
                        onChange={onTimeLineStartChnage}
                        optionList={options}
                        mini
                    />
                    ~
                    <CustomSelect
                        name="immersrion"
                        value={end}
                        onChange={this.handleChange}
                        optionList={options}
                        mini
                    />

                </td>
                <td>
                    <Input
                        type="text"
                        placeholder="계획을 입력해주세요"
                        border="border"
                        name="plan"
                        value={plan}
                        onChange={(e) => {
                            onTimeLinePlanChnage(id, e.target.value);
                        }}
                    />
                </td>
                <td>
                    <CustomSelect
                        name="immersrion"
                        value={score}
                        onChange={this.handleChange}
                        optionList={options}
                    />
                </td>
                <td>
                    <Input
                        type="text"
                        placeholder="기록을 입력해주세요"
                        border="border"
                        name="memo"
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