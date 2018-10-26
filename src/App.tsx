import * as React from 'react';
import Header from './components/fixed/header';
import Footer from './components/fixed/footer';
import "./components/fixed/fixed.css";
import MainPage from './components/main';
import ReportPage from './components/report';
import {BrowserRouter as Router, Route} from "react-router-dom";

interface IAppState {
  login: boolean;
}
class App extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.state = {
      login: true
    }
  }
  public onLogin() {
    this.setState({
      login:true
    })
  }
  public onLogout() {
    this.setState({
      login:false
    })
  }
  public render() {
    return (
      <div className="App">
        <Router>
          <Header login={this.state.login} 
            onLogin={this.onLogin}
          />
          <Route exact={true} path="/" component={MainPage}/>
          <Route path="/fillday/report" component={ReportPage}/>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
