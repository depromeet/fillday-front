import * as React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import PageTitle from '../setting/PageTitle';
import RecordPageTitle from './RecordPageTitle';
import RecordTitle from './RecordTitle';
import HourlyRecord from './HourlyRecord';
import Todo from './Todo';
import { POINT_CONVERSION_COMPRESSED } from 'constants';
import { SetDateFormatting } from './Util';
import { Redirect } from 'react-router';


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
    defaultProps = {
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
            retrospect: '',
            score: ''
        }]
    };
    state = {
        title: '',
        isEditMode: false,
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
            retrospect: '',
            score: 'Best'
        }]
    };
    componentDidMount = () => {
        const userID = 'userId';
        // this.getRequest();
        let selectedDate = null;
        console.log(this.props);
        if (this.props.match && this.props.match.params) {
            selectedDate = this.props.match.params.selectedDate;
        }
        if (!selectedDate) {
            selectedDate = SetDateFormatting(new Date());
        }
        const localData =JSON.parse(localStorage.getItem(selectedDate)); 
        if (selectedDate === SetDateFormatting(new Date())){
            // 
        }
        if(localData) {
            this.setState({
                title : localData.title,
                today : localData.today,
                todoList : localData.todoList,
                timeLines : localData.timeLines,
            })

        } else {
            this.setState({
                today : selectedDate
            })
        }
        // const that = this; 
        // axios.get(`http://fillday.manjong.org/v1/todos/${userID}`)
        // .then((response) => {
        //     this.state = response.data
        // })
    }
    getRequest = (date) => {
        date = date? date : SetDateFormatting(new Date())
        const localData =JSON.parse(localStorage.getItem(date)); 
        if(localData) {
            this.setState({
                title : localData.title,
                today : localData.today,
                todoList : localData.todoList,
                timeLines : localData.timeLines,
            })
        } else {
            this.setState({
                today : date,
                ...this.defaultProps
            })
        }
    }
    isToday = (date) => {
        const today = new Date();
        return today.getFullYear() === date.getFullYear()
        && today.getDate() === date.getDate()
        && today.getMonth() === date.getMonth();
    }

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

    changeMode = () => {
        const {isEditMode} = this.state;
        this.setState({
            isEditMode: !isEditMode
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
        const {timeLines} = this.state;
        let id = timeLines[timeLines.length - 1].id;
        this.setState({
            timeLines: timeLines.concat({ id: id + 1, ...defaultFormat})
        })
    }

    save = () => {
        const {isEditMode} = this.state;
        this.setState({
            today: SetDateFormatting(new Date()),
             isEditMode: !isEditMode
        })
        
        let saveData = Object.assign({}, this.state);
        delete saveData.isEditMode 
        localStorage.setItem(SetDateFormatting(new Date()),JSON.stringify(saveData));
        //local storage or session get userID
        saveData.uid = "123";
        axios.post('http://fillday.manjong.org/v1/todos', {
            saveData
        })
        .then((responce) => {
            console.log(responce);
            //TODO : response 200 -> go to recordList 
        })
        .catch((error) => {
            console.error(error);
        })
    }


    render() {
        const flex = {
            display: "flex"
        }
        let {today} = this.state;
        today = today? today : SetDateFormatting(new Date());
        const isToday = this.isToday(new Date(today));
        // const isToday = false;
        console.log(this.state);
        console.log(this.props);
    
        return (
            <RecordComponentStyle onChange={this.addSaveBtn}>
                <RecordPageTitle
                 date={today}
                 isToday={isToday}
                 isEditMode={this.state.isEditMode}
                 getRequest={this.getRequest}
                />
                <RecordTitle
                    onChange={this.changeTitle}
                    changeMode={this.changeMode}
                    onSave={this.save}
                    title={this.state.title}
                    isEditMode={this.state.isEditMode}
                    isToday={isToday}
                />
                <FlexComponent>
                    <HourlyRecord 
                        onTimeLineStartChnage={this.changeTimelineTimeStart}
                        onTimeLineEndChnage={this.changeTimelineTimeEnd}
                        onTimeLineScoreChnage={this.changeTimelineTimeScore}
                        onTimeLineRetrospectChnage={this.changeTimelineTimeRetrospect}
                        onTimeLinePlanChnage={this.changeTimelineTimePlan}
                        timeLines={this.state.timeLines}
                        addTableow={this.addTableow}
                        isEditMode={this.state.isEditMode}
                        isToday={isToday}
                    />
                    <Todo
                        onSummaryChange={this.changeTodoSummary}
                        onCompleteChange={this.changeTodoComplete}
                        onAddLow={this.addTodoList}
                        todoList={this.state.todoList}
                        isEditMode={this.state.isEditMode}
                        isToday={isToday} 
                    />
                </FlexComponent>
            </RecordComponentStyle>
        );
    }
}