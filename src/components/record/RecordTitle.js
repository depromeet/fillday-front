import * as React from 'react';
import styled from 'styled-components';
import { Input } from './RecordStyle';
import TitleIcon from './resource/img/cal.png';
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
    color: #262626;
    font-family: NanumBarunGothic;
    font-size: 16px;

`

class RecordTitle extends React.Component {
    render() {
        const {title, isToday, isEditMode, changeMode} = this.props;
        const {onChange, onSave} = this.props;
        if(isToday && isEditMode) {
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
            )
        }
        const style= {
            title: {
                padding: "8px 0",
                width: "100%"  
            }
        }
        if(isToday && !isEditMode) {
            return (
                <RecordTitleComponet>
                    <div style={style.title}>
                        {title}
                    </div>
                    <PageEditButton 
                    title="수정하기" 
                    onClick={()=> {
                        changeMode()
                    }}/>
                </RecordTitleComponet>
            )
        }
        return (
            <RecordTitleComponet>
                <div style={style.title}>
                    {title}
                </div>
            </RecordTitleComponet>
        )
    }
}

export default RecordTitle;