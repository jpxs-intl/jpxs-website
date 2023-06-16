import { Show, type Component, createSignal } from "solid-js";
import Topbar from "./components/Topbar";
import ServerList from "./components/ServerList";
const [isOnServerList, setServerListVisiblity] = createSignal(false);
const [getServerButtonText, setServerButtonText] = createSignal("Server List");
const App: Component = () => {
  return (
    <div>
      <Topbar></Topbar>
      <Show when={!isOnServerList()}>
        <div class="text-4xl ml-4 mt-4">
          <h1 class="text-lightorange inline">jpxs</h1>
          <h2 class="inline">.international</h2>
        </div>
      </Show>
      <Show when={isOnServerList()}>
        <ServerList></ServerList>
      </Show>

      <button
        class="bg-bg px-8 py-2 my-8 mx-2 text-xl"
        onClick={() => {
          setServerListVisiblity(!isOnServerList());
          if (isOnServerList()) {
            setServerButtonText("Go Back");
          } else {
            setServerButtonText("Server List");
          }
        }}
      >
        {getServerButtonText()}
      </button>
    </div>
  );
};

export default App;
