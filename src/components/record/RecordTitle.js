import * as React from 'react';
import styled from 'styled-components';
import { Input } from './RecordStyle';
import TitleIcon from './resource/img/vector-smart-object.png';
import PageEditButton from './PageEditButton';

const RecordTitleComponet = styled.div`
    display: flex;
    width: 1200px;
    margin-top: 59px;
    box-shadow: 0px 4px 8px 0 rgba(0, 0, 0, 0.06);
    background-image: url(${TitleIcon});
    background-repeat: no-repeat
    background-position: 33px 42px;
    background-color: #ffffff;
    padding: 32px 20px 32px 56px;
    box-sizing: border-box;
`

class RecordTitle extends React.Component {
    render() {
        const title = this.props.title;
        const {onChange, onSave} = this.props;
        return (
            <RecordTitleComponet>
                <Input placeholder="오늘의 제목을 입력해주세요" 
                    onChange={(e) => {
                        onChange(e.target.value)
                    }} 
                    value={title}
                    fontSize="16px"
                    color="#262626"/>
                <PageEditButton 
                title="저장하기" 
                onClick={()=> {
                    onSave()
                }}/>
            </RecordTitleComponet>
        );
    }
}

export default RecordTitle;