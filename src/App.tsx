import * as React from 'react';
import MainPage from './components/main';
import ReportPage from './components/report';

class App extends React.Component {
  public render() {
    return (
      <div className="app-main">
        <MainPage />
        <ReportPage />
      </div>
    );
  }
}

export default App;
