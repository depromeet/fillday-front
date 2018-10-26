import * as React from 'react';

import MainBody from './main-body';
import MainHeader from './main-header';
import './main.css';

interface IMainProps {
    login: boolean;
}
class MainPage extends React.Component<IMainProps, any> {
    public render() {
        return (
            <div className="main-page">
                <MainHeader login={this.props.login} />
                <MainBody login={this.props.login} />
            </div>
        );
    }
}

export default MainPage;