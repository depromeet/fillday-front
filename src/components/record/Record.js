import * as React from 'react';
import styled from 'styled-components';
import PageTitle from '../setting/PageTitle';
import RecordPageTitle from './RecordPageTitle';
import RecordTitle from './RecordTitle';
import HourlyRecord from './HourlyRecord';
import Todo from './Todo';

const RecordComponent = styled.div`
    width: 1200px;
    margin: 0 auto;
`
const FlexComponent = styled.div`
    display: flex;
    padding-top: 30px;
    padding-bottom: 101px;
`
class Record extends React.Component {

    addSaveBtn() {
        console.log('dsaasd')
    }
    render() {
        const flex = {
            display: "flex"
        }
        return (
            <RecordComponent onChange={this.addSaveBtn}>
                <RecordPageTitle/>
                <RecordTitle/>
                <FlexComponent>
                    <HourlyRecord/>
                    <Todo/>    
                </FlexComponent>
            </RecordComponent>
        );
    }
}

export default Record;