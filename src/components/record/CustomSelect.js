import * as React from 'react';

import React from 'react';

const Option = () => {
    return (
        <div>

        </div>
    );
};

export default Option;


class CustomSelect extends React.Component {
    bindSelectClick(e) {
        e.currentTarget.classList.toggle('active');
    }
    render() {
        const data = this.props.data;
        const list = data.map(
            (index) => (<Option key={index}/>)
        )
        return (
            <div onClick={}>
                <div >{title}</div>
                <div className="oprtion-list">
                    {list}        
                </div>
            </div>
        );
    }
}


export default CustomSelect;