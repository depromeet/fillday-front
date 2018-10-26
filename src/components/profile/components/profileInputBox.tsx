import * as React from 'react';
const styles = require("./profileInputBox.scss");

interface IProfileInputBoxProps {
    defaultValue: string;
    inputName: string;
    inputType: string;
    onChangeFunc: (value: string) => void;
}

interface IProfileInputBoxState {
    isInputActive: boolean;
}

export default class ProfileInputBox extends React.PureComponent<IProfileInputBoxProps, IProfileInputBoxState> {
    constructor(props: any) {
        super(props);
        this.state = {
            isInputActive: false
        }
    }
    public render() {
        const { defaultValue, inputName, onChangeFunc, inputType } = this.props;
        const { isInputActive } = this.state;
        return (
            <div className={styles.profileInputContainer}>
                <div className={styles.profileInputName}>{inputName}</div>
                <div className={isInputActive ? styles.profileInputWrapper : `${styles.profileInputWrapper} ${styles.inActive}`}>
                    <input
                        className={styles.profileInputBox}
                        onChange={e => {
                            onChangeFunc(e.currentTarget.value);
                        }}
                        value={defaultValue}
                        type={inputType}
                        disabled={!isInputActive}
                    />
                </div>
                <div className={styles.profileInputUpdateBtn} onClick={this.clickUpdateBtn}>수정</div>
            </div>
        );
    }

    private clickUpdateBtn = () => {
        this.setState({
            isInputActive: !this.state.isInputActive
        });
    }
}