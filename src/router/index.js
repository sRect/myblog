import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Loading from "../components/Loading";

// const Home = lazy(() => import("../pages/Home"));
// const ArticleCollects = lazy(() => import("../pages/ArticleCollects"));
// const ExperienceRecord = lazy(() => import("../pages/ExperienceRecord"));

import Home from "../pages/Home";
import ArticleCollects from "../pages/ArticleCollects";
import ExperienceRecord from "../pages/ExperienceRecord";

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
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/articleCollects" component={ArticleCollects}></Route>
            <Route exact path="/experienceRecord" component={ExperienceRecord}></Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  )
}

export default RouterConfig;