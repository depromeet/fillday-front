import React from 'react';
import styled from 'styled-components';

const Button = styled.button` 
    width: 140px;
    height: 38px;
    border-radius: 4px;
    border: solid 1px #e7e8e7;
    background-color: #ffffff;
    color: #232323;
    ${props => props.edit && `
        background-color: #262626;
        color: #ffffff;
        border: none;
    `}
    float: right;
    right: 0;
    top: 0;
    position: absolute;
`;

const SettingButton = ({ clickEvent, edit, btnName, className, ...rest}) => {
    return (
        <Button onClick={clickEvent} edit={edit} className={className} {...rest}>{btnName}</Button>
    );
};

export default SettingButton;