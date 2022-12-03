import React from 'react';
import './App.css';
import HomePage from 'pages/Home';
import { Provider } from 'react-redux';
import store from 'redux/store';

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <HomePage />
      </Provider>

    </div>
  );
};

export default App;
