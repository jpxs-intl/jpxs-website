import playerImg from "../assets/users-solid.svg";
import gamemodeImg from "../assets/map-solid.svg";
import versionImg from "../assets/code-branch-solid.svg";
import tpsImg from "../assets/microchip-solid.svg";
import customModeImg from "../assets/gamepad-solid.svg";
import { Show } from "solid-js";
function getGameTypeString(gameType: number) {
  return gameType == 4
    ? "World"
    : gameType == 3
    ? "Round"
    : gameType == 7
    ? "Versus"
    : gameType == 2
    ? "Race"
    : gameType == 5
    ? "Eliminator"
    : gameType == 6
    ? "Co-op"
    : "Undefined";
}
export default function Server(props: {
  id: number;
  name: string;
  address: string;
  port: number;
  version: number;
  gameType: number;
  players: number;
  maxPlayers: number;
  build: string;
  tps?: number;
  mode?: { name: string };
  map?: string;
}) {
  return (
    <div class="bg-bg py-1 border-y-[1px] border-black rounded-2xl">
      <div class="px-2">
        <h1 class="text-2xl font-bold glow-small">{props.name}</h1>
        <div class="flex flex-row gap-4">
          <div class="flex flex-row">
            <img src={playerImg} height="24" width="24" alt="Players:"></img>
            <h2 class="px-2">
              {props.players}/{props.maxPlayers}
            </h2>
          </div>
          <Show when={props.mode}>
            <div class="flex flex-row">
              <img
                src={customModeImg}
                height="24"
                width="24"
                alt="Game Mode:"
              ></img>
              <h2 class="px-2">{props.mode?.name}</h2>
            </div>
            <div class="flex flex-row">
              <img
                src={gamemodeImg}
                height="24"
                width="24"
                alt="Game Mode:"
              ></img>
              <h2 class="px-2">{props.map}</h2>
            </div>
          </Show>
          <Show when={!props.mode}>
            <div class="flex flex-row">
              <img
                src={customModeImg}
                height="24"
                width="24"
                alt="Game Mode:"
              ></img>
              <h2 class="px-2">{getGameTypeString(props.gameType)}</h2>
            </div>
            <div class="flex flex-row">
              <img
                src={gamemodeImg}
                height="24"
                width="24"
                alt="Game Mode:"
              ></img>
              <h2 class="px-2">{getGameTypeString(props.gameType)}</h2>
            </div>
          </Show>
          <Show when={props.tps}>
            <div class="flex flex-row">
              <img src={tpsImg} height="24" width="24" alt=""></img>
              <h2 class="px-2">{props.tps?.toFixed(2)} TPS</h2>
            </div>
          </Show>
          <div class="flex flex-row">
            <img src={versionImg} height="16" width="16" alt="Version:"></img>
            <h2
              class="px-2"
              style={`color: hsl(${props.version * 6}, 100%, 60%)`}
            >
              {props.version}
              {props.build}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
