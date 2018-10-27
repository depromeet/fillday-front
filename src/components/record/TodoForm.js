import React, { Component } from 'react';
import "./resource/css/checkbox.css";
import { Input } from './RecordStyle';
import styled from 'styled-components';

const TodoFormComponent = styled.div`
    display: flex;
    padding: 10px 0;
`
const CheckBox = ({name, complete, id, onChange}) => (
    <div className="checkbox">
        <input
            type="checkbox" 
            id={id}
            name={name} 
            defaultChecked={complete}
            onChange={onChange}/>
        <label htmlFor={id}></label>
    </div>
)

class TodoForm extends Component {
    render() {
        const{id, complete, summary} = this.props.todo;
        const {onSummaryChange, onCompleteChange } = this.props;
        return (
            <TodoFormComponent>
                <CheckBox 
                    name="complete"
                    id={id}
                    complete={complete}
                    onChange={(e) => {
                        onCompleteChange(id, e.target.checked)
                    }}
                   />
                <Input
                    border="border"
                    name="summary"
                    onChange={(e)=> {                     
                        onSummaryChange(id, e.target.value)}}
                    value={summary}/>
            </TodoFormComponent>
        );
    }
}

export default TodoForm;