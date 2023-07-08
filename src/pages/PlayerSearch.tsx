import { A, useParams } from "@solidjs/router";
import { createSignal, Show } from "solid-js";
import Player from "../components/Player";
import { Topbar } from "../components/Topbar";
let [inputText, setInputText] = createSignal("");
let [errorText, setErrorText] = createSignal("Loading...");
let [playerInfo, setPlayerInfo] = createSignal();
export default function PlayerSearch() {
  const params = useParams();
  if (params.id != undefined) {
    setInputText(decodeURIComponent(params.id));
    fetch("/api/player/" + encodeURIComponent(params.id)).then(function (
      response
    ) {
      response.json().then(function (json) {
        if (json.success) {
          setPlayerInfo(json.players[0]);
        } else {
          setErrorText(
            "Error fetching this name, try another! (" + json.error + ")"
          );
        }
      });
    });
  }
  return (
    <div>
      <Topbar page="Search"></Topbar>
      <h1 class="text-2xl py-2 px-2">Player Information</h1>
      <input
        class="bg-bg mx-2"
        id="playerSearchInput"
        value={inputText()}
      ></input>
      <button
        onClick={async () => {
          window.location.replace(
            "/player/" +
              encodeURIComponent(
                (
                  document.getElementById(
                    "playerSearchInput"
                  ) as HTMLInputElement
                ).value
              )
          );
        }}
      >
        Search
      </button>
      <Show when={!playerInfo() && params.id != undefined}>
        <h2 class="mx-2">{errorText()}</h2>
      </Show>
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
