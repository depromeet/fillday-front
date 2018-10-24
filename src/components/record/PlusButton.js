import * as React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    width: 40px;
    height: 40px;
    background-color: #d90b3e;
    font-size: 24px;
    color: #ffffff;
    border: none;
    position: absolute;
    top: 0;
    right: 0;
`

class PlusButton extends React.Component {
    hanleClick = (e) => {
        const targetComponent = e.currentTarget.parentNode;
        e.preventDefault();
        this.props.onClicked();
    }

    render() {
        console.log(this.props);
        return (
            <Button onClick={this.hanleClick}>+</Button>
        );
    }
}


export default PlusButton;