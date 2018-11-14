import { Provider } from 'mobx-react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './routes';
import stores from './stores';

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
