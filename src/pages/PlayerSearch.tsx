import { A, useNavigate, useParams } from "@solidjs/router";
import { createSignal, Show } from "solid-js";
import Player from "../components/Player";
import Button from "../components/Button";
import { ApiURL } from "../App";
type player = {
  name: string;
  gameId: number;
  phoneNumber: number;
  firstSeen: string;
  lastSeen: string;
  steamId: string;
};

type response =
  | {
      success: true;
      error: string;
      searchMode: string;
      players: {
        0: player;
      };
    }
  | {
      success: false;
      error: string;
      searchMode: string;
    };
const [inputText, setInputText] = createSignal("");
const [errorText, setErrorText] = createSignal("Loading...");
// actually use this to see if the player's been acquired yet.
const [playerSet, setPlayerSet] = createSignal(false);
// necessary to set a placeholder value for the player, otherwise the IDE will bitch about it.
const [playerInfo, setPlayerInfo] = createSignal<player>({
  name: "you should not be seeing this",
  gameId: 69,
  phoneNumber: 420,
  steamId: "1337",
  firstSeen: "2021-01-01T00:00:00.000Z",
  lastSeen: "2021-01-01T00:00:00.000Z",
});
export default function PlayerSearch() {
  const navigate = useNavigate();
  const params = useParams();
  if (params.id != undefined) {
    setInputText(decodeURIComponent(params.id));
    fetch(`${ApiURL}/player/${encodeURIComponent(params.id)}`).then(function (
      response
    ) {
      response.json().then(function (json: response) {
        console.log("gotten");
        if (json.success) {
          console.log(json);
          setPlayerInfo(json.players[0]);
          setPlayerSet(true);
        } else {
          setErrorText(
            "Error fetching this name, try another! (" + json.error + ")"
          );
        }
      });
    });
  }
  return (
    <div class="py-4">
      <div class="flex justify-center">
        <h1 class="text-2xl py-2 px-2">Player Information</h1>
      </div>
      <div class="flex justify-center">
        <div class="flex items-center flex-col gap-6 sm:gap-0 sm:flex-row">
          <Show when={playerSet()}>
            <Player
              name={playerInfo().name}
              gameId={playerInfo().gameId}
              phoneNumber={playerInfo().phoneNumber}
              firstSeen={new Date(playerInfo().firstSeen)}
              lastSeen={new Date(playerInfo().lastSeen)}
              steamId={playerInfo().steamId}
            ></Player>
          </Show>
          <div class={`flex ${playerSet() ? `flex-col` : ``}`}>
            <input
              class="bg-base mx-2"
              id="playerSearchInput"
              value={inputText()}
            ></input>
            <button
              onClick={async () => {
                const val = (
                  document.getElementById(
                    "playerSearchInput"
                  ) as HTMLInputElement
                ).value;
                const valEncoded = encodeURIComponent(val);
                navigate("/player/" + valEncoded);
                setInputText(decodeURIComponent(val));

                fetch(`${ApiURL}/player/${valEncoded}`).then(function (
                  response
                ) {
                  response.json().then(function (json: response) {
                    console.log("gotten");
                    if (json.success) {
                      console.log(json);
                      setPlayerInfo(json.players[0]);
                      setPlayerSet(true);
                    } else {
                      setErrorText(
                        "Error fetching this name, try another! (" +
                          json.error +
                          ")"
                      );
                      setPlayerSet(false);
                    }
                  });
                });
              }}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <Show when={!playerSet() && params.id != undefined}>
        <div class="flex justify-center">
          <h2 class="mx-2">{errorText()}</h2>
        </div>
      </Show>
      <div class="my-8 flex justify-center">
        <Button href="/">Go Back</Button>
      </div>
    </div>
  );
}
