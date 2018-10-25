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
            [selectedOption.name]: selectedOption.value
        })
    }
    changeEdit = (e) => {
        console.log(e)
        e.target.value = this.state[e.target.name];
    }
    render() {
        const { plan, memo } = this.props.rowData;
        return (
            <tr>
                <td>
                <CustomSelect
                        name="immersrion"
                        value=""
                        onChange={this.handleChange}
                        optionList={options}
                        mini
                    />
                    ~
                    <CustomSelect
                        name="immersrion"
                        value=""
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
                        value={this.state.plan}
                        onChange={this.handleChange}
                        onClick={this.changeEdit}>
                    </Input>
                </td>
                <td>
                    <CustomSelect
                        name="immersrion"
                        value=""
                        onChange={this.handleChange}
                        optionList={options}
                    />
                    {/* <Select
                        onChange={this.handleChange}
                        value={immersrion}>
                        options={immersrionOptions}
                        ></Select> */}
                
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