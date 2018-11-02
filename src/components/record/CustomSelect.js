import * as React from 'react';
import "./resource/css/custom-select.css"
import styled from 'styled-components';

const CustomOption = ({ value, name, onChanged, id, index }) => {
    const handleClick = (e) => {
        const value1 = e.currentTarget.getAttribute('value');
        e.target.parentNode.parentNode.classList.toggle('active');
        onChanged(id, e.target.getAttribute('value'));
    }
    const className = "option".concat(' ',`color-${index}`);
    return (
        <div value={value} 
        className={className}
        onClick={handleClick}>{name}</div>
    );
};


class CustomSelect extends React.Component {

    active(e) {
        const isActive = e.target.parentNode.classList.toggle('active');
    }
    render() {
        const { optionList, mini, onChange, id, selectName} = this.props;

        const list = optionList.map(
            (option,index) => <CustomOption
                onChanged={onChange}
                id={id}
                key={index}
                index={index}
                value={option.value}
                name={option.name} />)

        let containerClassName = "select-container";
        if (mini) {
            containerClassName = containerClassName.concat(' ', "mini");
        }
        let colorIndex = 0;
        optionList.find((item, i) => {
            if(item.value === selectName) {
                colorIndex = i;
            }
        });
        const selectNameClassName = "record-costom-select".concat(' ', `color-${colorIndex}`); 
        return (
            <div className={containerClassName}>
                <div
                    onClick={this.active}
                    className={selectNameClassName}
                    value={selectName}
                    >
                    {selectName}
                </div>
                <div className="record-option-list">
                    {list}
                </div>
            </div>
        );
    }
}

export default CustomSelect;