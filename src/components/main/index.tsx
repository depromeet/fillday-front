import * as React from 'react';

import MainBody from './main-body';
import MainFooter from './main-footer';
import MainHeader from './main-header';
import './main.css';

class MainPage extends React.Component {
    public render() {
        return (
            <div>
                <MainHeader />
                <MainBody />
                <MainFooter />
            </div>
        );
    }
}

export default MainPage;