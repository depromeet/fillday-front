import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    position: relative;
    width: 100px;
    height: 38px;
    border: solid 1px #d90b3e;
    background-color: #d90b3e;
    font-family: NanumBarunGothic;
    font-size: 14px;
    color: #ffffff;
    border-radius: 5px;
    margin-left: 30px;
    box-sizing: border-box;
    padding-left: 22px;
    &:before {
        content: '';
        border: solid #ffffff;
        border-width: 0 1px 1px 0;
        display: inline-block;
        padding: 3px;
        vertical-align: middle;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        top: 13px;
        left: 14px;
        position: absolute;
    }
`

const PageEditButton = ({title}) => {
    return (
        <Button>
            {title}
        </Button>
    );
};

export default PageEditButton;