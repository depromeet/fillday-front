import React, { Component } from 'react';
import PlusButton from './PlusButton';
import TodoForm from './TodoForm';

class TodoList extends Component {
    id = 0;
    state = {
        todoList:[{
            id:0,
            data:''
        }]
    }
    addList = () => {
        const { todoList } = this.state;
        this.setState({
            todoList: todoList.concat({ id: this.id++, ...this.state.rowData })

        })
        console.log(this.state)
    }

    render() {
        const {todoList} = this.state;
        let list = todoList.map((data)=> (
            <TodoForm key={data.id} data={data}/>
        ))
        if(todoList.length === 0) {
            list = <TodoForm/>
        }
        return (
            <div>
                <PlusButton onClicked={this.addList}/>
                {list}
            </div>
        );
    }
}

export default TodoList;