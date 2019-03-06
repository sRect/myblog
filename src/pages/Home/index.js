import React, { lazy } from 'react';
// import Header from '../../components/Header';
// import Main from '../../components/Main';
// const Header = lazy(() => import('../../components/Header')); // 组件懒加载
const Main = lazy(() => import('../../components/Main'));

const Home = () => {
  return (
    <Main />
  );
}

export default Home;
