import { Show, type Component, createSignal } from "solid-js";
import { Topbar, setMenuText } from "./components/Topbar";
import ServerList from "./components/ServerList";
import PlayerSearch from "./components/PlayerSearch";
const [isOnServerList, setServerListVisiblity] = createSignal(false);
const [getServerButtonText, setServerButtonText] = createSignal("Server List");
const [isOnPlayerSearch, setPlayerSearchVisibility] = createSignal(false);
const [getPlayerListButtonText, setPlayerListButtonText] =
  createSignal("Player Search");
const App: Component = () => {
  return (
    <div>
      <Topbar></Topbar>
      <Show when={!isOnServerList() && !isOnPlayerSearch()}>
        <div class="text-4xl ml-4 mt-4">
          <h1 class="text-lightorange inline">jpxs</h1>
          <h2 class="inline">.international</h2>
        </div>
      </Show>
      <Show when={isOnServerList()}>
        <ServerList></ServerList>
      </Show>
      <Show when={!isOnPlayerSearch()}>
        <button
          class="bg-bg px-8 py-2 my-8 mx-2 text-xl"
          onClick={() => {
            setServerListVisiblity(!isOnServerList());
            if (isOnServerList()) {
              setMenuText("Server List");
              setServerButtonText("Go Back");
            } else {
              setMenuText("Home");
              setServerButtonText("Server List");
            }
          }}
        >
          {getServerButtonText()}
        </button>
      </Show>
      <Show when={isOnPlayerSearch()}>
        <PlayerSearch></PlayerSearch>
      </Show>
      <Show when={!isOnServerList()}>
        <button
          class="bg-bg px-8 py-2 my-8 mx-2 text-xl"
          onClick={() => {
            setPlayerSearchVisibility(!isOnPlayerSearch());
            if (isOnPlayerSearch()) {
              setMenuText("Player Search");
              setPlayerListButtonText("Go Back");
            } else {
              setMenuText("Home");
              setPlayerListButtonText("Player Search");
            }
          }}
        >
          {getPlayerListButtonText()}
        </button>
      </Show>
    </div>
  );
};

export default App;
