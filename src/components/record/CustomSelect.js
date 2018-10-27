import * as React from 'react';
import "./resource/css/custom-select.css"
import styled from 'styled-components';

const CustomOption = ({ value, name, onChanged, id }) => {
    const handleClick = (e) => {
        const value1 = e.currentTarget.getAttribute('value');
        e.target.parentNode.parentNode.classList.toggle('active');
        onChanged(id, e.target.getAttribute('value'));
    }
    return (
        <div value={value} className="option" onClick={handleClick}>{name}</div>
    );
};


class CustomSelect extends React.Component {

    active(e) {
        const isActive = e.target.parentNode.classList.toggle('active');
    }
    render() {
        const { optionList, mini, onChange, id, selectName} = this.props;

        const list = optionList.map(
            (option) => <CustomOption
                onChanged={onChange}
                id={id}
                key={option.value}
                value={option.value}
                name={option.name} />)

        let containerClassName = "select-container";
        if (mini) {
            containerClassName = containerClassName.concat(' ', "mini");
        }
        return (
            <div className={containerClassName}>
                <div
                    onClick={this.active}
                    className="record-costom-select"
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