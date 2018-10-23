import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    height: 35px;
    font-family: NanumMyeongjo;
    font-size: 36px;
    font-weight: bold;
    text-align: left;
    padding: 25px 1px;
    color: #000000;
    display: inline-block;
    ${props => props.settingMode && `
    border-bottom: 1px solid #d4d4d4
    display: block;
    `}
`
const PageTitle = ({ title, settingMode }) => (
    <Title settingMode={settingMode}>{title}</Title>
);

export default PageTitle;