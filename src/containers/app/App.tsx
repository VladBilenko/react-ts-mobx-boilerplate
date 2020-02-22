import { Provider } from 'mobx-react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import stores from '../../stores';
import Routes from '../routes';

class App extends React.Component {
  public render() {
    return (
      <Provider {...stores}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
