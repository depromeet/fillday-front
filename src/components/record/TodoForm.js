import React, { Component } from 'react';
import "./checkbox.css";
import { Input } from './RecordStyle';
import { isContext } from 'vm';
import styled from 'styled-components';

const TodoFormComponent = styled.div`
    display: flex;
    padding: 10px 0;
    &:first-child {
        margin-top:10px;
    }
`
const CheckBox = ({name}) => (
    <div className="checkbox">
    <input type="checkbox" id={name} name={name} />
    <label for={name}></label>
    </div>
)

class TodoForm extends Component {
    state = {
        id: 0,
        value:'',
        done: false
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        console.log(this.props)
        return (
            <TodoFormComponent>
                <CheckBox name={this.props.data.id}/>
                <Input
                    type="text"
                    border="border"
                    name="value"
                    onChange={this.handleChange}
                    value={this.state.value}>
                </Input>
            </TodoFormComponent>
        );
    }
}

export default TodoForm;