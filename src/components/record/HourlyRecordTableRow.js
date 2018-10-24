import React, { Component } from 'react';
import styled from 'styled-components';
import { Input } from './RecordStyle';

const Select = styled.select`
    width: 80px;
    height: 28px;
    border-radius: 2px;
    border: solid 1px #e4e0e0;
    background-color: #ffffff;
`

class HourlyRecordTableRow extends Component {
    state = {
        rowData : {
            from: null,
            to: null,
            plan: '',
            immersion: 0,
            memo: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
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
                        value={this.state.plan}
                        onChange={this.handleChange}>
                    </Input>
                </td>
                <td>
                    <Select onChange={this.handleChange}>
                        <option value="0">Best</option>
                        <option value="1">Soso</option>
                        <option value="2">Bad</option>
                    </Select>

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