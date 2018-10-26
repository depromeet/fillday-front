import * as React from 'react';
import styled from 'styled-components';
import PageTitle from '../setting/PageTitle';
import RecordPageTitle from './RecordPageTitle';
import RecordTitle from './RecordTitle';
import HourlyRecord from './HourlyRecord';
import Todo from './Todo';
import { POINT_CONVERSION_COMPRESSED } from 'constants';


const RecordComponentStyle = styled.div`
    width: 1200px;
    margin: 0 auto;
`
const FlexComponent = styled.div`
    display: flex;
    padding-top: 30px;
    padding-bottom: 101px;
`
export default class RecordComponent extends React.Component {
    state = {
        title: '',
        todoList: [{
            id: 0,
            summary: '',
            complete: false
        }],
        timeLines: [{
            id: 0,
            start:0,
            end:0,
            plan:'',
            retrospect: 'dsasd',
            score: 'Best'
        }]
        
    };
    changeTitle = (title) => {
        this.setState({
            title,
        });
    }

    changeTodoSummary = (id, summary) => {
        const { todoList } = this.state;
        this.setState({
            todoList: todoList.map(
                todo => id === todo.id
                    ? { ...todo, summary } : todo
            )
        })
    }

    changeTodoComplete = (id, complete) => {
        const { todoList } = this.state;
        this.setState({
            todoList: todoList.map(
                todo => id === todo.id
                    ? { ...todo, complete }
                    : todo
            )
        })
    }

    changeTimelineTimeStart = (id, start) => {
        const { timeLines } = this.state;
        this.setState({
            timeLines: timeLines.map(
                timeline => id === timeline.id
                    ? { ...timeline, start } : timeline
            )
        })
    }
    changeTimelineTimeEnd = (id, end) => {
        const { timeLines } = this.state;
        this.setState({
            timeLines: timeLines.map(
                timeline => id === timeline.id
                    ? { ...timeline, end } : timeline
            )
        })
    }

    changeTimelineTimeScore = (id, score) => {
        const { timeLines } = this.state;
        this.setState({
            timeLines: timeLines.map(
                timeline => id === timeline.id
                    ? { ...timeline, score } : timeline
            )
        })
    }

    changeTimelineTimePlan = (id, plan) => {
        const { timeLines } = this.state;
        this.setState({
            timeLines: timeLines.map(
                timeline => id === timeline.id
                    ? { ...timeline, plan } : timeline
            )
        })
    }
    
    changeTimelineTimeRetrospect = (id, retrospect) => {
        const { timeLines } = this.state;
        this.setState({
            timeLines: timeLines.map(
                timeline => id === timeline.id
                    ? { ...timeline, retrospect } : timeline
            )
        })
    }

    addTodoList = (defaultFormat) => {
        const {todoList} = this.state;
        let id = todoList[todoList.length - 1].id;
        this.setState({
            todoList: todoList.concat({ id: id + 1, ...defaultFormat})
        })
    }

    addTableow = (defaultFormat) => {
        const {todoList} = this.state;
        let id = todoList[todoList.length - 1].id;
        this.setState({
            todoList: todoList.concat({ id: id + 1, ...defaultFormat})
        })
    }


    render() {
        const flex = {
            display: "flex"
        }
        return (
            <RecordComponentStyle onChange={this.addSaveBtn}>
                <RecordPageTitle />
                <RecordTitle
                    onChange={this.changeTitle}
                    title={this.state.title} />
                <FlexComponent>
                    <HourlyRecord 
                        onTimeLineStartChnage={this.changeTimelineTimeStart}
                        onTimeLineEndChnage={this.changeTimelineTimeEnd}
                        onTimeLineScoreChnage={this.changeTimelineTimeScore}
                        onTimeLineRetrospectChnage={this.changeTimelineTimeRetrospect}
                        onTimeLinePlanChnage={this.changeTimelineTimePlan}
                        timeLines={this.state.timeLines}
                    />
                    <Todo
                        onSummaryChange={this.changeTodoSummary}
                        onCompleteChange={this.changeTodoComplete}
                        onAddLow={this.addTodoList}
                        todoList={this.state.todoList} 
                    />
                </FlexComponent>
            </RecordComponentStyle>
        );
    }
}