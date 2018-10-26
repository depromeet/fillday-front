import * as React from 'react';
import ReportPage from './components/report';
import ProfilePage from './components/profile';
import 'normalize.css';

class App extends React.Component {
  public render() {
    return (
      <div>
        <ProfilePage />
      </div>
    );
  }
}

export default App;
