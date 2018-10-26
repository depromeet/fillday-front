import * as React from 'react';
import Header from './components/fixed/header';
import Footer from './components/fixed/footer';
import "./App.css";
import "./components/fixed/fixed.css";
import MainPage from './components/main';
import ReportPage from './components/report';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import LoginPage from './components/login';

interface IAppState {
  login: boolean;
}
class App extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.state = {
      login: false
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
          <Header login={this.state.login} />
          <Route exact={true} path="/" 
          render={() => (<MainPage login={this.state.login} />) }/>
          <Route path="/fillday/report" 
          render={() => (
            <ReportPage
            login={this.state.login} />
          )}/>
          <Route path="/fillday/login" 
          render={() => (
            <LoginPage 
            login={this.state.login}
            onLogin={this.onLogin} />
          )} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
