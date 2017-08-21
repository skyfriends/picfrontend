import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from '../landing';
import { Provider } from 'react-redux';

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <main>
            <Route exact path="/" component={Landing} />
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
