import * as React from 'react';
import styled from 'styled-components';
import { Input } from './RecordStyle';
import TitleIcon from './resource/vector-smart-object.png';
import PageEditButton from './PageEditButton';

const RecordTitleComponet = styled.div`
    display: flex;
    width: 1200px;
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
        return (
            <RecordTitleComponet>
                <Input placeholder="오늘의 제목을 입력해주세요"></Input>
                <PageEditButton title="저장하기"></PageEditButton>
            </RecordTitleComponet>
        );
    }
}

export default RecordTitle;