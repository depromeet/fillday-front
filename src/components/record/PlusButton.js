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
    &:focus {
        outline :none;
    }
`

class PlusButton extends React.Component {
    handleClick = (e) => {
        const targetComponent = e.currentTarget.parentNode;
        e.preventDefault();
        this.props.onClicked();
    }

    render() {
        const {onAddLow} = this.props;
         return (
            <Button onClick={(e) => {
                onAddLow();  
            } }>+</Button>
        );
    }
}


export default PlusButton;