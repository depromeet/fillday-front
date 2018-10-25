import React, { Component } from 'react';
import PlusButton from './PlusButton';
import TodoForm from './TodoForm';

class TodoList extends Component {
    id = 0;
    state = {
        todoList:[]
    }
    defaultProps = {
        id: 0,
        value:'',
        done: false
    }
    addList = () => {
        const { todoList } = this.state;
        this.setState({
            todoList: todoList.concat({ id: this.id++, ...this.state })

        })
    }

    render() {
        const {todoList} = this.state;
        let list;
        if(todoList.length === 0) {
            this.setState({
                todoList: todoList.concat({ id: this.id++, ...this.defaultProps })
            })
        }
        list = todoList.map((data)=> (
            <TodoForm key={data.id} data={data}/>
        ))
        return (
            <div>
                <PlusButton onClicked={this.addList}/>
                {list}
            </div>
        );
    }
}

export default TodoList;