import { createSignal, Show } from "solid-js";
import Player from "./Player";
let [text, setText] = createSignal("");
let [playerInfo, setPlayerInfo] = createSignal();
export default function PlayerSearch() {
  return (
    <div>
      <h1 class="text-2xl py-2 px-2">Player Information</h1>
      <input class="bg-bg mx-2" id="playerSearchInput"></input>
      <button
        onClick={async () => {
          setText(
            encodeURIComponent(
              (document.getElementById("playerSearchInput") as HTMLInputElement)
                .value
            )
          );
          const response = await (await fetch("/api/player/" + text())).json();
          if (response.success) {
            setPlayerInfo(response.players[0]);
            console.log(playerInfo());
          }
        }}
      >
        Search
      </button>
      <Show when={playerInfo()}>
        <Player
          name={playerInfo().name}
          gameId={playerInfo().gameId}
          phoneNumber={playerInfo().phoneNumber}
          firstSeen={new Date(playerInfo().firstSeen)}
          lastSeen={new Date(playerInfo().lastSeen)}
          steamId={playerInfo().steamId}
        ></Player>
      </Show>
    </div>
  );
}
