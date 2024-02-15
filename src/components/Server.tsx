import playerImg from "../assets/users-solid.svg";
import gamemodeImg from "../assets/map-solid.svg";
import versionImg from "../assets/code-branch-solid.svg";
import tpsImg from "../assets/microchip-solid.svg";
import customModeImg from "../assets/gamepad-solid.svg";
import { Show } from "solid-js";
import { server } from "../pages/ServerList";
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
function getMapFromGameType(gameType: number) {
  return gameType == 4 ? "test2" : "Round";
}
export default function Server(props: { server: server }) {
  return (
    <div class="bg-crust py-1 border-y-[1px] border-crust rounded-2xl">
      <a href={props.server.link}>
        <div class="px-2">
          <h1 class="text-2xl font-bold glow-small block">
            <Show when={props.server.icon}>
              <img
                src={props.server.icon}
                class="aspect-square w-auto h-8 rounded-full mr-2 inline"
              ></img>
            </Show>
            {props.server.name}
          </h1>
          <div class={"flex flex-row gap-4"}>
            <div class={"flex flex-row gap-x-4"}>
              <div class="flex flex-row">
                <img
                  src={playerImg}
                  class="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]"
                  alt="Players:"
                ></img>
                <h2 class="text-sm sm:px-2 sm:text-lg">
                  {props.server.players}/{props.server.maxPlayers}
                </h2>
              </div>
              <Show when={props.server.customMode}>
                <div class="flex flex-row">
                  <img
                    src={customModeImg}
                    class="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]"
                    alt="Game Mode:"
                  ></img>
                  <h2 class="text-sm sm:px-2 sm:text-lg">
                    {props.server.customMode?.name}
                  </h2>
                </div>
                <div class="flex flex-row">
                  <img
                    src={gamemodeImg}
                    class="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]"
                    alt="Game Mode:"
                  ></img>
                  <h2 class="text-sm sm:px-2 sm:text-lg">
                    {props.server.map?.toLowerCase()}
                  </h2>
                </div>
              </Show>
              <Show when={!props.server.customMode}>
                <div class="flex flex-row">
                  <img
                    src={customModeImg}
                    class="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]"
                    alt="Game Mode:"
                  ></img>
                  <h2 class="text-sm sm:px-2 sm:text-lg">
                    {getGameTypeString(props.server.gameType)}
                  </h2>
                </div>
                <div class="flex flex-row">
                  <img
                    src={gamemodeImg}
                    class="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]"
                    alt="Game Mode:"
                  ></img>
                  <h2 class="text-sm sm:px-2 sm:text-lg">
                    {getMapFromGameType(props.server.gameType).toLowerCase()}
                  </h2>
                </div>
              </Show>
              <Show when={props.server.tps}>
                <div class="flex flex-row">
                  <img
                    src={tpsImg}
                    class="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]"
                    alt=""
                  ></img>
                  <h2 class="text-sm sm:px-2 sm:text-lg">
                    {props.server.tps?.toFixed(2)} TPS
                  </h2>
                </div>
              </Show>
              <div class="flex flex-row">
                <img
                  src={versionImg}
                  height="16"
                  width="16"
                  alt="Version:"
                ></img>
                <h2
                  class="text-sm sm:px-2 sm:text-lg"
                  style={`color: hsl(${props.server.version * 6}, 100%, 60%)`}
                >
                  {props.server.version}
                  {props.server.build}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
