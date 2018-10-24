import * as React from 'react';
import styled from 'styled-components';
import HourlyRecordTable from './HourlyRecordTable';
import { PageSubTitle } from './RecordStyle';
import PlusButton from './PlusButton';
import { timingSafeEqual } from 'crypto';

const HourlyRecordComponent = styled.div`
    display: inline-block;
    width: 900px;
    min-height: 354px;
    box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.06);
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 31px 30px 35px 30px;
    position: relative;
`

class HourlyRecord extends React.Component {
    bindClickEvent() {
        console.log("dsaasdasd")
    }
    render() {
        return (
            <HourlyRecordComponent>
                <PageSubTitle bold="bold">오늘의 기록</PageSubTitle>
                <PlusButton onClicked = {this.bindClickEvent}/>
                <HourlyRecordTable/>
            </HourlyRecordComponent>
        );
    }
}

export default HourlyRecord;