import * as React from 'react';

import MainBody from './main-body';
import MainHeader from './main-header';
import './main.css';

interface IMainProps {
    login: boolean;
    user: firebase.User | undefined;
}
class MainPage extends React.Component<IMainProps, any> {
    public render() {
        return (
            <div className="main-page">
                <MainHeader login={this.props.login} 
                user={this.props.user}
                />
                <MainBody login={this.props.login} 
                user={this.props.user}
                />
            </div>
        );
    }
}

export default MainPage;