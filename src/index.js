import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import store from './store';
import 'reset-css';
import GlobalStyle from "./components/GlobalStyle";
import RouterConfig from "./router";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <LocaleProvider locale={zh_CN}>
      <Fragment>
        <RouterConfig />
        <GlobalStyle />
      </Fragment>
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
