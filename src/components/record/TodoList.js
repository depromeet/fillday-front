import React, { Component } from 'react';
import PlusButton from './PlusButton';
import TodoForm from './TodoForm';

class TodoList extends Component {
    defaultFormat = {
        summary: '',
        complete: false
    }
    render() {
        const {todoList, onSummaryChange, onCompleteChange, onAddLow, isEditMode} = this.props;
        let list;
        list = todoList.map((todo, index)=> (
            <TodoForm key= {index} todo={todo} 
            onSummaryChange={onSummaryChange}
            onCompleteChange={onCompleteChange}
            isEditMode={isEditMode}
            />
        ))
        if(isEditMode){
            return (
                <div>
                    <PlusButton onAddLow={()=> {
                        onAddLow(this.defaultFormat);
                    }}/>
                    {list}
                </div>
            );   
        }
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default TodoList;