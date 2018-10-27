import * as React from 'react';
import './App.css';
import Setting from './components/setting/Setting';
// import RecordComponent from './components/record/RecordComponent';


class App extends React.Component {
  public render() {
    return (
      // <RecordComponent selectedDate='2018-10-26'/>
      <Setting/>
    );
  }
}

export default App;
