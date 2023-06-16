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
        <h1 class="text-4xl mx-4 mt-2 text-lightorange">jpxs</h1>
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
