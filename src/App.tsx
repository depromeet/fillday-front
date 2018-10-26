import * as React from 'react';
import MainPage from './components/main';
import ReportPage from './components/report';
import {BrowserRouter as Router, Route} from "react-router-dom";

class App extends React.Component {
  public render() {
    return (
      <div className="app-main">
        <Router>
          <Route exact={true} path="/" component={MainPage}/>
          <Route path="/fillday/report" component={ReportPage}/>
        </Router>
      </div>
    );
  }
}

export default App;
