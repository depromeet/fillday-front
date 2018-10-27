import * as React from 'react';
import Header from './components/fixed/header';
import Footer from './components/fixed/footer';
import "./App.css";
import "./components/fixed/fixed.css";
import MainPage from './components/main';
import ReportPage from './components/report';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import LoginPage from './components/login';
import firebase from './auth/firebase';
import Setting from './components/setting/Setting';

interface IAppState {
  login: boolean;
  user: firebase.User |undefined  ;
}
class App extends React.Component<any, IAppState> {
  constructor(props: any) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
    this.state = {
      login: false,
      user: undefined,
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
  public componentDidMount() {
    firebase.auth().onAuthStateChanged((user: firebase.User) => {
      if (user) {
        // User is signed in.
        this.setState({
          login:true,
          user
        })
      } else {
        // User is signed out.
        this.setState({
          login:false,
          user: undefined
        })
      }
    });
  }
  public render() {
    return (
      <div className="App">
        <Router>
          <Header login={this.state.login} />
          <Route exact={true} path="/" 
          render={() => (
          <MainPage login={this.state.login} 
          user={this.state.user}
          />
          ) }/>
          <Route path="/fillday/report" 
          render={() => (
            <ReportPage
            user={this.state.user}
            login={this.state.login} />
          )}/>
          <Route path="/fillday/login" 
          render={() => (
            <LoginPage 
            login={this.state.login}
            firebase={firebase}
            onLogin={this.onLogin} />
          )} />
          <Route path="/fillday/setting"
          component={Setting} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
