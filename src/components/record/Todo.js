import * as React from 'react';
import styled from 'styled-components';
import { PageSubTitle } from './RecordStyle';
import PlusButton from './PlusButton';

const TodoComponent = styled.div`
    display: inline-block;
    width: 270px;
    min-height: 354px;
    box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.06);
    background-color: #ffffff;
    margin-left: 30px;
    box-sizing: border-box;
    padding: 31px 30px 35px 30px;
    position: relative;
`

class Todo extends React.Component {
    render() {
        return (
            <TodoComponent>
                <PageSubTitle bold="bold">오늘의 할 일</PageSubTitle>
                <PlusButton/>
            </TodoComponent>
        );
    }
}

export default Todo;