import React from 'react';
import { Provider } from 'react-redux';
import ReactDom from 'react-dom';
import storeCreate from './lib/store-create';
import App from './component/app';

const store = storeCreate();

class Main extends React.Component {
  render() {
    return <App />;
  }
}

ReactDom.render(<Main />, document.getElementById('root'));
