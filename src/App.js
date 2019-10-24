import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

import TodoList from './components/TodoList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello from Tests Sandbox!</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
