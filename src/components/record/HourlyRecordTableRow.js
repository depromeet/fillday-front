import * as React from 'react';
import Select from "react-select";
import styled from 'styled-components';
import { Input } from './RecordStyle';

const options = [
    { value: 0, label: 'Best', name: 'immersion'},
    { value: 1, label: 'Soso', name: 'immersion'},
    { value: 2, label: 'Bad', name: 'immersion'}
];

class HourlyRecordTableRow extends React.Component {
    state = {
        from: null,
        to: null,
        plan: '',
        immersion: 0,
        memo: '',
        selectedOption: null,
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSelectChange = (selectedOption) => {
        console.log(selectedOption)
        this.setState({ selectedOption });
        this.setState({
            [selectedOption.name]:selectedOption.value
        })
    }
    changeEdit = (e) => {
        console.log(e)
        e.target.value = this.state[e.target.name];
    }
    render() {
        const {plan, memo} = this.props.rowData;
        return (
            <tr>
                <td>
                    <Select onChange={this.handleChange}>00:00</Select>
                    ~
                    <Select onChange={this.handleChange}>00:00</Select>
                </td>
                <td>
                    <Input
                        type="text"
                        placeholder="계획을 입력해주세요"
                        border="border"
                        name="plan"
                        value={plan}
                        onChange={this.handleChange}
                        onClick={this.changeEdit}>
                    </Input>
                </td>
                <td>
                    {/* <Select
                        onChange={this.handleChange}
                        value={immersrion}>
                        options={immersrionOptions}
                        ></Select> */}
                    <Select
                        name="selectedOption"
                        value={this.state.selectedOption}
                        onChange={this.handleSelectChange}
                        options={options}
                    />
                </td>
                <td>
                    <Input
                        type="text"
                        placeholder="기록을 입력해주세요"
                        border="border"
                        name="memo"
                        value={this.state.memo}
                        onChange={this.handleChange}>
                    </Input>
                </td>
            </tr>
        );
    }
}

export default HourlyRecordTableRow;