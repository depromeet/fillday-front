import React, { Component } from 'react';
import PlusButton from './PlusButton';
import TodoForm from './TodoForm';

class TodoList extends Component {
    defaultFormat = {
        summary: '',
        complete: false
    }
    render() {
        const {todoList, onSummaryChange, onCompleteChange, onAddLow} = this.props;
        let list;
        list = todoList.map((todo, index)=> (
            <TodoForm key= {index} todo={todo} 
            onSummaryChange={onSummaryChange}
            onCompleteChange={onCompleteChange}
            />
        ))
        return (
            <div>
                <PlusButton onAddLow={()=> {
                    onAddLow(this.defaultFormat);
                }}/>
                {list}
            </div>
        );
    }
}

export default TodoList;