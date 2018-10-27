import * as React from 'react';
import './App.css';
import RecordComponent from './components/record/RecordComponent';


class App extends React.Component {
  public render() {
    return (
      <RecordComponent selectedDate='2018-10-26'/>
    );
  }
}

export default App;
