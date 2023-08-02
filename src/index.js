import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
// Storeを作成するもの
import { createStore } from 'redux'
// Storeを提供するもの
import { Provider } from 'react-redux'
// 定義したReducer
import todosReducer from './reducers'
// 引数には Reducer と、Redux DevTools を利用可能にするためのものを渡します。

const store = createStore(
  todosReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
