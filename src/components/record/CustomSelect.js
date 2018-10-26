import * as React from 'react';
import "./resource/css/custom-select.css"
import styled from 'styled-components';

const CustomOption = ({ value, name, onChanged }) => {
    const handleClick = (e) =>{
        const value1 = e.currentTarget.getAttribute('value');
        const name1 = e.currentTarget.innerText;
        e.currentTarget.parentNode.parentNode.classList.toggle('active');
        onChanged({
            name: name1,
            value: value1
        })
    }
    return (
        <div value={value} className="option" onClick={handleClick}>{name}</div>
    );
};


class CustomSelect extends React.Component {
    state = {
        optionList: [],
        value:null,
        name: '',
    }
    handleChanged = (data) => {
        this.setState({
            value : data.value,
            name: data.name
        })
    }
    active(e) {
        const isActive = e.currentTarget.parentNode.classList.toggle('active');
    }
    render() {
        const { optionList, mini } = this.props;
        const list = optionList.map(
            (option) => <CustomOption
                onChanged={this.handleChanged}
                key={option.value}
                value={option.value}
                name={option.name} />)
                
        let containerClassName = "select-container";
        if(mini) {
            containerClassName = containerClassName.concat(' ', "mini");
        }

        let { name , value } = this.state;
        if(!(name.length > 0) || !value) {
           name = optionList[0].name; 
           value = optionList[0].value; 
        }

        return (
            <div className={containerClassName}>
                <div
                    onClick={this.active}
                    className="record-costom-select"
                    value={value}>
                    {name}
                </div>
                <div className="record-option-list">
                    {list}
                </div>
            </div>
        );
    }
}

export default CustomSelect;