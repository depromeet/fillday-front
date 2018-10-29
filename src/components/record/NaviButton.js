import React from 'react';
import styled from "styled-components";

const Button = styled.button`
width: 30px;
height: 30px;
background: #ffffff;
border: 1px solid #969696;
border-radius: 16px;
position: relative;
top: 0;

&:hover {
    border: 1px solid #d90b3e;
}
&:focus {
    outline :none;
}
${props => props.isLeft && `
    margin-right:10px;
`}
${props => !props.isLeft && `
    margin-left:10px;
`}
&:after {
    content:'';
    border: solid #969696;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 3px;
    top: 10px;
    left: 12px;
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    text-decoration: none;
    color: #000000;
    ${props => props.isLeft && `
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    `}
}
`
const NaviButton = ({isLeft, onClick}) => {
    return (
        <Button isLeft={isLeft} onClick={onClick}>
            {/* <Icon isLeft={isLeft}></Icon> */}
        </Button>
    );
};

export default NaviButton;