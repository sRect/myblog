import React, { Suspense, lazy, Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Loading from "../components/Loading";

// const Home = lazy(() => import("../pages/Home"));
// const ArticleCollects = lazy(() => import("../pages/ArticleCollects"));
// const ExperienceRecord = lazy(() => import("../pages/ExperienceRecord"));

import Home from "../pages/Home";
import ArticleCollects from "../pages/ArticleCollects";
import ExperienceRecord from "../pages/ExperienceRecord";
const Header = lazy(() => import('../components/Header')); // 组件懒加载

// class RouterConfig extends Component {
//   render() {
//     return (
//       <div>
//         <Suspense fallback={<Loading />}>
//           <BrowserRouter>
//             <Switch>
//               <Route exact path="/" component={Home}></Route>
//               <Route exact path="/articleCollects" component={ArticleCollects}></Route>
//               <Route exact path="/experienceRecord" component={ExperienceRecord}></Route>
//             </Switch>
//           </BrowserRouter>
//         </Suspense>
//       </div>
//     )
//   }
// }

const RouterConfig = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <div className="App">
          <BrowserRouter>
            <Fragment>
              <Header />
              <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/articleCollects" component={ArticleCollects}></Route>
                <Route exact path="/experienceRecord" component={ExperienceRecord}></Route>
                <Redirect from="*" to="/"></Redirect>
              </Switch>
            </Fragment>
          </BrowserRouter>
        </div>
      </Suspense>
    </div>
  )
}

export default RouterConfig;