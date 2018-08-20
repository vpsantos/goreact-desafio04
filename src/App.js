import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';
import './styles/global';

import Header from './components/Header';
import ErrorBox from './components/ErrorBox';

import { Wrapper } from './styles/components';

import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <ErrorBox />
        <Header />
        <Routes />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
