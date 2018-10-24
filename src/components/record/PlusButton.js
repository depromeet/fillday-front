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
        console.log(this);
        e.preventDefault();
        // 상태값을 onCreate 를 통하여 부모에게 전달
        this.props.onClicked(this.state);
        //add table td
    }

    render() {
        console.log(this.props);
        return (
            <Button onClick={this.hanleClick}>+</Button>
        );
    }
}


export default PlusButton;