import { A, useParams } from "@solidjs/router";
import { createSignal, Show } from "solid-js";
import Player from "../components/Player";
import { Topbar } from "../components/Topbar";
let [text, setText] = createSignal("");
let [playerInfo, setPlayerInfo] = createSignal();
export default function PlayerSearch() {
  const params = useParams();
  if (params.id != undefined) {
    console.log("not undefined, searching using parameter");
    fetch(
      "https://jpxs.international/api/player/" + encodeURIComponent(params.id)
    ).then(function (response) {
      response.json().then(function (json) {
        if (json.success) {
          setPlayerInfo(json.players[0]);
        }
      });
    });
  }
  return (
    <div>
      <Topbar page="Search"></Topbar>
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
          const response = await (
            await fetch("https://jpxs.international/api/player/" + text())
          ).json();
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
      <div class="my-8 mx-2">
        <A href="/" class="bg-bg px-8 py-2  text-xl hover:bg-lightorange">
          Go Back
        </A>
      </div>
    </div>
  );
}
