import { type Component, lazy } from "solid-js";
const Home = lazy(() => import("./pages/Home"));
const PlayerSearch = lazy(() => import("./pages/PlayerSearch"));
const ServerList = lazy(() => import("./pages/ServerList"));
const Error = lazy(() => import("./pages/Error"));
import { Router, Route, Routes } from "@solidjs/router";
const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/live" component={ServerList} />
        <Route path="/player/:id?" component={PlayerSearch} />
        <Route path="/error" component={Error} />
      </Routes>
    </Router>
    /*<div>

    </div>*/
  );
};

export default App;
