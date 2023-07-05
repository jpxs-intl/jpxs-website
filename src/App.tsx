import { type Component, lazy } from "solid-js";
const Home = lazy(() => import("./components/Home"));
const PlayerSearch = lazy(() => import("./components/PlayerSearch"));
const ServerList = lazy(() => import("./components/ServerList"));
import { Router, Route, Routes } from "@solidjs/router";
const App: Component = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/live" component={ServerList} />
        <Route path="/player" component={PlayerSearch} />
      </Routes>
    </Router>
    /*<div>

    </div>*/
  );
};

export default App;
