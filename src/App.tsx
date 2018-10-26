import * as React from 'react';
import Header from './components/fixed/header';
import Footer from './components/fixed/footer';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
