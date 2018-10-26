import * as React from 'react';

import MainBody from './main-body';
import MainHeader from './main-header';
import './main.css';

class MainPage extends React.Component {
    public render() {
        return (
            <div className="main-page">
                <MainHeader />
                <MainBody />
            </div>
        );
    }
}

export default MainPage;