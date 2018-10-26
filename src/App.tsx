import * as React from 'react';
import Header from './components/fixed/header';
import Footer from './components/fixed/footer';
import "./components/fixed/fixed.css";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header login={true}/>
        <Footer />
      </div>
    );
  }
}

export default App;
