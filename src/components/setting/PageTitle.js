import React from 'react';
import styled from 'styled-components';
import TitleCal from'../record/resource/img/title_cal.png';

const Title = styled.div`
    height: 35px;
    font-family: NanumMyeongjo;
    font-size: 36px;
    font-weight: bold;
    text-align: left;
    padding: 25px 1px;
    color: #000000;
    display: inline-block;
    margin-right: 14px;
    ${props => props.settingMode && `
    border-bottom: 1px solid #d4d4d4
    display: block;
    `}
    ${props => props.imgUrl && `
    background-image: url(${TitleCal}),
    background-repeat: no-repeat
    background-position: 33px 42px;
    `}
    ${props => props.width && `
        width:930px;
        text-align: center;
    `}    
`

const PageTitle = ({ title, settingMode, imgUrl, width }) => {
    return <Title settingMode={settingMode} imgUrl={imgUrl} width={width}>{title}</Title>
}

export default PageTitle;