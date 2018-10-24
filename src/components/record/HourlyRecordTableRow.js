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
    render() {
        return (
            <tr>
                <td>
                    <Select>00:00</Select>
                    ~
                    <Select>00:00</Select>
                </td>
                <td>
                    <Input placeholder="계획을 입력해주세요" border="border"></Input>
                </td>
                <td>
                    <Select>
                        <option immersion="0">Best</option>
                        <option immersion="1">Soso</option>
                        <option immersion="2">Bad</option>
                    </Select>

                </td>
                <td>
                    <Input placeholder="기록을 입력해주세요" border="border"></Input>
                </td>
            </tr>
        );
    }
}

export default HourlyRecordTableRow;