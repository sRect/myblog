import React, { Component, Suspense, lazy } from 'react';
import GlobalStyle from './style.js';
// import Header from '../Header';
// import Main from '../Main';
import Loading from '../Loading';
const Header = lazy(() => import('../Header')); // 组件懒加载
const Main = lazy(() => import('../Main'));


class App extends Component {
  render() {
    return (
      <div className="App">
        <Suspense fallback={<Loading />}>
          {/* <Suspense fallback={<div>loading...</div>}> */}
          <Header />
          <Main />
          <GlobalStyle />
        </Suspense>

      </div>
    );
  }
}

export default App;
